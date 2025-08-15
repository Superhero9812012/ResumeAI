import prisma from '@/lib/db';
import { notFound } from 'next/navigation';
import { type OptimizationJob } from '@prisma/client';
import { BuilderClient } from './BuilderClient';

interface BuilderPageProps {
    params: Promise<{
        id: string;
    }>;
}

// This is a Server Component, so we can use async/await to fetch data directly.
export default async function BuilderPage({ params }: BuilderPageProps) {
    const { id } = await params; // Await the params promise

    let job: OptimizationJob | null = null;
    try {
        job = await prisma.optimizationJob.findUnique({
            where: { id },
        });
    } catch (error) {
        console.error("Database fetch failed:", error);
        // You could render an error page here
    }

    // If no job is found for the given ID, render the 404 page.
    if (!job) {
        notFound();
    }

    // Pass the server-fetched data as a prop to our main Client Component.
    return (
        <>
            <BuilderClient job={job} />
        </>
    );
}