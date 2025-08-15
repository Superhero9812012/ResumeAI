// // import { NextRequest, NextResponse } from 'next/server';
// // import { GoogleGenerativeAI } from '@google/generative-ai';

// // const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

// // export async function POST(request: NextRequest) {
// //     try {
// //         const { resumeJson, targetRole } = await request.json();

// //         if (!resumeJson || !targetRole) {
// //             return NextResponse.json({ error: 'Full resume JSON and target role are required.' }, { status: 400 });
// //         }

// //         const resumeText = JSON.stringify(resumeJson);

// //         const prompt = `
// //             You are a world-class resume analyzer and career coach AI. Your task is to perform a comprehensive analysis of the provided resume JSON for a candidate targeting a "${targetRole}" position.

// //             **Resume for Analysis (JSON format):**
// //             \`\`\`json
// //             ${resumeText}
// //             \`\`\`

// //             **Perform the following analysis and return the results in a single, valid JSON object. Do not add any other text or explanations.**

// //             **JSON OUTPUT SCHEMA:**
// //             \`\`\`json
// //             {
// //                 "keywordAnalysis": {
// //                     "missing": ["string"],
// //                     "present": ["string"],
// //                     "suggested": ["string"],
// //                     "score": "number (0-100)"
// //                 },
// //                 "atsAnalysis": {
// //                     "score": "number (0-100)",
// //                     "issues": [
// //                     { "type": "warning" | "info", "message": "string", "section": "string" }
// //                     ],
// //                     "improvements": ["string"]
// //                 },
// //                 "optimizationSuggestions": {
// //                     "optimizedSummary": "string (A rewritten, enhanced professional summary)",
// //                     "optimizedExperience": [
// //                     { "id": "number (must match original ID)", "title": "string", "company": "string", "location": "string", "period": "string", "achievements": ["string (rewritten and quantified achievements)"] }
// //                     ]
// //                 }
// //             }
// //             \`\`\`

// //             **ANALYSIS INSTRUCTIONS:**
// //             1.  **Keyword Analysis:**
// //                 - Identify technical keywords and soft skills present in the resume.
// //                 - Compare them to a list of critical keywords for a "${targetRole}".
// //                 - Populate "missing", "present", and suggest 2-3 new "suggested" keywords.
// //                 - Provide a keyword score out of 100.
// //             2.  **ATS Analysis:**
// //                 - Check for common ATS parsing issues (e.g., non-standard formatting, lack of keywords).
// //                 - Provide a compatibility score out of 100.
// //                 - List 2-3 specific "issues" with a type, message, and section.
// //                 - List 2-3 actionable "improvements".
// //             3.  **Optimization Suggestions:**
// //                 - **Rewrite the entire summary** to be more impactful, incorporating action verbs and metrics.
// //                 - For **each experience entry**, rewrite all achievement bullet points to be more impactful by adding metrics and strong action verbs. Ensure the 'id' of each experience entry in the output matches the 'id' from the input.
// //         `;

// //         const model = genAI.getGenerativeModel({
// //             model: "gemini-1.5-flash",
// //             generationConfig: {
// //                 responseMimeType: "application/json",
// //                 temperature: 0.5
// //             }
// //         });

// //         const result = await model.generateContent(prompt);
// //         const analysisText = result.response.text();

// //         if (!analysisText) {
// //             return NextResponse.json({ error: 'The AI failed to analyze the resume.' }, { status: 500 });
// //         }

// //         const analysisJson = JSON.parse(analysisText);
// //         return NextResponse.json({ analysis: analysisJson }, { status: 200 });

// //     } catch (error: any) {
// //         console.error('[API ANALYZE-RESUME ERROR]', error);
// //         return NextResponse.json({ error: 'Failed to analyze resume.' }, { status: 500 });
// //     }
// // }

// import { NextRequest, NextResponse } from 'next/server';
// import { GoogleGenerativeAI } from '@google/generative-ai';

// const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

// /**
//  * A simple utility to repair common JSON errors from LLMs.
//  * It can fix missing closing brackets/braces and remove trailing commas.
//  * @param text The potentially malformed JSON string.
//  * @returns A repaired JSON string.
//  */
// function repairJson(text: string): string {
//     let repaired = text.trim();

//     // Count open and close braces/brackets
//     const openBraces = (repaired.match(/{/g) || []).length;
//     const closeBraces = (repaired.match(/}/g) || []).length;
//     const openBrackets = (repaired.match(/\[/g) || []).length;
//     const closeBrackets = (repaired.match(/\]/g) || []).length;

//     // Add missing closing brackets
//     for (let i = 0; i < openBrackets - closeBrackets; i++) {
//         repaired += ']';
//     }

//     // Add missing closing braces
//     for (let i = 0; i < openBraces - closeBraces; i++) {
//         repaired += '}';
//     }

//     // Remove trailing commas before closing brackets/braces
//     repaired = repaired.replace(/,\s*([}\]])/g, '$1');

//     return repaired;
// }


// export async function POST(request: NextRequest) {
//     try {
//         const { resumeJson, targetRole } = await request.json();

//         if (!resumeJson || !targetRole) {
//             return NextResponse.json({ error: 'Full resume JSON and target role are required.' }, { status: 400 });
//         }

//         const resumeText = JSON.stringify(resumeJson, null, 2);

//         const prompt = `
//             Analyze the following resume JSON for a "${targetRole}" position.

//             Resume JSON:
//             ${resumeText}

//             Your task is to return a single, valid JSON object with the following structure. Do not add any text outside of the JSON object.

//             {
//               "keywordAnalysis": { "missing": ["string"], "present": ["string"], "suggested": ["string"], "score": 0 },
//               "atsAnalysis": { "score": 0, "issues": [{ "type": "warning", "message": "string", "section": "string" }], "improvements": ["string"] },
//               "optimizationSuggestions": { "optimizedSummary": "string", "optimizedExperience": [{ "id": 0, "title": "string", "company": "string", "location": "string", "period": "string", "achievements": ["string"] }] }
//             }

//             Instructions:
//             - Keyword Analysis: Identify keywords present in the resume, find missing keywords for the target role, and provide a score.
//             - ATS Analysis: Find ATS issues and suggest improvements, then provide a score.
//             - Optimization Suggestions: Rewrite the summary and all experience achievements to be more impactful, adding metrics and strong action verbs. Match the 'id' of each experience entry to the input.
//         `;

//         const model = genAI.getGenerativeModel({
//             model: "gemini-1.5-flash",
//             generationConfig: {
//                 responseMimeType: "application/json",
//                 temperature: 0.3 // Reduced temperature for more stable JSON output
//             }
//         });

//         const result = await model.generateContent(prompt);
//         const analysisText = result.response.text();

//         if (!analysisText) {
//             return NextResponse.json({ error: 'The AI returned an empty response.' }, { status: 500 });
//         }

//         try {
//             // **NEW:** First, try to repair the JSON string
//             const repairedText = repairJson(analysisText);
//             const analysisJson = JSON.parse(repairedText);
//             return NextResponse.json({ analysis: analysisJson }, { status: 200 });
//         } catch (error) {
//             console.error('[API ANALYZE-RESUME ERROR] Failed to parse even after repair:', error);
//             console.error('--- Original Faulty AI Response ---', analysisText);
//             return NextResponse.json({ error: 'The AI returned a malformed JSON response that could not be repaired.' }, { status: 500 });
//         }

//     } catch (error: any) {
//         console.error('[API ANALYZE-RESUME ERROR]', error);
//         return NextResponse.json({ error: 'Failed to analyze resume.' }, { status: 500 });
//     }
// }


import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

function repairJson(text: string): string {
    let repaired = text.trim();
    const openBraces = (repaired.match(/{/g) || []).length;
    const closeBraces = (repaired.match(/}/g) || []).length;
    const openBrackets = (repaired.match(/\[/g) || []).length;
    const closeBrackets = (repaired.match(/\]/g) || []).length;
    for (let i = 0; i < openBrackets - closeBrackets; i++) { repaired += ']'; }
    for (let i = 0; i < openBraces - closeBraces; i++) { repaired += '}'; }
    repaired = repaired.replace(/,\s*([}\]])/g, '$1');
    return repaired;
}

export async function POST(request: NextRequest) {
    try {
        const { resumeJson, targetRole } = await request.json();

        if (!resumeJson || !targetRole) {
            return NextResponse.json({ error: 'Full resume JSON and target role are required.' }, { status: 400 });
        }

        const resumeText = JSON.stringify(resumeJson, null, 2);

        const prompt = `
            You are a world-class resume analyzer AI. Analyze the provided resume JSON for a "${targetRole}" position and return a single, valid JSON object with the specified schema. Do not add any text outside the JSON.

            **Resume for Analysis:**
            ${resumeText}

            **JSON OUTPUT SCHEMA TO POPULATE:**
            \`\`\`json
            {
                "overallScore": 0,
                "strengths": ["string"],
                "improvements": ["string"],
                "competitorAnalysis": {
                    "averageExperience": "string (e.g., '3-5 years')",
                    "commonSkills": ["string"],
                    "standoutFeatures": ["string"],
                    "suggestions": ["string"]
                },
                "keywordAnalysis": {
                    "missing": ["string"],
                    "present": ["string"],
                    "suggested": ["string"],
                    "score": 0
                },
                "atsAnalysis": {
                    "score": 0,
                    "issues": [{ "type": "warning", "message": "string", "section": "string" }]
                },
                "optimizationSuggestions": {
                    "summary": {
                    "before": "string (The original summary from the input)",
                    "after": "string (The rewritten, enhanced professional summary)",
                    "improvements": ["string (e.g., 'Added quantified metrics')"]
                    },
                    "experience": {
                    "optimized": [{ "id": 0, "title": "string", "company": "string", "location": "string", "period": "string", "achievements": ["string (rewritten achievements)"] }],
                    "improvements": ["string (e.g., 'Enhanced impact statements')"]
                    },
                    "keywords": {
                        "added": ["string (the 'missing' keywords from above)"],
                        "score": 0
                    }
                }
                }
            \`\`\`

            **Instructions:**
            1.  **Scores:** Calculate 'overallScore', 'keywordAnalysis.score', and 'atsAnalysis.score' from 0-100 based on the resume's quality for the target role.
            2.  **Strengths/Improvements:** Identify 2-3 key strengths and areas for improvement.
            3.  **Competitor Analysis:** Based on typical "${targetRole}" resumes, provide market analysis.
            4.  **Keywords:** Find missing, present, and suggest new keywords.
            5.  **ATS:** Find 2-3 specific ATS issues.
            6.  **Optimization:** Rewrite the summary and all experience achievements to be more impactful. Match the experience 'id's. Populate 'optimizationSuggestions.summary.before' with the original summary. Populate 'optimizationSuggestions.keywords.added' with the same list as 'keywordAnalysis.missing'. Set 'optimizationSuggestions.keywords.score' to the new score.
        `;

        const model = genAI.getGenerativeModel({
            model: "gemini-1.5-flash",
            generationConfig: { responseMimeType: "application/json", temperature: 0.4 }
        });

        const result = await model.generateContent(prompt);
        const analysisText = result.response.text();

        if (!analysisText) {
            return NextResponse.json({ error: 'The AI returned an empty response.' }, { status: 500 });
        }

        try {
            const repairedText = repairJson(analysisText);
            const analysisJson = JSON.parse(repairedText);
            return NextResponse.json({ analysis: analysisJson }, { status: 200 });
        } catch (error) {
            console.error('[API ANALYZE-RESUME ERROR] Failed to parse JSON:', error);
            console.error('--- Faulty AI Response ---', analysisText);
            return NextResponse.json({ error: 'The AI returned a malformed response.' }, { status: 500 });
        }

    } catch (error: any) {
        console.error('[API ANALYZE-RESUME ERROR]', error);
        return NextResponse.json({ error: 'Failed to analyze resume.' }, { status: 500 });
    }
}