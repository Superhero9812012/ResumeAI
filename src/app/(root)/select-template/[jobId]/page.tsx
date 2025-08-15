"use client";

import React, { useState, useEffect, useMemo } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Loader2, CheckCircle, AlertTriangle } from 'lucide-react';
import Section from '@/components/Base/Section';
import { colors } from '@/components/Global/colors';
import { ClassicProfessionalTemplate } from '@/components/Base/templates/ClassicProfessionalTemplate';
import { ModernMinimalTemplate } from '@/components/Base/templates/ModernMinimalTemplate';
import { CorporateCleanTemplate } from '@/components/Base/templates/CorporateCleanTemplate';
import { CreativeTimelineTemplate } from '@/components/Base/templates/CreativeTimelineTemplate';
import { ExecutiveSummaryTemplate } from '@/components/Base/templates/ExecutiveSummaryTemplate';
import { OriginalProfessionalTemplate } from '@/components/Base/templates/OriginalProfessionalTemplate';



// --- Resume Data Types (include these in a shared types file if preferred) ---
interface ContactInfo { name: string; title: string; email: string; phone: string; location: string; website?: string; linkedin?: string; github?: string; }
interface Experience { position: string; company: string; location: string; startDate: string; endDate: string; achievements: string[]; }
interface Education { degree: string; institution: string; location: string; graduationDate: string; gpa?: string; relevantCourses?: string[]; }
interface Project { name: string; description: string; technologies: string[]; link?: string; }
export interface ResumeData { contactInfo: ContactInfo; summary: string; experience: Experience[]; education: Education[]; skills: Record<string, string[]>; projects: Project[]; }

// --- Main Page Component ---
export default function SelectTemplatePage() {
    const params = useParams();
    const router = useRouter();
    const jobId = params.jobId as string;

    const [resumeData, setResumeData] = useState<ResumeData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [selectedTemplate, setSelectedTemplate] = useState<string>('classic');
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Memoize the templates object to prevent re-renders
    const templates = useMemo(() => ({
        classic: { name: 'Classic Professional', component: ClassicProfessionalTemplate },
        modern: { name: 'Modern Minimal', component: ModernMinimalTemplate },
        corporate: { name: 'Corporate Clean', component: CorporateCleanTemplate },
        creative: { name: 'Creative Timeline', component: CreativeTimelineTemplate },
        executive: { name: 'Executive Summary', component: ExecutiveSummaryTemplate },
        original: { name: 'Original Professional', component: OriginalProfessionalTemplate },
    }), []);

    // Fetch the optimized resume data
    useEffect(() => {
        if (!jobId) return;
        const fetchJobData = async () => {
            try {
                setLoading(true);
                const res = await fetch(`/api/jobs/${jobId}`);
                if (!res.ok) {
                    const errorData = await res.json();
                    throw new Error(errorData.error || 'Failed to fetch your optimized resume.');
                }
                const job = await res.json();
                if (!job.optimizedJson) {
                    throw new Error('Optimized resume data is not ready. Please go back and try again.');
                }
                setResumeData(job.optimizedJson as ResumeData);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchJobData();
    }, [jobId]);

    // Handle the final submission
    const handleSelectAndProceed = async () => {
        setIsSubmitting(true);
        setError(null);
        try {
            const res = await fetch(`/api/jobs/${jobId}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ selectedTemplate }),
            });
            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.error || 'Failed to save your template selection.');
            }
            router.push(`/builder/${jobId}`);
        } catch (err: any) {
            setError(err.message);
            setIsSubmitting(false);
        }
    };

    // --- Render Logic ---
    const renderContent = () => {
        if (loading) {
            return (
                <div className="flex flex-col justify-center items-center h-96 gap-4">
                    <Loader2 className="h-12 w-12 animate-spin" style={{ color: colors.primary }} />
                    <p className="text-xl" style={{ color: colors.neutral }}>Loading Your Optimized Data...</p>
                </div>
            );
        }
        if (error) {
            return (
                <div className="text-center p-6 bg-red-50 border border-red-200 rounded-lg max-w-lg mx-auto flex flex-col items-center gap-4">
                    <AlertTriangle className="h-12 w-12 text-red-500" />
                    <h3 className="font-bold text-xl text-red-700">An Error Occurred</h3>
                    <p className="text-red-600">{error}</p>
                    <Button variant="outline" onClick={() => router.push('/upload')}>Go back to Upload</Button>
                </div>
            );
        }
        if (resumeData) {
            return (
                <div className="w-full flex flex-col items-center">
                    <Carousel opts={{ align: "start", loop: true }} className="w-full">
                        <CarouselContent>
                            {Object.entries(templates).map(([key, template]) => {
                                const TemplateComponent = template.component;
                                const isSelected = selectedTemplate === key;
                                return (
                                    <CarouselItem key={key} className="md:basis-1/2 lg:basis-1/3 px-2 py-6">
                                        <div onClick={() => setSelectedTemplate(key)} className="group cursor-pointer">
                                            <div className={`relative border-4 rounded-lg overflow-hidden transition-all duration-300 ${isSelected ? 'shadow-2xl scale-105' : 'shadow-lg hover:shadow-xl'}`} style={{ borderColor: isSelected ? colors.primary : 'transparent' }}>
                                                {isSelected && (<div className="absolute top-2 right-2 z-10 p-1.5 rounded-full flex items-center justify-center" style={{ background: colors.primary, color: 'white' }}><CheckCircle className="h-6 w-6" /></div>)}
                                                {/* Fixed preview container with proper dimensions and scaling */}
                                                <div className="w-full h-[700px] overflow-hidden bg-white relative">
                                                    <div className="absolute inset-0 transform scale-[0.5] origin-top-left pointer-events-none w-[200%] h-[200%]">
                                                        <TemplateComponent data={resumeData} />
                                                    </div>
                                                </div>
                                            </div>
                                            <p className={`text-center font-semibold p-2 transition-colors ${isSelected ? 'text-primary' : 'text-neutral'}`}>{template.name}</p>
                                        </div>
                                    </CarouselItem>
                                );
                            })}
                        </CarouselContent>
                        <CarouselPrevious className="hidden sm:flex" />
                        <CarouselNext className="hidden sm:flex" />
                    </Carousel>

                    <div className="mt-5 text-center">
                        <Button onClick={handleSelectAndProceed} disabled={isSubmitting} className="font-semibold py-6 px-12 text-lg transition-all duration-300 hover:shadow-xl" size="lg" style={{ background: colors.primaryGradient, color: colors.lightBg }}>
                            {isSubmitting ? (<div className="flex items-center gap-2"><Loader2 className="h-6 w-6 animate-spin" /><span>Saving...</span></div>) : (`Confirm & Use ${templates[selectedTemplate as keyof typeof templates].name}`)}
                        </Button>
                        {error && <p className="text-red-500 mt-4">{error}</p>}
                    </div>
                </div>
            );
        }
        return null;
    };

    return (
        <Section>
            <div className="py-8">
                <div className="text-center mb-12">
                    <h1 className="text-xl lg:text-2xl xl:text-3xl font-bold tracking-tight" style={{ color: colors.tertiary }}>
                        Choose Your Resume Template
                    </h1>
                    <p className="text-base max-w-2xl mx-auto" style={{ color: colors.neutral }}>
                        Select a professionally designed template below. You can always change it later.
                    </p>
                </div>
                {renderContent()}
            </div>
        </Section>
    );
}