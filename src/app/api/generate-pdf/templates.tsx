// src/app/api/generate-pdf/templates.tsx

import React from 'react';

// =================================================================================
// TYPES
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
// DEFAULT DATA & HELPERS
// =================================================================================
const defaultResumeData: ResumeData = {
    personalInfo: { name: "", title: "", email: "", phone: "", location: "", website: "", github: "" },
    summary: "",
    experience: [],
    projects: [],
    skills: {},
    education: []
};

const hasContent = (value: any): boolean => {
    if (!value) return false;
    if (Array.isArray(value)) return value.length > 0;
    if (typeof value === 'object') return Object.keys(value).length > 0;
    if (typeof value === 'string') return value.trim() !== '';
    return false;
};

// =================================================================================
// SERVER-ONLY TEMPLATES
// =================================================================================

export const ClassicProfessionalTemplate_ForServer: React.FC<{ data?: ResumeData }> = ({ data = defaultResumeData }) => {
    const { personalInfo, summary, experience, education, skills, projects } = data;

    return (
        <div className="p-8 bg-white text-gray-800 font-sans !w-full">
            <header className="text-center border-b-2 border-gray-800 pb-4 mb-6">
                <h1 className="text-4xl font-bold tracking-wider mb-1">{personalInfo.name || "Your Name"}</h1>
                <h2 className="text-xl text-gray-600 font-light tracking-widest uppercase mb-4">{personalInfo.title || "Your Title"}</h2>
                <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-sm text-gray-700">
                    {personalInfo.email && <span className="flex items-center gap-2"><span>📧</span> {personalInfo.email}</span>}
                    {personalInfo.phone && <span className="flex items-center gap-2"><span>📞</span> {personalInfo.phone}</span>}
                    {personalInfo.location && <span className="flex items-center gap-2"><span>📍</span> {personalInfo.location}</span>}
                    {personalInfo.website && <span className="flex items-center gap-2"><span>🌐</span> {personalInfo.website}</span>}
                    {personalInfo.github && <span className="flex items-center gap-2"><span></span> {personalInfo.github}</span>}
                    {personalInfo.linkedin && <span className="flex items-center gap-2"><span></span> {personalInfo.linkedin}</span>}
                </div>
            </header>

            {hasContent(summary) && (
                <section className="mb-8">
                    <h3 className="text-lg font-bold mb-3 text-center tracking-widest border-b border-gray-300 pb-2">SUMMARY</h3>
                    <p className="text-center text-gray-700 text-base leading-relaxed">{summary}</p>
                </section>
            )}

            <main className="grid grid-cols-1 lg:grid-cols-3 gap-x-8">
                <div className="lg:col-span-2">
                    {hasContent(experience) && (
                        <section className="mb-8">
                            <h3 className="text-lg font-bold mb-4 tracking-widest border-b border-gray-300 pb-2">WORK EXPERIENCE</h3>
                            {experience.map((exp, index) => (
                                <div key={index} className="mb-6">
                                    <div className="flex justify-between items-baseline mb-1">
                                        <h4 className="font-bold text-base">{exp.position}</h4>
                                        <span className="text-sm text-gray-600 font-medium">{exp.period}</span>
                                    </div>
                                    <p className="text-gray-700 mb-2 font-semibold">{exp.company}, {exp.location}</p>
                                    <ul className="list-disc list-inside space-y-1.5 text-sm text-gray-800">
                                        {exp.achievements.map((achievement, i) => <li key={i}>{achievement}</li>)}
                                    </ul>
                                </div>
                            ))}
                        </section>
                    )}

                    {hasContent(projects) && (
                        <section>
                            <h3 className="text-lg font-bold mb-4 tracking-widest border-b border-gray-300 pb-2">PROJECTS</h3>
                            {projects.map((project, index) => (
                                <div key={index} className="mb-4">
                                    <div className='flex items-center justify-between'>
                                        <h4 className="font-bold text-base">{project.title}</h4>
                                        <p className='text-xs'>{project.period}</p>
                                    </div>
                                    <p className="text-sm text-gray-700 my-1">{project.description}</p>
                                    <p className="text-xs text-gray-600"><span className="font-semibold">Technologies:</span> {project.technologies.join(', ')}</p>
                                </div>
                            ))}
                        </section>
                    )}
                </div>
                <aside>
                    {hasContent(skills) && (
                        <section className="mb-8">
                            <h3 className="text-lg font-bold mb-4 tracking-widest border-b border-gray-300 pb-2">SKILLS</h3>
                            {Object.entries(skills).map(([category, skillList]) => (
                                <div key={category} className="mb-4">
                                    <h4 className="font-semibold text-base mb-2">{category}</h4>
                                    <ul className="text-sm space-y-1">
                                        {skillList.map((skill, index) => <li key={index} className="text-gray-700">{skill}</li>)}
                                    </ul>
                                </div>
                            ))}
                        </section>
                    )}

                    {hasContent(education) && (
                        <section>
                            <h3 className="text-lg font-bold mb-4 tracking-widest border-b border-gray-300 pb-2">EDUCATION</h3>
                            {education.map((edu, index) => (
                                <div key={index} className="mb-4">
                                    <h4 className="font-bold text-base">{edu.degree}</h4>
                                    <p className="text-sm text-gray-700 font-semibold">{edu.school}, {edu.location}</p>
                                    <p className="text-xs text-gray-600 mt-1">{edu.year}</p>
                                    {edu.gpa && <p className="text-xs text-gray-600">GPA: {edu.gpa}</p>}
                                </div>
                            ))}
                        </section>
                    )}
                </aside>
            </main>
        </div>
    );
};

export const CorporateCleanTemplate_ForServer: React.FC<{ data?: ResumeData }> = ({ data = defaultResumeData }) => {
    const { personalInfo, summary, experience, education, skills, projects } = data;

    return (
        <div className="max-w-4xl mx-auto bg-white text-black font-sans">
            <div className="bg-gray-50 p-6 border-b">
                <div className="flex flex-col md:flex-row md:justify-between">
                    <div>
                        <h1 className="text-2xl font-bold mb-1">{personalInfo.name || "Your Name"}</h1>
                        <h2 className="text-lg text-gray-600">{personalInfo.title || "Your Title"}</h2>
                    </div>
                    <div className="mt-4 md:mt-0 text-sm space-y-1 text-right">
                        {personalInfo.email && <div className="flex items-center justify-end gap-2"><span className="text-gray-800">{personalInfo.email}</span><span>📧</span></div>}
                        {personalInfo.phone && <div className="flex items-center justify-end gap-2"><span className="text-gray-800">{personalInfo.phone}</span><span>📞</span></div>}
                        {personalInfo.location && <div className="flex items-center justify-end gap-2"><span className="text-gray-800">{personalInfo.location}</span><span>📍</span></div>}
                    </div>
                </div>
            </div>

            <div className="p-6">
                {hasContent(summary) && (
                    <div className="mb-6 border-l-4 border-l-gray-800 shadow-sm p-4">
                        <h3 className="text-base flex items-center gap-2 text-gray-800 font-bold mb-2">Professional Summary</h3>
                        <p className="text-sm text-gray-700">{summary}</p>
                    </div>
                )}

                {hasContent(experience) && (
                    <div className="mb-6 border-l-4 border-l-gray-800 shadow-sm p-4">
                        <h3 className="text-base flex items-center gap-2 text-gray-800 font-bold mb-2">Professional Experience</h3>
                        <div className="space-y-4">
                            {experience.map((exp, index) => (
                                <div key={index} className="pb-4 border-b border-gray-100 last:border-b-0">
                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                                        <div>
                                            <h4 className="font-semibold text-sm">{exp.position}</h4>
                                            <p className="text-sm text-gray-600">{exp.company}{exp.location && ` | ${exp.location}`}</p>
                                        </div>
                                        <span className="text-xs mt-2 sm:mt-0 border rounded px-2 py-1">{exp.period}</span>
                                    </div>
                                    <ul className="list-disc list-inside space-y-1 text-xs text-gray-700 pl-1">
                                        {exp.achievements.map((achievement, i) => <li key={i}>{achievement}</li>)}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
                {(hasContent(skills) || hasContent(education) || hasContent(projects)) && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {hasContent(skills) && (
                            <div className="border-l-4 border-l-gray-800 shadow-sm p-4">
                                <h3 className="text-base flex items-center gap-2 text-gray-800 font-bold mb-2">Technical Skills</h3>
                                {Object.entries(skills).map(([category, skillList]) => (
                                    <div key={category} className="mb-3 last:mb-0">
                                        <h4 className="font-medium text-xs mb-2 text-gray-800">{category}</h4>
                                        <div className="flex flex-wrap gap-1.5">
                                            {skillList.map((skill, index) => <span key={index} className="text-xs font-normal bg-gray-100 rounded-full px-2 py-1">{skill}</span>)}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                        <div className="space-y-6">
                            {hasContent(education) && (
                                <div className="border-l-4 border-l-gray-800 shadow-sm p-4">
                                    <h3 className="text-base flex items-center gap-2 text-gray-800 font-bold mb-2">Education</h3>
                                    {education.map((edu, index) => (
                                        <div key={index} className="mb-2 last:mb-0">
                                            <h4 className="font-semibold text-sm">{edu.degree}</h4>
                                            <p className="text-xs text-gray-600">{edu.school}, {edu.location}</p>
                                            <p className="text-xs text-gray-500">{edu.year} {edu.gpa && `• GPA: ${edu.gpa}`}</p>
                                        </div>
                                    ))}
                                </div>
                            )}
                            {hasContent(projects) && (
                                <div className="border-l-4 border-l-gray-800 shadow-sm p-4">
                                    <h3 className="text-base text-gray-800 font-bold mb-2">Notable Projects</h3>
                                    <div className="space-y-3">
                                        {projects.map((project, index) => (
                                            <div key={index}>
                                                <div className='flex items-center justify-between'>
                                                    <h4 className="font-semibold text-sm">{project.title}</h4>
                                                    <p className='text-xs'>{project.period}</p>
                                                </div>
                                                <p className="text-xs text-gray-600 mb-1">{project.description}</p>
                                                <div className="flex flex-wrap gap-1">
                                                    {project.technologies.map((tech, i) => <span key={i} className="text-xs font-normal border rounded-full px-2 py-1">{tech}</span>)}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};


export const CreativeTimelineTemplate_ForServer: React.FC<{ data?: ResumeData }> = ({ data = defaultResumeData }) => {
    const { personalInfo, summary, experience, education, skills, projects } = data;

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
                                            {project.technologies.map((tech, i) => <span key={i} className="text-xs bg-gray-100 px-2 py-1 rounded-full">{tech}</span>)}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}
                </div>

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
                                                {skillList.map((skill, index) => <div key={index} className="text-xs bg-white px-2.5 py-1 rounded-full border border-gray-200">{skill}</div>)}
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

export const ExecutiveSummaryTemplate_ForServer: React.FC<{ data?: ResumeData }> = ({ data = defaultResumeData }) => {
    const { personalInfo, summary, experience, education, skills, projects } = data;

    return (
        <div className="max-w-4xl mx-auto bg-white text-black font-sans">
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
                                            <span className="text-xs mt-1 md:mt-0 px-2 py-0.5 border rounded-md">{exp.period}</span>
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
                                            {project.technologies.map((tech, i) => <span key={i} className="text-xs font-normal bg-gray-200 rounded-full px-2 py-1">{tech}</span>)}
                                        </div>
                                    </div>
                                ))}
                            </section>
                        )}
                    </div>

                    {(hasContent(skills) || hasContent(education)) && (
                        <aside className="bg-gray-50 p-4 rounded-lg">
                            {hasContent(skills) && (
                                <section className="mb-6">
                                    <h3 className="text-sm font-bold mb-4 text-gray-800 uppercase tracking-wider">Core Competencies</h3>
                                    {Object.entries(skills).map(([category, skillList]) => (
                                        <div key={category} className="mb-4 last:mb-0">
                                            <h4 className="font-semibold text-xs mb-2 text-gray-700">{category}</h4>
                                            <div className="space-y-1">
                                                {skillList.map((skill, index) => <div key={index} className="text-xs bg-white px-2 py-1.5 rounded-md shadow-sm border border-gray-200">{skill}</div>)}
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

export const ModernMinimalTemplate_ForServer: React.FC<{ data?: ResumeData }> = ({ data = defaultResumeData }) => {
    const { personalInfo, summary, experience, education, skills, projects } = data;

    return (
        <div className="max-w-4xl mx-auto p-8 bg-white text-black font-light">
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

            {hasContent(summary) && (
                <section className="mb-8">
                    <p className="text-gray-700 leading-relaxed text-base">{summary}</p>
                </section>
            )}

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

            {(hasContent(skills) || hasContent(projects) || hasContent(education)) && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                    {hasContent(skills) && (
                        <section>
                            <h3 className="text-sm font-bold uppercase tracking-widest mb-4 text-gray-800">Skills</h3>
                            {Object.entries(skills).map(([category, skillList]) => (
                                <div key={category} className="mb-4">
                                    <h4 className="font-medium text-sm mb-2 text-gray-700">{category}</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {skillList.map((skill, index) => <span key={index} className="px-2.5 py-1 bg-gray-100 text-xs text-gray-800 rounded-full">{skill}</span>)}
                                    </div>
                                </div>
                            ))}
                        </section>
                    )}

                    <section>
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