
// // // import { Card, CardContent } from '@/components/ui/card';
// // // import { Button } from '@/components/ui/button';
// // // import { Badge } from '@/components/ui/badge';
// // // import {
// // //     User,
// // //     Mail,
// // //     Phone,
// // //     MapPin,
// // //     Globe,
// // //     Briefcase,
// // //     Star,
// // //     Award,
// // //     GraduationCap,
// // //     Calendar,
// // //     Building,
// // //     ExternalLink,
// // //     Github,
// // //     Edit,
// // //     FileText,
// // //     Sparkles,
// // //     Code,
// // //     Target
// // // } from 'lucide-react';
// // // import { ReactNode } from 'react';

// // // // Type Definitions
// // // interface PersonalInfo {
// // //     name?: string;
// // //     title?: string;
// // //     email?: string;
// // //     phone?: string;
// // //     location?: string;
// // //     website?: string;
// // //     github?: string;
// // // }

// // // interface Experience {
// // //     id?: number | string;
// // //     title?: string;
// // //     company?: string;
// // //     location?: string;
// // //     period?: string;
// // //     achievements?: string[];
// // // }

// // // interface Project {
// // //     id?: number | string;
// // //     title?: string;
// // //     period?: string;
// // //     technologies?: string[];
// // //     description?: string[];
// // //     url?: string;
// // //     github?: string;
// // //     featured?: boolean;
// // // }

// // // type Skills = string[] | { [category: string]: string[] };

// // // interface Education {
// // //     id?: number | string;
// // //     degree?: string;
// // //     school?: string;
// // //     major?: string;
// // //     location?: string;
// // //     year?: string;
// // //     gpa?: number | string;
// // //     coursework?: string[];
// // //     achievements?: string[];
// // //     activities?: string[];
// // // }

// // // interface ResumeData {
// // //     personalInfo?: PersonalInfo;
// // //     summary?: string;
// // //     experience?: Experience[];
// // //     projects?: Project[];
// // //     skills?: Skills;
// // //     education?: Education[];
// // // }

// // // type EditableSection = 'personalInfo' | 'summary' | 'experience' | 'projects' | 'skills' | 'education';

// // // interface ResumePreviewProps {
// // //     resumeData: ResumeData;
// // //     onEditSection?: (section: EditableSection) => void;
// // //     isFullscreen?: boolean;
// // // }

// // // interface SectionEditButtonProps {
// // //     section: EditableSection;
// // //     className?: string;
// // // }

// // // export function ResumePreview({ resumeData, onEditSection, isFullscreen }: ResumePreviewProps) {
// // //     const handleSectionEdit = (section: EditableSection) => {
// // //         if (onEditSection) {
// // //             onEditSection(section);
// // //         }
// // //     };

// // //     const SectionEditButton = ({ section, className = "" }: SectionEditButtonProps) => (
// // //         <Button
// // //             variant="ghost"
// // //             size="sm"
// // //             onClick={() => handleSectionEdit(section)}
// // //             className={`opacity-0 group-hover:opacity-100 transition-opacity absolute top-2 right-2 ${className}`}
// // //         >
// // //             <Edit className="h-3 w-3" />
// // //         </Button>
// // //     );

// // //     // Helper function to render skills by category
// // //     const renderSkillsByCategory = (): ReactNode => {
// // //         if (resumeData.skills && typeof resumeData.skills === 'object' && !Array.isArray(resumeData.skills)) {
// // //             return Object.entries(resumeData.skills).map(([category, skills]) => (
// // //                 <div key={category} className="mb-4">
// // //                     <h4 className="text-sm font-semibold text-gray-800 mb-2">{category}</h4>
// // //                     <div className="flex flex-wrap gap-2">
// // //                         {skills.map((skill, index) => (
// // //                             <Badge
// // //                                 key={index}
// // //                                 variant="outline"
// // //                                 className="bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100 transition-colors cursor-default text-xs"
// // //                             >
// // //                                 {skill}
// // //                             </Badge>
// // //                         ))}
// // //                     </div>
// // //                 </div>
// // //             ));
// // //         } else if (Array.isArray(resumeData.skills)) {
// // //             return (
// // //                 <div className="flex flex-wrap gap-2">
// // //                     {resumeData.skills.map((skill, index) => (
// // //                         <Badge
// // //                             key={index}
// // //                             variant="outline"
// // //                             className="bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100 transition-colors cursor-default"
// // //                         >
// // //                             {skill}
// // //                         </Badge>
// // //                     ))}
// // //                 </div>
// // //             );
// // //         }
// // //         return null;
// // //     };

// // //     return (
// // //         <div className="sticky top-4">
// // //             <Card className="shadow-2xl border-0 overflow-hidden">
// // //                 {/* Header Section */}
// // //                 <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 p-8 text-white relative group">
// // //                     <SectionEditButton section="personalInfo" />
// // //                     <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
// // //                         <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
// // //                             <User className="h-12 w-12 text-white" />
// // //                         </div>
// // //                         <div className="flex-1">
// // //                             <h1 className="text-3xl font-bold mb-2">{resumeData.personalInfo?.name || 'Your Name'}</h1>
// // //                             <p className="text-xl text-blue-100 mb-4">{resumeData.personalInfo?.title || 'Professional Title'}</p>
// // //                             <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 text-sm">
// // //                                 {resumeData.personalInfo?.email && (
// // //                                     <div className="flex items-center gap-2">
// // //                                         <Mail className="h-4 w-4" />
// // //                                         <a href={`mailto:${resumeData.personalInfo.email}`} className="hover:text-blue-200">
// // //                                             {resumeData.personalInfo.email}
// // //                                         </a>
// // //                                     </div>
// // //                                 )}
// // //                                 {resumeData.personalInfo?.phone && (
// // //                                     <div className="flex items-center gap-2">
// // //                                         <Phone className="h-4 w-4" />
// // //                                         <a href={`tel:${resumeData.personalInfo.phone}`} className="hover:text-blue-200">
// // //                                             {resumeData.personalInfo.phone}
// // //                                         </a>
// // //                                     </div>
// // //                                 )}
// // //                                 {resumeData.personalInfo?.location && (
// // //                                     <div className="flex items-center gap-2">
// // //                                         <MapPin className="h-4 w-4" />
// // //                                         {resumeData.personalInfo.location}
// // //                                     </div>
// // //                                 )}
// // //                                 {resumeData.personalInfo?.website && (
// // //                                     <div className="flex items-center gap-2">
// // //                                         <Globe className="h-4 w-4" />
// // //                                         <a
// // //                                             href={resumeData.personalInfo.website.startsWith('http') ? resumeData.personalInfo.website : `https://${resumeData.personalInfo.website}`}
// // //                                             target="_blank"
// // //                                             rel="noopener noreferrer"
// // //                                             className="hover:text-blue-200"
// // //                                         >
// // //                                             {resumeData.personalInfo.website}
// // //                                         </a>
// // //                                     </div>
// // //                                 )}
// // //                                 {resumeData.personalInfo?.github && (
// // //                                     <div className="flex items-center gap-2">
// // //                                         <Github className="h-4 w-4" />
// // //                                         <a
// // //                                             href={resumeData.personalInfo.github.startsWith('http') ? resumeData.personalInfo.github : `https://${resumeData.personalInfo.github}`}
// // //                                             target="_blank"
// // //                                             rel="noopener noreferrer"
// // //                                             className="hover:text-blue-200"
// // //                                         >
// // //                                             {resumeData.personalInfo.github}
// // //                                         </a>
// // //                                     </div>
// // //                                 )}
// // //                             </div>
// // //                         </div>
// // //                     </div>
// // //                 </div>

// // //                 <div className="p-8 space-y-8 overflow-y-auto ">
// // //                     {/* Professional Summary */}
// // //                     {resumeData.summary && (
// // //                         <section className="relative group">
// // //                             <SectionEditButton section="summary" />
// // //                             <div className="flex items-center gap-2 mb-4">
// // //                                 <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
// // //                                     <FileText className="h-4 w-4 text-blue-600" />
// // //                                 </div>
// // //                                 <h2 className="text-xl font-bold text-gray-900">PROFESSIONAL SUMMARY</h2>
// // //                                 <Badge variant="secondary" className="ml-auto text-xs bg-green-50 text-green-700">
// // //                                     AI Enhanced
// // //                                 </Badge>
// // //                             </div>
// // //                             <p className="text-gray-700 leading-relaxed">{resumeData.summary}</p>
// // //                         </section>
// // //                     )}

// // //                     {/* Experience */}
// // //                     {resumeData.experience && resumeData.experience.length > 0 && (
// // //                         <section className="relative group">
// // //                             <SectionEditButton section="experience" />
// // //                             <div className="flex items-center gap-2 mb-6">
// // //                                 <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
// // //                                     <Briefcase className="h-4 w-4 text-blue-600" />
// // //                                 </div>
// // //                                 <h2 className="text-xl font-bold text-gray-900">PROFESSIONAL EXPERIENCE</h2>
// // //                                 <Badge variant="secondary" className="ml-auto text-xs bg-blue-50 text-blue-700">
// // //                                     {resumeData.experience.length} Position{resumeData.experience.length !== 1 ? 's' : ''}
// // //                                 </Badge>
// // //                             </div>
// // //                             <div className="space-y-6">
// // //                                 {resumeData.experience.map((exp, index) => (
// // //                                     <div key={exp.id || index} className="relative pl-6 border-l-2 border-blue-200 hover:border-blue-400 transition-colors">
// // //                                         <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
// // //                                         <div className="mb-2">
// // //                                             <h3 className="text-lg font-semibold text-gray-900">{exp.title}</h3>
// // //                                             <div className="flex flex-col lg:flex-row lg:items-center gap-2 text-blue-600 font-medium">
// // //                                                 <div className="flex items-center gap-2">
// // //                                                     <Building className="h-3 w-3" />
// // //                                                     <span>{exp.company}</span>
// // //                                                     {exp.location && (
// // //                                                         <>
// // //                                                             <span>•</span>
// // //                                                             <span>{exp.location}</span>
// // //                                                         </>
// // //                                                     )}
// // //                                                 </div>
// // //                                                 {exp.period && (
// // //                                                     <>
// // //                                                         <span className="hidden lg:inline">•</span>
// // //                                                         <span className="flex items-center gap-1">
// // //                                                             <Calendar className="h-3 w-3" />
// // //                                                             {exp.period}
// // //                                                         </span>
// // //                                                     </>
// // //                                                 )}
// // //                                             </div>
// // //                                         </div>
// // //                                         <ul className="space-y-2">
// // //                                             {exp.achievements?.map((achievement, i) => (
// // //                                                 <li key={i} className="flex items-start gap-2 text-gray-700 hover:text-gray-900 transition-colors">
// // //                                                     <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
// // //                                                     <span>{achievement}</span>
// // //                                                 </li>
// // //                                             ))}
// // //                                         </ul>
// // //                                     </div>
// // //                                 ))}
// // //                             </div>
// // //                         </section>
// // //                     )}

// // //                     {/* Projects */}
// // //                     {resumeData.projects && resumeData.projects.length > 0 && (
// // //                         <section className="relative group">
// // //                             <SectionEditButton section="projects" />
// // //                             <div className="flex items-center gap-2 mb-6">
// // //                                 <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
// // //                                     <Star className="h-4 w-4 text-orange-600" />
// // //                                 </div>
// // //                                 <h2 className="text-xl font-bold text-gray-900">KEY PROJECTS</h2>
// // //                                 <Badge variant="secondary" className="ml-auto text-xs bg-orange-50 text-orange-700">
// // //                                     {resumeData.projects.length} Project{resumeData.projects.length !== 1 ? 's' : ''}
// // //                                 </Badge>
// // //                             </div>
// // //                             <div className="space-y-6">
// // //                                 {resumeData.projects.map((project, index) => (
// // //                                     <div key={project.id || index} className="relative pl-6 border-l-2 border-orange-200 hover:border-orange-400 transition-colors">
// // //                                         <div className="absolute -left-2 top-0 w-4 h-4 bg-orange-600 rounded-full"></div>
// // //                                         <div className="mb-3">
// // //                                             <div className="flex items-center gap-2 mb-1">
// // //                                                 <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
// // //                                                 {project.featured && (
// // //                                                     <Badge variant="secondary" className="text-xs bg-yellow-50 text-yellow-700">
// // //                                                         Featured
// // //                                                     </Badge>
// // //                                                 )}
// // //                                             </div>
// // //                                             <div className="flex flex-wrap items-center gap-3 text-sm">
// // //                                                 {project.period && (
// // //                                                     <div className="flex items-center gap-1 text-orange-600 font-medium">
// // //                                                         <Calendar className="h-3 w-3" />
// // //                                                         {project.period}
// // //                                                     </div>
// // //                                                 )}
// // //                                                 {project.technologies && project.technologies.length > 0 && (
// // //                                                     <div className="flex items-center gap-1 text-gray-600">
// // //                                                         <Code className="h-3 w-3" />
// // //                                                         <span>{project.technologies.join(', ')}</span>
// // //                                                     </div>
// // //                                                 )}
// // //                                             </div>
// // //                                             {(project.url || project.github) && (
// // //                                                 <div className="flex items-center gap-4 mt-2">
// // //                                                     {project.url && (
// // //                                                         <a
// // //                                                             href={project.url}
// // //                                                             target="_blank"
// // //                                                             rel="noopener noreferrer"
// // //                                                             className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800"
// // //                                                         >
// // //                                                             <ExternalLink className="h-3 w-3" />
// // //                                                             Live Demo
// // //                                                         </a>
// // //                                                     )}
// // //                                                     {project.github && (
// // //                                                         <a
// // //                                                             href={project.github}
// // //                                                             target="_blank"
// // //                                                             rel="noopener noreferrer"
// // //                                                             className="flex items-center gap-1 text-sm text-gray-700 hover:text-gray-900"
// // //                                                         >
// // //                                                             <Github className="h-3 w-3" />
// // //                                                             Source Code
// // //                                                         </a>
// // //                                                     )}
// // //                                                 </div>
// // //                                             )}
// // //                                         </div>
// // //                                         <ul className="space-y-2">
// // //                                             {project.description?.map((desc, i) => (
// // //                                                 <li key={i} className="flex items-start gap-2 text-gray-700 hover:text-gray-900 transition-colors">
// // //                                                     <div className="w-1.5 h-1.5 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
// // //                                                     <span>{desc}</span>
// // //                                                 </li>
// // //                                             ))}
// // //                                         </ul>
// // //                                     </div>
// // //                                 ))}
// // //                             </div>
// // //                         </section>
// // //                     )}

// // //                     {/* Skills */}
// // //                     {resumeData.skills && (
// // //                         <section className="relative group">
// // //                             <SectionEditButton section="skills" />
// // //                             <div className="flex items-center gap-2 mb-4">
// // //                                 <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
// // //                                     <Award className="h-4 w-4 text-purple-600" />
// // //                                 </div>
// // //                                 <h2 className="text-xl font-bold text-gray-900">TECHNICAL SKILLS</h2>
// // //                                 <Badge variant="secondary" className="ml-auto text-xs bg-purple-50 text-purple-700">
// // //                                     {Array.isArray(resumeData.skills)
// // //                                         ? resumeData.skills.length
// // //                                         : Object.values(resumeData.skills).flat().length
// // //                                     } Skills
// // //                                 </Badge>
// // //                             </div>
// // //                             {renderSkillsByCategory()}
// // //                         </section>
// // //                     )}

// // //                     {/* Education */}
// // //                     {resumeData.education && resumeData.education.length > 0 && (
// // //                         <section className="relative group">
// // //                             <SectionEditButton section="education" />
// // //                             <div className="flex items-center gap-2 mb-4">
// // //                                 <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
// // //                                     <GraduationCap className="h-4 w-4 text-green-600" />
// // //                                 </div>
// // //                                 <h2 className="text-xl font-bold text-gray-900">EDUCATION</h2>
// // //                                 <Badge variant="secondary" className="ml-auto text-xs bg-green-50 text-green-700">
// // //                                     {resumeData.education.length} Degree{resumeData.education.length !== 1 ? 's' : ''}
// // //                                 </Badge>
// // //                             </div>
// // //                             <div className="space-y-4">
// // //                                 {resumeData.education.map((edu, index) => (
// // //                                     <div key={edu.id || index} className="relative pl-6 border-l-2 border-green-200 hover:border-green-400 transition-colors">
// // //                                         <div className="absolute -left-2 top-0 w-4 h-4 bg-green-600 rounded-full"></div>
// // //                                         <div>
// // //                                             <h3 className="font-semibold text-gray-900">
// // //                                                 {edu.degree}
// // //                                                 {edu.major && ` in ${edu.major}`}
// // //                                             </h3>
// // //                                             <div className="flex flex-col lg:flex-row lg:items-center gap-2 text-green-600 font-medium text-sm">
// // //                                                 <div className="flex items-center gap-2">
// // //                                                     <Building className="h-3 w-3" />
// // //                                                     <span>{edu.school}</span>
// // //                                                     {edu.location && (
// // //                                                         <>
// // //                                                             <span>•</span>
// // //                                                             <span>{edu.location}</span>
// // //                                                         </>
// // //                                                     )}
// // //                                                 </div>
// // //                                                 {edu.year && (
// // //                                                     <>
// // //                                                         <span className="hidden lg:inline">•</span>
// // //                                                         <span className="flex items-center gap-1">
// // //                                                             <Calendar className="h-3 w-3" />
// // //                                                             {edu.year}
// // //                                                         </span>
// // //                                                     </>
// // //                                                 )}
// // //                                                 {edu.gpa && (
// // //                                                     <>
// // //                                                         <span className="hidden lg:inline">•</span>
// // //                                                         <span className="flex items-center gap-1">
// // //                                                             <Target className="h-3 w-3" />
// // //                                                             GPA: {edu.gpa}
// // //                                                         </span>
// // //                                                     </>
// // //                                                 )}
// // //                                             </div>

// // //                                             {/* Coursework */}
// // //                                             {edu.coursework && edu.coursework.length > 0 && (
// // //                                                 <div className="mt-2">
// // //                                                     <p className="text-xs font-medium text-gray-600 mb-1">Relevant Coursework:</p>
// // //                                                     <div className="flex flex-wrap gap-1">
// // //                                                         {edu.coursework.map((course, i) => (
// // //                                                             <Badge key={i} variant="outline" className="text-xs bg-green-50 text-green-700 border-green-200">
// // //                                                                 {course}
// // //                                                             </Badge>
// // //                                                         ))}
// // //                                                     </div>
// // //                                                 </div>
// // //                                             )}

// // //                                             {/* Achievements */}
// // //                                             {edu.achievements && edu.achievements.length > 0 && (
// // //                                                 <div className="mt-2">
// // //                                                     <p className="text-xs font-medium text-gray-600 mb-1">Achievements:</p>
// // //                                                     <div className="flex flex-wrap gap-1">
// // //                                                         {edu.achievements.map((achievement, i) => (
// // //                                                             <Badge key={i} variant="outline" className="text-xs bg-yellow-50 text-yellow-700 border-yellow-200">
// // //                                                                 {achievement}
// // //                                                             </Badge>
// // //                                                         ))}
// // //                                                     </div>
// // //                                                 </div>
// // //                                             )}

// // //                                             {/* Activities */}
// // //                                             {edu.activities && edu.activities.length > 0 && (
// // //                                                 <div className="mt-2">
// // //                                                     <p className="text-xs font-medium text-gray-600 mb-1">Activities:</p>
// // //                                                     <div className="flex flex-wrap gap-1">
// // //                                                         {edu.activities.map((activity, i) => (
// // //                                                             <Badge key={i} variant="outline" className="text-xs bg-blue-50 text-blue-700 border-blue-200">
// // //                                                                 {activity}
// // //                                                             </Badge>
// // //                                                         ))}
// // //                                                     </div>
// // //                                                 </div>
// // //                                             )}
// // //                                         </div>
// // //                                     </div>
// // //                                 ))}
// // //                             </div>
// // //                         </section>
// // //                     )}

// // //                     {/* AI Optimization Badge */}
// // //                     <div className="pt-4 border-t border-gray-200">
// // //                         <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
// // //                             <Sparkles className="h-4 w-4 text-blue-600" />
// // //                             <span>Optimized with ResumeBot AI</span>
// // //                             <Badge variant="outline" className="text-xs">
// // //                                 Version 2.0
// // //                             </Badge>
// // //                         </div>
// // //                     </div>
// // //                 </div>
// // //             </Card>
// // //         </div>
// // //     );
// // // }


// // import { Card, CardContent } from '@/components/ui/card';
// // import { Button } from '@/components/ui/button';
// // import { Badge } from '@/components/ui/badge';
// // import {
// //     User,
// //     Mail,
// //     Phone,
// //     MapPin,
// //     Globe,
// //     Briefcase,
// //     Star,
// //     Award,
// //     GraduationCap,
// //     Calendar,
// //     Building,
// //     ExternalLink,
// //     Github,
// //     Edit,
// //     FileText,
// //     Sparkles,
// //     Code,
// //     Target
// // } from 'lucide-react';
// // import { ReactNode } from 'react';

// // // Type Definitions
// // interface PersonalInfo {
// //     name?: string;
// //     title?: string;
// //     email?: string;
// //     phone?: string;
// //     location?: string;
// //     website?: string;
// //     github?: string;
// // }

// // interface Experience {
// //     id?: number | string;
// //     title?: string;
// //     company?: string;
// //     location?: string;
// //     period?: string;
// //     achievements?: string[];
// // }

// // interface Project {
// //     id?: number | string;
// //     title?: string;
// //     period?: string;
// //     technologies?: string[];
// //     description?: string[];
// //     url?: string;
// //     github?: string;
// //     featured?: boolean;
// // }

// // type Skills = string[] | { [category: string]: string[] };

// // interface Education {
// //     id?: number | string;
// //     degree?: string;
// //     school?: string;
// //     major?: string;
// //     location?: string;
// //     year?: string;
// //     gpa?: number | string;
// //     coursework?: string[];
// //     achievements?: string[];
// //     activities?: string[];
// // }

// // interface ResumeData {
// //     personalInfo?: PersonalInfo;
// //     summary?: string;
// //     experience?: Experience[];
// //     projects?: Project[];
// //     skills?: Skills;
// //     education?: Education[];
// //     isOptimized?: boolean; // New flag to indicate if content was AI-optimized
// // }

// // type EditableSection = 'personalInfo' | 'summary' | 'experience' | 'projects' | 'skills' | 'education';

// // interface ResumePreviewProps {
// //     resumeData: ResumeData;
// //     onEditSection?: (section: EditableSection) => void;
// //     isFullscreen?: boolean;
// //     isOptimized?: boolean; // Optional prop to indicate AI optimization
// // }

// // interface SectionEditButtonProps {
// //     section: EditableSection;
// //     className?: string;
// // }

// // export function ResumePreview({ resumeData, onEditSection, isFullscreen, isOptimized = false }: ResumePreviewProps) {
// //     const handleSectionEdit = (section: EditableSection) => {
// //         if (onEditSection) {
// //             onEditSection(section);
// //         }
// //     };

// //     const SectionEditButton = ({ section, className = "" }: SectionEditButtonProps) => (
// //         <Button
// //             variant="ghost"
// //             size="sm"
// //             onClick={() => handleSectionEdit(section)}
// //             className={`opacity-0 group-hover:opacity-100 transition-opacity absolute top-2 right-2 ${className}`}
// //         >
// //             <Edit className="h-3 w-3" />
// //         </Button>
// //     );

// //     // Helper function to render skills by category
// //     const renderSkillsByCategory = (): ReactNode => {
// //         if (resumeData.skills && typeof resumeData.skills === 'object' && !Array.isArray(resumeData.skills)) {
// //             return Object.entries(resumeData.skills).map(([category, skills]) => (
// //                 <div key={category} className="mb-4">
// //                     <h4 className="text-sm font-semibold text-gray-800 mb-2">{category}</h4>
// //                     <div className="flex flex-wrap gap-2">
// //                         {skills.map((skill, index) => (
// //                             <Badge
// //                                 key={index}
// //                                 variant="outline"
// //                                 className="bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100 transition-colors cursor-default text-xs"
// //                             >
// //                                 {skill}
// //                             </Badge>
// //                         ))}
// //                     </div>
// //                 </div>
// //             ));
// //         } else if (Array.isArray(resumeData.skills)) {
// //             return (
// //                 <div className="flex flex-wrap gap-2">
// //                     {resumeData.skills.map((skill, index) => (
// //                         <Badge
// //                             key={index}
// //                             variant="outline"
// //                             className="bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100 transition-colors cursor-default"
// //                         >
// //                             {skill}
// //                         </Badge>
// //                     ))}
// //                 </div>
// //             );
// //         }
// //         return null;
// //     };

// //     // Helper function to safely handle URL formatting
// //     const formatUrl = (url: string): string => {
// //         if (!url) return '';
// //         return url.startsWith('http') ? url : `https://${url}`;
// //     };

// //     // Helper function to check if any content exists
// //     const hasContent = (data: any): boolean => {
// //         if (Array.isArray(data)) return data.length > 0;
// //         if (typeof data === 'object') return Object.keys(data).length > 0;
// //         return Boolean(data);
// //     };

// //     return (
// //         <div className="sticky top-4">
// //             <Card className="shadow-2xl border-0 overflow-hidden !gap-2.5">
// //                 {/* Header Section */}
// //                 <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 px-8 py-4 text-white relative group">
// //                     <SectionEditButton section="personalInfo" />
// //                     {isOptimized && (
// //                         <div className="absolute top-4 left-4">
// //                             <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
// //                                 <Sparkles className="h-3 w-3 mr-1" />
// //                                 AI Optimized
// //                             </Badge>
// //                         </div>
// //                     )}
// //                     <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
// //                         <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
// //                             <User className="h-12 w-12 text-white" />
// //                         </div>
// //                         <div className="flex-1">
// //                             <h1 className="text-3xl font-bold mb-2">{resumeData.personalInfo?.name || 'Your Name'}</h1>
// //                             <p className="text-xl text-blue-100 mb-4">{resumeData.personalInfo?.title || 'Professional Title'}</p>
// //                             <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 text-sm">
// //                                 {resumeData.personalInfo?.email && (
// //                                     <div className="flex items-center gap-2">
// //                                         <Mail className="h-4 w-4" />
// //                                         <a href={`mailto:${resumeData.personalInfo.email}`} className="hover:text-blue-200">
// //                                             {resumeData.personalInfo.email}
// //                                         </a>
// //                                     </div>
// //                                 )}
// //                                 {resumeData.personalInfo?.phone && (
// //                                     <div className="flex items-center gap-2">
// //                                         <Phone className="h-4 w-4" />
// //                                         <a href={`tel:${resumeData.personalInfo.phone}`} className="hover:text-blue-200">
// //                                             {resumeData.personalInfo.phone}
// //                                         </a>
// //                                     </div>
// //                                 )}
// //                                 {resumeData.personalInfo?.location && (
// //                                     <div className="flex items-center gap-2">
// //                                         <MapPin className="h-4 w-4" />
// //                                         {resumeData.personalInfo.location}
// //                                     </div>
// //                                 )}
// //                                 {resumeData.personalInfo?.website && (
// //                                     <div className="flex items-center gap-2">
// //                                         <Globe className="h-4 w-4" />
// //                                         <a
// //                                             href={formatUrl(resumeData.personalInfo.website)}
// //                                             target="_blank"
// //                                             rel="noopener noreferrer"
// //                                             className="hover:text-blue-200"
// //                                         >
// //                                             {resumeData.personalInfo.website}
// //                                         </a>
// //                                     </div>
// //                                 )}
// //                                 {resumeData.personalInfo?.github && (
// //                                     <div className="flex items-center gap-2">
// //                                         <Github className="h-4 w-4" />
// //                                         <a
// //                                             href={formatUrl(resumeData.personalInfo.github)}
// //                                             target="_blank"
// //                                             rel="noopener noreferrer"
// //                                             className="hover:text-blue-200"
// //                                         >
// //                                             {resumeData.personalInfo.github}
// //                                         </a>
// //                                     </div>
// //                                 )}
// //                             </div>
// //                         </div>
// //                     </div>
// //                 </div>

// //                 <div className="p-8 py-3 space-y-6 overflow-y-auto">
// //                     {/* Professional Summary */}
// //                     {resumeData.summary && (
// //                         <section className="relative group">
// //                             <SectionEditButton section="summary" />
// //                             <div className="flex items-center gap-2 mb-4">
// //                                 <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
// //                                     <FileText className="h-4 w-4 text-blue-600" />
// //                                 </div>
// //                                 <h2 className="text-lg font-bold text-gray-900">PROFESSIONAL SUMMARY</h2>
// //                                 {isOptimized && (
// //                                     <Badge variant="secondary" className="ml-auto text-xs bg-green-50 text-green-700">
// //                                         <Sparkles className="h-3 w-3 mr-1" />
// //                                         AI Enhanced
// //                                     </Badge>
// //                                 )}
// //                             </div>
// //                             <p className="text-gray-700 leading-relaxed text-sm">{resumeData.summary}</p>
// //                         </section>
// //                     )}

// //                     {/* Experience */}
// //                     {hasContent(resumeData.experience) && (
// //                         <section className="relative group">
// //                             <SectionEditButton section="experience" />
// //                             <div className="flex items-center gap-2 mb-6">
// //                                 <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
// //                                     <Briefcase className="h-4 w-4 text-blue-600" />
// //                                 </div>
// //                                 <h2 className="text-lg font-bold text-gray-900">PROFESSIONAL EXPERIENCE</h2>
// //                                 <Badge variant="secondary" className="ml-auto text-xs bg-blue-50 text-blue-700">
// //                                     {resumeData.experience?.length || 0} Position{(resumeData.experience?.length || 0) !== 1 ? 's' : ''}
// //                                 </Badge>
// //                             </div>
// //                             <div className="space-y-6">
// //                                 {resumeData.experience?.map((exp, index) => (
// //                                     <div key={exp.id || index} className="relative pl-6 border-l-2 border-blue-200 hover:border-blue-400 transition-colors">
// //                                         <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
// //                                         <div className="mb-2">
// //                                             <h3 className="text-base font-semibold text-gray-900">{exp.title}</h3>
// //                                             <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-2 text-blue-600 font-medium text-sm">
// //                                                 <div className="flex items-center gap-2">
// //                                                     <Building className="h-3 w-3" />
// //                                                     <span>{exp.company}</span>
// //                                                     {exp.location && (
// //                                                         <>
// //                                                             <span>•</span>
// //                                                             <span>{exp.location}</span>
// //                                                         </>
// //                                                     )}
// //                                                 </div>
// //                                                 {exp.period && (
// //                                                     <>
// //                                                         <span className="hidden lg:inline">•</span>
// //                                                         <span className="flex items-center gap-1 text-sm">
// //                                                             <Calendar className="h-3 w-3" />
// //                                                             {exp.period}
// //                                                         </span>
// //                                                     </>
// //                                                 )}
// //                                             </div>
// //                                         </div>
// //                                         {exp.achievements && exp.achievements.length > 0 && (
// //                                             <ul className="space-y-2">
// //                                                 {exp.achievements.map((achievement, i) => (
// //                                                     <li key={i} className="flex items-start gap-2 text-gray-700 hover:text-gray-900 transition-colors text-sm">
// //                                                         <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
// //                                                         <span>{achievement}</span>
// //                                                     </li>
// //                                                 ))}
// //                                             </ul>
// //                                         )}
// //                                     </div>
// //                                 ))}
// //                             </div>
// //                         </section>
// //                     )}

// //                     {/* Projects */}
// //                     {hasContent(resumeData.projects) && (
// //                         <section className="relative group">
// //                             <SectionEditButton section="projects" />
// //                             <div className="flex items-center gap-2 mb-6">
// //                                 <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
// //                                     <Star className="h-4 w-4 text-orange-600" />
// //                                 </div>
// //                                 <h2 className="text-lg font-bold text-gray-900">KEY PROJECTS</h2>
// //                                 <Badge variant="secondary" className="ml-auto text-xs bg-orange-50 text-orange-700">
// //                                     {resumeData.projects?.length || 0} Project{(resumeData.projects?.length || 0) !== 1 ? 's' : ''}
// //                                 </Badge>
// //                             </div>
// //                             <div className="space-y-6">
// //                                 {resumeData.projects?.map((project, index) => (
// //                                     <div key={project.id || index} className="relative pl-6 border-l-2 border-orange-200 hover:border-orange-400 transition-colors">
// //                                         <div className="absolute -left-2 top-0 w-4 h-4 bg-orange-600 rounded-full"></div>
// //                                         <div className="mb-3">
// //                                             <div className="flex items-center gap-2 mb-1">
// //                                                 <h3 className="text-sm font-semibold text-gray-900">{project.title}</h3>
// //                                                 {project.featured && (
// //                                                     <Badge variant="secondary" className="text-xs bg-yellow-50 text-yellow-700">
// //                                                         Featured
// //                                                     </Badge>
// //                                                 )}
// //                                             </div>
// //                                             <div className="flex flex-wrap items-center gap-3 text-sm">
// //                                                 {project.period && (
// //                                                     <div className="flex items-center gap-1 text-orange-600 font-medium">
// //                                                         <Calendar className="h-3 w-3" />
// //                                                         {project.period}
// //                                                     </div>
// //                                                 )}
// //                                                 {project.technologies && project.technologies.length > 0 && (
// //                                                     <div className="flex items-center gap-1 text-gray-600">
// //                                                         <Code className="h-3 w-3" />
// //                                                         <span>{project.technologies.join(', ')}</span>
// //                                                     </div>
// //                                                 )}
// //                                             </div>
// //                                             {(project.url || project.github) && (
// //                                                 <div className="flex items-center gap-4 mt-2">
// //                                                     {project.url && (
// //                                                         <a
// //                                                             href={formatUrl(project.url)}
// //                                                             target="_blank"
// //                                                             rel="noopener noreferrer"
// //                                                             className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800"
// //                                                         >
// //                                                             <ExternalLink className="h-3 w-3" />
// //                                                             Live Demo
// //                                                         </a>
// //                                                     )}
// //                                                     {project.github && (
// //                                                         <a
// //                                                             href={formatUrl(project.github)}
// //                                                             target="_blank"
// //                                                             rel="noopener noreferrer"
// //                                                             className="flex items-center gap-1 text-sm text-gray-700 hover:text-gray-900"
// //                                                         >
// //                                                             <Github className="h-3 w-3" />
// //                                                             Source Code
// //                                                         </a>
// //                                                     )}
// //                                                 </div>
// //                                             )}
// //                                         </div>
// //                                         {project.description && project.description.length > 0 && (
// //                                             <ul className="space-y-2">
// //                                                 {project.description.map((desc, i) => (
// //                                                     <li key={i} className="flex items-start gap-2 text-gray-700 hover:text-gray-900 transition-colors text-sm">
// //                                                         <div className="w-1.5 h-1.5 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
// //                                                         <span>{desc}</span>
// //                                                     </li>
// //                                                 ))}
// //                                             </ul>
// //                                         )}
// //                                     </div>
// //                                 ))}
// //                             </div>
// //                         </section>
// //                     )}

// //                     {/* Skills */}
// //                     {hasContent(resumeData.skills) && (
// //                         <section className="relative group">
// //                             <SectionEditButton section="skills" />
// //                             <div className="flex items-center gap-2 mb-4">
// //                                 <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
// //                                     <Award className="h-4 w-4 text-purple-600" />
// //                                 </div>
// //                                 <h2 className="text-lg font-bold text-gray-900">TECHNICAL SKILLS</h2>
// //                                 <Badge variant="secondary" className="ml-auto text-xs bg-purple-50 text-purple-700">
// //                                     {Array.isArray(resumeData.skills)
// //                                         ? resumeData.skills.length
// //                                         : Object.values(resumeData.skills || {}).flat().length
// //                                     } Skills
// //                                 </Badge>
// //                             </div>
// //                             {renderSkillsByCategory()}
// //                         </section>
// //                     )}

// //                     {/* Education */}
// //                     {hasContent(resumeData.education) && (
// //                         <section className="relative group">
// //                             <SectionEditButton section="education" />
// //                             <div className="flex items-center gap-2 mb-4">
// //                                 <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
// //                                     <GraduationCap className="h-4 w-4 text-green-600" />
// //                                 </div>
// //                                 <h2 className="text-lg font-bold text-gray-900">EDUCATION</h2>
// //                                 <Badge variant="secondary" className="ml-auto text-xs bg-green-50 text-green-700">
// //                                     {resumeData.education?.length || 0} Degree{(resumeData.education?.length || 0) !== 1 ? 's' : ''}
// //                                 </Badge>
// //                             </div>
// //                             <div className="space-y-4">
// //                                 {resumeData.education?.map((edu, index) => (
// //                                     <div key={edu.id || index} className="relative pl-6 border-l-2 border-green-200 hover:border-green-400 transition-colors">
// //                                         <div className="absolute -left-2 top-0 w-4 h-4 bg-green-600 rounded-full"></div>
// //                                         <div className='text-sm'>
// //                                             <h3 className="font-semibold text-gray-900">
// //                                                 {edu.degree}
// //                                                 {edu.major && ` in ${edu.major}`}
// //                                             </h3>
// //                                             <div className="flex flex-col lg:flex-row lg:items-center gap-2 text-green-600 font-medium text-sm">
// //                                                 <div className="flex items-center gap-2">
// //                                                     <Building className="h-3 w-3" />
// //                                                     <span>{edu.school}</span>
// //                                                     {edu.location && (
// //                                                         <>
// //                                                             <span>•</span>
// //                                                             <span>{edu.location}</span>
// //                                                         </>
// //                                                     )}
// //                                                 </div>
// //                                                 {edu.year && (
// //                                                     <>
// //                                                         <span className="hidden lg:inline">•</span>
// //                                                         <span className="flex items-center gap-1">
// //                                                             <Calendar className="h-3 w-3" />
// //                                                             {edu.year}
// //                                                         </span>
// //                                                     </>
// //                                                 )}
// //                                                 {edu.gpa && (
// //                                                     <>
// //                                                         <span className="hidden lg:inline">•</span>
// //                                                         <span className="flex items-center gap-1">
// //                                                             <Target className="h-3 w-3" />
// //                                                             GPA: {edu.gpa}
// //                                                         </span>
// //                                                     </>
// //                                                 )}
// //                                             </div>

// //                                             {/* Coursework */}
// //                                             {edu.coursework && edu.coursework.length > 0 && (
// //                                                 <div className="mt-2">
// //                                                     <p className="text-xs font-medium text-gray-600 mb-1">Relevant Coursework:</p>
// //                                                     <div className="flex flex-wrap gap-1">
// //                                                         {edu.coursework.map((course, i) => (
// //                                                             <Badge key={i} variant="outline" className="text-xs bg-green-50 text-green-700 border-green-200">
// //                                                                 {course}
// //                                                             </Badge>
// //                                                         ))}
// //                                                     </div>
// //                                                 </div>
// //                                             )}

// //                                             {/* Achievements */}
// //                                             {edu.achievements && edu.achievements.length > 0 && (
// //                                                 <div className="mt-2">
// //                                                     <p className="text-xs font-medium text-gray-600 mb-1">Achievements:</p>
// //                                                     <div className="flex flex-wrap gap-1">
// //                                                         {edu.achievements.map((achievement, i) => (
// //                                                             <Badge key={i} variant="outline" className="text-xs bg-yellow-50 text-yellow-700 border-yellow-200">
// //                                                                 {achievement}
// //                                                             </Badge>
// //                                                         ))}
// //                                                     </div>
// //                                                 </div>
// //                                             )}

// //                                             {/* Activities */}
// //                                             {edu.activities && edu.activities.length > 0 && (
// //                                                 <div className="mt-2">
// //                                                     <p className="text-xs font-medium text-gray-600 mb-1">Activities:</p>
// //                                                     <div className="flex flex-wrap gap-1">
// //                                                         {edu.activities.map((activity, i) => (
// //                                                             <Badge key={i} variant="outline" className="text-xs bg-blue-50 text-blue-700 border-blue-200">
// //                                                                 {activity}
// //                                                             </Badge>
// //                                                         ))}
// //                                                     </div>
// //                                                 </div>
// //                                             )}
// //                                         </div>
// //                                     </div>
// //                                 ))}
// //                             </div>
// //                         </section>
// //                     )}

// //                     {/* AI Optimization Badge */}
// //                     <div className="pt-4 border-t border-gray-200">
// //                         <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
// //                             <Sparkles className="h-4 w-4 text-blue-600" />
// //                             <span>Optimized with ResumeBot AI</span>
// //                             <Badge variant="outline" className="text-xs">
// //                                 Version 2.0
// //                             </Badge>
// //                         </div>
// //                     </div>
// //                 </div>
// //             </Card>
// //         </div>
// //     );
// // }



// "use client";

// import { useMemo } from 'react';
// import { Button } from '@/components/ui/button';
// import { Card } from '@/components/ui/card';
// import { User, FileText, Briefcase, Star, Award, GraduationCap, Edit } from 'lucide-react';
// import { OriginalProfessionalTemplate } from '../templates/OriginalProfessionalTemplate';
// import { ClassicProfessionalTemplate } from '../templates/ClassicProfessionalTemplate';
// import { ModernMinimalTemplate } from '../templates/ModernMinimalTemplate';
// import { CorporateCleanTemplate } from '../templates/CorporateCleanTemplate';
// import { CreativeTimelineTemplate } from '../templates/CreativeTimelineTemplate';
// import { ExecutiveSummaryTemplate } from '../templates/ExecutiveSummaryTemplate';



// // =================================================================================
// // TYPE DEFINITIONS (Matching the final JSON structure)
// // =================================================================================
// interface PersonalInfo {
//     name?: string;
//     title?: string;
//     email?: string;
//     phone?: string;
//     location?: string;
//     website?: string;
//     github?: string;
//     linkedin?: string;
// }

// interface Experience {
//     id?: number | string;
//     position?: string;
//     company?: string;
//     location?: string;
//     startDate?: string;
//     endDate?: string;
//     achievements?: string[];
// }

// interface Project {
//     id?: number | string;
//     name?: string;
//     technologies?: string[];
//     description?: string;
//     link?: string;
// }

// interface Education {
//     id?: number | string;
//     degree?: string;
//     institution?: string;
//     location?: string;
//     graduationDate?: string;
//     gpa?: number | string;
// }

// interface ResumeData {
//     personalInfo?: PersonalInfo;
//     summary?: string;
//     experience?: Experience[];
//     projects?: Project[];
//     skills?: Record<string, string[]>;
//     education?: Education[];
// }

// type EditableSection = 'personalInfo' | 'summary' | 'experience' | 'projects' | 'skills' | 'education';

// interface ResumePreviewProps {
//     resumeData: ResumeData;
//     selectedTemplate: string; // The key to select the template (e.g., 'classic')
//     onEditSection?: (section: EditableSection) => void;
// }

// // =================================================================================
// // RESUME PREVIEW COMPONENT (Now a Template Host)
// // =================================================================================
// export function ResumePreview({ resumeData, selectedTemplate, onEditSection }: ResumePreviewProps) {

//     // A map of template keys to their corresponding components.
//     const templates = useMemo(() => ({
//         Professional: OriginalProfessionalTemplate,
//         Classic: ClassicProfessionalTemplate,
//         Minimal: ModernMinimalTemplate,
//         Corporate: CorporateCleanTemplate,
//         Timeline: CreativeTimelineTemplate,
//         Executive: ExecutiveSummaryTemplate,
//     }), []);

//     // Select the component to render, with a fallback to the 'original' template.
//     const ActiveTemplate = templates[selectedTemplate as keyof typeof templates] || OriginalProfessionalTemplate;

//     // A new floating toolbar for editing sections without disrupting template layouts.
//     const EditToolbar = () => {
//         if (!onEditSection) return null;

//         const editButtons: { section: EditableSection; icon: React.ElementType; label: string }[] = [
//             { section: 'personalInfo', icon: User, label: 'Info' },
//             { section: 'summary', icon: FileText, label: 'Summary' },
//             { section: 'experience', icon: Briefcase, label: 'Experience' },
//             { section: 'projects', icon: Star, label: 'Projects' },
//             { section: 'skills', icon: Award, label: 'Skills' },
//             { section: 'education', icon: GraduationCap, label: 'Education' },
//         ];

//         return (
//             <div className="absolute top-4 right-4 z-20">
//                 <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col gap-2 p-2 bg-white/80 backdrop-blur-sm border rounded-lg shadow-lg">
//                     {editButtons.map(({ section, icon: Icon, label }) => (
//                         <Button
//                             key={section}
//                             variant="ghost"
//                             size="sm"
//                             onClick={() => onEditSection(section)}
//                             className="h-8 w-8 p-0 flex items-center justify-center"
//                             aria-label={`Edit ${label}`}
//                         >
//                             <Icon className="h-4 w-4" />
//                         </Button>
//                     ))}
//                 </div>
//             </div>
//         );
//     };

//     return (
//         <div className="sticky top-4">
//             {/* The main container is now a simple wrapper */}
//             <div className="relative group">
//                 {/* The floating edit toolbar */}
//                 <EditToolbar />

//                 {/* The selected template is rendered inside a Card for consistent framing */}
//                 <Card className="shadow-2xl border-0 overflow-hidden !gap-0">
//                     <ActiveTemplate data={resumeData as any} />
//                 </Card>
//             </div>
//         </div>
//     );
// }


"use client";

import { useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { User, FileText, Briefcase, Star, Award, GraduationCap } from 'lucide-react';
import { OriginalProfessionalTemplate } from '../templates/OriginalProfessionalTemplate';
import { ClassicProfessionalTemplate } from '../templates/ClassicProfessionalTemplate';
import { ModernMinimalTemplate } from '../templates/ModernMinimalTemplate';
import { CorporateCleanTemplate } from '../templates/CorporateCleanTemplate';
import { CreativeTimelineTemplate } from '../templates/CreativeTimelineTemplate';
import { ExecutiveSummaryTemplate } from '../templates/ExecutiveSummaryTemplate';

// --- Type definitions (ensure they match your project's structure) ---
interface PersonalInfo { name?: string; title?: string; email?: string; phone?: string; location?: string; website?: string; github?: string; linkedin?: string; }
interface Experience { id?: number | string; position?: string; company?: string; location?: string; startDate?: string; endDate?: string; achievements?: string[]; }
interface Project { id?: number | string; name?: string; technologies?: string[]; description?: string; link?: string; }
interface Education { id?: number | string; degree?: string; institution?: string; location?: string; graduationDate?: string; gpa?: number | string; }
interface ResumeData { personalInfo?: PersonalInfo; summary?: string; experience?: Experience[]; projects?: Project[]; skills?: Record<string, string[]>; education?: Education[]; }
type EditableSection = 'personalInfo' | 'summary' | 'experience' | 'projects' | 'skills' | 'education';

interface ResumePreviewProps {
    resumeData: ResumeData;
    selectedTemplate: string; // This is the key, e.g., 'classic', 'modern'
    onEditSection?: (section: EditableSection) => void;
}


export function ResumePreview({ resumeData, selectedTemplate, onEditSection }: ResumePreviewProps) {

    // --- FIX: Use lowercase keys to match what is stored in the database ---
    // This ensures consistency across the application.
    const templates = useMemo(() => ({
        'original': OriginalProfessionalTemplate,
        'classic': ClassicProfessionalTemplate,
        'modern': ModernMinimalTemplate,
        'corporate': CorporateCleanTemplate,
        'creative': CreativeTimelineTemplate,
        'executive': ExecutiveSummaryTemplate,
    }), []);

    // Select the component to render based on the key, with a fallback to 'classic'.
    const ActiveTemplate = templates[selectedTemplate as keyof typeof templates] || templates['classic'];

    const EditToolbar = () => {
        if (!onEditSection) return null;

        const editButtons: { section: EditableSection; icon: React.ElementType; label: string }[] = [
            { section: 'personalInfo', icon: User, label: 'Info' },
            { section: 'summary', icon: FileText, label: 'Summary' },
            { section: 'experience', icon: Briefcase, label: 'Experience' },
            { section: 'projects', icon: Star, label: 'Projects' },
            { section: 'skills', icon: Award, label: 'Skills' },
            { section: 'education', icon: GraduationCap, label: 'Education' },
        ];

        return (
            <div className="absolute top-4 right-4 z-20">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col gap-2 p-2 bg-white/80 backdrop-blur-sm border rounded-lg shadow-lg">
                    {editButtons.map(({ section, icon: Icon, label }) => (
                        <Button
                            key={section}
                            variant="ghost"
                            size="sm"
                            onClick={() => onEditSection(section)}
                            className="h-8 w-8 p-0 flex items-center justify-center"
                            aria-label={`Edit ${label}`}
                        >
                            <Icon className="h-4 w-4" />
                        </Button>
                    ))}
                </div>
            </div>
        );
    };

    return (
        <div className="sticky top-4">
            <div className="relative group">
                <EditToolbar />
                <Card className="shadow-2xl border-0 overflow-hidden !gap-0">
                    {/* Render the selected template component */}
                    <ActiveTemplate data={resumeData as any} />
                </Card>
            </div>
        </div>
    );
}