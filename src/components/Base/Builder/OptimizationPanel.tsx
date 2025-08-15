// // // // // // // // import { useState } from 'react';
// // // // // // // // import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// // // // // // // // import { Button } from '@/components/ui/button';
// // // // // // // // import { Badge } from '@/components/ui/badge';
// // // // // // // // import { Progress } from '@/components/ui/progress';
// // // // // // // // import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
// // // // // // // // import { Input } from '@/components/ui/input';
// // // // // // // // import { Label } from '@/components/ui/label';
// // // // // // // // import { Textarea } from '@/components/ui/textarea';
// // // // // // // // import {
// // // // // // // //     BarChart3,
// // // // // // // //     Target,
// // // // // // // //     Zap,
// // // // // // // //     TrendingUp,
// // // // // // // //     Star,
// // // // // // // //     CheckCircle,
// // // // // // // //     AlertTriangle,
// // // // // // // //     Search,
// // // // // // // //     Filter,
// // // // // // // //     Sparkles,
// // // // // // // //     RefreshCw,
// // // // // // // //     Download,
// // // // // // // //     Eye,
// // // // // // // //     Lightbulb,
// // // // // // // //     Award,
// // // // // // // //     Users,
// // // // // // // //     Clock,
// // // // // // // //     ArrowRight,
// // // // // // // //     Plus,
// // // // // // // //     X,
// // // // // // // //     ChevronDown,
// // // // // // // //     ChevronUp
// // // // // // // // } from 'lucide-react';

// // // // // // // // export function OptimizationPanel({ resumeData, onUpdate }) {
// // // // // // // //     const [activeTab, setActiveTab] = useState('analysis');
// // // // // // // //     const [targetRole, setTargetRole] = useState('Software Engineer');
// // // // // // // //     const [isOptimizing, setIsOptimizing] = useState(false);
// // // // // // // //     const [optimizationResults, setOptimizationResults] = useState(null);
// // // // // // // //     const [expandedSections, setExpandedSections] = useState(new Set(['keywords']));

// // // // // // // //     const jobRoles = [
// // // // // // // //         'Software Engineer',
// // // // // // // //         'Frontend Developer',
// // // // // // // //         'Backend Developer',
// // // // // // // //         'Full Stack Developer',
// // // // // // // //         'DevOps Engineer',
// // // // // // // //         'Data Scientist',
// // // // // // // //         'Product Manager',
// // // // // // // //         'UI/UX Designer',
// // // // // // // //         'Mobile Developer',
// // // // // // // //         'Cloud Engineer'
// // // // // // // //     ];

// // // // // // // //     const keywordAnalysis = {
// // // // // // // //         'Software Engineer': {
// // // // // // // //             missing: ['microservices', 'cloud architecture', 'containerization', 'CI/CD pipelines', 'agile methodology'],
// // // // // // // //             present: ['JavaScript', 'React.js', 'Node.js', 'PostgreSQL', 'Azure', 'Docker', 'Git'],
// // // // // // // //             suggested: ['Kubernetes', 'AWS', 'MongoDB', 'GraphQL', 'Jest', 'TypeScript'],
// // // // // // // //             score: 75
// // // // // // // //         },
// // // // // // // //         'Frontend Developer': {
// // // // // // // //             missing: ['responsive design', 'accessibility', 'webpack', 'performance optimization', 'cross-browser compatibility'],
// // // // // // // //             present: ['React.js', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS'],
// // // // // // // //             suggested: ['Vue.js', 'Angular', 'SASS', 'Figma', 'Jest', 'Cypress'],
// // // // // // // //             score: 68
// // // // // // // //         },
// // // // // // // //         'DevOps Engineer': {
// // // // // // // //             missing: ['infrastructure as code', 'monitoring', 'terraform', 'ansible', 'jenkins'],
// // // // // // // //             present: ['Docker', 'Azure', 'CI/CD', 'Git', 'Linux'],
// // // // // // // //             suggested: ['Kubernetes', 'Prometheus', 'Grafana', 'AWS', 'Helm'],
// // // // // // // //             score: 62
// // // // // // // //         }
// // // // // // // //     };

// // // // // // // //     const atsAnalysis = {
// // // // // // // //         score: 85,
// // // // // // // //         issues: [
// // // // // // // //             { type: 'warning', message: 'Missing industry keywords for target role', section: 'skills' },
// // // // // // // //             { type: 'info', message: 'Consider adding more quantified achievements', section: 'experience' },
// // // // // // // //             { type: 'warning', message: 'Education section could include more relevant coursework', section: 'education' }
// // // // // // // //         ],
// // // // // // // //         improvements: [
// // // // // // // //             'Add 5-7 more technical keywords',
// // // // // // // //             'Include 3-4 more quantified achievements',
// // // // // // // //             'Optimize section headers for ATS parsing',
// // // // // // // //             'Add relevant certifications if available'
// // // // // // // //         ]
// // // // // // // //     };

// // // // // // // //     const competitorAnalysis = {
// // // // // // // //         averageExperience: '3.2 years',
// // // // // // // //         commonSkills: ['React.js', 'Node.js', 'JavaScript', 'Python', 'AWS', 'Docker'],
// // // // // // // //         standoutFeatures: ['Full-stack expertise', 'CI/CD implementation', 'Performance optimization'],
// // // // // // // //         suggestions: [
// // // // // // // //             'Highlight your unique combination of frontend and backend skills',
// // // // // // // //             'Emphasize your Azure experience (less common than AWS)',
// // // // // // // //             'Showcase your healthcare project experience'
// // // // // // // //         ]
// // // // // // // //     };

// // // // // // // //     const handleOptimization = async () => {
// // // // // // // //         setIsOptimizing(true);

// // // // // // // //         // Simulate AI optimization process
// // // // // // // //         await new Promise(resolve => setTimeout(resolve, 3000));

// // // // // // // //         const results = {
// // // // // // // //             summary: {
// // // // // // // //                 before: resumeData.summary,
// // // // // // // //                 after: `Results-driven Full-Stack Software Engineer with 2+ years of experience specializing in building high-performance, scalable web applications using modern technologies. Proven track record of implementing CI/CD pipelines, optimizing database performance by 35%, and delivering cloud-native solutions on Azure. Expert in React.js, Node.js, and PostgreSQL with a passion for solving complex business challenges through innovative technology solutions.`,
// // // // // // // //                 improvements: ['Added quantified metrics', 'Included more action verbs', 'Enhanced technical keywords']
// // // // // // // //             },
// // // // // // // //             experience: {
// // // // // // // //                 optimized: resumeData.experience?.map(exp => ({
// // // // // // // //                     ...exp,
// // // // // // // //                     achievements: exp.achievements?.map(achievement => {
// // // // // // // //                         if (achievement.includes('developed') && !achievement.match(/\d+%/)) {
// // // // // // // //                             return achievement + ', resulting in 25% performance improvement';
// // // // // // // //                         }
// // // // // // // //                         if (achievement.includes('implemented') && !achievement.includes('reducing')) {
// // // // // // // //                             return achievement + ', reducing deployment time by 40%';
// // // // // // // //                         }
// // // // // // // //                         return achievement;
// // // // // // // //                     })
// // // // // // // //                 })) || [],
// // // // // // // //                 improvements: ['Added quantified results', 'Enhanced impact statements', 'Included technical metrics']
// // // // // // // //             },
// // // // // // // //             keywords: {
// // // // // // // //                 added: ['microservices', 'cloud architecture', 'performance optimization', 'agile methodology'],
// // // // // // // //                 score: 92
// // // // // // // //             },
// // // // // // // //             overallScore: 92
// // // // // // // //         };

// // // // // // // //         setOptimizationResults(results);
// // // // // // // //         setIsOptimizing(false);
// // // // // // // //     };

// // // // // // // //     const applyOptimizations = () => {
// // // // // // // //         if (optimizationResults) {
// // // // // // // //             onUpdate('summary', optimizationResults.summary.after);
// // // // // // // //             if (optimizationResults.experience.optimized) {
// // // // // // // //                 onUpdate('experience', optimizationResults.experience.optimized);
// // // // // // // //             }
// // // // // // // //         }
// // // // // // // //     };

// // // // // // // //     const toggleSection = (section) => {
// // // // // // // //         const newExpanded = new Set(expandedSections);
// // // // // // // //         if (newExpanded.has(section)) {
// // // // // // // //             newExpanded.delete(section);
// // // // // // // //         } else {
// // // // // // // //             newExpanded.add(section);
// // // // // // // //         }
// // // // // // // //         setExpandedSections(newExpanded);
// // // // // // // //     };

// // // // // // // //     const currentKeywords = keywordAnalysis[targetRole] || keywordAnalysis['Software Engineer'];

// // // // // // // //     return (
// // // // // // // //         <div className="space-y-6">
// // // // // // // //             {/* Header */}
// // // // // // // //             <Card>
// // // // // // // //                 <CardHeader>
// // // // // // // //                     <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
// // // // // // // //                         <div>
// // // // // // // //                             <CardTitle className="flex items-center gap-2">
// // // // // // // //                                 <BarChart3 className="h-5 w-5 text-blue-600" />
// // // // // // // //                                 Resume Optimization Center
// // // // // // // //                             </CardTitle>
// // // // // // // //                             <p className="text-sm text-gray-600 mt-1">
// // // // // // // //                                 Analyze and optimize your resume for maximum impact
// // // // // // // //                             </p>
// // // // // // // //                         </div>
// // // // // // // //                         <div className="flex items-center gap-2">
// // // // // // // //                             <Label className="text-sm font-medium">Target Role:</Label>
// // // // // // // //                             <select
// // // // // // // //                                 value={targetRole}
// // // // // // // //                                 onChange={(e) => setTargetRole(e.target.value)}
// // // // // // // //                                 className="px-3 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
// // // // // // // //                             >
// // // // // // // //                                 {jobRoles.map(role => (
// // // // // // // //                                     <option key={role} value={role}>{role}</option>
// // // // // // // //                                 ))}
// // // // // // // //                             </select>
// // // // // // // //                         </div>
// // // // // // // //                     </div>
// // // // // // // //                 </CardHeader>
// // // // // // // //             </Card>

// // // // // // // //             <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
// // // // // // // //                 <TabsList className="grid w-full grid-cols-4 bg-white shadow-sm border">
// // // // // // // //                     <TabsTrigger value="analysis" className="flex items-center gap-2">
// // // // // // // //                         <Search className="h-4 w-4" />
// // // // // // // //                         Analysis
// // // // // // // //                     </TabsTrigger>
// // // // // // // //                     <TabsTrigger value="keywords" className="flex items-center gap-2">
// // // // // // // //                         <Target className="h-4 w-4" />
// // // // // // // //                         Keywords
// // // // // // // //                     </TabsTrigger>
// // // // // // // //                     <TabsTrigger value="ats" className="flex items-center gap-2">
// // // // // // // //                         <CheckCircle className="h-4 w-4" />
// // // // // // // //                         ATS Check
// // // // // // // //                     </TabsTrigger>
// // // // // // // //                     <TabsTrigger value="optimize" className="flex items-center gap-2">
// // // // // // // //                         <Sparkles className="h-4 w-4" />
// // // // // // // //                         AI Optimize
// // // // // // // //                     </TabsTrigger>
// // // // // // // //                 </TabsList>

// // // // // // // //                 {/* Analysis Tab */}
// // // // // // // //                 <TabsContent value="analysis" className="mt-6 space-y-6">
// // // // // // // //                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
// // // // // // // //                         {/* Overall Score */}
// // // // // // // //                         <Card>
// // // // // // // //                             <CardHeader>
// // // // // // // //                                 <CardTitle className="flex items-center gap-2">
// // // // // // // //                                     <Award className="h-5 w-5 text-yellow-600" />
// // // // // // // //                                     Overall Resume Score
// // // // // // // //                                 </CardTitle>
// // // // // // // //                             </CardHeader>
// // // // // // // //                             <CardContent>
// // // // // // // //                                 <div className="text-center">
// // // // // // // //                                     <div className="text-4xl font-bold text-blue-600 mb-2">85%</div>
// // // // // // // //                                     <p className="text-sm text-gray-600 mb-4">Good - Room for improvement</p>
// // // // // // // //                                     <Progress value={85} className="mb-4" />
// // // // // // // //                                     <div className="grid grid-cols-2 gap-4 text-sm">
// // // // // // // //                                         <div>
// // // // // // // //                                             <div className="font-semibold text-green-600">Strengths</div>
// // // // // // // //                                             <ul className="text-gray-600 text-xs mt-1">
// // // // // // // //                                                 <li>• Strong technical skills</li>
// // // // // // // //                                                 <li>• Relevant experience</li>
// // // // // // // //                                                 <li>• Clear formatting</li>
// // // // // // // //                                             </ul>
// // // // // // // //                                         </div>
// // // // // // // //                                         <div>
// // // // // // // //                                             <div className="font-semibold text-orange-600">Areas to Improve</div>
// // // // // // // //                                             <ul className="text-gray-600 text-xs mt-1">
// // // // // // // //                                                 <li>• More keywords needed</li>
// // // // // // // //                                                 <li>• Add quantified results</li>
// // // // // // // //                                                 <li>• Expand skills section</li>
// // // // // // // //                                             </ul>
// // // // // // // //                                         </div>
// // // // // // // //                                     </div>
// // // // // // // //                                 </div>
// // // // // // // //                             </CardContent>
// // // // // // // //                         </Card>

// // // // // // // //                         {/* Competitor Analysis */}
// // // // // // // //                         <Card>
// // // // // // // //                             <CardHeader>
// // // // // // // //                                 <CardTitle className="flex items-center gap-2">
// // // // // // // //                                     <Users className="h-5 w-5 text-purple-600" />
// // // // // // // //                                     Market Analysis
// // // // // // // //                                 </CardTitle>
// // // // // // // //                             </CardHeader>
// // // // // // // //                             <CardContent className="space-y-4">
// // // // // // // //                                 <div className="flex justify-between items-center">
// // // // // // // //                                     <span className="text-sm text-gray-600">Your Experience</span>
// // // // // // // //                                     <span className="font-semibold">2+ years</span>
// // // // // // // //                                 </div>
// // // // // // // //                                 <div className="flex justify-between items-center">
// // // // // // // //                                     <span className="text-sm text-gray-600">Market Average</span>
// // // // // // // //                                     <span className="font-semibold">{competitorAnalysis.averageExperience}</span>
// // // // // // // //                                 </div>
// // // // // // // //                                 <div className="pt-3 border-t">
// // // // // // // //                                     <h4 className="font-semibold text-sm mb-2">Your Unique Advantages:</h4>
// // // // // // // //                                     <ul className="space-y-1">
// // // // // // // //                                         {competitorAnalysis.standoutFeatures.map((feature, index) => (
// // // // // // // //                                             <li key={index} className="flex items-center gap-2 text-sm">
// // // // // // // //                                                 <CheckCircle className="h-3 w-3 text-green-600" />
// // // // // // // //                                                 {feature}
// // // // // // // //                                             </li>
// // // // // // // //                                         ))}
// // // // // // // //                                     </ul>
// // // // // // // //                                 </div>
// // // // // // // //                             </CardContent>
// // // // // // // //                         </Card>
// // // // // // // //                     </div>

// // // // // // // //                     {/* Detailed Insights */}
// // // // // // // //                     <Card>
// // // // // // // //                         <CardHeader>
// // // // // // // //                             <CardTitle className="flex items-center gap-2">
// // // // // // // //                                 <Lightbulb className="h-5 w-5 text-yellow-600" />
// // // // // // // //                                 Detailed Insights
// // // // // // // //                             </CardTitle>
// // // // // // // //                         </CardHeader>
// // // // // // // //                         <CardContent>
// // // // // // // //                             <div className="space-y-4">
// // // // // // // //                                 {competitorAnalysis.suggestions.map((suggestion, index) => (
// // // // // // // //                                     <div key={index} className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg">
// // // // // // // //                                         <TrendingUp className="h-4 w-4 text-yellow-600 mt-0.5 flex-shrink-0" />
// // // // // // // //                                         <span className="text-sm">{suggestion}</span>
// // // // // // // //                                     </div>
// // // // // // // //                                 ))}
// // // // // // // //                             </div>
// // // // // // // //                         </CardContent>
// // // // // // // //                     </Card>
// // // // // // // //                 </TabsContent>

// // // // // // // //                 {/* Keywords Tab */}
// // // // // // // //                 <TabsContent value="keywords" className="mt-6 space-y-6">
// // // // // // // //                     <Card>
// // // // // // // //                         <CardHeader>
// // // // // // // //                             <CardTitle className="flex items-center gap-2">
// // // // // // // //                                 <Target className="h-5 w-5 text-blue-600" />
// // // // // // // //                                 Keyword Analysis for {targetRole}
// // // // // // // //                                 <Badge variant="outline" className="ml-auto">
// // // // // // // //                                     Score: {currentKeywords.score}%
// // // // // // // //                                 </Badge>
// // // // // // // //                             </CardTitle>
// // // // // // // //                         </CardHeader>
// // // // // // // //                         <CardContent className="space-y-6">
// // // // // // // //                             {/* Missing Keywords */}
// // // // // // // //                             <div>
// // // // // // // //                                 <button
// // // // // // // //                                     onClick={() => toggleSection('missing')}
// // // // // // // //                                     className="flex items-center justify-between w-full text-left"
// // // // // // // //                                 >
// // // // // // // //                                     <h4 className="font-semibold text-red-600 flex items-center gap-2">
// // // // // // // //                                         <AlertTriangle className="h-4 w-4" />
// // // // // // // //                                         Missing Critical Keywords ({currentKeywords.missing.length})
// // // // // // // //                                     </h4>
// // // // // // // //                                     {expandedSections.has('missing') ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
// // // // // // // //                                 </button>
// // // // // // // //                                 {expandedSections.has('missing') && (
// // // // // // // //                                     <div className="mt-3 flex flex-wrap gap-2">
// // // // // // // //                                         {currentKeywords.missing.map((keyword, index) => (
// // // // // // // //                                             <Badge key={index} variant="outline" className="bg-red-50 text-red-700 border-red-200">
// // // // // // // //                                                 {keyword}
// // // // // // // //                                                 <Button
// // // // // // // //                                                     variant="ghost"
// // // // // // // //                                                     size="sm"
// // // // // // // //                                                     className="ml-2 h-4 w-4 p-0 hover:bg-red-100"
// // // // // // // //                                                 >
// // // // // // // //                                                     <Plus className="h-3 w-3" />
// // // // // // // //                                                 </Button>
// // // // // // // //                                             </Badge>
// // // // // // // //                                         ))}
// // // // // // // //                                     </div>
// // // // // // // //                                 )}
// // // // // // // //                             </div>

// // // // // // // //                             {/* Present Keywords */}
// // // // // // // //                             <div>
// // // // // // // //                                 <button
// // // // // // // //                                     onClick={() => toggleSection('present')}
// // // // // // // //                                     className="flex items-center justify-between w-full text-left"
// // // // // // // //                                 >
// // // // // // // //                                     <h4 className="font-semibold text-green-600 flex items-center gap-2">
// // // // // // // //                                         <CheckCircle className="h-4 w-4" />
// // // // // // // //                                         Present Keywords ({currentKeywords.present.length})
// // // // // // // //                                     </h4>
// // // // // // // //                                     {expandedSections.has('present') ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
// // // // // // // //                                 </button>
// // // // // // // //                                 {expandedSections.has('present') && (
// // // // // // // //                                     <div className="mt-3 flex flex-wrap gap-2">
// // // // // // // //                                         {currentKeywords.present.map((keyword, index) => (
// // // // // // // //                                             <Badge key={index} variant="outline" className="bg-green-50 text-green-700 border-green-200">
// // // // // // // //                                                 {keyword}
// // // // // // // //                                                 <CheckCircle className="h-3 w-3 ml-1" />
// // // // // // // //                                             </Badge>
// // // // // // // //                                         ))}
// // // // // // // //                                     </div>
// // // // // // // //                                 )}
// // // // // // // //                             </div>

// // // // // // // //                             {/* Suggested Keywords */}
// // // // // // // //                             <div>
// // // // // // // //                                 <button
// // // // // // // //                                     onClick={() => toggleSection('suggested')}
// // // // // // // //                                     className="flex items-center justify-between w-full text-left"
// // // // // // // //                                 >
// // // // // // // //                                     <h4 className="font-semibold text-blue-600 flex items-center gap-2">
// // // // // // // //                                         <Star className="h-4 w-4" />
// // // // // // // //                                         Suggested Keywords ({currentKeywords.suggested.length})
// // // // // // // //                                     </h4>
// // // // // // // //                                     {expandedSections.has('suggested') ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
// // // // // // // //                                 </button>
// // // // // // // //                                 {expandedSections.has('suggested') && (
// // // // // // // //                                     <div className="mt-3 flex flex-wrap gap-2">
// // // // // // // //                                         {currentKeywords.suggested.map((keyword, index) => (
// // // // // // // //                                             <Badge key={index} variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
// // // // // // // //                                                 {keyword}
// // // // // // // //                                                 <Button
// // // // // // // //                                                     variant="ghost"
// // // // // // // //                                                     size="sm"
// // // // // // // //                                                     className="ml-2 h-4 w-4 p-0 hover:bg-blue-100"
// // // // // // // //                                                 >
// // // // // // // //                                                     <Plus className="h-3 w-3" />
// // // // // // // //                                                 </Button>
// // // // // // // //                                             </Badge>
// // // // // // // //                                         ))}
// // // // // // // //                                     </div>
// // // // // // // //                                 )}
// // // // // // // //                             </div>
// // // // // // // //                         </CardContent>
// // // // // // // //                     </Card>
// // // // // // // //                 </TabsContent>

// // // // // // // //                 {/* ATS Check Tab */}
// // // // // // // //                 <TabsContent value="ats" className="mt-6 space-y-6">
// // // // // // // //                     <Card>
// // // // // // // //                         <CardHeader>
// // // // // // // //                             <CardTitle className="flex items-center gap-2">
// // // // // // // //                                 <CheckCircle className="h-5 w-5 text-green-600" />
// // // // // // // //                                 ATS Compatibility Analysis
// // // // // // // //                                 <Badge className="ml-auto bg-green-50 text-green-700">
// // // // // // // //                                     {atsAnalysis.score}% Compatible
// // // // // // // //                                 </Badge>
// // // // // // // //                             </CardTitle>
// // // // // // // //                         </CardHeader>
// // // // // // // //                         <CardContent className="space-y-6">
// // // // // // // //                             <Progress value={atsAnalysis.score} className="h-3" />

// // // // // // // //                             {/* Issues */}
// // // // // // // //                             <div>
// // // // // // // //                                 <h4 className="font-semibold mb-3">Issues Found</h4>
// // // // // // // //                                 <div className="space-y-3">
// // // // // // // //                                     {atsAnalysis.issues.map((issue, index) => (
// // // // // // // //                                         <div key={index} className={`flex items-start gap-3 p-3 rounded-lg ${issue.type === 'warning' ? 'bg-yellow-50 border border-yellow-200' : 'bg-blue-50 border border-blue-200'
// // // // // // // //                                             }`}>
// // // // // // // //                                             {issue.type === 'warning' ?
// // // // // // // //                                                 <AlertTriangle className="h-4 w-4 text-yellow-600 mt-0.5 flex-shrink-0" /> :
// // // // // // // //                                                 <TrendingUp className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
// // // // // // // //                                             }
// // // // // // // //                                             <div>
// // // // // // // //                                                 <p className="text-sm font-medium">{issue.message}</p>
// // // // // // // //                                                 <p className="text-xs text-gray-600 mt-1">Section: {issue.section}</p>
// // // // // // // //                                             </div>
// // // // // // // //                                         </div>
// // // // // // // //                                     ))}
// // // // // // // //                                 </div>
// // // // // // // //                             </div>

// // // // // // // //                             {/* Improvements */}
// // // // // // // //                             <div>
// // // // // // // //                                 <h4 className="font-semibold mb-3">Recommended Improvements</h4>
// // // // // // // //                                 <div className="space-y-2">
// // // // // // // //                                     {atsAnalysis.improvements.map((improvement, index) => (
// // // // // // // //                                         <div key={index} className="flex items-center gap-3">
// // // // // // // //                                             <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-xs font-bold">
// // // // // // // //                                                 {index + 1}
// // // // // // // //                                             </div>
// // // // // // // //                                             <span className="text-sm">{improvement}</span>
// // // // // // // //                                         </div>
// // // // // // // //                                     ))}
// // // // // // // //                                 </div>
// // // // // // // //                             </div>
// // // // // // // //                         </CardContent>
// // // // // // // //                     </Card>
// // // // // // // //                 </TabsContent>

// // // // // // // //                 {/* AI Optimize Tab */}
// // // // // // // //                 <TabsContent value="optimize" className="mt-6 space-y-6">
// // // // // // // //                     <Card>
// // // // // // // //                         <CardHeader>
// // // // // // // //                             <CardTitle className="flex items-center gap-2">
// // // // // // // //                                 <Sparkles className="h-5 w-5 text-purple-600" />
// // // // // // // //                                 AI-Powered Optimization
// // // // // // // //                             </CardTitle>
// // // // // // // //                         </CardHeader>
// // // // // // // //                         <CardContent className="space-y-6">
// // // // // // // //                             {!optimizationResults ? (
// // // // // // // //                                 <div className="text-center py-12">
// // // // // // // //                                     <Sparkles className="h-16 w-16 text-purple-400 mx-auto mb-4" />
// // // // // // // //                                     <h3 className="text-lg font-semibold text-gray-900 mb-2">
// // // // // // // //                                         Ready to Optimize Your Resume?
// // // // // // // //                                     </h3>
// // // // // // // //                                     <p className="text-gray-600 mb-6 max-w-md mx-auto">
// // // // // // // //                                         Our AI will analyze your resume and provide enhanced content with better keywords,
// // // // // // // //                                         quantified achievements, and improved formatting.
// // // // // // // //                                     </p>
// // // // // // // //                                     <Button
// // // // // // // //                                         onClick={handleOptimization}
// // // // // // // //                                         disabled={isOptimizing}
// // // // // // // //                                         className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
// // // // // // // //                                     >
// // // // // // // //                                         {isOptimizing ? (
// // // // // // // //                                             <>
// // // // // // // //                                                 <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
// // // // // // // //                                                 Optimizing...
// // // // // // // //                                             </>
// // // // // // // //                                         ) : (
// // // // // // // //                                             <>
// // // // // // // //                                                 <Sparkles className="h-4 w-4 mr-2" />
// // // // // // // //                                                 Start AI Optimization
// // // // // // // //                                             </>
// // // // // // // //                                         )}
// // // // // // // //                                     </Button>
// // // // // // // //                                 </div>
// // // // // // // //                             ) : (
// // // // // // // //                                 <div className="space-y-6">
// // // // // // // //                                     {/* Results Summary */}
// // // // // // // //                                     <div className="bg-green-50 border border-green-200 rounded-lg p-4">
// // // // // // // //                                         <div className="flex items-center gap-2 mb-2">
// // // // // // // //                                             <CheckCircle className="h-5 w-5 text-green-600" />
// // // // // // // //                                             <h4 className="font-semibold text-green-900">Optimization Complete!</h4>
// // // // // // // //                                         </div>
// // // // // // // //                                         <p className="text-sm text-green-800">
// // // // // // // //                                             Your resume score improved from 85% to {optimizationResults.overallScore}%
// // // // // // // //                                         </p>
// // // // // // // //                                     </div>

// // // // // // // //                                     {/* Summary Optimization */}
// // // // // // // //                                     <Card>
// // // // // // // //                                         <CardHeader>
// // // // // // // //                                             <CardTitle className="text-base">Professional Summary</CardTitle>
// // // // // // // //                                         </CardHeader>
// // // // // // // //                                         <CardContent className="space-y-4">
// // // // // // // //                                             <div>
// // // // // // // //                                                 <Label className="text-sm font-medium text-gray-600">Before:</Label>
// // // // // // // //                                                 <div className="mt-1 p-3 bg-gray-50 rounded border text-sm">
// // // // // // // //                                                     {optimizationResults.summary.before}
// // // // // // // //                                                 </div>
// // // // // // // //                                             </div>
// // // // // // // //                                             <div>
// // // // // // // //                                                 <Label className="text-sm font-medium text-green-600">After (AI Enhanced):</Label>
// // // // // // // //                                                 <div className="mt-1 p-3 bg-green-50 rounded border border-green-200 text-sm">
// // // // // // // //                                                     {optimizationResults.summary.after}
// // // // // // // //                                                 </div>
// // // // // // // //                                             </div>
// // // // // // // //                                             <div className="flex flex-wrap gap-2">
// // // // // // // //                                                 {optimizationResults.summary.improvements.map((improvement, index) => (
// // // // // // // //                                                     <Badge key={index} variant="outline" className="text-xs bg-green-50 text-green-700">
// // // // // // // //                                                         {improvement}
// // // // // // // //                                                     </Badge>
// // // // // // // //                                                 ))}
// // // // // // // //                                             </div>
// // // // // // // //                                         </CardContent>
// // // // // // // //                                     </Card>

// // // // // // // //                                     {/* Keywords Added */}
// // // // // // // //                                     <Card>
// // // // // // // //                                         <CardHeader>
// // // // // // // //                                             <CardTitle className="text-base">Keywords Added</CardTitle>
// // // // // // // //                                         </CardHeader>
// // // // // // // //                                         <CardContent>
// // // // // // // //                                             <div className="flex flex-wrap gap-2">
// // // // // // // //                                                 {optimizationResults.keywords.added.map((keyword, index) => (
// // // // // // // //                                                     <Badge key={index} variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
// // // // // // // //                                                         + {keyword}
// // // // // // // //                                                     </Badge>
// // // // // // // //                                                 ))}
// // // // // // // //                                             </div>
// // // // // // // //                                         </CardContent>
// // // // // // // //                                     </Card>

// // // // // // // //                                     {/* Action Buttons */}
// // // // // // // //                                     <div className="flex gap-3">
// // // // // // // //                                         <Button onClick={applyOptimizations} className="flex-1">
// // // // // // // //                                             <CheckCircle className="h-4 w-4 mr-2" />
// // // // // // // //                                             Apply All Changes
// // // // // // // //                                         </Button>
// // // // // // // //                                         <Button variant="outline" onClick={() => setOptimizationResults(null)}>
// // // // // // // //                                             <RefreshCw className="h-4 w-4 mr-2" />
// // // // // // // //                                             Try Again
// // // // // // // //                                         </Button>
// // // // // // // //                                     </div>
// // // // // // // //                                 </div>
// // // // // // // //                             )}
// // // // // // // //                         </CardContent>
// // // // // // // //                     </Card>
// // // // // // // //                 </TabsContent>
// // // // // // // //             </Tabs>
// // // // // // // //         </div>
// // // // // // // //     );
// // // // // // // // }



// // // import { useState, FC, SetStateAction, Dispatch } from 'react';
// // // import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// // // import { Button } from '@/components/ui/button';
// // // import { Badge } from '@/components/ui/badge';
// // // import { Progress } from '@/components/ui/progress';
// // // import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
// // // import { Input } from '@/components/ui/input';
// // // import { Label } from '@/components/ui/label';
// // // import { Textarea } from '@/components/ui/textarea';
// // // import {
// // //     BarChart3,
// // //     Target,
// // //     Zap,
// // //     TrendingUp,
// // //     Star,
// // //     CheckCircle,
// // //     AlertTriangle,
// // //     Search,
// // //     Filter,
// // //     Sparkles,
// // //     RefreshCw,
// // //     Download,
// // //     Eye,
// // //     Lightbulb,
// // //     Award,
// // //     Users,
// // //     Clock,
// // //     ArrowRight,
// // //     Plus,
// // //     X,
// // //     ChevronDown,
// // //     ChevronUp
// // // } from 'lucide-react';

// // // // Type Definitions

// // // interface Experience {
// // //     id: number;
// // //     title: string;
// // //     company: string;
// // //     location: string;
// // //     period: string;
// // //     achievements?: string[];
// // // }

// // // interface ResumeData {
// // //     summary?: string;
// // //     experience?: Experience[];
// // // }

// // // interface OptimizationPanelProps {
// // //     resumeData: ResumeData;
// // //     onUpdate: <K extends keyof ResumeData>(section: K, data: ResumeData[K]) => void;
// // // }

// // // type ActiveTab = 'analysis' | 'keywords' | 'ats' | 'optimize';
// // // type ExpandedSection = 'missing' | 'present' | 'suggested' | 'keywords';

// // // interface KeywordAnalysisData {
// // //     missing: string[];
// // //     present: string[];
// // //     suggested: string[];
// // //     score: number;
// // // }

// // // interface KeywordAnalysis {
// // //     [role: string]: KeywordAnalysisData;
// // // }

// // // interface AtsIssue {
// // //     type: 'warning' | 'info';
// // //     message: string;
// // //     section: string;
// // // }

// // // interface AtsAnalysis {
// // //     score: number;
// // //     issues: AtsIssue[];
// // //     improvements: string[];
// // // }

// // // interface CompetitorAnalysis {
// // //     averageExperience: string;
// // //     commonSkills: string[];
// // //     standoutFeatures: string[];
// // //     suggestions: string[];
// // // }

// // // interface OptimizationResultSummary {
// // //     before: string;
// // //     after: string;
// // //     improvements: string[];
// // // }

// // // interface OptimizationResultExperience {
// // //     optimized: Experience[];
// // //     improvements: string[];
// // // }

// // // interface OptimizationResultKeywords {
// // //     added: string[];
// // //     score: number;
// // // }

// // // interface OptimizationResults {
// // //     summary: OptimizationResultSummary;
// // //     experience: OptimizationResultExperience;
// // //     keywords: OptimizationResultKeywords;
// // //     overallScore: number;
// // // }


// // // export function OptimizationPanel({ resumeData, onUpdate, optimizationStats }: OptimizationPanelProps) {
// // //     const [activeTab, setActiveTab] = useState<ActiveTab>('analysis');
// // //     const [targetRole, setTargetRole] = useState<string>('Software Engineer');
// // //     const [isOptimizing, setIsOptimizing] = useState<boolean>(false);
// // //     const [optimizationResults, setOptimizationResults] = useState<OptimizationResults | null>(null);
// // //     const [expandedSections, setExpandedSections] = useState<Set<ExpandedSection>>(new Set(['keywords']));

// // //     const jobRoles: string[] = [
// // //         'Software Engineer',
// // //         'Frontend Developer',
// // //         'Backend Developer',
// // //         'Full Stack Developer',
// // //         'DevOps Engineer',
// // //         'Data Scientist',
// // //         'Product Manager',
// // //         'UI/UX Designer',
// // //         'Mobile Developer',
// // //         'Cloud Engineer'
// // //     ];

// // //     const keywordAnalysis: KeywordAnalysis = {
// // //         'Software Engineer': {
// // //             missing: ['microservices', 'cloud architecture', 'containerization', 'CI/CD pipelines', 'agile methodology'],
// // //             present: ['JavaScript', 'React.js', 'Node.js', 'PostgreSQL', 'Azure', 'Docker', 'Git'],
// // //             suggested: ['Kubernetes', 'AWS', 'MongoDB', 'GraphQL', 'Jest', 'TypeScript'],
// // //             score: 75
// // //         },
// // //         'Frontend Developer': {
// // //             missing: ['responsive design', 'accessibility', 'webpack', 'performance optimization', 'cross-browser compatibility'],
// // //             present: ['React.js', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS'],
// // //             suggested: ['Vue.js', 'Angular', 'SASS', 'Figma', 'Jest', 'Cypress'],
// // //             score: 68
// // //         },
// // //         'DevOps Engineer': {
// // //             missing: ['infrastructure as code', 'monitoring', 'terraform', 'ansible', 'jenkins'],
// // //             present: ['Docker', 'Azure', 'CI/CD', 'Git', 'Linux'],
// // //             suggested: ['Kubernetes', 'Prometheus', 'Grafana', 'AWS', 'Helm'],
// // //             score: 62
// // //         }
// // //     };

// // //     const atsAnalysis: AtsAnalysis = {
// // //         score: 85,
// // //         issues: [
// // //             { type: 'warning', message: 'Missing industry keywords for target role', section: 'skills' },
// // //             { type: 'info', message: 'Consider adding more quantified achievements', section: 'experience' },
// // //             { type: 'warning', message: 'Education section could include more relevant coursework', section: 'education' }
// // //         ],
// // //         improvements: [
// // //             'Add 5-7 more technical keywords',
// // //             'Include 3-4 more quantified achievements',
// // //             'Optimize section headers for ATS parsing',
// // //             'Add relevant certifications if available'
// // //         ]
// // //     };

// // //     const competitorAnalysis: CompetitorAnalysis = {
// // //         averageExperience: '3.2 years',
// // //         commonSkills: ['React.js', 'Node.js', 'JavaScript', 'Python', 'AWS', 'Docker'],
// // //         standoutFeatures: ['Full-stack expertise', 'CI/CD implementation', 'Performance optimization'],
// // //         suggestions: [
// // //             'Highlight your unique combination of frontend and backend skills',
// // //             'Emphasize your Azure experience (less common than AWS)',
// // //             'Showcase your healthcare project experience'
// // //         ]
// // //     };

// // //     const handleOptimization = async () => {
// // //         setIsOptimizing(true);

// // //         // Simulate AI optimization process
// // //         await new Promise(resolve => setTimeout(resolve, 3000));

// // //         const results: OptimizationResults = {
// // //             summary: {
// // //                 before: resumeData.summary || '',
// // //                 after: `Results-driven Full-Stack Software Engineer with 2+ years of experience specializing in building high-performance, scalable web applications using modern technologies. Proven track record of implementing CI/CD pipelines, optimizing database performance by 35%, and delivering cloud-native solutions on Azure. Expert in React.js, Node.js, and PostgreSQL with a passion for solving complex business challenges through innovative technology solutions.`,
// // //                 improvements: ['Added quantified metrics', 'Included more action verbs', 'Enhanced technical keywords']
// // //             },
// // //             experience: {
// // //                 optimized: resumeData.experience?.map(exp => ({
// // //                     ...exp,
// // //                     achievements: exp.achievements?.map(achievement => {
// // //                         if (achievement.includes('developed') && !achievement.match(/\d+%/)) {
// // //                             return achievement + ', resulting in 25% performance improvement';
// // //                         }
// // //                         if (achievement.includes('implemented') && !achievement.includes('reducing')) {
// // //                             return achievement + ', reducing deployment time by 40%';
// // //                         }
// // //                         return achievement;
// // //                     })
// // //                 })) || [],
// // //                 improvements: ['Added quantified results', 'Enhanced impact statements', 'Included technical metrics']
// // //             },
// // //             keywords: {
// // //                 added: ['microservices', 'cloud architecture', 'performance optimization', 'agile methodology'],
// // //                 score: 92
// // //             },
// // //             overallScore: 92
// // //         };

// // //         setOptimizationResults(results);
// // //         setIsOptimizing(false);
// // //     };

// // //     const applyOptimizations = () => {
// // //         if (optimizationResults) {
// // //             onUpdate('summary', optimizationResults.summary.after);
// // //             if (optimizationResults.experience.optimized) {
// // //                 onUpdate('experience', optimizationResults.experience.optimized);
// // //             }
// // //         }
// // //     };

// // //     const toggleSection = (section: ExpandedSection) => {
// // //         const newExpanded = new Set(expandedSections);
// // //         if (newExpanded.has(section)) {
// // //             newExpanded.delete(section);
// // //         } else {
// // //             newExpanded.add(section);
// // //         }
// // //         setExpandedSections(newExpanded);
// // //     };

// // //     const currentKeywords: KeywordAnalysisData = keywordAnalysis[targetRole] || keywordAnalysis['Software Engineer'];

// // //     return (
// // //         <div className="space-y-6">
// // //             {/* Header */}
// // //             <Card>
// // //                 <CardHeader>
// // //                     <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
// // //                         <div>
// // //                             <CardTitle className="flex items-center gap-2">
// // //                                 <BarChart3 className="h-5 w-5 text-blue-600" />
// // //                                 Resume Optimization Center
// // //                             </CardTitle>
// // //                             <p className="text-sm text-gray-600 mt-1">
// // //                                 Analyze and optimize your resume for maximum impact
// // //                             </p>
// // //                         </div>
// // //                         <div className="flex items-center gap-2">
// // //                             <Label className="text-sm font-medium">Target Role:</Label>
// // //                             <select
// // //                                 value={targetRole}
// // //                                 onChange={(e) => setTargetRole(e.target.value)}
// // //                                 className="px-3 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
// // //                             >
// // //                                 {jobRoles.map(role => (
// // //                                     <option key={role} value={role}>{role}</option>
// // //                                 ))}
// // //                             </select>
// // //                         </div>
// // //                     </div>
// // //                 </CardHeader>
// // //             </Card>

// // //             <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as ActiveTab)} className="w-full">
// // //                 <TabsList className="grid w-full grid-cols-3 bg-white shadow-sm border">
// // //                     <TabsTrigger value="analysis" className="flex items-center gap-2">
// // //                         <Search className="h-4 w-4" />
// // //                         Analysis
// // //                     </TabsTrigger>
// // //                     <TabsTrigger value="keywords" className="flex items-center gap-2">
// // //                         <Target className="h-4 w-4" />
// // //                         Keywords
// // //                     </TabsTrigger>
// // //                     <TabsTrigger value="ats" className="flex items-center gap-2">
// // //                         <CheckCircle className="h-4 w-4" />
// // //                         ATS Check
// // //                     </TabsTrigger>

// // //                 </TabsList>

// // //                 {/* Analysis Tab */}
// // //                 <TabsContent value="analysis" className="mt-6 space-y-6">
// // //                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
// // //                         {/* Overall Score */}
// // //                         <Card>
// // //                             <CardHeader>
// // //                                 <CardTitle className="flex items-center gap-2">
// // //                                     <Award className="h-5 w-5 text-yellow-600" />
// // //                                     Overall Resume Score
// // //                                 </CardTitle>
// // //                             </CardHeader>
// // //                             <CardContent>
// // //                                 <div className="text-center">
// // //                                     <div className="text-4xl font-bold text-blue-600 mb-2">85%</div>
// // //                                     <p className="text-sm text-gray-600 mb-4">Good - Room for improvement</p>
// // //                                     <Progress value={85} className="mb-4" />
// // //                                     <div className="grid grid-cols-2 gap-4 text-sm">
// // //                                         <div>
// // //                                             <div className="font-semibold text-green-600">Strengths</div>
// // //                                             <ul className="text-gray-600 text-xs mt-1">
// // //                                                 <li>• Strong technical skills</li>
// // //                                                 <li>• Relevant experience</li>
// // //                                                 <li>• Clear formatting</li>
// // //                                             </ul>
// // //                                         </div>
// // //                                         <div>
// // //                                             <div className="font-semibold text-orange-600">Areas to Improve</div>
// // //                                             <ul className="text-gray-600 text-xs mt-1">
// // //                                                 <li>• More keywords needed</li>
// // //                                                 <li>• Add quantified results</li>
// // //                                                 <li>• Expand skills section</li>
// // //                                             </ul>
// // //                                         </div>
// // //                                     </div>
// // //                                 </div>
// // //                             </CardContent>
// // //                         </Card>

// // //                         {/* Competitor Analysis */}
// // //                         <Card>
// // //                             <CardHeader>
// // //                                 <CardTitle className="flex items-center gap-2">
// // //                                     <Users className="h-5 w-5 text-purple-600" />
// // //                                     Market Analysis
// // //                                 </CardTitle>
// // //                             </CardHeader>
// // //                             <CardContent className="space-y-4">
// // //                                 <div className="flex justify-between items-center">
// // //                                     <span className="text-sm text-gray-600">Your Experience</span>
// // //                                     <span className="font-semibold">2+ years</span>
// // //                                 </div>
// // //                                 <div className="flex justify-between items-center">
// // //                                     <span className="text-sm text-gray-600">Market Average</span>
// // //                                     <span className="font-semibold">{competitorAnalysis.averageExperience}</span>
// // //                                 </div>
// // //                                 <div className="pt-3 border-t">
// // //                                     <h4 className="font-semibold text-sm mb-2">Your Unique Advantages:</h4>
// // //                                     <ul className="space-y-1">
// // //                                         {competitorAnalysis.standoutFeatures.map((feature, index) => (
// // //                                             <li key={index} className="flex items-center gap-2 text-sm">
// // //                                                 <CheckCircle className="h-3 w-3 text-green-600" />
// // //                                                 {feature}
// // //                                             </li>
// // //                                         ))}
// // //                                     </ul>
// // //                                 </div>
// // //                             </CardContent>
// // //                         </Card>
// // //                     </div>

// // //                     {/* Detailed Insights */}
// // //                     <Card>
// // //                         <CardHeader>
// // //                             <CardTitle className="flex items-center gap-2">
// // //                                 <Lightbulb className="h-5 w-5 text-yellow-600" />
// // //                                 Detailed Insights
// // //                             </CardTitle>
// // //                         </CardHeader>
// // //                         <CardContent>
// // //                             <div className="space-y-4">
// // //                                 {competitorAnalysis.suggestions.map((suggestion, index) => (
// // //                                     <div key={index} className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg">
// // //                                         <TrendingUp className="h-4 w-4 text-yellow-600 mt-0.5 flex-shrink-0" />
// // //                                         <span className="text-sm">{suggestion}</span>
// // //                                     </div>
// // //                                 ))}
// // //                             </div>
// // //                         </CardContent>
// // //                     </Card>
// // //                 </TabsContent>

// // //                 {/* Keywords Tab */}
// // //                 <TabsContent value="keywords" className="mt-6 space-y-6">
// // //                     <Card>
// // //                         <CardHeader>
// // //                             <CardTitle className="flex items-center gap-2">
// // //                                 <Target className="h-5 w-5 text-blue-600" />
// // //                                 Keyword Analysis for {targetRole}
// // //                                 <Badge variant="outline" className="ml-auto">
// // //                                     Score: {currentKeywords.score}%
// // //                                 </Badge>
// // //                             </CardTitle>
// // //                         </CardHeader>
// // //                         <CardContent className="space-y-6">
// // //                             {/* Missing Keywords */}
// // //                             <div>
// // //                                 <button
// // //                                     onClick={() => toggleSection('missing')}
// // //                                     className="flex items-center justify-between w-full text-left"
// // //                                 >
// // //                                     <h4 className="font-semibold text-red-600 flex items-center gap-2">
// // //                                         <AlertTriangle className="h-4 w-4" />
// // //                                         Missing Critical Keywords ({currentKeywords.missing.length})
// // //                                     </h4>
// // //                                     {expandedSections.has('missing') ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
// // //                                 </button>
// // //                                 {expandedSections.has('missing') && (
// // //                                     <div className="mt-3 flex flex-wrap gap-2">
// // //                                         {currentKeywords.missing.map((keyword, index) => (
// // //                                             <Badge key={index} variant="outline" className="bg-red-50 text-red-700 border-red-200">
// // //                                                 {keyword}
// // //                                                 <Button
// // //                                                     variant="ghost"
// // //                                                     size="sm"
// // //                                                     className="ml-2 h-4 w-4 p-0 hover:bg-red-100"
// // //                                                 >
// // //                                                     <Plus className="h-3 w-3" />
// // //                                                 </Button>
// // //                                             </Badge>
// // //                                         ))}
// // //                                     </div>
// // //                                 )}
// // //                             </div>

// // //                             {/* Present Keywords */}
// // //                             <div>
// // //                                 <button
// // //                                     onClick={() => toggleSection('present')}
// // //                                     className="flex items-center justify-between w-full text-left"
// // //                                 >
// // //                                     <h4 className="font-semibold text-green-600 flex items-center gap-2">
// // //                                         <CheckCircle className="h-4 w-4" />
// // //                                         Present Keywords ({currentKeywords.present.length})
// // //                                     </h4>
// // //                                     {expandedSections.has('present') ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
// // //                                 </button>
// // //                                 {expandedSections.has('present') && (
// // //                                     <div className="mt-3 flex flex-wrap gap-2">
// // //                                         {currentKeywords.present.map((keyword, index) => (
// // //                                             <Badge key={index} variant="outline" className="bg-green-50 text-green-700 border-green-200">
// // //                                                 {keyword}
// // //                                                 <CheckCircle className="h-3 w-3 ml-1" />
// // //                                             </Badge>
// // //                                         ))}
// // //                                     </div>
// // //                                 )}
// // //                             </div>

// // //                             {/* Suggested Keywords */}
// // //                             <div>
// // //                                 <button
// // //                                     onClick={() => toggleSection('suggested')}
// // //                                     className="flex items-center justify-between w-full text-left"
// // //                                 >
// // //                                     <h4 className="font-semibold text-blue-600 flex items-center gap-2">
// // //                                         <Star className="h-4 w-4" />
// // //                                         Suggested Keywords ({currentKeywords.suggested.length})
// // //                                     </h4>
// // //                                     {expandedSections.has('suggested') ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
// // //                                 </button>
// // //                                 {expandedSections.has('suggested') && (
// // //                                     <div className="mt-3 flex flex-wrap gap-2">
// // //                                         {currentKeywords.suggested.map((keyword, index) => (
// // //                                             <Badge key={index} variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
// // //                                                 {keyword}
// // //                                                 <Button
// // //                                                     variant="ghost"
// // //                                                     size="sm"
// // //                                                     className="ml-2 h-4 w-4 p-0 hover:bg-blue-100"
// // //                                                 >
// // //                                                     <Plus className="h-3 w-3" />
// // //                                                 </Button>
// // //                                             </Badge>
// // //                                         ))}
// // //                                     </div>
// // //                                 )}
// // //                             </div>
// // //                         </CardContent>
// // //                     </Card>
// // //                 </TabsContent>

// // //                 {/* ATS Check Tab */}
// // //                 <TabsContent value="ats" className="mt-6 space-y-6">
// // //                     <Card>
// // //                         <CardHeader>
// // //                             <CardTitle className="flex items-center gap-2">
// // //                                 <CheckCircle className="h-5 w-5 text-green-600" />
// // //                                 ATS Compatibility Analysis
// // //                                 <Badge className="ml-auto bg-green-50 text-green-700">
// // //                                     {atsAnalysis.score}% Compatible
// // //                                 </Badge>
// // //                             </CardTitle>
// // //                         </CardHeader>
// // //                         <CardContent className="space-y-6">
// // //                             <Progress value={atsAnalysis.score} className="h-3" />
// // //                             {/* Stats Row */}
// // //                             <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
// // //                                 {optimizationStats.map((stat, index) => (
// // //                                     <Card key={index} className="border-0 bg-white/70 backdrop-blur-sm hover:bg-white/90 hover:shadow-md transition-all duration-300">
// // //                                         <CardContent className="p-3">
// // //                                             <div className="flex items-center justify-between">
// // //                                                 <div>
// // //                                                     <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">
// // //                                                         {stat.label}
// // //                                                     </p>
// // //                                                     <p className="text-xl font-bold text-gray-900 mt-1">
// // //                                                         {stat.value}
// // //                                                     </p>
// // //                                                     <div className="flex items-center gap-1 mt-1">
// // //                                                         <TrendingUp className="h-3 w-3 text-green-600" />
// // //                                                         <p className="text-xs text-green-600 font-medium">
// // //                                                             {stat.change}
// // //                                                         </p>
// // //                                                     </div>
// // //                                                 </div>
// // //                                                 <div className={`p-2 ${stat.bgColor} rounded-lg`}>
// // //                                                     <stat.icon className={`h-4 w-4 ${stat.color}`} />
// // //                                                 </div>
// // //                                             </div>
// // //                                         </CardContent>
// // //                                     </Card>
// // //                                 ))}
// // //                             </div>
// // //                             {/* Issues */}
// // //                             <div>
// // //                                 <h4 className="font-semibold mb-3">Issues Found</h4>
// // //                                 <div className="space-y-3">
// // //                                     {atsAnalysis.issues.map((issue, index) => (
// // //                                         <div key={index} className={`flex items-start gap-3 p-3 rounded-lg ${issue.type === 'warning' ? 'bg-yellow-50 border border-yellow-200' : 'bg-blue-50 border border-blue-200'
// // //                                             }`}>
// // //                                             {issue.type === 'warning' ?
// // //                                                 <AlertTriangle className="h-4 w-4 text-yellow-600 mt-0.5 flex-shrink-0" /> :
// // //                                                 <TrendingUp className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
// // //                                             }
// // //                                             <div>
// // //                                                 <p className="text-sm font-medium">{issue.message}</p>
// // //                                                 <p className="text-xs text-gray-600 mt-1">Section: {issue.section}</p>
// // //                                             </div>
// // //                                         </div>
// // //                                     ))}
// // //                                 </div>
// // //                             </div>

// // //                             {/* Improvements */}
// // //                             <div>
// // //                                 <h4 className="font-semibold mb-3">Recommended Improvements</h4>
// // //                                 <div className="space-y-2">
// // //                                     {atsAnalysis.improvements.map((improvement, index) => (
// // //                                         <div key={index} className="flex items-center gap-3">
// // //                                             <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-xs font-bold">
// // //                                                 {index + 1}
// // //                                             </div>
// // //                                             <span className="text-sm">{improvement}</span>
// // //                                         </div>
// // //                                     ))}
// // //                                 </div>
// // //                             </div>
// // //                         </CardContent>
// // //                     </Card>
// // //                 </TabsContent>
// // //             </Tabs>
// // //         </div>
// // //     );
// // // }


// // // // // // 'use client';

// // // // // // import React, { useState } from 'react';
// // // // // // import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// // // // // // import { Button } from '@/components/ui/button';
// // // // // // import { Badge } from '@/components/ui/badge';
// // // // // // import { Progress } from '@/components/ui/progress';
// // // // // // import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
// // // // // // import { Label } from '@/components/ui/label';
// // // // // // import { BarChart3, Target, CheckCircle, AlertTriangle, Search, Sparkles, RefreshCw, ChevronDown, ChevronUp, Lightbulb } from 'lucide-react';

// // // // // // // Type Definitions
// // // // // // interface Experience { id: number; title: string; company: string; location: string; period: string; achievements?: string[]; }
// // // // // // interface ResumeData { summary?: string; experience?: Experience[]; skills?: { [key: string]: string[] } }
// // // // // // interface OptimizationPanelProps {
// // // // // //     resumeData: ResumeData;
// // // // // //     onUpdate: <K extends keyof ResumeData>(section: K, data: ResumeData[K]) => void;
// // // // // //     targetRole: string;
// // // // // //     setTargetRole: (role: string) => void;
// // // // // // }
// // // // // // type ActiveTab = 'analysis' | 'keywords' | 'ats' | 'optimize';
// // // // // // type ExpandedSection = 'missing' | 'present' | 'suggested';
// // // // // // interface KeywordAnalysis { missing: string[]; present: string[]; suggested: string[]; score: number; }
// // // // // // interface AtsIssue { type: 'warning' | 'info'; message: string; section: string; }
// // // // // // interface AtsAnalysis { score: number; issues: AtsIssue[]; improvements: string[]; }
// // // // // // interface OptimizationSuggestions { optimizedSummary: string; optimizedExperience: Experience[]; }
// // // // // // interface FullAnalysis { keywordAnalysis: KeywordAnalysis; atsAnalysis: AtsAnalysis; optimizationSuggestions: OptimizationSuggestions; }

// // // // // // export function OptimizationPanel({ resumeData, onUpdate, targetRole, setTargetRole }: OptimizationPanelProps) {
// // // // // //     const [activeTab, setActiveTab] = useState<ActiveTab>('analysis');
// // // // // //     const [isOptimizing, setIsOptimizing] = useState<boolean>(false);
// // // // // //     const [analysisResults, setAnalysisResults] = useState<FullAnalysis | null>(null);
// // // // // //     const [expandedSections, setExpandedSections] = useState<Set<ExpandedSection>>(new Set(['missing']));

// // // // // //     const jobRoles: string[] = ['Software Engineer', 'Frontend Developer', 'Backend Developer', 'Full Stack Developer', 'DevOps Engineer', 'Data Scientist', 'Product Manager'];

// // // // // //     const handleOptimization = async () => {
// // // // // //         setIsOptimizing(true);
// // // // // //         setAnalysisResults(null);
// // // // // //         try {
// // // // // //             const response = await fetch('/api/analyze-resume', {
// // // // // //                 method: 'POST',
// // // // // //                 headers: { 'Content-Type': 'application/json' },
// // // // // //                 body: JSON.stringify({ resumeJson: resumeData, targetRole }),
// // // // // //             });
// // // // // //             if (!response.ok) throw new Error('Failed to analyze resume.');
// // // // // //             const result = await response.json();
// // // // // //             setAnalysisResults(result.analysis);
// // // // // //             setActiveTab('optimize');
// // // // // //         } catch (error) {
// // // // // //             console.error("Optimization failed:", error);
// // // // // //         } finally {
// // // // // //             setIsOptimizing(false);
// // // // // //         }
// // // // // //     };

// // // // // //     const applyOptimizations = () => {
// // // // // //         if (analysisResults) {
// // // // // //             onUpdate('summary', analysisResults.optimizationSuggestions.optimizedSummary);
// // // // // //             onUpdate('experience', analysisResults.optimizationSuggestions.optimizedExperience);
// // // // // //             setAnalysisResults(null); // Clear results after applying
// // // // // //             setActiveTab('analysis');
// // // // // //         }
// // // // // //     };

// // // // // //     const toggleSection = (section: ExpandedSection) => {
// // // // // //         const newExpanded = new Set(expandedSections);
// // // // // //         newExpanded.has(section) ? newExpanded.delete(section) : newExpanded.add(section);
// // // // // //         setExpandedSections(newExpanded);
// // // // // //     };

// // // // // //     const keywords = analysisResults?.keywordAnalysis;
// // // // // //     const ats = analysisResults?.atsAnalysis;

// // // // // //     return (
// // // // // //         <div className="space-y-6">
// // // // // //             <Card>
// // // // // //                 <CardHeader>
// // // // // //                     <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
// // // // // //                         <div>
// // // // // //                             <CardTitle className="flex items-center gap-2"><BarChart3 className="h-5 w-5 text-blue-600" />Resume Optimization Center</CardTitle>
// // // // // //                             <p className="text-sm text-gray-600 mt-1">Analyze your resume for a specific job role.</p>
// // // // // //                         </div>
// // // // // //                         <div className="flex items-center gap-2">
// // // // // //                             <Label className="text-sm font-medium">Target Role:</Label>
// // // // // //                             <select value={targetRole} onChange={(e) => setTargetRole(e.target.value)} className="px-3 py-1 border border-gray-300 rounded-md text-sm">
// // // // // //                                 {jobRoles.map(role => (<option key={role} value={role}>{role}</option>))}
// // // // // //                             </select>
// // // // // //                         </div>
// // // // // //                     </div>
// // // // // //                 </CardHeader>
// // // // // //             </Card>

// // // // // //             <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as ActiveTab)} className="w-full">
// // // // // //                 <TabsList className="grid w-full grid-cols-4 bg-white shadow-sm border">
// // // // // //                     <TabsTrigger value="analysis"><Search className="h-4 w-4 mr-2" />Analysis</TabsTrigger>
// // // // // //                     <TabsTrigger value="keywords" disabled={!analysisResults}><Target className="h-4 w-4 mr-2" />Keywords</TabsTrigger>
// // // // // //                     <TabsTrigger value="ats" disabled={!analysisResults}><CheckCircle className="h-4 w-4 mr-2" />ATS Check</TabsTrigger>
// // // // // //                     <TabsTrigger value="optimize" disabled={!analysisResults}><Sparkles className="h-4 w-4 mr-2" />AI Optimize</TabsTrigger>
// // // // // //                 </TabsList>

// // // // // //                 <TabsContent value="analysis" className="mt-6">
// // // // // //                     <Card className="text-center">
// // // // // //                         <CardContent className="pt-6">
// // // // // //                             <Sparkles className="h-16 w-16 text-purple-400 mx-auto mb-4" />
// // // // // //                             <h3 className="text-lg font-semibold text-gray-900 mb-2">Ready to Optimize Your Resume?</h3>
// // // // // //                             <p className="text-gray-600 mb-6 max-w-md mx-auto">Our AI will perform a deep analysis of your resume, check it against ATS standards, and suggest powerful content improvements.</p>
// // // // // //                             <Button onClick={handleOptimization} disabled={isOptimizing} size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
// // // // // //                                 {isOptimizing ? <><RefreshCw className="h-4 w-4 mr-2 animate-spin" />Analyzing...</> : <><Sparkles className="h-4 w-4 mr-2" />Analyze My Resume</>}
// // // // // //                             </Button>
// // // // // //                         </CardContent>
// // // // // //                     </Card>
// // // // // //                 </TabsContent>

// // // // // //                 <TabsContent value="keywords" className="mt-6">
// // // // // //                     {keywords ? (<Card><CardHeader><CardTitle className="flex items-center gap-2">Keyword Analysis for {targetRole}<Badge variant="outline" className="ml-auto">Score: {keywords.score}%</Badge></CardTitle></CardHeader><CardContent className="space-y-4">
// // // // // //                         <div><button onClick={() => toggleSection('missing')} className="flex items-center justify-between w-full text-left"><h4 className="font-semibold text-red-600 flex items-center gap-2"><AlertTriangle className="h-4 w-4" />Missing Critical Keywords ({keywords.missing.length})</h4>{expandedSections.has('missing') ? <ChevronUp /> : <ChevronDown />}</button>{expandedSections.has('missing') && <div className="mt-3 flex flex-wrap gap-2">{keywords.missing.map((k, i) => <Badge key={i} variant="outline" className="bg-red-50 text-red-700 border-red-200">{k}</Badge>)}</div>}</div>
// // // // // //                         <div><button onClick={() => toggleSection('present')} className="flex items-center justify-between w-full text-left"><h4 className="font-semibold text-green-600 flex items-center gap-2"><CheckCircle className="h-4 w-4" />Present Keywords ({keywords.present.length})</h4>{expandedSections.has('present') ? <ChevronUp /> : <ChevronDown />}</button>{expandedSections.has('present') && <div className="mt-3 flex flex-wrap gap-2">{keywords.present.map((k, i) => <Badge key={i} variant="outline" className="bg-green-50 text-green-700 border-green-200">{k}</Badge>)}</div>}</div>
// // // // // //                         <div><button onClick={() => toggleSection('suggested')} className="flex items-center justify-between w-full text-left"><h4 className="font-semibold text-blue-600 flex items-center gap-2"><Lightbulb className="h-4 w-4" />Suggested Keywords ({keywords.suggested.length})</h4>{expandedSections.has('suggested') ? <ChevronUp /> : <ChevronDown />}</button>{expandedSections.has('suggested') && <div className="mt-3 flex flex-wrap gap-2">{keywords.suggested.map((k, i) => <Badge key={i} variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">{k}</Badge>)}</div>}</div>
// // // // // //                     </CardContent></Card>) : <p>Run analysis to see keyword results.</p>}
// // // // // //                 </TabsContent>

// // // // // //                 <TabsContent value="ats" className="mt-6">
// // // // // //                     {ats ? (<Card><CardHeader><CardTitle className="flex items-center gap-2">ATS Compatibility Analysis<Badge className="ml-auto bg-green-50 text-green-700">{ats.score}% Compatible</Badge></CardTitle></CardHeader><CardContent className="space-y-6"><Progress value={ats.score} />
// // // // // //                         <div><h4 className="font-semibold mb-3">Issues Found</h4><div className="space-y-3">{ats.issues.map((issue, i) => <div key={i} className={`flex items-start gap-3 p-3 rounded-lg ${issue.type === 'warning' ? 'bg-yellow-50' : 'bg-blue-50'}`}><AlertTriangle className={`h-4 w-4 mt-0.5 ${issue.type === 'warning' ? 'text-yellow-600' : 'text-blue-600'}`} /><div><p className="text-sm font-medium">{issue.message}</p><p className="text-xs text-gray-600 mt-1">Section: {issue.section}</p></div></div>)}</div></div>
// // // // // //                         <div><h4 className="font-semibold mb-3">Recommended Improvements</h4><div className="space-y-2">{ats.improvements.map((imp, i) => <div key={i} className="flex items-center gap-3"><div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-xs font-bold">{i + 1}</div><span className="text-sm">{imp}</span></div>)}</div></div>
// // // // // //                     </CardContent></Card>) : <p>Run analysis to see ATS results.</p>}
// // // // // //                 </TabsContent>

// // // // // //                 <TabsContent value="optimize" className="mt-6">
// // // // // //                     {analysisResults ? (<Card><CardHeader><CardTitle className="flex items-center gap-2">AI Optimization Results</CardTitle></CardHeader><CardContent className="space-y-6">
// // // // // //                         <div className="bg-green-50 border border-green-200 rounded-lg p-4"><div className="flex items-center gap-2 mb-2"><CheckCircle className="h-5 w-5 text-green-600" /><h4 className="font-semibold text-green-900">Optimization Complete!</h4></div><p className="text-sm text-green-800">Review the AI-enhanced content below and apply the changes to your resume.</p></div>
// // // // // //                         <Card>
// // // // // //                             <CardHeader><CardTitle className="text-base">Optimized Professional Summary</CardTitle></CardHeader>
// // // // // //                             <CardContent>
// // // // // //                                 <div className="p-3 bg-green-50 rounded border border-green-200 text-sm">{analysisResults.optimizationSuggestions.optimizedSummary}</div>
// // // // // //                             </CardContent>
// // // // // //                         </Card>
// // // // // //                         <Card>
// // // // // //                             <CardHeader><CardTitle className="text-base">Optimized Experience</CardTitle></CardHeader>
// // // // // //                             <CardContent className="space-y-4">
// // // // // //                                 {analysisResults.optimizationSuggestions.optimizedExperience.map(exp => (
// // // // // //                                     <div key={exp.id}>
// // // // // //                                         <h5 className="font-semibold">{exp.title} at {exp.company}</h5>
// // // // // //                                         <ul className="list-disc pl-5 mt-1 space-y-1 text-sm">{exp.achievements?.map((ach, i) => <li key={i}>{ach}</li>)}</ul>
// // // // // //                                     </div>
// // // // // //                                 ))}
// // // // // //                             </CardContent>
// // // // // //                         </Card>
// // // // // //                         <div className="flex gap-3"><Button onClick={applyOptimizations} className="flex-1"><CheckCircle className="h-4 w-4 mr-2" />Apply All Changes</Button><Button variant="outline" onClick={() => setAnalysisResults(null)}><RefreshCw className="h-4 w-4 mr-2" />Clear Results</Button></div>
// // // // // //                     </CardContent></Card>) : <p>Run analysis to see optimization suggestions.</p>}
// // // // // //                 </TabsContent>
// // // // // //             </Tabs>
// // // // // //         </div>
// // // // // //     );
// // // // // // }






























// // // // // components/Base/Builder/OptimizationPanel.tsx

// // // // import React, { useState, FC, Dispatch, SetStateAction } from 'react';
// // // // import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// // // // import { Button } from '@/components/ui/button';
// // // // import { Badge } from '@/components/ui/badge';
// // // // import { Progress } from '@/components/ui/progress';
// // // // import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
// // // // import { Loader2, BarChart3, Target, CheckCircle, AlertTriangle, Search, Lightbulb, Award, Users, Plus, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';

// // // // // --- TYPE DEFINITIONS (These should ideally be in a shared types file) ---
// // // // interface Experience { id?: number; title: string; company: string; location: string; achievements?: string[]; }
// // // // export interface ResumeData { summary?: string; experience?: Experience[]; skills?: Record<string, string[]>; }
// // // // export interface OptimizationStat { label: string; value: string; change: string; icon: FC<any>; color: string; bgColor: string; }
// // // // export interface KeywordAnalysis { missing: string[]; present: string[]; suggested: string[]; score: number; }
// // // // export interface AtsIssue { type: 'warning' | 'info'; message: string; section: string; }
// // // // export interface AtsAnalysis { score: number; issues: AtsIssue[]; improvements: string[]; }
// // // // export interface CompetitorAnalysis { averageExperience: string; commonSkills: string[]; standoutFeatures: string[]; suggestions: string[]; }
// // // // export interface OptimizationResultSummary { before: string; after: string; improvements: string[]; }
// // // // export interface OptimizationResultExperience { optimized: Experience[]; improvements: string[]; }
// // // // export interface OptimizationResults { summary: OptimizationResultSummary; experience: OptimizationResultExperience; overallScore: number; }
// // // // type ExpandedSection = 'missing' | 'present' | 'suggested';

// // // // // --- PROPS INTERFACE ---
// // // // interface OptimizationPanelProps {
// // // //     resumeData: ResumeData;
// // // //     targetRole: string;
// // // //     jobRoles: string[];
// // // //     optimizationStats: OptimizationStat[];
// // // //     keywordAnalysis: KeywordAnalysis | null;
// // // //     atsAnalysis: AtsAnalysis | null;
// // // //     marketAnalysis: CompetitorAnalysis | null;
// // // //     optimizationResults: OptimizationResults | null;
// // // //     isOptimizing: boolean;
// // // //     onUpdate: <K extends keyof ResumeData>(section: K, data: ResumeData[K]) => void;
// // // //     onTargetRoleChange: (newRole: string) => void;
// // // //     onOptimize: () => void;
// // // // }

// // // // export function OptimizationPanel({
// // // //     resumeData,
// // // //     targetRole,
// // // //     jobRoles,
// // // //     optimizationStats,
// // // //     keywordAnalysis,
// // // //     atsAnalysis,
// // // //     marketAnalysis,
// // // //     optimizationResults,
// // // //     isOptimizing,
// // // //     onUpdate,
// // // //     onTargetRoleChange,
// // // //     onOptimize
// // // // }: OptimizationPanelProps) {
// // // //     const [activeTab, setActiveTab] = useState<'analysis' | 'keywords' | 'ats' | 'optimize'>('analysis');
// // // //     const [expandedSections, setExpandedSections] = useState<Set<ExpandedSection>>(new Set(['missing', 'suggested']));

// // // //     const applyOptimizations = () => {
// // // //         if (optimizationResults) {
// // // //             onUpdate('summary', optimizationResults.summary.after);
// // // //             onUpdate('experience', optimizationResults.experience.optimized);
// // // //         }
// // // //     };

// // // //     const toggleSection = (section: ExpandedSection) => {
// // // //         setExpandedSections(prev => {
// // // //             const newSet = new Set(prev);
// // // //             if (newSet.has(section)) newSet.delete(section);
// // // //             else newSet.add(section);
// // // //             return newSet;
// // // //         });
// // // //     };

// // // //     const renderKeywordList = (keywords: string[], type: 'missing' | 'suggested' | 'present') => (
// // // //         <div className="mt-3 flex flex-wrap gap-2">
// // // //             {keywords.map((keyword) => (
// // // //                 <Badge key={keyword} variant="outline" className={
// // // //                     type === 'missing' ? 'bg-red-50 text-red-700 border-red-200' :
// // // //                         type === 'suggested' ? 'bg-blue-50 text-blue-700 border-blue-200' :
// // // //                             'bg-green-50 text-green-700 border-green-200'
// // // //                 }>
// // // //                     {keyword}
// // // //                     {type !== 'present' && <Button variant="ghost" size="sm" className="ml-2 h-4 w-4 p-0 hover:bg-red-100"><Plus className="h-3 w-3" /></Button>}
// // // //                 </Badge>
// // // //             ))}
// // // //         </div>
// // // //     );

// // // //     // The "Optimize" tab is shown only after an optimization has run
// // // //     const showOptimizeTab = optimizationResults && !isOptimizing;

// // // //     return (
// // // //         <div className="space-y-6">
// // // //             <Card>
// // // //                 <CardHeader>
// // // //                     <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
// // // //                         <div>
// // // //                             <CardTitle className="flex items-center gap-2"><BarChart3 className="h-5 w-5 text-blue-600" />Resume Optimization Center</CardTitle>
// // // //                             <p className="text-sm text-gray-600 mt-1">Analyze and optimize your resume against your target role for maximum impact.</p>
// // // //                         </div>
// // // //                         <div className="flex items-center gap-2">
// // // //                             <label htmlFor="targetRole" className="text-sm font-medium">Target Role:</label>
// // // //                             <select id="targetRole" value={targetRole} onChange={(e) => onTargetRoleChange(e.target.value)} className="px-3 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
// // // //                                 {jobRoles?.map(role => <option key={role} value={role}>{role}</option>)}
// // // //                             </select>
// // // //                         </div>
// // // //                     </div>
// // // //                 </CardHeader>
// // // //             </Card>

// // // //             <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as any)} className="w-full">
// // // //                 <TabsList className={`grid w-full bg-white shadow-sm border ${showOptimizeTab ? 'grid-cols-4' : 'grid-cols-3'}`}>
// // // //                     <TabsTrigger value="analysis" className="flex items-center gap-2"><Search className="h-4 w-4" />Analysis</TabsTrigger>
// // // //                     <TabsTrigger value="keywords" className="flex items-center gap-2"><Target className="h-4 w-4" />Keywords</TabsTrigger>
// // // //                     <TabsTrigger value="ats" className="flex items-center gap-2"><CheckCircle className="h-4 w-4" />ATS Check</TabsTrigger>
// // // //                     {showOptimizeTab && <TabsTrigger value="optimize" className="flex items-center gap-2 text-green-600"><Sparkles className="h-4 w-4" />AI Optimizations</TabsTrigger>}
// // // //                 </TabsList>

// // // //                 <TabsContent value="analysis" className="mt-6 space-y-6">
// // // //                     {!marketAnalysis ? <Loader2 className="mx-auto h-8 w-8 animate-spin text-gray-400" /> : (
// // // //                         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
// // // //                             <Card>
// // // //                                 <CardHeader><CardTitle className="flex items-center gap-2"><Award className="h-5 w-5 text-yellow-600" />Overall Score</CardTitle></CardHeader>
// // // //                                 <CardContent><Progress value={atsAnalysis?.score || 0} className="mb-4" /></CardContent>
// // // //                             </Card>
// // // //                             <Card>
// // // //                                 <CardHeader><CardTitle className="flex items-center gap-2"><Users className="h-5 w-5 text-purple-600" />Market Analysis</CardTitle></CardHeader>
// // // //                                 <CardContent><p className="text-sm">Market Average Experience: {marketAnalysis.averageExperience}</p></CardContent>
// // // //                             </Card>
// // // //                         </div>
// // // //                     )}
// // // //                 </TabsContent>

// // // //                 <TabsContent value="keywords" className="mt-6">
// // // //                     {!keywordAnalysis ? <Loader2 className="mx-auto h-8 w-8 animate-spin text-gray-400" /> : (
// // // //                         <Card>
// // // //                             <CardHeader><CardTitle className="flex items-center gap-2"><Target className="h-5 w-5 text-blue-600" />Keyword Analysis: {targetRole}<Badge variant="outline" className="ml-auto">Score: {keywordAnalysis.score}%</Badge></CardTitle></CardHeader>
// // // //                             <CardContent className="space-y-6">
// // // //                                 <div><button onClick={() => toggleSection('missing')} className="..."><h4 className="font-semibold text-red-600 flex items-center gap-2"><AlertTriangle className="h-4 w-4" />Missing ({keywordAnalysis.missing.length})</h4>{expandedSections.has('missing') ? <ChevronUp /> : <ChevronDown />}</button>{expandedSections.has('missing') && renderKeywordList(keywordAnalysis.missing, 'missing')}</div>
// // // //                                 <div><button onClick={() => toggleSection('present')} className="..."><h4 className="font-semibold text-green-600 flex items-center gap-2"><CheckCircle className="h-4 w-4" />Present ({keywordAnalysis.present.length})</h4>{expandedSections.has('present') ? <ChevronUp /> : <ChevronDown />}</button>{expandedSections.has('present') && renderKeywordList(keywordAnalysis.present, 'present')}</div>
// // // //                                 <div><button onClick={() => toggleSection('suggested')} className="..."><h4 className="font-semibold text-blue-600 flex items-center gap-2"><Lightbulb className="h-4 w-4" />Suggested ({keywordAnalysis.suggested.length})</h4>{expandedSections.has('suggested') ? <ChevronUp /> : <ChevronDown />}</button>{expandedSections.has('suggested') && renderKeywordList(keywordAnalysis.suggested, 'suggested')}</div>
// // // //                             </CardContent>
// // // //                         </Card>
// // // //                     )}
// // // //                 </TabsContent>

// // // //                 <TabsContent value="ats" className="mt-6">
// // // //                     {!atsAnalysis ? <Loader2 className="mx-auto h-8 w-8 animate-spin text-gray-400" /> : (
// // // //                         <Card><CardHeader>...</CardHeader><CardContent>...</CardContent></Card>
// // // //                     )}
// // // //                 </TabsContent>

// // // //                 <TabsContent value="optimize" className="mt-6">
// // // //                     <Card><CardHeader>...</CardHeader><CardContent>...</CardContent></Card>
// // // //                 </TabsContent>

// // // //             </Tabs>

// // // //             <div className="pt-6 border-t text-center">
// // // //                 <Button onClick={onOptimize} disabled={isOptimizing} size="lg">
// // // //                     {isOptimizing ? <><Loader2 className="mr-2 h-5 w-5 animate-spin" />Optimizing with AI...</> : <><Sparkles className="mr-2 h-5 w-5" />Run AI Optimization</>}
// // // //                 </Button>
// // // //             </div>
// // // //         </div>
// // // //     );
// // // // }




// // "use client";

// // import { useState, useEffect, FC } from 'react';
// // import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// // import { Button } from '@/components/ui/button';
// // import { Badge } from '@/components/ui/badge';
// // import { Progress } from '@/components/ui/progress';
// // import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
// // import { Label } from '@/components/ui/label';
// // import { Loader2, BarChart3, Target, TrendingUp, Star, CheckCircle, AlertTriangle, Search, Lightbulb, Award, Users, Plus, ChevronDown, ChevronUp } from 'lucide-react';

// // interface Experience {
// //     id: number;
// //     title: string;
// //     company: string;
// //     location: string;
// //     period: string;
// //     achievements?: string[];
// // }

// // interface ResumeData {
// //     summary?: string;
// //     experience?: Experience[];
// // }

// // interface KeywordAnalysisData {
// //     missing: string[];
// //     present: string[];
// //     suggested: string[];
// //     score: number;
// // }

// // interface AtsIssue {
// //     type: 'warning' | 'info';
// //     message: string;
// //     section: string;
// // }

// // interface AtsAnalysis {
// //     score: number;
// //     issues: AtsIssue[];
// //     improvements: string[];
// // }

// // interface CompetitorAnalysis {
// //     averageExperience: string;
// //     commonSkills: string[];
// //     standoutFeatures: string[];
// //     suggestions: string[];
// // }

// // interface OptimizationResultSummary {
// //     before: string;
// //     after: string;
// //     improvements: string[];
// // }

// // interface OptimizationResultExperience {
// //     optimized: Experience[];
// //     improvements: string[];
// // }

// // interface OptimizationResultKeywords {
// //     added: string[];
// //     score: number;
// // }

// // interface OptimizationResults {
// //     summary: OptimizationResultSummary;
// //     experience: OptimizationResultExperience;
// //     keywords: OptimizationResultKeywords;
// //     overallScore: number;
// // }

// // interface OptimizationStat {
// //     label: string;
// //     value: string;
// //     change: string;
// //     icon: FC<any>;
// //     color: string;
// //     bgColor: string;
// // }

// // interface OptimizationPanelProps {
// //     resumeData: ResumeData;
// //     onUpdate: <K extends keyof ResumeData>(section: K, data: ResumeData[K]) => void;
// //     optimizationStats: OptimizationStat[];
// // }

// // type ActiveTab = 'analysis' | 'keywords' | 'ats' | 'optimize';
// // type ExpandedSection = 'missing' | 'present' | 'suggested' | 'keywords';

// // export function OptimizationPanel({ resumeData, onUpdate, optimizationStats }: OptimizationPanelProps) {
// //     const [activeTab, setActiveTab] = useState<ActiveTab>('analysis');
// //     const [targetRole, setTargetRole] = useState<string>('Software Engineer');
// //     const [isOptimizing, setIsOptimizing] = useState<boolean>(false);
// //     const [optimizationResults, setOptimizationResults] = useState<OptimizationResults | null>(null);
// //     const [expandedSections, setExpandedSections] = useState<Set<ExpandedSection>>(new Set(['missing', 'suggested']));

// //     const [isLoading, setIsLoading] = useState(true);
// //     const [keywordAnalysis, setKeywordAnalysis] = useState<KeywordAnalysisData | null>(null);
// //     const [atsAnalysis, setAtsAnalysis] = useState<AtsAnalysis | null>(null);
// //     const [competitorAnalysis, setCompetitorAnalysis] = useState<CompetitorAnalysis | null>(null);

// //     const jobRoles: string[] = [
// //         'Software Engineer', 'Frontend Developer', 'Backend Developer', 'Full Stack Developer',
// //         'DevOps Engineer', 'Data Scientist', 'Product Manager', 'UI/UX Designer', 'Mobile Developer', 'Cloud Engineer'
// //     ];

// //     useEffect(() => {
// //         const fetchAnalysis = async () => {
// //             if (!resumeData) return;
// //             setIsLoading(true);
// //             try {
// //                 const response = await fetch(`/api/analysis`, {
// //                     method: 'POST',
// //                     headers: { 'Content-Type': 'application/json' },
// //                     body: JSON.stringify({ resumeData, targetRole })
// //                 });
// //                 if (!response.ok) throw new Error('Failed to fetch analysis');
// //                 const data = await response.json();
// //                 setKeywordAnalysis(data.keywordAnalysis);
// //                 setAtsAnalysis(data.atsAnalysis);
// //                 setCompetitorAnalysis(data.competitorAnalysis);
// //             } catch (error) {
// //                 console.error("Error fetching analysis data:", error);
// //             } finally {
// //                 setIsLoading(false);
// //             }
// //         };

// //         fetchAnalysis();
// //     }, [targetRole, resumeData]);

// //     const handleOptimization = async () => {
// //         setIsOptimizing(true);
// //         try {
// //             const response = await fetch('/api/optimize', {
// //                 method: 'POST',
// //                 headers: { 'Content-Type': 'application/json' },
// //                 body: JSON.stringify({ resumeData }),
// //             });
// //             if (!response.ok) throw new Error('Optimization request failed');
// //             setOptimizationResults(await response.json());
// //         } catch (error) {
// //             console.error("Optimization failed:", error);
// //         } finally {
// //             setIsOptimizing(false);
// //         }
// //     };

// //     const applyOptimizations = () => {
// //         if (optimizationResults) {
// //             onUpdate('summary', optimizationResults.summary.after);
// //             if (optimizationResults.experience.optimized) {
// //                 onUpdate('experience', optimizationResults.experience.optimized);
// //             }
// //         }
// //     };

// //     const toggleSection = (section: ExpandedSection) => {
// //         setExpandedSections(prev => {
// //             const newSet = new Set(prev);
// //             if (newSet.has(section)) newSet.delete(section);
// //             else newSet.add(section);
// //             return newSet;
// //         });
// //     };

// //     if (isLoading) {
// //         return <div className="flex justify-center items-center p-20"><Loader2 className="h-10 w-10 animate-spin text-gray-400" /></div>;
// //     }

// //     if (!keywordAnalysis || !atsAnalysis || !competitorAnalysis) {
// //         return <div className="text-center p-10 text-red-500">Could not load analysis data. Please refresh or try again later.</div>;
// //     }

// //     return (
// //         <div className="space-y-6">
// //             <Card>
// //                 <CardHeader>
// //                     <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
// //                         <div>
// //                             <CardTitle className="flex items-center gap-2"><BarChart3 className="h-5 w-5 text-blue-600" />Resume Optimization Center</CardTitle>
// //                             <p className="text-sm text-gray-600 mt-1">Analyze and optimize your resume for maximum impact</p>
// //                         </div>
// //                         <div className="flex items-center gap-2">
// //                             <Label className="text-sm font-medium">Target Role:</Label>
// //                             <select value={targetRole} onChange={(e) => setTargetRole(e.target.value)} className="px-3 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
// //                                 {jobRoles.map(role => (<option key={role} value={role}>{role}</option>))}
// //                             </select>
// //                         </div>
// //                     </div>
// //                 </CardHeader>
// //             </Card>

// //             <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as ActiveTab)} className="w-full">
// //                 <TabsList className="grid w-full grid-cols-3 bg-white shadow-sm border">
// //                     <TabsTrigger value="analysis" className="flex items-center gap-2"><Search className="h-4 w-4" />Analysis</TabsTrigger>
// //                     <TabsTrigger value="keywords" className="flex items-center gap-2"><Target className="h-4 w-4" />Keywords</TabsTrigger>
// //                     <TabsTrigger value="ats" className="flex items-center gap-2"><CheckCircle className="h-4 w-4" />ATS Check</TabsTrigger>
// //                 </TabsList>

// //                 <TabsContent value="analysis" className="mt-6 space-y-6">
// //                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
// //                         <Card>
// //                             <CardHeader><CardTitle className="flex items-center gap-2"><Award className="h-5 w-5 text-yellow-600" />Overall Resume Score</CardTitle></CardHeader>
// //                             <CardContent><div className="text-center"><div className="text-4xl font-bold text-blue-600 mb-2">{atsAnalysis.score}%</div><Progress value={atsAnalysis.score} className="mb-4" /><div className="grid grid-cols-2 gap-4 text-sm"><div><div className="font-semibold text-green-600">Strengths</div><ul className="text-gray-600 text-xs mt-1"><li>• Strong technical skills</li><li>• Relevant experience</li></ul></div><div><div className="font-semibold text-orange-600">Areas to Improve</div><ul className="text-gray-600 text-xs mt-1"><li>• More keywords needed</li><li>• Add quantified results</li></ul></div></div></div></CardContent>
// //                         </Card>
// //                         <Card>
// //                             <CardHeader><CardTitle className="flex items-center gap-2"><Users className="h-5 w-5 text-purple-600" />Market Analysis</CardTitle></CardHeader>
// //                             <CardContent className="space-y-4"><div className="flex justify-between items-center"><span className="text-sm text-gray-600">Your Experience</span><span className="font-semibold">2+ years</span></div><div className="flex justify-between items-center"><span className="text-sm text-gray-600">Market Average</span><span className="font-semibold">{competitorAnalysis.averageExperience}</span></div><div className="pt-3 border-t"><h4 className="font-semibold text-sm mb-2">Your Unique Advantages:</h4><ul className="space-y-1">{competitorAnalysis.standoutFeatures.map((feature, index) => (<li key={index} className="flex items-center gap-2 text-sm"><CheckCircle className="h-3 w-3 text-green-600" />{feature}</li>))}</ul></div></CardContent>
// //                         </Card>
// //                     </div>
// //                     <Card>
// //                         <CardHeader><CardTitle className="flex items-center gap-2"><Lightbulb className="h-5 w-5 text-yellow-600" />Detailed Insights</CardTitle></CardHeader>
// //                         <CardContent><div className="space-y-4">{competitorAnalysis.suggestions.map((suggestion, index) => (<div key={index} className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg"><TrendingUp className="h-4 w-4 text-yellow-600 mt-0.5 flex-shrink-0" /><span className="text-sm">{suggestion}</span></div>))}</div></CardContent>
// //                     </Card>
// //                 </TabsContent>

// //                 <TabsContent value="keywords" className="mt-6 space-y-6">
// //                     <Card>
// //                         <CardHeader><CardTitle className="flex items-center justify-between"><span className="flex items-center gap-2"><Target className="h-5 w-5 text-blue-600" />Keyword Analysis for {targetRole}</span><Badge variant="outline">Score: {keywordAnalysis.score}%</Badge></CardTitle></CardHeader>
// //                         <CardContent className="space-y-6">
// //                             <div><button onClick={() => toggleSection('missing')} className="flex items-center justify-between w-full text-left"><h4 className="font-semibold text-red-600 flex items-center gap-2"><AlertTriangle className="h-4 w-4" />Missing Critical Keywords ({keywordAnalysis.missing.length})</h4>{expandedSections.has('missing') ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}</button>{expandedSections.has('missing') && (<div className="mt-3 flex flex-wrap gap-2">{keywordAnalysis.missing.map((keyword, index) => (<Badge key={index} variant="outline" className="bg-red-50 text-red-700 border-red-200">{keyword}<Button variant="ghost" size="sm" className="ml-2 h-4 w-4 p-0 hover:bg-red-100"><Plus className="h-3 w-3" /></Button></Badge>))}</div>)}</div>
// //                             <div><button onClick={() => toggleSection('present')} className="flex items-center justify-between w-full text-left"><h4 className="font-semibold text-green-600 flex items-center gap-2"><CheckCircle className="h-4 w-4" />Present Keywords ({keywordAnalysis.present.length})</h4>{expandedSections.has('present') ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}</button>{expandedSections.has('present') && (<div className="mt-3 flex flex-wrap gap-2">{keywordAnalysis.present.map((keyword, index) => (<Badge key={index} variant="outline" className="bg-green-50 text-green-700 border-green-200">{keyword}<CheckCircle className="h-3 w-3 ml-1" /></Badge>))}</div>)}</div>
// //                             <div><button onClick={() => toggleSection('suggested')} className="flex items-center justify-between w-full text-left"><h4 className="font-semibold text-blue-600 flex items-center gap-2"><Star className="h-4 w-4" />Suggested Keywords ({keywordAnalysis.suggested.length})</h4>{expandedSections.has('suggested') ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}</button>{expandedSections.has('suggested') && (<div className="mt-3 flex flex-wrap gap-2">{keywordAnalysis.suggested.map((keyword, index) => (<Badge key={index} variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">{keyword}<Button variant="ghost" size="sm" className="ml-2 h-4 w-4 p-0 hover:bg-blue-100"><Plus className="h-3 w-3" /></Button></Badge>))}</div>)}</div>
// //                         </CardContent>
// //                     </Card>
// //                 </TabsContent>

// //                 <TabsContent value="ats" className="mt-6 space-y-6">
// //                     <Card>
// //                         <CardHeader><CardTitle className="flex items-center justify-between"><span>ATS Compatibility Analysis</span><Badge className="bg-green-50 text-green-700">{atsAnalysis.score}% Compatible</Badge></CardTitle></CardHeader>
// //                         <CardContent className="space-y-6">
// //                             <Progress value={atsAnalysis.score} className="h-3" />
// //                             <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-4">{optimizationStats.map((stat, index) => (<Card key={index} className="border-0 bg-white/70 backdrop-blur-sm hover:bg-white/90 hover:shadow-md transition-all duration-300"><CardContent className="p-3"><div className="flex items-center justify-between"><div><p className="text-xs font-medium text-gray-500 uppercase tracking-wide">{stat.label}</p><p className="text-xl font-bold text-gray-900 mt-1">{stat.value}</p><div className="flex items-center gap-1 mt-1"><TrendingUp className="h-3 w-3 text-green-600" /><p className="text-xs text-green-600 font-medium">{stat.change}</p></div></div><div className={`p-2 ${stat.bgColor} rounded-lg`}><stat.icon className={`h-4 w-4 ${stat.color}`} /></div></div></CardContent></Card>))}</div>
// //                             <div><h4 className="font-semibold mb-3">Issues Found</h4><div className="space-y-3">{atsAnalysis.issues.map((issue, index) => (<div key={index} className={`flex items-start gap-3 p-3 rounded-lg ${issue.type === 'warning' ? 'bg-yellow-50 border border-yellow-200' : 'bg-blue-50 border border-blue-200'}`}><AlertTriangle className="h-4 w-4 text-yellow-600 mt-0.5 flex-shrink-0" /><div><p className="text-sm font-medium">{issue.message}</p><p className="text-xs text-gray-600 mt-1">Section: {issue.section}</p></div></div>))}</div></div>
// //                             <div><h4 className="font-semibold mb-3">Recommended Improvements</h4><div className="space-y-2">{atsAnalysis.improvements.map((improvement, index) => (<div key={index} className="flex items-center gap-3"><div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-xs font-bold">{index + 1}</div><span className="text-sm">{improvement}</span></div>))}</div></div>
// //                         </CardContent>
// //                     </Card>
// //                 </TabsContent>
// //             </Tabs>
// //         </div>
// //     );
// // }


// "use client";

// import { useState, useEffect, FC } from 'react';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { Badge } from '@/components/ui/badge';
// import { Progress } from '@/components/ui/progress';
// import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
// import { Label } from '@/components/ui/label';
// import { Loader2, BarChart3, Target, TrendingUp, Star, CheckCircle, AlertTriangle, Search, Lightbulb, Award, Users, Plus, ChevronDown, ChevronUp, PieChart, Activity } from 'lucide-react';
// import dynamic from 'next/dynamic';

// // Dynamic import for ApexCharts to avoid SSR issues
// const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

// export interface Experience {
//     id?: number;
//     title?: string;
//     company?: string;
//     location?: string;
//     period?: string;
//     achievements?: string[];
// }

// export interface ResumeData {
//     summary?: string;
//     experience?: Experience[];
//     skills?: { [key: string]: string[] } | string[];
//     projects?: any[];
//     education?: any[];
//     personalInfo?: any;
// }

// export interface KeywordAnalysis {
//     missing: string[];
//     present: string[];
//     suggested: string[];
//     score: number;
// }

// export interface AtsIssue {
//     type: 'warning' | 'info';
//     message: string;
//     section: string;
// }

// export interface AtsAnalysis {
//     score: number;
//     issues: AtsIssue[];
//     improvements: string[];
// }

// export interface CompetitorAnalysis {
//     averageExperience: string;
//     commonSkills: string[];
//     standoutFeatures: string[];
//     suggestions: string[];
// }

// export interface OptimizationResultSummary {
//     before: string;
//     after: string;
//     improvements: string[];
// }

// export interface OptimizationResultExperience {
//     optimized: Experience[];
//     improvements: string[];
// }

// export interface OptimizationResultKeywords {
//     added: string[];
//     score: number;
// }

// export interface OptimizationResults {
//     summary: OptimizationResultSummary;
//     experience: OptimizationResultExperience;
//     keywords?: OptimizationResultKeywords;
//     overallScore: number;
// }

// export interface OptimizationStat {
//     label: string;
//     value: string;
//     change: string;
//     icon: FC<any>;
//     color: string;
//     bgColor: string;
// }

// export interface OptimizationPanelProps {
//     resumeData: ResumeData;
//     onUpdate: <K extends keyof ResumeData>(section: K, data: ResumeData[K]) => void;
//     optimizationStats: OptimizationStat[];
//     targetRole: string;
//     jobRoles: string[];
//     onTargetRoleChange: (role: string) => void;
//     keywordAnalysis: KeywordAnalysis | null;
//     atsAnalysis: AtsAnalysis | null;
//     marketAnalysis: CompetitorAnalysis | null;
//     isOptimizing: boolean;
//     optimizationResults: OptimizationResults | null;
//     onOptimize: () => void;
// }

// type ActiveTab = 'analysis' | 'keywords' | 'ats';
// type ExpandedSection = 'missing' | 'present' | 'suggested' | 'keywords';

// export function OptimizationPanel({
//     resumeData,
//     onUpdate,
//     optimizationStats,
//     targetRole,
//     jobRoles,
//     onTargetRoleChange,
//     keywordAnalysis,
//     atsAnalysis,
//     marketAnalysis,
//     isOptimizing,
//     optimizationResults,
//     onOptimize
// }: OptimizationPanelProps) {
//     const [activeTab, setActiveTab] = useState<ActiveTab>('analysis');
//     const [expandedSections, setExpandedSections] = useState<Set<ExpandedSection>>(new Set(['missing', 'suggested']));

//     const isLoading = !keywordAnalysis || !atsAnalysis || !marketAnalysis;

//     const applyOptimizations = () => {
//         if (optimizationResults) {
//             onUpdate('summary', optimizationResults.summary.after);
//             if (optimizationResults.experience.optimized) {
//                 onUpdate('experience', optimizationResults.experience.optimized);
//             }
//         }
//     };

//     const toggleSection = (section: ExpandedSection) => {
//         setExpandedSections(prev => {
//             const newSet = new Set(prev);
//             if (newSet.has(section)) newSet.delete(section);
//             else newSet.add(section);
//             return newSet;
//         });
//     };

//     // Chart configurations
//     const keywordDistributionChart = keywordAnalysis ? {
//         series: [keywordAnalysis.present.length, keywordAnalysis.missing.length],
//         options: {
//             chart: {
//                 type: 'donut' as const,
//                 height: 300,
//                 toolbar: { show: false }
//             },
//             labels: ['Present Keywords', 'Missing Keywords'],
//             colors: ['#10b981', '#ef4444'],
//             dataLabels: {
//                 enabled: true,
//                 formatter: function (val: number) {
//                     return Math.round(val) + '%'
//                 }
//             },
//             legend: {
//                 position: 'bottom' as const,
//                 horizontalAlign: 'center' as const,
//             },
//             plotOptions: {
//                 pie: {
//                     donut: {
//                         size: '65%',
//                         labels: {
//                             show: true,
//                             total: {
//                                 show: true,
//                                 label: 'Keyword Score',
//                                 formatter: () => `${keywordAnalysis.score}%`
//                             }
//                         }
//                     }
//                 }
//             },
//             responsive: [{
//                 breakpoint: 480,
//                 options: {
//                     chart: {
//                         height: 250
//                     },
//                     legend: {
//                         position: 'bottom'
//                     }
//                 }
//             }]
//         }
//     } : null;

//     const skillsCoverageChart = keywordAnalysis ? {
//         series: [{
//             data: [
//                 { x: 'Technical Skills', y: keywordAnalysis.present.filter(k => ['javascript', 'react', 'python', 'aws', 'docker', 'kubernetes'].includes(k.toLowerCase())).length },
//                 { x: 'Soft Skills', y: keywordAnalysis.present.filter(k => ['leadership', 'communication', 'teamwork', 'problem-solving'].includes(k.toLowerCase())).length },
//                 { x: 'Industry Terms', y: keywordAnalysis.present.filter(k => ['agile', 'scrum', 'ci/cd', 'microservices'].includes(k.toLowerCase())).length },
//                 { x: 'Tools & Platforms', y: keywordAnalysis.present.filter(k => ['git', 'jira', 'figma', 'slack'].includes(k.toLowerCase())).length }
//             ]
//         }],
//         options: {
//             chart: {
//                 type: 'bar' as const,
//                 height: 300,
//                 toolbar: { show: false }
//             },
//             plotOptions: {
//                 bar: {
//                     borderRadius: 4,
//                     horizontal: false,
//                     columnWidth: '60%',
//                 }
//             },
//             dataLabels: {
//                 enabled: false
//             },
//             colors: ['#3b82f6'],
//             xaxis: {
//                 categories: ['Technical', 'Soft Skills', 'Industry', 'Tools']
//             },
//             yaxis: {
//                 title: {
//                     text: 'Keywords Count'
//                 }
//             },
//             grid: {
//                 show: true,
//                 borderColor: '#e5e7eb'
//             }
//         }
//     } : null;

//     const atsScoreChart = atsAnalysis ? {
//         series: [atsAnalysis.score],
//         options: {
//             chart: {
//                 height: 280,
//                 type: 'radialBar' as const,
//                 toolbar: { show: false }
//             },
//             plotOptions: {
//                 radialBar: {
//                     startAngle: -135,
//                     endAngle: 225,
//                     hollow: {
//                         margin: 0,
//                         size: '70%',
//                         background: '#fff',
//                         image: undefined,
//                         position: 'front',
//                         dropShadow: {
//                             enabled: true,
//                             top: 3,
//                             left: 0,
//                             blur: 4,
//                             opacity: 0.24
//                         }
//                     },
//                     track: {
//                         background: '#fff',
//                         strokeWidth: '67%',
//                         margin: 0,
//                         dropShadow: {
//                             enabled: true,
//                             top: -3,
//                             left: 0,
//                             blur: 4,
//                             opacity: 0.35
//                         }
//                     },
//                     dataLabels: {
//                         show: true,
//                         name: {
//                             offsetY: -10,
//                             show: true,
//                             color: '#888',
//                             fontSize: '17px'
//                         },
//                         value: {
//                             formatter: function (val: number) {
//                                 return parseInt(val.toString(), 10).toString() + '%';
//                             },
//                             color: '#111',
//                             fontSize: '36px',
//                             show: true,
//                         }
//                     }
//                 }
//             },
//             fill: {
//                 type: 'gradient',
//                 gradient: {
//                     shade: 'dark',
//                     type: 'horizontal',
//                     shadeIntensity: 0.5,
//                     gradientToColors: ['#10b981'],
//                     inverseColors: true,
//                     opacityFrom: 1,
//                     opacityTo: 1,
//                     stops: [0, 100]
//                 }
//             },
//             colors: ['#3b82f6'],
//             labels: ['ATS Score'],
//         }
//     } : null;

//     if (isLoading) {
//         return (
//             <div className="flex justify-center items-center p-20">
//                 <Loader2 className="h-10 w-10 animate-spin text-gray-400" />
//                 <span className="ml-3 text-gray-600">Analyzing your resume...</span>
//             </div>
//         );
//     }

//     return (
//         <div className="space-y-6">
//             <Card>
//                 <CardHeader>
//                     <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
//                         <div>
//                             <CardTitle className="flex items-center gap-2">
//                                 <BarChart3 className="h-5 w-5 text-blue-600" />
//                                 Resume Optimization Center
//                             </CardTitle>
//                             <p className="text-sm text-gray-600 mt-1">Analyze and optimize your resume for maximum impact</p>
//                         </div>
//                         <div className="flex items-center gap-4">
//                             <div className="flex items-center gap-2">
//                                 <Label className="text-sm font-medium">Target Role:</Label>
//                                 <select
//                                     value={targetRole}
//                                     onChange={(e) => onTargetRoleChange(e.target.value)}
//                                     className="px-3 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//                                 >
//                                     {jobRoles.map(role => (
//                                         <option key={role} value={role}>{role}</option>
//                                     ))}
//                                 </select>
//                             </div>
//                             <Button
//                                 onClick={onOptimize}
//                                 disabled={isOptimizing}
//                                 className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
//                             >
//                                 {isOptimizing ? (
//                                     <>
//                                         <Loader2 className="h-4 w-4 mr-2 animate-spin" />
//                                         Optimizing...
//                                     </>
//                                 ) : (
//                                     <>
//                                         <Star className="h-4 w-4 mr-2" />
//                                         AI Optimize
//                                     </>
//                                 )}
//                             </Button>
//                         </div>
//                     </div>
//                 </CardHeader>
//             </Card>

//             {optimizationResults && (
//                 <Card className="border-green-200 bg-green-50">
//                     <CardHeader>
//                         <CardTitle className="flex items-center gap-2 text-green-800">
//                             <CheckCircle className="h-5 w-5" />
//                             Optimization Complete
//                         </CardTitle>
//                     </CardHeader>
//                     <CardContent>
//                         <div className="flex items-center justify-between">
//                             <div>
//                                 <p className="text-sm text-green-700">
//                                     Your resume has been optimized with a new score of {optimizationResults.overallScore}%
//                                 </p>
//                                 <p className="text-xs text-green-600 mt-1">
//                                     {optimizationResults.keywords?.added.length || 0} keywords added,
//                                     {optimizationResults.experience.improvements.length} improvements made
//                                 </p>
//                             </div>
//                             <Button onClick={applyOptimizations} size="sm">
//                                 Apply Changes
//                             </Button>
//                         </div>
//                     </CardContent>
//                 </Card>
//             )}

//             <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as ActiveTab)} className="w-full">
//                 <TabsList className="grid w-full grid-cols-3 bg-white shadow-sm border">
//                     <TabsTrigger value="analysis" className="flex items-center gap-2">
//                         <Search className="h-4 w-4" />Analysis
//                     </TabsTrigger>
//                     <TabsTrigger value="keywords" className="flex items-center gap-2">
//                         <Target className="h-4 w-4" />Keywords
//                     </TabsTrigger>
//                     <TabsTrigger value="ats" className="flex items-center gap-2">
//                         <CheckCircle className="h-4 w-4" />ATS Check
//                     </TabsTrigger>
//                 </TabsList>

//                 <TabsContent value="analysis" className="mt-6 space-y-6">
//                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//                         <Card>
//                             <CardHeader>
//                                 <CardTitle className="flex items-center gap-2">
//                                     <Award className="h-5 w-5 text-yellow-600" />
//                                     Overall Resume Score
//                                 </CardTitle>
//                             </CardHeader>
//                             <CardContent>
//                                 <div className="text-center">
//                                     <div className="text-4xl font-bold text-blue-600 mb-2">{atsAnalysis.score}%</div>
//                                     <Progress value={atsAnalysis.score} className="mb-4" />
//                                     <div className="grid grid-cols-2 gap-4 text-sm">
//                                         <div>
//                                             <div className="font-semibold text-green-600">Strengths</div>
//                                             <ul className="text-gray-600 text-xs mt-1">
//                                                 <li>• Strong technical skills</li>
//                                                 <li>• Relevant experience</li>
//                                                 {keywordAnalysis && keywordAnalysis.present.length > 5 && (
//                                                     <li>• Good keyword coverage</li>
//                                                 )}
//                                             </ul>
//                                         </div>
//                                         <div>
//                                             <div className="font-semibold text-orange-600">Areas to Improve</div>
//                                             <ul className="text-gray-600 text-xs mt-1">
//                                                 {keywordAnalysis && keywordAnalysis.missing.length > 0 && (
//                                                     <li>• Add {keywordAnalysis.missing.length} keywords</li>
//                                                 )}
//                                                 <li>• Add quantified results</li>
//                                                 {atsAnalysis.issues.length > 0 && (
//                                                     <li>• Fix {atsAnalysis.issues.length} ATS issues</li>
//                                                 )}
//                                             </ul>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </CardContent>
//                         </Card>

//                         <Card>
//                             <CardHeader>
//                                 <CardTitle className="flex items-center gap-2">
//                                     <Users className="h-5 w-5 text-purple-600" />
//                                     Market Analysis
//                                 </CardTitle>
//                             </CardHeader>
//                             <CardContent className="space-y-4">
//                                 <div className="flex justify-between items-center">
//                                     <span className="text-sm text-gray-600">Your Experience</span>
//                                     <span className="font-semibold">
//                                         {resumeData.experience?.length || 0}+ roles
//                                     </span>
//                                 </div>
//                                 <div className="flex justify-between items-center">
//                                     <span className="text-sm text-gray-600">Market Average</span>
//                                     <span className="font-semibold">{marketAnalysis.averageExperience}</span>
//                                 </div>
//                                 <div className="pt-3 border-t">
//                                     <h4 className="font-semibold text-sm mb-2">Your Unique Advantages:</h4>
//                                     <ul className="space-y-1">
//                                         {marketAnalysis.standoutFeatures.map((feature, index) => (
//                                             <li key={index} className="flex items-center gap-2 text-sm">
//                                                 <CheckCircle className="h-3 w-3 text-green-600" />
//                                                 {feature}
//                                             </li>
//                                         ))}
//                                     </ul>
//                                 </div>
//                             </CardContent>
//                         </Card>
//                     </div>

//                     <Card>
//                         <CardHeader>
//                             <CardTitle className="flex items-center gap-2">
//                                 <Lightbulb className="h-5 w-5 text-yellow-600" />
//                                 Detailed Insights
//                             </CardTitle>
//                         </CardHeader>
//                         <CardContent>
//                             <div className="space-y-4">
//                                 {marketAnalysis.suggestions.map((suggestion, index) => (
//                                     <div key={index} className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg">
//                                         <TrendingUp className="h-4 w-4 text-yellow-600 mt-0.5 flex-shrink-0" />
//                                         <span className="text-sm">{suggestion}</span>
//                                     </div>
//                                 ))}
//                             </div>
//                         </CardContent>
//                     </Card>
//                 </TabsContent>

//                 <TabsContent value="keywords" className="mt-6 space-y-6">
//                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//                         <Card>
//                             <CardHeader>
//                                 <CardTitle className="flex items-center gap-2">
//                                     <PieChart className="h-5 w-5 text-blue-600" />
//                                     Keyword Distribution
//                                 </CardTitle>
//                             </CardHeader>
//                             <CardContent>
//                                 {keywordDistributionChart && (
//                                     <ReactApexChart
//                                         options={keywordDistributionChart.options}
//                                         series={keywordDistributionChart.series}
//                                         type="donut"
//                                         height={300}
//                                     />
//                                 )}
//                             </CardContent>
//                         </Card>

//                         <Card>
//                             <CardHeader>
//                                 <CardTitle className="flex items-center gap-2">
//                                     <Activity className="h-5 w-5 text-green-600" />
//                                     Skills Coverage
//                                 </CardTitle>
//                             </CardHeader>
//                             <CardContent>
//                                 {skillsCoverageChart && (
//                                     <ReactApexChart
//                                         options={skillsCoverageChart.options}
//                                         series={skillsCoverageChart.series}
//                                         type="bar"
//                                         height={300}
//                                     />
//                                 )}
//                             </CardContent>
//                         </Card>
//                     </div>

//                     <Card>
//                         <CardHeader>
//                             <CardTitle className="flex items-center justify-between">
//                                 <span className="flex items-center gap-2">
//                                     <Target className="h-5 w-5 text-blue-600" />
//                                     Keyword Analysis for {targetRole}
//                                 </span>
//                                 <Badge variant="outline">Score: {keywordAnalysis.score}%</Badge>
//                             </CardTitle>
//                         </CardHeader>
//                         <CardContent className="space-y-6">
//                             <div>
//                                 <button
//                                     onClick={() => toggleSection('missing')}
//                                     className="flex items-center justify-between w-full text-left"
//                                 >
//                                     <h4 className="font-semibold text-red-600 flex items-center gap-2">
//                                         <AlertTriangle className="h-4 w-4" />
//                                         Missing Critical Keywords ({keywordAnalysis.missing.length})
//                                     </h4>
//                                     {expandedSections.has('missing') ?
//                                         <ChevronUp className="h-4 w-4" /> :
//                                         <ChevronDown className="h-4 w-4" />
//                                     }
//                                 </button>
//                                 {expandedSections.has('missing') && (
//                                     <div className="mt-3 flex flex-wrap gap-2">
//                                         {keywordAnalysis.missing.map((keyword, index) => (
//                                             <Badge key={index} variant="outline" className="bg-red-50 text-red-700 border-red-200">
//                                                 {keyword}
//                                                 <Button variant="ghost" size="sm" className="ml-2 h-4 w-4 p-0 hover:bg-red-100">
//                                                     <Plus className="h-3 w-3" />
//                                                 </Button>
//                                             </Badge>
//                                         ))}
//                                     </div>
//                                 )}
//                             </div>

//                             <div>
//                                 <button
//                                     onClick={() => toggleSection('present')}
//                                     className="flex items-center justify-between w-full text-left"
//                                 >
//                                     <h4 className="font-semibold text-green-600 flex items-center gap-2">
//                                         <CheckCircle className="h-4 w-4" />
//                                         Present Keywords ({keywordAnalysis.present.length})
//                                     </h4>
//                                     {expandedSections.has('present') ?
//                                         <ChevronUp className="h-4 w-4" /> :
//                                         <ChevronDown className="h-4 w-4" />
//                                     }
//                                 </button>
//                                 {expandedSections.has('present') && (
//                                     <div className="mt-3 flex flex-wrap gap-2">
//                                         {keywordAnalysis.present.map((keyword, index) => (
//                                             <Badge key={index} variant="outline" className="bg-green-50 text-green-700 border-green-200">
//                                                 {keyword}
//                                                 <CheckCircle className="h-3 w-3 ml-1" />
//                                             </Badge>
//                                         ))}
//                                     </div>
//                                 )}
//                             </div>

//                             <div>
//                                 <button
//                                     onClick={() => toggleSection('suggested')}
//                                     className="flex items-center justify-between w-full text-left"
//                                 >
//                                     <h4 className="font-semibold text-blue-600 flex items-center gap-2">
//                                         <Star className="h-4 w-4" />
//                                         Suggested Keywords ({keywordAnalysis.suggested.length})
//                                     </h4>
//                                     {expandedSections.has('suggested') ?
//                                         <ChevronUp className="h-4 w-4" /> :
//                                         <ChevronDown className="h-4 w-4" />
//                                     }
//                                 </button>
//                                 {expandedSections.has('suggested') && (
//                                     <div className="mt-3 flex flex-wrap gap-2">
//                                         {keywordAnalysis.suggested.map((keyword, index) => (
//                                             <Badge key={index} variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
//                                                 {keyword}
//                                                 <Button variant="ghost" size="sm" className="ml-2 h-4 w-4 p-0 hover:bg-blue-100">
//                                                     <Plus className="h-3 w-3" />
//                                                 </Button>
//                                             </Badge>
//                                         ))}
//                                     </div>
//                                 )}
//                             </div>
//                         </CardContent>
//                     </Card>
//                 </TabsContent>

//                 <TabsContent value="ats" className="mt-6 space-y-6">
//                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//                         <Card>
//                             <CardHeader>
//                                 <CardTitle className="flex items-center justify-between">
//                                     <span>ATS Compatibility Analysis</span>
//                                     <Badge className="bg-green-50 text-green-700">{atsAnalysis.score}% Compatible</Badge>
//                                 </CardTitle>
//                             </CardHeader>
//                             <CardContent>
//                                 <Progress value={atsAnalysis.score} className="h-3 mb-6" />

//                                 <div>
//                                     <h4 className="font-semibold mb-3">Issues Found</h4>
//                                     <div className="space-y-3">
//                                         {atsAnalysis.issues.map((issue, index) => (
//                                             <div key={index} className={`flex items-start gap-3 p-3 rounded-lg ${issue.type === 'warning'
//                                                     ? 'bg-yellow-50 border border-yellow-200'
//                                                     : 'bg-blue-50 border border-blue-200'
//                                                 }`}>
//                                                 <AlertTriangle className="h-4 w-4 text-yellow-600 mt-0.5 flex-shrink-0" />
//                                                 <div>
//                                                     <p className="text-sm font-medium">{issue.message}</p>
//                                                     <p className="text-xs text-gray-600 mt-1">Section: {issue.section}</p>
//                                                 </div>
//                                             </div>
//                                         ))}
//                                     </div>
//                                 </div>
//                             </CardContent>
//                         </Card>

//                         <Card>
//                             <CardHeader>
//                                 <CardTitle className="flex items-center gap-2">
//                                     <Target className="h-5 w-5 text-blue-600" />
//                                     ATS Score Breakdown
//                                 </CardTitle>
//                             </CardHeader>
//                             <CardContent>
//                                 {atsScoreChart && (
//                                     <ReactApexChart
//                                         options={atsScoreChart.options}
//                                         series={atsScoreChart.series}
//                                         type="radialBar"
//                                         height={280}
//                                     />
//                                 )}
//                             </CardContent>
//                         </Card>
//                     </div>

//                     <Card>
//                         <CardHeader>
//                             <CardTitle>Performance Metrics</CardTitle>
//                         </CardHeader>
//                         <CardContent>
//                             <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
//                                 {optimizationStats.map((stat, index) => (
//                                     <Card key={index} className="border-0 bg-white/70 backdrop-blur-sm hover:bg-white/90 hover:shadow-md transition-all duration-300">
//                                         <CardContent className="p-3">
//                                             <div className="flex items-center justify-between">
//                                                 <div>
//                                                     <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">{stat.label}</p>
//                                                     <p className="text-xl font-bold text-gray-900 mt-1">{stat.value}</p>
//                                                     <div className="flex items-center gap-1 mt-1">
//                                                         <TrendingUp className="h-3 w-3 text-green-600" />
//                                                         <p className="text-xs text-green-600 font-medium">{stat.change}</p>
//                                                     </div>
//                                                 </div>
//                                                 <div className={`p-2 ${stat.bgColor} rounded-lg`}>
//                                                     <stat.icon className={`h-4 w-4 ${stat.color}`} />
//                                                 </div>
//                                             </div>
//                                         </CardContent>
//                                     </Card>
//                                 ))}
//                             </div>
//                         </CardContent>
//                     </Card>

//                     <Card>
//                         <CardHeader>
//                             <CardTitle>Recommended Improvements</CardTitle>
//                         </CardHeader>
//                         <CardContent>
//                             <div className="space-y-2">
//                                 {atsAnalysis.improvements.map((improvement, index) => (
//                                     <div key={index} className="flex items-center gap-3">
//                                         <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-xs font-bold">
//                                             {index + 1}
//                                         </div>
//                                         <span className="text-sm">{improvement}</span>
//                                     </div>
//                                 ))}
//                             </div>
//                         </CardContent>
//                     </Card>
//                 </TabsContent>
//             </Tabs>
//         </div>
//     );
// }



"use client";

import { useState, useEffect, FC } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Label } from '@/components/ui/label';
import { Loader2, BarChart3, Target, TrendingUp, Star, CheckCircle, AlertTriangle, Search, Lightbulb, Award, Users, Plus, ChevronDown, ChevronUp, PieChart, Activity } from 'lucide-react';
import dynamic from 'next/dynamic';

// Dynamic import for ApexCharts to avoid SSR issues
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

export interface Experience {
    id?: number;
    title?: string;
    company?: string;
    location?: string;
    period?: string;
    achievements?: string[];
}

export interface ResumeData {
    summary?: string;
    experience?: Experience[];
    skills?: { [key: string]: string[] } | string[];
    projects?: any[];
    education?: any[];
    personalInfo?: any;
}

export interface KeywordAnalysis {
    missing: string[];
    present: string[];
    suggested: string[];
    score: number;
}

export interface AtsIssue {
    type: 'warning' | 'info';
    message: string;
    section: string;
}

export interface AtsAnalysis {
    score: number;
    issues: AtsIssue[];
    improvements: string[];
}

export interface CompetitorAnalysis {
    averageExperience: string;
    commonSkills: string[];
    standoutFeatures: string[];
    suggestions: string[];
}

export interface OptimizationResultSummary {
    before: string;
    after: string;
    improvements: string[];
}

export interface OptimizationResultExperience {
    optimized: Experience[];
    improvements: string[];
}

export interface OptimizationResultKeywords {
    added: string[];
    score: number;
}

export interface OptimizationResults {
    summary: OptimizationResultSummary;
    experience: OptimizationResultExperience;
    keywords?: OptimizationResultKeywords;
    overallScore: number;
}

export interface OptimizationStat {
    label: string;
    value: string;
    change: string;
    icon: FC<any>;
    color: string;
    bgColor: string;
}

export interface OptimizationPanelProps {
    resumeData: ResumeData;
    onUpdate: <K extends keyof ResumeData>(section: K, data: ResumeData[K]) => void;
    optimizationStats: OptimizationStat[];
    targetRole: string;
    jobRoles: string[];
    onTargetRoleChange: (role: string) => void;
    keywordAnalysis: KeywordAnalysis | null;
    atsAnalysis: AtsAnalysis | null;
    marketAnalysis: CompetitorAnalysis | null;
    isOptimizing: boolean;
    optimizationResults: OptimizationResults | null;
    onOptimize: () => void;
    onApplyOptimizations: () => void;
}

type ActiveTab = 'analysis' | 'keywords' | 'ats';
type ExpandedSection = 'missing' | 'present' | 'suggested' | 'keywords';

export function OptimizationPanel({
    resumeData,
    onUpdate,
    optimizationStats,
    targetRole,
    jobRoles,
    onTargetRoleChange,
    keywordAnalysis,
    atsAnalysis,
    marketAnalysis,
    isOptimizing,
    optimizationResults,
    onOptimize,
    onApplyOptimizations
}: OptimizationPanelProps) {
    const [activeTab, setActiveTab] = useState<ActiveTab>('analysis');
    const [expandedSections, setExpandedSections] = useState<Set<ExpandedSection>>(new Set(['missing', 'suggested']));

    const isLoading = !keywordAnalysis || !atsAnalysis || !marketAnalysis;

    const toggleSection = (section: ExpandedSection) => {
        setExpandedSections(prev => {
            const newSet = new Set(prev);
            if (newSet.has(section)) newSet.delete(section);
            else newSet.add(section);
            return newSet;
        });
    };

    // Chart configurations
    const keywordDistributionChart = keywordAnalysis ? {
        series: [keywordAnalysis.present.length, keywordAnalysis.missing.length],
        options: {
            chart: {
                type: 'donut' as const,
                height: 300,
                toolbar: { show: false }
            },
            labels: ['Present Keywords', 'Missing Keywords'],
            colors: ['#10b981', '#ef4444'],
            dataLabels: {
                enabled: true,
                formatter: function (val: number) {
                    return Math.round(val) + '%'
                }
            },
            legend: {
                position: 'bottom' as const,
                horizontalAlign: 'center' as const,
            },
            plotOptions: {
                pie: {
                    donut: {
                        size: '65%',
                        labels: {
                            show: true,
                            total: {
                                show: true,
                                label: 'Keyword Score',
                                formatter: () => `${keywordAnalysis.score}%`
                            }
                        }
                    }
                }
            },
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        height: 250
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }]
        }
    } : null;

    const skillsCoverageChart = keywordAnalysis ? {
        series: [{
            data: [
                { x: 'Technical Skills', y: keywordAnalysis.present.filter(k => ['javascript', 'react', 'python', 'aws', 'docker', 'kubernetes'].includes(k.toLowerCase())).length },
                { x: 'Soft Skills', y: keywordAnalysis.present.filter(k => ['leadership', 'communication', 'teamwork', 'problem-solving'].includes(k.toLowerCase())).length },
                { x: 'Industry Terms', y: keywordAnalysis.present.filter(k => ['agile', 'scrum', 'ci/cd', 'microservices'].includes(k.toLowerCase())).length },
                { x: 'Tools & Platforms', y: keywordAnalysis.present.filter(k => ['git', 'jira', 'figma', 'slack'].includes(k.toLowerCase())).length }
            ]
        }],
        options: {
            chart: {
                type: 'bar' as const,
                height: 300,
                toolbar: { show: false }
            },
            plotOptions: {
                bar: {
                    borderRadius: 4,
                    horizontal: false,
                    columnWidth: '60%',
                }
            },
            dataLabels: {
                enabled: false
            },
            colors: ['#3b82f6'],
            xaxis: {
                categories: ['Technical', 'Soft Skills', 'Industry', 'Tools']
            },
            yaxis: {
                title: {
                    text: 'Keywords Count'
                }
            },
            grid: {
                show: true,
                borderColor: '#e5e7eb'
            }
        }
    } : null;

    const atsScoreChart = atsAnalysis ? {
        series: [atsAnalysis.score],
        options: {
            chart: {
                height: 280,
                type: 'radialBar' as const,
                toolbar: { show: false }
            },
            plotOptions: {
                radialBar: {
                    startAngle: -135,
                    endAngle: 225,
                    hollow: {
                        margin: 0,
                        size: '70%',
                        background: '#fff',
                        image: undefined,
                        position: 'front',
                        dropShadow: {
                            enabled: true,
                            top: 3,
                            left: 0,
                            blur: 4,
                            opacity: 0.24
                        }
                    },
                    track: {
                        background: '#fff',
                        strokeWidth: '67%',
                        margin: 0,
                        dropShadow: {
                            enabled: true,
                            top: -3,
                            left: 0,
                            blur: 4,
                            opacity: 0.35
                        }
                    },
                    dataLabels: {
                        show: true,
                        name: {
                            offsetY: -10,
                            show: true,
                            color: '#888',
                            fontSize: '17px'
                        },
                        value: {
                            formatter: function (val: number) {
                                return parseInt(val.toString(), 10).toString() + '%';
                            },
                            color: '#111',
                            fontSize: '36px',
                            show: true,
                        }
                    }
                }
            },
            fill: {
                type: 'gradient',
                gradient: {
                    shade: 'dark',
                    type: 'horizontal',
                    shadeIntensity: 0.5,
                    gradientToColors: ['#10b981'],
                    inverseColors: true,
                    opacityFrom: 1,
                    opacityTo: 1,
                    stops: [0, 100]
                }
            },
            colors: ['#3b82f6'],
            labels: ['ATS Score'],
        }
    } : null;

    if (isLoading) {
        return (
            <div className="flex justify-center items-center p-20">
                <Loader2 className="h-10 w-10 animate-spin text-gray-400" />
                <span className="ml-3 text-gray-600">Analyzing your resume...</span>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <Card>
                <CardHeader>
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                        <div>
                            <CardTitle className="flex items-center gap-2">
                                <BarChart3 className="h-5 w-5 text-blue-600" />
                                Resume Optimization Center
                            </CardTitle>
                            <p className="text-sm text-gray-600 mt-1">Analyze and optimize your resume for maximum impact</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                                <Label className="text-sm font-medium">Target Role:</Label>
                                <select
                                    value={targetRole}
                                    onChange={(e) => onTargetRoleChange(e.target.value)}
                                    className="px-3 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    {jobRoles.map(role => (
                                        <option key={role} value={role}>{role}</option>
                                    ))}
                                </select>
                            </div>
                            <Button
                                onClick={onOptimize}
                                disabled={isOptimizing}
                                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                            >
                                {isOptimizing ? (
                                    <>
                                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                                        Optimizing...
                                    </>
                                ) : (
                                    <>
                                        <Star className="h-4 w-4 mr-2" />
                                        AI Optimize
                                    </>
                                )}
                            </Button>
                        </div>
                    </div>
                </CardHeader>
            </Card>

            {optimizationResults && (
                <Card className="border-green-200 bg-green-50">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-green-800">
                            <CheckCircle className="h-5 w-5" />
                            Optimization Complete
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-green-700">
                                        Your resume has been optimized with a new score of {optimizationResults.overallScore}%
                                    </p>
                                    <p className="text-xs text-green-600 mt-1">
                                        {optimizationResults.keywords?.added.length || 0} keywords added,
                                        {optimizationResults.experience.improvements.length} improvements made
                                    </p>
                                </div>
                                <Button onClick={onApplyOptimizations} size="sm" className="bg-green-600 hover:bg-green-700">
                                    Apply Changes
                                </Button>
                            </div>

                            {/* Preview of changes */}
                            <div className="border-t pt-4">
                                <h4 className="font-medium text-sm mb-2 text-green-800">Preview of Changes:</h4>
                                <div className="space-y-2 text-xs">
                                    <div className="flex items-center gap-2">
                                        <Badge variant="outline" className="bg-green-100 text-green-700">Summary</Badge>
                                        <span className="text-green-600">Enhanced with metrics and impact statements</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Badge variant="outline" className="bg-green-100 text-green-700">Experience</Badge>
                                        <span className="text-green-600">Added {optimizationResults.experience.optimized.length} quantified achievements</span>
                                    </div>
                                    {optimizationResults.keywords && (
                                        <div className="flex items-center gap-2">
                                            <Badge variant="outline" className="bg-green-100 text-green-700">Keywords</Badge>
                                            <span className="text-green-600">Integrated {optimizationResults.keywords.added.length} new keywords</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            )}

            <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as ActiveTab)} className="w-full">
                <TabsList className="grid w-full grid-cols-3 bg-white shadow-sm border">
                    <TabsTrigger value="analysis" className="flex items-center gap-2">
                        <Search className="h-4 w-4" />Analysis
                    </TabsTrigger>
                    <TabsTrigger value="keywords" className="flex items-center gap-2">
                        <Target className="h-4 w-4" />Keywords
                    </TabsTrigger>
                    <TabsTrigger value="ats" className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4" />ATS Check
                    </TabsTrigger>
                </TabsList>

                <TabsContent value="analysis" className="mt-6 space-y-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Award className="h-5 w-5 text-yellow-600" />
                                    Overall Resume Score
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="text-center">
                                    <div className="text-4xl font-bold text-blue-600 mb-2">{atsAnalysis.score}%</div>
                                    <Progress value={atsAnalysis.score} className="mb-4" />
                                    <div className="grid grid-cols-2 gap-4 text-sm">
                                        <div>
                                            <div className="font-semibold text-green-600">Strengths</div>
                                            <ul className="text-gray-600 text-xs mt-1">
                                                <li>• Strong technical skills</li>
                                                <li>• Relevant experience</li>
                                                {keywordAnalysis && keywordAnalysis.present.length > 5 && (
                                                    <li>• Good keyword coverage</li>
                                                )}
                                            </ul>
                                        </div>
                                        <div>
                                            <div className="font-semibold text-orange-600">Areas to Improve</div>
                                            <ul className="text-gray-600 text-xs mt-1">
                                                {keywordAnalysis && keywordAnalysis.missing.length > 0 && (
                                                    <li>• Add {keywordAnalysis.missing.length} keywords</li>
                                                )}
                                                <li>• Add quantified results</li>
                                                {atsAnalysis.issues.length > 0 && (
                                                    <li>• Fix {atsAnalysis.issues.length} ATS issues</li>
                                                )}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Users className="h-5 w-5 text-purple-600" />
                                    Market Analysis
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-gray-600">Your Experience</span>
                                    <span className="font-semibold">
                                        {resumeData.experience?.length || 0}+ roles
                                    </span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-gray-600">Market Average</span>
                                    <span className="font-semibold">{marketAnalysis.averageExperience}</span>
                                </div>
                                <div className="pt-3 border-t">
                                    <h4 className="font-semibold text-sm mb-2">Your Unique Advantages:</h4>
                                    <ul className="space-y-1">
                                        {marketAnalysis.standoutFeatures.map((feature, index) => (
                                            <li key={index} className="flex items-center gap-2 text-sm">
                                                <CheckCircle className="h-3 w-3 text-green-600" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Lightbulb className="h-5 w-5 text-yellow-600" />
                                Detailed Insights
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {marketAnalysis.suggestions.map((suggestion, index) => (
                                    <div key={index} className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg">
                                        <TrendingUp className="h-4 w-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                                        <span className="text-sm">{suggestion}</span>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="keywords" className="mt-6 space-y-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <PieChart className="h-5 w-5 text-blue-600" />
                                    Keyword Distribution
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                {keywordDistributionChart && (
                                    <ReactApexChart
                                        options={keywordDistributionChart.options}
                                        series={keywordDistributionChart.series}
                                        type="donut"
                                        height={300}
                                    />
                                )}
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Activity className="h-5 w-5 text-green-600" />
                                    Skills Coverage
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                {skillsCoverageChart && (
                                    <ReactApexChart
                                        options={skillsCoverageChart.options}
                                        series={skillsCoverageChart.series}
                                        type="bar"
                                        height={300}
                                    />
                                )}
                            </CardContent>
                        </Card>
                    </div>

                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center justify-between">
                                <span className="flex items-center gap-2">
                                    <Target className="h-5 w-5 text-blue-600" />
                                    Keyword Analysis for {targetRole}
                                </span>
                                <Badge variant="outline">Score: {keywordAnalysis.score}%</Badge>
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div>
                                <button
                                    onClick={() => toggleSection('missing')}
                                    className="flex items-center justify-between w-full text-left"
                                >
                                    <h4 className="font-semibold text-red-600 flex items-center gap-2">
                                        <AlertTriangle className="h-4 w-4" />
                                        Missing Critical Keywords ({keywordAnalysis.missing.length})
                                    </h4>
                                    {expandedSections.has('missing') ?
                                        <ChevronUp className="h-4 w-4" /> :
                                        <ChevronDown className="h-4 w-4" />
                                    }
                                </button>
                                {expandedSections.has('missing') && (
                                    <div className="mt-3 flex flex-wrap gap-2">
                                        {keywordAnalysis.missing.map((keyword, index) => (
                                            <Badge key={index} variant="outline" className="bg-red-50 text-red-700 border-red-200">
                                                {keyword}
                                                <Button variant="ghost" size="sm" className="ml-2 h-4 w-4 p-0 hover:bg-red-100">
                                                    <Plus className="h-3 w-3" />
                                                </Button>
                                            </Badge>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <div>
                                <button
                                    onClick={() => toggleSection('present')}
                                    className="flex items-center justify-between w-full text-left"
                                >
                                    <h4 className="font-semibold text-green-600 flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4" />
                                        Present Keywords ({keywordAnalysis.present.length})
                                    </h4>
                                    {expandedSections.has('present') ?
                                        <ChevronUp className="h-4 w-4" /> :
                                        <ChevronDown className="h-4 w-4" />
                                    }
                                </button>
                                {expandedSections.has('present') && (
                                    <div className="mt-3 flex flex-wrap gap-2">
                                        {keywordAnalysis.present.map((keyword, index) => (
                                            <Badge key={index} variant="outline" className="bg-green-50 text-green-700 border-green-200">
                                                {keyword}
                                                <CheckCircle className="h-3 w-3 ml-1" />
                                            </Badge>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <div>
                                <button
                                    onClick={() => toggleSection('suggested')}
                                    className="flex items-center justify-between w-full text-left"
                                >
                                    <h4 className="font-semibold text-blue-600 flex items-center gap-2">
                                        <Star className="h-4 w-4" />
                                        Suggested Keywords ({keywordAnalysis.suggested.length})
                                    </h4>
                                    {expandedSections.has('suggested') ?
                                        <ChevronUp className="h-4 w-4" /> :
                                        <ChevronDown className="h-4 w-4" />
                                    }
                                </button>
                                {expandedSections.has('suggested') && (
                                    <div className="mt-3 flex flex-wrap gap-2">
                                        {keywordAnalysis.suggested.map((keyword, index) => (
                                            <Badge key={index} variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                                                {keyword}
                                                <Button variant="ghost" size="sm" className="ml-2 h-4 w-4 p-0 hover:bg-blue-100">
                                                    <Plus className="h-3 w-3" />
                                                </Button>
                                            </Badge>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="ats" className="mt-6 space-y-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center justify-between">
                                    <span>ATS Compatibility Analysis</span>
                                    <Badge className="bg-green-50 text-green-700">{atsAnalysis.score}% Compatible</Badge>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Progress value={atsAnalysis.score} className="h-3 mb-6" />

                                <div>
                                    <h4 className="font-semibold mb-3">Issues Found</h4>
                                    <div className="space-y-3">
                                        {atsAnalysis.issues.map((issue, index) => (
                                            <div key={index} className={`flex items-start gap-3 p-3 rounded-lg ${issue.type === 'warning'
                                                ? 'bg-yellow-50 border border-yellow-200'
                                                : 'bg-blue-50 border border-blue-200'
                                                }`}>
                                                <AlertTriangle className="h-4 w-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                                                <div>
                                                    <p className="text-sm font-medium">{issue.message}</p>
                                                    <p className="text-xs text-gray-600 mt-1">Section: {issue.section}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Target className="h-5 w-5 text-blue-600" />
                                    ATS Score Breakdown
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                {atsScoreChart && (
                                    <ReactApexChart
                                        options={atsScoreChart.options}
                                        series={atsScoreChart.series}
                                        type="radialBar"
                                        height={280}
                                    />
                                )}
                            </CardContent>
                        </Card>
                    </div>

                    <Card>
                        <CardHeader>
                            <CardTitle>Performance Metrics</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                                {optimizationStats.map((stat, index) => (
                                    <Card key={index} className="border-0 bg-white/70 backdrop-blur-sm hover:bg-white/90 hover:shadow-md transition-all duration-300">
                                        <CardContent className="p-3">
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">{stat.label}</p>
                                                    <p className="text-xl font-bold text-gray-900 mt-1">{stat.value}</p>
                                                    <div className="flex items-center gap-1 mt-1">
                                                        <TrendingUp className="h-3 w-3 text-green-600" />
                                                        <p className="text-xs text-green-600 font-medium">{stat.change}</p>
                                                    </div>
                                                </div>
                                                <div className={`p-2 ${stat.bgColor} rounded-lg`}>
                                                    <stat.icon className={`h-4 w-4 ${stat.color}`} />
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Recommended Improvements</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-2">
                                {atsAnalysis.improvements.map((improvement, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-xs font-bold">
                                            {index + 1}
                                        </div>
                                        <span className="text-sm">{improvement}</span>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
}