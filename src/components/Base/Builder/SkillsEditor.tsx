
// import { useState, useEffect, KeyboardEvent } from 'react';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import { Badge } from '@/components/ui/badge';
// import { Award, Plus, X, Save, Sparkles, Code, Database, Cloud, Wrench, Target, Lightbulb, Search, Trash2, Loader2, type LucideIcon } from 'lucide-react';

// type SkillsData = { [category: string]: string[]; };
// interface SkillsEditorProps {
//     data: SkillsData;
//     fullResumeData: any; // The entire resume JSON object
//     targetRole?: string;
//     onUpdate: (data: SkillsData) => void;
//     onClose: () => void;
// }

// const categoryIcons: { [key: string]: LucideIcon } = {
//     "Languages & Frameworks": Code,
//     "Databases": Database,
//     "Cloud & DevOps": Cloud,
//     "Tools & Platforms": Wrench,
//     "Core Concepts & Methodologies": Target
// };

// export function SkillsEditor({ data, fullResumeData, targetRole, onUpdate, onClose }: SkillsEditorProps) {
//     const [skillsData, setSkillsData] = useState<SkillsData>(data);
//     const [isScanning, setIsScanning] = useState<boolean>(false);

//     useEffect(() => {
//         setSkillsData(data);
//     }, [data]);

//     const addSkillToCategory = (category: string, skill: string) => {
//         if (!skill.trim()) return;
//         setSkillsData(prev => {
//             const currentSkills = prev[category] || [];
//             if (currentSkills.includes(skill.trim())) return prev;
//             return { ...prev, [category]: [...currentSkills, skill.trim()] };
//         });
//     };

//     const removeSkillFromCategory = (category: string, skillIndex: number) => {
//         setSkillsData(prev => ({ ...prev, [category]: prev[category].filter((_, index) => index !== skillIndex) }));
//     };

//     const addNewCategory = (categoryName: string) => {
//         if (categoryName.trim() && !skillsData[categoryName]) {
//             setSkillsData(prev => ({ ...prev, [categoryName]: [] }));
//         }
//     };

//     const handleScanResume = async () => {
//         setIsScanning(true);
//         try {
//             const response = await fetch('/api/optimize-skills', {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify({ resumeJson: fullResumeData, targetRole: targetRole || 'Software Engineer' })
//             });
//             if (!response.ok) throw new Error('Failed to scan resume for skills.');

//             const result = await response.json();
//             if (result.optimizedSkills) {
//                 setSkillsData(result.optimizedSkills);
//             }
//         } catch (error) {
//             console.error("Skill scanning failed:", error);
//         } finally {
//             setIsScanning(false);
//         }
//     };

//     const handleSave = () => {
//         onUpdate(skillsData);
//         onClose();
//     };

//     const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>, callback: (value: string) => void) => {
//         if (e.key === 'Enter') {
//             const target = e.target as HTMLInputElement;
//             callback(target.value);
//             target.value = '';
//             e.preventDefault();
//         }
//     };

//     const totalSkills = Object.values(skillsData).reduce((total, skills) => total + skills.length, 0);

//     return (
//         <Card>
//             <CardHeader className="flex flex-col gap-2.5 items-center justify-between">
//                 <div className='flex flex-col items-center'>
//                     <CardTitle className="flex items-center gap-2">
//                         <Award className="h-5 w-5" />
//                         Technical Skills
//                         <Badge variant="outline">{totalSkills} Skills</Badge>
//                     </CardTitle>
//                     <p className="text-sm text-gray-600 mt-1">Categorize your skills and let AI find what's missing.</p>
//                 </div>
//                 <div className="flex items-center gap-2">
//                     <Button variant="outline" size="sm" onClick={handleScanResume} disabled={isScanning}>
//                         {isScanning ? <Loader2 className="h-4 w-4 mr-2 animate-spin" /> : <Sparkles className="h-4 w-4 mr-2" />}
//                         {isScanning ? 'Scanning...' : 'AI Scan Resume'}
//                     </Button>
//                     <Button size="sm" onClick={handleSave}><Save className="h-4 w-4 mr-2" />Save & Close</Button>
//                 </div>
//             </CardHeader>
//             <CardContent className="space-y-4">
//                 {Object.keys(skillsData).length === 0 ? (
//                     <div className="text-center py-12">
//                         <Award className="h-12 w-12 text-gray-400 mx-auto mb-4" />
//                         <h3 className="text-lg font-semibold text-gray-600 mb-2">No Skills Added Yet</h3>
//                         <p className="text-gray-500 mb-4">Click "AI Scan Resume" to automatically find skills from your experience.</p>
//                     </div>
//                 ) : (
//                     Object.entries(skillsData).map(([category, skills]) => {
//                         const Icon = categoryIcons[category] || Award;
//                         return (
//                             <Card key={category} className="border border-gray-200">
//                                 <CardHeader className="py-2 px-4">
//                                     <div className="flex items-center gap-2">
//                                         <Icon className="h-4 w-4 text-blue-600" />
//                                         <h4 className="font-semibold">{category}</h4>
//                                         <Badge variant="secondary" className="text-xs">{skills.length}</Badge>
//                                     </div>
//                                 </CardHeader>
//                                 <CardContent className="p-4">
//                                     <div className="flex flex-wrap gap-2 mb-3">
//                                         {skills.map((skill, index) => (
//                                             <Badge key={index} variant="outline" className="bg-blue-50 text-blue-700 border-blue-200 group cursor-pointer hover:bg-blue-100">
//                                                 <span>{skill}</span>
//                                                 <X className="h-3 w-3 ml-2 opacity-0 group-hover:opacity-100" onClick={() => removeSkillFromCategory(category, index)} />
//                                             </Badge>
//                                         ))}
//                                     </div>
//                                     <Input placeholder="Add skill and press Enter..." className="h-8 text-sm" onKeyPress={(e) => handleKeyPress(e, (value) => addSkillToCategory(category, value))} />
//                                 </CardContent>
//                             </Card>
//                         );
//                     })
//                 )}
//                 <Card className="border-dashed border-2 border-gray-300">
//                     <CardContent className="p-4">
//                         <Input placeholder="Create new category and press Enter..." className="h-8 text-sm" onKeyPress={(e) => handleKeyPress(e, addNewCategory)} />
//                     </CardContent>
//                 </Card>
//             </CardContent>
//         </Card>
//     );
// }


import { useState, useEffect, KeyboardEvent } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Award, Plus, X, Save, Sparkles, Code, Database, Cloud, Wrench, Target, Search, Trash2, Loader2, type LucideIcon } from 'lucide-react';

type SkillsData = { [category: string]: string[]; };
interface SkillsEditorProps {
    data: SkillsData;
    fullResumeData: any;
    targetRole?: string;
    onUpdate: (data: SkillsData) => void;
    onClose: () => void;
}

const categoryIcons: { [key: string]: LucideIcon } = {
    "Languages & Frameworks": Code,
    "Databases": Database,
    "Cloud & DevOps": Cloud,
    "Tools & Platforms": Wrench,
    "Core Concepts & Methodologies": Target
};

const skillSuggestions: SkillsData = {
    "Languages": ["JavaScript", "TypeScript", "Python", "Java", "React.js", "Node.js", "Next.js", "Vue.js", "Angular", "Express.js", "Django", "Spring Boot"],
    "Databases": ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Elasticsearch", "DynamoDB", "SQLite"],
    "Cloud": ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Jenkins", "GitLab CI", "GitHub Actions", "Terraform", "Ansible"],
    "Tools": ["Git", "Postman", "VS Code", "IntelliJ", "Jira", "Selenium", "Jest", "Cypress", "Webpack"],
    "Core Concepts": ["REST APIs", "GraphQL", "Microservices", "Agile", "Scrum", "TDD", "System Design", "Data Structures", "Algorithms"]
};

export function SkillsEditor({ data, fullResumeData, targetRole, onUpdate, onClose }: SkillsEditorProps) {
    const [skillsData, setSkillsData] = useState<SkillsData>(data);
    const [isScanning, setIsScanning] = useState<boolean>(false);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [selectedCategory, setSelectedCategory] = useState<string>('Languages & Frameworks');

    useEffect(() => {
        setSkillsData(data);
    }, [data]);

    const addSkillToCategory = (category: string, skill: string) => {
        if (!skill.trim()) return;
        setSkillsData(prev => {
            const currentSkills = prev[category] || [];
            if (currentSkills.map(s => s.toLowerCase()).includes(skill.trim().toLowerCase())) return prev;
            return { ...prev, [category]: [...currentSkills, skill.trim()] };
        });
    };

    const removeSkillFromCategory = (category: string, skillIndex: number) => {
        setSkillsData(prev => ({ ...prev, [category]: prev[category].filter((_, index) => index !== skillIndex) }));
    };

    const addNewCategory = (categoryName: string) => {
        if (categoryName.trim() && !skillsData[categoryName]) {
            setSkillsData(prev => ({ ...prev, [categoryName]: [] }));
            setSelectedCategory(categoryName.trim());
        }
    };

    const removeCategory = (category: string) => {
        setSkillsData(prev => {
            const updated = { ...prev };
            delete updated[category];
            if (selectedCategory === category) {
                setSelectedCategory(Object.keys(skillSuggestions)[0]);
            }
            return updated;
        });
    };

    const handleScanResume = async () => {
        setIsScanning(true);
        try {
            const response = await fetch('/api/optimize-skills', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ resumeJson: fullResumeData, targetRole: targetRole || 'Software Engineer' })
            });
            if (!response.ok) throw new Error('Failed to scan resume for skills.');

            const result = await response.json();
            if (result.optimizedSkills) {
                setSkillsData(result.optimizedSkills);
            }
        } catch (error) {
            console.error("Skill scanning failed:", error);
        } finally {
            setIsScanning(false);
        }
    };

    const handleSave = () => {
        const cleanedData = Object.fromEntries(Object.entries(skillsData).filter(([, skills]) => skills.length > 0));
        onUpdate(cleanedData);
    };

    const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>, callback: (value: string) => void) => {
        if (e.key === 'Enter') {
            const target = e.target as HTMLInputElement;
            callback(target.value);
            target.value = '';
            e.preventDefault();
        }
    };

    const totalSkills = Object.values(skillsData).flat().length;

    const filteredSuggestions = skillSuggestions[selectedCategory]
        ?.filter(skill =>
            skill.toLowerCase().includes(searchTerm.toLowerCase()) &&
            !(skillsData[selectedCategory]?.map(s => s.toLowerCase()).includes(skill.toLowerCase()))
        ) || [];

    return (
        <Card>
            <CardHeader className="flex flex-col items-center justify-between">
                <div className="flex flex-col items-center">
                    <CardTitle className="flex items-center gap-2"><Award className="h-5 w-5" />Technical Skills<Badge variant="outline">{totalSkills} Skills</Badge></CardTitle>
                    <p className="text-sm text-gray-600 mt-1">Categorize skills and use AI to find what's missing.</p>
                </div>
                <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" onClick={handleScanResume} disabled={isScanning}>
                        {isScanning ? <Loader2 className="h-4 w-4 mr-2 animate-spin" /> : <Sparkles className="h-4 w-4 mr-2" />}
                        {isScanning ? 'Scanning...' : 'AI Scan Resume'}
                    </Button>
                    <Button size="sm" onClick={handleSave}><Save className="h-4 w-4 mr-2" />Save</Button>
                </div>
            </CardHeader>
            <CardContent className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-4">
                    {Object.keys(skillsData).map((category) => {
                        const Icon = categoryIcons[category] || Award; // No change here, this is correct
                        return (
                            <div key={category}>
                                <div className="flex items-center justify-between mb-2">
                                    <div className="flex items-center gap-2"><Icon className="h-4 w-4 text-blue-600" /><h4 className="font-semibold">{category}</h4><Badge variant="secondary" className="text-xs">{skillsData[category].length}</Badge></div>
                                    {!Object.keys(categoryIcons).includes(category) && (
                                        <Button variant="ghost" size="icon" onClick={() => removeCategory(category)} className="h-6 w-6 text-red-500"><Trash2 className="h-4 w-4" /></Button>
                                    )}
                                </div>
                                <div className="p-4 border rounded-lg">
                                    <div className="flex flex-wrap gap-2 mb-3 min-h-[24px]">
                                        {skillsData[category].map((skill, index) => (
                                            <Badge key={index} variant="outline" className="bg-blue-50 text-blue-700 border-blue-200 group cursor-pointer hover:bg-blue-100">
                                                <span>{skill}</span><X className="h-3 w-3 ml-2 opacity-0 group-hover:opacity-100" onClick={() => removeSkillFromCategory(category, index)} />
                                            </Badge>
                                        ))}
                                    </div>
                                    <Input placeholder="Add skill and press Enter..." className="h-8 text-sm" onKeyPress={(e) => handleKeyPress(e, (value) => addSkillToCategory(category, value))} />
                                </div>
                            </div>
                        );
                    })}
                    <div className="p-4 border-2 border-dashed rounded-lg">
                        <Input placeholder="Create new category and press Enter..." className="h-8 text-sm" onKeyPress={(e) => handleKeyPress(e, addNewCategory)} />
                    </div>
                </div>

                <div className="space-y-4">
                    <Card>
                        <CardHeader className="pb-3"><CardTitle className="text-base">Skill Suggestions</CardTitle></CardHeader>
                        <CardContent className="space-y-4">
                            <div>
                                <Label className="text-xs font-semibold">Category</Label>
                                <div className="flex flex-wrap z-50 gap-1 mt-1">
                                    {Object.keys(skillSuggestions).map((category) => {
                                        // Assign the icon component to a capitalized variable
                                        const IconComponent = categoryIcons[category] || Award;
                                        return (
                                            <Button key={category} variant={selectedCategory === category ? "secondary" : "ghost"} size="sm" className="justify-start h-8 text-xs" onClick={() => setSelectedCategory(category)}>
                                                {/* Render the capitalized variable */}
                                                <IconComponent className="h-3 w-3 mr-2" />
                                                {category}
                                            </Button>
                                        );
                                    })}
                                </div>
                            </div>
                            <div>
                                <Label className="text-xs font-semibold">Search Suggestions</Label>
                                <div className="relative mt-1">
                                    <Search className="h-4 w-4 absolute left-2 top-1/2 -translate-y-1/2 text-gray-400" />
                                    <Input placeholder="Search skills..." className="pl-8 h-8 text-sm" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                                </div>
                            </div>
                            <div className="max-h-64 overflow-y-auto space-y-1 pr-2">
                                {filteredSuggestions.map((skill) => (
                                    <div key={skill} className="flex items-center justify-between p-2 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer" onClick={() => addSkillToCategory(selectedCategory, skill)}>
                                        <span className="text-sm">{skill}</span>
                                        <Plus className="h-4 w-4 text-gray-400" />
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </CardContent>
        </Card>
    );
}
