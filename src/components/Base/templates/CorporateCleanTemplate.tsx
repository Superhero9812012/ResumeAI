"use client";
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Briefcase, Calendar, Award, GraduationCap } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

// =================================================================================
// TYPES (Matching your specific JSON structure)
// =================================================================================
interface PersonalInfo {
    name: string;
    title: string;
    email: string;
    phone: string;
    location?: string;
    website?: string;
    linkedin?: string;
    github?: string;
}

interface Experience {
    position: string;
    company: string;
    location?: string;
    period: string;
    achievements: string[];
}

interface Education {
    degree: string;
    school: string;
    location?: string;
    year: string;
    gpa?: string;
}

interface Project {
    title: string;
    period: string;
    description: string;
    technologies: string[];
    link?: string;
}

interface ResumeData {
    personalInfo: PersonalInfo;
    summary: string;
    experience: Experience[];
    education: Education[];
    skills: Record<string, string[]>;
    projects: Project[];
}

// =================================================================================
// DEFAULT DATA (Using the "blank slate" version)
// =================================================================================
const defaultResumeData: ResumeData = {
    personalInfo: { name: "", title: "", email: "", phone: "", location: "" },
    summary: "",
    experience: [],
    projects: [],
    skills: {},
    education: []
};

// =================================================================================
// ROBUST TEMPLATE COMPONENT with CONDITIONAL RENDERING
// =================================================================================
export const CorporateCleanTemplate: React.FC<{ data?: ResumeData }> = ({
    data = defaultResumeData
}) => {
    const { personalInfo, summary, experience, education, skills, projects } = data;

    // Helper function to check if a section should be rendered
    const hasContent = (value: any): boolean => {
        if (!value) return false;
        if (Array.isArray(value)) return value.length > 0;
        if (typeof value === 'object') return Object.keys(value).length > 0;
        if (typeof value === 'string') return value.trim() !== '';
        return false;
    };

    return (
        <div className="max-w-4xl mx-auto bg-white text-black font-sans">
            {/* Header */}
            <div className="bg-gray-50 p-6 border-b">
                <div className="flex flex-col md:flex-row md:justify-between">
                    <div>
                        <h1 className="text-2xl font-bold mb-1">{personalInfo.name || "Your Name"}</h1>
                        <h2 className="text-lg text-gray-600">{personalInfo.title || "Your Title"}</h2>
                    </div>
                    <div className="mt-4 md:mt-0 text-sm space-y-1 text-right">
                        {personalInfo.email && <div className="flex items-center justify-end gap-2"><span className="text-gray-800">{personalInfo.email}</span><Mail className="w-4 h-4 text-gray-500" /></div>}
                        {personalInfo.phone && <div className="flex items-center justify-end gap-2"><span className="text-gray-800">{personalInfo.phone}</span><Phone className="w-4 h-4 text-gray-500" /></div>}
                        {personalInfo.location && <div className="flex items-center justify-end gap-2"><span className="text-gray-800">{personalInfo.location}</span><MapPin className="w-4 h-4 text-gray-500" /></div>}
                    </div>
                </div>
            </div>

            <div className="p-6">
                {/* Summary */}
                {hasContent(summary) && (
                    <Card className="mb-6 border-l-4 border-l-gray-800 shadow-sm">
                        <CardHeader className="pb-2">
                            <CardTitle className="text-base flex items-center gap-2 text-gray-800"><Briefcase className="w-4 h-4" />Professional Summary</CardTitle>
                        </CardHeader>
                        <CardContent><p className="text-sm text-gray-700">{summary}</p></CardContent>
                    </Card>
                )}

                {/* Experience */}
                {hasContent(experience) && (
                    <Card className="mb-6 border-l-4 border-l-gray-800 shadow-sm">
                        <CardHeader className="pb-2">
                            <CardTitle className="text-base flex items-center gap-2 text-gray-800"><Calendar className="w-4 h-4" />Professional Experience</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {experience.map((exp, index) => (
                                <div key={index} className="pb-4 border-b border-gray-100 last:border-b-0">
                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                                        <div>
                                            <h4 className="font-semibold text-sm">{exp.position}</h4>
                                            <p className="text-sm text-gray-600">{exp.company}{exp.location && ` | ${exp.location}`}</p>
                                        </div>
                                        <Badge variant="outline" className="text-xs mt-2 sm:mt-0">{exp.period}</Badge>
                                    </div>
                                    <ul className="list-disc list-inside space-y-1 text-xs text-gray-700 pl-1">
                                        {exp.achievements.map((achievement, i) => (
                                            <li key={i}>{achievement}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                )}

                {/* Skills and Education/Projects Grid */}
                {(hasContent(skills) || hasContent(education) || hasContent(projects)) && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Skills */}
                        {hasContent(skills) && (
                            <Card className="border-l-4 border-l-gray-800 shadow-sm">
                                <CardHeader className="pb-2">
                                    <CardTitle className="text-base flex items-center gap-2 text-gray-800"><Award className="w-4 h-4" />Technical Skills</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    {Object.entries(skills).map(([category, skillList]) => (
                                        <div key={category} className="mb-3 last:mb-0">
                                            <h4 className="font-medium text-xs mb-2 text-gray-800">{category}</h4>
                                            <div className="flex flex-wrap gap-1.5">
                                                {skillList.map((skill, index) => (
                                                    <Badge key={index} variant="secondary" className="text-xs font-normal">{skill}</Badge>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </CardContent>
                            </Card>
                        )}

                        {/* Education and Projects Column */}
                        <div className="space-y-6">
                            {hasContent(education) && (
                                <Card className="border-l-4 border-l-gray-800 shadow-sm">
                                    <CardHeader className="pb-2">
                                        <CardTitle className="text-base flex items-center gap-2 text-gray-800"><GraduationCap className="w-4 h-4" />Education</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        {education.map((edu, index) => (
                                            <div key={index} className="mb-2 last:mb-0">
                                                <h4 className="font-semibold text-sm">{edu.degree}</h4>
                                                <p className="text-xs text-gray-600">{edu.school}, {edu.location}</p>
                                                <p className="text-xs text-gray-500">{edu.year} {edu.gpa && `• GPA: ${edu.gpa}`}</p>
                                            </div>
                                        ))}
                                    </CardContent>
                                </Card>
                            )}

                            {hasContent(projects) && (
                                <Card className="border-l-4 border-l-gray-800 shadow-sm">
                                    <CardHeader className="pb-2">
                                        <CardTitle className="text-base text-gray-800">Notable Projects</CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-3">
                                        {projects.map((project, index) => (
                                            <div key={index}>
                                                <div className='flex items-center justify-between'>
                                                    <h4 className="font-semibold text-sm">{project.title}</h4>
                                                    <p className='text-xs'>{project.period}</p>
                                                </div>

                                                <p className="text-xs text-gray-600 mb-1">{project.description}</p>
                                                <div className="flex flex-wrap gap-1">
                                                    {project.technologies.map((tech, i) => (
                                                        <Badge key={i} variant="outline" className="text-xs font-normal">{tech}</Badge>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </CardContent>
                                </Card>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};