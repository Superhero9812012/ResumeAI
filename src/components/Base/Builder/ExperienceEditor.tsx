

// // import { useState } from 'react';
// // import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// // import { Button } from '@/components/ui/button';
// // import { Input } from '@/components/ui/input';
// // import { Label } from '@/components/ui/label';
// // import { Textarea } from '@/components/ui/textarea';
// // import { Badge } from '@/components/ui/badge';
// // import {
// //     Briefcase,
// //     Plus,
// //     Trash2,
// //     Save,
// //     X,
// //     Sparkles,
// //     Calendar,
// //     Building,
// //     MapPin,
// //     Target,
// //     TrendingUp,
// //     Lightbulb,
// //     ArrowUp,
// //     ArrowDown,
// //     Copy
// // } from 'lucide-react';

// // // Type Definitions
// // interface Experience {
// //     id: number;
// //     title: string;
// //     company: string;
// //     location: string;
// //     period: string;
// //     achievements: string[];
// // }

// // interface ExperienceEditorProps {
// //     data: Experience[];
// //     onUpdate: (data: Experience[]) => void;
// //     onClose: () => void;
// // }

// // export function ExperienceEditor({ data, onUpdate, onClose }: ExperienceEditorProps) {
// //     const [experiences, setExperiences] = useState<Experience[]>(data);
// //     const [expandedIndex, setExpandedIndex] = useState<number | null>(0);
// //     const [optimizationSuggestions, setOptimizationSuggestions] = useState<{ [key: string]: string }>({});

// //     const addExperience = () => {
// //         const newExperience: Experience = {
// //             id: Date.now(),
// //             title: '',
// //             company: '',
// //             location: '',
// //             period: '',
// //             achievements: ['']
// //         };
// //         setExperiences([...experiences, newExperience]);
// //         setExpandedIndex(experiences.length);
// //     };

// //     const removeExperience = (index: number) => {
// //         const updated = experiences.filter((_, i) => i !== index);
// //         setExperiences(updated);
// //         if (expandedIndex !== null && expandedIndex >= updated.length && updated.length > 0) {
// //             setExpandedIndex(updated.length - 1);
// //         } else if (updated.length === 0) {
// //             setExpandedIndex(null);
// //         }
// //     };

// //     const updateExperience = <K extends keyof Experience>(index: number, field: K, value: Experience[K]) => {
// //         const updated = [...experiences];
// //         updated[index] = { ...updated[index], [field]: value };
// //         setExperiences(updated);
// //     };

// //     const addAchievement = (expIndex: number) => {
// //         const updated = [...experiences];
// //         updated[expIndex].achievements.push('');
// //         setExperiences(updated);
// //     };

// //     const updateAchievement = (expIndex: number, achIndex: number, value: string) => {
// //         const updated = [...experiences];
// //         updated[expIndex].achievements[achIndex] = value;
// //         setExperiences(updated);
// //     };

// //     const removeAchievement = (expIndex: number, achIndex: number) => {
// //         const updated = [...experiences];
// //         updated[expIndex].achievements = updated[expIndex].achievements.filter((_, i) => i !== achIndex);
// //         setExperiences(updated);
// //     };

// //     const moveExperience = (index: number, direction: 'up' | 'down') => {
// //         const updated = [...experiences];
// //         const newIndex = direction === 'up' ? index - 1 : index + 1;
// //         if (newIndex >= 0 && newIndex < updated.length) {
// //             [updated[index], updated[newIndex]] = [updated[newIndex], updated[index]];
// //             setExperiences(updated);
// //             setExpandedIndex(newIndex);
// //         }
// //     };

// //     const duplicateExperience = (index: number) => {
// //         const experience: Experience = { ...experiences[index], id: Date.now() };
// //         const updated = [...experiences];
// //         updated.splice(index + 1, 0, experience);
// //         setExperiences(updated);
// //     };

// //     const optimizeAchievement = (expIndex: number, achIndex: number) => {
// //         const achievement = experiences[expIndex].achievements[achIndex];

// //         const actionVerbs = ['Developed', 'Implemented', 'Designed', 'Optimized', 'Built', 'Enhanced', 'Created', 'Managed', 'Led'];
// //         const randomVerb = actionVerbs[Math.floor(Math.random() * actionVerbs.length)];

// //         let optimized = achievement;
// //         if (!optimized.match(/^(Developed|Implemented|Designed|Optimized|Built|Enhanced|Created|Managed|Led)/i)) {
// //             optimized = `${randomVerb} ${achievement.charAt(0).toLowerCase() + achievement.slice(1)}`;
// //         }

// //         if (!optimized.match(/\d+%|\d+\+/)) {
// //             optimized += ', resulting in 25% improvement in efficiency';
// //         }

// //         updateAchievement(expIndex, achIndex, optimized);

// //         setOptimizationSuggestions({
// //             ...optimizationSuggestions,
// //             [`${expIndex}-${achIndex}`]: 'Added action verb and quantified impact'
// //         });

// //         setTimeout(() => {
// //             setOptimizationSuggestions(prev => {
// //                 const updated = { ...prev };
// //                 delete updated[`${expIndex}-${achIndex}`];
// //                 return updated;
// //             });
// //         }, 3000);
// //     };

// //     const handleSave = () => {
// //         const validExperiences = experiences.filter(exp =>
// //             exp.title.trim() && exp.company.trim() && exp.achievements.some(ach => ach.trim())
// //         );
// //         onUpdate(validExperiences);
// //         onClose();
// //     };

// //     const getAchievementScore = (achievement: string): number => {
// //         let score = 0;
// //         if (achievement.match(/^(Developed|Implemented|Designed|Optimized|Built|Enhanced|Created|Managed|Led)/i)) score += 25;
// //         if (achievement.match(/\d+%|\d+\+|\$\d+/)) score += 30;
// //         if (achievement.length > 50) score += 25;
// //         if (achievement.match(/(improved|increased|reduced|enhanced|optimized)/i)) score += 20;
// //         return Math.min(score, 100);
// //     };

// //     return (
// //         <Card>
// //             <CardHeader className="flex flex-row items-center justify-between">
// //                 <div>
// //                     <CardTitle className="flex items-center gap-2 text-sm">
// //                         <Briefcase className="h-5 w-5" />
// //                         Professional Experience
// //                         <Badge variant="outline">{experiences.length} {experiences.length === 1 ? 'Position' : 'Positions'}</Badge>
// //                     </CardTitle>
// //                     <p className=" text-gray-600 mt-1 text-xs">
// //                         Add and optimize your work experience with AI-powered suggestions
// //                     </p>
// //                 </div>
// //                 <div className="flex items-center gap-2">
// //                     <Button variant="outline" size="sm" onClick={addExperience}>
// //                         <Plus className="h-4 w-4 mr-2" />
// //                         Add Experience
// //                     </Button>
// //                     <Button size="sm" onClick={handleSave}>
// //                         <Save className="h-4 w-4 mr-2" />
// //                         Save
// //                     </Button>
// //                     <Button variant="outline" size="sm" onClick={onClose}>
// //                         <X className="h-4 w-4" />
// //                     </Button>
// //                 </div>
// //             </CardHeader>
// //             <CardContent className="space-y-6">
// //                 <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
// //                     <h4 className="font-medium text-blue-900 mb-2 flex items-center gap-2">
// //                         <Lightbulb className="h-4 w-4" />
// //                         Experience Optimization Tips
// //                     </h4>
// //                     <ul className="text-sm text-blue-800 space-y-1">
// //                         <li>• Start each bullet point with a strong action verb (Developed, Implemented, Led)</li>
// //                         <li>• Include specific metrics and percentages when possible</li>
// //                         <li>• Focus on achievements and impact, not just responsibilities</li>
// //                         <li>• Use relevant industry keywords for ATS optimization</li>
// //                     </ul>
// //                 </div>

// //                 {experiences.length === 0 ? (
// //                     <div className="text-center py-12">
// //                         <Briefcase className="h-12 w-12 text-gray-400 mx-auto mb-4" />
// //                         <h3 className="text-lg font-semibold text-gray-600 mb-2">No Experience Added Yet</h3>
// //                         <p className="text-gray-500 mb-4">Add your first work experience to get started</p>
// //                         <Button onClick={addExperience}>
// //                             <Plus className="h-4 w-4 mr-2" />
// //                             Add Your First Experience
// //                         </Button>
// //                     </div>
// //                 ) : (
// //                     <div className="space-y-4">
// //                         {experiences.map((experience, index) => (
// //                             <Card key={experience.id} className={`border-2 transition-all ${expandedIndex === index ? 'border-blue-300 shadow-lg' : 'border-gray-200'}`}>
// //                                 <CardHeader className="pb-3">
// //                                     <div className="flex items-center justify-between">
// //                                         <div className="flex items-center gap-3">
// //                                             <Button
// //                                                 variant="ghost"
// //                                                 size="sm"
// //                                                 onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
// //                                                 className="p-2"
// //                                             >
// //                                                 <Briefcase className="h-4 w-4" />
// //                                             </Button>
// //                                             <div>
// //                                                 <h4 className="font-semibold">
// //                                                     {experience.title || `Experience ${index + 1}`}
// //                                                 </h4>
// //                                                 <p className="text-sm text-gray-600">
// //                                                     {experience.company} {experience.company && experience.location && '•'} {experience.location}
// //                                                 </p>
// //                                             </div>
// //                                         </div>
// //                                         <div className="flex items-center gap-1">
// //                                             <Button variant="outline" size="sm" onClick={() => moveExperience(index, 'up')} disabled={index === 0}>
// //                                                 <ArrowUp className="h-4 w-4" />
// //                                             </Button>
// //                                             <Button variant="outline" size="sm" onClick={() => moveExperience(index, 'down')} disabled={index === experiences.length - 1}>
// //                                                 <ArrowDown className="h-4 w-4" />
// //                                             </Button>
// //                                             <Button variant="outline" size="sm" onClick={() => duplicateExperience(index)}>
// //                                                 <Copy className="h-4 w-4" />
// //                                             </Button>
// //                                             <Button variant="outline" size="sm" onClick={() => removeExperience(index)} className="text-red-600 hover:text-red-700">
// //                                                 <Trash2 className="h-4 w-4" />
// //                                             </Button>
// //                                         </div>
// //                                     </div>
// //                                 </CardHeader>

// //                                 {expandedIndex === index && (
// //                                     <CardContent className="pt-0 space-y-4">
// //                                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //                                             <div className="space-y-2">
// //                                                 <Label htmlFor={`title-${experience.id}`} className="flex items-center gap-2">
// //                                                     <Target className="h-4 w-4" />
// //                                                     Job Title *
// //                                                 </Label>
// //                                                 <Input
// //                                                     id={`title-${experience.id}`}
// //                                                     value={experience.title}
// //                                                     onChange={(e) => updateExperience(index, 'title', e.target.value)}
// //                                                     placeholder="Software Engineer"
// //                                                 />
// //                                             </div>
// //                                             <div className="space-y-2">
// //                                                 <Label htmlFor={`company-${experience.id}`} className="flex items-center gap-2">
// //                                                     <Building className="h-4 w-4" />
// //                                                     Company *
// //                                                 </Label>
// //                                                 <Input
// //                                                     id={`company-${experience.id}`}
// //                                                     value={experience.company}
// //                                                     onChange={(e) => updateExperience(index, 'company', e.target.value)}
// //                                                     placeholder="TechCorp Inc."
// //                                                 />
// //                                             </div>
// //                                             <div className="space-y-2">
// //                                                 <Label htmlFor={`location-${experience.id}`} className="flex items-center gap-2">
// //                                                     <MapPin className="h-4 w-4" />
// //                                                     Location
// //                                                 </Label>
// //                                                 <Input
// //                                                     id={`location-${experience.id}`}
// //                                                     value={experience.location}
// //                                                     onChange={(e) => updateExperience(index, 'location', e.target.value)}
// //                                                     placeholder="San Francisco, CA"
// //                                                 />
// //                                             </div>
// //                                             <div className="space-y-2">
// //                                                 <Label htmlFor={`period-${experience.id}`} className="flex items-center gap-2">
// //                                                     <Calendar className="h-4 w-4" />
// //                                                     Period *
// //                                                 </Label>
// //                                                 <Input
// //                                                     id={`period-${experience.id}`}
// //                                                     value={experience.period}
// //                                                     onChange={(e) => updateExperience(index, 'period', e.target.value)}
// //                                                     placeholder="Jan 2023 - Present"
// //                                                 />
// //                                             </div>
// //                                         </div>

// //                                         <div className="space-y-3">
// //                                             <div className="flex items-center justify-between">
// //                                                 <Label className="flex items-center gap-2">
// //                                                     <TrendingUp className="h-4 w-4" />
// //                                                     Key Achievements
// //                                                 </Label>
// //                                                 <Button variant="outline" size="sm" onClick={() => addAchievement(index)}>
// //                                                     <Plus className="h-4 w-4 mr-2" />
// //                                                     Add Achievement
// //                                                 </Button>
// //                                             </div>

// //                                             {experience.achievements.map((achievement, achIndex) => (
// //                                                 <div key={achIndex} className="space-y-2">
// //                                                     <div className="flex items-start gap-2">
// //                                                         <Textarea
// //                                                             value={achievement}
// //                                                             onChange={(e) => updateAchievement(index, achIndex, e.target.value)}
// //                                                             placeholder="Developed and implemented a new feature that increased user engagement by 30%"
// //                                                             className="min-h-[80px]"
// //                                                         />
// //                                                         <div className="flex flex-col gap-1">
// //                                                             <Button variant="outline" size="sm" onClick={() => optimizeAchievement(index, achIndex)} title="AI Optimize">
// //                                                                 <Sparkles className="h-4 w-4" />
// //                                                             </Button>
// //                                                             <Button variant="outline" size="sm" onClick={() => removeAchievement(index, achIndex)} className="text-red-600">
// //                                                                 <Trash2 className="h-4 w-4" />
// //                                                             </Button>
// //                                                         </div>
// //                                                     </div>

// //                                                     {achievement && (
// //                                                         <div className="flex items-center gap-2 ml-2">
// //                                                             <div className="flex items-center gap-1">
// //                                                                 <div className={`w-2 h-2 rounded-full ${getAchievementScore(achievement) >= 80 ? 'bg-green-500' :
// //                                                                     getAchievementScore(achievement) >= 60 ? 'bg-yellow-500' : 'bg-red-500'
// //                                                                     }`}></div>
// //                                                                 <span className="text-xs text-gray-600">
// //                                                                     Impact Score: {getAchievementScore(achievement)}%
// //                                                                 </span>
// //                                                             </div>
// //                                                             {optimizationSuggestions[`${index}-${achIndex}`] && (
// //                                                                 <Badge variant="secondary" className="text-xs bg-green-50 text-green-700">
// //                                                                     {optimizationSuggestions[`${index}-${achIndex}`]}
// //                                                                 </Badge>
// //                                                             )}
// //                                                         </div>
// //                                                     )}
// //                                                 </div>
// //                                             ))}
// //                                         </div>
// //                                     </CardContent>
// //                                 )}
// //                             </Card>
// //                         ))}
// //                     </div>
// //                 )}

// //                 {experiences.length > 0 && (
// //                     <div className="flex items-center justify-between pt-4 border-t">
// //                         <div className="text-sm text-gray-600">
// //                             Total Achievements: {experiences.reduce((total, exp) => total + exp.achievements.filter(ach => ach.trim()).length, 0)}
// //                         </div>
// //                         <div className="text-sm text-gray-500">
// //                             Average Impact Score: {(() => {
// //                                 const allAchievements = experiences.flatMap(exp => exp.achievements);
// //                                 if (allAchievements.length === 0) return 0;
// //                                 const totalScore = allAchievements.reduce((achTotal, ach) => achTotal + getAchievementScore(ach), 0);
// //                                 return Math.round(totalScore / allAchievements.length);
// //                             })()}%
// //                         </div>
// //                     </div>
// //                 )}
// //             </CardContent>
// //         </Card>
// //     );
// // }


// import { useState, useEffect } from 'react';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import { Textarea } from '@/components/ui/textarea';
// import { Badge } from '@/components/ui/badge';
// import { Briefcase, Plus, Trash2, Save, X, Sparkles, Calendar, Building, MapPin, Target, TrendingUp, Lightbulb, ArrowUp, ArrowDown, Copy } from 'lucide-react';

// interface Experience {
//     id: number;
//     title: string;
//     company: string;
//     location: string;
//     period: string;
//     achievements: string[];
// }

// interface ExperienceEditorProps {
//     data: Experience[];
//     onUpdate: (data: Experience[]) => void;
//     onClose: () => void;
// }

// export function ExperienceEditor({ data, onUpdate, onClose }: ExperienceEditorProps) {
//     const [experiences, setExperiences] = useState<Experience[]>(data);
//     const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

//     useEffect(() => {
//         setExperiences(data);
//     }, [data]);

//     const addExperience = () => {
//         const newExperience: Experience = {
//             id: Date.now(),
//             title: '',
//             company: '',
//             location: '',
//             period: '',
//             achievements: ['']
//         };
//         setExperiences([...experiences, newExperience]);
//         setExpandedIndex(experiences.length);
//     };

//     const removeExperience = (index: number) => {
//         const updated = experiences.filter((_, i) => i !== index);
//         setExperiences(updated);
//         onUpdate(updated);
//     };

//     const updateExperience = <K extends keyof Experience>(index: number, field: K, value: Experience[K]) => {
//         const updated = [...experiences];
//         updated[index] = { ...updated[index], [field]: value };
//         setExperiences(updated);
//     };

//     const addAchievement = (expIndex: number) => {
//         const updated = [...experiences];
//         updated[expIndex].achievements.push('');
//         setExperiences(updated);
//     };

//     const updateAchievement = (expIndex: number, achIndex: number, value: string) => {
//         const updated = [...experiences];
//         updated[expIndex].achievements[achIndex] = value;
//         setExperiences(updated);
//     };

//     const removeAchievement = (expIndex: number, achIndex: number) => {
//         const updated = [...experiences];
//         updated[expIndex].achievements = updated[expIndex].achievements.filter((_, i) => i !== achIndex);
//         setExperiences(updated);
//     };

//     const moveExperience = (index: number, direction: 'up' | 'down') => {
//         const updated = [...experiences];
//         const newIndex = direction === 'up' ? index - 1 : index + 1;
//         if (newIndex >= 0 && newIndex < updated.length) {
//             [updated[index], updated[newIndex]] = [updated[newIndex], updated[index]];
//             setExperiences(updated);
//             setExpandedIndex(newIndex);
//         }
//     };

//     const duplicateExperience = (index: number) => {
//         const experience: Experience = { ...experiences[index], id: Date.now() };
//         const updated = [...experiences];
//         updated.splice(index + 1, 0, experience);
//         setExperiences(updated);
//     };

//     const handleSave = () => {
//         const validExperiences = experiences.filter(exp =>
//             exp.title.trim() && exp.company.trim() && exp.achievements.some(ach => ach.trim())
//         );
//         onUpdate(validExperiences);

//     };

//     return (
//         <Card>
//             <CardHeader className="flex flex-row items-center justify-between">
//                 <div>
//                     <CardTitle className="flex items-center gap-2 text-sm">
//                         <Briefcase className="h-5 w-5" />
//                         Professional Experience
//                         <Badge variant="outline">{experiences.length} {experiences.length === 1 ? 'Position' : 'Positions'}</Badge>
//                     </CardTitle>
//                     <p className=" text-gray-600 mt-1 text-xs">
//                         Add and optimize your work experience.
//                     </p>
//                 </div>
//                 <div className="flex items-center gap-2">
//                     <Button variant="outline" size="sm" onClick={addExperience}>
//                         <Plus className="h-4 w-4 mr-2" />
//                         Add Experience
//                     </Button>
//                     <Button size="sm" onClick={handleSave}>
//                         <Save className="h-4 w-4 mr-2" />
//                         Save All Changes
//                     </Button>
//                 </div>
//             </CardHeader>
//             <CardContent className="space-y-6">
//                 <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
//                     <h4 className="font-medium text-blue-900 mb-2 flex items-center gap-2">
//                         <Lightbulb className="h-4 w-4" />
//                         Experience Tips
//                     </h4>
//                     <ul className="text-sm text-blue-800 space-y-1">
//                         <li>• Start each bullet point with a strong action verb (e.g., Developed, Managed, Led).</li>
//                         <li>• Quantify your achievements with numbers and percentages whenever possible.</li>
//                         <li>• Focus on your impact on the project or company, not just your daily tasks.</li>
//                     </ul>
//                 </div>
//                 {experiences.length === 0 ? (
//                     <div className="text-center py-12">
//                         <Briefcase className="h-12 w-12 text-gray-400 mx-auto mb-4" />
//                         <h3 className="text-lg font-semibold text-gray-600 mb-2">No Experience Added</h3>
//                         <p className="text-gray-500 mb-4">Add your first work experience to get started.</p>
//                         <Button onClick={addExperience}>
//                             <Plus className="h-4 w-4 mr-2" />
//                             Add Your First Experience
//                         </Button>
//                     </div>
//                 ) : (
//                     <div className="space-y-4">
//                         {experiences.map((experience, index) => (
//                             <Card key={experience.id} className={`border-2 transition-all ${expandedIndex === index ? 'border-blue-300 shadow-lg' : 'border-gray-200'}`}>
//                                 <CardHeader className="pb-3 cursor-pointer" onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}>
//                                     <div className="flex items-center justify-between">
//                                         <div className="flex items-center gap-3">
//                                             <Briefcase className="h-4 w-4" />
//                                             <div>
//                                                 <h4 className="font-semibold">{experience.title || `Position #${index + 1}`}</h4>
//                                                 <p className="text-sm text-gray-600">{experience.company}</p>
//                                             </div>
//                                         </div>
//                                         <div className="flex items-center gap-1">
//                                             <Button variant="outline" size="icon" onClick={(e) => { e.stopPropagation(); moveExperience(index, 'up'); }} disabled={index === 0}><ArrowUp className="h-4 w-4" /></Button>
//                                             <Button variant="outline" size="icon" onClick={(e) => { e.stopPropagation(); moveExperience(index, 'down'); }} disabled={index === experiences.length - 1}><ArrowDown className="h-4 w-4" /></Button>
//                                             <Button variant="outline" size="icon" onClick={(e) => { e.stopPropagation(); duplicateExperience(index); }}><Copy className="h-4 w-4" /></Button>
//                                             <Button variant="outline" size="icon" onClick={(e) => { e.stopPropagation(); removeExperience(index); }} className="text-red-600 hover:text-red-700"><Trash2 className="h-4 w-4" /></Button>
//                                         </div>
//                                     </div>
//                                 </CardHeader>
//                                 {expandedIndex === index && (
//                                     <CardContent className="pt-0 space-y-4">
//                                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                                             <div className="space-y-2">
//                                                 <Label htmlFor={`title-${experience.id}`}><Target className="h-4 w-4 inline mr-2" />Job Title *</Label>
//                                                 <Input id={`title-${experience.id}`} value={experience.title} onChange={(e) => updateExperience(index, 'title', e.target.value)} placeholder="Software Engineer" />
//                                             </div>
//                                             <div className="space-y-2">
//                                                 <Label htmlFor={`company-${experience.id}`}><Building className="h-4 w-4 inline mr-2" />Company *</Label>
//                                                 <Input id={`company-${experience.id}`} value={experience.company} onChange={(e) => updateExperience(index, 'company', e.target.value)} placeholder="TechCorp Inc." />
//                                             </div>
//                                             <div className="space-y-2">
//                                                 <Label htmlFor={`location-${experience.id}`}><MapPin className="h-4 w-4 inline mr-2" />Location</Label>
//                                                 <Input id={`location-${experience.id}`} value={experience.location} onChange={(e) => updateExperience(index, 'location', e.target.value)} placeholder="San Francisco, CA" />
//                                             </div>
//                                             <div className="space-y-2">
//                                                 <Label htmlFor={`period-${experience.id}`}><Calendar className="h-4 w-4 inline mr-2" />Period *</Label>
//                                                 <Input id={`period-${experience.id}`} value={experience.period} onChange={(e) => updateExperience(index, 'period', e.target.value)} placeholder="Jan 2023 - Present" />
//                                             </div>
//                                         </div>
//                                         <div className="space-y-3">
//                                             <div className="flex items-center justify-between">
//                                                 <Label><TrendingUp className="h-4 w-4 inline mr-2" />Key Achievements</Label>
//                                                 <Button variant="outline" size="sm" onClick={() => addAchievement(index)}><Plus className="h-4 w-4 mr-2" />Add Achievement</Button>
//                                             </div>
//                                             {experience.achievements.map((achievement, achIndex) => (
//                                                 <div key={achIndex} className="flex items-start gap-2">
//                                                     <Textarea value={achievement} onChange={(e) => updateAchievement(index, achIndex, e.target.value)} placeholder="e.g., Developed a new feature that increased user engagement by 30%" className="min-h-[80px]" />
//                                                     <div className="flex flex-col gap-1">
//                                                         <Button variant="outline" size="icon"><Sparkles className="h-4 w-4" /></Button>
//                                                         <Button variant="outline" size="icon" onClick={() => removeAchievement(index, achIndex)} className="text-red-600"><Trash2 className="h-4 w-4" /></Button>
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


import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Briefcase, Plus, Trash2, Save, X, Sparkles, Calendar, Building, MapPin, Target, Lightbulb, ArrowUp, ArrowDown, Copy, Loader2 } from 'lucide-react';

interface Experience {
    id: number;
    title: string;
    company: string;
    location: string;
    period: string;
    achievements: string[];
}

interface ExperienceEditorProps {
    data: Experience[];
    onUpdate: (data: Experience[]) => void;
    onClose: () => void;
    targetRole?: string;
}

export function ExperienceEditor({ data, onUpdate, onClose, targetRole }: ExperienceEditorProps) {
    const [experiences, setExperiences] = useState<Experience[]>(data);
    const [expandedIndex, setExpandedIndex] = useState<number | null>(0);
    const [optimizingIndex, setOptimizingIndex] = useState<string | null>(null);

    useEffect(() => {
        setExperiences(data);
    }, [data]);

    const addExperience = () => {
        const newExperience: Experience = { id: Date.now(), title: '', company: '', location: '', period: '', achievements: [''] };
        const updatedExperiences = [...experiences, newExperience];
        setExperiences(updatedExperiences);
        setExpandedIndex(experiences.length);
    };

    const removeExperience = (index: number) => {
        const updated = experiences.filter((_, i) => i !== index);
        setExperiences(updated);
        onUpdate(updated);
    };

    const updateExperience = <K extends keyof Experience>(index: number, field: K, value: Experience[K]) => {
        const updated = [...experiences];
        updated[index] = { ...updated[index], [field]: value };
        setExperiences(updated);
    };

    const addAchievement = (expIndex: number) => {
        const updated = [...experiences];
        updated[expIndex].achievements.push('');
        setExperiences(updated);
    };

    const updateAchievement = (expIndex: number, achIndex: number, value: string) => {
        const updated = [...experiences];
        updated[expIndex].achievements[achIndex] = value;
        setExperiences(updated);
    };

    const removeAchievement = (expIndex: number, achIndex: number) => {
        const updated = [...experiences];
        updated[expIndex].achievements = updated[expIndex].achievements.filter((_, i) => i !== achIndex);
        setExperiences(updated);
    };

    const moveExperience = (index: number, direction: 'up' | 'down') => {
        const updated = [...experiences];
        const newIndex = direction === 'up' ? index - 1 : index + 1;
        if (newIndex >= 0 && newIndex < updated.length) {
            [updated[index], updated[newIndex]] = [updated[newIndex], updated[index]];
            setExperiences(updated);
            setExpandedIndex(newIndex);
        }
    };

    const duplicateExperience = (index: number) => {
        const experience: Experience = { ...experiences[index], id: Date.now() };
        const updated = [...experiences];
        updated.splice(index + 1, 0, experience);
        setExperiences(updated);
    };

    const handleOptimizeAchievement = async (expIndex: number, achIndex: number) => {
        const achievementText = experiences[expIndex].achievements[achIndex];
        if (!achievementText.trim()) return;

        const currentIndex = `${expIndex}-${achIndex}`;
        setOptimizingIndex(currentIndex);

        try {
            const response = await fetch('/api/optimize-achievement', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ achievementText, targetRole: targetRole || 'Software Engineer' }),
            });
            if (!response.ok) throw new Error('Failed to get optimization from AI.');

            const result = await response.json();
            const updatedExperiences = [...experiences];
            updatedExperiences[expIndex].achievements[achIndex] = result.optimizedText;
            setExperiences(updatedExperiences);
            onUpdate(updatedExperiences); // Trigger parent save
        } catch (error) {
            console.error("Achievement optimization failed:", error);
        } finally {
            setOptimizingIndex(null);
        }
    };

    const handleSave = () => {
        const validExperiences = experiences.filter(exp => exp.title.trim() && exp.company.trim());
        onUpdate(validExperiences);
    };

    return (
        <Card>
            <CardHeader className="flex flex-col gap-5 items-center justify-between">
                <div className='flex flex-col items-center'>
                    <CardTitle className="flex items-center gap-2 text-sm">
                        <Briefcase className="h-5 w-5" />Professional Experience
                        <Badge variant="outline">{experiences.length} {experiences.length === 1 ? 'Position' : 'Positions'}</Badge>
                    </CardTitle>
                    <p className=" text-gray-600 mt-1 text-xs">Add and optimize your work experience with AI-powered suggestions.</p>
                </div>
                <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" onClick={addExperience}><Plus className="h-4 w-4 mr-2" />Add Experience</Button>
                    <Button size="sm" onClick={handleSave}><Save className="h-4 w-4 mr-2" />Save & Close</Button>
                </div>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-medium text-blue-900 mb-2 flex items-center gap-2"><Lightbulb className="h-4 w-4" />Experience Tips</h4>
                    <ul className="text-sm text-blue-800 space-y-1">
                        <li>Start each bullet point with a strong action verb (e.g., Developed, Managed, Led).</li>
                        <li>Quantify your achievements with numbers and percentages whenever possible.</li>
                        <li>Focus on your impact on the project or company, not just your daily tasks.</li>
                    </ul>
                </div>
                {experiences.length === 0 ? (
                    <div className="text-center py-12">
                        <Briefcase className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                        <h3 className="text-lg font-semibold text-gray-600 mb-2">No Experience Added</h3>
                        <p className="text-gray-500 mb-4">Add your first work experience to get started.</p>
                        <Button onClick={addExperience}><Plus className="h-4 w-4 mr-2" />Add Your First Experience</Button>
                    </div>
                ) : (
                    <div className="space-y-4">
                        {experiences.map((experience, index) => (
                            <Card key={experience.id} className={`border-2 transition-all ${expandedIndex === index ? 'border-blue-300 shadow-lg' : 'border-gray-200'}`}>
                                <CardHeader className="pb-3 cursor-pointer" onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <Briefcase className="h-4 w-4" />
                                            <div>
                                                <h4 className="font-semibold">{experience.title || `Position #${index + 1}`}</h4>
                                                <p className="text-sm text-gray-600">{experience.company}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Button variant="outline" size="icon" onClick={(e) => { e.stopPropagation(); moveExperience(index, 'up'); }} disabled={index === 0}><ArrowUp className="h-4 w-4" /></Button>
                                            <Button variant="outline" size="icon" onClick={(e) => { e.stopPropagation(); moveExperience(index, 'down'); }} disabled={index === experiences.length - 1}><ArrowDown className="h-4 w-4" /></Button>
                                            <Button variant="outline" size="icon" onClick={(e) => { e.stopPropagation(); duplicateExperience(index); }}><Copy className="h-4 w-4" /></Button>
                                            <Button variant="outline" size="icon" onClick={(e) => { e.stopPropagation(); removeExperience(index); }} className="text-red-600 hover:text-red-700"><Trash2 className="h-4 w-4" /></Button>
                                        </div>
                                    </div>
                                </CardHeader>
                                {expandedIndex === index && (
                                    <CardContent className="pt-0 space-y-4">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <Label htmlFor={`title-${experience.id}`}><Target className="h-4 w-4 inline mr-2" />Job Title *</Label>
                                                <Input id={`title-${experience.id}`} value={experience.title} onChange={(e) => updateExperience(index, 'title', e.target.value)} placeholder="Software Engineer" />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor={`company-${experience.id}`}><Building className="h-4 w-4 inline mr-2" />Company *</Label>
                                                <Input id={`company-${experience.id}`} value={experience.company} onChange={(e) => updateExperience(index, 'company', e.target.value)} placeholder="TechCorp Inc." />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor={`location-${experience.id}`}><MapPin className="h-4 w-4 inline mr-2" />Location</Label>
                                                <Input id={`location-${experience.id}`} value={experience.location} onChange={(e) => updateExperience(index, 'location', e.target.value)} placeholder="San Francisco, CA" />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor={`period-${experience.id}`}><Calendar className="h-4 w-4 inline mr-2" />Period *</Label>
                                                <Input id={`period-${experience.id}`} value={experience.period} onChange={(e) => updateExperience(index, 'period', e.target.value)} placeholder="Jan 2023 - Present" />
                                            </div>
                                        </div>
                                        <div className="space-y-3">
                                            <div className="flex items-center justify-between">
                                                <Label>Key Achievements</Label>
                                                <Button variant="outline" size="sm" onClick={() => addAchievement(index)}><Plus className="h-4 w-4 mr-2" />Add Achievement</Button>
                                            </div>
                                            {experience.achievements.map((achievement, achIndex) => (
                                                <div key={achIndex} className="flex items-start gap-2">
                                                    <Textarea value={achievement} onChange={(e) => updateAchievement(index, achIndex, e.target.value)} placeholder="e.g., Developed a new feature that increased user engagement by 30%" className="min-h-[80px]" />
                                                    <div className="flex flex-col gap-1">
                                                        <Button variant="outline" size="icon" onClick={() => handleOptimizeAchievement(index, achIndex)} disabled={optimizingIndex === `${index}-${achIndex}`}>
                                                            {optimizingIndex === `${index}-${achIndex}` ? <Loader2 className="h-4 w-4 animate-spin" /> : <Sparkles className="h-4 w-4" />}
                                                        </Button>
                                                        <Button variant="outline" size="icon" onClick={() => removeAchievement(index, achIndex)} className="text-red-600"><Trash2 className="h-4 w-4" /></Button>
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