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
export const CreativeTimelineTemplate: React.FC<{ data?: ResumeData }> = ({
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
        <div className="max-w-4xl mx-auto p-6 sm:p-8 bg-white text-black font-sans">
            <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 pb-4 border-b-4 border-gray-800">
                <div>
                    <h1 className="text-3xl font-bold">{personalInfo.name || "Your Name"}</h1>
                    <h2 className="text-lg text-gray-600">{personalInfo.title || "Your Title"}</h2>
                </div>
                {(personalInfo.email || personalInfo.phone || personalInfo.location) && (
                    <div className="text-left sm:text-right mt-4 sm:mt-0">
                        <div className="bg-gray-800 text-white px-4 py-2 rounded-md inline-block">
                            {personalInfo.email && <div className="text-sm">{personalInfo.email}</div>}
                            {personalInfo.phone && <div className="text-sm">{personalInfo.phone}</div>}
                            {personalInfo.location && <div className="text-sm">{personalInfo.location}</div>}
                        </div>
                    </div>
                )}
            </header>

            <main className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Main Content Column */}
                <div className="lg:col-span-3">
                    {hasContent(summary) && (
                        <section className="mb-8">
                            <h3 className="bg-gray-800 text-white px-3 py-1 rounded-md text-sm font-bold mb-4 inline-block">ABOUT ME</h3>
                            <p className="text-sm leading-relaxed text-gray-700">{summary}</p>
                        </section>
                    )}

                    {hasContent(experience) && (
                        <section className="mb-8">
                            <h3 className="bg-gray-800 text-white px-3 py-1 rounded-md text-sm font-bold mb-6 inline-block">EXPERIENCE</h3>
                            {experience.map((exp, index) => (
                                <div key={index} className="relative pl-8 border-l-2 border-gray-800 mb-6 last:mb-0">
                                    <div className="absolute -left-2.5 top-0 w-5 h-5 bg-gray-800 border-4 border-white rounded-full"></div>
                                    <h4 className="font-bold text-base">{exp.position}</h4>
                                    <p className="text-gray-600 text-sm mb-2">{exp.company}{exp.location && ` • ${exp.location}`}</p>
                                    <p className="text-xs text-gray-500 mb-3">{exp.period}</p>
                                    <ul className="space-y-1.5 text-sm text-gray-800">
                                        {exp.achievements.map((achievement, i) => (
                                            <li key={i} className="flex items-start">
                                                <span className="mr-2 mt-1 text-gray-800">›</span>
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
                            <h3 className="bg-gray-800 text-white px-3 py-1 rounded-md text-sm font-bold mb-4 inline-block">PROJECTS</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {projects.map((project, index) => (
                                    <div key={index} className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                                        <div className='flex items-center justify-between'>
                                            <h4 className="font-bold text-sm">{project.title}</h4>
                                            <p className='text-xs'>{project.period}</p>
                                        </div>
                                        <p className="text-xs text-gray-600 my-2">{project.description}</p>
                                        <div className="flex flex-wrap gap-1.5">
                                            {project.technologies.map((tech, i) => (
                                                <span key={i} className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}
                </div>

                {/* Sidebar Column */}
                <aside>
                    {(hasContent(skills) || hasContent(education)) && (
                        <div className="bg-gray-50 p-4 rounded-lg sticky top-8">
                            {hasContent(skills) && (
                                <section className="mb-6">
                                    <h3 className="bg-gray-800 text-white px-2 py-1 rounded-md text-xs font-bold mb-4 inline-block">SKILLS</h3>
                                    {Object.entries(skills).map(([category, skillList]) => (
                                        <div key={category} className="mb-4 last:mb-0">
                                            <h4 className="font-bold text-sm mb-2">{category}</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {skillList.map((skill, index) => (
                                                    <div key={index} className="text-xs bg-white px-2.5 py-1 rounded-full border border-gray-200">
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
                                    <h3 className="bg-gray-800 text-white px-2 py-1 rounded-md text-xs font-bold mb-4 inline-block">EDUCATION</h3>
                                    {education.map((edu, index) => (
                                        <div key={index} className="bg-white p-3 rounded-md border border-gray-200 mb-2 last:mb-0">
                                            <h4 className="font-bold text-sm">{edu.degree}</h4>
                                            <p className="text-xs text-gray-600">{edu.school}, {edu.location}</p>
                                            <p className="text-xs text-gray-500 mt-1">{edu.year}</p>
                                            {edu.gpa && <p className="text-xs text-gray-500">GPA: {edu.gpa}</p>}
                                        </div>
                                    ))}
                                </section>
                            )}
                        </div>
                    )}
                </aside>
            </main>
        </div>
    );
};