"use client";
import React from 'react';
import { Mail, Phone, MapPin, Globe, Linkedin, Github } from 'lucide-react';

// =================================================================================
// TYPES (Remain the same as they correctly define the structure)
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
// UPDATED DEFAULT DATA - Now uses the "blank slate" version
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
export const ClassicProfessionalTemplate: React.FC<{ data?: ResumeData }> = ({ data = defaultResumeData }) => {
    // Destructure data for cleaner access
    const { personalInfo, summary, experience, education, skills, projects } = data;
    console.log("data: ", data)
    // Helper function to check if a section should be rendered
    const hasContent = (value: any): boolean => {
        if (!value) return false;
        if (Array.isArray(value)) return value.length > 0;
        if (typeof value === 'object') return Object.keys(value).length > 0;
        if (typeof value === 'string') return value.trim() !== '';
        return false;
    };

    return (
        <div className="p-8 bg-white text-gray-800 font-sans !w-full">
            {/* Header - Renders basic structure even if empty, but hides specific links */}
            <header className="text-center border-b-2 border-gray-800 pb-4 mb-6">
                <h1 className="text-4xl font-bold tracking-wider mb-1">{personalInfo.name || "Your Name"}</h1>
                <h2 className="text-xl text-gray-600 font-light tracking-widest uppercase mb-4">{personalInfo.title || "Your Title"}</h2>
                <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-sm text-gray-700">
                    {personalInfo.email && <span className="flex items-center gap-2"><Mail className="w-4 h-4" />{personalInfo.email}</span>}
                    {personalInfo.phone && <span className="flex items-center gap-2"><Phone className="w-4 h-4" />{personalInfo.phone}</span>}
                    {personalInfo.location && <span className="flex items-center gap-2"><MapPin className="w-4 h-4" />{personalInfo.location}</span>}
                    {personalInfo.website && <span className="flex items-center gap-2"><Globe className="w-4 h-4" />{personalInfo.website}</span>}
                    {personalInfo.github && <span className="flex items-center gap-2"><Github className="w-4 h-4" />{personalInfo.github}</span>}
                    {personalInfo.linkedin && <span className="flex items-center gap-2"><Linkedin className="w-4 h-4" />{personalInfo.linkedin}</span>}
                </div>
            </header>

            {/* Summary - Only render this section if there is a summary */}
            {hasContent(summary) && (
                <section className="mb-8">
                    <h3 className="text-lg font-bold mb-3 text-center tracking-widest border-b border-gray-300 pb-2">SUMMARY</h3>
                    <p className="text-center text-gray-700 text-base leading-relaxed">{summary}</p>
                </section>
            )}

            <main className="grid grid-cols-1 lg:grid-cols-3 gap-x-8">
                <div className="lg:col-span-2">
                    {/* Experience - Only render this section if there are experience entries */}
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
                                        {exp.achievements.map((achievement, i) => (
                                            <li key={i}>{achievement}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </section>
                    )}

                    {/* Projects - Only render this section if there are project entries */}
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
                    {/* Skills - Only render this section if there are skills entries */}
                    {hasContent(skills) && (
                        <section className="mb-8">
                            <h3 className="text-lg font-bold mb-4 tracking-widest border-b border-gray-300 pb-2">SKILLS</h3>
                            {Object.entries(skills).map(([category, skillList]) => (
                                <div key={category} className="mb-4">
                                    <h4 className="font-semibold text-base mb-2">{category}</h4>
                                    <ul className="text-sm space-y-1">
                                        {skillList.map((skill, index) => (
                                            <li key={index} className="text-gray-700">{skill}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </section>
                    )}

                    {/* Education - Only render this section if there are education entries */}
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