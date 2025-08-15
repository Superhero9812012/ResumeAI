"use client";
import React from 'react';
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
export const ExecutiveSummaryTemplate: React.FC<{ data?: ResumeData }> = ({
    data = defaultResumeData
}) => {
    const { personalInfo, summary, experience, education, skills, projects } = data;

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
            <header className="bg-gradient-to-r from-gray-900 to-gray-700 text-white p-6 sm:p-8">
                <div className="flex flex-col md:flex-row md:justify-between md:items-end">
                    <div>
                        <h1 className="text-3xl font-light mb-2">{personalInfo.name || "Your Name"}</h1>
                        <h2 className="text-xl opacity-90">{personalInfo.title || "Your Title"}</h2>
                    </div>
                    <div className="text-left md:text-right space-y-1 text-sm opacity-90 mt-4 md:mt-0">
                        {personalInfo.email && <div>{personalInfo.email}</div>}
                        {personalInfo.phone && <div>{personalInfo.phone}</div>}
                        {personalInfo.location && <div>{personalInfo.location}</div>}
                        {personalInfo.website && <div>{personalInfo.website}</div>}
                    </div>
                </div>
            </header>

            <div className="p-6 sm:p-8">
                <main className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content Column */}
                    <div className="lg:col-span-2">
                        {hasContent(summary) && (
                            <section className="mb-8">
                                <h3 className="text-sm font-bold mb-3 text-gray-800 uppercase tracking-wider border-b pb-2">Executive Summary</h3>
                                <p className="text-sm leading-relaxed text-gray-700">{summary}</p>
                            </section>
                        )}

                        {hasContent(experience) && (
                            <section className="mb-8">
                                <h3 className="text-sm font-bold mb-4 text-gray-800 uppercase tracking-wider border-b pb-2">Professional Experience</h3>
                                {experience.map((exp, index) => (
                                    <div key={index} className="mb-5 last:mb-0">
                                        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                                            <div>
                                                <h4 className="font-bold text-sm">{exp.position}</h4>
                                                <p className="text-gray-600 text-sm">{exp.company}{exp.location && ` • ${exp.location}`}</p>
                                            </div>
                                            <Badge variant="outline" className="text-xs mt-1 md:mt-0 px-2 py-0.5">{exp.period}</Badge>
                                        </div>
                                        <ul className="space-y-1.5 text-sm text-gray-800">
                                            {exp.achievements.map((achievement, i) => (
                                                <li key={i} className="flex items-start">
                                                    <span className="font-bold mr-2 text-gray-400">•</span>
                                                    <span>{achievement}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </section>
                        )}

                        {hasContent(projects) && (
                            <section>
                                <h3 className="text-sm font-bold mb-4 text-gray-800 uppercase tracking-wider border-b pb-2">Key Projects</h3>
                                {projects.map((project, index) => (
                                    <div key={index} className="mb-4 p-4 bg-gray-50 rounded-lg last:mb-0">
                                        <div className='flex items-center justify-between'>
                                            <h4 className="font-bold text-sm mb-1">{project.title}</h4>
                                            <p className='text-xs'>{project.period}</p>
                                        </div>
                                        <p className="text-xs text-gray-600 mb-2">{project.description}</p>
                                        <div className="flex flex-wrap gap-1.5">
                                            {project.technologies.map((tech, i) => (
                                                <Badge key={i} variant="secondary" className="text-xs font-normal">{tech}</Badge>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </section>
                        )}
                    </div>

                    {/* Sidebar Column */}
                    {(hasContent(skills) || hasContent(education)) && (
                        <aside className="bg-gray-50 p-4 rounded-lg">
                            {hasContent(skills) && (
                                <section className="mb-6">
                                    <h3 className="text-sm font-bold mb-4 text-gray-800 uppercase tracking-wider">Core Competencies</h3>
                                    {Object.entries(skills).map(([category, skillList]) => (
                                        <div key={category} className="mb-4 last:mb-0">
                                            <h4 className="font-semibold text-xs mb-2 text-gray-700">{category}</h4>
                                            <div className="space-y-1">
                                                {skillList.map((skill, index) => (
                                                    <div key={index} className="text-xs bg-white px-2 py-1.5 rounded-md shadow-sm border border-gray-200">
                                                        {skill}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </section>
                            )}

                            {hasContent(education) && (
                                <section>
                                    <h3 className="text-sm font-bold mb-3 text-gray-800 uppercase tracking-wider">Education</h3>
                                    {education.map((edu, index) => (
                                        <div key={index} className="bg-white p-3 rounded-md shadow-sm border border-gray-200">
                                            <h4 className="font-bold text-xs">{edu.degree}</h4>
                                            <p className="text-xs text-gray-600">{edu.school}, {edu.location}</p>
                                            <p className="text-xs text-gray-500 mt-1">{edu.year}</p>
                                            {edu.gpa && <p className="text-xs text-gray-500">GPA: {edu.gpa}</p>}
                                        </div>
                                    ))}
                                </section>
                            )}
                        </aside>
                    )}
                </main>
            </div>
        </div>
    );
};