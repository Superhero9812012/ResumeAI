// // // 'use client';

// // // import { useState, useEffect } from 'react';
// // // import type { ApexOptions } from 'apexcharts';
// // // import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// // // // We need to dynamically import ApexCharts to avoid SSR issues
// // // import dynamic from 'next/dynamic';
// // // const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

// // // interface KeywordChartProps {
// // //     originalText: string;
// // //     optimizedText: string;
// // // }

// // // // A simple list of common "action" keywords. This could be expanded.
// // // const KEYWORDS = ['leadership', 'managed', 'increased', 'developed', 'strategy', 'optimized', 'analytics', 'revenue', 'created', 'implemented'];

// // // export function KeywordChart({ originalText, optimizedText }: KeywordChartProps) {
// // //     const [chartData, setChartData] = useState<{ series: any[], options: ApexOptions }>({
// // //         series: [],
// // //         options: {},
// // //     });

// // //     useEffect(() => {
// // //         const generateChartData = () => {
// // //             const originalCounts = KEYWORDS.map(keyword => {
// // //                 const regex = new RegExp(keyword, 'gi');
// // //                 return (originalText.match(regex) || []).length;
// // //             });

// // //             const optimizedCounts = KEYWORDS.map(keyword => {
// // //                 const regex = new RegExp(keyword, 'gi');
// // //                 return (optimizedText.match(regex) || []).length;
// // //             });

// // //             setChartData({
// // //                 series: [
// // //                     { name: 'Original Resume', data: originalCounts },
// // //                     { name: 'Optimized Resume', data: optimizedCounts },
// // //                 ],
// // //                 options: {
// // //                     chart: {
// // //                         type: 'bar',
// // //                         height: 350,
// // //                         toolbar: { show: false },
// // //                     },
// // //                     plotOptions: { bar: { horizontal: false, columnWidth: '55%', endingShape: 'rounded' } },
// // //                     dataLabels: { enabled: false },
// // //                     stroke: { show: true, width: 2, colors: ['transparent'] },
// // //                     xaxis: { categories: KEYWORDS.map(k => k.charAt(0).toUpperCase() + k.slice(1)) },
// // //                     yaxis: { title: { text: 'Keyword Count' } },
// // //                     fill: { opacity: 1 },
// // //                     tooltip: { y: { formatter: (val) => `${val} mentions` } },
// // //                     theme: { mode: 'dark' } // Assuming a dark theme. Change to 'light' if needed.
// // //                 },
// // //             });
// // //         };

// // //         generateChartData();
// // //     }, [originalText, optimizedText]);

// // //     // Ensure chart only renders on the client
// // //     if (typeof window === 'undefined') {
// // //         return null;
// // //     }

// // //     return (
// // //         <Card>
// // //             <CardHeader>
// // //                 <CardTitle>Keyword Improvement Analysis</CardTitle>
// // //             </CardHeader>
// // //             <CardContent>
// // //                 <Chart
// // //                     options={chartData.options}
// // //                     series={chartData.series}
// // //                     type="bar"
// // //                     height={350}
// // //                     width="100%"
// // //                 />
// // //             </CardContent>
// // //         </Card>
// // //     );
// // // }



// // 'use client';

// // import { useState, useEffect } from 'react';
// // import type { ApexOptions } from 'apexcharts';
// // import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// // import { Badge } from '@/components/ui/badge';
// // import dynamic from 'next/dynamic';

// // // Dynamic import to avoid SSR issues
// // const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

// // interface KeywordChartProps {
// //     originalText: string;
// //     optimizedText: string;
// // }

// // // Expand keyword list with more ATS-friendly and action-oriented terms
// // const KEYWORDS = [
// //     'leadership',
// //     'managed',
// //     'increased',
// //     'developed',
// //     'strategy',
// //     'optimized',
// //     'analytics',
// //     'revenue',
// //     'created',
// //     'implemented',
// //     'improved',
// //     'led',
// //     'achieved',
// //     'spearheaded',
// //     'collaborated',
// //     'engineered',
// //     'scaled',
// //     'reduced',
// //     'delivered',
// //     'executed'
// // ];

// // export function KeywordChart({ originalText, optimizedText }: KeywordChartProps) {
// //     const [chartData, setChartData] = useState<{
// //         series: { name: string; data: number[] }[];
// //         options: ApexOptions;
// //     }>({
// //         series: [],
// //         options: {},
// //     });

// //     useEffect(() => {
// //         const generateChartData = () => {
// //             const originalCounts = KEYWORDS.map(keyword => {
// //                 const regex = new RegExp(`\\b${keyword}\\b`, 'gi'); // \b ensures word boundaries
// //                 return (originalText.match(regex) || []).length;
// //             });

// //             const optimizedCounts = KEYWORDS.map(keyword => {
// //                 const regex = new RegExp(`\\b${keyword}\\b`, 'gi');
// //                 return (optimizedText.match(regex) || []).length;
// //             });

// //             // Calculate improvements
// //             const improvements = optimizedCounts.map((count, i) => count - originalCounts[i]);
// //             const totalImprovements = improvements.filter(diff => diff > 0).reduce((a, b) => a + b, 0);
// //             const keywordsImproved = improvements.filter(diff => diff > 0).length;

// //             // Define color gradients for modern look
// //             const gradientColors = {
// //                 original: ['#94a3b8', '#64748b'], // Gray-blue
// //                 optimized: ['#3b82f6', '#1d4ed8'], // Blue gradient
// //             };

// //             setChartData({
// //                 series: [
// //                     {
// //                         name: 'Original Resume',
// //                         data: originalCounts,
// //                     },
// //                     {
// //                         name: 'Optimized Resume',
// //                         data: optimizedCounts,
// //                     },
// //                 ],
// //                 options: {
// //                     chart: {
// //                         type: 'bar',
// //                         height: 400,
// //                         stacked: false,
// //                         toolbar: {
// //                             show: true,
// //                             tools: {
// //                                 download: true,
// //                                 selection: false,
// //                                 zoom: false,
// //                                 zoomin: true,
// //                                 zoomout: true,
// //                                 pan: false,
// //                             },
// //                         },
// //                         animations: {
// //                             enabled: true,
// //                             easing: 'easeinout',
// //                             speed: 800,
// //                         },
// //                     },
// //                     plotOptions: {
// //                         bar: {
// //                             horizontal: false,
// //                             columnWidth: '60%',
// //                             endingShape: 'rounded',
// //                             borderRadius: 6,
// //                             dataLabels: {
// //                                 position: 'top', // Display values on top
// //                             },
// //                         },
// //                     },
// //                     dataLabels: {
// //                         enabled: true,
// //                         offsetY: -20,
// //                         style: {
// //                             fontSize: '11px',
// //                             colors: ['#6b7280'],
// //                             fontWeight: 600,
// //                         },
// //                         formatter: (val: number) => (val > 0 ? val.toString() : ''),
// //                     },
// //                     stroke: {
// //                         show: true,
// //                         width: 6,
// //                         colors: ['transparent'],
// //                     },
// //                     xaxis: {
// //                         categories: KEYWORDS.map(k => k.charAt(0).toUpperCase() + k.slice(1)),
// //                         title: {
// //                             text: 'Keywords',
// //                             style: {
// //                                 fontWeight: 600,
// //                                 fontSize: '13px',
// //                                 color: '#4b5563',
// //                             },
// //                         },
// //                         axisBorder: {
// //                             show: true,
// //                             color: '#e5e7eb',
// //                         },
// //                         axisTicks: {
// //                             show: true,
// //                             color: '#e5e7eb',
// //                         },
// //                         labels: {
// //                             style: {
// //                                 fontSize: '12px',
// //                                 fontWeight: 500,
// //                                 colors: '#4b5563',
// //                             },
// //                         },
// //                     },
// //                     yaxis: {
// //                         title: {
// //                             text: 'Mentions in Resume',
// //                             style: {
// //                                 fontWeight: 600,
// //                                 fontSize: '13px',
// //                                 color: '#4b5563',
// //                             },
// //                         },
// //                         min: 0,
// //                         max: Math.max(...optimizedCounts, ...originalCounts) > 5 ? undefined : 5,
// //                         labels: {
// //                             style: {
// //                                 fontSize: '12px',
// //                                 colors: '#6b7280',
// //                             },
// //                         },
// //                     },
// //                     fill: {
// //                         type: 'gradient',
// //                         gradient: {
// //                             shade: 'light',
// //                             type: 'vertical',
// //                             shadeIntensity: 0.4,
// //                             gradientToColors: ['#bfdbfe', '#e0f2fe'],
// //                             inverseColors: false,
// //                             opacityFrom: 0.9,
// //                             opacityTo: 0.8,
// //                             stops: [0, 100],
// //                         },
// //                     },
// //                     colors: [gradientColors.original[0], gradientColors.optimized[0]],
// //                     tooltip: {
// //                         theme: 'dark',
// //                         shared: true,
// //                         intersect: false,
// //                         custom: function ({ series, seriesIndex, dataPointIndex, w }) {
// //                             const keyword = KEYWORDS[dataPointIndex];
// //                             const original = series[0][dataPointIndex];
// //                             const optimized = series[1][dataPointIndex];
// //                             const diff = optimized - original;
// //                             const improvementColor = diff > 0 ? 'text-green-400' : 'text-yellow-400';

// //                             return `
// //                                 <div class="p-3 rounded-lg shadow-lg border border-gray-700" style="background: rgba(15, 23, 42, 0.9); min-width: 220px;">
// //                                     <span class="font-semibold text-white text-sm">${keyword}</span>
// //                                     <div class="mt-2 text-xs">
// //                                         <div class="flex justify-between py-1">
// //                                             <span class="text-gray-300">Original:</span>
// //                                             <span class="font-medium">${original}</span>
// //                                         </div>
// //                                         <div class="flex justify-between py-1">
// //                                             <span class="text-gray-300">Optimized:</span>
// //                                             <span class="font-medium">${optimized}</span>
// //                                         </div>
// //                                         <div class="flex justify-between py-1 mt-1 pt-1 border-t border-gray-600 ${diff > 0 ? 'text-green-400' : ''}">
// //                                             <span class="text-gray-300">Change:</span>
// //                                             <span class="font-bold ${diff > 0 ? 'text-green-400' : 'text-yellow-400'}">
// //                                                 ${diff > 0 ? '+' : ''}${diff}
// //                                             </span>
// //                                         </div>
// //                                     </div>
// //                                 </div>
// //                             `;
// //                         },
// //                     },
// //                     legend: {
// //                         position: 'top',
// //                         horizontalAlign: 'center',
// //                         fontWeight: 600,
// //                         fontSize: '13px',
// //                         markers: {
// //                             width: 10,
// //                             height: 10,
// //                             radius: 3,
// //                         },
// //                         itemMargin: {
// //                             horizontal: 12,
// //                             vertical: 8,
// //                         },
// //                     },
// //                     grid: {
// //                         borderColor: '#e5e7eb',
// //                         strokeDashArray: 6,
// //                         yaxis: {
// //                             lines: {
// //                                 show: true,
// //                             },
// //                         },
// //                         padding: {
// //                             top: 10,
// //                             right: 20,
// //                             bottom: 20,
// //                             left: 10,
// //                         },
// //                     },
// //                 },
// //             });
// //         };

// //         generateChartData();
// //     }, [originalText, optimizedText]);

// //     // Fallback for SSR
// //     if (typeof window === 'undefined') return null;

// //     // Calculate summary stats
// //     const originalTotal = KEYWORDS.reduce((sum, k) => {
// //         const regex = new RegExp(`\\b${k}\\b`, 'gi');
// //         return sum + ((originalText.match(regex) || []).length);
// //     }, 0);

// //     const optimizedTotal = KEYWORDS.reduce((sum, k) => {
// //         const regex = new RegExp(`\\b${k}\\b`, 'gi');
// //         return sum + ((optimizedText.match(regex) || []).length);
// //     }, 0);

// //     const improvement = optimizedTotal - originalTotal;

// //     return (
// //         <Card className="shadow-lg border-none bg-white dark:bg-gray-900">
// //             <CardHeader className="pb-4">
// //                 <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
// //                     <div>
// //                         <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">
// //                             Keyword Improvement Analysis
// //                         </CardTitle>
// //                         <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
// //                             How your resume improved in key ATS and action terms
// //                         </p>
// //                     </div>
// //                     <div className="flex flex-wrap gap-2 justify-center sm:justify-end">
// //                         <Badge variant="outline" className="text-xs px-2 py-1 bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:border-blue-800">
// //                             Total: {optimizedTotal}
// //                         </Badge>
// //                         <Badge variant="secondary" className={`text-xs px-2 py-1 ${improvement > 0 ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' : 'bg-yellow-100 text-yellow-800'}`}>
// //                             {improvement > 0 ? '+' : ''}{improvement} 📈
// //                         </Badge>
// //                     </div>
// //                 </div>
// //             </CardHeader>
// //             <CardContent className="pt-2">
// //                 {chartData.series.length > 0 ? (
// //                     <Chart
// //                         options={chartData.options}
// //                         series={chartData.series}
// //                         type="bar"
// //                         height={400}
// //                         width="100%"
// //                     />
// //                 ) : (
// //                     <p className="text-center py-10 text-gray-500 dark:text-gray-400">No keyword data available.</p>
// //                 )}
// //                 <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center">
// //                     * Analysis based on {KEYWORDS.length} high-impact keywords commonly used in top-performing resumes.
// //                 </p>
// //             </CardContent>
// //         </Card>
// //     );
// // }



// 'use client';
// import { useState, useEffect, useMemo } from 'react';
// import type { ApexOptions } from 'apexcharts';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { Badge } from '@/components/ui/badge';
// import { TrendingUp, TrendingDown, Minus, Target, BarChart3 } from 'lucide-react';
// import dynamic from 'next/dynamic';

// const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

// interface KeywordChartProps {
//     originalText: string;
//     optimizedText: string;
// }

// // Expanded and categorized keywords for better analysis
// const KEYWORD_CATEGORIES = {
//     'Leadership': ['leadership', 'managed', 'led', 'supervised', 'directed', 'guided', 'mentored'],
//     'Achievement': ['increased', 'improved', 'enhanced', 'boosted', 'grew', 'accelerated', 'achieved'],
//     'Development': ['developed', 'created', 'built', 'designed', 'established', 'launched', 'initiated'],
//     'Strategy': ['strategy', 'strategic', 'planning', 'optimization', 'streamlined', 'restructured'],
//     'Technical': ['implemented', 'automated', 'integrated', 'deployed', 'configured', 'programmed'],
//     'Analytics': ['analytics', 'analyzed', 'data', 'metrics', 'insights', 'reporting', 'measured'],
//     'Business': ['revenue', 'profit', 'sales', 'growth', 'ROI', 'cost-effective', 'budget'],
//     'Collaboration': ['collaborated', 'coordinated', 'partnered', 'facilitated', 'communicated']
// };

// const ALL_KEYWORDS = Object.values(KEYWORD_CATEGORIES).flat();

// interface KeywordStats {
//     keyword: string;
//     original: number;
//     optimized: number;
//     change: number;
//     changePercent: number;
//     trend: 'up' | 'down' | 'same';
// }

// export function KeywordChart({ originalText, optimizedText }: KeywordChartProps) {
//     const [chartData, setChartData] = useState<{ series: any[], options: ApexOptions }>({
//         series: [],
//         options: {},
//     });

//     const keywordStats = useMemo(() => {
//         return ALL_KEYWORDS.map(keyword => {
//             const regex = new RegExp(`\\b${keyword}\\b`, 'gi');
//             const originalCount = (originalText.match(regex) || []).length;
//             const optimizedCount = (optimizedText.match(regex) || []).length;
//             const change = optimizedCount - originalCount;
//             const changePercent = originalCount > 0 ? (change / originalCount) * 100 : (optimizedCount > 0 ? 100 : 0);

//             return {
//                 keyword: keyword.charAt(0).toUpperCase() + keyword.slice(1),
//                 original: originalCount,
//                 optimized: optimizedCount,
//                 change,
//                 changePercent,
//                 trend: change > 0 ? 'up' as const : change < 0 ? 'down' as const : 'same' as const
//             };
//         }).filter(stat => stat.original > 0 || stat.optimized > 0) // Only show keywords that appear
//             .sort((a, b) => (b.original + b.optimized) - (a.original + a.optimized)); // Sort by total usage
//     }, [originalText, optimizedText]);

//     const summaryStats = useMemo(() => {
//         const totalOriginal = keywordStats.reduce((sum, stat) => sum + stat.original, 0);
//         const totalOptimized = keywordStats.reduce((sum, stat) => sum + stat.optimized, 0);
//         const improved = keywordStats.filter(stat => stat.trend === 'up').length;
//         const decreased = keywordStats.filter(stat => stat.trend === 'down').length;

//         return {
//             totalOriginal,
//             totalOptimized,
//             totalChange: totalOptimized - totalOriginal,
//             totalChangePercent: totalOriginal > 0 ? ((totalOptimized - totalOriginal) / totalOriginal) * 100 : 0,
//             improved,
//             decreased,
//             unchanged: keywordStats.filter(stat => stat.trend === 'same').length
//         };
//     }, [keywordStats]);

//     useEffect(() => {
//         if (keywordStats.length === 0) return;

//         const categories = keywordStats.map(stat => stat.keyword);
//         const originalCounts = keywordStats.map(stat => stat.original);
//         const optimizedCounts = keywordStats.map(stat => stat.optimized);

//         const options: ApexOptions = {
//             chart: {
//                 type: 'bar',
//                 height: 400,
//                 toolbar: { show: true },
//                 background: 'transparent',
//                 fontFamily: 'Inter, system-ui, sans-serif',
//                 animations: {
//                     enabled: true,
//                     easing: 'easeinout',
//                     speed: 800
//                 }
//             },
//             plotOptions: {
//                 bar: {
//                     horizontal: false,
//                     columnWidth: '70%',
//                     endingShape: 'rounded',
//                     borderRadius: 4,
//                     dataLabels: {
//                         position: 'top'
//                     }
//                 }
//             },
//             dataLabels: {
//                 enabled: true,
//                 offsetY: -20,
//                 style: {
//                     fontSize: '12px',
//                     fontWeight: 600,
//                     colors: ['#374151']
//                 }
//             },
//             stroke: {
//                 show: true,
//                 width: 2,
//                 colors: ['transparent']
//             },
//             xaxis: {
//                 categories,
//                 title: {
//                     text: 'Keywords',
//                     style: {
//                         fontSize: '14px',
//                         fontWeight: 600,
//                         color: '#374151'
//                     }
//                 },
//                 labels: {
//                     style: {
//                         fontSize: '12px',
//                         fontWeight: 500,
//                         colors: '#6B7280'
//                     },
//                     rotate: -45
//                 }
//             },
//             yaxis: {
//                 title: {
//                     text: 'Keyword Count',
//                     style: {
//                         fontSize: '14px',
//                         fontWeight: 600,
//                         color: '#374151'
//                     }
//                 },
//                 labels: {
//                     style: {
//                         fontSize: '12px',
//                         colors: '#6B7280'
//                     }
//                 }
//             },
//             colors: ['#EF4444', '#10B981'],
//             fill: {
//                 opacity: 0.8,
//                 type: 'gradient',
//                 gradient: {
//                     shade: 'light',
//                     type: 'vertical',
//                     shadeIntensity: 0.25,
//                     gradientToColors: ['#DC2626', '#059669'],
//                     inverseColors: false,
//                     opacityFrom: 0.8,
//                     opacityTo: 0.6,
//                 }
//             },
//             tooltip: {
//                 shared: true,
//                 intersect: false,
//                 y: {
//                     formatter: (val, { seriesIndex, dataPointIndex }) => {
//                         const stat = keywordStats[dataPointIndex];
//                         const label = seriesIndex === 0 ? 'Original' : 'Optimized';
//                         const change = stat.change;
//                         const changeText = change > 0 ? `(+${change})` : change < 0 ? `(${change})` : '';
//                         return `${val} mentions ${changeText}`;
//                     }
//                 },
//                 style: {
//                     fontSize: '12px'
//                 }
//             },
//             legend: {
//                 position: 'top',
//                 horizontalAlign: 'right',
//                 fontSize: '14px',
//                 fontWeight: 500,
//                 markers: {
//                     width: 12,
//                     height: 12,
//                     radius: 6
//                 }
//             },
//             grid: {
//                 borderColor: '#E5E7EB',
//                 strokeDashArray: 3,
//                 xaxis: {
//                     lines: {
//                         show: false
//                     }
//                 }
//             },
//             responsive: [{
//                 breakpoint: 768,
//                 options: {
//                     plotOptions: {
//                         bar: {
//                             columnWidth: '90%'
//                         }
//                     },
//                     xaxis: {
//                         labels: {
//                             rotate: -90
//                         }
//                     }
//                 }
//             }]
//         };

//         setChartData({
//             series: [
//                 {
//                     name: 'Original Resume',
//                     data: originalCounts,
//                     color: '#EF4444'
//                 },
//                 {
//                     name: 'Optimized Resume',
//                     data: optimizedCounts,
//                     color: '#10B981'
//                 },
//             ],
//             options
//         });
//     }, [keywordStats]);

//     const getTrendIcon = (trend: 'up' | 'down' | 'same') => {
//         switch (trend) {
//             case 'up':
//                 return <TrendingUp className="w-4 h-4 text-green-500" />;
//             case 'down':
//                 return <TrendingDown className="w-4 h-4 text-red-500" />;
//             default:
//                 return <Minus className="w-4 h-4 text-gray-400" />;
//         }
//     };

//     const getTrendColor = (trend: 'up' | 'down' | 'same') => {
//         switch (trend) {
//             case 'up':
//                 return 'bg-green-50 text-green-700 border-green-200';
//             case 'down':
//                 return 'bg-red-50 text-red-700 border-red-200';
//             default:
//                 return 'bg-gray-50 text-gray-700 border-gray-200';
//         }
//     };

//     if (typeof window === 'undefined') {
//         return null;
//     }

//     return (
//         <div className="space-y-6">
//             {/* Summary Cards */}
//             <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//                 <Card className="border-l-4 border-l-blue-500">
//                     <CardContent className="p-4">
//                         <div className="flex items-center space-x-2">
//                             <Target className="w-5 h-5 text-blue-500" />
//                             <div>
//                                 <p className="text-sm font-medium text-gray-600">Total Keywords</p>
//                                 <p className="text-2xl font-bold text-gray-900">{summaryStats.totalOptimized}</p>
//                                 <p className="text-xs text-gray-500">
//                                     {summaryStats.totalChange >= 0 ? '+' : ''}{summaryStats.totalChange} from original
//                                 </p>
//                             </div>
//                         </div>
//                     </CardContent>
//                 </Card>

//                 <Card className="border-l-4 border-l-green-500">
//                     <CardContent className="p-4">
//                         <div className="flex items-center space-x-2">
//                             <TrendingUp className="w-5 h-5 text-green-500" />
//                             <div>
//                                 <p className="text-sm font-medium text-gray-600">Improved</p>
//                                 <p className="text-2xl font-bold text-green-600">{summaryStats.improved}</p>
//                                 <p className="text-xs text-gray-500">keywords increased</p>
//                             </div>
//                         </div>
//                     </CardContent>
//                 </Card>

//                 <Card className="border-l-4 border-l-red-500">
//                     <CardContent className="p-4">
//                         <div className="flex items-center space-x-2">
//                             <TrendingDown className="w-5 h-5 text-red-500" />
//                             <div>
//                                 <p className="text-sm font-medium text-gray-600">Decreased</p>
//                                 <p className="text-2xl font-bold text-red-600">{summaryStats.decreased}</p>
//                                 <p className="text-xs text-gray-500">keywords reduced</p>
//                             </div>
//                         </div>
//                     </CardContent>
//                 </Card>

//                 <Card className="border-l-4 border-l-purple-500">
//                     <CardContent className="p-4">
//                         <div className="flex items-center space-x-2">
//                             <BarChart3 className="w-5 h-5 text-purple-500" />
//                             <div>
//                                 <p className="text-sm font-medium text-gray-600">Overall Change</p>
//                                 <p className="text-2xl font-bold text-purple-600">
//                                     {summaryStats.totalChangePercent >= 0 ? '+' : ''}{summaryStats.totalChangePercent.toFixed(1)}%
//                                 </p>
//                                 <p className="text-xs text-gray-500">improvement rate</p>
//                             </div>
//                         </div>
//                     </CardContent>
//                 </Card>
//             </div>

//             {/* Main Chart */}
//             <Card className="shadow-lg">
//                 <CardHeader className="pb-4">
//                     <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
//                         <div>
//                             <CardTitle className="text-xl font-bold text-gray-900">
//                                 Keyword Optimization Analysis
//                             </CardTitle>
//                             <p className="text-sm text-gray-600 mt-1">
//                                 Comparison of keyword usage between original and optimized resume
//                             </p>
//                         </div>
//                         <Badge variant="outline" className="w-fit">
//                             {keywordStats.length} Keywords Analyzed
//                         </Badge>
//                     </div>
//                 </CardHeader>
//                 <CardContent className="p-6">
//                     {keywordStats.length > 0 ? (
//                         <Chart
//                             options={chartData.options}
//                             series={chartData.series}
//                             type="bar"
//                             height={400}
//                             width="100%"
//                         />
//                     ) : (
//                         <div className="flex items-center justify-center h-64 text-gray-500">
//                             <div className="text-center">
//                                 <BarChart3 className="w-12 h-12 mx-auto mb-4 text-gray-300" />
//                                 <p className="text-lg font-medium">No keywords found</p>
//                                 <p className="text-sm">Add some professional keywords to see the analysis</p>
//                             </div>
//                         </div>
//                     )}
//                 </CardContent>
//             </Card>

//             {/* Detailed Keyword List */}
//             {keywordStats.length > 0 && (
//                 <Card>
//                     <CardHeader>
//                         <CardTitle className="text-lg font-semibold">Detailed Keyword Breakdown</CardTitle>
//                         <p className="text-sm text-gray-600">Individual keyword performance and trends</p>
//                     </CardHeader>
//                     <CardContent>
//                         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
//                             {keywordStats.slice(0, 12).map((stat, index) => (
//                                 <div key={index} className={`p-3 rounded-lg border ${getTrendColor(stat.trend)}`}>
//                                     <div className="flex items-center justify-between mb-2">
//                                         <span className="font-medium text-sm">{stat.keyword}</span>
//                                         {getTrendIcon(stat.trend)}
//                                     </div>
//                                     <div className="flex items-center justify-between text-xs">
//                                         <span>Original: {stat.original}</span>
//                                         <span>Optimized: {stat.optimized}</span>
//                                     </div>
//                                     {stat.change !== 0 && (
//                                         <div className="mt-1 text-xs font-medium">
//                                             {stat.change > 0 ? '+' : ''}{stat.change}
//                                             {stat.changePercent !== 0 && (
//                                                 <span className="ml-1">
//                                                     ({stat.changePercent > 0 ? '+' : ''}{stat.changePercent.toFixed(0)}%)
//                                                 </span>
//                                             )}
//                                         </div>
//                                     )}
//                                 </div>
//                             ))}
//                         </div>
//                         {keywordStats.length > 12 && (
//                             <div className="mt-4 text-center">
//                                 <p className="text-sm text-gray-500">
//                                     Showing top 12 keywords. {keywordStats.length - 12} more keywords analyzed.
//                                 </p>
//                             </div>
//                         )}
//                     </CardContent>
//                 </Card>
//             )}
//         </div>
//     );
// }



'use client';
import { useState, useEffect, useMemo, useCallback } from 'react';
import type { ApexOptions } from 'apexcharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
    TrendingUp,
    TrendingDown,
    Minus,
    Target,
    BarChart3,
    Zap,
    Award,
    Brain,
    Users,
    Code,
    PieChart,
    Activity,
    ChevronDown,
    ChevronUp,
    Filter,
    Download,
    RefreshCw,
    Eye,
    EyeOff,
    Star,
    AlertTriangle,
    CheckCircle2,
    Info
} from 'lucide-react';
import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

interface KeywordChartProps {
    originalText: string;
    optimizedText: string;
    industryFocus?: 'tech' | 'finance' | 'healthcare' | 'marketing' | 'general';
    showAdvancedMetrics?: boolean;
}

// Advanced keyword categorization with industry-specific weights
const KEYWORD_CATEGORIES = {
    'Leadership & Management': {
        keywords: ['leadership', 'managed', 'led', 'supervised', 'directed', 'guided', 'mentored', 'oversaw', 'coordinated', 'delegated', 'empowered', 'influenced'],
        weight: 1.2,
        icon: Users,
        color: '#8B5CF6',
        description: 'Leadership and people management skills'
    },
    'Achievement & Results': {
        keywords: ['increased', 'improved', 'enhanced', 'boosted', 'grew', 'accelerated', 'achieved', 'exceeded', 'delivered', 'maximized', 'optimized', 'outperformed'],
        weight: 1.3,
        icon: Award,
        color: '#10B981',
        description: 'Quantifiable achievements and results'
    },
    'Innovation & Development': {
        keywords: ['developed', 'created', 'built', 'designed', 'established', 'launched', 'initiated', 'pioneered', 'innovated', 'transformed', 'revolutionized', 'modernized'],
        weight: 1.1,
        icon: Brain,
        color: '#3B82F6',
        description: 'Innovation and creative development'
    },
    'Strategy & Planning': {
        keywords: ['strategy', 'strategic', 'planning', 'optimization', 'streamlined', 'restructured', 'analyzed', 'forecasted', 'planned', 'architected', 'envisioned'],
        weight: 1.2,
        icon: Target,
        color: '#F59E0B',
        description: 'Strategic thinking and planning abilities'
    },
    'Technical Excellence': {
        keywords: ['implemented', 'automated', 'integrated', 'deployed', 'configured', 'programmed', 'engineered', 'developed', 'architected', 'optimized', 'debugged', 'scaled'],
        weight: 1.1,
        icon: Code,
        color: '#EF4444',
        description: 'Technical skills and implementation'
    },
    'Analytics & Insights': {
        keywords: ['analytics', 'analyzed', 'data', 'metrics', 'insights', 'reporting', 'measured', 'evaluated', 'assessed', 'researched', 'investigated', 'monitored'],
        weight: 1.0,
        icon: PieChart,
        color: '#06B6D4',
        description: 'Data analysis and insights generation'
    },
    'Business Impact': {
        keywords: ['revenue', 'profit', 'sales', 'growth', 'ROI', 'cost-effective', 'budget', 'savings', 'efficiency', 'productivity', 'performance', 'value'],
        weight: 1.4,
        icon: Activity,
        color: '#84CC16',
        description: 'Business and financial impact'
    },
    'Collaboration & Communication': {
        keywords: ['collaborated', 'coordinated', 'partnered', 'facilitated', 'communicated', 'presented', 'negotiated', 'influenced', 'engaged', 'connected', 'liaised'],
        weight: 0.9,
        icon: Users,
        color: '#F97316',
        description: 'Teamwork and communication skills'
    }
};

interface KeywordStats {
    keyword: string;
    category: string;
    original: number;
    optimized: number;
    change: number;
    changePercent: number;
    trend: 'up' | 'down' | 'same';
    weight: number;
    score: number;
    priority: 'high' | 'medium' | 'low';
    recommendation?: string;
}

interface CategoryStats {
    name: string;
    original: number;
    optimized: number;
    change: number;
    weight: number;
    score: number;
    color: string;
    icon: any;
    keywords: KeywordStats[];
}

export function KeywordChart({
    originalText,
    optimizedText,
    industryFocus = 'general',
    showAdvancedMetrics = true
}: KeywordChartProps) {
    const [chartData, setChartData] = useState<{ series: any[], options: ApexOptions }>({
        series: [],
        options: {},
    });
    const [viewMode, setViewMode] = useState<'overview' | 'categories' | 'detailed'>('overview');
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [showRecommendations, setShowRecommendations] = useState(true);
    const [animationPhase, setAnimationPhase] = useState(0);

    // Calculate comprehensive keyword statistics
    const keywordAnalysis = useMemo(() => {
        const allStats: KeywordStats[] = [];
        const categoryStats: CategoryStats[] = [];

        Object.entries(KEYWORD_CATEGORIES).forEach(([categoryName, categoryData]) => {
            const categoryKeywords: KeywordStats[] = [];
            let categoryOriginal = 0;
            let categoryOptimized = 0;

            categoryData.keywords.forEach(keyword => {
                const regex = new RegExp(`\\b${keyword}\\b`, 'gi');
                const originalCount = (originalText.match(regex) || []).length;
                const optimizedCount = (optimizedText.match(regex) || []).length;
                const change = optimizedCount - originalCount;
                const changePercent = originalCount > 0 ? (change / originalCount) * 100 : (optimizedCount > 0 ? 100 : 0);
                const score = (optimizedCount * categoryData.weight) + (change > 0 ? change * 0.5 : 0);

                const priority = score > 3 ? 'high' : score > 1 ? 'medium' : 'low';
                let recommendation = '';

                if (change < 0) {
                    recommendation = `Consider adding more "${keyword}" instances to strengthen this area`;
                } else if (change > 2) {
                    recommendation = `Excellent improvement in "${keyword}" usage`;
                } else if (optimizedCount === 0 && originalCount === 0) {
                    recommendation = `Consider incorporating "${keyword}" to enhance impact`;
                }

                const stat: KeywordStats = {
                    keyword: keyword.charAt(0).toUpperCase() + keyword.slice(1),
                    category: categoryName,
                    original: originalCount,
                    optimized: optimizedCount,
                    change,
                    changePercent,
                    trend: change > 0 ? 'up' : change < 0 ? 'down' : 'same',
                    weight: categoryData.weight,
                    score,
                    priority,
                    recommendation
                };

                if (originalCount > 0 || optimizedCount > 0) {
                    categoryKeywords.push(stat);
                    allStats.push(stat);
                }

                categoryOriginal += originalCount;
                categoryOptimized += optimizedCount;
            });

            if (categoryKeywords.length > 0) {
                categoryStats.push({
                    name: categoryName,
                    original: categoryOriginal,
                    optimized: categoryOptimized,
                    change: categoryOptimized - categoryOriginal,
                    weight: categoryData.weight,
                    score: categoryKeywords.reduce((sum, k) => sum + k.score, 0),
                    color: categoryData.color,
                    icon: categoryData.icon,
                    keywords: categoryKeywords.sort((a, b) => b.score - a.score)
                });
            }
        });

        return {
            keywords: allStats.sort((a, b) => b.score - a.score),
            categories: categoryStats.sort((a, b) => b.score - a.score)
        };
    }, [originalText, optimizedText]);

    // Advanced summary metrics
    const summaryMetrics = useMemo(() => {
        const totalOriginal = keywordAnalysis.keywords.reduce((sum, k) => sum + k.original, 0);
        const totalOptimized = keywordAnalysis.keywords.reduce((sum, k) => sum + k.optimized, 0);
        const totalScore = keywordAnalysis.keywords.reduce((sum, k) => sum + k.score, 0);
        const highPriorityKeywords = keywordAnalysis.keywords.filter(k => k.priority === 'high').length;
        const improvementCount = keywordAnalysis.keywords.filter(k => k.trend === 'up').length;
        const regressionCount = keywordAnalysis.keywords.filter(k => k.trend === 'down').length;

        const strengthScore = Math.min(100, (totalScore / keywordAnalysis.keywords.length) * 10);
        const improvementRate = totalOriginal > 0 ? ((totalOptimized - totalOriginal) / totalOriginal) * 100 : 0;

        let overallGrade = 'F';
        if (strengthScore >= 90) overallGrade = 'A+';
        else if (strengthScore >= 80) overallGrade = 'A';
        else if (strengthScore >= 70) overallGrade = 'B';
        else if (strengthScore >= 60) overallGrade = 'C';
        else if (strengthScore >= 50) overallGrade = 'D';

        return {
            totalOriginal,
            totalOptimized,
            totalChange: totalOptimized - totalOriginal,
            improvementRate,
            strengthScore,
            overallGrade,
            highPriorityKeywords,
            improvementCount,
            regressionCount,
            keywordDensity: totalOptimized / Math.max(optimizedText.split(' ').length, 1) * 100,
            categoriesAnalyzed: keywordAnalysis.categories.length
        };
    }, [keywordAnalysis, optimizedText]);

    // Animation effect
    useEffect(() => {
        const timer = setInterval(() => {
            setAnimationPhase(prev => (prev + 1) % 4);
        }, 2000);
        return () => clearInterval(timer);
    }, []);

    // Generate chart data based on view mode
    useEffect(() => {
        if (keywordAnalysis.keywords.length === 0) return;

        let categories: string[] = [];
        let originalData: number[] = [];
        let optimizedData: number[] = [];
        let scoreData: number[] = [];

        if (viewMode === 'categories') {
            categories = keywordAnalysis.categories.map(cat => cat.name.split(' & ')[0]);
            originalData = keywordAnalysis.categories.map(cat => cat.original);
            optimizedData = keywordAnalysis.categories.map(cat => cat.optimized);
            scoreData = keywordAnalysis.categories.map(cat => Math.round(cat.score));
        } else {
            const topKeywords = keywordAnalysis.keywords.slice(0, 15);
            categories = topKeywords.map(k => k.keyword);
            originalData = topKeywords.map(k => k.original);
            optimizedData = topKeywords.map(k => k.optimized);
            scoreData = topKeywords.map(k => Math.round(k.score));
        }

        const options: ApexOptions = {
            chart: {
                type: 'bar',
                height: 500,
                toolbar: {
                    show: true,
                    tools: {
                        download: true,
                        selection: true,
                        zoom: true,
                        zoomin: true,
                        zoomout: true,
                        pan: true,
                        reset: true
                    }
                },
                background: 'transparent',
                fontFamily: 'Inter, system-ui, sans-serif',
                animations: {
                    enabled: true,
                    easing: 'easeinout',
                    speed: 1200,
                    animateGradually: {
                        enabled: true,
                        delay: 150
                    },
                    dynamicAnimation: {
                        enabled: true,
                        speed: 350
                    }
                },
                dropShadow: {
                    enabled: true,
                    top: 3,
                    left: 2,
                    blur: 4,
                    opacity: 0.1
                }
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '75%',
                    endingShape: 'rounded',
                    borderRadius: 6,
                    dataLabels: {
                        position: 'top'
                    },
                    distributed: viewMode === 'categories'
                }
            },
            dataLabels: {
                enabled: true,
                offsetY: -25,
                style: {
                    fontSize: '11px',
                    fontWeight: 600,
                    colors: ['#374151']
                },
                formatter: function (val: any, opts: any) {
                    if (opts.seriesIndex === 2) return `${val}pts`;
                    return val.toString();
                }
            },
            stroke: {
                show: true,
                width: 2,
                colors: ['transparent']
            },
            xaxis: {
                categories,
                title: {
                    text: viewMode === 'categories' ? 'Keyword Categories' : 'Top Keywords',
                    style: {
                        fontSize: '14px',
                        fontWeight: 600,
                        color: '#374151'
                    }
                },
                labels: {
                    style: {
                        fontSize: '11px',
                        fontWeight: 500,
                        colors: '#6B7280'
                    },
                    rotate: -45,
                    maxHeight: 120
                }
            },
            yaxis: [{
                title: {
                    text: 'Keyword Count',
                    style: {
                        fontSize: '14px',
                        fontWeight: 600,
                        color: '#374151'
                    }
                },
                labels: {
                    style: {
                        fontSize: '12px',
                        colors: '#6B7280'
                    }
                }
            }, {
                opposite: true,
                title: {
                    text: 'Impact Score',
                    style: {
                        fontSize: '14px',
                        fontWeight: 600,
                        color: '#8B5CF6'
                    }
                },
                labels: {
                    style: {
                        fontSize: '12px',
                        colors: '#8B5CF6'
                    }
                }
            }],
            colors: viewMode === 'categories'
                ? keywordAnalysis.categories.map(cat => cat.color)
                : ['#EF4444', '#10B981', '#8B5CF6'],
            fill: {
                opacity: 0.85,
                type: 'gradient',
                gradient: {
                    shade: 'light',
                    type: 'vertical',
                    shadeIntensity: 0.3,
                    gradientToColors: viewMode === 'categories'
                        ? keywordAnalysis.categories.map(cat => cat.color + '80')
                        : ['#DC2626', '#059669', '#7C3AED'],
                    inverseColors: false,
                    opacityFrom: 0.85,
                    opacityTo: 0.65,
                }
            },
            tooltip: {
                shared: true,
                intersect: false,
                theme: 'light',
                style: {
                    fontSize: '12px'
                },
                y: {
                    formatter: (val, { seriesIndex, dataPointIndex }) => {
                        if (seriesIndex === 2) return `${val} impact points`;
                        const item = viewMode === 'categories'
                            ? keywordAnalysis.categories[dataPointIndex]
                            : keywordAnalysis.keywords[dataPointIndex];
                        const change = seriesIndex === 0 ? 0 : item.change || (item.optimized - item.original);
                        const changeText = change > 0 ? ` (+${change})` : change < 0 ? ` (${change})` : '';
                        return `${val} mentions${changeText}`;
                    }
                }
            },
            legend: {
                position: 'top',
                horizontalAlign: 'center',
                fontSize: '13px',
                fontWeight: 600,
                markers: {
                    width: 14,
                    height: 14,
                    radius: 7
                },
                itemMargin: {
                    horizontal: 20
                }
            },
            grid: {
                borderColor: '#E5E7EB',
                strokeDashArray: 2,
                xaxis: {
                    lines: {
                        show: false
                    }
                },
                yaxis: {
                    lines: {
                        show: true
                    }
                },
                padding: {
                    top: 20,
                    right: 20,
                    bottom: 20,
                    left: 20
                }
            },
            responsive: [{
                breakpoint: 768,
                options: {
                    plotOptions: {
                        bar: {
                            columnWidth: '90%'
                        }
                    },
                    xaxis: {
                        labels: {
                            rotate: -90
                        }
                    }
                }
            }]
        };

        const series = viewMode === 'categories'
            ? [{ name: 'Original Resume', data: originalData, type: 'bar', yAxisIndex: 0 },
            { name: 'Optimized Resume', data: optimizedData, type: 'bar', yAxisIndex: 0 },
            { name: 'Impact Score', data: scoreData, type: 'line', yAxisIndex: 1 }]
            : [{ name: 'Original Resume', data: originalData },
            { name: 'Optimized Resume', data: optimizedData },
            { name: 'Impact Score', data: scoreData, type: 'line', yAxisIndex: 1 }];

        setChartData({ series, options });
    }, [keywordAnalysis, viewMode]);

    const getGradeColor = (grade: string) => {
        switch (grade) {
            case 'A+': case 'A': return 'text-green-600 bg-green-50 border-green-200';
            case 'B': return 'text-blue-600 bg-blue-50 border-blue-200';
            case 'C': return 'text-yellow-600 bg-yellow-50 border-yellow-200';
            case 'D': return 'text-orange-600 bg-orange-50 border-orange-200';
            default: return 'text-red-600 bg-red-50 border-red-200';
        }
    };

    const getTrendIcon = (trend: 'up' | 'down' | 'same', priority: string) => {
        const baseClasses = "w-4 h-4";
        switch (trend) {
            case 'up':
                return <TrendingUp className={`${baseClasses} ${priority === 'high' ? 'text-green-600' : 'text-green-500'}`} />;
            case 'down':
                return <TrendingDown className={`${baseClasses} ${priority === 'high' ? 'text-red-600' : 'text-red-500'}`} />;
            default:
                return <Minus className={`${baseClasses} text-gray-400`} />;
        }
    };

    const getPriorityBadge = (priority: string) => {
        const badges = {
            high: <Badge className="bg-red-100 text-red-800 border-red-200">High Impact</Badge>,
            medium: <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">Medium</Badge>,
            low: <Badge className="bg-gray-100 text-gray-800 border-gray-200">Low</Badge>
        };
        return badges[priority as keyof typeof badges];
    };

    if (typeof window === 'undefined') {
        return null;
    }

    return (
        <div className="space-y-8">
            {/* Advanced Header with Controls */}
            <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 p-6 rounded-2xl border border-gray-200">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                    <div>
                        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                            AI-Powered Keyword Intelligence
                        </h1>
                        <p className="text-gray-600 mt-2 text-lg">
                            Advanced resume optimization analysis with predictive insights
                        </p>
                    </div>
                    <div className="flex items-center space-x-4">
                        <div className="flex bg-white rounded-lg p-1 shadow-sm border">
                            {['overview', 'categories', 'detailed'].map((mode) => (
                                <button
                                    key={mode}
                                    onClick={() => setViewMode(mode as any)}
                                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${viewMode === mode
                                            ? 'bg-blue-500 text-white shadow-sm'
                                            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                                        }`}
                                >
                                    {mode.charAt(0).toUpperCase() + mode.slice(1)}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Enhanced Metrics Dashboard */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-6">
                <Card className="border-l-4 border-l-emerald-500 bg-gradient-to-br from-emerald-50 to-green-50 shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-semibold text-emerald-600 uppercase tracking-wider">Overall Grade</p>
                                <p className={`text-4xl font-bold mt-2 px-3 py-1 rounded-lg border ${getGradeColor(summaryMetrics.overallGrade)}`}>
                                    {summaryMetrics.overallGrade}
                                </p>
                                <p className="text-xs text-gray-600 mt-2">
                                    {summaryMetrics.strengthScore.toFixed(1)}% strength score
                                </p>
                            </div>
                            <Award className="w-8 h-8 text-emerald-500" />
                        </div>
                    </CardContent>
                </Card>

                <Card className="border-l-4 border-l-blue-500 bg-gradient-to-br from-blue-50 to-indigo-50 shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider">Keywords</p>
                                <p className="text-3xl font-bold text-blue-900 mt-2">{summaryMetrics.totalOptimized}</p>
                                <p className="text-xs text-gray-600 mt-1">
                                    {summaryMetrics.totalChange >= 0 ? '+' : ''}{summaryMetrics.totalChange} optimized
                                </p>
                            </div>
                            <Target className="w-8 h-8 text-blue-500" />
                        </div>
                        <div className="mt-3 w-full bg-gray-200 rounded-full h-2">
                            <div
                                className="bg-blue-500 h-2 rounded-full transition-all duration-1000"
                                style={{ width: `${Math.min(100, summaryMetrics.keywordDensity * 20)}%` }}
                            />
                        </div>
                    </CardContent>
                </Card>

                <Card className="border-l-4 border-l-green-500 bg-gradient-to-br from-green-50 to-emerald-50 shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-semibold text-green-600 uppercase tracking-wider">Improvements</p>
                                <p className="text-3xl font-bold text-green-900 mt-2">{summaryMetrics.improvementCount}</p>
                                <p className="text-xs text-gray-600 mt-1">
                                    {summaryMetrics.improvementRate.toFixed(1)}% increase
                                </p>
                            </div>
                            <TrendingUp className="w-8 h-8 text-green-500" />
                        </div>
                    </CardContent>
                </Card>

                <Card className="border-l-4 border-l-purple-500 bg-gradient-to-br from-purple-50 to-violet-50 shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-semibold text-purple-600 uppercase tracking-wider">High Priority</p>
                                <p className="text-3xl font-bold text-purple-900 mt-2">{summaryMetrics.highPriorityKeywords}</p>
                                <p className="text-xs text-gray-600 mt-1">critical keywords</p>
                            </div>
                            <Zap className="w-8 h-8 text-purple-500" />
                        </div>
                    </CardContent>
                </Card>

                <Card className="border-l-4 border-l-orange-500 bg-gradient-to-br from-orange-50 to-amber-50 shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-semibold text-orange-600 uppercase tracking-wider">Categories</p>
                                <p className="text-3xl font-bold text-orange-900 mt-2">{summaryMetrics.categoriesAnalyzed}</p>
                                <p className="text-xs text-gray-600 mt-1">skill areas covered</p>
                            </div>
                            <PieChart className="w-8 h-8 text-orange-500" />
                        </div>
                    </CardContent>
                </Card>

                <Card className="border-l-4 border-l-red-500 bg-gradient-to-br from-red-50 to-pink-50 shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-semibold text-red-600 uppercase tracking-wider">Density</p>
                                <p className="text-3xl font-bold text-red-900 mt-2">{summaryMetrics.keywordDensity.toFixed(1)}%</p>
                                <p className="text-xs text-gray-600 mt-1">keyword density</p>
                            </div>
                            <Activity className="w-8 h-8 text-red-500" />
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Interactive Chart */}
            <Card className="shadow-2xl border-0 bg-gradient-to-br from-white via-gray-50 to-blue-50">
                <CardHeader className="pb-6 bg-gradient-to-r from-gray-50 to-blue-50 rounded-t-lg">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                        <div>
                            <CardTitle className="text-2xl font-bold text-gray-900 flex items-center space-x-2">
                                <BarChart3 className="w-6 h-6 text-blue-500" />
                                <span>
                                    {viewMode === 'categories' ? 'Category Performance' :
                                        viewMode === 'detailed' ? 'Detailed Keyword Analysis' :
                                            'Keyword Optimization Overview'}
                                </span>
                            </CardTitle>
                            <p className="text-gray-600 mt-2">
                                {viewMode === 'categories'
                                    ? 'Performance breakdown by skill categories with impact scoring'
                                    : 'Individual keyword performance with trend analysis and recommendations'
                                }
                            </p>
                        </div>
                        <div className="flex items-center space-x-3">
                            <Badge variant="outline" className="bg-white">
                                {keywordAnalysis.keywords.length} Keywords Analyzed
                            </Badge>
                            <button
                                onClick={() => setShowRecommendations(!showRecommendations)}
                                className="flex items-center space-x-2 px-3 py-2 bg-white rounded-lg border hover:bg-gray-50 transition-colors"
                            >
                                {showRecommendations ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                <span className="text-sm">Insights</span>
                            </button>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="p-8">
                    {keywordAnalysis.keywords.length > 0 ? (
                        <div className="space-y-6">
                            <Chart
                                options={chartData.options}
                                series={chartData.series}
                                type="bar"
                                height={500}
                                width="100%"
                            />

                            {/* Real-time Insights Panel */}
                            {showRecommendations && (
                                <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 p-6 rounded-xl border border-blue-200">
                                    <div className="flex items-center space-x-2 mb-4">
                                        <Brain className="w-5 h-5 text-blue-600" />
                                        <h3 className="text-lg font-semibold text-blue-900">AI-Powered Insights</h3>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                        {keywordAnalysis.keywords
                                            .filter(k => k.recommendation && k.priority !== 'low')
                                            .slice(0, 6)
                                            .map((keyword, index) => (
                                                <div key={index} className="bg-white p-4 rounded-lg border border-blue-100 shadow-sm">
                                                    <div className="flex items-center justify-between mb-2">
                                                        <span className="font-medium text-gray-900">{keyword.keyword}</span>
                                                        {getTrendIcon(keyword.trend, keyword.priority)}
                                                    </div>
                                                    <p className="text-sm text-gray-600 mb-2">{keyword.recommendation}</p>
                                                    <div className="flex items-center justify-between">
                                                        {getPriorityBadge(keyword.priority)}
                                                        <span className="text-xs text-gray-500">{keyword.score.toFixed(1)} pts</span>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className="flex items-center justify-center h-96 text-gray-500">
                            <div className="text-center">
                                <BarChart3 className="w-16 h-16 mx-auto mb-6 text-gray-300" />
                                <p className="text-xl font-medium mb-2">No keywords detected</p>
                                <p className="text-gray-400">Add professional keywords to see detailed analysis</p>
                            </div>
                        </div>
                    )}
                </CardContent>
            </Card>

            {/* Category Deep Dive */}
            {viewMode === 'categories' && keywordAnalysis.categories.length > 0 && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {keywordAnalysis.categories.slice(0, 4).map((category, index) => {
                        const IconComponent = category.icon;
                        return (
                            <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow border-0 overflow-hidden">
                                <CardHeader className="pb-4" style={{ backgroundColor: `${category.color}15` }}>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-3">
                                            <div
                                                className="p-3 rounded-lg"
                                                style={{ backgroundColor: `${category.color}20` }}
                                            >
                                                <IconComponent className="w-6 h-6" style={{ color: category.color }} />
                                            </div>
                                            <div>
                                                <CardTitle className="text-lg font-bold text-gray-900">
                                                    {category.name}
                                                </CardTitle>
                                                <p className="text-sm text-gray-600 mt-1">
                                                    {category.keywords.length} keywords analyzed
                                                </p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-2xl font-bold" style={{ color: category.color }}>
                                                {category.optimized}
                                            </p>
                                            <p className="text-xs text-gray-500">
                                                {category.change >= 0 ? '+' : ''}{category.change} change
                                            </p>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent className="p-6">
                                    <div className="space-y-3">
                                        {category.keywords.slice(0, 5).map((keyword, kidx) => (
                                            <div key={kidx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                                <div className="flex items-center space-x-3">
                                                    {getTrendIcon(keyword.trend, keyword.priority)}
                                                    <span className="font-medium text-gray-900">{keyword.keyword}</span>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <span className="text-sm text-gray-600">
                                                        {keyword.original} → {keyword.optimized}
                                                    </span>
                                                    <Badge
                                                        variant="outline"
                                                        className="text-xs"
                                                        style={{
                                                            borderColor: category.color,
                                                            color: category.color
                                                        }}
                                                    >
                                                        {keyword.score.toFixed(1)}
                                                    </Badge>
                                                </div>
                                            </div>
                                        ))}
                                        {category.keywords.length > 5 && (
                                            <button
                                                onClick={() => setSelectedCategory(selectedCategory === category.name ? null : category.name)}
                                                className="w-full py-2 text-sm text-gray-600 hover:text-gray-900 flex items-center justify-center space-x-1"
                                            >
                                                <span>Show {category.keywords.length - 5} more</span>
                                                {selectedCategory === category.name ?
                                                    <ChevronUp className="w-4 h-4" /> :
                                                    <ChevronDown className="w-4 h-4" />
                                                }
                                            </button>
                                        )}
                                    </div>

                                    {selectedCategory === category.name && (
                                        <div className="mt-4 pt-4 border-t space-y-2">
                                            {category.keywords.slice(5).map((keyword, kidx) => (
                                                <div key={kidx} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded">
                                                    <div className="flex items-center space-x-2">
                                                        {getTrendIcon(keyword.trend, keyword.priority)}
                                                        <span className="text-sm font-medium">{keyword.keyword}</span>
                                                    </div>
                                                    <div className="flex items-center space-x-2">
                                                        <span className="text-xs text-gray-500">
                                                            {keyword.original} → {keyword.optimized}
                                                        </span>
                                                        <Badge variant="outline" className="text-xs">
                                                            {keyword.score.toFixed(1)}
                                                        </Badge>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            )}

            {/* Advanced Analytics Dashboard */}
            {viewMode === 'detailed' && (
                <div className="space-y-8">
                    {/* Performance Heatmap */}
                    <Card className="shadow-lg">
                        <CardHeader>
                            <CardTitle className="flex items-center space-x-2">
                                <Activity className="w-5 h-5 text-purple-500" />
                                <span>Performance Heatmap</span>
                            </CardTitle>
                            <p className="text-sm text-gray-600">Visual representation of keyword performance across categories</p>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
                                {keywordAnalysis.keywords.slice(0, 24).map((keyword, index) => {
                                    const intensity = Math.min(1, keyword.score / 5);
                                    const bgColor = keyword.trend === 'up' ?
                                        `rgba(16, 185, 129, ${0.1 + intensity * 0.8})` :
                                        keyword.trend === 'down' ?
                                            `rgba(239, 68, 68, ${0.1 + intensity * 0.8})` :
                                            `rgba(107, 114, 128, ${0.1 + intensity * 0.4})`;

                                    return (
                                        <div
                                            key={index}
                                            className="p-3 rounded-lg border text-center transition-all hover:shadow-md cursor-pointer"
                                            style={{ backgroundColor: bgColor }}
                                        >
                                            <div className="text-xs font-medium text-gray-900 mb-1">
                                                {keyword.keyword}
                                            </div>
                                            <div className="text-lg font-bold">
                                                {keyword.optimized}
                                            </div>
                                            <div className="flex items-center justify-center mt-1">
                                                {getTrendIcon(keyword.trend, keyword.priority)}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Recommendations Engine */}
                    <Card className="shadow-lg border-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
                        <CardHeader>
                            <CardTitle className="flex items-center space-x-2 text-indigo-900">
                                <Brain className="w-5 h-5 text-indigo-600" />
                                <span>AI Recommendations Engine</span>
                            </CardTitle>
                            <p className="text-sm text-indigo-700">Personalized suggestions to maximize your resume impact</p>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-6">
                                {/* High Priority Recommendations */}
                                <div>
                                    <div className="flex items-center space-x-2 mb-4">
                                        <AlertTriangle className="w-5 h-5 text-red-500" />
                                        <h3 className="font-semibold text-red-900">Critical Improvements</h3>
                                    </div>
                                    <div className="grid gap-4">
                                        {keywordAnalysis.keywords
                                            .filter(k => k.priority === 'high' && k.trend !== 'up')
                                            .slice(0, 3)
                                            .map((keyword, index) => (
                                                <div key={index} className="bg-white p-4 rounded-lg border border-red-200 shadow-sm">
                                                    <div className="flex items-start justify-between">
                                                        <div className="flex-1">
                                                            <h4 className="font-medium text-gray-900 mb-1">{keyword.keyword}</h4>
                                                            <p className="text-sm text-gray-600 mb-2">{keyword.recommendation}</p>
                                                            <div className="flex items-center space-x-2">
                                                                <Badge className="bg-red-100 text-red-800">Critical</Badge>
                                                                <span className="text-xs text-gray-500">Category: {keyword.category}</span>
                                                            </div>
                                                        </div>
                                                        <div className="text-right ml-4">
                                                            <div className="text-2xl font-bold text-red-600">{keyword.optimized}</div>
                                                            <div className="text-xs text-gray-500">current usage</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>

                                {/* Success Stories */}
                                <div>
                                    <div className="flex items-center space-x-2 mb-4">
                                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                                        <h3 className="font-semibold text-green-900">Success Stories</h3>
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        {keywordAnalysis.keywords
                                            .filter(k => k.trend === 'up' && k.change > 1)
                                            .slice(0, 4)
                                            .map((keyword, index) => (
                                                <div key={index} className="bg-white p-4 rounded-lg border border-green-200 shadow-sm">
                                                    <div className="flex items-center justify-between mb-2">
                                                        <h4 className="font-medium text-gray-900">{keyword.keyword}</h4>
                                                        <TrendingUp className="w-4 h-4 text-green-500" />
                                                    </div>
                                                    <p className="text-sm text-gray-600 mb-2">
                                                        Increased by {keyword.change} mentions ({keyword.changePercent.toFixed(0)}% improvement)
                                                    </p>
                                                    <div className="flex items-center justify-between">
                                                        <Badge className="bg-green-100 text-green-800">Excellent</Badge>
                                                        <span className="text-sm font-medium text-green-600">
                                                            +{keyword.score.toFixed(1)} impact points
                                                        </span>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>

                                {/* Strategic Insights */}
                                <div>
                                    <div className="flex items-center space-x-2 mb-4">
                                        <Info className="w-5 h-5 text-blue-500" />
                                        <h3 className="font-semibold text-blue-900">Strategic Insights</h3>
                                    </div>
                                    <div className="bg-white p-6 rounded-lg border border-blue-200 shadow-sm">
                                        <div className="grid md:grid-cols-3 gap-6">
                                            <div className="text-center">
                                                <div className="text-3xl font-bold text-blue-600 mb-2">
                                                    {keywordAnalysis.categories
                                                        .reduce((max, cat) => cat.score > max.score ? cat : max, keywordAnalysis.categories[0])
                                                        ?.name.split(' ')[0] || 'N/A'}
                                                </div>
                                                <p className="text-sm text-gray-600">Strongest Category</p>
                                            </div>
                                            <div className="text-center">
                                                <div className="text-3xl font-bold text-orange-600 mb-2">
                                                    {keywordAnalysis.keywords.filter(k => k.trend === 'down').length}
                                                </div>
                                                <p className="text-sm text-gray-600">Keywords to Improve</p>
                                            </div>
                                            <div className="text-center">
                                                <div className="text-3xl font-bold text-purple-600 mb-2">
                                                    {Math.round(summaryMetrics.strengthScore)}%
                                                </div>
                                                <p className="text-sm text-gray-600">Optimization Score</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            )}

            {/* Action Center */}
            <Card className="shadow-lg bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
                <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                        <Zap className="w-5 h-5 text-yellow-400" />
                        <span>Action Center</span>
                    </CardTitle>
                    <p className="text-gray-300">Quick actions to improve your resume</p>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <button className="p-4 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors text-left">
                            <Download className="w-5 h-5 mb-2" />
                            <h3 className="font-medium mb-1">Export Report</h3>
                            <p className="text-xs text-blue-100">Download detailed analysis</p>
                        </button>
                        <button className="p-4 bg-green-600 hover:bg-green-700 rounded-lg transition-colors text-left">
                            <RefreshCw className="w-5 h-5 mb-2" />
                            <h3 className="font-medium mb-1">Re-analyze</h3>
                            <p className="text-xs text-green-100">Update with new content</p>
                        </button>
                        <button className="p-4 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors text-left">
                            <Star className="w-5 h-5 mb-2" />
                            <h3 className="font-medium mb-1">Get Suggestions</h3>
                            <p className="text-xs text-purple-100">AI-powered improvements</p>
                        </button>
                        <button className="p-4 bg-orange-600 hover:bg-orange-700 rounded-lg transition-colors text-left">
                            <Filter className="w-5 h-5 mb-2" />
                            <h3 className="font-medium mb-1">Filter Results</h3>
                            <p className="text-xs text-orange-100">Customize analysis</p>
                        </button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}