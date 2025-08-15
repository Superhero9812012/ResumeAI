import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function POST(request: NextRequest) {
    try {
        const { achievementText, targetRole } = await request.json();

        if (!achievementText || !targetRole) {
            return NextResponse.json({ error: 'Achievement text and target role are required' }, { status: 400 });
        }

        const prompt = `
            You are a top-tier technical resume strategist. Your goal is to transform a standard resume bullet point into a unique, high-impact achievement for a "${targetRole}" resume. Avoid generic, repetitive phrases.

            **Here is your thought process:**
            1.  **Analyze:** Identify the core task and purpose within the "Original Achievement". What was actually done?
            2.  **Quantify:** Brainstorm a specific, believable metric that demonstrates the value of this task (e.g., a percentage, time reduction, user growth, revenue increase).
            3.  **Specify Tech:** Infer and include 1-2 plausible key technologies that would be used for this specific task.
            4.  **Draft:** Create 2-3 distinct versions of the rewritten bullet point, each emphasizing a different angle (e.g., user impact, technical complexity, business value).
            5.  **Select & Finalize:** Choose the single most compelling and specific version as your final answer.

            **DETAILS FOR YOUR ANALYSIS:**
            - Original Achievement: "${achievementText}"

            **WHAT TO AVOID (CRITICAL):**
            - Do not use vague phrases like "improved efficiency", "enhanced performance", "responsible for", or "contributed to". Be specific about *what* was improved and *how*.
            - Do not create a generic sentence that could apply to any achievement. The output must be tailored to the provided details.

            **FINAL OUTPUT INSTRUCTIONS:**
            - The final output must be a single sentence with a maximum of 250 characters.
            - Return ONLY the single best rewritten sentence you selected. Do not include your thought process, explanations, markdown, or any other text.
        `;

        const model = genAI.getGenerativeModel({
            model: "gemini-1.5-flash",
            generationConfig: {
                temperature: 0.9,
            }
        });

        const result = await model.generateContent(prompt);
        let optimizedText = result.response.text().trim();

        if (optimizedText.length > 250) {
            optimizedText = optimizedText.substring(0, 247) + '...';
        }

        if (!optimizedText) {
            return NextResponse.json({ error: 'The AI failed to generate an optimized achievement.' }, { status: 500 });
        }

        return NextResponse.json({ optimizedText }, { status: 200 });

    } catch (error: any) {
        console.error('[API OPTIMIZE-ACHIEVEMENT ERROR]', error);
        return NextResponse.json({ error: 'Failed to optimize achievement.' }, { status: 500 });
    }
}