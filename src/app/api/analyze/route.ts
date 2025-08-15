

// // app/api/analyze/route.ts

// import { GoogleGenerativeAI } from '@google/generative-ai';
// import { NextRequest, NextResponse } from 'next/server';

// const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');
// const model = genAI.getGenerativeModel({
//     model: 'gemini-1.5-flash',
//     generationConfig: { responseMimeType: 'application/json' },
// });

// async function retryWithExponentialBackoff<T>(
//     fn: () => Promise<T>,
//     retries = 3,
//     delay = 1000
// ): Promise<T> {
//     try {
//         return await fn();
//     } catch (error) {
//         if (retries <= 0) {
//             throw error;
//         }
//         console.warn(`Retrying... attempts left: ${retries - 1}`);
//         await new Promise((res) => setTimeout(res, delay));
//         return retryWithExponentialBackoff(fn, retries - 1, delay * 2);
//     }
// }

// function extractJsonFromString(text: string): string {
//     const startIndex = text.indexOf('{');
//     const endIndex = text.lastIndexOf('}');
//     if (startIndex === -1 || endIndex === -1 || endIndex < startIndex) {
//         throw new Error('Could not find a valid JSON object in the AI response.');
//     }
//     return text.substring(startIndex, endIndex + 1);
// }

// function getAnalysisPrompt(resumeText: string, jobDescription: string, selectedRole: string): string {
//     return `
//     You are an expert AI-powered career coach and professional resume screener. Your task is to analyze a provided resume text against a job description and return a detailed, structured analysis in JSON format.

//     **CRITICAL INSTRUCTION:** Your entire response MUST be a single, raw JSON object. Do not include any markdown formatting like \`\`\`json, any introductory text, or any explanations. The response must start with '{' and end with '}'.

//     **THE JSON STRUCTURE MUST BE EXACTLY AS FOLLOWS:**
//     {
//       "resumeData": { ... The parsed resume data ... },
//       "analysisResult": { ... The analysis result ... }
//     }

//     **Input for Analysis:**
//     1.  **Resume Text:** The full text extracted from a user's resume.
//     2.  **Job Description:** The full text of the job description the user is targeting.
//     3.  **Target Role:** The job title the user is targeting.

//     **Detailed Instructions & TypeScript Interfaces for the JSON content:**

//     1.  **"resumeData" Object:**
//         - Meticulously parse the resume text to populate this object. Be accurate. If information is missing, use "Not specified" or an empty array.
//         - Estimate 'yearsOfExperience' from dates. For 'level' in skills, estimate proficiency from 1-100 based on context.
//         - Interface: \`interface ResumeData { personalInfo: { name: string; email: string; phone: string; location: string; }; summary: string; experience: Array<{ title: string; company: string; duration: string; description: string; yearsOfExperience: number; }>; education: Array<{ degree: string; institution: string; year: string; gpa?: string; }>; skills: Array<{ name: string; level: number; category: 'Programming' | 'Frontend' | 'Backend' | 'Database' | 'Cloud' | 'Tools' | 'Methodology' | 'Soft Skills' | 'Other'; }>; certifications: string[]; projects?: Array<{ name: string; description: string; technologies: string[]; }>; }\`

//     2.  **"analysisResult" Object:**
//         - Critically compare the parsed 'resumeData' against the job description and role.
//         - Generate all scores (1-100) based on your expert analysis. 'overallScore' should be a weighted average. 'matchPercentage' should reflect alignment with the job description.
//         - Extract key skills from the job description to populate 'keywordMatches' and 'missingKeywords'.
//         - Provide 3-5 concise, insightful, and actionable points for 'strengths' and 'improvements'.
//         - Based on the entire analysis, provide a final 'recommendation'.
//         - Interface: \`interface AnalysisResult { overallScore: number; matchPercentage: number; strengths: string[]; improvements: string[]; keywordMatches: string[]; missingKeywords: string[]; recommendation: 'STRONG_FIT' | 'GOOD_FIT' | 'MODERATE_FIT' | 'POOR_FIT'; experienceScore: number; skillsScore: number; educationScore: number; certificationsScore: number; detailedAnalysis: { technicalSkills: number; softSkills: number; domainExpertise: number; leadership: number; }; }\`

//     **Data to be Analyzed:**

//     **Resume Text:**
//     ---
//     ${resumeText}
//     ---

//     **Job Description:**
//     ---
//     ${jobDescription || `No job description provided. Analyze for a general ${selectedRole} position.`}
//     ---

//     **Target Role:**
//     ${selectedRole}

//     Now, generate the complete, raw JSON response following the specified structure.
//     `;
// }


// export async function POST(request: NextRequest) {
//     let rawText: string | undefined = undefined;

//     try {
//         if (!process.env.GEMINI_API_KEY) {
//             console.error('CRITICAL: GEMINI_API_KEY environment variable is not set on the server.');
//             throw new Error('Server is not configured correctly. Missing API key.');
//         }

//         const body = await request.json();
//         const { resumeText, jobDescription, selectedRole } = body;

//         if (!resumeText || !selectedRole) {
//             return NextResponse.json({ error: 'Resume text and selected role are required.' }, { status: 400 });
//         }

//         const prompt = getAnalysisPrompt(resumeText, jobDescription, selectedRole);

//         const result = await retryWithExponentialBackoff(() => model.generateContent(prompt));
//         rawText = result.response.text();

//         const jsonText = extractJsonFromString(rawText);
//         const parsedData = JSON.parse(jsonText);

//         // *** NEW VALIDATION STEP ***
//         if (!parsedData.resumeData || !parsedData.analysisResult) {
//             console.error("AI returned valid JSON but with missing required properties.", parsedData);
//             throw new Error("AI returned an incomplete data structure.");
//         }

//         return NextResponse.json(parsedData);

//     } catch (error: any) {
//         console.error('Error in /api/analyze:', error.message);
//         if (rawText) {
//             console.error('--- Raw AI Response that may have caused the error ---');
//             console.error(rawText);
//             console.error('----------------------------------------------------');
//         }

//         if (error.message.includes('Missing API key')) {
//             return NextResponse.json({ error: 'Server configuration error: Invalid or missing API key.' }, { status: 500 });
//         }

//         if (error instanceof SyntaxError || error.message.includes('Could not find a valid JSON object') || error.message.includes('incomplete data structure')) {
//             return NextResponse.json({ error: 'The AI failed to generate a valid analysis. This can happen with very complex or unusually formatted resumes. Please try again.' }, { status: 500 });
//         }

//         return NextResponse.json({ error: 'An unexpected server error occurred.', details: error.message }, { status: 500 });
//     }
// }


// app/api/analyze/route.ts

import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextRequest, NextResponse } from 'next/server';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');
const model = genAI.getGenerativeModel({
    model: 'gemini-1.5-flash',
    generationConfig: { responseMimeType: 'application/json' },
});

async function retryWithExponentialBackoff<T>(
    fn: () => Promise<T>,
    retries = 3,
    delay = 1000
): Promise<T> {
    try {
        return await fn();
    } catch (error) {
        if (retries <= 0) {
            throw error;
        }
        console.warn(`Retrying... attempts left: ${retries - 1}`);
        await new Promise((res) => setTimeout(res, delay));
        return retryWithExponentialBackoff(fn, retries - 1, delay * 2);
    }
}

/**
 * A highly robust function to find and combine the 'resumeData' and 'analysisResult' JSON objects from a raw string.
 * This handles cases where the AI incorrectly wraps or separates the JSON.
 * @param text The raw string response from the AI.
 * @returns A string containing a single, valid, combined JSON object.
 * @throws An error if the required JSON objects cannot be found and combined.
 */
function findAndCombineJson(text: string): string {
    // Regular expressions to find the two main JSON objects.
    // They look for the key and then use a greedy match for the object content.
    const resumeDataRegex = /"resumeData"\s*:\s*({(?:[^{}]|{[^{}]*})*})/;
    const analysisResultRegex = /"analysisResult"\s*:\s*({(?:[^{}]|{[^{}]*})*})/;

    const resumeDataMatch = text.match(resumeDataRegex);
    const analysisResultMatch = text.match(analysisResultRegex);

    if (resumeDataMatch && resumeDataMatch[1] && analysisResultMatch && analysisResultMatch[1]) {
        // If both objects are found, combine them into a single valid JSON string.
        const resumeDataJson = resumeDataMatch[0]; // Includes the key
        const analysisResultJson = analysisResultMatch[0]; // Includes the key

        // Construct the final, correct JSON string
        return `{${resumeDataJson},${analysisResultJson}}`;
    }

    // Fallback to the original method if regex fails, just in case.
    const startIndex = text.indexOf('{');
    const endIndex = text.lastIndexOf('}');
    if (startIndex !== -1 && endIndex !== -1 && endIndex > startIndex) {
        return text.substring(startIndex, endIndex + 1);
    }

    throw new Error("Could not find or combine 'resumeData' and 'analysisResult' objects in the AI response.");
}


// getAnalysisPrompt remains the same.
function getAnalysisPrompt(resumeText: string, jobDescription: string, selectedRole: string): string {
    return `
    You are an expert AI-powered career coach and professional resume screener. Your task is to analyze a provided resume text against a job description and return a detailed, structured analysis in JSON format.
    **CRITICAL INSTRUCTION:** Your entire response MUST be a single, raw JSON object. Do not include any markdown formatting like \`\`\`json, any introductory text, or any explanations. The response must start with '{' and end with '}'.
    **THE JSON STRUCTURE MUST BE EXACTLY AS FOLLOWS:**
    { "resumeData": { ... The parsed resume data ... }, "analysisResult": { ... The analysis result ... } }
    **Detailed Instructions & TypeScript Interfaces for the JSON content:**
    1.  **"resumeData" Object:** Interface: \`interface ResumeData { personalInfo: { name: string; email: string; phone: string; location: string; }; summary: string; experience: Array<{ title: string; company: string; duration: string; description: string; yearsOfExperience: number; }>; education: Array<{ degree: string; institution: string; year: string; gpa?: string; }>; skills: Array<{ name: string; level: number; category: 'Programming' | 'Frontend' | 'Backend' | 'Database' | 'Cloud' | 'Tools' | 'Methodology' | 'Soft Skills' | 'Other'; }>; certifications: string[]; projects?: Array<{ name: string; description: string; technologies: string[]; }>; }\`
    2.  **"analysisResult" Object:** Interface: \`interface AnalysisResult { overallScore: number; matchPercentage: number; strengths: string[]; improvements: string[]; keywordMatches: string[]; missingKeywords: string[]; recommendation: 'STRONG_FIT' | 'GOOD_FIT' | 'MODERATE_FIT' | 'POOR_FIT'; experienceScore: number; skillsScore: number; educationScore: number; certificationsScore: number; detailedAnalysis: { technicalSkills: number; softSkills: number; domainExpertise: number; leadership: number; }; }\`
    **Data to be Analyzed:**
    **Resume Text:** --- ${resumeText} ---
    **Job Description:** --- ${jobDescription || `No job description provided. Analyze for a general ${selectedRole} position.`} ---
    **Target Role:** ${selectedRole}
    Now, generate the complete, raw JSON response following the specified structure.
    `;
}

export async function POST(request: NextRequest) {
    let rawText: string | undefined = undefined;
    try {
        if (!process.env.GEMINI_API_KEY) {
            console.error('CRITICAL: GEMINI_API_KEY environment variable is not set on the server.');
            throw new Error('Server is not configured correctly. Missing API key.');
        }

        const body = await request.json();
        const { resumeText, jobDescription, selectedRole } = body;

        if (!resumeText || !selectedRole) {
            return NextResponse.json({ error: 'Resume text and selected role are required.' }, { status: 400 });
        }

        const prompt = getAnalysisPrompt(resumeText, jobDescription, selectedRole);
        const result = await retryWithExponentialBackoff(() => model.generateContent(prompt));
        rawText = result.response.text();

        // Use the new, more robust JSON extraction function
        const jsonText = findAndCombineJson(rawText);
        const parsedData = JSON.parse(jsonText);

        if (!parsedData.resumeData || !parsedData.analysisResult) {
            console.error("Data structure is still missing required properties after cleanup.", parsedData);
            throw new Error("AI returned an incomplete data structure.");
        }

        return NextResponse.json(parsedData);

    } catch (error: any) {
        console.error('Error in /api/analyze:', error.message);
        if (rawText) {
            console.error('--- Raw AI Response that may have caused the error ---');
            console.error(rawText);
            console.error('----------------------------------------------------');
        }

        if (error.message.includes('Missing API key')) {
            return NextResponse.json({ error: 'Server configuration error: Invalid or missing API key.' }, { status: 500 });
        }
        if (error instanceof SyntaxError || error.message.includes('Could not find') || error.message.includes('incomplete data structure')) {
            return NextResponse.json({ error: 'The AI failed to generate a valid analysis. This can happen with very complex or unusually formatted resumes. Please try again.' }, { status: 500 });
        }

        return NextResponse.json({ error: 'An unexpected server error occurred.', details: error.message }, { status: 500 });
    }
}