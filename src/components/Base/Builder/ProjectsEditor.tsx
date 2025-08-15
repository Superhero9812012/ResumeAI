

// // // // // import { useState, KeyboardEvent } from 'react';
// // // // // import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// // // // // import { Button } from '@/components/ui/button';
// // // // // import { Input } from '@/components/ui/input';
// // // // // import { Label } from '@/components/ui/label';
// // // // // import { Textarea } from '@/components/ui/textarea';
// // // // // import { Badge } from '@/components/ui/badge';
// // // // // import {
// // // // //     Star,
// // // // //     Plus,
// // // // //     Trash2,
// // // // //     Save,
// // // // //     X,
// // // // //     Sparkles,
// // // // //     Calendar,
// // // // //     Code,
// // // // //     ExternalLink,
// // // // //     Github,
// // // // //     Globe,
// // // // //     Target,
// // // // //     Lightbulb,
// // // // //     ArrowUp,
// // // // //     ArrowDown,
// // // // //     Copy,
// // // // //     Zap
// // // // // } from 'lucide-react';

// // // // // // Type Definitions
// // // // // interface Project {
// // // // //     id: number;
// // // // //     title: string;
// // // // //     period: string;
// // // // //     technologies: string[];
// // // // //     description: string[];
// // // // //     url: string;
// // // // //     github: string;
// // // // //     featured: boolean;
// // // // // }

// // // // // interface ProjectsEditorProps {
// // // // //     data: Project[];
// // // // //     onUpdate: (data: Project[]) => void;
// // // // //     onClose: () => void;
// // // // // }

// // // // // export function ProjectsEditor({ data, onUpdate, onClose }: ProjectsEditorProps) {
// // // // //     const [projects, setProjects] = useState<Project[]>(data);
// // // // //     const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

// // // // //     const addProject = () => {
// // // // //         const newProject: Project = {
// // // // //             id: Date.now(),
// // // // //             title: '',
// // // // //             period: '',
// // // // //             technologies: [],
// // // // //             description: [''],
// // // // //             url: '',
// // // // //             github: '',
// // // // //             featured: false
// // // // //         };
// // // // //         setProjects([...projects, newProject]);
// // // // //         setExpandedIndex(projects.length);
// // // // //     };

// // // // //     const removeProject = (index: number) => {
// // // // //         const updated = projects.filter((_, i) => i !== index);
// // // // //         setProjects(updated);
// // // // //         if (expandedIndex !== null && expandedIndex >= updated.length && updated.length > 0) {
// // // // //             setExpandedIndex(updated.length - 1);
// // // // //         } else if (updated.length === 0) {
// // // // //             setExpandedIndex(null);
// // // // //         }
// // // // //     };

// // // // //     const updateProject = <K extends keyof Project>(index: number, field: K, value: Project[K]) => {
// // // // //         const updated = [...projects];
// // // // //         updated[index] = { ...updated[index], [field]: value };
// // // // //         setProjects(updated);
// // // // //     };

// // // // //     const addTechnology = (projectIndex: number, technology: string) => {
// // // // //         if (technology.trim()) {
// // // // //             const updated = [...projects];
// // // // //             updated[projectIndex].technologies = [...updated[projectIndex].technologies, technology.trim()];
// // // // //             setProjects(updated);
// // // // //         }
// // // // //     };

// // // // //     const removeTechnology = (projectIndex: number, techIndex: number) => {
// // // // //         const updated = [...projects];
// // // // //         updated[projectIndex].technologies = updated[projectIndex].technologies.filter((_, i) => i !== techIndex);
// // // // //         setProjects(updated);
// // // // //     };

// // // // //     const addDescription = (projectIndex: number) => {
// // // // //         const updated = [...projects];
// // // // //         updated[projectIndex].description.push('');
// // // // //         setProjects(updated);
// // // // //     };

// // // // //     const updateDescription = (projectIndex: number, descIndex: number, value: string) => {
// // // // //         const updated = [...projects];
// // // // //         updated[projectIndex].description[descIndex] = value;
// // // // //         setProjects(updated);
// // // // //     };

// // // // //     const removeDescription = (projectIndex: number, descIndex: number) => {
// // // // //         const updated = [...projects];
// // // // //         updated[projectIndex].description = updated[projectIndex].description.filter((_, i) => i !== descIndex);
// // // // //         setProjects(updated);
// // // // //     };

// // // // //     const moveProject = (index: number, direction: 'up' | 'down') => {
// // // // //         const updated = [...projects];
// // // // //         const newIndex = direction === 'up' ? index - 1 : index + 1;
// // // // //         if (newIndex >= 0 && newIndex < updated.length) {
// // // // //             [updated[index], updated[newIndex]] = [updated[newIndex], updated[index]];
// // // // //             setProjects(updated);
// // // // //             setExpandedIndex(newIndex);
// // // // //         }
// // // // //     };

// // // // //     const duplicateProject = (index: number) => {
// // // // //         const project: Project = { ...projects[index], id: Date.now(), title: `${projects[index].title} (Copy)` };
// // // // //         const updated = [...projects];
// // // // //         updated.splice(index + 1, 0, project);
// // // // //         setProjects(updated);
// // // // //     };

// // // // //     const toggleFeatured = (index: number) => {
// // // // //         const updated = [...projects];
// // // // //         updated[index].featured = !updated[index].featured;
// // // // //         setProjects(updated);
// // // // //     };

// // // // //     const optimizeProject = (projectIndex: number) => {
// // // // //         const project = projects[projectIndex];
// // // // //         const optimizedDescriptions = project.description.map(desc => {
// // // // //             if (!desc.trim()) return desc;

// // // // //             const actionVerbs = ['Developed', 'Built', 'Created', 'Implemented', 'Designed', 'Integrated'];
// // // // //             let optimized = desc;

// // // // //             if (!optimized.match(/^(Developed|Built|Created|Implemented|Designed|Integrated)/)) {
// // // // //                 const randomVerb = actionVerbs[Math.floor(Math.random() * actionVerbs.length)];
// // // // //                 optimized = `${randomVerb} ${optimized.charAt(0).toLowerCase() + optimized.slice(1)}`;
// // // // //             }

// // // // //             if (project.technologies.length > 0 && !optimized.includes('using')) {
// // // // //                 const techStack = project.technologies.slice(0, 3).join(', ');
// // // // //                 optimized += ` using ${techStack}`;
// // // // //             }

// // // // //             return optimized;
// // // // //         });

// // // // //         updateProject(projectIndex, 'description', optimizedDescriptions);
// // // // //     };

// // // // //     const suggestedTechnologies: string[] = [
// // // // //         'React.js', 'Node.js', 'Next.js', 'TypeScript', 'JavaScript', 'Python', 'PostgreSQL',
// // // // //         'MongoDB', 'Express.js', 'AWS', 'Azure', 'Docker', 'Kubernetes', 'Redis', 'GraphQL',
// // // // //         'REST API', 'Socket.io', 'Tailwind CSS', 'Material-UI', 'Firebase', 'Stripe', 'Auth0'
// // // // //     ];

// // // // //     const getProjectScore = (project: Project): number => {
// // // // //         let score = 0;
// // // // //         if (project.title.trim()) score += 20;
// // // // //         if (project.technologies.length >= 3) score += 25;
// // // // //         if (project.description.some(desc => desc.length > 50)) score += 25;
// // // // //         if (project.url || project.github) score += 15;
// // // // //         if (project.description.some(desc => desc.match(/\d+%|\d+\+|users?|performance|optimization/i))) score += 15;
// // // // //         return Math.min(score, 100);
// // // // //     };

// // // // //     const handleSave = () => {
// // // // //         const validProjects = projects.filter(project =>
// // // // //             project.title.trim() && project.description.some(desc => desc.trim())
// // // // //         );
// // // // //         onUpdate(validProjects);
// // // // //         onClose();
// // // // //     };

// // // // //     return (
// // // // //         <Card>
// // // // //             <CardHeader className="flex flex-row items-center justify-between">
// // // // //                 <div>
// // // // //                     <CardTitle className="flex items-center gap-2 text-sm">
// // // // //                         <Star className="h-5 w-5" />
// // // // //                         Projects Portfolio
// // // // //                         <Badge variant="outline">{projects.length} Projects</Badge>
// // // // //                         <Badge variant="secondary" className="text-xs">
// // // // //                             {projects.filter(p => p.featured).length} Featured
// // // // //                         </Badge>
// // // // //                     </CardTitle>
// // // // //                     <p className="text-sm text-gray-600 mt-1 text-xs">
// // // // //                         Showcase your best work with detailed project descriptions and technologies
// // // // //                     </p>
// // // // //                 </div>
// // // // //                 <div className="flex items-center gap-2">
// // // // //                     <Button variant="outline" size="sm" onClick={addProject}>
// // // // //                         <Plus className="h-4 w-4 mr-2" />
// // // // //                         Add Project
// // // // //                     </Button>
// // // // //                     <Button size="sm" onClick={handleSave}>
// // // // //                         <Save className="h-4 w-4 mr-2" />
// // // // //                         Save
// // // // //                     </Button>
// // // // //                     <Button variant="outline" size="sm" onClick={onClose}>
// // // // //                         <X className="h-4 w-4" />
// // // // //                     </Button>
// // // // //                 </div>
// // // // //             </CardHeader>
// // // // //             <CardContent className="space-y-6">
// // // // //                 {/* Optimization Tips */}
// // // // //                 <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
// // // // //                     <h4 className="font-medium text-purple-900 mb-2 flex items-center gap-2">
// // // // //                         <Lightbulb className="h-4 w-4" />
// // // // //                         Project Optimization Tips
// // // // //                     </h4>
// // // // //                     <ul className="text-sm text-purple-800 space-y-1">
// // // // //                         <li>• Include 3-5 most impressive and relevant projects</li>
// // // // //                         <li>• Focus on projects that demonstrate skills mentioned in job requirements</li>
// // // // //                         <li>• Add live demo links and GitHub repositories when possible</li>
// // // // //                         <li>• Quantify impact with metrics (users, performance improvements, etc.)</li>
// // // // //                         <li>• Use technical keywords that match your target role</li>
// // // // //                     </ul>
// // // // //                 </div>

// // // // //                 {projects.length === 0 ? (
// // // // //                     <div className="text-center py-12">
// // // // //                         <Star className="h-12 w-12 text-gray-400 mx-auto mb-4" />
// // // // //                         <h3 className="text-lg font-semibold text-gray-600 mb-2">No Projects Added Yet</h3>
// // // // //                         <p className="text-gray-500 mb-4">Add your first project to showcase your skills</p>
// // // // //                         <Button onClick={addProject}>
// // // // //                             <Plus className="h-4 w-4 mr-2" />
// // // // //                             Add Your First Project
// // // // //                         </Button>
// // // // //                     </div>
// // // // //                 ) : (
// // // // //                     <div className="space-y-4">
// // // // //                         {projects.map((project, index) => (
// // // // //                             <Card key={project.id} className={`border-2 transition-all ${expandedIndex === index ? 'border-purple-300 shadow-lg' : 'border-gray-200'}`}>
// // // // //                                 <CardHeader className="pb-3">
// // // // //                                     <div className="flex items-center justify-between">
// // // // //                                         <div className="flex items-center gap-3">
// // // // //                                             <Button
// // // // //                                                 variant="ghost"
// // // // //                                                 size="sm"
// // // // //                                                 onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
// // // // //                                                 className="p-2"
// // // // //                                             >
// // // // //                                                 <Star className={`h-4 w-4 ${project.featured ? 'text-yellow-500 fill-current' : 'text-gray-400'}`} />
// // // // //                                             </Button>
// // // // //                                             <div>
// // // // //                                                 <h4 className="font-semibold flex items-center gap-2">
// // // // //                                                     {project.title || `Project ${index + 1}`}
// // // // //                                                     {project.featured && (
// // // // //                                                         <Badge variant="secondary" className="text-xs bg-yellow-50 text-yellow-700">
// // // // //                                                             Featured
// // // // //                                                         </Badge>
// // // // //                                                     )}
// // // // //                                                 </h4>
// // // // //                                                 <div className="flex items-center gap-2 text-sm text-gray-600">
// // // // //                                                     {project.period && (
// // // // //                                                         <span className="flex items-center gap-1">
// // // // //                                                             <Calendar className="h-3 w-3" />
// // // // //                                                             {project.period}
// // // // //                                                         </span>
// // // // //                                                     )}
// // // // //                                                     {project.technologies.length > 0 && (
// // // // //                                                         <span className="flex items-center gap-1">
// // // // //                                                             <Code className="h-3 w-3" />
// // // // //                                                             {project.technologies.slice(0, 3).join(', ')}
// // // // //                                                             {project.technologies.length > 3 && ` +${project.technologies.length - 3}`}
// // // // //                                                         </span>
// // // // //                                                     )}
// // // // //                                                 </div>
// // // // //                                             </div>
// // // // //                                         </div>
// // // // //                                         <div className="flex items-center gap-1">
// // // // //                                             <div className="flex items-center gap-1 mr-2">
// // // // //                                                 <div className={`w-2 h-2 rounded-full ${getProjectScore(project) >= 80 ? 'bg-green-500' :
// // // // //                                                     getProjectScore(project) >= 60 ? 'bg-yellow-500' : 'bg-red-500'
// // // // //                                                     }`}></div>
// // // // //                                                 <span className="text-xs text-gray-600">{getProjectScore(project)}%</span>
// // // // //                                             </div>
// // // // //                                             <Button
// // // // //                                                 variant="outline"
// // // // //                                                 size="sm"
// // // // //                                                 onClick={() => toggleFeatured(index)}
// // // // //                                                 className={project.featured ? 'bg-yellow-50 border-yellow-200' : ''}
// // // // //                                             >
// // // // //                                                 <Star className={`h-4 w-4 ${project.featured ? 'text-yellow-500 fill-current' : 'text-gray-400'}`} />
// // // // //                                             </Button>
// // // // //                                             <Button
// // // // //                                                 variant="outline"
// // // // //                                                 size="sm"
// // // // //                                                 onClick={() => moveProject(index, 'up')}
// // // // //                                                 disabled={index === 0}
// // // // //                                             >
// // // // //                                                 <ArrowUp className="h-4 w-4" />
// // // // //                                             </Button>
// // // // //                                             <Button
// // // // //                                                 variant="outline"
// // // // //                                                 size="sm"
// // // // //                                                 onClick={() => moveProject(index, 'down')}
// // // // //                                                 disabled={index === projects.length - 1}
// // // // //                                             >
// // // // //                                                 <ArrowDown className="h-4 w-4" />
// // // // //                                             </Button>
// // // // //                                             <Button
// // // // //                                                 variant="outline"
// // // // //                                                 size="sm"
// // // // //                                                 onClick={() => duplicateProject(index)}
// // // // //                                             >
// // // // //                                                 <Copy className="h-4 w-4" />
// // // // //                                             </Button>
// // // // //                                             <Button
// // // // //                                                 variant="outline"
// // // // //                                                 size="sm"
// // // // //                                                 onClick={() => removeProject(index)}
// // // // //                                                 className="text-red-600 hover:text-red-700"
// // // // //                                             >
// // // // //                                                 <Trash2 className="h-4 w-4" />
// // // // //                                             </Button>
// // // // //                                         </div>
// // // // //                                     </div>
// // // // //                                 </CardHeader>

// // // // //                                 {expandedIndex === index && (
// // // // //                                     <CardContent className="pt-0 space-y-4">
// // // // //                                         {/* Basic Information */}
// // // // //                                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// // // // //                                             <div className="space-y-2">
// // // // //                                                 <Label htmlFor={`title-${project.id}`} className="flex items-center gap-2">
// // // // //                                                     <Target className="h-4 w-4" />
// // // // //                                                     Project Title *
// // // // //                                                 </Label>
// // // // //                                                 <Input
// // // // //                                                     id={`title-${project.id}`}
// // // // //                                                     value={project.title}
// // // // //                                                     onChange={(e) => updateProject(index, 'title', e.target.value)}
// // // // //                                                     placeholder="E-commerce Platform"
// // // // //                                                 />
// // // // //                                             </div>
// // // // //                                             <div className="space-y-2">
// // // // //                                                 <Label htmlFor={`period-${project.id}`} className="flex items-center gap-2">
// // // // //                                                     <Calendar className="h-4 w-4" />
// // // // //                                                     Timeline
// // // // //                                                 </Label>
// // // // //                                                 <Input
// // // // //                                                     id={`period-${project.id}`}
// // // // //                                                     value={project.period}
// // // // //                                                     onChange={(e) => updateProject(index, 'period', e.target.value)}
// // // // //                                                     placeholder="March 2024 - Present"
// // // // //                                                 />
// // // // //                                             </div>
// // // // //                                             <div className="space-y-2">
// // // // //                                                 <Label htmlFor={`url-${project.id}`} className="flex items-center gap-2">
// // // // //                                                     <Globe className="h-4 w-4" />
// // // // //                                                     Live Demo URL
// // // // //                                                 </Label>
// // // // //                                                 <Input
// // // // //                                                     id={`url-${project.id}`}
// // // // //                                                     value={project.url}
// // // // //                                                     onChange={(e) => updateProject(index, 'url', e.target.value)}
// // // // //                                                     placeholder="https://myproject.com"
// // // // //                                                 />
// // // // //                                             </div>
// // // // //                                             <div className="space-y-2">
// // // // //                                                 <Label htmlFor={`github-${project.id}`} className="flex items-center gap-2">
// // // // //                                                     <Github className="h-4 w-4" />
// // // // //                                                     GitHub Repository
// // // // //                                                 </Label>
// // // // //                                                 <Input
// // // // //                                                     id={`github-${project.id}`}
// // // // //                                                     value={project.github}
// // // // //                                                     onChange={(e) => updateProject(index, 'github', e.target.value)}
// // // // //                                                     placeholder="https://github.com/username/repo"
// // // // //                                                 />
// // // // //                                             </div>
// // // // //                                         </div>

// // // // //                                         {/* Technologies */}
// // // // //                                         <div className="space-y-3">
// // // // //                                             <div className="flex items-center justify-between">
// // // // //                                                 <Label className="flex items-center gap-2">
// // // // //                                                     <Code className="h-4 w-4" />
// // // // //                                                     Technologies Used
// // // // //                                                 </Label>
// // // // //                                                 <Button
// // // // //                                                     variant="outline"
// // // // //                                                     size="sm"
// // // // //                                                     onClick={() => optimizeProject(index)}
// // // // //                                                 >
// // // // //                                                     <Sparkles className="h-4 w-4 mr-2" />
// // // // //                                                     AI Optimize
// // // // //                                                 </Button>
// // // // //                                             </div>

// // // // //                                             <div className="flex flex-wrap gap-2 mb-3">
// // // // //                                                 {project.technologies.map((tech, techIndex) => (
// // // // //                                                     <Badge
// // // // //                                                         key={techIndex}
// // // // //                                                         variant="outline"
// // // // //                                                         className="bg-purple-50 text-purple-700 border-purple-200 group cursor-pointer hover:bg-purple-100"
// // // // //                                                     >
// // // // //                                                         <span>{tech}</span>
// // // // //                                                         <X
// // // // //                                                             className="h-3 w-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity"
// // // // //                                                             onClick={() => removeTechnology(index, techIndex)}
// // // // //                                                         />
// // // // //                                                     </Badge>
// // // // //                                                 ))}
// // // // //                                             </div>

// // // // //                                             <div className="flex items-center gap-2">
// // // // //                                                 <Input
// // // // //                                                     placeholder="Add technology (React.js, Node.js, etc.)"
// // // // //                                                     className="h-8 text-sm"
// // // // //                                                     onKeyPress={(e: KeyboardEvent<HTMLInputElement>) => {
// // // // //                                                         if (e.key === 'Enter') {
// // // // //                                                             const target = e.target as HTMLInputElement;
// // // // //                                                             addTechnology(index, target.value);
// // // // //                                                             target.value = '';
// // // // //                                                         }
// // // // //                                                     }}
// // // // //                                                 />
// // // // //                                             </div>

// // // // //                                             {/* Technology Suggestions */}
// // // // //                                             <div className="flex flex-wrap gap-1">
// // // // //                                                 {suggestedTechnologies
// // // // //                                                     .filter(tech => !project.technologies.includes(tech))
// // // // //                                                     .slice(0, 8)
// // // // //                                                     .map((tech) => (
// // // // //                                                         <Button
// // // // //                                                             key={tech}
// // // // //                                                             variant="ghost"
// // // // //                                                             size="sm"
// // // // //                                                             className="h-6 px-2 text-xs bg-gray-50 hover:bg-gray-100"
// // // // //                                                             onClick={() => addTechnology(index, tech)}
// // // // //                                                         >
// // // // //                                                             + {tech}
// // // // //                                                         </Button>
// // // // //                                                     ))
// // // // //                                                 }
// // // // //                                             </div>
// // // // //                                         </div>

// // // // //                                         {/* Project Description */}
// // // // //                                         <div className="space-y-3">
// // // // //                                             <div className="flex items-center justify-between">
// // // // //                                                 <Label className="flex items-center gap-2">
// // // // //                                                     <Zap className="h-4 w-4" />
// // // // //                                                     Project Description & Key Features
// // // // //                                                 </Label>
// // // // //                                                 <Button
// // // // //                                                     variant="outline"
// // // // //                                                     size="sm"
// // // // //                                                     onClick={() => addDescription(index)}
// // // // //                                                 >
// // // // //                                                     <Plus className="h-4 w-4 mr-2" />
// // // // //                                                     Add Point
// // // // //                                                 </Button>
// // // // //                                             </div>

// // // // //                                             {project.description.map((desc, descIndex) => (
// // // // //                                                 <div key={descIndex} className="flex items-start gap-2">
// // // // //                                                     <Textarea
// // // // //                                                         value={desc}
// // // // //                                                         onChange={(e) => updateDescription(index, descIndex, e.target.value)}
// // // // //                                                         placeholder="Describe a key feature or achievement of this project. Include specific technologies, metrics, or impact when possible."
// // // // //                                                         className="min-h-[60px]"
// // // // //                                                     />
// // // // //                                                     <Button
// // // // //                                                         variant="outline"
// // // // //                                                         size="sm"
// // // // //                                                         onClick={() => removeDescription(index, descIndex)}
// // // // //                                                         className="text-red-600 mt-1"
// // // // //                                                     >
// // // // //                                                         <Trash2 className="h-4 w-4" />
// // // // //                                                     </Button>
// // // // //                                                 </div>
// // // // //                                             ))}
// // // // //                                         </div>

// // // // //                                         {/* Project Links Preview */}
// // // // //                                         {(project.url || project.github) && (
// // // // //                                             <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
// // // // //                                                 <span className="text-sm font-medium text-gray-700">Quick Links:</span>
// // // // //                                                 {project.url && (
// // // // //                                                     <a
// // // // //                                                         href={project.url}
// // // // //                                                         target="_blank"
// // // // //                                                         rel="noopener noreferrer"
// // // // //                                                         className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800"
// // // // //                                                     >
// // // // //                                                         <ExternalLink className="h-3 w-3" />
// // // // //                                                         Live Demo
// // // // //                                                     </a>
// // // // //                                                 )}
// // // // //                                                 {project.github && (
// // // // //                                                     <a
// // // // //                                                         href={project.github}
// // // // //                                                         target="_blank"
// // // // //                                                         rel="noopener noreferrer"
// // // // //                                                         className="flex items-center gap-1 text-sm text-gray-700 hover:text-gray-900"
// // // // //                                                     >
// // // // //                                                         <Github className="h-3 w-3" />
// // // // //                                                         Source Code
// // // // //                                                     </a>
// // // // //                                                 )}
// // // // //                                             </div>
// // // // //                                         )}
// // // // //                                     </CardContent>
// // // // //                                 )}
// // // // //                             </Card>
// // // // //                         ))}
// // // // //                     </div>
// // // // //                 )}

// // // // //                 {/* Summary Stats */}
// // // // //                 {projects.length > 0 && (
// // // // //                     <div className="flex items-center justify-between pt-4 border-t">
// // // // //                         <div className="flex items-center gap-4 text-sm text-gray-600">
// // // // //                             <span>Total Projects: {projects.length}</span>
// // // // //                             <span>Featured: {projects.filter(p => p.featured).length}</span>
// // // // //                             <span>With Links: {projects.filter(p => p.url || p.github).length}</span>
// // // // //                         </div>
// // // // //                         <div className="text-sm text-gray-500">
// // // // //                             Avg. Project Score: {projects.length > 0 ? Math.round(
// // // // //                                 projects.reduce((total, project) => total + getProjectScore(project), 0) / projects.length
// // // // //                             ) : 0}%
// // // // //                         </div>
// // // // //                     </div>
// // // // //                 )}
// // // // //             </CardContent>
// // // // //         </Card>
// // // // //     );
// // // // // }


// // // // import { useState, useEffect, KeyboardEvent } from 'react';
// // // // import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// // // // import { Button } from '@/components/ui/button';
// // // // import { Input } from '@/components/ui/input';
// // // // import { Label } from '@/components/ui/label';
// // // // import { Textarea } from '@/components/ui/textarea';
// // // // import { Badge } from '@/components/ui/badge';
// // // // import { Star, Plus, Trash2, Save, X, Sparkles, Calendar, Code, ExternalLink, Github, Globe, Target, Lightbulb, ArrowUp, ArrowDown, Copy, Zap, Loader2 } from 'lucide-react';

// // // // interface Project {
// // // //     id: number;
// // // //     title: string;
// // // //     period: string;
// // // //     technologies: string[];
// // // //     description: string[];
// // // //     url: string;
// // // //     github: string;
// // // //     featured: boolean;
// // // // }

// // // // interface ProjectsEditorProps {
// // // //     data: Project[];
// // // //     onUpdate: (data: Project[]) => void;
// // // //     onClose: () => void;
// // // //     targetRole?: string;
// // // // }

// // // // export function ProjectsEditor({ data, onUpdate, onClose, targetRole }: ProjectsEditorProps) {
// // // //     const [projects, setProjects] = useState<Project[]>(data);
// // // //     const [expandedIndex, setExpandedIndex] = useState<number | null>(0);
// // // //     const [optimizingIndex, setOptimizingIndex] = useState<string | null>(null);

// // // //     useEffect(() => {
// // // //         setProjects(data);
// // // //     }, [data]);

// // // //     const addProject = () => {
// // // //         const newProject: Project = { id: Date.now(), title: '', period: '', technologies: [], description: [''], url: '', github: '', featured: false };
// // // //         setProjects([...projects, newProject]);
// // // //         setExpandedIndex(projects.length);
// // // //     };

// // // //     const removeProject = (index: number) => {
// // // //         const updated = projects.filter((_, i) => i !== index);
// // // //         setProjects(updated);
// // // //         onUpdate(updated);
// // // //     };

// // // //     const updateProject = <K extends keyof Project>(index: number, field: K, value: Project[K]) => {
// // // //         const updated = [...projects];
// // // //         updated[index] = { ...updated[index], [field]: value };
// // // //         setProjects(updated);
// // // //     };

// // // //     const addTechnology = (projectIndex: number, technology: string) => {
// // // //         if (technology.trim()) {
// // // //             const updated = [...projects];
// // // //             updated[projectIndex].technologies = [...new Set([...updated[projectIndex].technologies, technology.trim()])];
// // // //             setProjects(updated);
// // // //         }
// // // //     };

// // // //     const removeTechnology = (projectIndex: number, techIndex: number) => {
// // // //         const updated = [...projects];
// // // //         updated[projectIndex].technologies = updated[projectIndex].technologies.filter((_, i) => i !== techIndex);
// // // //         setProjects(updated);
// // // //     };

// // // //     const addDescription = (projectIndex: number) => {
// // // //         const updated = [...projects];
// // // //         updated[projectIndex].description.push('');
// // // //         setProjects(updated);
// // // //     };

// // // //     const updateDescription = (projectIndex: number, descIndex: number, value: string) => {
// // // //         const updated = [...projects];
// // // //         updated[projectIndex].description[descIndex] = value;
// // // //         setProjects(updated);
// // // //     };

// // // //     const removeDescription = (projectIndex: number, descIndex: number) => {
// // // //         const updated = [...projects];
// // // //         updated[projectIndex].description = updated[projectIndex].description.filter((_, i) => i !== descIndex);
// // // //         setProjects(updated);
// // // //     };

// // // //     const handleOptimizeDescription = async (projIndex: number, descIndex: number) => {
// // // //         const project = projects[projIndex];
// // // //         const descriptionText = project.description[descIndex];
// // // //         if (!descriptionText.trim()) return;

// // // //         const currentIndex = `${projIndex}-${descIndex}`;
// // // //         setOptimizingIndex(currentIndex);

// // // //         try {
// // // //             const response = await fetch('/api/optimize-project-description', {
// // // //                 method: 'POST',
// // // //                 headers: { 'Content-Type': 'application/json' },
// // // //                 body: JSON.stringify({ descriptionText, projectTitle: project.title, targetRole: targetRole || 'Software Engineer' }),
// // // //             });
// // // //             if (!response.ok) throw new Error('Failed to get optimization from AI.');

// // // //             const result = await response.json();
// // // //             const updatedProjects = [...projects];
// // // //             updatedProjects[projIndex].description[descIndex] = result.optimizedText;
// // // //             setProjects(updatedProjects);
// // // //             onUpdate(updatedProjects);
// // // //         } catch (error) {
// // // //             console.error("Project description optimization failed:", error);
// // // //         } finally {
// // // //             setOptimizingIndex(null);
// // // //         }
// // // //     };

// // // //     const moveProject = (index: number, direction: 'up' | 'down') => {
// // // //         const updated = [...projects];
// // // //         const newIndex = direction === 'up' ? index - 1 : index + 1;
// // // //         if (newIndex >= 0 && newIndex < updated.length) {
// // // //             [updated[index], updated[newIndex]] = [updated[newIndex], updated[index]];
// // // //             setProjects(updated);
// // // //             setExpandedIndex(newIndex);
// // // //         }
// // // //     };

// // // //     const duplicateProject = (index: number) => {
// // // //         const project: Project = { ...projects[index], id: Date.now(), title: `${projects[index].title} (Copy)` };
// // // //         const updated = [...projects];
// // // //         updated.splice(index + 1, 0, project);
// // // //         setProjects(updated);
// // // //     };

// // // //     const handleSave = () => {
// // // //         const validProjects = projects.filter(project => project.title.trim() && project.description.some(desc => desc.trim()));
// // // //         onUpdate(validProjects);
// // // //         onClose();
// // // //     };

// // // //     const suggestedTechnologies: string[] = ['React.js', 'Node.js', 'Next.js', 'TypeScript', 'Python', 'PostgreSQL', 'MongoDB', 'AWS', 'Docker', 'Tailwind CSS'];

// // // //     return (
// // // //         <Card>
// // // //             <CardHeader className="flex flex-row items-center justify-between">
// // // //                 <div>
// // // //                     <CardTitle className="flex items-center gap-2 text-sm">
// // // //                         <Star className="h-5 w-5" />Projects Portfolio
// // // //                         <Badge variant="outline">{projects.length} Projects</Badge>
// // // //                     </CardTitle>
// // // //                     <p className="text-xs text-gray-600 mt-1">Showcase your best work with detailed project descriptions.</p>
// // // //                 </div>
// // // //                 <div className="flex items-center gap-2">
// // // //                     <Button variant="outline" size="sm" onClick={addProject}><Plus className="h-4 w-4 mr-2" />Add Project</Button>
// // // //                     <Button size="sm" onClick={handleSave}><Save className="h-4 w-4 mr-2" />Save & Close</Button>
// // // //                 </div>
// // // //             </CardHeader>
// // // //             <CardContent className="space-y-6">
// // // //                 <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
// // // //                     <h4 className="font-medium text-purple-900 mb-2 flex items-center gap-2"><Lightbulb className="h-4 w-4" />Project Tips</h4>
// // // //                     <ul className="text-sm text-purple-800 space-y-1">
// // // //                         <li>Showcase 3-5 of your most impressive and relevant projects.</li>
// // // //                         <li>Add live demo and GitHub repository links whenever possible.</li>
// // // //                         <li>Quantify your impact with metrics (e.g., user growth, performance improvements).</li>
// // // //                     </ul>
// // // //                 </div>
// // // //                 {projects.length === 0 ? (
// // // //                     <div className="text-center py-12">
// // // //                         <Star className="h-12 w-12 text-gray-400 mx-auto mb-4" />
// // // //                         <h3 className="text-lg font-semibold text-gray-600 mb-2">No Projects Added Yet</h3>
// // // //                         <Button onClick={addProject}><Plus className="h-4 w-4 mr-2" />Add Your First Project</Button>
// // // //                     </div>
// // // //                 ) : (
// // // //                     <div className="space-y-4">
// // // //                         {projects.map((project, index) => (
// // // //                             <Card key={project.id} className={`border-2 transition-all ${expandedIndex === index ? 'border-purple-300 shadow-lg' : 'border-gray-200'}`}>
// // // //                                 <CardHeader className="pb-3 cursor-pointer" onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}>
// // // //                                     <div className="flex items-center justify-between">
// // // //                                         <div className="flex items-center gap-3">
// // // //                                             <Star className={`h-4 w-4 ${project.featured ? 'text-yellow-500 fill-current' : 'text-gray-400'}`} />
// // // //                                             <div>
// // // //                                                 <h4 className="font-semibold">{project.title || `Project #${index + 1}`}</h4>
// // // //                                                 <p className="text-sm text-gray-600">{project.period}</p>
// // // //                                             </div>
// // // //                                         </div>
// // // //                                         <div className="flex items-center gap-1">
// // // //                                             <Button variant="outline" size="icon" onClick={(e) => { e.stopPropagation(); moveProject(index, 'up'); }} disabled={index === 0}><ArrowUp className="h-4 w-4" /></Button>
// // // //                                             <Button variant="outline" size="icon" onClick={(e) => { e.stopPropagation(); moveProject(index, 'down'); }} disabled={index === projects.length - 1}><ArrowDown className="h-4 w-4" /></Button>
// // // //                                             <Button variant="outline" size="icon" onClick={(e) => { e.stopPropagation(); duplicateProject(index); }}><Copy className="h-4 w-4" /></Button>
// // // //                                             <Button variant="outline" size="icon" onClick={(e) => { e.stopPropagation(); removeProject(index); }} className="text-red-600 hover:text-red-700"><Trash2 className="h-4 w-4" /></Button>
// // // //                                         </div>
// // // //                                     </div>
// // // //                                 </CardHeader>
// // // //                                 {expandedIndex === index && (
// // // //                                     <CardContent className="pt-0 space-y-4">
// // // //                                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// // // //                                             <div><Label htmlFor={`title-${project.id}`}>Project Title *</Label><Input id={`title-${project.id}`} value={project.title} onChange={(e) => updateProject(index, 'title', e.target.value)} placeholder="E-commerce Platform" /></div>
// // // //                                             <div><Label htmlFor={`period-${project.id}`}>Timeline</Label><Input id={`period-${project.id}`} value={project.period} onChange={(e) => updateProject(index, 'period', e.target.value)} placeholder="March 2024" /></div>
// // // //                                             <div><Label htmlFor={`url-${project.id}`}>Live Demo URL</Label><Input id={`url-${project.id}`} value={project.url} onChange={(e) => updateProject(index, 'url', e.target.value)} placeholder="https://myproject.com" /></div>
// // // //                                             <div><Label htmlFor={`github-${project.id}`}>GitHub Repository</Label><Input id={`github-${project.id}`} value={project.github} onChange={(e) => updateProject(index, 'github', e.target.value)} placeholder="https://github.com/user/repo" /></div>
// // // //                                         </div>
// // // //                                         <div>
// // // //                                             <Label>Technologies Used</Label>
// // // //                                             <div className="flex flex-wrap gap-2 my-2">
// // // //                                                 {project.technologies.map((tech, techIndex) => (
// // // //                                                     <Badge key={techIndex} variant="secondary" className="group cursor-pointer">{tech}<X className="h-3 w-3 ml-2 opacity-0 group-hover:opacity-100" onClick={() => removeTechnology(index, techIndex)} /></Badge>
// // // //                                                 ))}
// // // //                                             </div>
// // // //                                             <Input placeholder="Add technology and press Enter" onKeyPress={(e: KeyboardEvent<HTMLInputElement>) => { if (e.key === 'Enter') { const target = e.target as HTMLInputElement; addTechnology(index, target.value); target.value = ''; e.preventDefault(); } }} />
// // // //                                         </div>
// // // //                                         <div className="space-y-3">
// // // //                                             <div className="flex items-center justify-between">
// // // //                                                 <Label><Zap className="h-4 w-4 inline mr-2" />Key Features / Description</Label>
// // // //                                                 <Button variant="outline" size="sm" onClick={() => addDescription(index)}><Plus className="h-4 w-4 mr-2" />Add Point</Button>
// // // //                                             </div>
// // // //                                             {project.description.map((desc, descIndex) => (
// // // //                                                 <div key={descIndex} className="flex items-start gap-2">
// // // //                                                     <Textarea value={desc} onChange={(e) => updateDescription(index, descIndex, e.target.value)} placeholder="Describe a key feature or achievement..." className="min-h-[60px]" />
// // // //                                                     <div className="flex flex-col gap-1">
// // // //                                                         <Button variant="outline" size="icon" onClick={() => handleOptimizeDescription(index, descIndex)} disabled={optimizingIndex === `${index}-${descIndex}`}>
// // // //                                                             {optimizingIndex === `${index}-${descIndex}` ? <Loader2 className="h-4 w-4 animate-spin" /> : <Sparkles className="h-4 w-4" />}
// // // //                                                         </Button>
// // // //                                                         <Button variant="outline" size="icon" onClick={() => removeDescription(index, descIndex)} className="text-red-600"><Trash2 className="h-4 w-4" /></Button>
// // // //                                                     </div>
// // // //                                                 </div>
// // // //                                             ))}
// // // //                                         </div>
// // // //                                     </CardContent>
// // // //                                 )}
// // // //                             </Card>
// // // //                         ))}
// // // //                     </div>
// // // //                 )}
// // // //             </CardContent>
// // // //         </Card>
// // // //     );
// // // // }


// // // import { useState, useEffect, KeyboardEvent } from 'react';
// // // import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// // // import { Button } from '@/components/ui/button';
// // // import { Input } from '@/components/ui/input';
// // // import { Label } from '@/components/ui/label';
// // // import { Textarea } from '@/components/ui/textarea';
// // // import { Badge } from '@/components/ui/badge';
// // // import { Star, Plus, Trash2, Save, X, Sparkles, Calendar, Code, ExternalLink, Github, Globe, Target, Lightbulb, ArrowUp, ArrowDown, Copy, Zap, Loader2 } from 'lucide-react';

// // // interface Project {
// // //     id: number;
// // //     title: string;
// // //     period: string;
// // //     technologies: string[];
// // //     description: string[];
// // //     url: string;
// // //     github: string;
// // //     featured: boolean;
// // // }

// // // interface ProjectsEditorProps {
// // //     data: Project[];
// // //     onUpdate: (data: Project[]) => void;
// // //     onClose: () => void;
// // //     targetRole?: string;
// // // }

// // // export function ProjectsEditor({ data, onUpdate, onClose, targetRole }: ProjectsEditorProps) {
// // //     const [projects, setProjects] = useState<Project[]>(data);
// // //     const [expandedIndex, setExpandedIndex] = useState<number | null>(0);
// // //     const [optimizingIndex, setOptimizingIndex] = useState<string | null>(null);

// // //     useEffect(() => {
// // //         setProjects(data);
// // //     }, [data]);

// // //     const addProject = () => {
// // //         const newProject: Project = { id: Date.now(), title: '', period: '', technologies: [], description: [''], url: '', github: '', featured: false };
// // //         setProjects([...projects, newProject]);
// // //         setExpandedIndex(projects.length);
// // //     };

// // //     const removeProject = (index: number) => {
// // //         const updated = projects.filter((_, i) => i !== index);
// // //         setProjects(updated);
// // //         onUpdate(updated);
// // //     };

// // //     const updateProject = <K extends keyof Project>(index: number, field: K, value: Project[K]) => {
// // //         const updated = [...projects];
// // //         updated[index] = { ...updated[index], [field]: value };
// // //         setProjects(updated);
// // //     };

// // //     const addTechnology = (projectIndex: number, technology: string) => {
// // //         if (technology.trim()) {
// // //             const updated = [...projects];
// // //             updated[projectIndex].technologies = [...new Set([...updated[projectIndex].technologies, technology.trim()])];
// // //             setProjects(updated);
// // //         }
// // //     };

// // //     const removeTechnology = (projectIndex: number, techIndex: number) => {
// // //         const updated = [...projects];
// // //         updated[projectIndex].technologies = updated[projectIndex].technologies.filter((_, i) => i !== techIndex);
// // //         setProjects(updated);
// // //     };

// // //     const addDescription = (projectIndex: number) => {
// // //         const updated = [...projects];
// // //         updated[projectIndex].description.push('');
// // //         setProjects(updated);
// // //     };

// // //     const updateDescription = (projectIndex: number, descIndex: number, value: string) => {
// // //         const updated = [...projects];
// // //         updated[projectIndex].description[descIndex] = value;
// // //         setProjects(updated);
// // //     };

// // //     const removeDescription = (projectIndex: number, descIndex: number) => {
// // //         const updated = [...projects];
// // //         updated[projectIndex].description = updated[projectIndex].description.filter((_, i) => i !== descIndex);
// // //         setProjects(updated);
// // //     };

// // //     const handleOptimizeDescription = async (projIndex: number, descIndex: number) => {
// // //         const project = projects[projIndex];
// // //         const descriptionText = project.description[descIndex];
// // //         if (!descriptionText.trim()) return;

// // //         const currentIndex = `${projIndex}-${descIndex}`;
// // //         setOptimizingIndex(currentIndex);

// // //         try {
// // //             const response = await fetch('/api/optimize-project-description', {
// // //                 method: 'POST',
// // //                 headers: { 'Content-Type': 'application/json' },
// // //                 body: JSON.stringify({
// // //                     descriptionText,
// // //                     projectTitle: project.title,
// // //                     targetRole: targetRole || 'Software Engineer',
// // //                     technologies: project.technologies
// // //                 }),
// // //             });
// // //             if (!response.ok) throw new Error('Failed to get optimization from AI.');

// // //             const result = await response.json();
// // //             const updatedProjects = [...projects];
// // //             updatedProjects[projIndex].description[descIndex] = result.optimizedText;
// // //             setProjects(updatedProjects);
// // //             onUpdate(updatedProjects);
// // //         } catch (error) {
// // //             console.error("Project description optimization failed:", error);
// // //         } finally {
// // //             setOptimizingIndex(null);
// // //         }
// // //     };

// // //     const moveProject = (index: number, direction: 'up' | 'down') => {
// // //         const updated = [...projects];
// // //         const newIndex = direction === 'up' ? index - 1 : index + 1;
// // //         if (newIndex >= 0 && newIndex < updated.length) {
// // //             [updated[index], updated[newIndex]] = [updated[newIndex], updated[index]];
// // //             setProjects(updated);
// // //             setExpandedIndex(newIndex);
// // //         }
// // //     };

// // //     const duplicateProject = (index: number) => {
// // //         const project: Project = { ...projects[index], id: Date.now(), title: `${projects[index].title} (Copy)` };
// // //         const updated = [...projects];
// // //         updated.splice(index + 1, 0, project);
// // //         setProjects(updated);
// // //     };

// // //     const handleSave = () => {
// // //         const validProjects = projects.filter(project => project.title.trim() && project.description.some(desc => desc.trim()));
// // //         onUpdate(validProjects);
// // //         onClose();
// // //     };

// // //     const suggestedTechnologies: string[] = ['React.js', 'Node.js', 'Next.js', 'TypeScript', 'Python', 'PostgreSQL', 'MongoDB', 'AWS', 'Docker', 'Tailwind CSS'];

// // //     return (
// // //         <Card>
// // //             <CardHeader className="flex flex-row items-center justify-between">
// // //                 <div>
// // //                     <CardTitle className="flex items-center gap-2 text-sm">
// // //                         <Star className="h-5 w-5" />Projects Portfolio
// // //                         <Badge variant="outline">{projects.length} Projects</Badge>
// // //                     </CardTitle>
// // //                     <p className="text-xs text-gray-600 mt-1">Showcase your best work with detailed project descriptions.</p>
// // //                 </div>
// // //                 <div className="flex items-center gap-2">
// // //                     <Button variant="outline" size="sm" onClick={addProject}><Plus className="h-4 w-4 mr-2" />Add Project</Button>
// // //                     <Button size="sm" onClick={handleSave}><Save className="h-4 w-4 mr-2" />Save & Close</Button>
// // //                 </div>
// // //             </CardHeader>
// // //             <CardContent className="space-y-6">
// // //                 <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
// // //                     <h4 className="font-medium text-purple-900 mb-2 flex items-center gap-2"><Lightbulb className="h-4 w-4" />Project Tips</h4>
// // //                     <ul className="text-sm text-purple-800 space-y-1">
// // //                         <li>Showcase 3-5 of your most impressive and relevant projects.</li>
// // //                         <li>Add live demo and GitHub repository links whenever possible.</li>
// // //                         <li>Quantify your impact with metrics (e.g., user growth, performance improvements).</li>
// // //                     </ul>
// // //                 </div>
// // //                 {projects.length === 0 ? (
// // //                     <div className="text-center py-12">
// // //                         <Star className="h-12 w-12 text-gray-400 mx-auto mb-4" />
// // //                         <h3 className="text-lg font-semibold text-gray-600 mb-2">No Projects Added Yet</h3>
// // //                         <Button onClick={addProject}><Plus className="h-4 w-4 mr-2" />Add Your First Project</Button>
// // //                     </div>
// // //                 ) : (
// // //                     <div className="space-y-4">
// // //                         {projects.map((project, index) => (
// // //                             <Card key={project.id} className={`border-2 transition-all ${expandedIndex === index ? 'border-purple-300 shadow-lg' : 'border-gray-200'}`}>
// // //                                 <CardHeader className="pb-3 cursor-pointer" onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}>
// // //                                     <div className="flex items-center justify-between">
// // //                                         <div className="flex items-center gap-3">
// // //                                             <Star className={`h-4 w-4 ${project.featured ? 'text-yellow-500 fill-current' : 'text-gray-400'}`} />
// // //                                             <div>
// // //                                                 <h4 className="font-semibold">{project.title || `Project #${index + 1}`}</h4>
// // //                                                 <p className="text-sm text-gray-600">{project.period}</p>
// // //                                             </div>
// // //                                         </div>
// // //                                         <div className="flex items-center gap-1">
// // //                                             <Button variant="outline" size="icon" onClick={(e) => { e.stopPropagation(); moveProject(index, 'up'); }} disabled={index === 0}><ArrowUp className="h-4 w-4" /></Button>
// // //                                             <Button variant="outline" size="icon" onClick={(e) => { e.stopPropagation(); moveProject(index, 'down'); }} disabled={index === projects.length - 1}><ArrowDown className="h-4 w-4" /></Button>
// // //                                             <Button variant="outline" size="icon" onClick={(e) => { e.stopPropagation(); duplicateProject(index); }}><Copy className="h-4 w-4" /></Button>
// // //                                             <Button variant="outline" size="icon" onClick={(e) => { e.stopPropagation(); removeProject(index); }} className="text-red-600 hover:text-red-700"><Trash2 className="h-4 w-4" /></Button>
// // //                                         </div>
// // //                                     </div>
// // //                                 </CardHeader>
// // //                                 {expandedIndex === index && (
// // //                                     <CardContent className="pt-0 space-y-4">
// // //                                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// // //                                             <div><Label htmlFor={`title-${project.id}`}>Project Title *</Label><Input id={`title-${project.id}`} value={project.title} onChange={(e) => updateProject(index, 'title', e.target.value)} placeholder="E-commerce Platform" /></div>
// // //                                             <div><Label htmlFor={`period-${project.id}`}>Timeline</Label><Input id={`period-${project.id}`} value={project.period} onChange={(e) => updateProject(index, 'period', e.target.value)} placeholder="March 2024" /></div>
// // //                                             <div><Label htmlFor={`url-${project.id}`}>Live Demo URL</Label><Input id={`url-${project.id}`} value={project.url} onChange={(e) => updateProject(index, 'url', e.target.value)} placeholder="https://myproject.com" /></div>
// // //                                             <div><Label htmlFor={`github-${project.id}`}>GitHub Repository</Label><Input id={`github-${project.id}`} value={project.github} onChange={(e) => updateProject(index, 'github', e.target.value)} placeholder="https://github.com/user/repo" /></div>
// // //                                         </div>
// // //                                         <div>
// // //                                             <Label>Technologies Used</Label>
// // //                                             <div className="flex flex-wrap gap-2 my-2">
// // //                                                 {project.technologies.map((tech, techIndex) => (
// // //                                                     <Badge key={techIndex} variant="secondary" className="group cursor-pointer">{tech}<X className="h-3 w-3 ml-2 opacity-0 group-hover:opacity-100" onClick={() => removeTechnology(index, techIndex)} /></Badge>
// // //                                                 ))}
// // //                                             </div>
// // //                                             <Input placeholder="Add technology and press Enter" onKeyPress={(e: KeyboardEvent<HTMLInputElement>) => { if (e.key === 'Enter') { const target = e.target as HTMLInputElement; addTechnology(index, target.value); target.value = ''; e.preventDefault(); } }} />
// // //                                         </div>
// // //                                         <div className="space-y-3">
// // //                                             <div className="flex items-center justify-between">
// // //                                                 <Label><Zap className="h-4 w-4 inline mr-2" />Key Features / Description</Label>
// // //                                                 <Button variant="outline" size="sm" onClick={() => addDescription(index)}><Plus className="h-4 w-4 mr-2" />Add Point</Button>
// // //                                             </div>
// // //                                             {project.description.map((desc, descIndex) => (
// // //                                                 <div key={descIndex} className="flex items-start gap-2">
// // //                                                     <Textarea value={desc} onChange={(e) => updateDescription(index, descIndex, e.target.value)} placeholder="Describe a key feature or achievement..." className="min-h-[60px]" />
// // //                                                     <div className="flex flex-col gap-1">
// // //                                                         <Button variant="outline" size="icon" onClick={() => handleOptimizeDescription(index, descIndex)} disabled={optimizingIndex === `${index}-${descIndex}`}>
// // //                                                             {optimizingIndex === `${index}-${descIndex}` ? <Loader2 className="h-4 w-4 animate-spin" /> : <Sparkles className="h-4 w-4" />}
// // //                                                         </Button>
// // //                                                         <Button variant="outline" size="icon" onClick={() => removeDescription(index, descIndex)} className="text-red-600"><Trash2 className="h-4 w-4" /></Button>
// // //                                                     </div>
// // //                                                 </div>
// // //                                             ))}
// // //                                         </div>
// // //                                     </CardContent>
// // //                                 )}
// // //                             </Card>
// // //                         ))}
// // //                     </div>
// // //                 )}
// // //             </CardContent>
// // //         </Card>
// // //     );
// // // }


// // import { useState, useEffect, KeyboardEvent } from 'react';
// // import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// // import { Button } from '@/components/ui/button';
// // import { Input } from '@/components/ui/input';
// // import { Label } from '@/components/ui/label';
// // import { Textarea } from '@/components/ui/textarea';
// // import { Badge } from '@/components/ui/badge';
// // import { Star, Plus, Trash2, Save, X, Sparkles, Calendar, Code, ExternalLink, Github, Globe, Target, Lightbulb, ArrowUp, ArrowDown, Copy, Zap, Loader2 } from 'lucide-react';

// // interface Project {
// //     id: number;
// //     title: string;
// //     period: string;
// //     technologies: string[];
// //     description: string[];
// //     url: string;
// //     github: string;
// //     featured: boolean;
// // }

// // interface ProjectsEditorProps {
// //     data: Project[];
// //     onUpdate: (data: Project[]) => void;
// //     onClose: () => void;
// //     targetRole?: string;
// // }

// // export function ProjectsEditor({ data, onUpdate, onClose, targetRole }: ProjectsEditorProps) {
// //     const [projects, setProjects] = useState<Project[]>(data);
// //     const [expandedIndex, setExpandedIndex] = useState<number | null>(0);
// //     const [optimizingIndex, setOptimizingIndex] = useState<string | null>(null);

// //     useEffect(() => {
// //         setProjects(data);
// //     }, [data]);

// //     const addProject = () => {
// //         const newProject: Project = { id: Date.now(), title: '', period: '', technologies: [], description: [''], url: '', github: '', featured: false };
// //         setProjects([...projects, newProject]);
// //         setExpandedIndex(projects.length);
// //     };

// //     const removeProject = (index: number) => {
// //         const updated = projects.filter((_, i) => i !== index);
// //         setProjects(updated);
// //         onUpdate(updated);
// //     };

// //     const updateProject = <K extends keyof Project>(index: number, field: K, value: Project[K]) => {
// //         const updated = [...projects];
// //         updated[index] = { ...updated[index], [field]: value };
// //         setProjects(updated);
// //     };

// //     const addTechnology = (projectIndex: number, technology: string) => {
// //         if (technology.trim()) {
// //             const updated = [...projects];
// //             updated[projectIndex].technologies = [...new Set([...updated[projectIndex].technologies, technology.trim()])];
// //             setProjects(updated);
// //         }
// //     };

// //     const removeTechnology = (projectIndex: number, techIndex: number) => {
// //         const updated = [...projects];
// //         updated[projectIndex].technologies = updated[projectIndex].technologies.filter((_, i) => i !== techIndex);
// //         setProjects(updated);
// //     };

// //     const addDescription = (projectIndex: number) => {
// //         const updated = [...projects];
// //         updated[projectIndex].description.push('');
// //         setProjects(updated);
// //     };

// //     const updateDescription = (projectIndex: number, descIndex: number, value: string) => {
// //         const updated = [...projects];
// //         updated[projectIndex].description[descIndex] = value;
// //         setProjects(updated);
// //     };

// //     const removeDescription = (projectIndex: number, descIndex: number) => {
// //         const updated = [...projects];
// //         updated[projectIndex].description = updated[projectIndex].description.filter((_, i) => i !== descIndex);
// //         setProjects(updated);
// //     };

// //     const handleOptimizeDescription = async (projIndex: number, descIndex: number) => {
// //         const project = projects[projIndex];
// //         const descriptionText = project.description[descIndex];
// //         if (!descriptionText.trim()) return;

// //         const existingDescriptions = project.description.filter((_, i) => i !== descIndex);
// //         const currentIndex = `${projIndex}-${descIndex}`;
// //         setOptimizingIndex(currentIndex);

// //         try {
// //             const response = await fetch('/api/optimize-project-description', {
// //                 method: 'POST',
// //                 headers: { 'Content-Type': 'application/json' },
// //                 body: JSON.stringify({
// //                     descriptionText,
// //                     projectTitle: project.title,
// //                     targetRole: targetRole || 'Software Engineer',
// //                     technologies: project.technologies,
// //                     existingDescriptions,
// //                 }),
// //             });
// //             if (!response.ok) throw new Error('Failed to get optimization from AI.');

// //             const result = await response.json();
// //             const updatedProjects = [...projects];
// //             updatedProjects[projIndex].description[descIndex] = result.optimizedText;
// //             setProjects(updatedProjects);
// //             onUpdate(updatedProjects);
// //         } catch (error) {
// //             console.error("Project description optimization failed:", error);
// //         } finally {
// //             setOptimizingIndex(null);
// //         }
// //     };

// //     const moveProject = (index: number, direction: 'up' | 'down') => {
// //         const updated = [...projects];
// //         const newIndex = direction === 'up' ? index - 1 : index + 1;
// //         if (newIndex >= 0 && newIndex < updated.length) {
// //             [updated[index], updated[newIndex]] = [updated[newIndex], updated[index]];
// //             setProjects(updated);
// //             setExpandedIndex(newIndex);
// //         }
// //     };

// //     const duplicateProject = (index: number) => {
// //         const project: Project = { ...projects[index], id: Date.now(), title: `${projects[index].title} (Copy)` };
// //         const updated = [...projects];
// //         updated.splice(index + 1, 0, project);
// //         setProjects(updated);
// //     };

// //     const handleSave = () => {
// //         const validProjects = projects.filter(project => project.title.trim() && project.description.some(desc => desc.trim()));
// //         onUpdate(validProjects);
// //         onClose();
// //     };

// //     const suggestedTechnologies: string[] = ['React.js', 'Node.js', 'Next.js', 'TypeScript', 'Python', 'PostgreSQL', 'MongoDB', 'AWS', 'Docker', 'Tailwind CSS'];

// //     return (
// //         <Card>
// //             <CardHeader className="flex flex-row items-center justify-between">
// //                 <div>
// //                     <CardTitle className="flex items-center gap-2 text-sm">
// //                         <Star className="h-5 w-5" />Projects Portfolio
// //                         <Badge variant="outline">{projects.length} Projects</Badge>
// //                     </CardTitle>
// //                     <p className="text-xs text-gray-600 mt-1">Showcase your best work with detailed project descriptions.</p>
// //                 </div>
// //                 <div className="flex items-center gap-2">
// //                     <Button variant="outline" size="sm" onClick={addProject}><Plus className="h-4 w-4 mr-2" />Add Project</Button>
// //                     <Button size="sm" onClick={handleSave}><Save className="h-4 w-4 mr-2" />Save & Close</Button>
// //                 </div>
// //             </CardHeader>
// //             <CardContent className="space-y-6">
// //                 <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
// //                     <h4 className="font-medium text-purple-900 mb-2 flex items-center gap-2"><Lightbulb className="h-4 w-4" />Project Tips</h4>
// //                     <ul className="text-sm text-purple-800 space-y-1">
// //                         <li>Showcase 3-5 of your most impressive and relevant projects.</li>
// //                         <li>Add live demo and GitHub repository links whenever possible.</li>
// //                         <li>Quantify your impact with metrics (e.g., user growth, performance improvements).</li>
// //                     </ul>
// //                 </div>
// //                 {projects.length === 0 ? (
// //                     <div className="text-center py-12">
// //                         <Star className="h-12 w-12 text-gray-400 mx-auto mb-4" />
// //                         <h3 className="text-lg font-semibold text-gray-600 mb-2">No Projects Added Yet</h3>
// //                         <Button onClick={addProject}><Plus className="h-4 w-4 mr-2" />Add Your First Project</Button>
// //                     </div>
// //                 ) : (
// //                     <div className="space-y-4">
// //                         {projects.map((project, index) => (
// //                             <Card key={project.id} className={`border-2 transition-all ${expandedIndex === index ? 'border-purple-300 shadow-lg' : 'border-gray-200'}`}>
// //                                 <CardHeader className="pb-3 cursor-pointer" onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}>
// //                                     <div className="flex items-center justify-between">
// //                                         <div className="flex items-center gap-3">
// //                                             <Star className={`h-4 w-4 ${project.featured ? 'text-yellow-500 fill-current' : 'text-gray-400'}`} />
// //                                             <div>
// //                                                 <h4 className="font-semibold">{project.title || `Project #${index + 1}`}</h4>
// //                                                 <p className="text-sm text-gray-600">{project.period}</p>
// //                                             </div>
// //                                         </div>
// //                                         <div className="flex items-center gap-1">
// //                                             <Button variant="outline" size="icon" onClick={(e) => { e.stopPropagation(); moveProject(index, 'up'); }} disabled={index === 0}><ArrowUp className="h-4 w-4" /></Button>
// //                                             <Button variant="outline" size="icon" onClick={(e) => { e.stopPropagation(); moveProject(index, 'down'); }} disabled={index === projects.length - 1}><ArrowDown className="h-4 w-4" /></Button>
// //                                             <Button variant="outline" size="icon" onClick={(e) => { e.stopPropagation(); duplicateProject(index); }}><Copy className="h-4 w-4" /></Button>
// //                                             <Button variant="outline" size="icon" onClick={(e) => { e.stopPropagation(); removeProject(index); }} className="text-red-600 hover:text-red-700"><Trash2 className="h-4 w-4" /></Button>
// //                                         </div>
// //                                     </div>
// //                                 </CardHeader>
// //                                 {expandedIndex === index && (
// //                                     <CardContent className="pt-0 space-y-4">
// //                                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //                                             <div><Label htmlFor={`title-${project.id}`}>Project Title *</Label><Input id={`title-${project.id}`} value={project.title} onChange={(e) => updateProject(index, 'title', e.target.value)} placeholder="E-commerce Platform" /></div>
// //                                             <div><Label htmlFor={`period-${project.id}`}>Timeline</Label><Input id={`period-${project.id}`} value={project.period} onChange={(e) => updateProject(index, 'period', e.target.value)} placeholder="March 2024" /></div>
// //                                             <div><Label htmlFor={`url-${project.id}`}>Live Demo URL</Label><Input id={`url-${project.id}`} value={project.url} onChange={(e) => updateProject(index, 'url', e.target.value)} placeholder="https://myproject.com" /></div>
// //                                             <div><Label htmlFor={`github-${project.id}`}>GitHub Repository</Label><Input id={`github-${project.id}`} value={project.github} onChange={(e) => updateProject(index, 'github', e.target.value)} placeholder="https://github.com/user/repo" /></div>
// //                                         </div>
// //                                         <div>
// //                                             <Label>Technologies Used</Label>
// //                                             <div className="flex flex-wrap gap-2 my-2">
// //                                                 {project.technologies.map((tech, techIndex) => (
// //                                                     <Badge key={techIndex} variant="secondary" className="group cursor-pointer">{tech}<X className="h-3 w-3 ml-2 opacity-0 group-hover:opacity-100" onClick={() => removeTechnology(index, techIndex)} /></Badge>
// //                                                 ))}
// //                                             </div>
// //                                             <Input placeholder="Add technology and press Enter" onKeyPress={(e: KeyboardEvent<HTMLInputElement>) => { if (e.key === 'Enter') { const target = e.target as HTMLInputElement; addTechnology(index, target.value); target.value = ''; e.preventDefault(); } }} />
// //                                         </div>
// //                                         <div className="space-y-3">
// //                                             <div className="flex items-center justify-between">
// //                                                 <Label><Zap className="h-4 w-4 inline mr-2" />Key Features / Description</Label>
// //                                                 <Button variant="outline" size="sm" onClick={() => addDescription(index)}><Plus className="h-4 w-4 mr-2" />Add Point</Button>
// //                                             </div>
// //                                             {project.description.map((desc, descIndex) => (
// //                                                 <div key={descIndex} className="flex items-start gap-2">
// //                                                     <Textarea value={desc} onChange={(e) => updateDescription(index, descIndex, e.target.value)} placeholder="Describe a key feature or achievement..." className="min-h-[60px]" />
// //                                                     <div className="flex flex-col gap-1">
// //                                                         <Button variant="outline" size="icon" onClick={() => handleOptimizeDescription(index, descIndex)} disabled={optimizingIndex === `${index}-${descIndex}`}>
// //                                                             {optimizingIndex === `${index}-${descIndex}` ? <Loader2 className="h-4 w-4 animate-spin" /> : <Sparkles className="h-4 w-4" />}
// //                                                         </Button>
// //                                                         <Button variant="outline" size="icon" onClick={() => removeDescription(index, descIndex)} className="text-red-600"><Trash2 className="h-4 w-4" /></Button>
// //                                                     </div>
// //                                                 </div>
// //                                             ))}
// //                                         </div>
// //                                     </CardContent>
// //                                 )}
// //                             </Card>
// //                         ))}
// //                     </div>
// //                 )}
// //             </CardContent>
// //         </Card>
// //     );
// // }


// import { useState, useEffect, KeyboardEvent } from 'react';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import { Textarea } from '@/components/ui/textarea';
// import { Badge } from '@/components/ui/badge';
// import { Star, Plus, Trash2, Save, X, Sparkles, Calendar, Code, ExternalLink, Github, Globe, Target, Lightbulb, ArrowUp, ArrowDown, Copy, Zap, Loader2 } from 'lucide-react';

// interface Project {
//     id: number;
//     title: string;
//     period: string;
//     technologies: string[];
//     description: string[];
//     url: string;
//     github: string;
//     featured: boolean;
// }

// interface ProjectsEditorProps {
//     data: Project[];
//     onUpdate: (data: Project[]) => void;
//     onClose: () => void;
//     targetRole?: string;
// }

// export function ProjectsEditor({ data, onUpdate, onClose, targetRole }: ProjectsEditorProps) {
//     const [projects, setProjects] = useState<Project[]>(data);
//     const [expandedIndex, setExpandedIndex] = useState<number | null>(0);
//     const [optimizingIndex, setOptimizingIndex] = useState<string | null>(null);

//     useEffect(() => {
//         setProjects(data);
//     }, [data]);

//     const addProject = () => {
//         const newProject: Project = { id: Date.now(), title: '', period: '', technologies: [], description: [''], url: '', github: '', featured: false };
//         setProjects([...projects, newProject]);
//         setExpandedIndex(projects.length);
//     };

//     const removeProject = (index: number) => {
//         const updated = projects.filter((_, i) => i !== index);
//         setProjects(updated);
//         onUpdate(updated);
//     };

//     const updateProject = <K extends keyof Project>(index: number, field: K, value: Project[K]) => {
//         const updated = [...projects];
//         updated[index] = { ...updated[index], [field]: value };
//         setProjects(updated);
//     };

//     const addTechnology = (projectIndex: number, technology: string) => {
//         if (technology.trim()) {
//             const updated = [...projects];
//             updated[projectIndex].technologies = [...new Set([...updated[projectIndex].technologies, technology.trim()])];
//             setProjects(updated);
//         }
//     };

//     const removeTechnology = (projectIndex: number, techIndex: number) => {
//         const updated = [...projects];
//         updated[projectIndex].technologies = updated[projectIndex].technologies.filter((_, i) => i !== techIndex);
//         setProjects(updated);
//     };

//     const addDescription = (projectIndex: number) => {
//         const updated = [...projects];
//         updated[projectIndex].description.push('');
//         setProjects(updated);
//     };

//     const updateDescription = (projectIndex: number, descIndex: number, value: string) => {
//         const updated = [...projects];
//         updated[projectIndex].description[descIndex] = value;
//         setProjects(updated);
//     };

//     const removeDescription = (projectIndex: number, descIndex: number) => {
//         const updated = [...projects];
//         updated[projectIndex].description = updated[projectIndex].description.filter((_, i) => i !== descIndex);
//         setProjects(updated);
//     };

//     const handleOptimizeDescription = async (projIndex: number, descIndex: number) => {
//         const project = projects[projIndex];
//         const descriptionText = project.description[descIndex];
//         if (!descriptionText.trim()) return;

//         // Get the other descriptions for context
//         const existingDescriptions = project.description.filter((_, i) => i !== descIndex);

//         const currentIndex = `${projIndex}-${descIndex}`;
//         setOptimizingIndex(currentIndex);

//         try {
//             // CORRECTED FETCH CALL - NOW SENDING ALL 5 REQUIRED FIELDS
//             const response = await fetch('/api/optimize-project-description', {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify({
//                     descriptionText,
//                     projectTitle: project.title,
//                     targetRole: targetRole || 'Software Engineer',
//                     technologies: project.technologies,
//                     existingDescriptions: existingDescriptions
//                 }),
//             });
//             if (!response.ok) {
//                 // Try to get a more specific error message from the server response
//                 const errorData = await response.json();
//                 throw new Error(errorData.error || 'Failed to get optimization from AI.');
//             }

//             const result = await response.json();
//             const updatedProjects = [...projects];
//             updatedProjects[projIndex].description[descIndex] = result.optimizedText;
//             setProjects(updatedProjects);
//             onUpdate(updatedProjects);
//         } catch (error) {
//             console.error("Project description optimization failed:", error);
//         } finally {
//             setOptimizingIndex(null);
//         }
//     };

//     const moveProject = (index: number, direction: 'up' | 'down') => {
//         const updated = [...projects];
//         const newIndex = direction === 'up' ? index - 1 : index + 1;
//         if (newIndex >= 0 && newIndex < updated.length) {
//             [updated[index], updated[newIndex]] = [updated[newIndex], updated[index]];
//             setProjects(updated);
//             setExpandedIndex(newIndex);
//         }
//     };

//     const duplicateProject = (index: number) => {
//         const project: Project = { ...projects[index], id: Date.now(), title: `${projects[index].title} (Copy)` };
//         const updated = [...projects];
//         updated.splice(index + 1, 0, project);
//         setProjects(updated);
//     };

//     const handleSave = () => {
//         const validProjects = projects.filter(project => project.title.trim() && project.description.some(desc => desc.trim()));
//         onUpdate(validProjects);
//         onClose();
//     };

//     const suggestedTechnologies: string[] = ['React.js', 'Node.js', 'Next.js', 'TypeScript', 'Python', 'PostgreSQL', 'MongoDB', 'AWS', 'Docker', 'Tailwind CSS'];

//     return (
//         <Card>
//             <CardHeader className="flex flex-row items-center justify-between">
//                 <div>
//                     <CardTitle className="flex items-center gap-2 text-sm">
//                         <Star className="h-5 w-5" />Projects Portfolio
//                         <Badge variant="outline">{projects.length} Projects</Badge>
//                     </CardTitle>
//                     <p className="text-xs text-gray-600 mt-1">Showcase your best work with detailed project descriptions.</p>
//                 </div>
//                 <div className="flex items-center gap-2">
//                     <Button variant="outline" size="sm" onClick={addProject}><Plus className="h-4 w-4 mr-2" />Add Project</Button>
//                     <Button size="sm" onClick={handleSave}><Save className="h-4 w-4 mr-2" />Save & Close</Button>
//                 </div>
//             </CardHeader>
//             <CardContent className="space-y-6">
//                 <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
//                     <h4 className="font-medium text-purple-900 mb-2 flex items-center gap-2"><Lightbulb className="h-4 w-4" />Project Tips</h4>
//                     <ul className="text-sm text-purple-800 space-y-1">
//                         <li>Showcase 3-5 of your most impressive and relevant projects.</li>
//                         <li>Add live demo and GitHub repository links whenever possible.</li>
//                         <li>Quantify your impact with metrics (e.g., user growth, performance improvements).</li>
//                     </ul>
//                 </div>
//                 {projects.length === 0 ? (
//                     <div className="text-center py-12">
//                         <Star className="h-12 w-12 text-gray-400 mx-auto mb-4" />
//                         <h3 className="text-lg font-semibold text-gray-600 mb-2">No Projects Added Yet</h3>
//                         <Button onClick={addProject}><Plus className="h-4 w-4 mr-2" />Add Your First Project</Button>
//                     </div>
//                 ) : (
//                     <div className="space-y-4">
//                         {projects.map((project, index) => (
//                             <Card key={project.id} className={`border-2 transition-all ${expandedIndex === index ? 'border-purple-300 shadow-lg' : 'border-gray-200'}`}>
//                                 <CardHeader className="pb-3 cursor-pointer" onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}>
//                                     <div className="flex items-center justify-between">
//                                         <div className="flex items-center gap-3">
//                                             <Star className={`h-4 w-4 ${project.featured ? 'text-yellow-500 fill-current' : 'text-gray-400'}`} />
//                                             <div>
//                                                 <h4 className="font-semibold">{project.title || `Project #${index + 1}`}</h4>
//                                                 <p className="text-sm text-gray-600">{project.period}</p>
//                                             </div>
//                                         </div>
//                                         <div className="flex items-center gap-1">
//                                             <Button variant="outline" size="icon" onClick={(e) => { e.stopPropagation(); moveProject(index, 'up'); }} disabled={index === 0}><ArrowUp className="h-4 w-4" /></Button>
//                                             <Button variant="outline" size="icon" onClick={(e) => { e.stopPropagation(); moveProject(index, 'down'); }} disabled={index === projects.length - 1}><ArrowDown className="h-4 w-4" /></Button>
//                                             <Button variant="outline" size="icon" onClick={(e) => { e.stopPropagation(); duplicateProject(index); }}><Copy className="h-4 w-4" /></Button>
//                                             <Button variant="outline" size="icon" onClick={(e) => { e.stopPropagation(); removeProject(index); }} className="text-red-600 hover:text-red-700"><Trash2 className="h-4 w-4" /></Button>
//                                         </div>
//                                     </div>
//                                 </CardHeader>
//                                 {expandedIndex === index && (
//                                     <CardContent className="pt-0 space-y-4">
//                                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                                             <div><Label htmlFor={`title-${project.id}`}>Project Title *</Label><Input id={`title-${project.id}`} value={project.title} onChange={(e) => updateProject(index, 'title', e.target.value)} placeholder="E-commerce Platform" /></div>
//                                             <div><Label htmlFor={`period-${project.id}`}>Timeline</Label><Input id={`period-${project.id}`} value={project.period} onChange={(e) => updateProject(index, 'period', e.target.value)} placeholder="March 2024" /></div>
//                                             <div><Label htmlFor={`url-${project.id}`}>Live Demo URL</Label><Input id={`url-${project.id}`} value={project.url} onChange={(e) => updateProject(index, 'url', e.target.value)} placeholder="https://myproject.com" /></div>
//                                             <div><Label htmlFor={`github-${project.id}`}>GitHub Repository</Label><Input id={`github-${project.id}`} value={project.github} onChange={(e) => updateProject(index, 'github', e.target.value)} placeholder="https://github.com/user/repo" /></div>
//                                         </div>
//                                         <div>
//                                             <Label>Technologies Used</Label>
//                                             <div className="flex flex-wrap gap-2 my-2">
//                                                 {project.technologies.map((tech, techIndex) => (
//                                                     <Badge key={techIndex} variant="secondary" className="group cursor-pointer">{tech}<X className="h-3 w-3 ml-2 opacity-0 group-hover:opacity-100" onClick={() => removeTechnology(index, techIndex)} /></Badge>
//                                                 ))}
//                                             </div>
//                                             <Input placeholder="Add technology and press Enter" onKeyPress={(e: KeyboardEvent<HTMLInputElement>) => { if (e.key === 'Enter') { const target = e.target as HTMLInputElement; addTechnology(index, target.value); target.value = ''; e.preventDefault(); } }} />
//                                         </div>
//                                         <div className="space-y-3">
//                                             <div className="flex items-center justify-between">
//                                                 <Label><Zap className="h-4 w-4 inline mr-2" />Key Features / Description</Label>
//                                                 <Button variant="outline" size="sm" onClick={() => addDescription(index)}><Plus className="h-4 w-4 mr-2" />Add Point</Button>
//                                             </div>
//                                             {project.description.map((desc, descIndex) => (
//                                                 <div key={descIndex} className="flex items-start gap-2">
//                                                     <Textarea value={desc} onChange={(e) => updateDescription(index, descIndex, e.target.value)} placeholder="Describe a key feature or achievement..." className="min-h-[60px]" />
//                                                     <div className="flex flex-col gap-1">
//                                                         <Button variant="outline" size="icon" onClick={() => handleOptimizeDescription(index, descIndex)} disabled={optimizingIndex === `${index}-${descIndex}`}>
//                                                             {optimizingIndex === `${index}-${descIndex}` ? <Loader2 className="h-4 w-4 animate-spin" /> : <Sparkles className="h-4 w-4" />}
//                                                         </Button>
//                                                         <Button variant="outline" size="icon" onClick={() => removeDescription(index, descIndex)} className="text-red-600"><Trash2 className="h-4 w-4" /></Button>
//                                                     </div>
//                                                 </div>
//                                             ))}
//                                         </div>
//                                     </CardContent>
//                                 )}
//                             </Card>
//                         ))}
//                     </div>
//                 )}
//             </CardContent>
//         </Card>
//     );
// }


import { useState, useEffect, KeyboardEvent } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Star, Plus, Trash2, Save, X, Sparkles, Calendar, Code, ExternalLink, Github, Globe, Target, Lightbulb, ArrowUp, ArrowDown, Copy, Zap, Loader2 } from 'lucide-react';

interface Project {
    id: number;
    title: string;
    period: string;
    technologies: string[];
    description: string[];
    url: string;
    github: string;
    featured: boolean;
}

interface ProjectsEditorProps {
    data: Project[];
    onUpdate: (data: Project[]) => void;
    onClose: () => void;
    targetRole?: string;
}

export function ProjectsEditor({ data, onUpdate, onClose, targetRole }: ProjectsEditorProps) {
    const [projects, setProjects] = useState<Project[]>(data);
    const [expandedIndex, setExpandedIndex] = useState<number | null>(0);
    const [optimizingIndex, setOptimizingIndex] = useState<string | null>(null);

    useEffect(() => {
        setProjects(data);
    }, [data]);

    const addProject = () => {
        const newProject: Project = { id: Date.now(), title: '', period: '', technologies: [], description: [''], url: '', github: '', featured: false };
        setProjects([...projects, newProject]);
        setExpandedIndex(projects.length);
    };

    const removeProject = (index: number) => {
        const updated = projects.filter((_, i) => i !== index);
        setProjects(updated);
        onUpdate(updated);
    };

    const updateProject = <K extends keyof Project>(index: number, field: K, value: Project[K]) => {
        const updated = [...projects];
        updated[index] = { ...updated[index], [field]: value };
        setProjects(updated);
    };

    const addTechnology = (projectIndex: number, technology: string) => {
        if (technology.trim()) {
            const updated = [...projects];
            updated[projectIndex].technologies = [...new Set([...updated[projectIndex].technologies, technology.trim()])];
            setProjects(updated);
        }
    };

    const removeTechnology = (projectIndex: number, techIndex: number) => {
        const updated = [...projects];
        updated[projectIndex].technologies = updated[projectIndex].technologies.filter((_, i) => i !== techIndex);
        setProjects(updated);
    };

    const addDescription = (projectIndex: number) => {
        const updated = [...projects];
        updated[projectIndex].description.push('');
        setProjects(updated);
    };

    const updateDescription = (projectIndex: number, descIndex: number, value: string) => {
        const updated = [...projects];
        updated[projectIndex].description[descIndex] = value;
        setProjects(updated);
    };

    const removeDescription = (projectIndex: number, descIndex: number) => {
        const updated = [...projects];
        updated[projectIndex].description = updated[projectIndex].description.filter((_, i) => i !== descIndex);
        setProjects(updated);
    };

    const handleOptimizeDescription = async (projIndex: number, descIndex: number) => {
        const project = projects[projIndex];
        const descriptionText = project.description[descIndex];

        // Client-side validation to prevent bad requests
        if (!descriptionText.trim() || !project.title.trim()) {
            return;
        }

        const existingDescriptions = project.description.filter((_, i) => i !== descIndex);
        const currentIndex = `${projIndex}-${descIndex}`;
        setOptimizingIndex(currentIndex);

        try {
            const response = await fetch('/api/optimize-project-description', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    descriptionText,
                    projectTitle: project.title,
                    targetRole: targetRole || 'Software Engineer',
                    technologies: project.technologies,
                    existingDescriptions,
                }),
            });
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Failed to get optimization from AI.');
            }

            const result = await response.json();
            const updatedProjects = [...projects];
            updatedProjects[projIndex].description[descIndex] = result.optimizedText;
            setProjects(updatedProjects);
            onUpdate(updatedProjects);
        } catch (error) {
            console.error("Project description optimization failed:", error);
            // Optionally, show an error toast to the user here
        } finally {
            setOptimizingIndex(null);
        }
    };

    const moveProject = (index: number, direction: 'up' | 'down') => {
        const updated = [...projects];
        const newIndex = direction === 'up' ? index - 1 : index + 1;
        if (newIndex >= 0 && newIndex < updated.length) {
            [updated[index], updated[newIndex]] = [updated[newIndex], updated[index]];
            setProjects(updated);
            setExpandedIndex(newIndex);
        }
    };

    const duplicateProject = (index: number) => {
        const project: Project = { ...projects[index], id: Date.now(), title: `${projects[index].title} (Copy)` };
        const updated = [...projects];
        updated.splice(index + 1, 0, project);
        setProjects(updated);
    };

    const handleSave = () => {
        const validProjects = projects.filter(project => project.title.trim() && project.description.some(desc => desc.trim()));
        onUpdate(validProjects);
        onClose();
    };

    return (
        <Card>
            <CardHeader className="flex flex-col items-center gap-2.5 justify-between">
                <div className="flex flex-col items-center">
                    <CardTitle className="flex items-center gap-2 text-sm">
                        <Star className="h-5 w-5" />Projects Portfolio
                        <Badge variant="outline">{projects.length} Projects</Badge>
                    </CardTitle>
                    <p className="text-xs text-gray-600 mt-1">Showcase your best work with detailed project descriptions.</p>
                </div>
                <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" onClick={addProject}><Plus className="h-4 w-4 mr-2" />Add Project</Button>
                    <Button size="sm" onClick={handleSave}><Save className="h-4 w-4 mr-2" />Save & Close</Button>
                </div>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                    <h4 className="font-medium text-purple-900 mb-2 flex items-center gap-2"><Lightbulb className="h-4 w-4" />Project Tips</h4>
                    <ul className="text-sm text-purple-800 space-y-1">
                        <li>Showcase 3-5 of your most impressive and relevant projects.</li>
                        <li>Add live demo and GitHub repository links whenever possible.</li>
                        <li>Quantify your impact with metrics (e.g., user growth, performance improvements).</li>
                    </ul>
                </div>
                {projects.length === 0 ? (
                    <div className="text-center py-12">
                        <Star className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                        <h3 className="text-lg font-semibold text-gray-600 mb-2">No Projects Added Yet</h3>
                        <Button onClick={addProject}><Plus className="h-4 w-4 mr-2" />Add Your First Project</Button>
                    </div>
                ) : (
                    <div className="space-y-4">
                        {projects.map((project, index) => (
                            <Card key={project.id} className={`border-2 transition-all ${expandedIndex === index ? 'border-purple-300 shadow-lg' : 'border-gray-200'}`}>
                                <CardHeader className="pb-3 cursor-pointer" onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <Star className={`h-4 w-4 ${project.featured ? 'text-yellow-500 fill-current' : 'text-gray-400'}`} />
                                            <div>
                                                <h4 className="font-semibold">{project.title || `Project #${index + 1}`}</h4>
                                                <p className="text-sm text-gray-600">{project.period}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Button variant="outline" size="icon" onClick={(e) => { e.stopPropagation(); moveProject(index, 'up'); }} disabled={index === 0}><ArrowUp className="h-4 w-4" /></Button>
                                            <Button variant="outline" size="icon" onClick={(e) => { e.stopPropagation(); moveProject(index, 'down'); }} disabled={index === projects.length - 1}><ArrowDown className="h-4 w-4" /></Button>
                                            <Button variant="outline" size="icon" onClick={(e) => { e.stopPropagation(); duplicateProject(index); }}><Copy className="h-4 w-4" /></Button>
                                            <Button variant="outline" size="icon" onClick={(e) => { e.stopPropagation(); removeProject(index); }} className="text-red-600 hover:text-red-700"><Trash2 className="h-4 w-4" /></Button>
                                        </div>
                                    </div>
                                </CardHeader>
                                {expandedIndex === index && (
                                    <CardContent className="pt-0 space-y-4">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div><Label htmlFor={`title-${project.id}`}>Project Title *</Label><Input id={`title-${project.id}`} value={project.title} onChange={(e) => updateProject(index, 'title', e.target.value)} placeholder="E-commerce Platform" /></div>
                                            <div><Label htmlFor={`period-${project.id}`}>Timeline</Label><Input id={`period-${project.id}`} value={project.period} onChange={(e) => updateProject(index, 'period', e.target.value)} placeholder="March 2024" /></div>
                                            <div><Label htmlFor={`url-${project.id}`}>Live Demo URL</Label><Input id={`url-${project.id}`} value={project.url} onChange={(e) => updateProject(index, 'url', e.target.value)} placeholder="https://myproject.com" /></div>
                                            <div><Label htmlFor={`github-${project.id}`}>GitHub Repository</Label><Input id={`github-${project.id}`} value={project.github} onChange={(e) => updateProject(index, 'github', e.target.value)} placeholder="https://github.com/user/repo" /></div>
                                        </div>
                                        <div>
                                            <Label>Technologies Used</Label>
                                            <div className="flex flex-wrap gap-2 my-2">
                                                {project.technologies.map((tech, techIndex) => (
                                                    <Badge key={techIndex} variant="secondary" className="group cursor-pointer">{tech}<X className="h-3 w-3 ml-2 opacity-0 group-hover:opacity-100" onClick={() => removeTechnology(index, techIndex)} /></Badge>
                                                ))}
                                            </div>
                                            <Input placeholder="Add technology and press Enter" onKeyPress={(e: KeyboardEvent<HTMLInputElement>) => { if (e.key === 'Enter') { const target = e.target as HTMLInputElement; addTechnology(index, target.value); target.value = ''; e.preventDefault(); } }} />
                                        </div>
                                        <div className="space-y-3">
                                            <div className="flex items-center justify-between">
                                                <Label><Zap className="h-4 w-4 inline mr-2" />Key Features / Description</Label>
                                                <Button variant="outline" size="sm" onClick={() => addDescription(index)}><Plus className="h-4 w-4 mr-2" />Add Point</Button>
                                            </div>
                                            {project.description.map((desc, descIndex) => (
                                                <div key={descIndex} className="flex items-start gap-2">
                                                    <Textarea value={desc} onChange={(e) => updateDescription(index, descIndex, e.target.value)} placeholder="Describe a key feature or achievement..." className="min-h-[60px]" />
                                                    <div className="flex flex-col gap-1">
                                                        <Button
                                                            variant="outline"
                                                            size="icon"
                                                            onClick={() => handleOptimizeDescription(index, descIndex)}
                                                            disabled={optimizingIndex === `${index}-${descIndex}` || !desc.trim() || !project.title.trim()}
                                                            title={!project.title.trim() ? "Add a project title first" : "AI Optimize"}
                                                        >
                                                            {optimizingIndex === `${index}-${descIndex}` ? <Loader2 className="h-4 w-4 animate-spin" /> : <Sparkles className="h-4 w-4" />}
                                                        </Button>
                                                        <Button variant="outline" size="icon" onClick={() => removeDescription(index, descIndex)} className="text-red-600"><Trash2 className="h-4 w-4" /></Button>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </CardContent>
                                )}
                            </Card>
                        ))}
                    </div>
                )}
            </CardContent>
        </Card>
    );
}