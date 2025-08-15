"use client";
import React from 'react';

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
    personalInfo: { name: "", title: "", email: "", phone: "", location: "", website: "", github: "" },
    summary: "",
    experience: [],
    projects: [],
    skills: {},
    education: []
};


// =================================================================================
// ROBUST TEMPLATE COMPONENT with CONDITIONAL RENDERING
// =================================================================================
export const ModernMinimalTemplate: React.FC<{ data?: ResumeData }> = ({
    data = defaultResumeData
}) => {
    // Destructure data for cleaner access
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
        <div className="max-w-4xl mx-auto p-8 bg-white text-black font-light">
            {/* Header */}
            <header className="mb-8">
                <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-4">
                    <div>
                        <h1 className="text-4xl mb-1">{personalInfo.name || "Your Name"}</h1>
                        <h2 className="text-lg text-gray-600">{personalInfo.title || "Your Title"}</h2>
                    </div>
                    <div className="text-left md:text-right text-sm space-y-1 mt-4 md:mt-0">
                        {personalInfo.email && <div>{personalInfo.email}</div>}
                        {personalInfo.phone && <div>{personalInfo.phone}</div>}
                        {personalInfo.location && <div>{personalInfo.location}</div>}
                        {personalInfo.website && <div>{personalInfo.website}</div>}
                    </div>
                </div>
                <div className="h-px bg-black"></div>
            </header>

            {/* Summary */}
            {hasContent(summary) && (
                <section className="mb-8">
                    <p className="text-gray-700 leading-relaxed text-base">{summary}</p>
                </section>
            )}

            {/* Experience */}
            {hasContent(experience) && (
                <section className="mb-8">
                    <h3 className="text-sm font-bold uppercase tracking-widest mb-4 text-gray-800">Experience</h3>
                    {experience.map((exp, index) => (
                        <div key={index} className="mb-6 border-l-2 border-gray-200 pl-6 relative">
                            <div className="absolute -left-1.5 top-1 w-3 h-3 bg-gray-800 rounded-full"></div>
                            <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                                <h4 className="text-lg font-medium">{exp.position}</h4>
                                <span className="text-sm text-gray-500">{exp.period}</span>
                            </div>
                            <p className="text-gray-600 mb-3">{exp.company}{exp.location && ` • ${exp.location}`}</p>
                            <ul className="space-y-2">
                                {exp.achievements.map((achievement, i) => (
                                    <li key={i} className="text-sm text-gray-700 flex items-start">
                                        <span className="inline-block w-2 h-2 bg-gray-400 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                                        {achievement}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </section>
            )}

            {/* Skills, Projects & Education Grid */}
            {(hasContent(skills) || hasContent(projects) || hasContent(education)) && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                    {/* Skills */}
                    {hasContent(skills) && (
                        <section>
                            <h3 className="text-sm font-bold uppercase tracking-widest mb-4 text-gray-800">Skills</h3>
                            {Object.entries(skills).map(([category, skillList]) => (
                                <div key={category} className="mb-4">
                                    <h4 className="font-medium text-sm mb-2 text-gray-700">{category}</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {skillList.map((skill, index) => (
                                            <span key={index} className="px-2.5 py-1 bg-gray-100 text-xs text-gray-800 rounded-full">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </section>
                    )}

                    {/* This column holds both Projects and Education */}
                    <section>
                        {/* Projects */}
                        {hasContent(projects) && (
                            <div className="mb-8">
                                <h3 className="text-sm font-bold uppercase tracking-widest mb-4 text-gray-800">Projects</h3>
                                {projects.map((project, index) => (
                                    <div key={index} className="mb-4">
                                        <div className='flex items-center justify-between'>
                                            <h4 className="font-medium text-base">{project.title}</h4>
                                            <p className='text-xs'>{project.period}</p>
                                        </div>
                                        <p className="text-sm text-gray-600 my-1">{project.description}</p>
                                        <p className="text-xs text-gray-500">{project.technologies.join(', ')}</p>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Education */}
                        {hasContent(education) && (
                            <div>
                                <h3 className="text-sm font-bold uppercase tracking-widest mb-4 text-gray-800">Education</h3>
                                {education.map((edu, index) => (
                                    <div key={index}>
                                        <h4 className="font-medium text-base">{edu.degree}</h4>
                                        <p className="text-sm text-gray-600">{edu.school} • {edu.year}</p>
                                        {edu.gpa && <p className="text-xs text-gray-500">GPA: {edu.gpa}</p>}
                                    </div>
                                ))}
                            </div>
                        )}
                    </section>
                </div>
            )}
        </div>
    );
};