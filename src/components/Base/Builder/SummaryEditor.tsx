
// // // // import { useState, ChangeEvent } from 'react';
// // // // import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// // // // import { Button } from '@/components/ui/button';
// // // // import { Textarea } from '@/components/ui/textarea';
// // // // import { Badge } from '@/components/ui/badge';
// // // // import {
// // // //     FileText,
// // // //     Save,
// // // //     X,
// // // //     Sparkles,
// // // //     Target,
// // // //     TrendingUp,
// // // //     Lightbulb,
// // // //     RefreshCw,
// // // //     Eye,
// // // //     EyeOff,
// // // //     Copy,
// // // //     RotateCcw
// // // // } from 'lucide-react';

// // // // // Type Definitions
// // // // interface SummaryEditorProps {
// // // //     data: string;
// // // //     onUpdate: (summary: string) => void;
// // // //     onClose: () => void;
// // // // }

// // // // type SummaryTemplates = {
// // // //     [key: string]: string;
// // // // };

// // // // export function SummaryEditor({ data, onUpdate, onClose }: SummaryEditorProps) {
// // // //     const [summary, setSummary] = useState<string>(data);
// // // //     const [originalSummary] = useState<string>(data);
// // // //     const [isPreviewMode, setIsPreviewMode] = useState<boolean>(false);
// // // //     const [aiSuggestions, setAiSuggestions] = useState<string[]>([]);
// // // //     const [selectedTemplate, setSelectedTemplate] = useState<string>('');

// // // //     const summaryTemplates: SummaryTemplates = {
// // // //         'Software Engineer': 'Full-Stack Software Engineer with [X] years of experience specializing in [technologies]. Proven track record in building scalable web applications, implementing CI/CD pipelines, and optimizing system performance. Strong background in [specific areas] with expertise in modern development methodologies.',
// // // //         'Frontend Developer': 'Frontend Developer with [X] years of experience creating responsive, user-centric web applications using [technologies]. Skilled in modern JavaScript frameworks, CSS preprocessors, and performance optimization. Passionate about delivering exceptional user experiences and accessible design.',
// // // //         'Backend Developer': 'Backend Developer with [X] years of experience designing and implementing robust server-side solutions. Expertise in [technologies], database optimization, and API development. Strong focus on scalability, security, and clean code architecture.',
// // // //         'DevOps Engineer': 'DevOps Engineer with [X] years of experience automating deployment pipelines and managing cloud infrastructure. Proficient in [technologies] with a strong focus on continuous integration, monitoring, and system reliability.',
// // // //         'Data Scientist': 'Data Scientist with [X] years of experience extracting insights from complex datasets. Skilled in [technologies] with expertise in machine learning, statistical analysis, and data visualization. Proven ability to drive business decisions through data-driven solutions.'
// // // //     };

// // // //     const handleOptimize = () => {
// // // //         const suggestions: string[] = [
// // // //             'Add specific years of experience',
// // // //             'Include quantified achievements',
// // // //             'Mention relevant technologies',
// // // //             'Highlight unique value proposition',
// // // //             'Use action-oriented language'
// // // //         ];

// // // //         let optimized = summary;

// // // //         if (!optimized.match(/^(Experienced|Skilled|Proven|Results-driven|Innovative)/i)) {
// // // //             optimized = `Results-driven ${optimized.charAt(0).toLowerCase() + optimized.slice(1)}`;
// // // //         }

// // // //         if (!optimized.match(/\d+\+?\s*(years?|projects?|%)/)) {
// // // //             optimized = optimized.replace(/experience/i, '2+ years of experience');
// // // //         }

// // // //         setSummary(optimized);
// // // //         setAiSuggestions(suggestions);

// // // //         setTimeout(() => setAiSuggestions([]), 5000);
// // // //     };

// // // //     const applyTemplate = (template: string) => {
// // // //         setSummary(template);
// // // //         setSelectedTemplate('');
// // // //     };

// // // //     const handleSave = () => {
// // // //         onUpdate(summary);
// // // //         onClose();
// // // //     };

// // // //     const resetToOriginal = () => {
// // // //         setSummary(originalSummary);
// // // //     };

// // // //     const copyToClipboard = () => {
// // // //         navigator.clipboard.writeText(summary);
// // // //     };

// // // //     const getWordCount = (): number => summary.trim() ? summary.trim().split(/\s+/).length : 0;
// // // //     const getCharCount = (): number => summary.length;

// // // //     const getOptimizationScore = (): number => {
// // // //         let score = 0;
// // // //         if (summary.match(/^(Results-driven|Experienced|Skilled|Proven|Innovative|Dedicated)/i)) score += 20;
// // // //         if (summary.match(/\d+\+?\s*years?/)) score += 20;
// // // //         if (summary.match(/(React|Node|JavaScript|Python|AWS|Azure|PostgreSQL|MongoDB)/i)) score += 20;
// // // //         if (summary.match(/\d+%|\d+\+/)) score += 20;

// // // //         const wordCount = getWordCount();
// // // //         if (wordCount >= 50 && wordCount <= 150) score += 20;

// // // //         return Math.min(score, 100);
// // // //     };

// // // //     if (isPreviewMode) {
// // // //         return (
// // // //             <Card>
// // // //                 <CardHeader className="flex flex-row items-center justify-between">
// // // //                     <CardTitle className="flex items-center gap-2 text-sm">
// // // //                         <FileText className="h-5 w-5" />
// // // //                         Professional Summary Preview
// // // //                     </CardTitle>
// // // //                     <div className="flex items-center gap-2">
// // // //                         <Badge variant="outline" className="text-xs">
// // // //                             Score: {getOptimizationScore()}%
// // // //                         </Badge>
// // // //                         <Button variant="outline" size="sm" onClick={() => setIsPreviewMode(false)}>
// // // //                             <EyeOff className="h-4 w-4 mr-2" />
// // // //                             Edit Mode
// // // //                         </Button>
// // // //                         <Button size="sm" onClick={handleSave}>
// // // //                             <Save className="h-4 w-4 mr-2" />
// // // //                             Save
// // // //                         </Button>
// // // //                         <Button variant="outline" size="sm" onClick={onClose}>
// // // //                             <X className="h-4 w-4" />
// // // //                         </Button>
// // // //                     </div>
// // // //                 </CardHeader>
// // // //                 <CardContent>
// // // //                     <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
// // // //                         <div className="flex items-center gap-2 mb-3">
// // // //                             <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
// // // //                                 <FileText className="h-4 w-4 text-blue-600" />
// // // //                             </div>
// // // //                             <h3 className="text-lg font-semibold text-gray-900">PROFESSIONAL SUMMARY</h3>
// // // //                             <Badge variant="secondary" className="ml-auto text-xs bg-green-50 text-green-700">
// // // //                                 AI Enhanced
// // // //                             </Badge>
// // // //                         </div>
// // // //                         <p className="text-gray-700 leading-relaxed text-justify">
// // // //                             {summary}
// // // //                         </p>
// // // //                         <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-200 text-sm text-gray-500">
// // // //                             <span>{getWordCount()} words • {getCharCount()} characters</span>
// // // //                             <span>Optimization Score: {getOptimizationScore()}%</span>
// // // //                         </div>
// // // //                     </div>
// // // //                 </CardContent>
// // // //             </Card>
// // // //         );
// // // //     }

// // // //     return (
// // // //         <Card>
// // // //             <CardHeader className="flex flex-row items-center justify-between">
// // // //                 <div>
// // // //                     <CardTitle className="flex items-center gap-2 text-sm">
// // // //                         <FileText className="h-5 w-5" />
// // // //                         Edit Professional Summary
// // // //                         <Badge variant="outline" className="text-xs">
// // // //                             {getWordCount()} words
// // // //                         </Badge>
// // // //                     </CardTitle>
// // // //                     <p className=" text-gray-600 mt-1 text-xs">
// // // //                         Craft a compelling professional summary that highlights your key strengths
// // // //                     </p>
// // // //                 </div>
// // // //                 <div className="flex items-center gap-2">
// // // //                     <Button variant="outline" size="sm" onClick={handleOptimize}>
// // // //                         <Sparkles className="h-4 w-4 mr-2" />
// // // //                         AI Optimize
// // // //                     </Button>
// // // //                     <Button variant="outline" size="sm" onClick={() => setIsPreviewMode(true)}>
// // // //                         <Eye className="h-4 w-4 mr-2" />
// // // //                         Preview
// // // //                     </Button>
// // // //                     <Button size="sm" onClick={handleSave}>
// // // //                         <Save className="h-4 w-4 mr-2" />
// // // //                         Save
// // // //                     </Button>
// // // //                     <Button variant="outline" size="sm" onClick={onClose}>
// // // //                         <X className="h-4 w-4" />
// // // //                     </Button>
// // // //                 </div>
// // // //             </CardHeader>
// // // //             <CardContent className="space-y-6">
// // // //                 <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
// // // //                     <h4 className="font-medium text-blue-900 mb-2 flex items-center gap-2">
// // // //                         <Lightbulb className="h-4 w-4" />
// // // //                         Summary Optimization Tips
// // // //                     </h4>
// // // //                     <ul className="text-sm text-blue-800 space-y-1">
// // // //                         <li>• Start with your professional title and years of experience</li>
// // // //                         <li>• Include 2-3 key technical skills or areas of expertise</li>
// // // //                         <li>• Mention specific achievements with quantified results</li>
// // // //                         <li>• Keep it concise: 50-150 words for optimal impact</li>
// // // //                         <li>• Use action-oriented language and industry keywords</li>
// // // //                     </ul>
// // // //                 </div>

// // // //                 <div className="space-y-3">
// // // //                     <div className="flex items-center justify-between">
// // // //                         <h4 className="font-medium text-gray-900">Quick Templates</h4>
// // // //                         <Badge variant="outline" className="text-xs">Choose & Customize</Badge>
// // // //                     </div>
// // // //                     <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
// // // //                         {Object.entries(summaryTemplates).map(([role, template]) => (
// // // //                             <Button
// // // //                                 key={role}
// // // //                                 variant="outline"
// // // //                                 size="sm"
// // // //                                 className="justify-start h-auto p-3 text-left"
// // // //                                 onClick={() => applyTemplate(template)}
// // // //                             >
// // // //                                 <div>
// // // //                                     <div className="font-medium text-xs">{role}</div>
// // // //                                     <p className="text-xs text-gray-500 mt-1 line-clamp-3 max-w-[250px]">
// // // //                                         {template}
// // // //                                     </p>



// // // //                                 </div>
// // // //                             </Button>
// // // //                         ))}
// // // //                     </div>
// // // //                 </div>

// // // //                 <div className="space-y-4">
// // // //                     <div className="flex items-center justify-between">
// // // //                         <h4 className="font-medium text-gray-900">Professional Summary</h4>
// // // //                         <div className="flex items-center gap-2">
// // // //                             <Button variant="outline" size="sm" onClick={copyToClipboard}>
// // // //                                 <Copy className="h-4 w-4 mr-2" />
// // // //                                 Copy
// // // //                             </Button>
// // // //                             <Button variant="outline" size="sm" onClick={resetToOriginal}>
// // // //                                 <RotateCcw className="h-4 w-4 mr-2" />
// // // //                                 Reset
// // // //                             </Button>
// // // //                         </div>
// // // //                     </div>

// // // //                     <Textarea
// // // //                         value={summary}
// // // //                         onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setSummary(e.target.value)}
// // // //                         placeholder="Write a compelling professional summary that showcases your expertise and career highlights..."
// // // //                         className="min-h-[200px] resize-none"
// // // //                         maxLength={1000}
// // // //                     />

// // // //                     <div className="flex items-center justify-between text-sm">
// // // //                         <div className="flex items-center gap-4">
// // // //                             <span className="text-gray-600">
// // // //                                 {getWordCount()} words
// // // //                             </span>
// // // //                             <span className="text-gray-600">
// // // //                                 {getCharCount()}/1000 characters
// // // //                             </span>
// // // //                             <div className="flex items-center gap-1">
// // // //                                 <div className={`w-2 h-2 rounded-full ${getOptimizationScore() >= 80 ? 'bg-green-500' :
// // // //                                     getOptimizationScore() >= 60 ? 'bg-yellow-500' : 'bg-red-500'
// // // //                                     }`}></div>
// // // //                                 <span className="text-gray-600">
// // // //                                     Optimization: {getOptimizationScore()}%
// // // //                                 </span>
// // // //                             </div>
// // // //                         </div>
// // // //                         <div className="text-gray-500">
// // // //                             {getWordCount() < 50 ? 'Too short' :
// // // //                                 getWordCount() > 150 ? 'Consider shortening' :
// // // //                                     'Optimal length'}
// // // //                         </div>
// // // //                     </div>
// // // //                 </div>

// // // //                 {aiSuggestions.length > 0 && (
// // // //                     <div className="bg-green-50 border border-green-200 rounded-lg p-4">
// // // //                         <h4 className="font-medium text-green-900 mb-2 flex items-center gap-2">
// // // //                             <Sparkles className="h-4 w-4" />
// // // //                             AI Optimization Applied
// // // //                         </h4>
// // // //                         <div className="space-y-1">
// // // //                             {aiSuggestions.map((suggestion, index) => (
// // // //                                 <div key={index} className="flex items-center gap-2 text-sm text-green-800">
// // // //                                     <TrendingUp className="h-3 w-3" />
// // // //                                     {suggestion}
// // // //                                 </div>
// // // //                             ))}
// // // //                         </div>
// // // //                     </div>
// // // //                 )}

// // // //                 <div className="grid grid-cols-3 gap-4 text-center">
// // // //                     <div className="p-3 bg-gray-50 rounded-lg">
// // // //                         <div className="text-lg font-semibold text-gray-900">{getWordCount()}</div>
// // // //                         <div className="text-xs text-gray-600">Words</div>
// // // //                         <div className="text-xs text-gray-500 mt-1">50-150 ideal</div>
// // // //                     </div>
// // // //                     <div className="p-3 bg-gray-50 rounded-lg">
// // // //                         <div className="text-lg font-semibold text-gray-900">{getOptimizationScore()}%</div>
// // // //                         <div className="text-xs text-gray-600">ATS Score</div>
// // // //                         <div className="text-xs text-gray-500 mt-1">80%+ target</div>
// // // //                     </div>
// // // //                     <div className="p-3 bg-gray-50 rounded-lg">
// // // //                         <div className="text-lg font-semibold text-gray-900">
// // // //                             {summary.match(/\b(React|Node|JavaScript|Python|AWS|Azure|PostgreSQL|MongoDB|TypeScript|Docker)\b/gi)?.length || 0}
// // // //                         </div>
// // // //                         <div className="text-xs text-gray-600">Tech Keywords</div>
// // // //                         <div className="text-xs text-gray-500 mt-1">3-5 recommended</div>
// // // //                     </div>
// // // //                 </div>
// // // //             </CardContent>
// // // //         </Card>
// // // //     );
// // // // }


// // // import { useState, ChangeEvent } from 'react';
// // // import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// // // import { Button } from '@/components/ui/button';
// // // import { Textarea } from '@/components/ui/textarea';
// // // import { Badge } from '@/components/ui/badge';
// // // import { Alert, AlertDescription } from '@/components/ui/alert';
// // // import {
// // //     FileText,
// // //     Save,
// // //     X,
// // //     Sparkles,
// // //     Target,
// // //     TrendingUp,
// // //     Lightbulb,
// // //     RefreshCw,
// // //     Eye,
// // //     EyeOff,
// // //     Copy,
// // //     RotateCcw,
// // //     Loader2,
// // //     AlertCircle,
// // //     CheckCircle
// // // } from 'lucide-react';

// // // // Type Definitions
// // // interface SummaryEditorProps {
// // //     data: string;
// // //     onUpdate: (summary: string) => void;
// // //     onClose: () => void;
// // //     targetRole?: string; // Optional target role for optimization
// // // }

// // // type SummaryTemplates = {
// // //     [key: string]: string;
// // // };

// // // interface OptimizationResponse {
// // //     jobId: string;
// // //     optimizedText?: string;
// // //     error?: string;
// // // }

// // // export function SummaryEditor({ data, onUpdate, onClose, targetRole }: SummaryEditorProps) {
// // //     const [summary, setSummary] = useState<string>(data);
// // //     const [originalSummary] = useState<string>(data);
// // //     const [isPreviewMode, setIsPreviewMode] = useState<boolean>(false);
// // //     const [aiSuggestions, setAiSuggestions] = useState<string[]>([]);
// // //     const [selectedTemplate, setSelectedTemplate] = useState<string>('');
// // //     const [isOptimizing, setIsOptimizing] = useState<boolean>(false);
// // //     const [optimizationError, setOptimizationError] = useState<string>('');
// // //     const [optimizationSuccess, setOptimizationSuccess] = useState<boolean>(false);

// // //     const summaryTemplates: SummaryTemplates = {
// // //         'Software Engineer': 'Full-Stack Software Engineer with [X] years of experience specializing in [technologies]. Proven track record in building scalable web applications, implementing CI/CD pipelines, and optimizing system performance. Strong background in [specific areas] with expertise in modern development methodologies.',
// // //         'Frontend Developer': 'Frontend Developer with [X] years of experience creating responsive, user-centric web applications using [technologies]. Skilled in modern JavaScript frameworks, CSS preprocessors, and performance optimization. Passionate about delivering exceptional user experiences and accessible design.',
// // //         'Backend Developer': 'Backend Developer with [X] years of experience designing and implementing robust server-side solutions. Expertise in [technologies], database optimization, and API development. Strong focus on scalability, security, and clean code architecture.',
// // //         'DevOps Engineer': 'DevOps Engineer with [X] years of experience automating deployment pipelines and managing cloud infrastructure. Proficient in [technologies] with a strong focus on continuous integration, monitoring, and system reliability.',
// // //         'Data Scientist': 'Data Scientist with [X] years of experience extracting insights from complex datasets. Skilled in [technologies] with expertise in machine learning, statistical analysis, and data visualization. Proven ability to drive business decisions through data-driven solutions.'
// // //     };

// // //     const handleOptimize = async () => {
// // //         setIsOptimizing(true);
// // //         setOptimizationError('');
// // //         setOptimizationSuccess(false);
// // //         setAiSuggestions([]);

// // //         try {
// // //             const response = await fetch('/api/optimize-summary', {
// // //                 method: 'POST',
// // //                 headers: {
// // //                     'Content-Type': 'application/json',
// // //                 },
// // //                 body: JSON.stringify({
// // //                     originalText: summary,
// // //                     role: targetRole || 'Software Engineer',
// // //                     section: 'summary'
// // //                 }),
// // //             });

// // //             const data: OptimizationResponse = await response.json();

// // //             if (!response.ok) {
// // //                 throw new Error(data.error || 'Failed to optimize summary');
// // //             }

// // //             if (data.optimizedText) {
// // //                 setSummary(data.optimizedText);
// // //                 setOptimizationSuccess(true);

// // //                 // Generate suggestions based on the optimization
// // //                 const suggestions: string[] = [
// // //                     'Enhanced with action-oriented language',
// // //                     'Added industry-specific keywords',
// // //                     'Improved quantifiable achievements',
// // //                     'Optimized for ATS compatibility',
// // //                     'Strengthened value proposition'
// // //                 ];
// // //                 setAiSuggestions(suggestions);

// // //                 // Clear success message after 5 seconds
// // //                 setTimeout(() => {
// // //                     setOptimizationSuccess(false);
// // //                     setAiSuggestions([]);
// // //                 }, 5000);
// // //             } else {
// // //                 throw new Error('No optimized text received from the AI');
// // //             }

// // //         } catch (error: any) {
// // //             console.error('Optimization error:', error);
// // //             setOptimizationError(error.message || 'Failed to optimize summary. Please try again.');

// // //             // Clear error message after 5 seconds
// // //             setTimeout(() => {
// // //                 setOptimizationError('');
// // //             }, 5000);
// // //         } finally {
// // //             setIsOptimizing(false);
// // //         }
// // //     };

// // //     const applyTemplate = (template: string) => {
// // //         setSummary(template);
// // //         setSelectedTemplate('');
// // //     };

// // //     const handleSave = () => {
// // //         onUpdate(summary);
// // //         onClose();
// // //     };

// // //     const resetToOriginal = () => {
// // //         setSummary(originalSummary);
// // //         setOptimizationError('');
// // //         setOptimizationSuccess(false);
// // //         setAiSuggestions([]);
// // //     };

// // //     const copyToClipboard = () => {
// // //         navigator.clipboard.writeText(summary);
// // //     };

// // //     const getWordCount = (): number => summary.trim() ? summary.trim().split(/\s+/).length : 0;
// // //     const getCharCount = (): number => summary.length;

// // //     const getOptimizationScore = (): number => {
// // //         let score = 0;
// // //         if (summary.match(/^(Results-driven|Experienced|Skilled|Proven|Innovative|Dedicated)/i)) score += 20;
// // //         if (summary.match(/\d+\+?\s*years?/)) score += 20;
// // //         if (summary.match(/(React|Node|JavaScript|Python|AWS|Azure|PostgreSQL|MongoDB)/i)) score += 20;
// // //         if (summary.match(/\d+%|\d+\+/)) score += 20;

// // //         const wordCount = getWordCount();
// // //         if (wordCount >= 50 && wordCount <= 150) score += 20;

// // //         return Math.min(score, 100);
// // //     };

// // //     if (isPreviewMode) {
// // //         return (
// // //             <Card>
// // //                 <CardHeader className="flex flex-row items-center justify-between">
// // //                     <CardTitle className="flex items-center gap-2 text-sm">
// // //                         <FileText className="h-5 w-5" />
// // //                         Professional Summary Preview
// // //                     </CardTitle>
// // //                     <div className="flex items-center gap-2">
// // //                         <Badge variant="outline" className="text-xs">
// // //                             Score: {getOptimizationScore()}%
// // //                         </Badge>
// // //                         <Button variant="outline" size="sm" onClick={() => setIsPreviewMode(false)}>
// // //                             <EyeOff className="h-4 w-4 mr-2" />
// // //                             Edit Mode
// // //                         </Button>
// // //                         <Button size="sm" onClick={handleSave}>
// // //                             <Save className="h-4 w-4 mr-2" />
// // //                             Save
// // //                         </Button>
// // //                         <Button variant="outline" size="sm" onClick={onClose}>
// // //                             <X className="h-4 w-4" />
// // //                         </Button>
// // //                     </div>
// // //                 </CardHeader>
// // //                 <CardContent>
// // //                     <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
// // //                         <div className="flex items-center gap-2 mb-3">
// // //                             <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
// // //                                 <FileText className="h-4 w-4 text-blue-600" />
// // //                             </div>
// // //                             <h3 className="text-lg font-semibold text-gray-900">PROFESSIONAL SUMMARY</h3>
// // //                             <Badge variant="secondary" className="ml-auto text-xs bg-green-50 text-green-700">
// // //                                 AI Enhanced
// // //                             </Badge>
// // //                         </div>
// // //                         <p className="text-gray-700 leading-relaxed text-justify">
// // //                             {summary}
// // //                         </p>
// // //                         <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-200 text-sm text-gray-500">
// // //                             <span>{getWordCount()} words • {getCharCount()} characters</span>
// // //                             <span>Optimization Score: {getOptimizationScore()}%</span>
// // //                         </div>
// // //                     </div>
// // //                 </CardContent>
// // //             </Card>
// // //         );
// // //     }

// // //     return (
// // //         <Card>
// // //             <CardHeader className="flex flex-row items-center justify-between">
// // //                 <div>
// // //                     <CardTitle className="flex items-center gap-2 text-sm">
// // //                         <FileText className="h-5 w-5" />
// // //                         Edit Professional Summary
// // //                         <Badge variant="outline" className="text-xs">
// // //                             {getWordCount()} words
// // //                         </Badge>
// // //                         {targetRole && (
// // //                             <Badge variant="secondary" className="text-xs">
// // //                                 Target: {targetRole}
// // //                             </Badge>
// // //                         )}
// // //                     </CardTitle>
// // //                     <p className="text-gray-600 mt-1 text-xs">
// // //                         Craft a compelling professional summary that highlights your key strengths
// // //                     </p>
// // //                 </div>
// // //                 <div className="flex items-center gap-2">
// // //                     <Button
// // //                         variant="outline"
// // //                         size="sm"
// // //                         onClick={handleOptimize}
// // //                         disabled={isOptimizing || !summary.trim()}
// // //                     >
// // //                         {isOptimizing ? (
// // //                             <Loader2 className="h-4 w-4 mr-2 animate-spin" />
// // //                         ) : (
// // //                             <Sparkles className="h-4 w-4 mr-2" />
// // //                         )}
// // //                         {isOptimizing ? 'Optimizing...' : 'AI Optimize'}
// // //                     </Button>
// // //                     <Button variant="outline" size="sm" onClick={() => setIsPreviewMode(true)}>
// // //                         <Eye className="h-4 w-4 mr-2" />
// // //                         Preview
// // //                     </Button>
// // //                     <Button size="sm" onClick={handleSave}>
// // //                         <Save className="h-4 w-4 mr-2" />
// // //                         Save
// // //                     </Button>
// // //                     <Button variant="outline" size="sm" onClick={onClose}>
// // //                         <X className="h-4 w-4" />
// // //                     </Button>
// // //                 </div>
// // //             </CardHeader>
// // //             <CardContent className="space-y-6">
// // //                 {/* Status Messages */}
// // //                 {optimizationError && (
// // //                     <Alert variant="destructive">
// // //                         <AlertCircle className="h-4 w-4" />
// // //                         <AlertDescription>
// // //                             {optimizationError}
// // //                         </AlertDescription>
// // //                     </Alert>
// // //                 )}

// // //                 {optimizationSuccess && (
// // //                     <Alert className="border-green-200 bg-green-50">
// // //                         <CheckCircle className="h-4 w-4 text-green-600" />
// // //                         <AlertDescription className="text-green-800">
// // //                             Summary optimized successfully! The AI has enhanced your content for better ATS compatibility and impact.
// // //                         </AlertDescription>
// // //                     </Alert>
// // //                 )}

// // //                 <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
// // //                     <h4 className="font-medium text-blue-900 mb-2 flex items-center gap-2">
// // //                         <Lightbulb className="h-4 w-4" />
// // //                         Summary Optimization Tips
// // //                     </h4>
// // //                     <ul className="text-sm text-blue-800 space-y-1">
// // //                         <li>• Start with your professional title and years of experience</li>
// // //                         <li>• Include 2-3 key technical skills or areas of expertise</li>
// // //                         <li>• Mention specific achievements with quantified results</li>
// // //                         <li>• Keep it concise: 50-150 words for optimal impact</li>
// // //                         <li>• Use action-oriented language and industry keywords</li>
// // //                     </ul>
// // //                 </div>

// // //                 <div className="space-y-3">
// // //                     <div className="flex items-center justify-between">
// // //                         <h4 className="font-medium text-gray-900">Quick Templates</h4>
// // //                         <Badge variant="outline" className="text-xs">Choose & Customize</Badge>
// // //                     </div>
// // //                     <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
// // //                         {Object.entries(summaryTemplates).map(([role, template]) => (
// // //                             <Button
// // //                                 key={role}
// // //                                 variant="outline"
// // //                                 size="sm"
// // //                                 className="justify-start h-auto p-3 text-left"
// // //                                 onClick={() => applyTemplate(template)}
// // //                                 disabled={isOptimizing}
// // //                             >
// // //                                 <div>
// // //                                     <div className="font-medium text-xs">{role}</div>
// // //                                     <p className="text-xs text-gray-500 mt-1 line-clamp-3 max-w-[250px]">
// // //                                         {template}
// // //                                     </p>
// // //                                 </div>
// // //                             </Button>
// // //                         ))}
// // //                     </div>
// // //                 </div>

// // //                 <div className="space-y-4">
// // //                     <div className="flex items-center justify-between">
// // //                         <h4 className="font-medium text-gray-900">Professional Summary</h4>
// // //                         <div className="flex items-center gap-2">
// // //                             <Button
// // //                                 variant="outline"
// // //                                 size="sm"
// // //                                 onClick={copyToClipboard}
// // //                                 disabled={!summary.trim()}
// // //                             >
// // //                                 <Copy className="h-4 w-4 mr-2" />
// // //                                 Copy
// // //                             </Button>
// // //                             <Button
// // //                                 variant="outline"
// // //                                 size="sm"
// // //                                 onClick={resetToOriginal}
// // //                                 disabled={isOptimizing}
// // //                             >
// // //                                 <RotateCcw className="h-4 w-4 mr-2" />
// // //                                 Reset
// // //                             </Button>
// // //                         </div>
// // //                     </div>

// // //                     <Textarea
// // //                         value={summary}
// // //                         onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setSummary(e.target.value)}
// // //                         placeholder="Write a compelling professional summary that showcases your expertise and career highlights..."
// // //                         className="min-h-[200px] resize-none"
// // //                         maxLength={1000}
// // //                         disabled={isOptimizing}
// // //                     />

// // //                     <div className="flex items-center justify-between text-sm">
// // //                         <div className="flex items-center gap-4">
// // //                             <span className="text-gray-600">
// // //                                 {getWordCount()} words
// // //                             </span>
// // //                             <span className="text-gray-600">
// // //                                 {getCharCount()}/1000 characters
// // //                             </span>
// // //                             <div className="flex items-center gap-1">
// // //                                 <div className={`w-2 h-2 rounded-full ${getOptimizationScore() >= 80 ? 'bg-green-500' :
// // //                                     getOptimizationScore() >= 60 ? 'bg-yellow-500' : 'bg-red-500'
// // //                                     }`}></div>
// // //                                 <span className="text-gray-600">
// // //                                     Optimization: {getOptimizationScore()}%
// // //                                 </span>
// // //                             </div>
// // //                         </div>
// // //                         <div className="text-gray-500">
// // //                             {getWordCount() < 50 ? 'Too short' :
// // //                                 getWordCount() > 150 ? 'Consider shortening' :
// // //                                     'Optimal length'}
// // //                         </div>
// // //                     </div>
// // //                 </div>

// // //                 {aiSuggestions.length > 0 && (
// // //                     <div className="bg-green-50 border border-green-200 rounded-lg p-4">
// // //                         <h4 className="font-medium text-green-900 mb-2 flex items-center gap-2">
// // //                             <Sparkles className="h-4 w-4" />
// // //                             AI Optimization Applied
// // //                         </h4>
// // //                         <div className="space-y-1">
// // //                             {aiSuggestions.map((suggestion, index) => (
// // //                                 <div key={index} className="flex items-center gap-2 text-sm text-green-800">
// // //                                     <TrendingUp className="h-3 w-3" />
// // //                                     {suggestion}
// // //                                 </div>
// // //                             ))}
// // //                         </div>
// // //                     </div>
// // //                 )}

// // //                 <div className="grid grid-cols-3 gap-4 text-center">
// // //                     <div className="p-3 bg-gray-50 rounded-lg">
// // //                         <div className="text-lg font-semibold text-gray-900">{getWordCount()}</div>
// // //                         <div className="text-xs text-gray-600">Words</div>
// // //                         <div className="text-xs text-gray-500 mt-1">50-150 ideal</div>
// // //                     </div>
// // //                     <div className="p-3 bg-gray-50 rounded-lg">
// // //                         <div className="text-lg font-semibold text-gray-900">{getOptimizationScore()}%</div>
// // //                         <div className="text-xs text-gray-600">ATS Score</div>
// // //                         <div className="text-xs text-gray-500 mt-1">80%+ target</div>
// // //                     </div>
// // //                     <div className="p-3 bg-gray-50 rounded-lg">
// // //                         <div className="text-lg font-semibold text-gray-900">
// // //                             {summary.match(/\b(React|Node|JavaScript|Python|AWS|Azure|PostgreSQL|MongoDB|TypeScript|Docker)\b/gi)?.length || 0}
// // //                         </div>
// // //                         <div className="text-xs text-gray-600">Tech Keywords</div>
// // //                         <div className="text-xs text-gray-500 mt-1">3-5 recommended</div>
// // //                     </div>
// // //                 </div>
// // //             </CardContent>
// // //         </Card>
// // //     );
// // // }


// // import { useState, ChangeEvent } from 'react';
// // import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// // import { Button } from '@/components/ui/button';
// // import { Textarea } from '@/components/ui/textarea';
// // import { Badge } from '@/components/ui/badge';
// // import { Alert, AlertDescription } from '@/components/ui/alert';
// // import {
// //     FileText,
// //     Save,
// //     X,
// //     Sparkles,
// //     Target,
// //     TrendingUp,
// //     Lightbulb,
// //     RefreshCw,
// //     Eye,
// //     EyeOff,
// //     Copy,
// //     RotateCcw,
// //     Loader2,
// //     AlertCircle,
// //     CheckCircle
// // } from 'lucide-react';

// // // Type Definitions
// // interface SummaryEditorProps {
// //     data: string;
// //     onUpdate: (summary: string) => void;
// //     onClose: () => void;
// //     targetRole?: string; // Optional target role for optimization
// //     jobId?: string; // Optional job ID for updating existing optimization
// // }

// // type SummaryTemplates = {
// //     [key: string]: string;
// // };

// // interface OptimizationResponse {
// //     jobId: string;
// //     optimizedText?: string;
// //     error?: string;
// // }

// // export function SummaryEditor({ data, onUpdate, onClose, targetRole, jobId }: SummaryEditorProps) {
// //     const [summary, setSummary] = useState<string>(data);
// //     const [originalSummary] = useState<string>(data);
// //     const [isPreviewMode, setIsPreviewMode] = useState<boolean>(false);
// //     const [aiSuggestions, setAiSuggestions] = useState<string[]>([]);
// //     const [selectedTemplate, setSelectedTemplate] = useState<string>('');
// //     const [isOptimizing, setIsOptimizing] = useState<boolean>(false);
// //     const [optimizationError, setOptimizationError] = useState<string>('');
// //     const [optimizationSuccess, setOptimizationSuccess] = useState<boolean>(false);

// //     const summaryTemplates: SummaryTemplates = {
// //         'Software Engineer': 'Full-Stack Software Engineer with [X] years of experience specializing in [technologies]. Proven track record in building scalable web applications, implementing CI/CD pipelines, and optimizing system performance. Strong background in [specific areas] with expertise in modern development methodologies.',
// //         'Frontend Developer': 'Frontend Developer with [X] years of experience creating responsive, user-centric web applications using [technologies]. Skilled in modern JavaScript frameworks, CSS preprocessors, and performance optimization. Passionate about delivering exceptional user experiences and accessible design.',
// //         'Backend Developer': 'Backend Developer with [X] years of experience designing and implementing robust server-side solutions. Expertise in [technologies], database optimization, and API development. Strong focus on scalability, security, and clean code architecture.',
// //         'DevOps Engineer': 'DevOps Engineer with [X] years of experience automating deployment pipelines and managing cloud infrastructure. Proficient in [technologies] with a strong focus on continuous integration, monitoring, and system reliability.',
// //         'Data Scientist': 'Data Scientist with [X] years of experience extracting insights from complex datasets. Skilled in [technologies] with expertise in machine learning, statistical analysis, and data visualization. Proven ability to drive business decisions through data-driven solutions.'
// //     };

// //     const handleOptimize = async () => {
// //         setIsOptimizing(true);
// //         setOptimizationError('');
// //         setOptimizationSuccess(false);
// //         setAiSuggestions([]);

// //         try {
// //             const response = await fetch('/api/optimize-summary', {
// //                 method: 'POST',
// //                 headers: {
// //                     'Content-Type': 'application/json',
// //                 },
// //                 body: JSON.stringify({
// //                     originalText: summary,
// //                     role: targetRole || 'Software Engineer',
// //                     section: 'summary',
// //                     jobId: jobId // Pass the job ID to update existing job
// //                 }),
// //             });

// //             const data: OptimizationResponse = await response.json();

// //             if (!response.ok) {
// //                 throw new Error(data.error || 'Failed to optimize summary');
// //             }

// //             if (data.optimizedText) {
// //                 setSummary(data.optimizedText);
// //                 setOptimizationSuccess(true);

// //                 // Generate suggestions based on the optimization
// //                 const suggestions: string[] = [
// //                     'Enhanced with action-oriented language',
// //                     'Added industry-specific keywords',
// //                     'Improved quantifiable achievements',
// //                     'Optimized for ATS compatibility',
// //                     'Strengthened value proposition'
// //                 ];
// //                 setAiSuggestions(suggestions);

// //                 // Clear success message after 5 seconds
// //                 setTimeout(() => {
// //                     setOptimizationSuccess(false);
// //                     setAiSuggestions([]);
// //                 }, 5000);
// //             } else {
// //                 throw new Error('No optimized text received from the AI');
// //             }

// //         } catch (error: any) {
// //             console.error('Optimization error:', error);
// //             setOptimizationError(error.message || 'Failed to optimize summary. Please try again.');

// //             // Clear error message after 5 seconds
// //             setTimeout(() => {
// //                 setOptimizationError('');
// //             }, 5000);
// //         } finally {
// //             setIsOptimizing(false);
// //         }
// //     };

// //     const applyTemplate = (template: string) => {
// //         setSummary(template);
// //         setSelectedTemplate('');
// //     };

// //     const handleSave = () => {
// //         onUpdate(summary);
// //         // onClose();
// //     };

// //     const resetToOriginal = () => {
// //         setSummary(originalSummary);
// //         setOptimizationError('');
// //         setOptimizationSuccess(false);
// //         setAiSuggestions([]);
// //     };

// //     const copyToClipboard = () => {
// //         navigator.clipboard.writeText(summary);
// //     };

// //     const getWordCount = (): number => summary.trim() ? summary.trim().split(/\s+/).length : 0;
// //     const getCharCount = (): number => summary.length;

// //     const getOptimizationScore = (): number => {
// //         let score = 0;
// //         if (summary.match(/^(Results-driven|Experienced|Skilled|Proven|Innovative|Dedicated)/i)) score += 20;
// //         if (summary.match(/\d+\+?\s*years?/)) score += 20;
// //         if (summary.match(/(React|Node|JavaScript|Python|AWS|Azure|PostgreSQL|MongoDB)/i)) score += 20;
// //         if (summary.match(/\d+%|\d+\+/)) score += 20;

// //         const wordCount = getWordCount();
// //         if (wordCount >= 50 && wordCount <= 150) score += 20;

// //         return Math.min(score, 100);
// //     };

// //     if (isPreviewMode) {
// //         return (
// //             <Card>
// //                 <CardHeader className="flex flex-row items-center justify-between">
// //                     <CardTitle className="flex items-center gap-2 text-sm">
// //                         <FileText className="h-5 w-5" />
// //                         Professional Summary Preview
// //                     </CardTitle>
// //                     <div className="flex items-center gap-2">
// //                         <Badge variant="outline" className="text-xs">
// //                             Score: {getOptimizationScore()}%
// //                         </Badge>
// //                         <Button variant="outline" size="sm" onClick={() => setIsPreviewMode(false)}>
// //                             <EyeOff className="h-4 w-4 mr-2" />
// //                             Edit Mode
// //                         </Button>
// //                         <Button size="sm" onClick={handleSave}>
// //                             <Save className="h-4 w-4 mr-2" />
// //                             Save
// //                         </Button>
// //                         <Button variant="outline" size="sm" onClick={onClose}>
// //                             <X className="h-4 w-4" />
// //                         </Button>
// //                     </div>
// //                 </CardHeader>
// //                 <CardContent>
// //                     <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
// //                         <div className="flex items-center gap-2 mb-3">
// //                             <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
// //                                 <FileText className="h-4 w-4 text-blue-600" />
// //                             </div>
// //                             <h3 className="text-lg font-semibold text-gray-900">PROFESSIONAL SUMMARY</h3>
// //                             <Badge variant="secondary" className="ml-auto text-xs bg-green-50 text-green-700">
// //                                 AI Enhanced
// //                             </Badge>
// //                         </div>
// //                         <p className="text-gray-700 leading-relaxed text-justify">
// //                             {summary}
// //                         </p>
// //                         <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-200 text-sm text-gray-500">
// //                             <span>{getWordCount()} words • {getCharCount()} characters</span>
// //                             <span>Optimization Score: {getOptimizationScore()}%</span>
// //                         </div>
// //                     </div>
// //                 </CardContent>
// //             </Card>
// //         );
// //     }

// //     return (
// //         <Card>
// //             <CardHeader className="flex flex-col gap-5 items-center justify-between">
// //                 <div>
// //                     <CardTitle className="flex items-center gap-2 text-sm">
// //                         <FileText className="h-5 w-5" />
// //                         Edit Professional Summary
// //                         <Badge variant="outline" className="text-xs">
// //                             {getWordCount()} words
// //                         </Badge>
// //                         {targetRole && (
// //                             <Badge variant="secondary" className="text-xs">
// //                                 Target: {targetRole}
// //                             </Badge>
// //                         )}
// //                     </CardTitle>
// //                     <p className="text-gray-600 mt-1 text-xs">
// //                         Craft a compelling professional summary that highlights your key strengths
// //                     </p>
// //                 </div>
// //                 <div className="flex items-center gap-2">
// //                     <Button
// //                         variant="outline"
// //                         size="sm"
// //                         onClick={handleOptimize}
// //                         disabled={isOptimizing || !summary.trim()}
// //                     >
// //                         {isOptimizing ? (
// //                             <Loader2 className="h-4 w-4 mr-2 animate-spin" />
// //                         ) : (
// //                             <Sparkles className="h-4 w-4 mr-2" />
// //                         )}
// //                         {isOptimizing ? 'Optimizing...' : 'AI Optimize'}
// //                     </Button>
// //                     <Button variant="outline" size="sm" onClick={() => setIsPreviewMode(true)}>
// //                         <Eye className="h-4 w-4 mr-2" />
// //                         Preview
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
// //                 {/* Status Messages */}
// //                 {optimizationError && (
// //                     <Alert variant="destructive">
// //                         <AlertCircle className="h-4 w-4" />
// //                         <AlertDescription>
// //                             {optimizationError}
// //                         </AlertDescription>
// //                     </Alert>
// //                 )}

// //                 {optimizationSuccess && (
// //                     <Alert className="border-green-200 bg-green-50">
// //                         <CheckCircle className="h-4 w-4 text-green-600" />
// //                         <AlertDescription className="text-green-800">
// //                             Summary optimized successfully! The AI has enhanced your content for better ATS compatibility and impact.
// //                         </AlertDescription>
// //                     </Alert>
// //                 )}

// //                 <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
// //                     <h4 className="font-medium text-blue-900 mb-2 flex items-center gap-2">
// //                         <Lightbulb className="h-4 w-4" />
// //                         Summary Optimization Tips
// //                     </h4>
// //                     <ul className="text-sm text-blue-800 space-y-1">
// //                         <li>• Start with your professional title and years of experience</li>
// //                         <li>• Include 2-3 key technical skills or areas of expertise</li>
// //                         <li>• Mention specific achievements with quantified results</li>
// //                         <li>• Keep it concise: 50-150 words for optimal impact</li>
// //                         <li>• Use action-oriented language and industry keywords</li>
// //                     </ul>
// //                 </div>

// //                 <div className="space-y-3">
// //                     <div className="flex items-center justify-between">
// //                         <h4 className="font-medium text-gray-900">Quick Templates</h4>
// //                         <Badge variant="outline" className="text-xs">Choose & Customize</Badge>
// //                     </div>
// //                     <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
// //                         {Object.entries(summaryTemplates).map(([role, template]) => (
// //                             <Button
// //                                 key={role}
// //                                 variant="outline"
// //                                 size="sm"
// //                                 className="justify-start h-auto p-3 text-left"
// //                                 onClick={() => applyTemplate(template)}
// //                                 disabled={isOptimizing}
// //                             >
// //                                 <div>
// //                                     <div className="font-medium text-xs">{role}</div>
// //                                     <p className="text-xs text-gray-500 mt-1 line-clamp-3 max-w-[250px]">
// //                                         {template}
// //                                     </p>
// //                                 </div>
// //                             </Button>
// //                         ))}
// //                     </div>
// //                 </div>

// //                 <div className="space-y-4">
// //                     <div className="flex items-center justify-between">
// //                         <h4 className="font-medium text-gray-900">Professional Summary</h4>
// //                         <div className="flex items-center gap-2">
// //                             <Button
// //                                 variant="outline"
// //                                 size="sm"
// //                                 onClick={copyToClipboard}
// //                                 disabled={!summary.trim()}
// //                             >
// //                                 <Copy className="h-4 w-4 mr-2" />
// //                                 Copy
// //                             </Button>
// //                             <Button
// //                                 variant="outline"
// //                                 size="sm"
// //                                 onClick={resetToOriginal}
// //                                 disabled={isOptimizing}
// //                             >
// //                                 <RotateCcw className="h-4 w-4 mr-2" />
// //                                 Reset
// //                             </Button>
// //                         </div>
// //                     </div>

// //                     <Textarea
// //                         value={summary}
// //                         onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setSummary(e.target.value)}
// //                         placeholder="Write a compelling professional summary that showcases your expertise and career highlights..."
// //                         className="min-h-[200px] resize-none"
// //                         maxLength={1000}
// //                         disabled={isOptimizing}
// //                     />

// //                     <div className="flex items-center justify-between text-sm">
// //                         <div className="flex items-center gap-4">
// //                             <span className="text-gray-600">
// //                                 {getWordCount()} words
// //                             </span>
// //                             <span className="text-gray-600">
// //                                 {getCharCount()}/1000 characters
// //                             </span>
// //                             <div className="flex items-center gap-1">
// //                                 <div className={`w-2 h-2 rounded-full ${getOptimizationScore() >= 80 ? 'bg-green-500' :
// //                                     getOptimizationScore() >= 60 ? 'bg-yellow-500' : 'bg-red-500'
// //                                     }`}></div>
// //                                 <span className="text-gray-600">
// //                                     Optimization: {getOptimizationScore()}%
// //                                 </span>
// //                             </div>
// //                         </div>
// //                         <div className="text-gray-500">
// //                             {getWordCount() < 50 ? 'Too short' :
// //                                 getWordCount() > 150 ? 'Consider shortening' :
// //                                     'Optimal length'}
// //                         </div>
// //                     </div>
// //                 </div>

// //                 {aiSuggestions.length > 0 && (
// //                     <div className="bg-green-50 border border-green-200 rounded-lg p-4">
// //                         <h4 className="font-medium text-green-900 mb-2 flex items-center gap-2">
// //                             <Sparkles className="h-4 w-4" />
// //                             AI Optimization Applied
// //                         </h4>
// //                         <div className="space-y-1">
// //                             {aiSuggestions.map((suggestion, index) => (
// //                                 <div key={index} className="flex items-center gap-2 text-sm text-green-800">
// //                                     <TrendingUp className="h-3 w-3" />
// //                                     {suggestion}
// //                                 </div>
// //                             ))}
// //                         </div>
// //                     </div>
// //                 )}

// //                 <div className="grid grid-cols-3 gap-4 text-center">
// //                     <div className="p-3 bg-gray-50 rounded-lg">
// //                         <div className="text-lg font-semibold text-gray-900">{getWordCount()}</div>
// //                         <div className="text-xs text-gray-600">Words</div>
// //                         <div className="text-xs text-gray-500 mt-1">50-150 ideal</div>
// //                     </div>
// //                     <div className="p-3 bg-gray-50 rounded-lg">
// //                         <div className="text-lg font-semibold text-gray-900">{getOptimizationScore()}%</div>
// //                         <div className="text-xs text-gray-600">ATS Score</div>
// //                         <div className="text-xs text-gray-500 mt-1">80%+ target</div>
// //                     </div>
// //                     <div className="p-3 bg-gray-50 rounded-lg">
// //                         <div className="text-lg font-semibold text-gray-900">
// //                             {summary.match(/\b(React|Node|JavaScript|Python|AWS|Azure|PostgreSQL|MongoDB|TypeScript|Docker)\b/gi)?.length || 0}
// //                         </div>
// //                         <div className="text-xs text-gray-600">Tech Keywords</div>
// //                         <div className="text-xs text-gray-500 mt-1">3-5 recommended</div>
// //                     </div>
// //                 </div>
// //             </CardContent>
// //         </Card>
// //     );
// // }


// import { useState, ChangeEvent } from 'react';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { Textarea } from '@/components/ui/textarea';
// import { Badge } from '@/components/ui/badge';
// import { Alert, AlertDescription } from '@/components/ui/alert';
// import { FileText, Save, X, Sparkles, Lightbulb, Eye, EyeOff, Loader2, AlertCircle, CheckCircle, Copy, RotateCcw, TrendingUp } from 'lucide-react';

// interface SummaryEditorProps { data: string; onUpdate: (summary: string) => void; onClose: () => void; targetRole?: string; jobId?: string; }
// interface OptimizationResponse { jobId: string; optimizedText?: string; error?: string; }

// export function SummaryEditor({ data, onUpdate, onClose, targetRole, jobId }: SummaryEditorProps) {
//     const [summary, setSummary] = useState<string>(data);
//     const [originalSummary] = useState<string>(data);
//     const [isPreviewMode, setIsPreviewMode] = useState<boolean>(false);
//     const [isOptimizing, setIsOptimizing] = useState<boolean>(false);
//     const [optimizationError, setOptimizationError] = useState<string>('');
//     const [optimizationSuccess, setOptimizationSuccess] = useState<boolean>(false);
//     const [aiSuggestions, setAiSuggestions] = useState<string[]>([]);

//     const handleOptimize = async () => {
//         setIsOptimizing(true);
//         setOptimizationError('');
//         setOptimizationSuccess(false);
//         try {
//             const response = await fetch('/api/optimize-summary', {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify({ originalText: summary, role: targetRole || 'Software Engineer', jobId }),
//             });
//             const responseData: OptimizationResponse = await response.json();
//             if (!response.ok) throw new Error(responseData.error || 'Failed to optimize summary');

//             if (responseData.optimizedText) {
//                 const newSummaryText = responseData.optimizedText;
//                 setSummary(newSummaryText);
//                 onUpdate(newSummaryText);
//                 setOptimizationSuccess(true);
//                 setAiSuggestions(['Enhanced with action-oriented language', 'Added industry-specific keywords', 'Improved quantifiable achievements']);
//                 setTimeout(() => {
//                     setOptimizationSuccess(false);
//                     setAiSuggestions([]);
//                 }, 5000);
//             } else {
//                 throw new Error('No optimized text received from the AI');
//             }
//         } catch (error: any) {
//             setOptimizationError(error.message || 'An unknown error occurred.');
//             setTimeout(() => setOptimizationError(''), 5000);
//         } finally {
//             setIsOptimizing(false);
//         }
//     };

//     const handleSave = () => {
//         onUpdate(summary);
//         // onClose();
//     };

//     const getWordCount = (): number => summary.trim() ? summary.trim().split(/\s+/).length : 0;
//     const getCharCount = (): number => summary.length;

//     const summaryTemplates: { [key: string]: string; } = {
//         'Software Engineer': 'Full-Stack Software Engineer with [X] years of experience specializing in [technologies]. Proven track record in building scalable web applications, implementing CI/CD pipelines, and optimizing system performance.',
//         'Frontend Developer': 'Frontend Developer with [X] years of experience creating responsive, user-centric web applications using [technologies]. Skilled in modern JavaScript frameworks and performance optimization.',
//         'Backend Developer': 'Backend Developer with [X] years of experience designing and implementing robust server-side solutions. Expertise in [technologies], database optimization, and API development.',
//         'DevOps Engineer': 'DevOps Engineer with [X] years of experience automating deployment pipelines and managing cloud infrastructure. Proficient in [technologies] with a strong focus on continuous integration and system reliability.',
//     };

//     if (isPreviewMode) {
//         return (
//             <Card>
//                 <CardHeader className="flex flex-row items-center justify-between">
//                     <CardTitle className="flex items-center gap-2 text-sm"><FileText className="h-5 w-5" />Professional Summary Preview</CardTitle>
//                     <div className="flex items-center gap-2">
//                         <Button variant="outline" size="sm" onClick={() => setIsPreviewMode(false)}><EyeOff className="h-4 w-4 mr-2" />Edit Mode</Button>
//                         <Button size="sm" onClick={handleSave}><Save className="h-4 w-4 mr-2" />Save</Button>
//                         <Button variant="outline" size="sm" onClick={onClose}><X className="h-4 w-4" /></Button>
//                     </div>
//                 </CardHeader>
//                 <CardContent>
//                     <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
//                         <div className="flex items-center gap-2 mb-3">
//                             <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center"><FileText className="h-4 w-4 text-blue-600" /></div>
//                             <h3 className="text-lg font-semibold text-gray-900">PROFESSIONAL SUMMARY</h3>
//                         </div>
//                         <p className="text-gray-700 leading-relaxed text-justify">{summary}</p>
//                     </div>
//                 </CardContent>
//             </Card>
//         );
//     }

//     return (
//         <Card>
//             <CardHeader className="flex flex-col gap-5 items-center justify-between">
//                 <div>
//                     <CardTitle className="flex items-center gap-2 text-sm">
//                         <FileText className="h-5 w-5" />Edit Professional Summary<Badge variant="outline" className="text-xs">{getWordCount()} words</Badge>
//                         {targetRole && (<Badge variant="secondary" className="text-xs">Target: {targetRole}</Badge>)}
//                     </CardTitle>
//                     <p className="text-gray-600 mt-1 text-xs">Craft a compelling professional summary that highlights your key strengths</p>
//                 </div>
//                 <div className="flex items-center gap-2">
//                     <Button variant="outline" size="sm" onClick={handleOptimize} disabled={isOptimizing || !summary.trim()}>
//                         {isOptimizing ? <Loader2 className="h-4 w-4 mr-2 animate-spin" /> : <Sparkles className="h-4 w-4 mr-2" />}{isOptimizing ? 'Optimizing...' : 'AI Optimize'}
//                     </Button>
//                     <Button variant="outline" size="sm" onClick={() => setIsPreviewMode(true)}><Eye className="h-4 w-4 mr-2" />Preview</Button>
//                     <Button size="sm" onClick={handleSave}><Save className="h-4 w-4 mr-2" />Save</Button>
//                     <Button variant="outline" size="sm" onClick={onClose}><X className="h-4 w-4" /></Button>
//                 </div>
//             </CardHeader>
//             <CardContent className="space-y-6">
//                 {optimizationError && <Alert variant="destructive"><AlertCircle className="h-4 w-4" /><AlertDescription>{optimizationError}</AlertDescription></Alert>}
//                 {optimizationSuccess && <Alert className="border-green-200 bg-green-50"><CheckCircle className="h-4 w-4 text-green-600" /><AlertDescription className="text-green-800">Summary optimized successfully!</AlertDescription></Alert>}
//                 <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
//                     <h4 className="font-medium text-blue-900 mb-2 flex items-center gap-2"><Lightbulb className="h-4 w-4" />Summary Optimization Tips</h4>
//                     <ul className="text-sm text-blue-800 space-y-1">
//                         <li>• Start with your professional title and years of experience</li>
//                         <li>• Include 2-3 key technical skills or areas of expertise</li>
//                         <li>• Mention specific achievements with quantified results</li>
//                         <li>• Keep it concise: 60-80 words for optimal impact</li>
//                     </ul>
//                 </div>
//                 <div className="space-y-3">
//                     <div className="flex items-center justify-between"><h4 className="font-medium text-gray-900">Quick Templates</h4><Badge variant="outline" className="text-xs">Choose & Customize</Badge></div>
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
//                         {Object.entries(summaryTemplates).map(([role, template]) => (
//                             <Button key={role} variant="outline" size="sm" className="justify-start h-auto p-3 text-left" onClick={() => setSummary(template)} disabled={isOptimizing}>
//                                 <div><div className="font-medium text-xs">{role}</div><p className="text-xs text-gray-500 mt-1 line-clamp-3 max-w-[250px]">{template}</p></div>
//                             </Button>
//                         ))}
//                     </div>
//                 </div>
//                 <div className="space-y-4">
//                     <div className="flex items-center justify-between">
//                         <h4 className="font-medium text-gray-900">Professional Summary</h4>
//                         <div className="flex items-center gap-2">
//                             <Button variant="outline" size="sm" onClick={() => navigator.clipboard.writeText(summary)} disabled={!summary.trim()}><Copy className="h-4 w-4 mr-2" />Copy</Button>
//                             <Button variant="outline" size="sm" onClick={() => setSummary(originalSummary)} disabled={isOptimizing}><RotateCcw className="h-4 w-4 mr-2" />Reset</Button>
//                         </div>
//                     </div>
//                     <Textarea value={summary} onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setSummary(e.target.value)} placeholder="Write a compelling professional summary..." className="min-h-[200px] resize-none" maxLength={1000} disabled={isOptimizing} />
//                     <div className="flex items-center justify-between text-sm text-gray-600">
//                         <span>{getWordCount()} words</span><span>{getCharCount()}/1000 characters</span>
//                     </div>
//                 </div>
//                 {aiSuggestions.length > 0 && (
//                     <div className="bg-green-50 border border-green-200 rounded-lg p-4">
//                         <h4 className="font-medium text-green-900 mb-2 flex items-center gap-2"><Sparkles className="h-4 w-4" />AI Optimization Applied</h4>
//                         <div className="space-y-1">
//                             {aiSuggestions.map((suggestion, index) => (
//                                 <div key={index} className="flex items-center gap-2 text-sm text-green-800"><TrendingUp className="h-3 w-3" />{suggestion}</div>
//                             ))}
//                         </div>
//                     </div>
//                 )}
//             </CardContent>
//         </Card>
//     );
// }


import { useState, useEffect, ChangeEvent } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { FileText, Save, X, Sparkles, Lightbulb, Eye, EyeOff, Loader2, AlertCircle, CheckCircle } from 'lucide-react';

interface SummaryEditorProps { data: string; onUpdate: (summary: string) => void; onClose: () => void; targetRole?: string; }
interface OptimizationResponse { optimizedText?: string; error?: string; }

export function SummaryEditor({ data, onUpdate, onClose, targetRole }: SummaryEditorProps) {
    const [summary, setSummary] = useState<string>(data);
    const [isPreviewMode, setIsPreviewMode] = useState<boolean>(false);
    const [isOptimizing, setIsOptimizing] = useState<boolean>(false);
    const [optimizationError, setOptimizationError] = useState<string>('');
    const [optimizationSuccess, setOptimizationSuccess] = useState<boolean>(false);

    useEffect(() => {
        setSummary(data);
    }, [data]);

    const handleOptimize = async () => {
        setIsOptimizing(true);
        setOptimizationError('');
        setOptimizationSuccess(false);

        try {
            const response = await fetch('/api/optimize-summary', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ originalText: summary, role: targetRole || 'Software Engineer' }),
            });
            const responseData: OptimizationResponse = await response.json();
            if (!response.ok) throw new Error(responseData.error || 'Failed to optimize summary');

            if (responseData.optimizedText) {
                const newSummaryText = responseData.optimizedText;
                setSummary(newSummaryText);
                onUpdate(newSummaryText);
                setOptimizationSuccess(true);
                setTimeout(() => setOptimizationSuccess(false), 5000);
            } else {
                throw new Error('No optimized text received from the AI');
            }
        } catch (error: any) {
            setOptimizationError(error.message || 'An unknown error occurred.');
            setTimeout(() => setOptimizationError(''), 5000);
        } finally {
            setIsOptimizing(false);
        }
    };

    const handleSave = () => {
        onUpdate(summary);
        onClose();
    };

    const getWordCount = (): number => summary.trim() ? summary.trim().split(/\s+/).length : 0;

    return (
        <Card>
            <CardHeader className="flex flex-col gap-5 items-center justify-between">
                <div>
                    <CardTitle className="flex items-center gap-2 text-sm">
                        <FileText className="h-5 w-5" />Edit Professional Summary<Badge variant="outline" className="text-xs">{getWordCount()} words</Badge>
                        {targetRole && (<Badge variant="secondary" className="text-xs">Target: {targetRole}</Badge>)}
                    </CardTitle>
                    <p className="text-gray-600 mt-1 text-xs">Craft a compelling professional summary that highlights your key strengths</p>
                </div>
                <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" onClick={handleOptimize} disabled={isOptimizing || !summary.trim()}>
                        {isOptimizing ? <Loader2 className="h-4 w-4 mr-2 animate-spin" /> : <Sparkles className="h-4 w-4 mr-2" />}{isOptimizing ? 'Optimizing...' : 'AI Optimize'}
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => setIsPreviewMode(true)}><Eye className="h-4 w-4 mr-2" />Preview</Button>
                    <Button size="sm" onClick={handleSave}><Save className="h-4 w-4 mr-2" />Save</Button>
                    <Button variant="outline" size="sm" onClick={onClose}><X className="h-4 w-4" /></Button>
                </div>
            </CardHeader>
            <CardContent className="space-y-6">
                {optimizationError && <Alert variant="destructive"><AlertCircle className="h-4 w-4" /><AlertDescription>{optimizationError}</AlertDescription></Alert>}
                {optimizationSuccess && <Alert className="border-green-200 bg-green-50"><CheckCircle className="h-4 w-4 text-green-600" /><AlertDescription className="text-green-800">Summary optimized and saved successfully!</AlertDescription></Alert>}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-medium text-blue-900 mb-2 flex items-center gap-2"><Lightbulb className="h-4 w-4" />Summary Optimization Tips</h4>
                    <ul className="text-sm text-blue-800 space-y-1">
                        <li>• Start with your professional title and years of experience</li>
                        <li>• Include 2-3 key technical skills or areas of expertise</li>
                        <li>• Mention specific achievements with quantified results</li>
                        <li>• Keep it concise: 60-80 words for optimal impact</li>
                    </ul>
                </div>
                <Textarea value={summary} onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setSummary(e.target.value)} placeholder="Write a compelling professional summary..." className="min-h-[200px] resize-none" maxLength={1000} disabled={isOptimizing} />
            </CardContent>
        </Card>
    );
}