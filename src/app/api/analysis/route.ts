// // src/app/api/analysis/route.ts

// import { NextRequest, NextResponse } from 'next/server';

// interface Experience {
//     title?: string;
//     company?: string;
//     period?: string;
//     achievements?: string[];
// }

// interface ResumeData {
//     summary?: string;
//     experience?: Experience[];
//     skills?: { [key: string]: string[] } | string[];
//     projects?: any[];
//     education?: any[];
//     personalInfo?: any;
// }

// interface AnalysisRequest {
//     resumeData: ResumeData;
//     targetRole: string;
// }

// // Enhanced role requirements with more comprehensive keyword sets
// const mockRoleRequirements: { [key: string]: any } = {
//     'Software Engineer': {
//         keywords: [
//             // Core Programming
//             'javascript', 'typescript', 'python', 'java', 'react', 'node.js', 'angular', 'vue.js',
//             // Backend & Database
//             'sql', 'postgresql', 'mongodb', 'redis', 'graphql', 'rest api', 'microservices',
//             // Cloud & DevOps
//             'aws', 'azure', 'gcp', 'docker', 'kubernetes', 'ci/cd', 'jenkins', 'git',
//             // Development Practices
//             'agile', 'scrum', 'tdd', 'code review', 'debugging', 'performance optimization',
//             // Soft Skills
//             'problem-solving', 'teamwork', 'communication', 'leadership'
//         ],
//         competitorData: {
//             averageExperience: '3.2 years',
//             commonSkills: ['React.js', 'Node.js', 'Python', 'AWS', 'Docker'],
//             standoutFeatures: ['Full-stack expertise', 'CI/CD implementation', 'System design experience'],
//             suggestions: [
//                 'Highlight your unique combination of frontend and backend skills',
//                 'Emphasize experience with modern development practices',
//                 'Showcase specific performance improvements you\'ve achieved'
//             ]
//         }
//     },
//     'Frontend Developer': {
//         keywords: [
//             // Core Frontend
//             'html', 'css', 'javascript', 'typescript', 'react', 'vue.js', 'angular', 'svelte',
//             // Styling & Design
//             'tailwind', 'sass', 'styled-components', 'css-in-js', 'responsive design',
//             // Tools & Build
//             'webpack', 'vite', 'babel', 'npm', 'yarn', 'figma', 'adobe xd',
//             // Performance & Testing
//             'performance optimization', 'accessibility', 'jest', 'cypress', 'testing library',
//             // Soft Skills
//             'ui/ux collaboration', 'cross-browser compatibility', 'mobile-first'
//         ],
//         competitorData: {
//             averageExperience: '2.8 years',
//             commonSkills: ['React', 'TypeScript', 'CSS-in-JS', 'Webpack', 'Figma'],
//             standoutFeatures: ['Design System experience', 'Performance optimization'],
//             suggestions: [
//                 'Showcase your UI/UX collaboration skills',
//                 'Highlight specific performance improvements',
//                 'Demonstrate accessibility expertise'
//             ]
//         }
//     },
//     'Backend Developer': {
//         keywords: [
//             // Languages & Frameworks
//             'python', 'java', 'node.js', 'go', 'rust', 'spring', 'express', 'fastapi', 'django',
//             // Databases
//             'sql', 'postgresql', 'mysql', 'mongodb', 'redis', 'elasticsearch',
//             // Architecture & APIs
//             'microservices', 'rest api', 'graphql', 'grpc', 'message queues', 'kafka',
//             // Cloud & Infrastructure
//             'aws', 'azure', 'gcp', 'docker', 'kubernetes', 'terraform', 'serverless',
//             // Practices
//             'system design', 'scalability', 'security', 'monitoring', 'logging'
//         ],
//         competitorData: {
//             averageExperience: '3.5 years',
//             commonSkills: ['Python', 'PostgreSQL', 'Docker', 'AWS', 'REST APIs'],
//             standoutFeatures: ['Microservices architecture', 'High-scale systems'],
//             suggestions: [
//                 'Emphasize system design and scalability experience',
//                 'Highlight specific performance and reliability improvements',
//                 'Showcase experience with distributed systems'
//             ]
//         }
//     },
//     'DevOps Engineer': {
//         keywords: [
//             // Cloud Platforms
//             'aws', 'azure', 'gcp', 'cloud architecture', 'serverless', 'lambda',
//             // Containerization & Orchestration
//             'docker', 'kubernetes', 'helm', 'container orchestration',
//             // CI/CD & Automation
//             'jenkins', 'gitlab ci', 'github actions', 'terraform', 'ansible', 'puppet',
//             // Monitoring & Logging
//             'prometheus', 'grafana', 'elk stack', 'datadog', 'new relic',
//             // Infrastructure
//             'infrastructure as code', 'networking', 'security', 'compliance'
//         ],
//         competitorData: {
//             averageExperience: '4.1 years',
//             commonSkills: ['Docker', 'Kubernetes', 'AWS', 'Terraform', 'Jenkins'],
//             standoutFeatures: ['Infrastructure automation', 'Multi-cloud experience'],
//             suggestions: [
//                 'Highlight infrastructure automation achievements',
//                 'Showcase cost optimization results',
//                 'Demonstrate security and compliance expertise'
//             ]
//         }
//     },
//     'Data Scientist': {
//         keywords: [
//             // Programming & Tools
//             'python', 'r', 'sql', 'jupyter', 'pandas', 'numpy', 'scikit-learn', 'tensorflow', 'pytorch',
//             // Statistics & ML
//             'machine learning', 'deep learning', 'statistics', 'regression', 'classification', 'clustering',
//             // Visualization
//             'matplotlib', 'seaborn', 'plotly', 'tableau', 'power bi', 'data visualization',
//             // Big Data
//             'spark', 'hadoop', 'kafka', 'airflow', 'etl', 'data pipeline',
//             // Business Skills
//             'business intelligence', 'a/b testing', 'experimental design'
//         ],
//         competitorData: {
//             averageExperience: '2.9 years',
//             commonSkills: ['Python', 'SQL', 'Machine Learning', 'Pandas', 'Scikit-learn'],
//             standoutFeatures: ['End-to-end ML pipeline', 'Business impact measurement'],
//             suggestions: [
//                 'Quantify business impact of your data science projects',
//                 'Highlight experience with production ML systems',
//                 'Showcase cross-functional collaboration skills'
//             ]
//         }
//     },
//     'Product Manager': {
//         keywords: [
//             // Product Strategy
//             'product strategy', 'roadmap', 'user research', 'market analysis', 'competitive analysis',
//             // Analytics & Metrics
//             'kpis', 'metrics', 'analytics', 'a/b testing', 'user behavior', 'conversion optimization',
//             // Methodologies
//             'agile', 'scrum', 'lean startup', 'design thinking', 'user-centered design',
//             // Tools
//             'jira', 'confluence', 'figma', 'miro', 'amplitude', 'mixpanel',
//             // Business Skills
//             'stakeholder management', 'cross-functional leadership', 'go-to-market'
//         ],
//         competitorData: {
//             averageExperience: '3.7 years',
//             commonSkills: ['Product Strategy', 'Agile', 'Analytics', 'User Research', 'Roadmapping'],
//             standoutFeatures: ['Cross-functional leadership', 'Data-driven decisions'],
//             suggestions: [
//                 'Highlight successful product launches and their impact',
//                 'Showcase data-driven decision making',
//                 'Demonstrate stakeholder management skills'
//             ]
//         }
//     }
// };

// // Enhanced analysis functions
// const analyzeKeywords = (resumeData: ResumeData, targetRole: string) => {
//     const requirements = mockRoleRequirements[targetRole] || mockRoleRequirements['Software Engineer'];

//     // Extract text from resume
//     const resumeText = [
//         resumeData.summary || '',
//         ...(resumeData.experience?.flatMap((exp: any) => [
//             exp.title || '',
//             exp.company || '',
//             ...(exp.achievements || [])
//         ]) || []),
//         ...(resumeData.projects?.flatMap((proj: any) => [
//             proj.title || '',
//             proj.description || '',
//             ...(proj.technologies || [])
//         ]) || []),
//         ...Object.values(resumeData.skills || {}).flat()
//     ].join(' ').toLowerCase();

//     const present: string[] = [];
//     const missing: string[] = [];
//     const suggested: string[] = [];

//     requirements.keywords.forEach((keyword: string) => {
//         const keywordLower = keyword.toLowerCase();
//         if (resumeText.includes(keywordLower)) {
//             present.push(keyword);
//         } else {
//             missing.push(keyword);
//         }
//     });

//     // Add suggested keywords based on what's missing and role-specific recommendations
//     const roleSpecificSuggestions: { [key: string]: string[] } = {
//         'Software Engineer': ['system design', 'code optimization', 'technical leadership'],
//         'Frontend Developer': ['web vitals', 'progressive web app', 'component library'],
//         'Backend Developer': ['database optimization', 'caching strategies', 'load balancing'],
//         'DevOps Engineer': ['cost optimization', 'disaster recovery', 'security automation'],
//         'Data Scientist': ['feature engineering', 'model deployment', 'data governance'],
//         'Product Manager': ['customer interviews', 'market sizing', 'feature prioritization']
//     };

//     suggested.push(...(roleSpecificSuggestions[targetRole] || []));

//     const keywordScore = Math.round((present.length / requirements.keywords.length) * 100);

//     return {
//         present,
//         missing: missing.slice(0, 10), // Limit to top 10 missing keywords
//         suggested: suggested.slice(0, 8), // Limit to top 8 suggestions
//         score: keywordScore
//     };
// };

// const analyzeATS = (resumeData: ResumeData, keywordAnalysis: any) => {
//     let atsScore = 100;
//     const issues = [];
//     const improvements = [];

//     // Summary analysis
//     const summaryLength = resumeData.summary?.length || 0;
//     if (summaryLength < 50) {
//         issues.push({
//             type: 'warning' as const,
//             message: 'Professional summary is too short. Aim for 3-4 sentences (50-150 words).',
//             section: 'summary'
//         });
//         improvements.push('Expand your summary to better showcase your key qualifications and career highlights.');
//         atsScore -= 15;
//     } else if (summaryLength > 200) {
//         issues.push({
//             type: 'info' as const,
//             message: 'Professional summary might be too long. Consider condensing to key highlights.',
//             section: 'summary'
//         });
//         atsScore -= 5;
//     }

//     // Experience analysis
//     const hasQuantifiedAchievements = resumeData.experience?.some((exp: any) => 
//         exp.achievements?.some((ach: string) => /\d/.test(ach))
//     );

//     if (!hasQuantifiedAchievements) {
//         issues.push({
//             type: 'warning' as const,
//             message: 'Experience lacks quantified results. Add specific metrics, percentages, or numbers.',
//             section: 'experience'
//         });
//         improvements.push('Add 3-5 quantified achievements showing your impact (e.g., "improved performance by 25%").');
//         atsScore -= 20;
//     }

//     // Keywords analysis
//     if (keywordAnalysis.missing.length > 8) {
//         issues.push({
//             type: 'warning' as const,
//             message: `Missing ${keywordAnalysis.missing.length} critical keywords for your target role.`,
//             section: 'skills'
//         });
//         improvements.push('Integrate missing keywords naturally into your experience, skills, and summary sections.');
//         atsScore -= 15;
//     } else if (keywordAnalysis.missing.length > 4) {
//         issues.push({
//             type: 'info' as const,
//             message: `Consider adding ${keywordAnalysis.missing.length} more relevant keywords.`,
//             section: 'skills'
//         });
//         atsScore -= 8;
//     }

//     // Skills section analysis
//     const skillsCount = Array.isArray(resumeData.skills) 
//         ? resumeData.skills.length 
//         : Object.values(resumeData.skills || {}).flat().length;

//     if (skillsCount < 8) {
//         issues.push({
//             type: 'info' as const,
//             message: 'Skills section could be more comprehensive. Consider adding more relevant technologies.',
//             section: 'skills'
//         });
//         improvements.push('Add 5-10 more relevant technical and soft skills to improve keyword coverage.');
//         atsScore -= 10;
//     }

//     // Experience count
//     const experienceCount = resumeData.experience?.length || 0;
//     if (experienceCount === 0) {
//         issues.push({
//             type: 'warning' as const,
//             message: 'No work experience found. Add relevant professional experience.',
//             section: 'experience'
//         });
//         atsScore -= 25;
//     }

//     return {
//         score: Math.max(0, atsScore),
//         issues,
//         improvements
//     };
// };

// export async function POST(request: NextRequest) {
//     try {
//         const body: AnalysisRequest = await request.json();
//         const { resumeData, targetRole } = body;

//         if (!resumeData || !targetRole) {
//             return NextResponse.json(
//                 { error: 'Resume data and target role are required' }, 
//                 { status: 400 }
//             );
//         }

//         // Simulate processing time for realistic experience
//         await new Promise(resolve => setTimeout(resolve, 800));

//         // Perform keyword analysis
//         const keywordAnalysis = analyzeKeywords(resumeData, targetRole);

//         // Perform ATS analysis
//         const atsAnalysis = analyzeATS(resumeData, keywordAnalysis);

//         // Get competitor analysis
//         const requirements = mockRoleRequirements[targetRole] || mockRoleRequirements['Software Engineer'];
//         const competitorAnalysis = requirements.competitorData;

//         return NextResponse.json({
//             keywordAnalysis,
//             atsAnalysis,
//             competitorAnalysis,
//         }, { status: 200 });

//     } catch (error: any) {
//         console.error('[API ANALYSIS ERROR]', error);
//         return NextResponse.json(
//             { error: 'An error occurred during analysis' }, 
//             { status: 500 }
//         );
//     }
// }


// src/app/api/analysis/route.ts

import { NextRequest, NextResponse } from 'next/server';

interface Experience {
    title?: string;
    company?: string;
    period?: string;
    achievements?: string[];
}

interface ResumeData {
    summary?: string;
    experience?: Experience[];
    skills?: { [key: string]: string[] } | string[];
    projects?: any[];
    education?: any[];
    personalInfo?: any;
}

interface AnalysisRequest {
    resumeData: ResumeData;
    targetRole: string;
}

// Enhanced role requirements with more comprehensive keyword sets
const mockRoleRequirements: { [key: string]: any } = {
    'Software Engineer': {
        keywords: [
            // Core Programming
            'javascript', 'typescript', 'python', 'java', 'react', 'node.js', 'angular', 'vue.js',
            // Backend & Database
            'sql', 'postgresql', 'mongodb', 'redis', 'graphql', 'rest api', 'microservices',
            // Cloud & DevOps
            'aws', 'azure', 'gcp', 'docker', 'kubernetes', 'ci/cd', 'jenkins', 'git',
            // Development Practices
            'agile', 'scrum', 'tdd', 'code review', 'debugging', 'performance optimization',
            // Soft Skills
            'problem-solving', 'teamwork', 'communication', 'leadership'
        ],
        competitorData: {
            averageExperience: '3.2 years',
            commonSkills: ['React.js', 'Node.js', 'Python', 'AWS', 'Docker'],
            standoutFeatures: ['Full-stack expertise', 'CI/CD implementation', 'System design experience'],
            suggestions: [
                'Highlight your unique combination of frontend and backend skills',
                'Emphasize experience with modern development practices',
                'Showcase specific performance improvements you\'ve achieved'
            ]
        }
    },
    'Frontend Developer': {
        keywords: [
            'html', 'css', 'javascript', 'typescript', 'react', 'vue.js', 'angular', 'svelte',
            'tailwind', 'sass', 'styled-components', 'css-in-js', 'responsive design',
            'webpack', 'vite', 'babel', 'npm', 'yarn', 'figma', 'adobe xd',
            'performance optimization', 'accessibility', 'jest', 'cypress', 'testing library',
            'ui/ux collaboration', 'cross-browser compatibility', 'mobile-first'
        ],
        competitorData: {
            averageExperience: '2.8 years',
            commonSkills: ['React', 'TypeScript', 'CSS-in-JS', 'Webpack', 'Figma'],
            standoutFeatures: ['Design System experience', 'Performance optimization'],
            suggestions: [
                'Showcase your UI/UX collaboration skills',
                'Highlight specific performance improvements',
                'Demonstrate accessibility expertise'
            ]
        }
    },
    'Backend Developer': {
        keywords: [
            'python', 'java', 'node.js', 'go', 'rust', 'spring', 'express', 'fastapi', 'django',
            'sql', 'postgresql', 'mysql', 'mongodb', 'redis', 'elasticsearch',
            'microservices', 'rest api', 'graphql', 'grpc', 'message queues', 'kafka',
            'aws', 'azure', 'gcp', 'docker', 'kubernetes', 'terraform', 'serverless',
            'system design', 'scalability', 'security', 'monitoring', 'logging'
        ],
        competitorData: {
            averageExperience: '3.5 years',
            commonSkills: ['Python', 'PostgreSQL', 'Docker', 'AWS', 'REST APIs'],
            standoutFeatures: ['Microservices architecture', 'High-scale systems'],
            suggestions: [
                'Emphasize system design and scalability experience',
                'Highlight specific performance and reliability improvements',
                'Showcase experience with distributed systems'
            ]
        }
    },
    'DevOps Engineer': {
        keywords: [
            'aws', 'azure', 'gcp', 'cloud architecture', 'serverless', 'lambda',
            'docker', 'kubernetes', 'helm', 'container orchestration',
            'jenkins', 'gitlab ci', 'github actions', 'terraform', 'ansible', 'puppet',
            'prometheus', 'grafana', 'elk stack', 'datadog', 'new relic',
            'infrastructure as code', 'networking', 'security', 'compliance'
        ],
        competitorData: {
            averageExperience: '4.1 years',
            commonSkills: ['Docker', 'Kubernetes', 'AWS', 'Terraform', 'Jenkins'],
            standoutFeatures: ['Infrastructure automation', 'Multi-cloud experience'],
            suggestions: [
                'Highlight infrastructure automation achievements',
                'Showcase cost optimization results',
                'Demonstrate security and compliance expertise'
            ]
        }
    },
    'Data Scientist': {
        keywords: [
            'python', 'r', 'sql', 'jupyter', 'pandas', 'numpy', 'scikit-learn', 'tensorflow', 'pytorch',
            'machine learning', 'deep learning', 'statistics', 'regression', 'classification', 'clustering',
            'matplotlib', 'seaborn', 'plotly', 'tableau', 'power bi', 'data visualization',
            'spark', 'hadoop', 'kafka', 'airflow', 'etl', 'data pipeline',
            'business intelligence', 'a/b testing', 'experimental design'
        ],
        competitorData: {
            averageExperience: '2.9 years',
            commonSkills: ['Python', 'SQL', 'Machine Learning', 'Pandas', 'Scikit-learn'],
            standoutFeatures: ['End-to-end ML pipeline', 'Business impact measurement'],
            suggestions: [
                'Quantify business impact of your data science projects',
                'Highlight experience with production ML systems',
                'Showcase cross-functional collaboration skills'
            ]
        }
    },
    'Product Manager': {
        keywords: [
            'product strategy', 'roadmap', 'user research', 'market analysis', 'competitive analysis',
            'kpis', 'metrics', 'analytics', 'a/b testing', 'user behavior', 'conversion optimization',
            'agile', 'scrum', 'lean startup', 'design thinking', 'user-centered design',
            'jira', 'confluence', 'figma', 'miro', 'amplitude', 'mixpanel',
            'stakeholder management', 'cross-functional leadership', 'go-to-market'
        ],
        competitorData: {
            averageExperience: '3.7 years',
            commonSkills: ['Product Strategy', 'Agile', 'Analytics', 'User Research', 'Roadmapping'],
            standoutFeatures: ['Cross-functional leadership', 'Data-driven decisions'],
            suggestions: [
                'Highlight successful product launches and their impact',
                'Showcase data-driven decision making',
                'Demonstrate stakeholder management skills'
            ]
        }
    }
};

// Enhanced analysis functions that work with REAL resume data
const analyzeKeywords = (resumeData: ResumeData, targetRole: string) => {
    const requirements = mockRoleRequirements[targetRole] || mockRoleRequirements['Software Engineer'];


    // Extract text from resume - IMPROVED to handle all data structures
    const resumeText = [
        resumeData.summary || '',
        ...(resumeData.experience?.flatMap((exp: any) => [
            exp.title || '',
            exp.company || '',
            ...(exp.achievements || [])
        ]) || []),
        ...(resumeData.projects?.flatMap((proj: any) => [
            proj.title || '',
            ...(Array.isArray(proj.description) ? proj.description : [proj.description || '']),
            ...(proj.technologies || [])
        ]) || []),
        // Handle both array and object skills formats
        ...(Array.isArray(resumeData.skills)
            ? resumeData.skills
            : Object.values(resumeData.skills || {}).flat()
        )
    ].join(' ').toLowerCase();



    const present: string[] = [];
    const missing: string[] = [];
    const suggested: string[] = [];

    requirements.keywords.forEach((keyword: string) => {
        const keywordLower = keyword.toLowerCase();
        const keywordVariations = [
            keywordLower,
            keywordLower.replace(/[.\-]/g, ''), // Remove dots and hyphens
            keywordLower.replace(/\s+/g, ''), // Remove spaces
        ];

        const isPresent = keywordVariations.some(variation =>
            resumeText.includes(variation)
        );

        if (isPresent) {
            present.push(keyword);
        } else {
            missing.push(keyword);
        }
    });

    // Add suggested keywords based on what's missing and role-specific recommendations
    const roleSpecificSuggestions: { [key: string]: string[] } = {
        'Software Engineer': ['system design', 'code optimization', 'technical leadership'],
        'Frontend Developer': ['web vitals', 'progressive web app', 'component library'],
        'Backend Developer': ['database optimization', 'caching strategies', 'load balancing'],
        'DevOps Engineer': ['cost optimization', 'disaster recovery', 'security automation'],
        'Data Scientist': ['feature engineering', 'model deployment', 'data governance'],
        'Product Manager': ['customer interviews', 'market sizing', 'feature prioritization']
    };

    suggested.push(...(roleSpecificSuggestions[targetRole] || []));

    const keywordScore = Math.round((present.length / requirements.keywords.length) * 100);


    return {
        present,
        missing: missing.slice(0, 10), // Limit to top 10 missing keywords
        suggested: suggested.slice(0, 8), // Limit to top 8 suggestions
        score: keywordScore
    };
};

const analyzeATS = (resumeData: ResumeData, keywordAnalysis: any) => {


    let atsScore = 100;
    const issues = [];
    const improvements = [];

    // Summary analysis - IMPROVED to handle optimized summaries
    const summaryLength = resumeData.summary?.length || 0;
    const summaryWordCount = resumeData.summary?.split(/\s+/).length || 0;


    if (summaryLength < 50) {
        issues.push({
            type: 'warning' as const,
            message: 'Professional summary is too short. Aim for 3-4 sentences (50-150 words).',
            section: 'summary'
        });
        improvements.push('Expand your summary to better showcase your key qualifications and career highlights.');
        atsScore -= 15;
    } else if (summaryLength > 300) {
        issues.push({
            type: 'info' as const,
            message: 'Professional summary might be too long. Consider condensing to key highlights.',
            section: 'summary'
        });
        atsScore -= 5;
    }

    // Check for strong summary indicators (common in optimized summaries)
    const hasStrongOpeners = /^(Results-driven|Experienced|Skilled|Accomplished|Proven)/i.test(resumeData.summary || '');
    const hasQuantifiedMetrics = /\d+%|\d+\+|\d+ years/i.test(resumeData.summary || '');

    if (hasStrongOpeners) atsScore += 5;
    if (hasQuantifiedMetrics) atsScore += 10;

    // Experience analysis - IMPROVED to detect optimization patterns
    const hasQuantifiedAchievements = resumeData.experience?.some((exp: any) =>
        exp.achievements?.some((ach: string) => /\d/.test(ach))
    );

    // Count total quantified achievements
    const quantifiedCount = resumeData.experience?.reduce((count, exp: any) =>
        count + (exp.achievements?.filter((ach: string) => /\d/.test(ach)).length || 0), 0
    ) || 0;


    if (!hasQuantifiedAchievements) {
        issues.push({
            type: 'warning' as const,
            message: 'Experience lacks quantified results. Add specific metrics, percentages, or numbers.',
            section: 'experience'
        });
        improvements.push('Add 3-5 quantified achievements showing your impact (e.g., "improved performance by 25%").');
        atsScore -= 20;
    } else if (quantifiedCount >= 5) {
        // Bonus for well-optimized resumes
        atsScore += 10;
    }

    // Check for optimization patterns (common in AI-optimized resumes)
    const optimizationPatterns = [
        /improving.*by \d+%/i,
        /reducing.*by \d+%/i,
        /increasing.*by \d+%/i,
        /boosting.*by \d+%/i,
        /enhancing.*by \d+%/i
    ];

    const hasOptimizationPatterns = resumeData.experience?.some((exp: any) =>
        exp.achievements?.some((ach: string) =>
            optimizationPatterns.some(pattern => pattern.test(ach))
        )
    );

    if (hasOptimizationPatterns) {
        console.log('Detected optimization patterns - boosting ATS score');
        atsScore += 15; // Bonus for optimized achievements
    }

    // Keywords analysis
    if (keywordAnalysis.missing.length > 8) {
        issues.push({
            type: 'warning' as const,
            message: `Missing ${keywordAnalysis.missing.length} critical keywords for your target role.`,
            section: 'skills'
        });
        improvements.push('Integrate missing keywords naturally into your experience, skills, and summary sections.');
        atsScore -= 15;
    } else if (keywordAnalysis.missing.length > 4) {
        issues.push({
            type: 'info' as const,
            message: `Consider adding ${keywordAnalysis.missing.length} more relevant keywords.`,
            section: 'skills'
        });
        atsScore -= 8;
    } else if (keywordAnalysis.missing.length <= 2) {
        // Bonus for comprehensive keyword coverage
        atsScore += 10;
    }

    // Skills section analysis
    const skillsCount = Array.isArray(resumeData.skills)
        ? resumeData.skills.length
        : Object.values(resumeData.skills || {}).flat().length;

    console.log('Total skills count:', skillsCount);

    if (skillsCount < 8) {
        issues.push({
            type: 'info' as const,
            message: 'Skills section could be more comprehensive. Consider adding more relevant technologies.',
            section: 'skills'
        });
        improvements.push('Add 5-10 more relevant technical and soft skills to improve keyword coverage.');
        atsScore -= 10;
    } else if (skillsCount >= 15) {
        // Bonus for comprehensive skills
        atsScore += 5;
    }

    // Experience count
    const experienceCount = resumeData.experience?.length || 0;
    if (experienceCount === 0) {
        issues.push({
            type: 'warning' as const,
            message: 'No work experience found. Add relevant professional experience.',
            section: 'experience'
        });
        atsScore -= 25;
    }

    // Cap the score at 100
    atsScore = Math.min(100, atsScore);

    console.log('Final ATS score:', atsScore);

    return {
        score: Math.max(0, atsScore),
        issues,
        improvements
    };
};

export async function POST(request: NextRequest) {
    try {
        const body: AnalysisRequest = await request.json();
        const { resumeData, targetRole } = body;


        if (!resumeData || !targetRole) {
            return NextResponse.json(
                { error: 'Resume data and target role are required' },
                { status: 400 }
            );
        }

        // Simulate processing time for realistic experience
        await new Promise(resolve => setTimeout(resolve, 800));

        // Perform keyword analysis
        const keywordAnalysis = analyzeKeywords(resumeData, targetRole);

        // Perform ATS analysis
        const atsAnalysis = analyzeATS(resumeData, keywordAnalysis);

        // Get competitor analysis
        const requirements = mockRoleRequirements[targetRole] || mockRoleRequirements['Software Engineer'];
        const competitorAnalysis = requirements.competitorData;

        return NextResponse.json({
            keywordAnalysis,
            atsAnalysis,
            competitorAnalysis,
        }, { status: 200 });

    } catch (error: any) {
        console.error('[API ANALYSIS ERROR]', error);
        return NextResponse.json(
            { error: 'An error occurred during analysis' },
            { status: 500 }
        );
    }
}