

// src/app/api/optimize/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';
import mammoth from 'mammoth';
import { PdfReader } from 'pdfreader';
import prisma from '@/lib/db';
// <<< CHANGE: Import currentUser in addition to auth
import { auth, currentUser } from '@clerk/nextjs/server';

// ... (your helper functions like retryWithExponentialBackoff and getPdfText are unchanged)
async function retryWithExponentialBackoff<T>(
    fn: () => Promise<T>,
    maxRetries = 5,
    initialDelay = 1000
): Promise<T> {
    let attempt = 0;
    while (attempt < maxRetries) {
        try {
            return await fn();
        } catch (error: any) {
            attempt++;
            if (error.status === 503 && attempt < maxRetries) {
                console.log(`Gemini API overloaded (503). Attempt ${attempt} failed. Retrying in ${initialDelay}ms...`);
                await new Promise(resolve => setTimeout(resolve, initialDelay));
                initialDelay = initialDelay * 2 + Math.random() * 1000;
            } else {
                console.error(`Failed after ${attempt} attempts or encountered a non-retriable error.`);
                throw error;
            }
        }
    }
    throw new Error("Exceeded maximum number of retries.");
}

function getPdfText(buffer: Buffer): Promise<string> {
    return new Promise((resolve, reject) => {
        let fullText = '';
        new PdfReader(null).parseBuffer(buffer, (err, item) => {
            if (err) reject(err);
            else if (!item) resolve(fullText);
            else if (item.text) fullText += item.text + ' ';
        });
    });
}


export async function POST(req: NextRequest) {
    try {
        const { userId } = await auth();
        // <<< CHANGE: Get the full user object from Clerk
        const user = await currentUser();

        if (!userId || !user) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        // <<< FIX: This is the key change.
        // Ensure the user exists in your database before creating a job.
        // This prevents the foreign key constraint error.
        const primaryEmail = user.emailAddresses.find(e => e.id === user.primaryEmailAddressId)?.emailAddress;
        if (!primaryEmail) {
            return NextResponse.json({ error: 'User does not have a primary email address.' }, { status: 400 });
        }

        await prisma.user.upsert({
            where: { id: userId },
            update: {
                email: primaryEmail,
                name: user.fullName,
                username: user.username,
            },
            create: {
                id: userId,
                email: primaryEmail,
                name: user.fullName,
                username: user.username,
            }
        });

        // --- The rest of your code now proceeds safely ---

        const formData = await req.formData();
        const file = formData.get('file') as File | null;
        const role = formData.get('role') as string | null;
        if (!file || !role) {
            return NextResponse.json({ error: 'File and target role are required.' }, { status: 400 });
        }

        const buffer = Buffer.from(await file.arrayBuffer());
        let originalText = '';
        const fileType = file.type;

        if (fileType === 'application/pdf') {
            originalText = await getPdfText(buffer);
        } else if (fileType === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
            const { value } = await mammoth.extractRawText({ buffer });
            originalText = value;
        } else if (fileType === 'text/plain') {
            originalText = buffer.toString('utf-8');
        } else {
            return NextResponse.json({ error: 'Unsupported file type. Please upload PDF, DOCX, or TXT.' }, { status: 400 });
        }

        if (originalText.trim().length < 50) {
            return NextResponse.json({ error: 'Could not extract sufficient text from the resume.' }, { status: 400 });
        }

        // <<< --- START OF CHANGE --- >>>
        const prompt = `
            You are an expert Resume Optimization Specialist and Career Coach. Your primary task is to transform the provided resume text to be highly optimized for a specific target role. You are not just parsing; you are actively rewriting and tailoring content to maximize the candidate's chances of getting an interview.

            ## Target Role for Optimization ##
            "${role}"

            ## Core Optimization Strategy ##
            1.  **Keyword Alignment:** Analyze the skills, technologies, and qualifications expected for the "${role}" position. Infuse these keywords naturally into the summary and experience descriptions where relevant.
            2.  **Impact-Oriented Achievements:** Rephrase the bullet points under "experience" to be impact-driven. Frame them to highlight quantifiable results (e.g., "Increased sales by 15%", "Reduced server costs by $5k/month", "Improved user engagement by 25%"). The achievements must be directly relevant to the target role.
            3.  **Tailored Summary:** The "summary" section must be a powerful, concise professional pitch (3-4 sentences) that directly addresses the needs of a hiring manager looking for a "${role}". It should immediately highlight the candidate's most relevant qualifications and experience.
            4.  **Skills Prioritization:** In the "skills" object, prioritize and categorize the skills that are most relevant to the "${role}".

            ## JSON Output Requirements ##
            - The final output MUST be a single, valid JSON object. Do not include any text, explanations, or markdown formatting before or after the JSON.
            - Follow this exact schema:
            {
                "personalInfo": { "name": "string", "title": "string", "email": "string", "phone": "string", "location": "string", "website": "string", "github": "string" },
                "summary": "string (4-5 sentence summary rewritten and optimized for the target role)",
                "experience": [ { "id": number, "title": "string", "company": "string", "location": "string", "period": "string", "achievements": ["string (each achievement rewritten to be impact-driven and tailored to the target role)"] } ],
                "projects": [ { "id": number, "title": "string", "period": "string", "technologies": ["string"], "description": ["string"] } ],
                "skills": { "Languages & Frameworks": ["string"], "Databases": ["string"], "Cloud & DevOps": ["string"] },
                "education": [ { "id": number, "degree": "string", "school": "string", "location": "string", "year": "string" } ]
            }
            - If information for a field is not present in the original resume (e.g., no GitHub URL), use an empty string "" or an empty array [].

            ---
            ## Original Resume Content ##
            ${originalText}
            ---
        `;
        // <<< --- END OF CHANGE --- >>>

        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash", generationConfig: { responseMimeType: "application/json" } });

        const result = await retryWithExponentialBackoff(() => model.generateContent(prompt));
        const response = result.response;
        const jsonText = response.text();

        if (!jsonText) {
            return NextResponse.json({ error: 'The AI failed to generate a response. Please try again.' }, { status: 502 });
        }

        let optimizedJson;
        try {
            optimizedJson = JSON.parse(jsonText);
        } catch (e) {
            console.error("Failed to parse JSON from AI response:", jsonText);
            return NextResponse.json({ error: 'The AI returned an invalid format. Please try again.' }, { status: 500 });
        }

        // This will now succeed because the user is guaranteed to exist in the DB.
        const newJob = await prisma.optimizationJob.create({
            data: {
                userId,
                originalText,
                optimizedJson,
                targetRole: role,
            },
        });

        return NextResponse.json({ jobId: newJob.id }, { status: 201 });

    } catch (error: any) {
        console.error('[API_OPTIMIZE_ERROR]', error);

        if (error.status === 503) {
            return NextResponse.json(
                { error: "The AI service is currently overloaded. Please try again in a few moments." },
                { status: 503 }
            );
        }

        if (error.message?.includes('API key')) {
            return NextResponse.json({ error: 'Server Error: Invalid or missing Gemini API Key.' }, { status: 500 });
        }

        // This will catch the P2003 error if it somehow still occurs, but it shouldn't
        if (error.code === 'P2003') {
            return NextResponse.json(
                { error: 'Failed to create job due to a database relation mismatch.' },
                { status: 500 }
            );
        }

        return NextResponse.json(
            { error: 'An internal server error occurred while processing your request.' },
            { status: 500 }
        );
    }
}