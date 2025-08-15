
// // // // src/app/(builder)/builder/[id]/BuilderClient.tsx

// // // "use client";

// // // import React, { useState, useEffect, FC } from 'react';
// // // import { Prisma } from '@prisma/client';
// // // import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// // // import { Badge } from '@/components/ui/badge';
// // // import { Button } from '@/components/ui/button';
// // // import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
// // // import { Edit, BarChart3, Sparkles, Save, Download, RefreshCw, Target, Zap, TrendingUp, Star, User, Briefcase, GraduationCap, Award, FileText, Lock, Unlock, ChevronRight, ChevronLeft, type LucideIcon, LayoutDashboard, File } from 'lucide-react';
// // // import { PersonalInfoEditor } from '@/components/Base/Builder/PersonalInfoEditor';
// // // import { SummaryEditor } from '@/components/Base/Builder/SummaryEditor';
// // // import { ExperienceEditor } from '@/components/Base/Builder/ExperienceEditor';
// // // import { SkillsEditor } from '@/components/Base/Builder/SkillsEditor';
// // // import { EducationEditor } from '@/components/Base/Builder/EducationEditor';
// // // import { ProjectsEditor } from '@/components/Base/Builder/ProjectsEditor';
// // // import { ResumePreview } from '@/components/Base/Builder/ResumePreview';
// // // import { WorkbenchSidebar } from '@/components/Base/Builder/WorkbenchSidebar';
// // // import { TemplateSelection } from '@/components/Base/templates/Templates';
// // // import { DownloadButton } from '@/components/Base/Builder/DownloadButton';
// // // import Section from '@/components/Base/Section';
// // // import { useRouter } from 'next/navigation';
// // // import {
// // //     OptimizationPanel,
// // //     ResumeData as OptResumeData,
// // //     KeywordAnalysis,
// // //     AtsAnalysis,
// // //     CompetitorAnalysis,
// // //     OptimizationResults,
// // // } from '@/components/Base/Builder/OptimizationPanel';

// // // const defaultResumeData = {
// // //     personalInfo: { name: "", title: "", email: "", phone: "", location: "", website: "", github: "" },
// // //     summary: "",
// // //     experience: [],
// // //     projects: [],
// // //     skills: {},
// // //     education: []
// // // };

// // // type ResumeData = typeof defaultResumeData;
// // // interface Job { id?: string; optimizedJson?: Prisma.JsonValue; targetRole?: string; selectedTemplate?: string; }
// // // interface BuilderClientProps { job: Job; }
// // // interface OptimizationStat { label: string; value: string; change: string; icon: LucideIcon; color: string; bgColor: string; }
// // // type EditableSection = 'personalInfo' | 'summary' | 'experience' | 'projects' | 'skills' | 'education';
// // // type ActiveTab = 'editor' | 'analysis' | 'templates';

// // // export function BuilderClient({ job: initialJob }: BuilderClientProps) {
// // //     const router = useRouter();
// // //     const [job, setJob] = useState(initialJob);
// // //     const [resumeData, setResumeData] = useState<ResumeData>(() => job?.optimizedJson ? job.optimizedJson as ResumeData : defaultResumeData);
// // //     const [activeTab, setActiveTab] = useState<ActiveTab>('editor');
// // //     const [editingSection, setEditingSection] = useState<EditableSection>('personalInfo');
// // //     const [selectedTemplate, setSelectedTemplate] = useState<string>(initialJob?.selectedTemplate || 'classic');
// // //     const [hasUnsavedChanges, setHasUnsavedChanges] = useState<boolean>(false);
// // //     const [isAutoSave, setIsAutoSave] = useState<boolean>(true);
// // //     const [isSidebarCollapsed, setIsSidebarCollapsed] = useState<boolean>(true);

// // //     // Analysis states
// // //     const [isAnalysisLoading, setIsAnalysisLoading] = useState(false);
// // //     const [keywordAnalysis, setKeywordAnalysis] = useState<KeywordAnalysis | null>(null);
// // //     const [atsAnalysis, setAtsAnalysis] = useState<AtsAnalysis | null>(null);
// // //     const [marketAnalysis, setMarketAnalysis] = useState<CompetitorAnalysis | null>(null);
// // //     const [isOptimizing, setIsOptimizing] = useState<boolean>(false);
// // //     const [optimizationResults, setOptimizationResults] = useState<OptimizationResults | null>(null);

// // //     const jobRoles = ['Software Engineer', 'Frontend Developer', 'Backend Developer', 'DevOps Engineer', 'Data Scientist', 'Product Manager'];

// // //     // Dynamic optimization stats based on analysis
// // //     const optimizationStats: OptimizationStat[] = [
// // //         {
// // //             label: "ATS Score",
// // //             value: atsAnalysis ? `${atsAnalysis.score}%` : "...",
// // //             change: atsAnalysis ? (atsAnalysis.score > 80 ? "+High" : atsAnalysis.score > 60 ? "+Med" : "+Low") : "...",
// // //             icon: Target,
// // //             color: "text-green-600",
// // //             bgColor: "bg-green-50"
// // //         },
// // //         {
// // //             label: "Keywords",
// // //             value: keywordAnalysis ? `${keywordAnalysis.present.length}` : "...",
// // //             change: keywordAnalysis ? `${keywordAnalysis.missing.length} missing` : "...",
// // //             icon: Zap,
// // //             color: "text-blue-600",
// // //             bgColor: "bg-blue-50"
// // //         },
// // //         {
// // //             label: "Impact",
// // //             value: resumeData.experience?.filter(exp => exp.achievements?.some(ach => /\d/.test(ach || ''))).length.toString() || "0",
// // //             change: "+Quantified",
// // //             icon: TrendingUp,
// // //             color: "text-purple-600",
// // //             bgColor: "bg-purple-50"
// // //         },
// // //         {
// // //             label: "Rating",
// // //             value: atsAnalysis ? (atsAnalysis.score > 90 ? "A+" : atsAnalysis.score > 80 ? "A" : atsAnalysis.score > 70 ? "B+" : "B") : "...",
// // //             change: "Good",
// // //             icon: Star,
// // //             color: "text-yellow-600",
// // //             bgColor: "bg-yellow-50"
// // //         }
// // //     ];

// // //     useEffect(() => {
// // //         if (job?.optimizedJson) setResumeData(job.optimizedJson as ResumeData);
// // //         if (job?.selectedTemplate && job.selectedTemplate !== selectedTemplate) setSelectedTemplate(job.selectedTemplate);
// // //     }, [job]);

// // //     // Fetch analysis data whenever resume data or target role changes
// // //     useEffect(() => {
// // //         const fetchAnalysisData = async () => {
// // //             if (!job?.targetRole || !resumeData) return;

// // //             setIsAnalysisLoading(true);
// // //             try {
// // //                 const response = await fetch('/api/analysis', {
// // //                     method: 'POST',
// // //                     headers: { 'Content-Type': 'application/json' },
// // //                     body: JSON.stringify({
// // //                         resumeData,
// // //                         targetRole: job.targetRole
// // //                     })
// // //                 });

// // //                 if (response.ok) {
// // //                     const data = await response.json();
// // //                     setKeywordAnalysis(data.keywordAnalysis);
// // //                     setAtsAnalysis(data.atsAnalysis);
// // //                     setMarketAnalysis(data.competitorAnalysis);
// // //                 } else {
// // //                     console.error('Failed to fetch analysis data');
// // //                 }
// // //             } catch (error) {
// // //                 console.error('Error fetching analysis data:', error);
// // //             } finally {
// // //                 setIsAnalysisLoading(false);
// // //             }
// // //         };

// // //         // Debounce the analysis fetch to avoid too many API calls
// // //         const timeoutId = setTimeout(fetchAnalysisData, 1000);
// // //         return () => clearTimeout(timeoutId);
// // //     }, [job?.targetRole, resumeData, activeTab]);

// // //     const handleDataUpdate = async (newResumeDataState: ResumeData) => {
// // //         if (!job?.id) return;
// // //         setHasUnsavedChanges(true);
// // //         try {
// // //             const res = await fetch(`/api/jobs/${job.id}`, {
// // //                 method: 'PATCH',
// // //                 headers: { 'Content-Type': 'application/json' },
// // //                 body: JSON.stringify({ optimizedJson: newResumeDataState })
// // //             });
// // //             if (!res.ok) throw new Error('Failed to save updated data');
// // //             setJob(await res.json());
// // //             setHasUnsavedChanges(false);
// // //         } catch (error) {
// // //             console.error('Error saving updated resume:', error);
// // //         }
// // //     };

// // //     const updateResumeData = <K extends keyof ResumeData>(section: K, data: ResumeData[K]) => {
// // //         const newResumeData = { ...resumeData, [section]: data };
// // //         setResumeData(newResumeData);
// // //         if (isAutoSave) handleDataUpdate(newResumeData);
// // //         else setHasUnsavedChanges(true);
// // //     };

// // //     const handleTemplateChange = (newTemplateKey: string) => {
// // //         setSelectedTemplate(newTemplateKey);
// // //         setJob(prev => ({ ...prev, selectedTemplate: newTemplateKey }));
// // //     };

// // //     const saveChanges = () => handleDataUpdate(resumeData);

// // //     const handleOptimizeResume = async () => {
// // //         setIsOptimizing(true);
// // //         setOptimizationResults(null);

// // //         try {
// // //             const response = await fetch('/api/analysis-optimise', {
// // //                 method: 'POST',
// // //                 headers: { 'Content-Type': 'application/json' },
// // //                 body: JSON.stringify({
// // //                     resumeData,
// // //                     targetRole: job?.targetRole
// // //                 })
// // //             });

// // //             if (response.ok) {
// // //                 const results = await response.json();
// // //                 setOptimizationResults(results);
// // //                 setActiveTab('analysis');
// // //             } else {
// // //                 throw new Error('Optimization failed');
// // //             }
// // //         } catch (error) {
// // //             console.error('Error optimizing resume:', error);
// // //             // Fallback to mock data for demo
// // //             await new Promise(resolve => setTimeout(resolve, 3000));
// // //             const results: OptimizationResults = {
// // //                 summary: {
// // //                     before: resumeData.summary || '',
// // //                     after: `AI-optimized summary for a high-performing engineer...`,
// // //                     improvements: ['Added metrics', 'Improved clarity']
// // //                 },
// // //                 experience: {
// // //                     optimized: resumeData.experience?.map(exp => ({
// // //                         ...exp,
// // //                         achievements: exp.achievements?.map(ach => `${ach}, boosting performance by 25%.`)
// // //                     })) || [],
// // //                     improvements: ['Added quantified results']
// // //                 },
// // //                 keywords: {
// // //                     added: ['microservices', 'cloud architecture', 'CI/CD'],
// // //                     score: 92
// // //                 },
// // //                 overallScore: 92
// // //             };
// // //             setOptimizationResults(results);
// // //             setActiveTab('analysis');
// // //         } finally {
// // //             setIsOptimizing(false);
// // //         }
// // //     };

// // //     const handleTargetRoleChange = async (newRole: string) => {
// // //         const updatedJob = { ...job, targetRole: newRole };
// // //         setJob(updatedJob);

// // //         // Update job in database
// // //         if (job?.id) {
// // //             try {
// // //                 await fetch(`/api/jobs/${job.id}`, {
// // //                     method: 'PATCH',
// // //                     headers: { 'Content-Type': 'application/json' },
// // //                     body: JSON.stringify({ targetRole: newRole })
// // //                 });
// // //             } catch (error) {
// // //                 console.error('Error updating target role:', error);
// // //             }
// // //         }
// // //     };

// // //     const sectionIcons: { [key in EditableSection]: LucideIcon } = {
// // //         personalInfo: User,
// // //         summary: FileText,
// // //         experience: Briefcase,
// // //         projects: Star,
// // //         skills: Award,
// // //         education: GraduationCap
// // //     };

// // //     const sectionTitles: { [key in EditableSection]: string } = {
// // //         personalInfo: 'Personal Information',
// // //         summary: 'Professional Summary',
// // //         experience: 'Work Experience',
// // //         projects: 'Projects',
// // //         skills: 'Skills & Technologies',
// // //         education: 'Education'
// // //     };

// // //     const renderSectionEditor = () => {
// // //         switch (editingSection) {
// // //             case 'personalInfo': return <PersonalInfoEditor data={resumeData.personalInfo} onUpdate={(data) => updateResumeData('personalInfo', data)} />;
// // //             case 'summary': return <SummaryEditor data={resumeData.summary} onUpdate={(data) => updateResumeData('summary', data)} targetRole={job?.targetRole} />;
// // //             case 'experience': return <ExperienceEditor data={resumeData.experience} onUpdate={(data) => updateResumeData('experience', data)} targetRole={job?.targetRole} />;
// // //             case 'projects': return <ProjectsEditor data={resumeData.projects} onUpdate={(data) => updateResumeData('projects', data)} targetRole={job?.targetRole} />;
// // //             case 'skills': return <SkillsEditor data={resumeData.skills} onUpdate={(data) => updateResumeData('skills', data)} fullResumeData={resumeData} targetRole={job?.targetRole} />;
// // //             case 'education': return <EducationEditor data={resumeData.education} onUpdate={(data) => updateResumeData('education', data)} />;
// // //             default: return null;
// // //         }
// // //     };

// // //     return (
// // //         <Section>
// // //             <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as ActiveTab)} className="w-full">
// // //                 <div className="relative z-10 border-b bg-white">
// // //                     <div className="max-w-full mx-auto px-4 py-4">
// // //                         <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
// // //                             <div className="flex items-center gap-4">
// // //                                 <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
// // //                                     <Sparkles className="h-6 w-6 text-blue-600" />
// // //                                     Resume Workbench
// // //                                 </h1>
// // //                                 <div className="flex items-center gap-2 mt-1">
// // //                                     <Badge variant={hasUnsavedChanges ? "destructive" : "secondary"}>
// // //                                         {hasUnsavedChanges ? "Unsaved Changes" : "All Saved"}
// // //                                     </Badge>
// // //                                     <Badge variant="outline" className="flex items-center gap-1">
// // //                                         {isAutoSave ? <Unlock className="h-3 w-3" /> : <Lock className="h-3 w-3" />}
// // //                                         Auto-save {isAutoSave ? 'ON' : 'OFF'}
// // //                                     </Badge>
// // //                                     {job?.optimizedJson && (
// // //                                         <Badge variant="outline" className="flex items-center gap-1">
// // //                                             <Sparkles className="h-3 w-3" />AI Optimized
// // //                                         </Badge>
// // //                                     )}
// // //                                 </div>
// // //                             </div>
// // //                             <div className="flex items-center gap-2">
// // //                                 <Button variant="outline" size="sm" onClick={() => setIsAutoSave(!isAutoSave)}>
// // //                                     <Lock className="h-4 w-4 mr-2" />Auto-save
// // //                                 </Button>
// // //                                 <Button variant="outline" size="sm" onClick={saveChanges} disabled={!hasUnsavedChanges}>
// // //                                     <Save className="h-4 w-4 mr-2" />Save
// // //                                 </Button>
// // //                                 <DownloadButton resumeData={resumeData as any} templateKey={selectedTemplate} />
// // //                                 <Button variant="default" size="sm" onClick={() => router.push('/dashboard')}>
// // //                                     <LayoutDashboard className="h-4 w-4 mr-2" />Dashboard
// // //                                 </Button>
// // //                             </div>
// // //                         </div>
// // //                         <div className="mt-4">
// // //                             <TabsList className="grid w-full grid-cols-3 bg-white shadow-sm border max-w-md">
// // //                                 <TabsTrigger value="editor" className="flex items-center gap-2">
// // //                                     <Edit className="h-4 w-4" />Editor
// // //                                 </TabsTrigger>
// // //                                 <TabsTrigger value="analysis" className="flex items-center gap-2">
// // //                                     <BarChart3 className="h-4 w-4" />Analysis
// // //                                 </TabsTrigger>
// // //                                 <TabsTrigger value="templates" className="flex items-center gap-2">
// // //                                     <File className="h-4 w-4" />Templates
// // //                                 </TabsTrigger>
// // //                             </TabsList>
// // //                         </div>
// // //                     </div>
// // //                 </div>

// // //                 <div className="py-6">
// // //                     <TabsContent value="editor" className="mt-0">
// // //                         <div className="grid grid-cols-12 gap-6 relative px-4">
// // //                             <div className={`transition-all duration-300 ease-in-out ${isSidebarCollapsed ? 'col-span-2' : 'col-span-2'}`}>
// // //                                 <Card>
// // //                                     <CardHeader className="pb-3 flex flex-row items-center justify-between space-y-0">
// // //                                         <CardTitle className="text-sm font-semibold uppercase">Sections</CardTitle>
// // //                                         <Button
// // //                                             variant="ghost"
// // //                                             size="sm"
// // //                                             onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
// // //                                             className="p-1 h-6 w-6"
// // //                                         >
// // //                                             <ChevronLeft className="h-3 w-3" />
// // //                                         </Button>
// // //                                     </CardHeader>
// // //                                     <CardContent className="p-0">
// // //                                         <nav className="space-y-1">
// // //                                             {(Object.keys(sectionIcons) as EditableSection[]).map((section) => {
// // //                                                 const IconComponent = sectionIcons[section];
// // //                                                 return (
// // //                                                     <button
// // //                                                         key={section}
// // //                                                         onClick={() => setEditingSection(section)}
// // //                                                         className={`w-full flex items-center gap-3 px-4 py-3 text-left text-sm font-medium transition-all ${editingSection === section
// // //                                                                 ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-500'
// // //                                                                 : 'text-gray-600 border-transparent hover:text-gray-900'
// // //                                                             }`}
// // //                                                     >
// // //                                                         <IconComponent className={`h-4 w-4 ${editingSection === section ? 'text-blue-600' : 'text-gray-400'
// // //                                                             }`} />
// // //                                                         {sectionTitles[section]}
// // //                                                     </button>
// // //                                                 );
// // //                                             })}
// // //                                         </nav>
// // //                                     </CardContent>
// // //                                 </Card>
// // //                             </div>
// // //                             <div className="col-span-5">{renderSectionEditor()}</div>
// // //                             <div className="col-span-5">
// // //                                 <ResumePreview
// // //                                     resumeData={resumeData as any}
// // //                                     onEditSection={(section) => setEditingSection(section as EditableSection)}
// // //                                     selectedTemplate={selectedTemplate}
// // //                                 />
// // //                             </div>
// // //                         </div>
// // //                     </TabsContent>

// // //                     <TabsContent value="analysis" className="mt-0">
// // //                         <div className="grid gap-6 grid-cols-1 lg:grid-cols-4 px-4">
// // //                             <div className="lg:col-span-3">
// // //                                 <OptimizationPanel
// // //                                     resumeData={resumeData as OptResumeData}
// // //                                     onUpdate={updateResumeData}
// // //                                     optimizationStats={optimizationStats}
// // //                                     targetRole={job?.targetRole || 'Software Engineer'}
// // //                                     jobRoles={jobRoles}
// // //                                     onTargetRoleChange={handleTargetRoleChange}
// // //                                     keywordAnalysis={isAnalysisLoading ? null : keywordAnalysis}
// // //                                     atsAnalysis={isAnalysisLoading ? null : atsAnalysis}
// // //                                     marketAnalysis={isAnalysisLoading ? null : marketAnalysis}
// // //                                     isOptimizing={isOptimizing}
// // //                                     optimizationResults={optimizationResults}
// // //                                     onOptimize={handleOptimizeResume}
// // //                                 />
// // //                             </div>
// // //                             <div className="lg:col-span-1">
// // //                                 <WorkbenchSidebar
// // //                                     resumeData={resumeData as any}
// // //                                     onEditSection={(section) => {
// // //                                         setEditingSection(section as EditableSection);
// // //                                         setActiveTab('editor');
// // //                                     }}
// // //                                     optimizationStats={optimizationStats}
// // //                                     atsAnalysis={isAnalysisLoading ? null : atsAnalysis}
// // //                                     keywordAnalysis={isAnalysisLoading ? null : keywordAnalysis}
// // //                                 />
// // //                             </div>
// // //                         </div>
// // //                     </TabsContent>

// // //                     <TabsContent value="templates" className="mt-0">
// // //                         {resumeData && job.id && (
// // //                             <TemplateSelection
// // //                                 jobId={job.id}
// // //                                 resumeData={resumeData as any}
// // //                                 currentTemplate={selectedTemplate}
// // //                                 onTemplateChange={handleTemplateChange}
// // //                             />
// // //                         )}
// // //                     </TabsContent>
// // //                 </div>
// // //             </Tabs>

// // //             {hasUnsavedChanges && !isAutoSave && (
// // //                 <div className="fixed bottom-4 right-4 z-50">
// // //                     <Card className="bg-yellow-50 border-yellow-200">
// // //                         <CardContent className="p-4 flex items-center gap-3">
// // //                             <RefreshCw className="h-4 w-4 text-yellow-600" />
// // //                             You have unsaved changes
// // //                             <Button size="sm" onClick={saveChanges}>Save Now</Button>
// // //                         </CardContent>
// // //                     </Card>
// // //                 </div>
// // //             )}
// // //         </Section>
// // //     );
// // // }

// // // src/app/(builder)/builder/[id]/BuilderClient.tsx

// // "use client";

// //     // Add imports for useRef
// // import React, { useState, useEffect, FC, useCallback, useRef } from 'react';
// // import { Prisma } from '@prisma/client';
// // import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// // import { Badge } from '@/components/ui/badge';
// // import { Button } from '@/components/ui/button';
// // import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
// // import { Edit, BarChart3, Sparkles, Save, Download, RefreshCw, Target, Zap, TrendingUp, Star, User, Briefcase, GraduationCap, Award, FileText, Lock, Unlock, ChevronRight, ChevronLeft, type LucideIcon, LayoutDashboard, File } from 'lucide-react';
// // import { PersonalInfoEditor } from '@/components/Base/Builder/PersonalInfoEditor';
// // import { SummaryEditor } from '@/components/Base/Builder/SummaryEditor';
// // import { ExperienceEditor } from '@/components/Base/Builder/ExperienceEditor';
// // import { SkillsEditor } from '@/components/Base/Builder/SkillsEditor';
// // import { EducationEditor } from '@/components/Base/Builder/EducationEditor';
// // import { ProjectsEditor } from '@/components/Base/Builder/ProjectsEditor';
// // import { ResumePreview } from '@/components/Base/Builder/ResumePreview';
// // import { WorkbenchSidebar } from '@/components/Base/Builder/WorkbenchSidebar';
// // import { TemplateSelection } from '@/components/Base/templates/Templates';
// // import { DownloadButton } from '@/components/Base/Builder/DownloadButton';
// // import Section from '@/components/Base/Section';
// // import { useRouter } from 'next/navigation';
// // import {
// //     OptimizationPanel,
// //     ResumeData as OptResumeData,
// //     KeywordAnalysis,
// //     AtsAnalysis,
// //     CompetitorAnalysis,
// //     OptimizationResults,
// // } from '@/components/Base/Builder/OptimizationPanel';

// // const defaultResumeData = {
// //     personalInfo: { name: "", title: "", email: "", phone: "", location: "", website: "", github: "" },
// //     summary: "",
// //     experience: [],
// //     projects: [],
// //     skills: {},
// //     education: []
// // };

// // type ResumeData = typeof defaultResumeData;
// // interface Job { id?: string; optimizedJson?: Prisma.JsonValue; targetRole?: string; selectedTemplate?: string; }
// // interface BuilderClientProps { job: Job; }
// // interface OptimizationStat { label: string; value: string; change: string; icon: LucideIcon; color: string; bgColor: string; }
// // type EditableSection = 'personalInfo' | 'summary' | 'experience' | 'projects' | 'skills' | 'education';
// // type ActiveTab = 'editor' | 'analysis' | 'templates';

// // export function BuilderClient({ job: initialJob }: BuilderClientProps) {
// //     const router = useRouter();
// //     const [job, setJob] = useState(initialJob);
// //     const [resumeData, setResumeData] = useState<ResumeData>(() => job?.optimizedJson ? job.optimizedJson as ResumeData : defaultResumeData);
// //     const [activeTab, setActiveTab] = useState<ActiveTab>('editor');
// //     const [editingSection, setEditingSection] = useState<EditableSection>('personalInfo');
// //     const [selectedTemplate, setSelectedTemplate] = useState<string>(initialJob?.selectedTemplate || 'classic');
// //     const [hasUnsavedChanges, setHasUnsavedChanges] = useState<boolean>(false);
// //     const [isAutoSave, setIsAutoSave] = useState<boolean>(true);
// //     const [isSidebarCollapsed, setIsSidebarCollapsed] = useState<boolean>(true);

// //     // Analysis states
// //     const [isAnalysisLoading, setIsAnalysisLoading] = useState(false);
// //     const [keywordAnalysis, setKeywordAnalysis] = useState<KeywordAnalysis | null>(null);
// //     const [atsAnalysis, setAtsAnalysis] = useState<AtsAnalysis | null>(null);
// //     const [marketAnalysis, setMarketAnalysis] = useState<CompetitorAnalysis | null>(null);
// //     const [isOptimizing, setIsOptimizing] = useState<boolean>(false);
// //     const [optimizationResults, setOptimizationResults] = useState<OptimizationResults | null>(null);

// //     // Add a flag to prevent analysis fetch during optimization apply
// //     const [isApplyingOptimization, setIsApplyingOptimization] = useState<boolean>(false);

// //     const jobRoles = ['Software Engineer', 'Frontend Developer', 'Backend Developer', 'DevOps Engineer', 'Data Scientist', 'Product Manager'];

// //     // Dynamic optimization stats based on analysis
// //     const optimizationStats: OptimizationStat[] = [
// //         {
// //             label: "ATS Score",
// //             value: atsAnalysis ? `${atsAnalysis.score}%` : "...",
// //             change: atsAnalysis ? (atsAnalysis.score > 80 ? "+High" : atsAnalysis.score > 60 ? "+Med" : "+Low") : "...",
// //             icon: Target,
// //             color: "text-green-600",
// //             bgColor: "bg-green-50"
// //         },
// //         {
// //             label: "Keywords",
// //             value: keywordAnalysis ? `${keywordAnalysis.present.length}` : "...",
// //             change: keywordAnalysis ? `${keywordAnalysis.missing.length} missing` : "...",
// //             icon: Zap,
// //             color: "text-blue-600",
// //             bgColor: "bg-blue-50"
// //         },
// //         {
// //             label: "Impact",
// //             value: resumeData.experience?.filter(exp => exp.achievements?.some(ach => /\d/.test(ach || ''))).length.toString() || "0",
// //             change: "+Quantified",
// //             icon: TrendingUp,
// //             color: "text-purple-600",
// //             bgColor: "bg-purple-50"
// //         },
// //         {
// //             label: "Rating",
// //             value: atsAnalysis ? (atsAnalysis.score > 90 ? "A+" : atsAnalysis.score > 80 ? "A" : atsAnalysis.score > 70 ? "B+" : "B") : "...",
// //             change: "Good",
// //             icon: Star,
// //             color: "text-yellow-600",
// //             bgColor: "bg-yellow-50"
// //         }
// //     ];

// //     useEffect(() => {
// //         if (job?.optimizedJson) setResumeData(job.optimizedJson as ResumeData);
// //         if (job?.selectedTemplate && job.selectedTemplate !== selectedTemplate) setSelectedTemplate(job.selectedTemplate);
// //     }, [job]);

// //     // Add a ref to track the last analysis timestamp to prevent immediate re-analysis
// //     const lastAnalysisRef = useRef<number>(0);
// //     const ANALYSIS_COOLDOWN = 10000; // Increased to 10 seconds cooldown after applying optimizations

// //     // Create a stable reference for resume data to prevent unnecessary re-renders
// //     // Use a ref to freeze the data during optimization to prevent analysis triggers
// //     const frozenResumeDataRef = useRef<string>('');
// //     const resumeDataString = isApplyingOptimization 
// //         ? frozenResumeDataRef.current 
// //         : JSON.stringify(resumeData);

// //     // Update frozen ref when not applying optimization
// //     if (!isApplyingOptimization && frozenResumeDataRef.current !== JSON.stringify(resumeData)) {
// //         frozenResumeDataRef.current = JSON.stringify(resumeData);
// //     }
// //     const targetRole = job?.targetRole;

// //     // Fetch analysis data with proper debouncing and dependency management
// //     useEffect(() => {
// //         // Skip if no target role, applying optimization, or missing required data
// //         if (!targetRole || isApplyingOptimization) {
// //             console.log('Analysis skipped - no target role or applying optimization');
// //             return;
// //         }

// //         // Skip if we have pending optimization results (user hasn't applied them yet)
// //         if (optimizationResults) {
// //             console.log('Analysis skipped - optimization results pending application');
// //             return;
// //         }

// //         // Skip if we're in cooldown period after applying optimizations
// //         const now = Date.now();
// //         const timeSinceLastAnalysis = now - lastAnalysisRef.current;
// //         if (timeSinceLastAnalysis < ANALYSIS_COOLDOWN) {
// //             console.log(`Analysis skipped - in cooldown period (${Math.round((ANALYSIS_COOLDOWN - timeSinceLastAnalysis) / 1000)}s remaining)`);
// //             return;
// //         }

// //         // Only fetch on analysis tab or when data is missing
// //         if (activeTab !== 'analysis' && keywordAnalysis && atsAnalysis && marketAnalysis) {
// //             console.log('Analysis skipped - not on analysis tab and data exists');
// //             return;
// //         }

// //         // Check if resume data has actually changed to prevent unnecessary calls
// //         const currentDataString = JSON.stringify(resumeData);
// //         if (frozenResumeDataRef.current === currentDataString && keywordAnalysis && atsAnalysis) {
// //             console.log('Analysis skipped - resume data unchanged and analysis exists');
// //             return;
// //         }

// //         const fetchAnalysisData = async () => {
// //             console.log('=== STARTING ANALYSIS FETCH ===');
// //             console.log('Resume data being analyzed:', JSON.parse(resumeDataString));

// //             setIsAnalysisLoading(true);
// //             try {
// //                 const response = await fetch('/api/analysis', {
// //                     method: 'POST',
// //                     headers: { 'Content-Type': 'application/json' },
// //                     body: JSON.stringify({
// //                         resumeData: JSON.parse(resumeDataString),
// //                         targetRole
// //                     })
// //                 });

// //                 if (response.ok) {
// //                     const data = await response.json();
// //                     console.log('Analysis results received:', data);

// //                     setKeywordAnalysis(data.keywordAnalysis);
// //                     setAtsAnalysis(data.atsAnalysis);
// //                     setMarketAnalysis(data.competitorAnalysis);
// //                     lastAnalysisRef.current = Date.now(); // Update timestamp

// //                     console.log('=== ANALYSIS FETCH COMPLETE ===');
// //                 } else {
// //                     console.error('Failed to fetch analysis data', response.status);
// //                 }
// //             } catch (error) {
// //                 console.error('Error fetching analysis data:', error);
// //             } finally {
// //                 setIsAnalysisLoading(false);
// //             }
// //         };

// //         // Increased debounce time to prevent rapid-fire requests
// //         console.log('Analysis scheduled to run in 3 seconds...');
// //         const timeoutId = setTimeout(fetchAnalysisData, 3000);
// //         return () => clearTimeout(timeoutId);
// //     }, [resumeDataString, targetRole, activeTab, isApplyingOptimization]); // Removed keywordAnalysis, atsAnalysis from deps

// //     const handleDataUpdate = async (newResumeDataState: ResumeData) => {
// //         if (!job?.id) return;

// //         console.log('Updating resume data in database:', newResumeDataState);

// //         setHasUnsavedChanges(true);
// //         try {
// //             const res = await fetch(`/api/jobs/${job.id}`, {
// //                 method: 'PATCH',
// //                 headers: { 'Content-Type': 'application/json' },
// //                 body: JSON.stringify({ optimizedJson: newResumeDataState })
// //             });

// //             if (!res.ok) {
// //                 const errorText = await res.text();
// //                 throw new Error(`Failed to save updated data: ${res.status} - ${errorText}`);
// //             }

// //             const updatedJob = await res.json();
// //             setJob(updatedJob);
// //             setHasUnsavedChanges(false);

// //             console.log('Database update successful');

// //             // Verify the data was actually saved by checking the response
// //             console.log('Saved data verification:', updatedJob.optimizedJson);

// //         } catch (error) {
// //             console.error('Error saving updated resume:', error);
// //             throw error; // Re-throw to handle in calling function
// //         }
// //     };

// //     const updateResumeData = <K extends keyof ResumeData>(section: K, data: ResumeData[K]) => {
// //         const newResumeData = { ...resumeData, [section]: data };
// //         setResumeData(newResumeData);
// //         if (isAutoSave) handleDataUpdate(newResumeData);
// //         else setHasUnsavedChanges(true);
// //     };

// //     const handleTemplateChange = async (newTemplateKey: string) => {
// //         setSelectedTemplate(newTemplateKey);
// //         const updatedJob = { ...job, selectedTemplate: newTemplateKey };
// //         setJob(updatedJob);

// //         // Update template in database
// //         if (job?.id) {
// //             try {
// //                 await fetch(`/api/jobs/${job.id}`, {
// //                     method: 'PATCH',
// //                     headers: { 'Content-Type': 'application/json' },
// //                     body: JSON.stringify({ selectedTemplate: newTemplateKey })
// //                 });
// //             } catch (error) {
// //                 console.error('Error updating template:', error);
// //             }
// //         }
// //     };

// //     const saveChanges = () => handleDataUpdate(resumeData);

// //     const handleOptimizeResume = async () => {
// //         setIsOptimizing(true);
// //         setOptimizationResults(null);

// //         try {
// //             const response = await fetch('/api/analysis-optimise', {
// //                 method: 'POST',
// //                 headers: { 'Content-Type': 'application/json' },
// //                 body: JSON.stringify({
// //                     resumeData,
// //                     targetRole: job?.targetRole
// //                 })
// //             });

// //             if (response.ok) {
// //                 const results = await response.json();
// //                 setOptimizationResults(results);
// //                 setActiveTab('analysis');
// //             } else {
// //                 throw new Error('Optimization failed');
// //             }
// //         } catch (error) {
// //             console.error('Error optimizing resume:', error);
// //             // Fallback to mock data for demo
// //             await new Promise(resolve => setTimeout(resolve, 2000));
// //             const results: OptimizationResults = {
// //                 summary: {
// //                     before: resumeData.summary || '',
// //                     after: `AI-optimized summary for a high-performing ${job?.targetRole?.toLowerCase() || 'professional'}...`,
// //                     improvements: ['Added metrics', 'Improved clarity']
// //                 },
// //                 experience: {
// //                     optimized: resumeData.experience?.map(exp => ({
// //                         ...exp,
// //                         achievements: exp.achievements?.map(ach => `${ach}, boosting performance by 25%.`)
// //                     })) || [],
// //                     improvements: ['Added quantified results']
// //                 },
// //                 keywords: {
// //                     added: ['microservices', 'cloud architecture', 'CI/CD'],
// //                     score: 92
// //                 },
// //                 overallScore: 92
// //             };
// //             setOptimizationResults(results);
// //             setActiveTab('analysis');
// //         } finally {
// //             setIsOptimizing(false);
// //         }
// //     };

// //     // Fixed apply optimizations function with proper state management
// //     const applyOptimizations = async () => {
// //         if (!optimizationResults) return;

// //         console.log('=== STARTING OPTIMIZATION APPLICATION ===');
// //         setIsApplyingOptimization(true);

// //         try {
// //             console.log('Original resume data:', resumeData);

// //             // Create the optimized resume data
// //             const optimizedResumeData = {
// //                 ...resumeData,
// //                 summary: optimizationResults.summary.after,
// //                 experience: optimizationResults.experience.optimized
// //             };

// //             console.log('Optimized resume data to apply:', optimizedResumeData);

// //             // Update local state immediately and freeze the data
// //             setResumeData(optimizedResumeData);

// //             // Freeze the resume data string to prevent analysis triggers
// //             const optimizedDataString = JSON.stringify(optimizedResumeData);
// //             frozenResumeDataRef.current = optimizedDataString;

// //             // Save to database and wait for completion
// //             await handleDataUpdate(optimizedResumeData);

// //             console.log('Data successfully saved to database');

// //             // Clear optimization results after applying
// //             setOptimizationResults(null);

// //             // Clear existing analysis to prevent stale data
// //             setKeywordAnalysis(null);
// //             setAtsAnalysis(null);
// //             setMarketAnalysis(null);

// //             // Set timestamp to prevent immediate analysis
// //             lastAnalysisRef.current = Date.now();

// //             console.log('=== OPTIMIZATION APPLICATION COMPLETE ===');

// //             // Keep the flag active much longer to prevent premature analysis
// //             setTimeout(() => {
// //                 console.log('=== RELEASING OPTIMIZATION LOCK ===');
// //                 setIsApplyingOptimization(false);
// //                 // Ensure frozen ref still has the optimized data
// //                 if (frozenResumeDataRef.current !== optimizedDataString) {
// //                     frozenResumeDataRef.current = optimizedDataString;
// //                 }
// //             }, 8000); // Increased to 8 seconds

// //         } catch (error) {
// //             console.error('Error applying optimizations:', error);
// //             // Reset the flag on error
// //             setIsApplyingOptimization(false);
// //         }
// //     };

// //     const handleTargetRoleChange = async (newRole: string) => {
// //         // Prevent unnecessary calls if role hasn't changed
// //         if (job?.targetRole === newRole) return;

// //         const updatedJob = { ...job, targetRole: newRole };
// //         setJob(updatedJob);

// //         // Clear current analysis when role changes
// //         setKeywordAnalysis(null);
// //         setAtsAnalysis(null);
// //         setMarketAnalysis(null);

// //         // Update job in database
// //         if (job?.id) {
// //             try {
// //                 await fetch(`/api/jobs/${job.id}`, {
// //                     method: 'PATCH',
// //                     headers: { 'Content-Type': 'application/json' },
// //                     body: JSON.stringify({ targetRole: newRole })
// //                 });
// //             } catch (error) {
// //                 console.error('Error updating target role:', error);
// //             }
// //         }
// //     };

// //     const sectionIcons: { [key in EditableSection]: LucideIcon } = {
// //         personalInfo: User,
// //         summary: FileText,
// //         experience: Briefcase,
// //         projects: Star,
// //         skills: Award,
// //         education: GraduationCap
// //     };

// //     const sectionTitles: { [key in EditableSection]: string } = {
// //         personalInfo: 'Personal Information',
// //         summary: 'Professional Summary',
// //         experience: 'Work Experience',
// //         projects: 'Projects',
// //         skills: 'Skills & Technologies',
// //         education: 'Education'
// //     };

// //     const renderSectionEditor = () => {
// //         switch (editingSection) {
// //             case 'personalInfo': return <PersonalInfoEditor data={resumeData.personalInfo} onUpdate={(data) => updateResumeData('personalInfo', data)} />;
// //             case 'summary': return <SummaryEditor data={resumeData.summary} onUpdate={(data) => updateResumeData('summary', data)} targetRole={job?.targetRole} />;
// //             case 'experience': return <ExperienceEditor data={resumeData.experience} onUpdate={(data) => updateResumeData('experience', data)} targetRole={job?.targetRole} />;
// //             case 'projects': return <ProjectsEditor data={resumeData.projects} onUpdate={(data) => updateResumeData('projects', data)} targetRole={job?.targetRole} />;
// //             case 'skills': return <SkillsEditor data={resumeData.skills} onUpdate={(data) => updateResumeData('skills', data)} fullResumeData={resumeData} targetRole={job?.targetRole} />;
// //             case 'education': return <EducationEditor data={resumeData.education} onUpdate={(data) => updateResumeData('education', data)} />;
// //             default: return null;
// //         }
// //     };

// //     return (
// //         <Section>
// //             <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as ActiveTab)} className="w-full">
// //                 <div className="relative z-10 border-b bg-white">
// //                     <div className="max-w-full mx-auto px-4 py-4">
// //                         <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
// //                             <div className="flex items-center gap-4">
// //                                 <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
// //                                     <Sparkles className="h-6 w-6 text-blue-600" />
// //                                     Resume Workbench
// //                                 </h1>
// //                                 <div className="flex items-center gap-2 mt-1">
// //                                     <Badge variant={hasUnsavedChanges ? "destructive" : "secondary"}>
// //                                         {hasUnsavedChanges ? "Unsaved Changes" : "All Saved"}
// //                                     </Badge>
// //                                     <Badge variant="outline" className="flex items-center gap-1">
// //                                         {isAutoSave ? <Unlock className="h-3 w-3" /> : <Lock className="h-3 w-3" />}
// //                                         Auto-save {isAutoSave ? 'ON' : 'OFF'}
// //                                     </Badge>
// //                                     {job?.optimizedJson && (
// //                                         <Badge variant="outline" className="flex items-center gap-1">
// //                                             <Sparkles className="h-3 w-3" />AI Optimized
// //                                         </Badge>
// //                                     )}
// //                                     {isApplyingOptimization && (
// //                                         <Badge variant="outline" className="flex items-center gap-1">
// //                                             <RefreshCw className="h-3 w-3 animate-spin" />Applying...
// //                                         </Badge>
// //                                     )}
// //                                 </div>
// //                             </div>
// //                             <div className="flex items-center gap-2">
// //                                 <Button variant="outline" size="sm" onClick={() => setIsAutoSave(!isAutoSave)}>
// //                                     <Lock className="h-4 w-4 mr-2" />Auto-save
// //                                 </Button>
// //                                 <Button variant="outline" size="sm" onClick={saveChanges} disabled={!hasUnsavedChanges}>
// //                                     <Save className="h-4 w-4 mr-2" />Save
// //                                 </Button>
// //                                 <DownloadButton resumeData={resumeData as any} templateKey={selectedTemplate} />
// //                                 <Button variant="default" size="sm" onClick={() => router.push('/dashboard')}>
// //                                     <LayoutDashboard className="h-4 w-4 mr-2" />Dashboard
// //                                 </Button>
// //                             </div>
// //                         </div>
// //                         <div className="mt-4">
// //                             <TabsList className="grid w-full grid-cols-3 bg-white shadow-sm border max-w-md">
// //                                 <TabsTrigger value="editor" className="flex items-center gap-2">
// //                                     <Edit className="h-4 w-4" />Editor
// //                                 </TabsTrigger>
// //                                 <TabsTrigger value="analysis" className="flex items-center gap-2">
// //                                     <BarChart3 className="h-4 w-4" />Analysis
// //                                 </TabsTrigger>
// //                                 <TabsTrigger value="templates" className="flex items-center gap-2">
// //                                     <File className="h-4 w-4" />Templates
// //                                 </TabsTrigger>
// //                             </TabsList>
// //                         </div>
// //                     </div>
// //                 </div>

// //                 <div className="py-6">
// //                     <TabsContent value="editor" className="mt-0">
// //                         <div className="grid grid-cols-12 gap-6 relative px-4">
// //                             <div className={`transition-all duration-300 ease-in-out ${isSidebarCollapsed ? 'col-span-2' : 'col-span-2'}`}>
// //                                 <Card>
// //                                     <CardHeader className="pb-3 flex flex-row items-center justify-between space-y-0">
// //                                         <CardTitle className="text-sm font-semibold uppercase">Sections</CardTitle>
// //                                         <Button
// //                                             variant="ghost"
// //                                             size="sm"
// //                                             onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
// //                                             className="p-1 h-6 w-6"
// //                                         >
// //                                             <ChevronLeft className="h-3 w-3" />
// //                                         </Button>
// //                                     </CardHeader>
// //                                     <CardContent className="p-0">
// //                                         <nav className="space-y-1">
// //                                             {(Object.keys(sectionIcons) as EditableSection[]).map((section) => {
// //                                                 const IconComponent = sectionIcons[section];
// //                                                 return (
// //                                                     <button
// //                                                         key={section}
// //                                                         onClick={() => setEditingSection(section)}
// //                                                         className={`w-full flex items-center gap-3 px-4 py-3 text-left text-sm font-medium transition-all ${editingSection === section
// //                                                                 ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-500'
// //                                                                 : 'text-gray-600 border-transparent hover:text-gray-900'
// //                                                             }`}
// //                                                     >
// //                                                         <IconComponent className={`h-4 w-4 ${editingSection === section ? 'text-blue-600' : 'text-gray-400'
// //                                                             }`} />
// //                                                         {sectionTitles[section]}
// //                                                     </button>
// //                                                 );
// //                                             })}
// //                                         </nav>
// //                                     </CardContent>
// //                                 </Card>
// //                             </div>
// //                             <div className="col-span-5">{renderSectionEditor()}</div>
// //                             <div className="col-span-5">
// //                                 <ResumePreview
// //                                     resumeData={resumeData as any}
// //                                     onEditSection={(section) => setEditingSection(section as EditableSection)}
// //                                     selectedTemplate={selectedTemplate}
// //                                 />
// //                             </div>
// //                         </div>
// //                     </TabsContent>

// //                     <TabsContent value="analysis" className="mt-0">
// //                         <div className="grid gap-6 grid-cols-1 lg:grid-cols-4 px-4">
// //                             <div className="lg:col-span-3">
// //                                 <OptimizationPanel
// //                                     resumeData={resumeData as OptResumeData}
// //                                     onUpdate={updateResumeData}
// //                                     optimizationStats={optimizationStats}
// //                                     targetRole={job?.targetRole || 'Software Engineer'}
// //                                     jobRoles={jobRoles}
// //                                     onTargetRoleChange={handleTargetRoleChange}
// //                                     keywordAnalysis={isAnalysisLoading ? null : keywordAnalysis}
// //                                     atsAnalysis={isAnalysisLoading ? null : atsAnalysis}
// //                                     marketAnalysis={isAnalysisLoading ? null : marketAnalysis}
// //                                     isOptimizing={isOptimizing}
// //                                     optimizationResults={optimizationResults}
// //                                     onOptimize={handleOptimizeResume}
// //                                     onApplyOptimizations={applyOptimizations}
// //                                 />
// //                             </div>
// //                             <div className="lg:col-span-1">
// //                                 <WorkbenchSidebar
// //                                     resumeData={resumeData as any}
// //                                     onEditSection={(section) => {
// //                                         setEditingSection(section as EditableSection);
// //                                         setActiveTab('editor');
// //                                     }}
// //                                     optimizationStats={optimizationStats}
// //                                     atsAnalysis={isAnalysisLoading ? null : atsAnalysis}
// //                                     keywordAnalysis={isAnalysisLoading ? null : keywordAnalysis}
// //                                     isApplyingOptimization={isApplyingOptimization}
// //                                 />
// //                             </div>
// //                         </div>
// //                     </TabsContent>

// //                     <TabsContent value="templates" className="mt-0">
// //                         {resumeData && job.id && (
// //                             <TemplateSelection
// //                                 jobId={job.id}
// //                                 resumeData={resumeData as any}
// //                                 currentTemplate={selectedTemplate}
// //                                 onTemplateChange={handleTemplateChange}
// //                             />
// //                         )}
// //                     </TabsContent>
// //                 </div>
// //             </Tabs>

// //             {hasUnsavedChanges && !isAutoSave && (
// //                 <div className="fixed bottom-4 right-4 z-50">
// //                     <Card className="bg-yellow-50 border-yellow-200">
// //                         <CardContent className="p-4 flex items-center gap-3">
// //                             <RefreshCw className="h-4 w-4 text-yellow-600" />
// //                             You have unsaved changes
// //                             <Button size="sm" onClick={saveChanges}>Save Now</Button>
// //                         </CardContent>
// //                     </Card>
// //                 </div>
// //             )}
// //         </Section>
// //     );
// // }



// // src/app/(builder)/builder/[id]/BuilderClient.tsx

// "use client";

// import React, { useState, useEffect, FC, useRef } from 'react';
// import { Prisma } from '@prisma/client';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { Badge } from '@/components/ui/badge';
// import { Button } from '@/components/ui/button';
// import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
// import { Edit, BarChart3, Sparkles, Save, Download, RefreshCw, Target, Zap, TrendingUp, Star, User, Briefcase, GraduationCap, Award, FileText, Lock, Unlock, ChevronRight, ChevronLeft, type LucideIcon, LayoutDashboard, File, Home } from 'lucide-react';
// import { PersonalInfoEditor } from '@/components/Base/Builder/PersonalInfoEditor';
// import { SummaryEditor } from '@/components/Base/Builder/SummaryEditor';
// import { ExperienceEditor } from '@/components/Base/Builder/ExperienceEditor';
// import { SkillsEditor } from '@/components/Base/Builder/SkillsEditor';
// import { EducationEditor } from '@/components/Base/Builder/EducationEditor';
// import { ProjectsEditor } from '@/components/Base/Builder/ProjectsEditor';
// import { ResumePreview } from '@/components/Base/Builder/ResumePreview';
// import { WorkbenchSidebar } from '@/components/Base/Builder/WorkbenchSidebar';
// import { TemplateSelection } from '@/components/Base/templates/Templates';
// import { DownloadButton } from '@/components/Base/Builder/DownloadButton';
// import Section from '@/components/Base/Section';
// import { useRouter } from 'next/navigation';
// import {
//     OptimizationPanel,
//     ResumeData as OptResumeData,
//     KeywordAnalysis,
//     AtsAnalysis,
//     CompetitorAnalysis,
//     OptimizationResults,
// } from '@/components/Base/Builder/OptimizationPanel';
// import PaymentButton from '@/components/Base/Payment/PaymentButton';

// const defaultResumeData = {
//     personalInfo: { name: "", title: "", email: "", phone: "", location: "", website: "", github: "" },
//     summary: "",
//     experience: [],
//     projects: [],
//     skills: {},
//     education: []
// };

// type ResumeData = typeof defaultResumeData;
// interface Job { id?: string; optimizedJson?: Prisma.JsonValue; targetRole?: string; selectedTemplate?: string; }
// interface BuilderClientProps { job: Job; }
// interface OptimizationStat { label: string; value: string; change: string; icon: LucideIcon; color: string; bgColor: string; }
// type EditableSection = 'personalInfo' | 'summary' | 'experience' | 'projects' | 'skills' | 'education';
// type ActiveTab = 'editor' | 'analysis' | 'templates';

// export function BuilderClient({ job: initialJob }: BuilderClientProps) {
//     const router = useRouter();
//     const [job, setJob] = useState(initialJob);
//     const [resumeData, setResumeData] = useState<ResumeData>(() => job?.optimizedJson ? job.optimizedJson as ResumeData : defaultResumeData);
//     const [activeTab, setActiveTab] = useState<ActiveTab>('editor');
//     const [editingSection, setEditingSection] = useState<EditableSection>('personalInfo');
//     const [selectedTemplate, setSelectedTemplate] = useState<string>(initialJob?.selectedTemplate || 'classic');
//     const [hasUnsavedChanges, setHasUnsavedChanges] = useState<boolean>(false);
//     const [isAutoSave, setIsAutoSave] = useState<boolean>(true);
//     const [isSidebarCollapsed, setIsSidebarCollapsed] = useState<boolean>(true);

//     // Analysis states
//     const [isAnalysisLoading, setIsAnalysisLoading] = useState(false);
//     const [keywordAnalysis, setKeywordAnalysis] = useState<KeywordAnalysis | null>(null);
//     const [atsAnalysis, setAtsAnalysis] = useState<AtsAnalysis | null>(null);
//     const [marketAnalysis, setMarketAnalysis] = useState<CompetitorAnalysis | null>(null);
//     const [isOptimizing, setIsOptimizing] = useState<boolean>(false);
//     const [optimizationResults, setOptimizationResults] = useState<OptimizationResults | null>(null);

//     // Add a flag to prevent analysis fetch during optimization apply
//     const [isApplyingOptimization, setIsApplyingOptimization] = useState<boolean>(false);

//     // Add a ref to track the last analysis timestamp to prevent immediate re-analysis
//     const lastAnalysisRef = useRef<number>(0);
//     const ANALYSIS_COOLDOWN = 10000; // 10 seconds cooldown after applying optimizations

//     // Create a stable reference for resume data to prevent unnecessary re-renders
//     // Use a ref to freeze the data during optimization to prevent analysis triggers
//     const frozenResumeDataRef = useRef<string>('');

//     const jobRoles = ['Software Engineer', 'Frontend Developer', 'Backend Developer', 'DevOps Engineer', 'Data Scientist', 'Product Manager'];

//     // Dynamic optimization stats based on analysis
//     const optimizationStats: OptimizationStat[] = [
//         {
//             label: "ATS Score",
//             value: atsAnalysis ? `${atsAnalysis.score}%` : "...",
//             change: atsAnalysis ? (atsAnalysis.score > 80 ? "+High" : atsAnalysis.score > 60 ? "+Med" : "+Low") : "...",
//             icon: Target,
//             color: "text-green-600",
//             bgColor: "bg-green-50"
//         },
//         {
//             label: "Keywords",
//             value: keywordAnalysis ? `${keywordAnalysis.present.length}` : "...",
//             change: keywordAnalysis ? `${keywordAnalysis.missing.length} missing` : "...",
//             icon: Zap,
//             color: "text-blue-600",
//             bgColor: "bg-blue-50"
//         },
//         {
//             label: "Impact",
//             value: resumeData.experience?.filter(exp => exp.achievements?.some(ach => /\d/.test(ach || ''))).length.toString() || "0",
//             change: "+Quantified",
//             icon: TrendingUp,
//             color: "text-purple-600",
//             bgColor: "bg-purple-50"
//         },
//         {
//             label: "Rating",
//             value: atsAnalysis ? (atsAnalysis.score > 90 ? "A+" : atsAnalysis.score > 80 ? "A" : atsAnalysis.score > 70 ? "B+" : "B") : "...",
//             change: "Good",
//             icon: Star,
//             color: "text-yellow-600",
//             bgColor: "bg-yellow-50"
//         }
//     ];

//     useEffect(() => {
//         if (job?.optimizedJson) setResumeData(job.optimizedJson as ResumeData);
//         if (job?.selectedTemplate && job.selectedTemplate !== selectedTemplate) setSelectedTemplate(job.selectedTemplate);
//     }, [job]);

//     // Create stable resume data string reference
//     const resumeDataString = isApplyingOptimization
//         ? frozenResumeDataRef.current
//         : JSON.stringify(resumeData);

//     // Update frozen ref when not applying optimization
//     if (!isApplyingOptimization && frozenResumeDataRef.current !== JSON.stringify(resumeData)) {
//         frozenResumeDataRef.current = JSON.stringify(resumeData);
//     }

//     const targetRole = job?.targetRole;

//     // Fetch analysis data with proper debouncing and dependency management
//     useEffect(() => {
//         // Skip if no target role, applying optimization, or missing required data
//         if (!targetRole || isApplyingOptimization) {
//             console.log('Analysis skipped - no target role or applying optimization');
//             return;
//         }

//         // Skip if we have pending optimization results (user hasn't applied them yet)
//         if (optimizationResults) {
//             console.log('Analysis skipped - optimization results pending application');
//             return;
//         }

//         // Skip if we're in cooldown period after applying optimizations
//         const now = Date.now();
//         const timeSinceLastAnalysis = now - lastAnalysisRef.current;
//         if (timeSinceLastAnalysis < ANALYSIS_COOLDOWN) {
//             console.log(`Analysis skipped - in cooldown period (${Math.round((ANALYSIS_COOLDOWN - timeSinceLastAnalysis) / 1000)}s remaining)`);
//             return;
//         }

//         // Only fetch on analysis tab or when data is missing
//         if (activeTab !== 'analysis' && keywordAnalysis && atsAnalysis && marketAnalysis) {
//             console.log('Analysis skipped - not on analysis tab and data exists');
//             return;
//         }

//         // Check if resume data has actually changed to prevent unnecessary calls
//         const currentDataString = JSON.stringify(resumeData);
//         if (frozenResumeDataRef.current === currentDataString && keywordAnalysis && atsAnalysis) {
//             console.log('Analysis skipped - resume data unchanged and analysis exists');
//             return;
//         }

//         const fetchAnalysisData = async () => {
//             console.log('=== STARTING ANALYSIS FETCH ===');
//             console.log('Resume data being analyzed:', JSON.parse(resumeDataString));

//             setIsAnalysisLoading(true);
//             try {
//                 const response = await fetch('/api/analysis', {
//                     method: 'POST',
//                     headers: { 'Content-Type': 'application/json' },
//                     body: JSON.stringify({
//                         resumeData: JSON.parse(resumeDataString),
//                         targetRole
//                     })
//                 });

//                 if (response.ok) {
//                     const data = await response.json();
//                     console.log('Analysis results received:', data);

//                     setKeywordAnalysis(data.keywordAnalysis);
//                     setAtsAnalysis(data.atsAnalysis);
//                     setMarketAnalysis(data.competitorAnalysis);
//                     lastAnalysisRef.current = Date.now(); // Update timestamp

//                     console.log('=== ANALYSIS FETCH COMPLETE ===');
//                 } else {
//                     console.error('Failed to fetch analysis data', response.status);
//                 }
//             } catch (error) {
//                 console.error('Error fetching analysis data:', error);
//             } finally {
//                 setIsAnalysisLoading(false);
//             }
//         };

//         // Increased debounce time to prevent rapid-fire requests
//         console.log('Analysis scheduled to run in 3 seconds...');
//         const timeoutId = setTimeout(fetchAnalysisData, 3000);
//         return () => clearTimeout(timeoutId);
//     }, [resumeDataString, targetRole, activeTab, isApplyingOptimization]);

//     const handleDataUpdate = async (newResumeDataState: ResumeData) => {
//         if (!job?.id) return;

//         console.log('Updating resume data in database:', newResumeDataState);

//         setHasUnsavedChanges(true);
//         try {
//             const res = await fetch(`/api/jobs/${job.id}`, {
//                 method: 'PATCH',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify({ optimizedJson: newResumeDataState })
//             });

//             if (!res.ok) {
//                 const errorText = await res.text();
//                 throw new Error(`Failed to save updated data: ${res.status} - ${errorText}`);
//             }

//             const updatedJob = await res.json();
//             setJob(updatedJob);
//             setHasUnsavedChanges(false);

//             console.log('Database update successful');
//             console.log('Saved data verification:', updatedJob.optimizedJson);

//         } catch (error) {
//             console.error('Error saving updated resume:', error);
//             throw error; // Re-throw to handle in calling function
//         }
//     };

//     const updateResumeData = <K extends keyof ResumeData>(section: K, data: ResumeData[K]) => {
//         const newResumeData = { ...resumeData, [section]: data };
//         setResumeData(newResumeData);
//         if (isAutoSave) handleDataUpdate(newResumeData);
//         else setHasUnsavedChanges(true);
//     };

//     const handleTemplateChange = async (newTemplateKey: string) => {
//         setSelectedTemplate(newTemplateKey);
//         const updatedJob = { ...job, selectedTemplate: newTemplateKey };
//         setJob(updatedJob);

//         // Update template in database
//         if (job?.id) {
//             try {
//                 await fetch(`/api/jobs/${job.id}`, {
//                     method: 'PATCH',
//                     headers: { 'Content-Type': 'application/json' },
//                     body: JSON.stringify({ selectedTemplate: newTemplateKey })
//                 });
//             } catch (error) {
//                 console.error('Error updating template:', error);
//             }
//         }
//     };

//     const saveChanges = () => handleDataUpdate(resumeData);

//     const handleOptimizeResume = async () => {
//         setIsOptimizing(true);
//         setOptimizationResults(null);

//         try {
//             const response = await fetch('/api/analysis-optimise', {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify({
//                     resumeData,
//                     targetRole: job?.targetRole
//                 })
//             });

//             if (response.ok) {
//                 const results = await response.json();
//                 setOptimizationResults(results);
//                 setActiveTab('analysis');
//             } else {
//                 throw new Error('Optimization failed');
//             }
//         } catch (error) {
//             console.error('Error optimizing resume:', error);
//             // Fallback to mock data for demo
//             await new Promise(resolve => setTimeout(resolve, 2000));
//             const results: OptimizationResults = {
//                 summary: {
//                     before: resumeData.summary || '',
//                     after: `AI-optimized summary for a high-performing ${job?.targetRole?.toLowerCase() || 'professional'}...`,
//                     improvements: ['Added metrics', 'Improved clarity']
//                 },
//                 experience: {
//                     optimized: resumeData.experience?.map(exp => ({
//                         ...exp,
//                         achievements: exp.achievements?.map(ach => `${ach}, boosting performance by 25%.`)
//                     })) || [],
//                     improvements: ['Added quantified results']
//                 },
//                 keywords: {
//                     added: ['microservices', 'cloud architecture', 'CI/CD'],
//                     score: 92
//                 },
//                 overallScore: 92
//             };
//             setOptimizationResults(results);
//             setActiveTab('analysis');
//         } finally {
//             setIsOptimizing(false);
//         }
//     };

//     // Apply optimizations function with proper state management
//     const applyOptimizations = async () => {
//         if (!optimizationResults) return;

//         console.log('=== STARTING OPTIMIZATION APPLICATION ===');
//         setIsApplyingOptimization(true);

//         try {
//             console.log('Original resume data:', resumeData);

//             // Create the optimized resume data
//             const optimizedResumeData = {
//                 ...resumeData,
//                 summary: optimizationResults.summary.after,
//                 experience: optimizationResults.experience.optimized
//             };

//             console.log('Optimized resume data to apply:', optimizedResumeData);

//             // Update local state immediately and freeze the data
//             setResumeData(optimizedResumeData);

//             // Freeze the resume data string to prevent analysis triggers
//             const optimizedDataString = JSON.stringify(optimizedResumeData);
//             frozenResumeDataRef.current = optimizedDataString;

//             // Save to database and wait for completion
//             await handleDataUpdate(optimizedResumeData);

//             console.log('Data successfully saved to database');

//             // Clear optimization results after applying
//             setOptimizationResults(null);

//             // Clear existing analysis to prevent stale data
//             setKeywordAnalysis(null);
//             setAtsAnalysis(null);
//             setMarketAnalysis(null);

//             // Set timestamp to prevent immediate analysis
//             lastAnalysisRef.current = Date.now();

//             console.log('=== OPTIMIZATION APPLICATION COMPLETE ===');

//             // Keep the flag active much longer to prevent premature analysis
//             setTimeout(() => {
//                 console.log('=== RELEASING OPTIMIZATION LOCK ===');
//                 setIsApplyingOptimization(false);
//                 // Ensure frozen ref still has the optimized data
//                 if (frozenResumeDataRef.current !== optimizedDataString) {
//                     frozenResumeDataRef.current = optimizedDataString;
//                 }
//             }, 8000); // 8 seconds

//         } catch (error) {
//             console.error('Error applying optimizations:', error);
//             // Reset the flag on error
//             setIsApplyingOptimization(false);
//         }
//     };

//     const handleTargetRoleChange = async (newRole: string) => {
//         // Prevent unnecessary calls if role hasn't changed
//         if (job?.targetRole === newRole) return;

//         const updatedJob = { ...job, targetRole: newRole };
//         setJob(updatedJob);

//         // Clear current analysis when role changes
//         setKeywordAnalysis(null);
//         setAtsAnalysis(null);
//         setMarketAnalysis(null);

//         // Update job in database
//         if (job?.id) {
//             try {
//                 await fetch(`/api/jobs/${job.id}`, {
//                     method: 'PATCH',
//                     headers: { 'Content-Type': 'application/json' },
//                     body: JSON.stringify({ targetRole: newRole })
//                 });
//             } catch (error) {
//                 console.error('Error updating target role:', error);
//             }
//         }
//     };

//     const sectionIcons: { [key in EditableSection]: LucideIcon } = {
//         personalInfo: User,
//         summary: FileText,
//         experience: Briefcase,
//         projects: Star,
//         skills: Award,
//         education: GraduationCap
//     };

//     const sectionTitles: { [key in EditableSection]: string } = {
//         personalInfo: 'Personal Information',
//         summary: 'Professional Summary',
//         experience: 'Work Experience',
//         projects: 'Projects',
//         skills: 'Skills & Technologies',
//         education: 'Education'
//     };

//     const renderSectionEditor = () => {
//         switch (editingSection) {
//             case 'personalInfo': return <PersonalInfoEditor data={resumeData.personalInfo} onUpdate={(data) => updateResumeData('personalInfo', data)} />;
//             case 'summary': return <SummaryEditor data={resumeData.summary} onUpdate={(data) => updateResumeData('summary', data)} targetRole={job?.targetRole} />;
//             case 'experience': return <ExperienceEditor data={resumeData.experience} onUpdate={(data) => updateResumeData('experience', data)} targetRole={job?.targetRole} />;
//             case 'projects': return <ProjectsEditor data={resumeData.projects} onUpdate={(data) => updateResumeData('projects', data)} targetRole={job?.targetRole} />;
//             case 'skills': return <SkillsEditor data={resumeData.skills} onUpdate={(data) => updateResumeData('skills', data)} fullResumeData={resumeData} targetRole={job?.targetRole} />;
//             case 'education': return <EducationEditor data={resumeData.education} onUpdate={(data) => updateResumeData('education', data)} />;
//             default: return null;
//         }
//     };

//     return (
//         <Section>
//             <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as ActiveTab)} className="w-full">
//                 <div className="relative z-10 border-b bg-white">
//                     <div className="max-w-full mx-auto px-4 py-4">
//                         <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
//                             <div className="flex items-center gap-4">
//                                 <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
//                                     <Sparkles className="h-6 w-6 text-blue-600" />
//                                     Resume Workbench
//                                 </h1>
//                                 <div className="flex items-center gap-2 mt-1">
//                                     <Badge variant={hasUnsavedChanges ? "destructive" : "secondary"}>
//                                         {hasUnsavedChanges ? "Unsaved Changes" : "All Saved"}
//                                     </Badge>
//                                     <Badge variant="outline" className="flex items-center gap-1">
//                                         {isAutoSave ? <Unlock className="h-3 w-3" /> : <Lock className="h-3 w-3" />}
//                                         Auto-save {isAutoSave ? 'ON' : 'OFF'}
//                                     </Badge>
//                                     {job?.optimizedJson && (
//                                         <Badge variant="outline" className="flex items-center gap-1">
//                                             <Sparkles className="h-3 w-3" />AI Optimized
//                                         </Badge>
//                                     )}
//                                     {isApplyingOptimization && (
//                                         <Badge variant="outline" className="flex items-center gap-1">
//                                             <RefreshCw className="h-3 w-3 animate-spin" />Applying...
//                                         </Badge>
//                                     )}
//                                 </div>
//                             </div>
//                             <div className="flex items-center gap-2">
//                                 <Button variant="outline" size="sm" onClick={() => router.push("/")}>
//                                     <Home />
//                                     Go To Home
//                                 </Button>
//                                 <Button variant="outline" size="sm" onClick={() => setIsAutoSave(!isAutoSave)}>
//                                     <Lock className="h-4 w-4 mr-2" />Auto-save
//                                 </Button>
//                                 <Button variant="outline" size="sm" onClick={saveChanges} disabled={!hasUnsavedChanges}>
//                                     <Save className="h-4 w-4 mr-2" />Save
//                                 </Button>
//                                 <DownloadButton resumeData={resumeData as any} templateKey={selectedTemplate} />
//                                 <Button variant="default" size="sm" onClick={() => router.push('/dashboard')}>
//                                     <LayoutDashboard className="h-4 w-4 mr-2" />Dashboard
//                                 </Button>
//                             </div>
//                         </div>
//                         <div className="mt-4">
//                             <TabsList className="grid w-full grid-cols-3 bg-white shadow-sm border max-w-md">
//                                 <TabsTrigger value="editor" className="flex items-center gap-2">
//                                     <Edit className="h-4 w-4" />Editor
//                                 </TabsTrigger>
//                                 <TabsTrigger value="analysis" className="flex items-center gap-2">
//                                     <BarChart3 className="h-4 w-4" />Analysis
//                                 </TabsTrigger>
//                                 <TabsTrigger value="templates" className="flex items-center gap-2">
//                                     <File className="h-4 w-4" />Templates
//                                 </TabsTrigger>
//                             </TabsList>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="py-6">
//                     <TabsContent value="editor" className="mt-0">
//                         <div className="grid grid-cols-12 gap-6 relative px-4">
//                             <div className={`transition-all duration-300 ease-in-out ${isSidebarCollapsed ? 'col-span-1' : 'col-span-2'}`}>
//                                 <Card>
//                                     <CardHeader className="pb-3 flex flex-row items-center justify-between space-y-0">
//                                         <CardTitle className="text-sm font-semibold uppercase">Sections</CardTitle>
//                                         <Button
//                                             variant="ghost"
//                                             size="sm"
//                                             onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
//                                             className="p-1 h-6 w-6"
//                                         >
//                                             <ChevronLeft className="h-3 w-3" />
//                                         </Button>
//                                     </CardHeader>
//                                     <CardContent className="p-0">
//                                         <nav className="space-y-1">
//                                             {(Object.keys(sectionIcons) as EditableSection[]).map((section) => {
//                                                 const IconComponent = sectionIcons[section];
//                                                 return (
//                                                     <button
//                                                         key={section}
//                                                         onClick={() => setEditingSection(section)}
//                                                         className={`w-full flex items-center gap-3 px-4 py-3 text-left text-sm font-medium transition-all ${editingSection === section
//                                                             ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-500'
//                                                             : 'text-gray-600 border-transparent hover:text-gray-900'
//                                                             }`}
//                                                     >
//                                                         <IconComponent className={`h-4 w-4 ${editingSection === section ? 'text-blue-600' : 'text-gray-400'
//                                                             }`} />
//                                                         {sectionTitles[section]}
//                                                     </button>
//                                                 );
//                                             })}
//                                         </nav>
//                                     </CardContent>
//                                 </Card>
//                             </div>
//                             <div className="col-span-4">{renderSectionEditor()}</div>
//                             <div className="col-span-6">
//                                 <ResumePreview
//                                     resumeData={resumeData as any}
//                                     onEditSection={(section) => setEditingSection(section as EditableSection)}
//                                     selectedTemplate={selectedTemplate}
//                                 />
//                             </div>
//                         </div>
//                     </TabsContent>

//                     <TabsContent value="analysis" className="mt-0">
//                         <div className="grid gap-6 grid-cols-1 lg:grid-cols-4 px-4">
//                             <div className="lg:col-span-3">
//                                 <OptimizationPanel
//                                     resumeData={resumeData as OptResumeData}
//                                     onUpdate={updateResumeData}
//                                     optimizationStats={optimizationStats}
//                                     targetRole={job?.targetRole || 'Software Engineer'}
//                                     jobRoles={jobRoles}
//                                     onTargetRoleChange={handleTargetRoleChange}
//                                     keywordAnalysis={isAnalysisLoading ? null : keywordAnalysis}
//                                     atsAnalysis={isAnalysisLoading ? null : atsAnalysis}
//                                     marketAnalysis={isAnalysisLoading ? null : marketAnalysis}
//                                     isOptimizing={isOptimizing}
//                                     optimizationResults={optimizationResults}
//                                     onOptimize={handleOptimizeResume}
//                                     onApplyOptimizations={applyOptimizations}
//                                 />
//                             </div>
//                             <div className="lg:col-span-1">
//                                 <WorkbenchSidebar
//                                     resumeData={resumeData as any}
//                                     onEditSection={(section) => {
//                                         setEditingSection(section as EditableSection);
//                                         setActiveTab('editor');
//                                     }}
//                                     optimizationStats={optimizationStats}
//                                     atsAnalysis={isAnalysisLoading ? null : atsAnalysis}
//                                     keywordAnalysis={isAnalysisLoading ? null : keywordAnalysis}
//                                     isApplyingOptimization={isApplyingOptimization}
//                                 />
//                             </div>
//                         </div>
//                     </TabsContent>

//                     <TabsContent value="templates" className="mt-0">
//                         {resumeData && job.id && (
//                             <TemplateSelection
//                                 jobId={job.id}
//                                 resumeData={resumeData as any}
//                                 currentTemplate={selectedTemplate}
//                                 onTemplateChange={handleTemplateChange}
//                             />
//                         )}
//                     </TabsContent>
//                 </div>
//             </Tabs>

//             {hasUnsavedChanges && !isAutoSave && (
//                 <div className="fixed bottom-4 right-4 z-50">
//                     <Card className="bg-yellow-50 border-yellow-200">
//                         <CardContent className="p-4 flex items-center gap-3">
//                             <RefreshCw className="h-4 w-4 text-yellow-600" />
//                             You have unsaved changes
//                             <Button size="sm" onClick={saveChanges}>Save Now</Button>
//                         </CardContent>
//                     </Card>
//                 </div>
//             )}
//         </Section>
//     );
// }



// src/app/(builder)/builder/[id]/BuilderClient.tsx

"use client";

import React, { useState, useEffect, FC, useRef } from 'react';
import { Prisma } from '@prisma/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Edit, BarChart3, Sparkles, Save, Download, RefreshCw, Target, Zap, TrendingUp, Star, User, Briefcase, GraduationCap, Award, FileText, Lock, Unlock, ChevronRight, ChevronLeft, type LucideIcon, LayoutDashboard, File, Home } from 'lucide-react';
import { PersonalInfoEditor } from '@/components/Base/Builder/PersonalInfoEditor';
import { SummaryEditor } from '@/components/Base/Builder/SummaryEditor';
import { ExperienceEditor } from '@/components/Base/Builder/ExperienceEditor';
import { SkillsEditor } from '@/components/Base/Builder/SkillsEditor';
import { EducationEditor } from '@/components/Base/Builder/EducationEditor';
import { ProjectsEditor } from '@/components/Base/Builder/ProjectsEditor';
import { ResumePreview } from '@/components/Base/Builder/ResumePreview';
import { WorkbenchSidebar } from '@/components/Base/Builder/WorkbenchSidebar';
import { TemplateSelection } from '@/components/Base/templates/Templates';
import { DownloadButton } from '@/components/Base/Builder/DownloadButton';
import Section from '@/components/Base/Section';
import { useRouter } from 'next/navigation';
import {
    OptimizationPanel,
    ResumeData as OptResumeData,
    KeywordAnalysis,
    AtsAnalysis,
    CompetitorAnalysis,
    OptimizationResults,
} from '@/components/Base/Builder/OptimizationPanel';
import PaymentButton from '@/components/Base/Payment/PaymentButton';

const defaultResumeData = {
    personalInfo: { name: "", title: "", email: "", phone: "", location: "", website: "", github: "" },
    summary: "",
    experience: [],
    projects: [],
    skills: {},
    education: []
};

type ResumeData = typeof defaultResumeData;
interface Job { id?: string; optimizedJson?: Prisma.JsonValue; targetRole?: string; selectedTemplate?: string; }
interface BuilderClientProps { job: Job; }
interface OptimizationStat { label: string; value: string; change: string; icon: LucideIcon; color: string; bgColor: string; }
type EditableSection = 'personalInfo' | 'summary' | 'experience' | 'projects' | 'skills' | 'education';
type ActiveTab = 'editor' | 'analysis' | 'templates';

export function BuilderClient({ job: initialJob }: BuilderClientProps) {
    const router = useRouter();
    const [job, setJob] = useState(initialJob);
    const [resumeData, setResumeData] = useState<ResumeData>(() => job?.optimizedJson ? job.optimizedJson as ResumeData : defaultResumeData);
    const [activeTab, setActiveTab] = useState<ActiveTab>('editor');
    const [editingSection, setEditingSection] = useState<EditableSection>('personalInfo');
    const [selectedTemplate, setSelectedTemplate] = useState<string>(initialJob?.selectedTemplate || 'classic');
    const [hasUnsavedChanges, setHasUnsavedChanges] = useState<boolean>(false);
    const [isAutoSave, setIsAutoSave] = useState<boolean>(true);
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState<boolean>(true);

    // Analysis states
    const [isAnalysisLoading, setIsAnalysisLoading] = useState(false);
    const [keywordAnalysis, setKeywordAnalysis] = useState<KeywordAnalysis | null>(null);
    const [atsAnalysis, setAtsAnalysis] = useState<AtsAnalysis | null>(null);
    const [marketAnalysis, setMarketAnalysis] = useState<CompetitorAnalysis | null>(null);
    const [isOptimizing, setIsOptimizing] = useState<boolean>(false);
    const [optimizationResults, setOptimizationResults] = useState<OptimizationResults | null>(null);
    // Add a flag to prevent analysis fetch during optimization apply
    const [isApplyingOptimization, setIsApplyingOptimization] = useState<boolean>(false);

    // Add a ref to track the last analysis timestamp to prevent immediate re-analysis
    const lastAnalysisRef = useRef<number>(0);
    const ANALYSIS_COOLDOWN = 10000; // 10 seconds cooldown after applying optimizations

    // Create a stable reference for resume data to prevent unnecessary re-renders
    // Use a ref to freeze the data during optimization to prevent analysis triggers
    const frozenResumeDataRef = useRef<string>('');

    const jobRoles = ['Software Engineer', 'Frontend Developer', 'Backend Developer', 'DevOps Engineer', 'Data Scientist', 'Product Manager'];

    // Dynamic optimization stats based on analysis
    const optimizationStats: OptimizationStat[] = [
        {
            label: "ATS Score",
            value: atsAnalysis ? `${atsAnalysis.score}%` : "...",
            change: atsAnalysis ? (atsAnalysis.score > 80 ? "+High" : atsAnalysis.score > 60 ? "+Med" : "+Low") : "...",
            icon: Target,
            color: "text-green-600",
            bgColor: "bg-green-50"
        },
        {
            label: "Keywords",
            value: keywordAnalysis ? `${keywordAnalysis.present.length}` : "...",
            change: keywordAnalysis ? `${keywordAnalysis.missing.length} missing` : "...",
            icon: Zap,
            color: "text-blue-600",
            bgColor: "bg-blue-50"
        },
        {
            label: "Impact",
            value: resumeData.experience?.filter(exp => exp.achievements?.some(ach => /\d/.test(ach || ''))).length.toString() || "0",
            change: "+Quantified",
            icon: TrendingUp,
            color: "text-purple-600",
            bgColor: "bg-purple-50"
        },
        {
            label: "Rating",
            value: atsAnalysis ? (atsAnalysis.score > 90 ? "A+" : atsAnalysis.score > 80 ? "A" : atsAnalysis.score > 70 ? "B+" : "B") : "...",
            change: "Good",
            icon: Star,
            color: "text-yellow-600",
            bgColor: "bg-yellow-50"
        }
    ];

    useEffect(() => {
        if (job?.optimizedJson) setResumeData(job.optimizedJson as ResumeData);
        if (job?.selectedTemplate && job.selectedTemplate !== selectedTemplate) setSelectedTemplate(job.selectedTemplate);
    }, [job]);

    // Create stable resume data string reference
    const resumeDataString = isApplyingOptimization
        ? frozenResumeDataRef.current
        : JSON.stringify(resumeData);

    // Update frozen ref when not applying optimization
    if (!isApplyingOptimization && frozenResumeDataRef.current !== JSON.stringify(resumeData)) {
        frozenResumeDataRef.current = JSON.stringify(resumeData);
    }

    const targetRole = job?.targetRole;

    // Fetch analysis data with proper debouncing and dependency management
    useEffect(() => {
        // Skip if no target role, applying optimization, or missing required data
        if (!targetRole || isApplyingOptimization) {
            console.log('Analysis skipped - no target role or applying optimization');
            return;
        }

        // Skip if we have pending optimization results (user hasn't applied them yet)
        if (optimizationResults) {
            console.log('Analysis skipped - optimization results pending application');
            return;
        }

        // Skip if we're in cooldown period after applying optimizations
        const now = Date.now();
        const timeSinceLastAnalysis = now - lastAnalysisRef.current;
        if (timeSinceLastAnalysis < ANALYSIS_COOLDOWN) {
            console.log(`Analysis skipped - in cooldown period (${Math.round((ANALYSIS_COOLDOWN - timeSinceLastAnalysis) / 1000)}s remaining)`);
            return;
        }

        // Only fetch on analysis tab or when data is missing
        if (activeTab !== 'analysis' && keywordAnalysis && atsAnalysis && marketAnalysis) {
            console.log('Analysis skipped - not on analysis tab and data exists');
            return;
        }

        // Check if resume data has actually changed to prevent unnecessary calls
        const currentDataString = JSON.stringify(resumeData);
        if (frozenResumeDataRef.current === currentDataString && keywordAnalysis && atsAnalysis) {
            console.log('Analysis skipped - resume data unchanged and analysis exists');
            return;
        }

        const fetchAnalysisData = async () => {
            console.log('=== STARTING ANALYSIS FETCH ===');
            console.log('Resume data being analyzed:', JSON.parse(resumeDataString));

            setIsAnalysisLoading(true);
            try {
                const response = await fetch('/api/analysis', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        resumeData: JSON.parse(resumeDataString),
                        targetRole
                    })
                });

                if (response.ok) {
                    const data = await response.json();
                    console.log('Analysis results received:', data);

                    setKeywordAnalysis(data.keywordAnalysis);
                    setAtsAnalysis(data.atsAnalysis);
                    setMarketAnalysis(data.competitorAnalysis);
                    lastAnalysisRef.current = Date.now(); // Update timestamp

                    console.log('=== ANALYSIS FETCH COMPLETE ===');
                } else {
                    console.error('Failed to fetch analysis data', response.status);
                }
            } catch (error) {
                console.error('Error fetching analysis data:', error);
            } finally {
                setIsAnalysisLoading(false);
            }
        };

        // Increased debounce time to prevent rapid-fire requests
        console.log('Analysis scheduled to run in 3 seconds...');
        const timeoutId = setTimeout(fetchAnalysisData, 3000);
        return () => clearTimeout(timeoutId);
    }, [resumeDataString, targetRole, activeTab, isApplyingOptimization]);

    const handleDataUpdate = async (newResumeDataState: ResumeData) => {
        if (!job?.id) return;

        console.log('Updating resume data in database:', newResumeDataState);

        setHasUnsavedChanges(true);
        try {
            const res = await fetch(`/api/jobs/${job.id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ optimizedJson: newResumeDataState })
            });

            if (!res.ok) {
                const errorText = await res.text();
                throw new Error(`Failed to save updated data: ${res.status} - ${errorText}`);
            }

            const updatedJob = await res.json();
            setJob(updatedJob);
            setHasUnsavedChanges(false);

            console.log('Database update successful');
            console.log('Saved data verification:', updatedJob.optimizedJson);

        } catch (error) {
            console.error('Error saving updated resume:', error);
            throw error; // Re-throw to handle in calling function
        }
    };

    const updateResumeData = <K extends keyof ResumeData>(section: K, data: ResumeData[K]) => {
        const newResumeData = { ...resumeData, [section]: data };
        setResumeData(newResumeData);
        if (isAutoSave) handleDataUpdate(newResumeData);
        else setHasUnsavedChanges(true);
    };

    const handleTemplateChange = async (newTemplateKey: string) => {
        setSelectedTemplate(newTemplateKey);
        const updatedJob = { ...job, selectedTemplate: newTemplateKey };
        setJob(updatedJob);

        // Update template in database
        if (job?.id) {
            try {
                await fetch(`/api/jobs/${job.id}`, {
                    method: 'PATCH',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ selectedTemplate: newTemplateKey })
                });
            } catch (error) {
                console.error('Error updating template:', error);
            }
        }
    };

    const saveChanges = () => handleDataUpdate(resumeData);

    const handleOptimizeResume = async () => {
        setIsOptimizing(true);
        setOptimizationResults(null);

        try {
            const response = await fetch('/api/analysis-optimise', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    resumeData,
                    targetRole: job?.targetRole
                })
            });

            if (response.ok) {
                const results = await response.json();
                setOptimizationResults(results);
                setActiveTab('analysis');
            } else {
                throw new Error('Optimization failed');
            }
        } catch (error) {
            console.error('Error optimizing resume:', error);
            // Fallback to mock data for demo
            await new Promise(resolve => setTimeout(resolve, 2000));
            const results: OptimizationResults = {
                summary: {
                    before: resumeData.summary || '',
                    after: `AI-optimized summary for a high-performing ${job?.targetRole?.toLowerCase() || 'professional'}...`,
                    improvements: ['Added metrics', 'Improved clarity']
                },
                experience: {
                    optimized: resumeData.experience?.map(exp => ({
                        ...exp,
                        achievements: exp.achievements?.map(ach => `${ach}, boosting performance by 25%.`)
                    })) || [],
                    improvements: ['Added quantified results']
                },
                keywords: {
                    added: ['microservices', 'cloud architecture', 'CI/CD'],
                    score: 92
                },
                overallScore: 92
            };
            setOptimizationResults(results);
            setActiveTab('analysis');
        } finally {
            setIsOptimizing(false);
        }
    };

    // Apply optimizations function with proper state management
    const applyOptimizations = async () => {
        if (!optimizationResults) return;

        console.log('=== STARTING OPTIMIZATION APPLICATION ===');
        setIsApplyingOptimization(true);

        try {
            console.log('Original resume data:', resumeData);

            // Create the optimized resume data
            const optimizedResumeData = {
                ...resumeData,
                summary: optimizationResults.summary.after,
                experience: optimizationResults.experience.optimized
            };

            console.log('Optimized resume data to apply:', optimizedResumeData);

            // Update local state immediately and freeze the data
            setResumeData(optimizedResumeData);

            // Freeze the resume data string to prevent analysis triggers
            const optimizedDataString = JSON.stringify(optimizedResumeData);
            frozenResumeDataRef.current = optimizedDataString;

            // Save to database and wait for completion
            await handleDataUpdate(optimizedResumeData);

            console.log('Data successfully saved to database');

            // Clear optimization results after applying
            setOptimizationResults(null);

            // Clear existing analysis to prevent stale data
            setKeywordAnalysis(null);
            setAtsAnalysis(null);
            setMarketAnalysis(null);

            // Set timestamp to prevent immediate analysis
            lastAnalysisRef.current = Date.now();

            console.log('=== OPTIMIZATION APPLICATION COMPLETE ===');

            // Keep the flag active much longer to prevent premature analysis
            setTimeout(() => {
                console.log('=== RELEASING OPTIMIZATION LOCK ===');
                setIsApplyingOptimization(false);
                // Ensure frozen ref still has the optimized data
                if (frozenResumeDataRef.current !== optimizedDataString) {
                    frozenResumeDataRef.current = optimizedDataString;
                }
            }, 8000); // 8 seconds

        } catch (error) {
            console.error('Error applying optimizations:', error);
            // Reset the flag on error
            setIsApplyingOptimization(false);
        }
    };

    const handleTargetRoleChange = async (newRole: string) => {
        // Prevent unnecessary calls if role hasn't changed
        if (job?.targetRole === newRole) return;

        const updatedJob = { ...job, targetRole: newRole };
        setJob(updatedJob);

        // Clear current analysis when role changes
        setKeywordAnalysis(null);
        setAtsAnalysis(null);
        setMarketAnalysis(null);

        // Update job in database
        if (job?.id) {
            try {
                await fetch(`/api/jobs/${job.id}`, {
                    method: 'PATCH',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ targetRole: newRole })
                });
            } catch (error) {
                console.error('Error updating target role:', error);
            }
        }
    };

    const sectionIcons: { [key in EditableSection]: LucideIcon } = {
        personalInfo: User,
        summary: FileText,
        experience: Briefcase,
        projects: Star,
        skills: Award,
        education: GraduationCap
    };

    const sectionTitles: { [key in EditableSection]: string } = {
        personalInfo: 'Personal Information',
        summary: 'Professional Summary',
        experience: 'Work Experience',
        projects: 'Projects',
        skills: 'Skills & Technologies',
        education: 'Education'
    };

    const renderSectionEditor = () => {
        switch (editingSection) {
            case 'personalInfo': return <PersonalInfoEditor data={resumeData.personalInfo} onUpdate={(data) => updateResumeData('personalInfo', data)} />;
            case 'summary': return <SummaryEditor data={resumeData.summary} onUpdate={(data) => updateResumeData('summary', data)} targetRole={job?.targetRole} />;
            case 'experience': return <ExperienceEditor data={resumeData.experience} onUpdate={(data) => updateResumeData('experience', data)} targetRole={job?.targetRole} />;
            case 'projects': return <ProjectsEditor data={resumeData.projects} onUpdate={(data) => updateResumeData('projects', data)} targetRole={job?.targetRole} />;
            case 'skills': return <SkillsEditor data={resumeData.skills} onUpdate={(data) => updateResumeData('skills', data)} fullResumeData={resumeData} targetRole={job?.targetRole} />;
            case 'education': return <EducationEditor data={resumeData.education} onUpdate={(data) => updateResumeData('education', data)} />;
            default: return null;
        }
    };

    return (
        <Section>
            <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as ActiveTab)} className="w-full">
                <div className="relative z-10 border-b bg-white">
                    <div className="max-w-full mx-auto px-4 py-4">
                        <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
                            <div className="flex items-center gap-4">
                                <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                                    <Sparkles className="h-6 w-6 text-blue-600" />
                                    Resume Workbench
                                </h1>
                                <div className="flex items-center gap-2 mt-1">
                                    <Badge variant={hasUnsavedChanges ? "destructive" : "secondary"}>
                                        {hasUnsavedChanges ? "Unsaved Changes" : "All Saved"}
                                    </Badge>
                                    <Badge variant="outline" className="flex items-center gap-1">
                                        {isAutoSave ? <Unlock className="h-3 w-3" /> : <Lock className="h-3 w-3" />}
                                        Auto-save {isAutoSave ? 'ON' : 'OFF'}
                                    </Badge>
                                    {job?.optimizedJson && (
                                        <Badge variant="outline" className="flex items-center gap-1">
                                            <Sparkles className="h-3 w-3" />AI Optimized
                                        </Badge>
                                    )}
                                    {isApplyingOptimization && (
                                        <Badge variant="outline" className="flex items-center gap-1">
                                            <RefreshCw className="h-3 w-3 animate-spin" />Applying...
                                        </Badge>
                                    )}
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <Button variant="outline" size="sm" onClick={() => router.push("/")}>
                                    <Home />
                                    Go To Home
                                </Button>
                                <Button variant="outline" size="sm" onClick={() => setIsAutoSave(!isAutoSave)}>
                                    <Lock className="h-4 w-4 mr-2" />Auto-save
                                </Button>
                                <Button variant="outline" size="sm" onClick={saveChanges} disabled={!hasUnsavedChanges}>
                                    <Save className="h-4 w-4 mr-2" />Save
                                </Button>
                                <DownloadButton resumeData={resumeData as any} templateKey={selectedTemplate} />
                                <Button variant="default" size="sm" onClick={() => router.push('/dashboard')}>
                                    <LayoutDashboard className="h-4 w-4 mr-2" />Dashboard
                                </Button>
                            </div>
                        </div>
                        <div className="mt-4">
                            <TabsList className="grid w-full grid-cols-3 bg-white shadow-sm border max-w-md">
                                <TabsTrigger value="editor" className="flex items-center gap-2">
                                    <Edit className="h-4 w-4" />Editor
                                </TabsTrigger>
                                <TabsTrigger value="analysis" className="flex items-center gap-2">
                                    <BarChart3 className="h-4 w-4" />Analysis
                                </TabsTrigger>
                                <TabsTrigger value="templates" className="flex items-center gap-2">
                                    <File className="h-4 w-4" />Templates
                                </TabsTrigger>
                            </TabsList>
                        </div>
                    </div>
                </div>

                <div className="py-6">
                    <TabsContent value="editor" className="mt-0">
                        <div className="grid grid-cols-12 gap-6 relative px-4">
                            <div className={`transition-all duration-300 ease-in-out ${isSidebarCollapsed ? 'col-span-1' : 'col-span-2'}`}>
                                <Card>
                                    <CardHeader className="pb-3 flex flex-row items-center justify-between space-y-0">
                                        <CardTitle className={`text-sm font-semibold uppercase ${isSidebarCollapsed ? 'hidden' : ''}`}>
                                            Sections
                                        </CardTitle>
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
                                            className="p-1 h-6 w-6"
                                        >
                                            {isSidebarCollapsed ? <ChevronRight className="h-3 w-3" /> : <ChevronLeft className="h-3 w-3" />}
                                        </Button>
                                    </CardHeader>
                                    <CardContent className="p-0">
                                        <nav className="space-y-1">
                                            {(Object.keys(sectionIcons) as EditableSection[]).map((section) => {
                                                const IconComponent = sectionIcons[section];
                                                return (
                                                    <button
                                                        key={section}
                                                        onClick={() => setEditingSection(section)}
                                                        className={`w-full flex items-center gap-3 px-4 py-3 text-left text-sm font-medium transition-all ${editingSection === section
                                                            ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-500'
                                                            : 'text-gray-600 border-transparent hover:text-gray-900'
                                                            }`}
                                                        title={isSidebarCollapsed ? sectionTitles[section] : undefined}
                                                    >
                                                        <IconComponent className={`h-4 w-4 ${editingSection === section ? 'text-blue-600' : 'text-gray-400'
                                                            }`} />
                                                        {!isSidebarCollapsed && sectionTitles[section]}
                                                    </button>
                                                );
                                            })}
                                        </nav>
                                    </CardContent>
                                </Card>
                            </div>
                            <div className="col-span-4">{renderSectionEditor()}</div>
                            <div className={`transition-all duration-300 ease-in-out ${isSidebarCollapsed ? 'col-span-7' : 'col-span-6'}`}>
                                <ResumePreview

                                    resumeData={resumeData as any}
                                    onEditSection={(section) => setEditingSection(section as EditableSection)}
                                    selectedTemplate={selectedTemplate}
                                />
                            </div>
                        </div>
                    </TabsContent>

                    <TabsContent value="analysis" className="mt-0">
                        <div className="grid gap-6 grid-cols-1 lg:grid-cols-4 px-4">
                            <div className="lg:col-span-3">
                                <OptimizationPanel
                                    resumeData={resumeData as OptResumeData}
                                    onUpdate={updateResumeData}
                                    optimizationStats={optimizationStats}
                                    targetRole={job?.targetRole || 'Software Engineer'}
                                    jobRoles={jobRoles}
                                    onTargetRoleChange={handleTargetRoleChange}
                                    keywordAnalysis={isAnalysisLoading ? null : keywordAnalysis}
                                    atsAnalysis={isAnalysisLoading ? null : atsAnalysis}
                                    marketAnalysis={isAnalysisLoading ? null : marketAnalysis}
                                    isOptimizing={isOptimizing}
                                    optimizationResults={optimizationResults}
                                    onOptimize={handleOptimizeResume}
                                    onApplyOptimizations={applyOptimizations}
                                />
                            </div>
                            <div className="lg:col-span-1">
                                <WorkbenchSidebar
                                    resumeData={resumeData as any}
                                    onEditSection={(section) => {
                                        setEditingSection(section as EditableSection);
                                        setActiveTab('editor');
                                    }}
                                    optimizationStats={optimizationStats}
                                    atsAnalysis={isAnalysisLoading ? null : atsAnalysis}
                                    keywordAnalysis={isAnalysisLoading ? null : keywordAnalysis}
                                    isApplyingOptimization={isApplyingOptimization}
                                />
                            </div>
                        </div>
                    </TabsContent>

                    <TabsContent value="templates" className="mt-0">
                        {resumeData && job.id && (
                            <TemplateSelection
                                jobId={job.id}
                                resumeData={resumeData as any}
                                currentTemplate={selectedTemplate}
                                onTemplateChange={handleTemplateChange}
                            />
                        )}
                    </TabsContent>
                </div>
            </Tabs>

            {hasUnsavedChanges && !isAutoSave && (
                <div className="fixed bottom-4 right-4 z-50">
                    <Card className="bg-yellow-50 border-yellow-200">
                        <CardContent className="p-4 flex items-center gap-3">
                            <RefreshCw className="h-4 w-4 text-yellow-600" />
                            You have unsaved changes
                            <Button size="sm" onClick={saveChanges}>Save Now</Button>
                        </CardContent>
                    </Card>
                </div>
            )}
        </Section>
    );
}