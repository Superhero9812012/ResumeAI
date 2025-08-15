"use client";
import React from 'react';
import { Mail, Phone, MapPin, Globe, Linkedin, Github } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
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
    startDate: string;
    endDate: string;
    achievements: string[];
}

interface Education {
    degree: string;
    institution: string;
    location?: string;
    graduationDate: string;
    gpa?: string;
}

interface Project {
    name: string;
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
export const OriginalProfessionalTemplate: React.FC<{ data?: ResumeData }> = ({
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
        <div className="max-w-4xl mx-auto p-8 bg-white text-black font-sans">
            {/* Header */}
            <header className="mb-6">
                <h1 className="text-3xl font-bold mb-2">{personalInfo.name || "Your Name"}</h1>
                <h2 className="text-xl text-gray-700 mb-4">{personalInfo.title || "Your Title"}</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 text-sm text-gray-800">
                    {personalInfo.email && <div className="flex items-center gap-2"><Mail className="w-4 h-4 text-gray-600" /><span>{personalInfo.email}</span></div>}
                    {personalInfo.phone && <div className="flex items-center gap-2"><Phone className="w-4 h-4 text-gray-600" /><span>{personalInfo.phone}</span></div>}
                    {personalInfo.location && <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-gray-600" /><span>{personalInfo.location}</span></div>}
                    {personalInfo.website && <div className="flex items-center gap-2"><Globe className="w-4 h-4 text-gray-600" /><span>{personalInfo.website}</span></div>}
                    {personalInfo.linkedin && <div className="flex items-center gap-2"><Linkedin className="w-4 h-4 text-gray-600" /><span>{personalInfo.linkedin}</span></div>}
                    {personalInfo.github && <div className="flex items-center gap-2"><Github className="w-4 h-4 text-gray-600" /><span>{personalInfo.github}</span></div>}
                </div>
            </header>

            {/* Professional Summary */}
            {hasContent(summary) && (
                <>
                    <Separator className="my-6" />
                    <section>
                        <h3 className="text-lg font-semibold mb-3 uppercase tracking-wide">Professional Summary</h3>
                        <p className="text-gray-800 leading-relaxed text-sm">{summary}</p>
                    </section>
                </>
            )}

            {/* Experience */}
            {hasContent(experience) && (
                <>
                    <Separator className="my-6" />
                    <section>
                        <h3 className="text-lg font-semibold mb-4 uppercase tracking-wide">Professional Experience</h3>
                        {experience.map((exp, index) => (
                            <div key={index} className="mb-6 last:mb-0">
                                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                                    <div>
                                        <h4 className="font-semibold text-base">{exp.position}</h4>
                                        <p className="text-gray-700">{exp.company}{exp.location && ` • ${exp.location}`}</p>
                                    </div>
                                    <span className="text-sm text-gray-600 mt-1 md:mt-0">{exp.startDate} - {exp.endDate}</span>
                                </div>
                                <ul className="list-disc list-inside space-y-1 text-sm text-gray-800 ml-4">
                                    {exp.achievements.map((achievement, i) => (
                                        <li key={i}>{achievement}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </section>
                </>
            )}

            {/* Skills */}
            {hasContent(skills) && (
                <>
                    <Separator className="my-6" />
                    <section>
                        <h3 className="text-lg font-semibold mb-4 uppercase tracking-wide">Technical Skills</h3>
                        {Object.entries(skills).map(([category, skillList]) => (
                            <div key={category} className="mb-3 last:mb-0">
                                <h4 className="font-medium text-sm mb-2">{category}:</h4>
                                <div className="flex flex-wrap gap-2">
                                    {skillList.map((skill, index) => (
                                        <Badge key={index} variant="outline" className="text-xs bg-gray-50 text-gray-800 border-gray-300">
                                            {skill}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </section>
                </>
            )}

            {/* Projects */}
            {hasContent(projects) && (
                <>
                    <Separator className="my-6" />
                    <section>
                        <h3 className="text-lg font-semibold mb-4 uppercase tracking-wide">Notable Projects</h3>
                        {projects.map((project, index) => (
                            <div key={index} className="mb-4 last:mb-0">
                                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-1">
                                    <h4 className="font-semibold text-base">{project.name}</h4>
                                    {project.link && <span className="text-sm text-gray-600 mt-1 md:mt-0">{project.link}</span>}
                                </div>
                                <p className="text-sm text-gray-800 mb-2">{project.description}</p>
                                <div className="flex flex-wrap gap-1">
                                    {project.technologies.map((tech, i) => (
                                        <Badge key={i} variant="secondary" className="text-xs bg-gray-100 text-gray-700">
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </section>
                </>
            )}

            {/* Education */}
            {hasContent(education) && (
                <>
                    <Separator className="my-6" />
                    <section>
                        <h3 className="text-lg font-semibold mb-4 uppercase tracking-wide">Education</h3>
                        {education.map((edu, index) => (
                            <div key={index} className="mb-4 last:mb-0">
                                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-1">
                                    <div>
                                        <h4 className="font-semibold text-base">{edu.degree}</h4>
                                        <p className="text-gray-700">{edu.institution}{edu.location && ` • ${edu.location}`}</p>
                                    </div>
                                    <span className="text-sm text-gray-600 mt-1 md:mt-0">{edu.graduationDate}</span>
                                </div>
                                {edu.gpa && <p className="text-sm text-gray-700">GPA: {edu.gpa}</p>}
                            </div>
                        ))}
                    </section>
                </>
            )}
        </div>
    );
};