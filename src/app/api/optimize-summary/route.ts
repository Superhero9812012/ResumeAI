import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function POST(request: NextRequest) {
    try {
        const { originalText, role } = await request.json();

        if (!originalText || !role) {
            return NextResponse.json({ error: 'Original text and target role are required' }, { status: 400 });
        }

        const prompt = `
            Rewrite the following professional summary for a "${role}" position, following strict rules.

            Original Summary: "${originalText}"

            CRITICAL REQUIREMENTS:
            1. WORD COUNT: The summary MUST be between 60 and 80 words. DO NOT EXCEED 80 words.
            2. SENTENCE COUNT: Use 4 to 5 concise sentences.
            3. CONTENT: Start with a professional title and years of experience. Include key skills and at least one quantifiable achievement.
            4. FORMAT: Output ONLY the rewritten paragraph. No titles, markdown, or explanations.
        `;

        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const result = await model.generateContent(prompt);
        const newSummaryText = result.response.text().trim();

        if (!newSummaryText) {
            return NextResponse.json({ error: 'The AI failed to generate an optimized summary.' }, { status: 500 });
        }

        return NextResponse.json({ optimizedText: newSummaryText }, { status: 200 });

    } catch (error: any) {
        console.error('[API OPTIMIZE-SUMMARY ERROR]', error);
        return NextResponse.json({ error: 'Failed to optimize summary.' }, { status: 500 });
    }
}