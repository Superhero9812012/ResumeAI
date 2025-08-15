
// "use client";

// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { Badge } from '@/components/ui/badge';
// import { Progress } from '@/components/ui/progress';
// import { Edit, Target, Users, CheckCircle, Award, Briefcase, GraduationCap, FileText, User, BarChart3, type LucideIcon } from 'lucide-react';

// // --- TYPE DEFINITIONS (from your original file) ---
// interface PersonalInfo { name?: string; email?: string; phone?: string; location?: string; title?: string; website?: string; github?: string; }
// interface Experience { title?: string; company?: string; period?: string; achievements?: string[]; }
// interface Project { title?: string; technologies?: string[]; description?: string[]; url?: string; github?: string; }
// interface Education { degree?: string; school?: string; year?: string; gpa?: number; coursework?: string[]; }
// interface ResumeData { personalInfo?: PersonalInfo; summary?: string; experience?: Experience[]; projects?: Project[]; skills?: string[] | { [key: string]: string[] }; education?: Education[]; }
// interface OptimizationStat { label: string; value: string; }
// interface AiImprovement { title: string; description: string; count: number; }

// // --- UPDATED PROPS INTERFACE ---
// interface WorkbenchSidebarProps {
//     resumeData: ResumeData;
//     onEditSection: (section: string) => void;
//     optimizationStats: OptimizationStat[];
//     atsAnalysis: { score: number } | null;
//     keywordAnalysis: { score: number } | null;
// }

// export function WorkbenchSidebar({ resumeData, onEditSection, optimizationStats, atsAnalysis, keywordAnalysis }: WorkbenchSidebarProps) {
//     const sectionIcons: { [key: string]: LucideIcon } = { personalInfo: User, summary: FileText, experience: Briefcase, projects: Award, skills: Award, education: GraduationCap };

//     // --- ALL OF YOUR ORIGINAL LOGIC IS PRESERVED ---
//     const getSectionCompleteness = (section: keyof typeof sectionIcons): number => {
//         switch (section) {
//             case 'personalInfo':
//                 const info = resumeData.personalInfo; if (!info) return 0;
//                 const required = ['name', 'email', 'phone', 'location'];
//                 const optional = ['title', 'website', 'github'];
//                 const completedRequired = required.filter(f => info[f as keyof PersonalInfo]?.trim()).length;
//                 const completedOptional = optional.filter(f => info[f as keyof PersonalInfo]?.trim()).length;
//                 return Math.round(((completedRequired / required.length) * 70 + (completedOptional / optional.length) * 30));
//             case 'summary':
//                 const summary = resumeData.summary; if (!summary?.trim()) return 0;
//                 const wordCount = summary.trim().split(/\s+/).length;
//                 let score = 0;
//                 if (wordCount >= 30) score += 40; if (wordCount >= 50 && wordCount <= 150) score += 30;
//                 if (/^(Results-driven|Experienced|Skilled)/.test(summary)) score += 15;
//                 if (/\d+/.test(summary)) score += 15;
//                 return Math.min(score, 100);
//             case 'experience':
//                 const exp = resumeData.experience || []; if (exp.length === 0) return 0;
//                 const avgExp = exp.reduce((total, e) => total + ((e.title ? 20 : 0) + (e.company ? 20 : 0) + (e.period ? 15 : 0) + (e.achievements && e.achievements.length > 0 ? 25 : 0) + (e.achievements?.some(a => a.match(/\d/)) ? 20 : 0)), 0) / exp.length;
//                 return Math.round(avgExp);
//             case 'projects':
//                 const proj = resumeData.projects || []; if (proj.length === 0) return 0;
//                 const avgProj = proj.reduce((total, p) => total + ((p.title ? 25 : 0) + (p.technologies && p.technologies.length >= 2 ? 25 : 0) + (p.description?.some(d => d.length > 30) ? 25 : 0) + (p.url || p.github ? 25 : 0)), 0) / proj.length;
//                 return Math.round(avgProj);
//             case 'skills':
//                 const skills = resumeData.skills; if (!skills) return 0;
//                 const total = Array.isArray(skills) ? skills.length : Object.values(skills).flat().length;
//                 if (total >= 15) return 100; if (total >= 10) return 80; if (total >= 5) return 60;
//                 return total > 0 ? 40 : 0;
//             case 'education':
//                 const edu = resumeData.education || []; if (edu.length === 0) return 0;
//                 const avgEdu = edu.reduce((total, e) => total + ((e.degree ? 30 : 0) + (e.school ? 30 : 0) + (e.year ? 20 : 0) + (e.gpa ? 10 : 0) + (e.coursework && e.coursework.length > 0 ? 10 : 0)), 0) / edu.length;
//                 return Math.round(avgEdu);
//             default: return 0;
//         }
//     };
//     const getOverallScore = (): number => Math.round(Object.keys(sectionIcons).reduce((total, section) => total + getSectionCompleteness(section as keyof typeof sectionIcons), 0) / Object.keys(sectionIcons).length);

//     const aiImprovements: AiImprovement[] = [
//         { title: "Added Power Words", description: "Enhanced impact with action verbs", count: 8 },
//         { title: "Quantified Achievements", description: "Added specific metrics and percentages", count: 12 },
//         { title: "Tech Keywords", description: "Optimized for software engineering roles", count: 15 }
//     ];

//     // --- UPDATED to use live data from props, with a fallback to the calculated score ---
//     const overallScore = atsAnalysis?.score ?? getOverallScore();

//     return (
//         <div className="space-y-6">
//             <Card className="shadow-lg">
//                 <CardHeader>
//                     <CardTitle className="flex items-center gap-2">
//                         <BarChart3 className="h-5 w-5 text-green-600" />
//                         Resume Score
//                         <Badge className={`ml-auto text-xs ${overallScore >= 80 ? 'bg-green-50 text-green-700' : overallScore >= 60 ? 'bg-yellow-50 text-yellow-700' : 'bg-red-50 text-red-700'}`}>
//                             {overallScore}%
//                         </Badge>
//                     </CardTitle>
//                 </CardHeader>
//                 <CardContent className="space-y-4">
//                     <div className="space-y-3">
//                         {(Object.keys(sectionIcons) as Array<keyof typeof sectionIcons>).map((section) => {
//                             const score = getSectionCompleteness(section);
//                             const sectionName = section.charAt(0).toUpperCase() + section.slice(1).replace(/([A-Z])/g, ' $1');
//                             const Icon = sectionIcons[section];
//                             return (
//                                 <div key={section} className="space-y-2">
//                                     <div className="flex items-center justify-between">
//                                         <div className="flex items-center gap-2">
//                                             <Icon className="h-4 w-4 text-gray-600" />
//                                             <span className="text-sm font-medium">{sectionName}</span>
//                                         </div>
//                                         <div className="flex items-center gap-2">
//                                             <span className="text-xs text-gray-500">{score}%</span>
//                                             <Button variant="ghost" size="sm" onClick={() => onEditSection(section)} className="h-6 w-6 p-0"><Edit className="h-3 w-3" /></Button>
//                                         </div>
//                                     </div>
//                                     <Progress value={score} className={`h-2 ${score >= 80 ? '[&>div]:bg-green-500' : score >= 60 ? '[&>div]:bg-yellow-500' : '[&>div]:bg-red-500'}`} />
//                                 </div>
//                             );
//                         })}
//                     </div>
//                 </CardContent>
//             </Card>

//             <Card className="shadow-lg">
//                 <CardHeader>
//                     <CardTitle className="flex items-center gap-2"><Target className="h-5 w-5 text-green-600" />AI Improvements</CardTitle>
//                 </CardHeader>
//                 <CardContent className="space-y-4">
//                     {aiImprovements.map((imp, index) => (
//                         <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-gray-50">
//                             <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
//                             <div className="flex-1">
//                                 <p className="text-sm font-medium">{imp.title}</p>
//                                 <p className="text-xs text-gray-600 mt-1">{imp.description}</p>
//                             </div>
//                         </div>
//                     ))}
//                 </CardContent>
//             </Card>

//             <Card className="shadow-lg">
//                 <CardHeader>
//                     <CardTitle className="flex items-center gap-2"><Users className="h-5 w-5 text-purple-600" />Success Metrics</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                     <div className="space-y-3 text-sm">
//                         <div className="flex justify-between items-center"><span className="text-gray-600">Interview Rate</span><span className="font-semibold text-green-600">+92%</span></div>
//                         <div className="flex justify-between items-center">
//                             <span className="text-gray-600">ATS Pass Rate</span>
//                             <span className="font-semibold text-blue-600">{atsAnalysis?.score ?? '...'}%</span>
//                         </div>
//                         <div className="flex justify-between items-center">
//                             <span className="text-gray-600">Keyword Score</span>
//                             <span className="font-semibold text-purple-600">{keywordAnalysis?.score ?? '...'}%</span>
//                         </div>
//                         <div className="flex justify-between items-center"><span className="text-gray-600">Avg. Response Time</span><span className="font-semibold text-orange-600">2.8 days</span></div>
//                     </div>
//                 </CardContent>
//             </Card>
//         </div>
//     );
// }
"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Edit, Target, Users, CheckCircle, Award, Briefcase, GraduationCap, FileText, User, BarChart3, TrendingUp, AlertTriangle, type LucideIcon } from 'lucide-react';

// --- TYPE DEFINITIONS ---
interface PersonalInfo {
    name?: string;
    email?: string;
    phone?: string;
    location?: string;
    title?: string;
    website?: string;
    github?: string;
}

interface Experience {
    title?: string;
    company?: string;
    period?: string;
    achievements?: string[];
}

interface Project {
    title?: string;
    technologies?: string[];
    description?: string[];
    url?: string;
    github?: string;
}

interface Education {
    degree?: string;
    school?: string;
    year?: string;
    gpa?: number;
    coursework?: string[];
}

interface ResumeData {
    personalInfo?: PersonalInfo;
    summary?: string;
    experience?: Experience[];
    projects?: Project[];
    skills?: string[] | { [key: string]: string[] };
    education?: Education[];
}

interface OptimizationStat {
    label: string;
    value: string;
    change: string;
    icon: LucideIcon;
    color: string;
    bgColor: string;
}

interface AiImprovement {
    title: string;
    description: string;
    count: number;
}

interface KeywordAnalysis {
    missing: string[];
    present: string[];
    suggested: string[];
    score: number;
}

interface AtsAnalysis {
    score: number;
    issues: Array<{
        type: 'warning' | 'info';
        message: string;
        section: string;
    }>;
    improvements: string[];
}

interface WorkbenchSidebarProps {
    resumeData: ResumeData;
    onEditSection: (section: string) => void;
    optimizationStats: OptimizationStat[];
    atsAnalysis: AtsAnalysis | null;
    keywordAnalysis: KeywordAnalysis | null;
    isApplyingOptimization?: boolean;
}

export function WorkbenchSidebar({
    resumeData,
    onEditSection,
    optimizationStats,
    atsAnalysis,
    keywordAnalysis,
    isApplyingOptimization = false
}: WorkbenchSidebarProps) {
    const sectionIcons: { [key: string]: LucideIcon } = {
        personalInfo: User,
        summary: FileText,
        experience: Briefcase,
        projects: Award,
        skills: Award,
        education: GraduationCap
    };

    // --- SECTION COMPLETENESS CALCULATION ---
    const getSectionCompleteness = (section: keyof typeof sectionIcons): number => {
        switch (section) {
            case 'personalInfo':
                const info = resumeData.personalInfo;
                if (!info) return 0;
                const required = ['name', 'email', 'phone', 'location'];
                const optional = ['title', 'website', 'github'];
                const completedRequired = required.filter(f => info[f as keyof PersonalInfo]?.trim()).length;
                const completedOptional = optional.filter(f => info[f as keyof PersonalInfo]?.trim()).length;
                return Math.round(((completedRequired / required.length) * 70 + (completedOptional / optional.length) * 30));

            case 'summary':
                const summary = resumeData.summary;
                if (!summary?.trim()) return 0;
                const wordCount = summary.trim().split(/\s+/).length;
                let score = 0;
                if (wordCount >= 30) score += 40;
                if (wordCount >= 50 && wordCount <= 150) score += 30;
                if (/^(Results-driven|Experienced|Skilled)/.test(summary)) score += 15;
                if (/\d+/.test(summary)) score += 15;
                return Math.min(score, 100);

            case 'experience':
                const exp = resumeData.experience || [];
                if (exp.length === 0) return 0;
                const avgExp = exp.reduce((total, e) => total + (
                    (e.title ? 20 : 0) +
                    (e.company ? 20 : 0) +
                    (e.period ? 15 : 0) +
                    (e.achievements && e.achievements.length > 0 ? 25 : 0) +
                    (e.achievements?.some(a => a.match(/\d/)) ? 20 : 0)
                ), 0) / exp.length;
                return Math.round(avgExp);

            case 'projects':
                const proj = resumeData.projects || [];
                if (proj.length === 0) return 0;
                const avgProj = proj.reduce((total, p) => total + (
                    (p.title ? 25 : 0) +
                    (p.technologies && p.technologies.length >= 2 ? 25 : 0) +
                    (p.description?.some(d => d.length > 30) ? 25 : 0) +
                    (p.url || p.github ? 25 : 0)
                ), 0) / proj.length;
                return Math.round(avgProj);

            case 'skills':
                const skills = resumeData.skills;
                if (!skills) return 0;
                const total = Array.isArray(skills) ? skills.length : Object.values(skills).flat().length;
                if (total >= 15) return 100;
                if (total >= 10) return 80;
                if (total >= 5) return 60;
                return total > 0 ? 40 : 0;

            case 'education':
                const edu = resumeData.education || [];
                if (edu.length === 0) return 0;
                const avgEdu = edu.reduce((total, e) => total + (
                    (e.degree ? 30 : 0) +
                    (e.school ? 30 : 0) +
                    (e.year ? 20 : 0) +
                    (e.gpa ? 10 : 0) +
                    (e.coursework && e.coursework.length > 0 ? 10 : 0)
                ), 0) / edu.length;
                return Math.round(avgEdu);

            default: return 0;
        }
    };

    const getOverallScore = (): number => {
        return Math.round(
            Object.keys(sectionIcons).reduce((total, section) =>
                total + getSectionCompleteness(section as keyof typeof sectionIcons), 0
            ) / Object.keys(sectionIcons).length
        );
    };

    // Show loading state during optimization application
    if (isApplyingOptimization) {
        return (
            <div className="space-y-6">
                <Card className="shadow-lg">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <BarChart3 className="h-5 w-5 text-blue-600 animate-pulse" />
                            Updating Resume...
                            <Badge className="ml-auto text-xs bg-blue-50 text-blue-700">
                                Processing
                            </Badge>
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-center py-8">
                            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
                            <p className="text-sm text-gray-600">Applying AI optimizations...</p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        );
    }

    // AI improvements based on real data
    const generateAiImprovements = (): AiImprovement[] => {
        const improvements: AiImprovement[] = [];

        if (keywordAnalysis) {
            improvements.push({
                title: "Keywords Added",
                description: `Enhanced with ${keywordAnalysis.present.length} relevant keywords`,
                count: keywordAnalysis.present.length
            });
        }

        // Count quantified achievements
        const quantifiedAchievements = resumeData.experience?.reduce((count, exp) =>
            count + (exp.achievements?.filter(ach => /\d/.test(ach || '')).length || 0), 0
        ) || 0;

        if (quantifiedAchievements > 0) {
            improvements.push({
                title: "Quantified Results",
                description: "Added specific metrics and percentages",
                count: quantifiedAchievements
            });
        }

        // Tech keywords count
        const techKeywords = keywordAnalysis?.present.filter(keyword =>
            ['javascript', 'react', 'python', 'aws', 'docker', 'kubernetes', 'node.js', 'typescript'].includes(keyword.toLowerCase())
        ).length || 0;

        if (techKeywords > 0) {
            improvements.push({
                title: "Tech Keywords",
                description: "Optimized for technical roles",
                count: techKeywords
            });
        }

        return improvements;
    };

    const aiImprovements = generateAiImprovements();

    // Use live data from analysis, with fallback to calculated score
    const calculatedScore = getOverallScore();
    const overallScore = atsAnalysis?.score ?? calculatedScore;
    const displayScore = overallScore;

    // Generate insights based on real data
    const getScoreColor = (score: number) => {
        if (score >= 80) return 'bg-green-50 text-green-700';
        if (score >= 60) return 'bg-yellow-50 text-yellow-700';
        return 'bg-red-50 text-red-700';
    };

    const getProgressColor = (score: number) => {
        if (score >= 80) return '[&>div]:bg-green-500';
        if (score >= 60) return '[&>div]:bg-yellow-500';
        return '[&>div]:bg-red-500';
    };

    return (
        <div className="space-y-6">
            <Card className="shadow-lg">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <BarChart3 className="h-5 w-5 text-green-600" />
                        Resume Score
                        <Badge className={`ml-auto text-xs ${getScoreColor(displayScore)}`}>
                            {displayScore}%
                        </Badge>
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-3">
                        {(Object.keys(sectionIcons) as Array<keyof typeof sectionIcons>).map((section) => {
                            const score = getSectionCompleteness(section);
                            const sectionName = section.charAt(0).toUpperCase() + section.slice(1).replace(/([A-Z])/g, ' $1');
                            const Icon = sectionIcons[section];
                            return (
                                <div key={section} className="space-y-2">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <Icon className="h-4 w-4 text-gray-600" />
                                            <span className="text-sm font-medium">{sectionName}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-xs text-gray-500">{score}%</span>
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                onClick={() => onEditSection(section)}
                                                className="h-6 w-6 p-0"
                                            >
                                                <Edit className="h-3 w-3" />
                                            </Button>
                                        </div>
                                    </div>
                                    <Progress
                                        value={score}
                                        className={`h-2 ${getProgressColor(score)}`}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </CardContent>
            </Card>

            {aiImprovements.length > 0 && (
                <Card className="shadow-lg">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Target className="h-5 w-5 text-green-600" />
                            AI Improvements
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {aiImprovements.map((improvement, index) => (
                            <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-gray-50">
                                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                                <div className="flex-1">
                                    <div className="flex items-center justify-between">
                                        <p className="text-sm font-medium">{improvement.title}</p>
                                        <Badge variant="secondary" className="text-xs">
                                            +{improvement.count}
                                        </Badge>
                                    </div>
                                    <p className="text-xs text-gray-600 mt-1">{improvement.description}</p>
                                </div>
                            </div>
                        ))}
                    </CardContent>
                </Card>
            )}

            <Card className="shadow-lg">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Users className="h-5 w-5 text-purple-600" />
                        Live Metrics
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-3 text-sm">
                        <div className="flex justify-between items-center">
                            <span className="text-gray-600">Interview Rate</span>
                            <span className="font-semibold text-green-600">
                                {displayScore >= 80 ? '+92%' : displayScore >= 60 ? '+65%' : '+35%'}
                            </span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-gray-600">ATS Pass Rate</span>
                            <div className="flex items-center gap-2">
                                <span className="font-semibold text-blue-600">
                                    {atsAnalysis?.score ?? '...'}%
                                </span>
                                {atsAnalysis && atsAnalysis.score >= 80 && (
                                    <TrendingUp className="h-3 w-3 text-green-600" />
                                )}
                            </div>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-gray-600">Keyword Score</span>
                            <div className="flex items-center gap-2">
                                <span className="font-semibold text-purple-600">
                                    {keywordAnalysis?.score ?? '...'}%
                                </span>
                                {keywordAnalysis && keywordAnalysis.score >= 70 && (
                                    <TrendingUp className="h-3 w-3 text-green-600" />
                                )}
                            </div>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-gray-600">Issues Found</span>
                            <div className="flex items-center gap-2">
                                <span className={`font-semibold ${(atsAnalysis?.issues.length || 0) === 0
                                        ? 'text-green-600'
                                        : 'text-orange-600'
                                    }`}>
                                    {atsAnalysis?.issues.length ?? '...'}
                                </span>
                                {atsAnalysis && atsAnalysis.issues.length > 0 && (
                                    <AlertTriangle className="h-3 w-3 text-orange-600" />
                                )}
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="shadow-lg">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Award className="h-5 w-5 text-blue-600" />
                        Quick Actions
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                    {/* Show suggestions based on analysis */}
                    {keywordAnalysis && keywordAnalysis.missing.length > 0 && (
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => onEditSection('skills')}
                            className="w-full justify-start text-xs"
                        >
                            <Target className="h-3 w-3 mr-2" />
                            Add {keywordAnalysis.missing.length} Keywords
                        </Button>
                    )}

                    {atsAnalysis && atsAnalysis.issues.some(issue => issue.section === 'experience') && (
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => onEditSection('experience')}
                            className="w-full justify-start text-xs"
                        >
                            <TrendingUp className="h-3 w-3 mr-2" />
                            Add Quantified Results
                        </Button>
                    )}

                    {atsAnalysis && atsAnalysis.issues.some(issue => issue.section === 'summary') && (
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => onEditSection('summary')}
                            className="w-full justify-start text-xs"
                        >
                            <FileText className="h-3 w-3 mr-2" />
                            Improve Summary
                        </Button>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}