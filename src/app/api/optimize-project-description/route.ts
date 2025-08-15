import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function POST(request: NextRequest) {
    try {
        const { descriptionText, projectTitle, targetRole, technologies, existingDescriptions } = await request.json();

        if (!descriptionText || !projectTitle || !targetRole || !technologies || !existingDescriptions) {
            
            return NextResponse.json({ error: 'All fields (description, title, role, technologies, existing descriptions) are required' }, { status: 400 });
        }

        const prompt = `
            You are a top-tier technical resume strategist. Your primary goal is to rewrite a project bullet point to be unique and impactful, ensuring it does not repeat the style or verbs of existing bullet points for the same project.

            **Your Thought Process:**
            1.  **Review Context:** First, analyze the "Existing Bullet Points" to understand what action verbs and sentence structures have already been used.
            2.  **Analyze Input:** Now, identify the core task in the "Original Bullet Point".
            3.  **Select a UNIQUE Verb:** Choose a powerful action verb that has NOT been used in the "Existing Bullet Points". Use the suggested list for inspiration.
            4.  **Quantify:** Brainstorm a specific, believable metric for the task.
            5.  **Specify Tech:** Select 1-2 relevant technologies from the provided list.
            6.  **Draft & Finalize:** Combine these elements into a compelling sentence that is distinct from the others.

            **PROJECT DETAILS FOR YOUR ANALYSIS:**
            - Project Title: "${projectTitle}"
            - Technologies Used: [${technologies.join(', ')}]
            - Original Bullet Point to Rewrite: "${descriptionText}"
            - Existing Bullet Points (for context and to avoid repetition): ${existingDescriptions.length > 0 ? JSON.stringify(existingDescriptions) : "None"}

            **SUGGESTED ACTION VERBS (CHOOSE A VARIED ONE):**
            Engineered, Architected, Implemented, Automated, Optimized, Refactored, Integrated, Deployed, Spearheaded, Standardized, Scaled, Secured, Launched, Modernized, Revamped, Streamlined.

            **WHAT TO AVOID (CRITICAL):**
            - **Do not repeat action verbs** or sentence structures from the "Existing Bullet Points".
            - Do not use vague phrases like "improved efficiency" or "responsible for".

            **FINAL OUTPUT INSTRUCTIONS:**
            - The final output must be a single sentence with a maximum of 250 characters.
            - Return ONLY the single best rewritten sentence. Do not include your thought process or any other text.
        `;

        const model = genAI.getGenerativeModel({
            model: "gemini-1.5-flash",
            generationConfig: {
                temperature: 0.95,
            }
        });

        const result = await model.generateContent(prompt);
        let optimizedText = result.response.text().trim();

        if (optimizedText.length > 250) {
            optimizedText = optimizedText.substring(0, 247) + '...';
        }

        if (!optimizedText) {
            return NextResponse.json({ error: 'The AI failed to generate an optimized description.' }, { status: 500 });
        }

        return NextResponse.json({ optimizedText }, { status: 200 });

    } catch (error: any) {
        console.error('[API OPTIMIZE-PROJECT-DESC ERROR]', error);
        return NextResponse.json({ error: 'Failed to optimize project description.' }, { status: 500 });
    }
}