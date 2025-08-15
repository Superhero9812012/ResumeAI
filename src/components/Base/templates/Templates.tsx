"use client";

import React, { useState, useMemo } from 'react';
import { Button } from "@/components/ui/button";
import { CheckCircle, Loader2 } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { toast } from "sonner";
import { ClassicProfessionalTemplate } from './ClassicProfessionalTemplate';
import { ModernMinimalTemplate } from './ModernMinimalTemplate';
import { CorporateCleanTemplate } from './CorporateCleanTemplate';
import { CreativeTimelineTemplate } from './CreativeTimelineTemplate';
import { ExecutiveSummaryTemplate } from './ExecutiveSummaryTemplate';
import { OriginalProfessionalTemplate } from './OriginalProfessionalTemplate';

// --- Import all your template components ---


// =================================================================================
// TYPE DEFINITIONS
// =================================================================================
interface PersonalInfo { name?: string; title?: string; email?: string; phone?: string; location?: string; website?: string; linkedin?: string; github?: string; }
interface Experience { position?: string; company?: string; location?: string; startDate?: string; endDate?: string; achievements?: string[]; }
interface Education { degree?: string; institution?: string; location?: string; graduationDate?: string; gpa?: string; }
interface Project { name?: string; description?: string; technologies?: string[]; link?: string; }
interface ResumeData { personalInfo?: PersonalInfo; summary?: string; experience?: Experience[]; education?: Education[]; skills?: Record<string, string[]>; projects?: Project[]; }

interface TemplateSelectionProps {
    jobId: string;
    resumeData: ResumeData;
    currentTemplate: string;
    onTemplateChange: (newTemplate: string) => void;
}

// =================================================================================
// MAIN COMPONENT
// =================================================================================
export const TemplateSelection: React.FC<TemplateSelectionProps> = ({
    jobId,
    resumeData,
    currentTemplate,
    onTemplateChange,
}) => {
    const [activeTemplateKey, setActiveTemplateKey] = useState<string>(currentTemplate);
    const [isSubmitting, setIsSubmitting] = useState(false);
    // Memoize the templates object to prevent re-renders
    const templates = useMemo(() => ({
        classic: { name: 'Classic', component: ClassicProfessionalTemplate },
        modern: { name: 'Minimal', component: ModernMinimalTemplate },
        corporate: { name: 'Corporate', component: CorporateCleanTemplate },
        creative: { name: 'Timeline', component: CreativeTimelineTemplate },
        executive: { name: 'Executive', component: ExecutiveSummaryTemplate },
        original: { name: 'Professional', component: OriginalProfessionalTemplate },
    }), []);

    const handleSaveChanges = async () => {
        setIsSubmitting(true);
        try {
            const res = await fetch(`/api/jobs/${jobId}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ selectedTemplate: activeTemplateKey }),
            });

            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.error || 'Failed to save template.');
            }

            // Inform the parent component of the successful change
            onTemplateChange(activeTemplateKey);

            toast.success("Your resume will now use the new template.");

        } catch (err: any) {
            toast.error(err.message);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="w-full py-6">
            <div className="text-center mb-8">
                <h3 className="text-2xl font-bold">Change Your Template</h3>
                <p className="text-muted-foreground">Select a new look for your resume. Your content remains the same.</p>
            </div>

            <Carousel opts={{ align: "start", loop: false }} className="w-full">
                <CarouselContent className="-ml-4">
                    {Object.entries(templates).map(([key, template]) => {
                        const TemplateComponent = template.component;
                        const isSelected = activeTemplateKey === key;
                        const isCurrent = currentTemplate === key;

                        return (
                            <CarouselItem key={key} className="px-2 py-6 basis-full sm:basis-1/2 lg:basis-1/3">
                                <div onClick={() => setActiveTemplateKey(key)} className="group cursor-pointer">
                                    <div
                                        className={`relative border-4 rounded-lg overflow-hidden transition-all duration-300 ${isSelected ? 'shadow-2xl scale-105 border-primary' : 'shadow-lg hover:shadow-xl border-transparent'
                                            }`}
                                    >
                                        {(isSelected || isCurrent) && (
                                            <div
                                                className={`absolute top-2 right-2 z-10 p-1.5 rounded-full flex items-center justify-center text-white ${isCurrent && !isSelected ? 'bg-gray-400' : 'bg-primary'
                                                    }`}
                                            >
                                                <CheckCircle className="h-5 w-5" />
                                            </div>
                                        )}
                                        {/* Fixed preview container with proper dimensions and scaling */}
                                        <div className="w-full h-[700px] overflow-hidden bg-white relative">
                                            <div className="absolute inset-0 transform scale-[0.5] origin-top-left pointer-events-none w-[200%] h-[200%]">
                                                <TemplateComponent data={resumeData as any} />
                                            </div>
                                        </div>
                                    </div>
                                    <p className={`text-center font-semibold p-2 transition-colors ${isSelected ? 'text-primary' : 'text-muted-foreground'}`}>
                                        {template.name}
                                    </p>
                                </div>
                            </CarouselItem>
                        );
                    })}
                </CarouselContent>
                <CarouselPrevious className="hidden sm:flex" />
                <CarouselNext className="hidden sm:flex" />
            </Carousel>

            <div className="mt-10 text-center">
                <Button
                    onClick={handleSaveChanges}
                    disabled={isSubmitting || activeTemplateKey === currentTemplate}
                    size="lg"
                    className="px-10"
                >
                    {isSubmitting ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Saving...
                        </>
                    ) : (
                        "Save Template Selection"
                    )}
                </Button>
            </div>
        </div>
    );
};

// You can now export this component to be used in your builder page
export default TemplateSelection;