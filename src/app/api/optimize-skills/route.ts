import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function POST(request: NextRequest) {
    try {
        const { resumeJson, targetRole } = await request.json();

        if (!resumeJson || !targetRole) {
            return NextResponse.json({ error: 'Full resume JSON and target role are required.' }, { status: 400 });
        }

        // Convert the JSON object to a string for the AI to parse
        const resumeText = JSON.stringify(resumeJson);

        const prompt = `
            You are an expert technical skill extractor for resumes. Your task is to analyze the complete resume text provided below and generate a structured JSON object of all technical skills.

            **Resume Text for Analysis:**
            \`\`\`
            ${resumeText}
            \`\`\`

            **Target Role:** "${targetRole}"

            **CRITICAL INSTRUCTIONS:**
            1.  **Extract All Skills:** Thoroughly scan the summary, experience, and projects sections for every technology, framework, language, database, platform, tool, and methodology mentioned.
            2.  **Categorize:** Organize the extracted skills into the following specific categories. Do not create new categories.
                - "Languages & Frameworks"
                - "Databases"
                - "Cloud & DevOps"
                - "Tools & Platforms"
                - "Core Concepts & Methodologies"
            3.  **Suggest New Skills:** Based on the existing skills and the target role of "${targetRole}", suggest 2-3 additional, highly relevant skills that are missing but would strengthen the resume. Add them to the appropriate categories.
            4.  **De-duplicate:** Ensure there are no duplicate skills within or across categories.
            5.  **OUTPUT FORMAT:** Return ONLY a single, valid JSON object that follows this exact structure. Do not add explanations or markdown.
            
            **Example JSON Output Structure:**
            \`\`\`json
            {
                "Languages & Frameworks": ["JavaScript", "TypeScript", "React.js", "Node.js", "Python"],
                "Databases": ["PostgreSQL", "MongoDB", "Redis"],
                "Cloud & DevOps": ["AWS", "Docker", "Kubernetes", "CI/CD"],
                "Tools & Platforms": ["Git", "Jira", "Postman"],
                "Core Concepts & Methodologies": ["Agile", "Scrum", "REST APIs", "Microservices"]
            }
            \`\`\`
        `;

        const model = genAI.getGenerativeModel({
            model: "gemini-1.5-flash",
            generationConfig: {
                responseMimeType: "application/json",
                temperature: 0.2 // Lower temperature for more deterministic categorization
            }
        });

        const result = await model.generateContent(prompt);
        const responseText = result.response.text();

        if (!responseText) {
            return NextResponse.json({ error: 'The AI failed to generate skills.' }, { status: 500 });
        }

        let optimizedSkills;
        try {
            optimizedSkills = JSON.parse(responseText);
        } catch (e) {
            console.error("Failed to parse skills JSON from AI:", responseText);
            return NextResponse.json({ error: 'The AI returned an invalid format.' }, { status: 500 });
        }

        return NextResponse.json({ optimizedSkills }, { status: 200 });

    } catch (error: any) {
        console.error('[API OPTIMIZE-SKILLS ERROR]', error);
        return NextResponse.json({ error: 'Failed to optimize skills.' }, { status: 500 });
    }
}