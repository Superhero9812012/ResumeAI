// // import { NextRequest, NextResponse } from 'next/server';
// // import prisma from '@/lib/db';

// // function getIdFromUrl(url: string): string | null {
// //     const segments = new URL(url).pathname.split('/');
// //     return segments.pop() || null;
// // }

// // export async function GET(request: NextRequest) {
// //     try {
// //         const id = getIdFromUrl(request.url);
// //         if (!id) {
// //             return NextResponse.json({ error: 'Job ID could not be determined from URL.' }, { status: 400 });
// //         }
// //         const job = await prisma.optimizationJob.findUnique({ where: { id } });
// //         if (!job) {
// //             return NextResponse.json({ error: `Job with ID ${id} not found.` }, { status: 404 });
// //         }
// //         return NextResponse.json(job, { status: 200 });
// //     } catch (error: any) {
// //         console.error('[API JOB GET ERROR]', error);
// //         return NextResponse.json({ error: 'An internal server error occurred.' }, { status: 500 });
// //     }
// // }
// // // PATCH handler is updated to be more flexible.
// // export async function PATCH(request: NextRequest) {
// //     try {
// //         const id = getIdFromUrl(request.url);
// //         if (!id) {
// //             return NextResponse.json({ error: 'Job ID could not be determined from URL.' }, { status: 400 });
// //         }

// //         const body = await request.json();
// //         const { optimizedJson, selectedTemplate } = body;

// //         const updateData: { optimizedJson?: any; selectedTemplate?: string } = {};

// //         if (optimizedJson !== undefined) {
// //             if (typeof optimizedJson !== 'object' || optimizedJson === null) {
// //                 return NextResponse.json({ error: 'A valid optimizedJson object is required for update' }, { status: 400 });
// //             }
// //             updateData.optimizedJson = optimizedJson;
// //         }

// //         if (selectedTemplate !== undefined) {
// //             if (typeof selectedTemplate !== 'string' || selectedTemplate.trim() === '') {
// //                 return NextResponse.json({ error: 'A valid selectedTemplate string is required' }, { status: 400 });
// //             }
// //             updateData.selectedTemplate = selectedTemplate;
// //         }

// //         if (Object.keys(updateData).length === 0) {
// //             return NextResponse.json({ error: 'No valid fields provided for update (expected optimizedJson or selectedTemplate).' }, { status: 400 });
// //         }

// //         const updatedJob = await prisma.optimizationJob.update({
// //             where: { id },
// //             data: { ...updateData, updatedAt: new Date() },
// //         });

// //         return NextResponse.json(updatedJob, { status: 200 });
// //     } catch (error: any) {
// //         console.error('[API JOB PATCH ERROR]', error);
// //         if (error.code === 'P2025') {
// //             const id = getIdFromUrl(request.url);
// //             return NextResponse.json({ error: `Job with ID ${id} not found.` }, { status: 404 });
// //         }
// //         return NextResponse.json({ error: 'An internal server error occurred.' }, { status: 500 });
// //     }
// // }


// import { NextRequest, NextResponse } from 'next/server';
// import prisma from '@/lib/db';

// function getIdFromUrl(url: string): string | null {
//     const segments = new URL(url).pathname.split('/');
//     return segments.pop() || null;
// }

// export async function GET(request: NextRequest) {
//     try {
//         const id = getIdFromUrl(request.url);
//         if (!id) {
//             return NextResponse.json({ error: 'Job ID could not be determined from URL.' }, { status: 400 });
//         }
//         const job = await prisma.optimizationJob.findUnique({ where: { id } });
//         if (!job) {
//             return NextResponse.json({ error: `Job with ID ${id} not found.` }, { status: 404 });
//         }
//         return NextResponse.json(job, { status: 200 });
//     } catch (error: any) {
//         console.error('[API JOB GET ERROR]', error);
//         return NextResponse.json({ error: 'An internal server error occurred.' }, { status: 500 });
//     }
// }

// // Enhanced PATCH handler with support for targetRole
// export async function PATCH(request: NextRequest) {
//     try {
//         const id = getIdFromUrl(request.url);
//         if (!id) {
//             return NextResponse.json({ error: 'Job ID could not be determined from URL.' }, { status: 400 });
//         }

//         const body = await request.json();
//         const { optimizedJson, selectedTemplate, targetRole } = body;

//         const updateData: {
//             optimizedJson?: any;
//             selectedTemplate?: string;
//             targetRole?: string;
//         } = {};

//         // Handle optimizedJson updates
//         if (optimizedJson !== undefined) {
//             if (typeof optimizedJson !== 'object' || optimizedJson === null) {
//                 return NextResponse.json(
//                     { error: 'A valid optimizedJson object is required for update' },
//                     { status: 400 }
//                 );
//             }
//             updateData.optimizedJson = optimizedJson;
//         }

//         // Handle selectedTemplate updates
//         if (selectedTemplate !== undefined) {
//             if (typeof selectedTemplate !== 'string' || selectedTemplate.trim() === '') {
//                 return NextResponse.json(
//                     { error: 'A valid selectedTemplate string is required' },
//                     { status: 400 }
//                 );
//             }
//             updateData.selectedTemplate = selectedTemplate;
//         }

//         // Handle targetRole updates
//         if (targetRole !== undefined) {
//             if (typeof targetRole !== 'string' || targetRole.trim() === '') {
//                 return NextResponse.json(
//                     { error: 'A valid targetRole string is required' },
//                     { status: 400 }
//                 );
//             }
//             updateData.targetRole = targetRole;
//         }

//         // Ensure at least one field is being updated
//         if (Object.keys(updateData).length === 0) {
//             return NextResponse.json(
//                 { error: 'No valid fields provided for update (expected optimizedJson, selectedTemplate, or targetRole).' },
//                 { status: 400 }
//             );
//         }

//         // Update the job with the new data
//         const updatedJob = await prisma.optimizationJob.update({
//             where: { id },
//             data: {
//                 ...updateData,
//                 updatedAt: new Date()
//             },
//         });

//         return NextResponse.json(updatedJob, { status: 200 });
//     } catch (error: any) {
//         console.error('[API JOB PATCH ERROR]', error);
//         if (error.code === 'P2025') {
//             const id = getIdFromUrl(request.url);
//             return NextResponse.json(
//                 { error: `Job with ID ${id} not found.` },
//                 { status: 404 }
//             );
//         }
//         return NextResponse.json(
//             { error: 'An internal server error occurred while updating the job.' },
//             { status: 500 }
//         );
//     }
// }


// src/app/api/jobs/[id]/route.ts

import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/db';
import { auth } from '@clerk/nextjs/server';

export async function GET(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        const { userId } = await auth();
        if (!userId) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const { id } = params;

        const job = await prisma.optimizationJob.findUnique({
            where: {
                id,
                userId,
            },
        });

        if (!job) {
            return NextResponse.json({ error: `Job with ID ${id} not found.` }, { status: 404 });
        }

        return NextResponse.json(job, { status: 200 });

    } catch (error: any) {
        console.error('[API JOB GET ERROR]', error);
        return NextResponse.json({ error: 'An internal server error occurred.' }, { status: 500 });
    }
}

export async function PATCH(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        const { userId } = await auth();
        if (!userId) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const { id } = params;

        const existingJob = await prisma.optimizationJob.findUnique({
            where: {
                id,
                userId,
            }
        });

        if (!existingJob) {
            return NextResponse.json({ error: `Job with ID ${id} not found or you don't have permission to edit it.` }, { status: 404 });
        }

        const body = await request.json();
        const { optimizedJson, selectedTemplate, targetRole } = body;

        const updateData: {
            optimizedJson?: any;
            selectedTemplate?: string;
            targetRole?: string;
        } = {};

        if (optimizedJson !== undefined) {
            updateData.optimizedJson = optimizedJson;
        }
        if (selectedTemplate !== undefined) {
            updateData.selectedTemplate = selectedTemplate;
        }
        if (targetRole !== undefined) {
            updateData.targetRole = targetRole;
        }
        
        if (Object.keys(updateData).length === 0) {
            return NextResponse.json({ error: 'No valid fields provided for update.' }, { status: 400 });
        }

        const updatedJob = await prisma.optimizationJob.update({
            where: { id },
            data: updateData,
        });

        return NextResponse.json(updatedJob, { status: 200 });
    } catch (error: any) {
        console.error('[API JOB PATCH ERROR]', error);
        return NextResponse.json({ error: 'An internal server error occurred.' }, { status: 500 });
    }
}