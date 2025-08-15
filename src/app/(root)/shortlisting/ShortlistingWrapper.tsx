
// 'use client'

// import React, { useState, useCallback, useMemo } from 'react'
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
// import { Button } from '@/components/ui/button'
// import { Input } from '@/components/ui/input'
// import { Label } from '@/components/ui/label'
// import { Textarea } from '@/components/ui/textarea'
// import { Progress } from '@/components/ui/progress'
// import { Badge } from '@/components/ui/badge'
// import { Alert, AlertDescription } from '@/components/ui/alert'
// import { Separator } from '@/components/ui/separator'
// import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from '@/components/ui/command'
// import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
// import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
// import {
//     Upload,
//     FileText,
//     CheckCircle,
//     XCircle,
//     AlertCircle,
//     User,
//     Briefcase,
//     GraduationCap,
//     Award,
//     Code,
//     Mail,
//     Phone,
//     MapPin,
//     Calendar,
//     Star,
//     TrendingUp,
//     Download,
//     Search,
//     ChevronDown,
//     Check,
//     BarChart3,
//     PieChart,
//     Target,
//     Zap,
//     Clock,
//     Shield,
//     Sparkles
// } from 'lucide-react'
// import { useDropzone } from 'react-dropzone'
// import dynamic from 'next/dynamic'

// const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

// interface ResumeData {
//     personalInfo: {
//         name: string
//         email: string
//         phone: string
//         location: string
//     }
//     summary: string
//     experience: Array<{
//         title: string
//         company: string
//         duration: string
//         description: string
//         yearsOfExperience: number
//     }>
//     education: Array<{
//         degree: string
//         institution: string
//         year: string
//         gpa?: string
//     }>
//     skills: Array<{
//         name: string
//         level: number
//         category: string
//     }>
//     certifications: string[]
//     projects?: Array<{
//         name: string
//         description: string
//         technologies: string[]
//     }>
// }

// interface AnalysisResult {
//     overallScore: number
//     matchPercentage: number
//     strengths: string[]
//     improvements: string[]
//     keywordMatches: string[]
//     missingKeywords: string[]
//     recommendation: 'STRONG_FIT' | 'GOOD_FIT' | 'MODERATE_FIT' | 'POOR_FIT'
//     experienceScore: number
//     skillsScore: number
//     educationScore: number
//     certificationsScore: number
//     detailedAnalysis: {
//         technicalSkills: number
//         softSkills: number
//         domainExpertise: number
//         leadership: number
//     }
// }

// const jobRoles = [
//     ...new Set([
//         'Software Engineer', 'Frontend Developer', 'Backend Developer', 'Full Stack Developer',
//         'Data Scientist', 'Data Analyst', 'Machine Learning Engineer', 'AI Engineer',
//         'Product Manager', 'Project Manager', 'Scrum Master', 'Product Owner',
//         'UI/UX Designer', 'Graphic Designer', 'Web Designer', 'Product Designer',
//         'DevOps Engineer', 'Cloud Engineer', 'Systems Administrator', 'Network Engineer',
//         'Mobile Developer', 'iOS Developer', 'Android Developer', 'React Native Developer',
//         'QA Engineer', 'Test Automation Engineer', 'QA Analyst', 'Performance Tester',
//         'Business Analyst', 'Systems Analyst', 'Financial Analyst',
//         'Marketing Manager', 'Digital Marketing Specialist', 'Content Marketing Manager', 'SEO Specialist',
//         'Sales Representative', 'Sales Manager', 'Account Manager', 'Business Development Manager',
//         'HR Manager', 'HR Generalist', 'Recruiter', 'Talent Acquisition Specialist',
//         'Accountant', 'Finance Manager', 'Investment Analyst',
//         'Cybersecurity Analyst', 'Security Engineer', 'Information Security Specialist',
//         'Database Administrator', 'Database Developer', 'Data Engineer',
//         'Technical Writer', 'Documentation Specialist', 'Content Writer'
//     ])
// ]

// const escapeRegExp = (string: string) => {
//     return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
// };

// const Page = () => {
//     const [selectedRole, setSelectedRole] = useState<string>('')
//     const [jobDescription, setJobDescription] = useState<string>('')
//     const [uploadedFile, setUploadedFile] = useState<File | null>(null)
//     const [isAnalyzing, setIsAnalyzing] = useState(false)
//     const [resumeData, setResumeData] = useState<ResumeData | null>(null)
//     const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null)
//     const [error, setError] = useState<string>('')
//     const [open, setOpen] = useState(false)
//     const [searchValue, setSearchValue] = useState('')

//     const filteredRoles = useMemo(() => {
//         return jobRoles.filter(role =>
//             role.toLowerCase().includes(searchValue.toLowerCase())
//         )
//     }, [searchValue])

//     const onDrop = useCallback((acceptedFiles: File[]) => {
//         const file = acceptedFiles[0]
//         if (file) {
//             setUploadedFile(file)
//             setError('')
//             setResumeData(null)
//             setAnalysisResult(null)
//         }
//     }, [])

//     const { getRootProps, getInputProps, isDragActive } = useDropzone({
//         onDrop,
//         accept: {
//             'application/pdf': ['.pdf'],
//             'text/plain': ['.txt'],
//             'application/msword': ['.doc'],
//             'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx']
//         },
//         maxFiles: 1,
//         maxSize: 10 * 1024 * 1024,
//         onDropRejected: () => {
//             setError('Please upload a valid resume file (PDF, TXT, DOC, or DOCX) under 10MB')
//         }
//     })

//     const parseResume = async (file: File): Promise<ResumeData> => {
//         try {
//             let extractedText = ''

//             if (file.type === 'application/pdf') {
//                 extractedText = await parsePDF(file)
//             } else if (file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
//                 extractedText = await parseDOCX(file)
//             } else if (file.type === 'application/msword') {
//                 extractedText = await parseDOC(file)
//             } else if (file.type === 'text/plain') {
//                 extractedText = await parseTXT(file)
//             } else {
//                 throw new Error('Unsupported file format')
//             }

//             return parseTextToResumeData(extractedText)
//         } catch (error) {
//             console.error('Error parsing resume:', error)
//             throw new Error('Failed to parse resume. Please ensure the file is readable and try again.')
//         }
//     }

//     const parsePDF = async (file: File): Promise<string> => {
//         try {
//             if (!window.pdfjsLib) {
//                 await new Promise<void>((resolve, reject) => {
//                     const script = document.createElement('script')
//                     script.src = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js'
//                     script.onload = () => {
//                         window.pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js'
//                         resolve()
//                     }
//                     script.onerror = reject
//                     document.head.appendChild(script)
//                 })
//             }

//             const arrayBuffer = await file.arrayBuffer()
//             const pdf = await window.pdfjsLib.getDocument({ data: arrayBuffer }).promise
//             let fullText = ''

//             for (let i = 1; i <= pdf.numPages; i++) {
//                 const page = await pdf.getPage(i)
//                 const textContent = await page.getTextContent()
//                 const pageText = textContent.items.map((item: any) => item.str).join(' ')
//                 fullText += pageText + '\n'
//             }

//             return fullText
//         } catch (error) {
//             console.error('PDF parsing error:', error)
//             throw new Error('Failed to parse PDF file. Please try converting to TXT format.')
//         }
//     }

//     const parseDOCX = async (file: File): Promise<string> => {
//         try {
//             const JSZip = (await import('jszip')).default

//             const zip = new JSZip()
//             const contents = await zip.loadAsync(file)

//             const documentXML = contents.files['word/document.xml']
//             if (!documentXML) {
//                 throw new Error('Invalid DOCX structure')
//             }

//             const xmlContent = await documentXML.async('string')

//             const textRegex = /<w:t[^>]*>([^<]*)<\/w:t>/g
//             const texts: string[] = []
//             let match

//             while ((match = textRegex.exec(xmlContent)) !== null) {
//                 if (match[1]) {
//                     texts.push(match[1])
//                 }
//             }

//             return texts.join(' ')
//         } catch (error) {
//             console.error('DOCX parsing error:', error)
//             try {
//                 const text = await file.text()
//                 return text
//             } catch {
//                 throw new Error('Failed to parse DOCX file. Please try converting to PDF or TXT format.')
//             }
//         }
//     }

//     const parseDOC = async (file: File): Promise<string> => {
//         try {
//             const arrayBuffer = await file.arrayBuffer()
//             const uint8Array = new Uint8Array(arrayBuffer)

//             let text = ''
//             for (let i = 0; i < uint8Array.length; i++) {
//                 const char = uint8Array[i]
//                 if (char >= 32 && char <= 126) {
//                     text += String.fromCharCode(char)
//                 } else if (char === 10 || char === 13) {
//                     text += ' '
//                 }
//             }

//             text = text.replace(/[^\w\s@.-]/g, ' ')
//                 .replace(/\s+/g, ' ')
//                 .trim()

//             if (text.length < 50) {
//                 throw new Error('Insufficient text extracted')
//             }

//             return text
//         } catch (error) {
//             console.error('DOC parsing error:', error)
//             throw new Error('Failed to parse DOC file. Please convert to PDF, DOCX, or TXT format.')
//         }
//     }

//     const parseTXT = async (file: File): Promise<string> => {
//         try {
//             return await file.text()
//         } catch (error) {
//             console.error('TXT parsing error:', error)
//             throw new Error('Failed to parse TXT file')
//         }
//     }

//     const parseTextToResumeData = (text: string): ResumeData => {
//         const cleanText = text.replace(/\s+/g, ' ').trim()
//         const lines = cleanText.split('\n').map(line => line.trim()).filter(line => line.length > 0)

//         const personalInfo = extractPersonalInfo(cleanText)

//         const summary = extractSummary(cleanText)
//         const experience = extractExperience(cleanText)
//         const education = extractEducation(cleanText)
//         const skills = extractSkills(cleanText)
//         const certifications = extractCertifications(cleanText)
//         const projects = extractProjects(cleanText)

//         return {
//             personalInfo,
//             summary,
//             experience,
//             education,
//             skills,
//             certifications,
//             projects
//         }
//     }

//     const extractPersonalInfo = (text: string) => {
//         const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g
//         const emails = text.match(emailRegex)

//         const phoneRegex = /(\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}|\+\d{1,3}[-.\s]?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4})/g
//         const phones = text.match(phoneRegex)

//         const lines = text.split('\n').filter(line => line.trim().length > 0)
//         let name = 'Not specified'

//         for (let i = 0; i < Math.min(3, lines.length); i++) {
//             const line = lines[i].trim()
//             if (!emailRegex.test(line) && !phoneRegex.test(line) && line.length > 2 && line.length < 50) {
//                 const words = line.split(' ').filter(word => word.length > 0)
//                 if (words.length >= 2 && words.length <= 4 && words.every(word => /^[A-Za-z]+$/.test(word))) {
//                     name = line
//                     break
//                 }
//             }
//         }

//         const locationRegex = /([A-Za-z\s]+,\s*[A-Za-z]{2,})/g
//         const locations = text.match(locationRegex)

//         return {
//             name,
//             email: emails ? emails[0] : 'Not specified',
//             phone: phones ? phones[0] : 'Not specified',
//             location: locations ? locations[0] : 'Not specified'
//         }
//     }

//     const extractSummary = (text: string): string => {
//         const summaryPatterns = [
//             /(?:summary|objective|profile|about)[:\s]+(.*?)(?=\n\s*(?:experience|education|skills|employment)|$)/is,
//             /(?:professional\s+summary|career\s+objective)[:\s]+(.*?)(?=\n\s*(?:experience|education|skills)|$)/is
//         ]

//         for (const pattern of summaryPatterns) {
//             const match = text.match(pattern)
//             if (match && match[1]) {
//                 return match[1].trim().replace(/\s+/g, ' ').substring(0, 500)
//             }
//         }

//         const lines = text.split('\n').filter(line => line.trim().length > 0)
//         for (let i = 2; i < Math.min(8, lines.length); i++) {
//             const line = lines[i].trim()
//             if (line.length > 100 && line.split(' ').length > 15) {
//                 return line.substring(0, 500)
//             }
//         }

//         return 'Professional summary not found'
//     }

//     const extractExperience = (text: string): ResumeData['experience'] => {
//         const experience: ResumeData['experience'] = []

//         const experienceMatch = text.match(/(?:experience|employment|work\s+history)[:\s]+(.*?)(?=\n\s*(?:education|skills|certifications)|$)/is)
//         const experienceText = experienceMatch ? experienceMatch[1] : text

//         const jobPattern = /([A-Za-z\s&,.-]+?)(?:\s+at\s+|\s+\|\s+|\s+-\s+)([A-Za-z\s&,.-]+?)(?:\s+|\n)([0-9]{4}[\s-]*(?:to|-)?\s*(?:present|[0-9]{4}|current)?)/gi

//         let match
//         while ((match = jobPattern.exec(experienceText)) !== null) {
//             const title = match[1].trim()
//             const company = match[2].trim()
//             const duration = match[3].trim()

//             const yearMatch = duration.match(/([0-9]{4})/g)
//             let yearsOfExperience = 1
//             if (yearMatch && yearMatch.length >= 2) {
//                 yearsOfExperience = parseInt(yearMatch[1]) - parseInt(yearMatch[0]) + 1
//             }

//             const descriptionPattern = new RegExp(`${title}.*?${company}.*?${duration}[\\s\\n]+(.*?)(?=\\n\\s*[A-Z][A-Za-z\\s&,.-]+\\s+(?:at|\\||-)\\s+|$)`, 'is')
//             const descMatch = experienceText.match(descriptionPattern)
//             const description = descMatch ? descMatch[1].trim().substring(0, 200) : 'No description available'

//             if (title.length > 2 && company.length > 2) {
//                 experience.push({
//                     title,
//                     company,
//                     duration,
//                     description,
//                     yearsOfExperience
//                 })
//             }
//         }

//         return experience.slice(0, 5)
//     }

//     const extractEducation = (text: string): ResumeData['education'] => {
//         const education: ResumeData['education'] = []

//         const educationMatch = text.match(/(?:education|academic)[:\s]+(.*?)(?=\n\s*(?:experience|skills|certifications)|$)/is)
//         const educationText = educationMatch ? educationMatch[1] : text

//         const degreePattern = /(bachelor|master|phd|doctorate|associate|diploma|certificate).*?(?:in|of)\s+([A-Za-z\s&,-]+?)(?:\s+from\s+|\s+at\s+|\s+-\s+)([A-Za-z\s&,.-]+?)(?:\s+|\n)([0-9]{4})?/gi

//         let match
//         while ((match = degreePattern.exec(educationText)) !== null) {
//             const degreeType = match[1]
//             const field = match[2].trim()
//             const institution = match[3].trim()
//             const year = match[4] || 'Not specified'

//             const degree = `${degreeType.charAt(0).toUpperCase() + degreeType.slice(1)} in ${field}`

//             if (institution.length > 2) {
//                 education.push({
//                     degree,
//                     institution,
//                     year
//                 })
//             }
//         }

//         return education.slice(0, 3)
//     }

//     const extractSkills = (text: string): ResumeData['skills'] => {
//         const skillsMap = new Map<string, { level: number; category: string }>()

//         const skillCategories = {
//             'Programming': ['JavaScript', 'Python', 'Java', 'C++', 'C#', 'PHP', 'Ruby', 'Go', 'Rust', 'TypeScript', 'Swift', 'Kotlin'],
//             'Frontend': ['React', 'Vue', 'Angular', 'HTML', 'CSS', 'SASS', 'SCSS', 'Bootstrap', 'Tailwind', 'jQuery'],
//             'Backend': ['Node.js', 'Express', 'Django', 'Flask', 'Spring', 'Laravel', 'Rails', 'ASP.NET'],
//             'Database': ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'SQLite', 'Oracle', 'SQL Server'],
//             'Cloud': ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'Terraform'],
//             'Tools': ['Git', 'GitHub', 'GitLab', 'Jira', 'Jenkins', 'VS Code', 'IntelliJ'],
//             'Methodology': ['Agile', 'Scrum', 'Kanban', 'DevOps', 'TDD', 'CI/CD']
//         }

//         for (const [category, skills] of Object.entries(skillCategories)) {
//             for (const skill of skills) {
//                 const escapedSkill = escapeRegExp(skill);
//                 const regex = new RegExp(`\\b${escapedSkill}\\b`, 'gi');
//                 if (regex.test(text)) {
//                     const contextPattern = new RegExp(`${escapedSkill}[^.]*?(expert|advanced|senior|proficient|experienced|years?)`, 'gi');
//                     const contextMatch = text.match(contextPattern)

//                     let level = 70
//                     if (contextMatch) {
//                         const context = contextMatch[0].toLowerCase()
//                         if (context.includes('expert') || context.includes('senior')) level = 90
//                         else if (context.includes('advanced') || context.includes('experienced')) level = 85
//                         else if (context.includes('proficient')) level = 80
//                         else if (context.includes('years')) level = 75
//                     }

//                     skillsMap.set(skill, { level, category })
//                 }
//             }
//         }

//         return Array.from(skillsMap.entries()).map(([name, { level, category }]) => ({
//             name,
//             level,
//             category
//         })).slice(0, 15)
//     }

//     const extractCertifications = (text: string): string[] => {
//         const certifications: string[] = []

//         const certPatterns = [
//             /(?:certified|certification)[:\s]+(.*?)(?=\n|\.|\||$)/gi,
//             /(AWS|Azure|Google Cloud|Microsoft|Oracle|Cisco|CompTIA|PMP|Scrum Master|CISSP)\s+(?:Certified|Certificate)[^.\n]*/gi,
//             /(?:certificate|cert)\s+(?:in|of)\s+([^.\n]+)/gi
//         ]

//         for (const pattern of certPatterns) {
//             let match
//             while ((match = pattern.exec(text)) !== null) {
//                 const cert = match[1] ? match[1].trim() : match[0].trim()
//                 if (cert.length > 5 && cert.length < 100) {
//                     certifications.push(cert)
//                 }
//             }
//         }

//         return [...new Set(certifications)].slice(0, 8)
//     }

//     const extractProjects = (text: string): ResumeData['projects'] => {
//         const projects: ResumeData['projects'] = []

//         const projectMatch = text.match(/(?:projects?|portfolio)[:\s]+(.*?)(?=\n\s*(?:experience|education|skills)|$)/is)
//         const projectText = projectMatch ? projectMatch[1] : ''

//         if (projectText) {
//             const projectLines = projectText.split('\n').filter(line => line.trim().length > 20)

//             for (let i = 0; i < Math.min(3, projectLines.length); i++) {
//                 const line = projectLines[i].trim()
//                 const words = line.split(' ')

//                 if (words.length > 5) {
//                     const technologies: string[] = []
//                     const techKeywords = ['React', 'Angular', 'Vue', 'Node.js', 'Python', 'Java', 'JavaScript', 'TypeScript', 'MySQL', 'MongoDB', 'AWS', 'Docker']

//                     for (const tech of techKeywords) {
//                         if (line.toLowerCase().includes(tech.toLowerCase())) {
//                             technologies.push(tech)
//                         }
//                     }

//                     projects.push({
//                         name: `Project ${i + 1}`,
//                         description: line.substring(0, 150),
//                         technologies: technologies.slice(0, 4)
//                     })
//                 }
//             }
//         }

//         return projects
//     }

//     const analyzeResume = async (resumeData: ResumeData, role: string, jobDesc: string): Promise<AnalysisResult> => {
//         await new Promise(resolve => setTimeout(resolve, 1500))

//         const mockResults: Record<string, AnalysisResult> = {
//             'Software Engineer': {
//                 overallScore: 87,
//                 matchPercentage: 82,
//                 experienceScore: 90,
//                 skillsScore: 85,
//                 educationScore: 88,
//                 certificationsScore: 85,
//                 strengths: [
//                     'Excellent technical expertise in modern technologies',
//                     'Strong experience at top-tier companies',
//                     'Proven track record with large-scale applications',
//                     'Relevant advanced degree and certifications',
//                     'Full-stack development capabilities'
//                 ],
//                 improvements: [
//                     'Add more system design and architecture experience',
//                     'Include leadership and mentoring experience',
//                     'Expand knowledge in emerging technologies (AI/ML)',
//                     'Add open-source contributions'
//                 ],
//                 keywordMatches: resumeData.skills.map(skill => skill.name).slice(0, 7),
//                 missingKeywords: ['System Design', 'Kubernetes', 'Machine Learning', 'Leadership'],
//                 recommendation: 'STRONG_FIT',
//                 detailedAnalysis: {
//                     technicalSkills: 88,
//                     softSkills: 75,
//                     domainExpertise: 85,
//                     leadership: 65
//                 }
//             },
//             'Frontend Developer': {
//                 overallScore: 93,
//                 matchPercentage: 91,
//                 experienceScore: 95,
//                 skillsScore: 92,
//                 educationScore: 88,
//                 certificationsScore: 90,
//                 strengths: [
//                     'Outstanding React and TypeScript expertise',
//                     'Extensive frontend development experience',
//                     'Strong understanding of modern web technologies',
//                     'Experience with performance optimization',
//                     'Solid educational background'
//                 ],
//                 improvements: [
//                     'Add more UI/UX design skills',
//                     'Include mobile development experience (React Native)',
//                     'Expand knowledge in accessibility standards'
//                 ],
//                 keywordMatches: resumeData.skills.filter(skill =>
//                     ['Frontend', 'Programming'].includes(skill.category)
//                 ).map(skill => skill.name),
//                 missingKeywords: ['Vue.js', 'Angular', 'React Native', 'SASS/SCSS'],
//                 recommendation: 'STRONG_FIT',
//                 detailedAnalysis: {
//                     technicalSkills: 92,
//                     softSkills: 78,
//                     domainExpertise: 95,
//                     leadership: 70
//                 }
//             }
//         }

//         const baseResult = mockResults[role] || mockResults['Software Engineer']

//         return {
//             ...baseResult,
//             keywordMatches: resumeData.skills.map(skill => skill.name).slice(0, 8),
//             strengths: [
//                 ...baseResult.strengths.slice(0, 3),
//                 `Strong skill set including ${resumeData.skills.slice(0, 3).map(s => s.name).join(', ')}`,
//                 `${resumeData.experience.length} years of professional experience`
//             ]
//         }
//     }

//     const handleAnalyze = async () => {
//         if (!uploadedFile || !selectedRole) {
//             setError('Please upload a resume and select a job role')
//             return
//         }

//         setIsAnalyzing(true)
//         setError('')

//         try {
//             const parsed = await parseResume(uploadedFile)
//             setResumeData(parsed)

//             const analysis = await analyzeResume(parsed, selectedRole, jobDescription)
//             setAnalysisResult(analysis)
//         } catch (err: any) {
//             setError(err.message || 'Failed to analyze resume. Please try again.')
//         } finally {
//             setIsAnalyzing(false)
//         }
//     }

//     const getRecommendationColor = (recommendation: string) => {
//         switch (recommendation) {
//             case 'STRONG_FIT': return 'bg-emerald-500'
//             case 'GOOD_FIT': return 'bg-blue-500'
//             case 'MODERATE_FIT': return 'bg-amber-500'
//             case 'POOR_FIT': return 'bg-red-500'
//             default: return 'bg-gray-500'
//         }
//     }

//     const getRecommendationText = (recommendation: string) => {
//         switch (recommendation) {
//             case 'STRONG_FIT': return 'Excellent Match'
//             case 'GOOD_FIT': return 'Good Match'
//             case 'MODERATE_FIT': return 'Moderate Match'
//             case 'POOR_FIT': return 'Poor Match'
//             default: return 'Unknown'
//         }
//     }

//     const scoreChartOptions = {
//         chart: {
//             type: 'radialBar' as const,
//             toolbar: { show: false }
//         },
//         plotOptions: {
//             radialBar: {
//                 hollow: { size: '60%' },
//                 dataLabels: {
//                     name: { fontSize: '16px', fontWeight: 600 },
//                     value: { fontSize: '24px', fontWeight: 'bold', color: '#1f2937' }
//                 }
//             }
//         },
//         colors: ['#10b981'],
//         labels: ['Overall Score']
//     }

//     const detailedAnalysisOptions = {
//         chart: {
//             type: 'radar' as const,
//             toolbar: { show: false }
//         },
//         xaxis: {
//             categories: ['Technical Skills', 'Soft Skills', 'Domain Expertise', 'Leadership']
//         },
//         colors: ['#3b82f6'],
//         markers: { size: 4 },
//         fill: { opacity: 0.1 }
//     }

//     const skillsDistributionOptions = {
//         chart: {
//             type: 'donut' as const,
//             toolbar: { show: false }
//         },
//         labels: ['Frontend', 'Backend', 'Database', 'Cloud', 'Tools'],
//         colors: ['#3b82f6', '#10b981', '#f59e0b', '#8b5cf6', '#ef4444'],
//         plotOptions: {
//             pie: {
//                 donut: { size: '60%' }
//             }
//         },
//         legend: { position: 'bottom' as const }
//     }

//     const categoryScoresOptions = {
//         chart: {
//             type: 'bar' as const,
//             toolbar: { show: false }
//         },
//         plotOptions: {
//             bar: {
//                 horizontal: true,
//                 borderRadius: 4
//             }
//         },
//         colors: ['#3b82f6'],
//         xaxis: {
//             categories: ['Experience', 'Skills', 'Education', 'Certifications']
//         }
//     }

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
//             <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600">
//                 <div className="absolute inset-0 bg-black/10" />
//                 <div className="relative max-w-7xl mx-auto px-4 py-16 sm:py-24">
//                     <div className="text-center">
//                         <div className="flex justify-center mb-6">
//                             <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
//                                 <Sparkles className="h-12 w-12 text-white" />
//                             </div>
//                         </div>
//                         <h1 className="text-5xl font-bold text-white mb-4">
//                             AI-Powered Resume Analysis
//                         </h1>
//                         <p className="text-xl text-blue-100 max-w-2xl mx-auto">
//                             Get instant, intelligent insights about your resume's match with your dream job.
//                             Powered by advanced AI technology.
//                         </p>
//                         <div className="mt-8 flex justify-center space-x-8 text-blue-100">
//                             <div className="flex items-center gap-2">
//                                 <Shield className="h-5 w-5" />
//                                 <span>Secure & Private</span>
//                             </div>
//                             <div className="flex items-center gap-2">
//                                 <Zap className="h-5 w-5" />
//                                 <span>Instant Analysis</span>
//                             </div>
//                             <div className="flex items-center gap-2">
//                                 <Target className="h-5 w-5" />
//                                 <span>Precision Matching</span>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//                     <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
//                         <CardHeader className="pb-4">
//                             <CardTitle className="flex items-center gap-3 text-xl">
//                                 <div className="p-2 bg-blue-100 rounded-lg">
//                                     <Upload className="h-6 w-6 text-blue-600" />
//                                 </div>
//                                 Upload Your Resume
//                             </CardTitle>
//                             <CardDescription className="text-base">
//                                 Support for multiple formats with intelligent parsing
//                             </CardDescription>
//                         </CardHeader>
//                         <CardContent>
//                             <div
//                                 {...getRootProps()}
//                                 className={`border-2 border-dashed rounded-xl p-10 text-center cursor-pointer transition-all duration-300 ${isDragActive
//                                     ? 'border-blue-500 bg-blue-50 scale-105'
//                                     : uploadedFile
//                                         ? 'border-green-500 bg-green-50'
//                                         : 'border-gray-300 hover:border-blue-400 hover:bg-blue-50/50'
//                                     }`}
//                             >
//                                 <input {...getInputProps()} />
//                                 <div className="space-y-4">
//                                     {uploadedFile ? (
//                                         <CheckCircle className="h-16 w-16 mx-auto text-green-500" />
//                                     ) : (
//                                         <FileText className="h-16 w-16 mx-auto text-gray-400" />
//                                     )}
//                                     {uploadedFile ? (
//                                         <div className="space-y-2">
//                                             <p className="font-semibold text-green-700 text-lg">
//                                                 {uploadedFile.name}
//                                             </p>
//                                             <p className="text-sm text-gray-600">
//                                                 {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB • Ready for analysis
//                                             </p>
//                                             <Badge variant="outline" className="text-green-600 border-green-200">
//                                                 <CheckCircle className="h-3 w-3 mr-1" />
//                                                 File Uploaded
//                                             </Badge>
//                                         </div>
//                                     ) : (
//                                         <div className="space-y-2">
//                                             <p className="text-gray-700 font-medium text-lg">
//                                                 Drop your resume here or click to browse
//                                             </p>
//                                             <p className="text-sm text-gray-500">
//                                                 PDF, DOCX, DOC, TXT • Max 10MB
//                                             </p>
//                                         </div>
//                                     )}
//                                 </div>
//                             </div>
//                         </CardContent>
//                     </Card>

//                     <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
//                         <CardHeader className="pb-4">
//                             <CardTitle className="flex items-center gap-3 text-xl">
//                                 <div className="p-2 bg-purple-100 rounded-lg">
//                                     <Briefcase className="h-6 w-6 text-purple-600" />
//                                 </div>
//                                 Job Configuration
//                             </CardTitle>
//                             <CardDescription className="text-base">
//                                 Specify your target role for precise analysis
//                             </CardDescription>
//                         </CardHeader>
//                         <CardContent className="space-y-6">
//                             <div className="space-y-2">
//                                 <Label htmlFor="role" className="text-base font-medium">Target Job Role</Label>
//                                 <Popover open={open} onOpenChange={setOpen}>
//                                     <PopoverTrigger asChild>
//                                         <Button
//                                             variant="outline"
//                                             role="combobox"
//                                             aria-expanded={open}
//                                             className="w-full justify-between h-12 text-left font-normal"
//                                         >
//                                             {selectedRole || "Search and select a job role..."}
//                                             <div className="flex items-center gap-2">
//                                                 <Search className="h-4 w-4 text-gray-400" />
//                                                 <ChevronDown className="h-4 w-4 text-gray-400" />
//                                             </div>
//                                         </Button>
//                                     </PopoverTrigger>
//                                     <PopoverContent className="w-full p-0">
//                                         <Command>
//                                             <CommandInput
//                                                 placeholder="Search job roles..."
//                                                 value={searchValue}
//                                                 onValueChange={setSearchValue}
//                                             />
//                                             <CommandEmpty>No role found.</CommandEmpty>
//                                             <CommandGroup className="max-h-64 overflow-y-auto">
//                                                 {filteredRoles.map((role) => (
//                                                     <CommandItem
//                                                         key={role}
//                                                         value={role}
//                                                         onSelect={(currentValue) => {
//                                                             setSelectedRole(currentValue === selectedRole ? "" : role)
//                                                             setOpen(false)
//                                                             setSearchValue('')
//                                                         }}
//                                                     >
//                                                         <Check
//                                                             className={`mr-2 h-4 w-4 ${selectedRole === role ? "opacity-100" : "opacity-0"
//                                                                 }`}
//                                                         />
//                                                         {role}
//                                                     </CommandItem>
//                                                 ))}
//                                             </CommandGroup>
//                                         </Command>
//                                     </PopoverContent>
//                                 </Popover>
//                             </div>

//                             <div className="space-y-2">
//                                 <Label htmlFor="job-description" className="text-base font-medium">
//                                     Job Description <span className="text-gray-500">(Optional)</span>
//                                 </Label>
//                                 <Textarea
//                                     id="job-description"
//                                     placeholder="Paste the job description here for more accurate analysis..."
//                                     value={jobDescription}
//                                     onChange={(e) => setJobDescription(e.target.value)}
//                                     rows={5}
//                                     className="resize-none"
//                                 />
//                             </div>

//                             <Button
//                                 onClick={handleAnalyze}
//                                 disabled={!uploadedFile || !selectedRole || isAnalyzing}
//                                 className="w-full h-12 text-base font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
//                             >
//                                 {isAnalyzing ? (
//                                     <>
//                                         <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3" />
//                                         Analyzing Resume...
//                                     </>
//                                 ) : (
//                                     <>
//                                         <TrendingUp className="h-5 w-5 mr-3" />
//                                         Analyze Resume
//                                     </>
//                                 )}
//                             </Button>
//                         </CardContent>
//                     </Card>
//                 </div>

//                 {error && (
//                     <Alert variant="destructive" className="border-red-200 bg-red-50">
//                         <AlertCircle className="h-5 w-5" />
//                         <AlertDescription className="text-base">{error}</AlertDescription>
//                     </Alert>
//                 )}

//                 {analysisResult && resumeData && (
//                     <div className="space-y-8">
//                         <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
//                             <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-50 to-blue-100">
//                                 <CardContent className="p-6 text-center">
//                                     <div className="space-y-2">
//                                         <Star className="h-8 w-8 mx-auto text-blue-600" />
//                                         <p className="text-sm font-medium text-blue-700">Overall Score</p>
//                                         <p className="text-3xl font-bold text-blue-900">{analysisResult.overallScore}%</p>
//                                     </div>
//                                 </CardContent>
//                             </Card>

//                             <Card className="border-0 shadow-xl bg-gradient-to-br from-green-50 to-green-100">
//                                 <CardContent className="p-6 text-center">
//                                     <div className="space-y-2">
//                                         <Target className="h-8 w-8 mx-auto text-green-600" />
//                                         <p className="text-sm font-medium text-green-700">Match Rate</p>
//                                         <p className="text-3xl font-bold text-green-900">{analysisResult.matchPercentage}%</p>
//                                     </div>
//                                 </CardContent>
//                             </Card>

//                             <Card className="border-0 shadow-xl bg-gradient-to-br from-purple-50 to-purple-100">
//                                 <CardContent className="p-6 text-center">
//                                     <div className="space-y-2">
//                                         <CheckCircle className="h-8 w-8 mx-auto text-purple-600" />
//                                         <p className="text-sm font-medium text-purple-700">Keywords Matched</p>
//                                         <p className="text-3xl font-bold text-purple-900">{analysisResult.keywordMatches.length}</p>
//                                     </div>
//                                 </CardContent>
//                             </Card>

//                             <Card className={`border-0 shadow-xl ${getRecommendationColor(analysisResult.recommendation)} text-white`}>
//                                 <CardContent className="p-6 text-center">
//                                     <div className="space-y-2">
//                                         <Award className="h-8 w-8 mx-auto" />
//                                         <p className="text-sm font-medium opacity-90">Recommendation</p>
//                                         <p className="text-xl font-bold">{getRecommendationText(analysisResult.recommendation)}</p>
//                                     </div>
//                                 </CardContent>
//                             </Card>
//                         </div>

//                         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//                             <Card className="border-0 shadow-xl">
//                                 <CardHeader>
//                                     <CardTitle className="flex items-center gap-2">
//                                         <TrendingUp className="h-5 w-5" />
//                                         Overall Performance
//                                     </CardTitle>
//                                 </CardHeader>
//                                 <CardContent>
//                                     <div className="h-80">
//                                         <Chart
//                                             options={scoreChartOptions}
//                                             series={[analysisResult.overallScore]}
//                                             type="radialBar"
//                                             height="100%"
//                                         />
//                                     </div>
//                                 </CardContent>
//                             </Card>

//                             <Card className="border-0 shadow-xl">
//                                 <CardHeader>
//                                     <CardTitle className="flex items-center gap-2">
//                                         <Code className="h-5 w-5" />
//                                         Skills Distribution
//                                     </CardTitle>
//                                 </CardHeader>
//                                 <CardContent>
//                                     <div className="h-80">
//                                         <Chart
//                                             options={skillsDistributionOptions}
//                                             series={[
//                                                 resumeData.skills.filter(s => s.category === 'Frontend').length,
//                                                 resumeData.skills.filter(s => s.category === 'Backend').length,
//                                                 resumeData.skills.filter(s => s.category === 'Database').length,
//                                                 resumeData.skills.filter(s => s.category === 'Cloud').length,
//                                                 resumeData.skills.filter(s => s.category === 'Tools').length
//                                             ]}
//                                             type="donut"
//                                             height="100%"
//                                         />
//                                     </div>
//                                 </CardContent>
//                             </Card>
//                         </div>

//                         <Card className="border-0 shadow-xl">
//                             <CardHeader>
//                                 <CardTitle className="text-2xl">Comprehensive Analysis</CardTitle>
//                                 <CardDescription className="text-base">
//                                     Detailed breakdown of your resume's strengths and areas for improvement
//                                 </CardDescription>
//                             </CardHeader>
//                             <CardContent>
//                                 <Tabs defaultValue="overview" className="w-full">
//                                     <TabsList className="grid w-full grid-cols-4 h-12">
//                                         <TabsTrigger value="overview" className="text-sm">Overview</TabsTrigger>
//                                         <TabsTrigger value="keywords" className="text-sm">Keywords</TabsTrigger>
//                                         <TabsTrigger value="skills" className="text-sm">Skills</TabsTrigger>
//                                         <TabsTrigger value="experience" className="text-sm">Experience</TabsTrigger>
//                                     </TabsList>

//                                     <TabsContent value="overview" className="mt-6 space-y-6">
//                                         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                                             <div className="space-y-4">
//                                                 <h4 className="font-semibold text-green-700 text-lg flex items-center gap-2">
//                                                     <CheckCircle className="h-5 w-5" />
//                                                     Key Strengths
//                                                 </h4>
//                                                 <div className="space-y-3">
//                                                     {analysisResult.strengths.map((strength, index) => (
//                                                         <div key={index} className="flex items-start gap-3 p-4 bg-green-50 rounded-lg border border-green-200">
//                                                             <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
//                                                             <p className="text-gray-700 leading-relaxed">{strength}</p>
//                                                         </div>
//                                                     ))}
//                                                 </div>
//                                             </div>

//                                             <div className="space-y-4">
//                                                 <h4 className="font-semibold text-amber-700 text-lg flex items-center gap-2">
//                                                     <AlertCircle className="h-5 w-5" />
//                                                     Improvement Areas
//                                                 </h4>
//                                                 <div className="space-y-3">
//                                                     {analysisResult.improvements.map((improvement, index) => (
//                                                         <div key={index} className="flex items-start gap-3 p-4 bg-amber-50 rounded-lg border border-amber-200">
//                                                             <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0" />
//                                                             <p className="text-gray-700 leading-relaxed">{improvement}</p>
//                                                         </div>
//                                                     ))}
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </TabsContent>

//                                     <TabsContent value="keywords" className="mt-6 space-y-6">
//                                         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                                             <div className="space-y-4">
//                                                 <h4 className="font-semibold text-green-700 text-lg">
//                                                     Matched Keywords ({analysisResult.keywordMatches.length})
//                                                 </h4>
//                                                 <div className="flex flex-wrap gap-3">
//                                                     {analysisResult.keywordMatches.map((keyword, index) => (
//                                                         <Badge key={index} className="bg-green-100 text-green-800 border-green-300 px-3 py-1 text-sm">
//                                                             <CheckCircle className="h-3 w-3 mr-1" />
//                                                             {keyword}
//                                                         </Badge>
//                                                     ))}
//                                                 </div>
//                                             </div>

//                                             <div className="space-y-4">
//                                                 <h4 className="font-semibold text-red-700 text-lg">
//                                                     Missing Keywords ({analysisResult.missingKeywords.length})
//                                                 </h4>
//                                                 <div className="flex flex-wrap gap-3">
//                                                     {analysisResult.missingKeywords.map((keyword, index) => (
//                                                         <Badge key={index} className="bg-red-100 text-red-800 border-red-300 px-3 py-1 text-sm">
//                                                             <XCircle className="h-3 w-3 mr-1" />
//                                                             {keyword}
//                                                         </Badge>
//                                                     ))}
//                                                 </div>
//                                                 <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
//                                                     <p className="text-sm text-blue-800">
//                                                         <strong>Tip:</strong> Consider adding these keywords to your resume where relevant to improve your match score.
//                                                     </p>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </TabsContent>

//                                     <TabsContent value="skills" className="mt-6 space-y-6">
//                                         <div className="space-y-6">
//                                             <h4 className="font-semibold text-lg">Skills Assessment</h4>
//                                             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                                                 {Object.entries(
//                                                     resumeData.skills.reduce((acc, skill) => {
//                                                         if (!acc[skill.category]) acc[skill.category] = []
//                                                         acc[skill.category].push(skill)
//                                                         return acc
//                                                     }, {} as Record<string, typeof resumeData.skills>)
//                                                 ).map(([category, skills]) => (
//                                                     <div key={category} className="space-y-3">
//                                                         <h5 className="font-medium text-gray-900 border-b pb-2">{category}</h5>
//                                                         <div className="space-y-3">
//                                                             {skills.map((skill, index) => (
//                                                                 <div key={index} className="space-y-2">
//                                                                     <div className="flex justify-between items-center">
//                                                                         <span className="text-sm font-medium text-gray-700">{skill.name}</span>
//                                                                         <span className="text-sm text-gray-500">{skill.level}%</span>
//                                                                     </div>
//                                                                     <Progress value={skill.level} className="h-2" />
//                                                                 </div>
//                                                             ))}
//                                                         </div>
//                                                     </div>
//                                                 ))}
//                                             </div>
//                                         </div>
//                                     </TabsContent>

//                                     <TabsContent value="experience" className="mt-6 space-y-6">
//                                         <div className="space-y-6">
//                                             <div className="flex items-center justify-between">
//                                                 <h4 className="font-semibold text-lg">Professional Experience</h4>
//                                                 <Badge variant="outline" className="text-blue-600 border-blue-300">
//                                                     {resumeData.experience.reduce((total, exp) => total + exp.yearsOfExperience, 0)} years total
//                                                 </Badge>
//                                             </div>
//                                             <div className="space-y-4">
//                                                 {resumeData.experience.map((exp, index) => (
//                                                     <Card key={index} className="border border-gray-200">
//                                                         <CardContent className="p-6">
//                                                             <div className="flex items-start justify-between mb-3">
//                                                                 <div>
//                                                                     <h5 className="font-semibold text-lg text-gray-900">{exp.title}</h5>
//                                                                     <p className="text-blue-600 font-medium">{exp.company}</p>
//                                                                 </div>
//                                                                 <Badge variant="secondary" className="flex items-center gap-1">
//                                                                     <Calendar className="h-3 w-3" />
//                                                                     {exp.duration}
//                                                                 </Badge>
//                                                             </div>
//                                                             <p className="text-gray-600 leading-relaxed">{exp.description}</p>
//                                                         </CardContent>
//                                                     </Card>
//                                                 ))}
//                                             </div>
//                                         </div>
//                                     </TabsContent>
//                                 </Tabs>
//                             </CardContent>
//                         </Card>

//                         <Card className="border-0 shadow-xl">
//                             <CardHeader>
//                                 <CardTitle className="flex items-center gap-3 text-2xl">
//                                     <User className="h-6 w-6" />
//                                     Resume Summary
//                                 </CardTitle>
//                                 <CardDescription className="text-base">
//                                     Parsed information from your uploaded resume
//                                 </CardDescription>
//                             </CardHeader>
//                             <CardContent>
//                                 <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//                                     <div className="space-y-6">
//                                         <div className="space-y-4">
//                                             <h4 className="font-semibold text-lg flex items-center gap-2 border-b pb-2">
//                                                 <User className="h-5 w-5" />
//                                                 Personal Information
//                                             </h4>
//                                             <div className="space-y-3">
//                                                 <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
//                                                     <User className="h-4 w-4 text-gray-500 flex-shrink-0" />
//                                                     <span className="text-sm text-gray-700">{resumeData.personalInfo.name}</span>
//                                                 </div>
//                                                 <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
//                                                     <Mail className="h-4 w-4 text-gray-500 flex-shrink-0" />
//                                                     <span className="text-sm text-gray-700">{resumeData.personalInfo.email}</span>
//                                                 </div>
//                                                 <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
//                                                     <Phone className="h-4 w-4 text-gray-500 flex-shrink-0" />
//                                                     <span className="text-sm text-gray-700">{resumeData.personalInfo.phone}</span>
//                                                 </div>
//                                                 <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
//                                                     <MapPin className="h-4 w-4 text-gray-500 flex-shrink-0" />
//                                                     <span className="text-sm text-gray-700">{resumeData.personalInfo.location}</span>
//                                                 </div>
//                                             </div>
//                                         </div>

//                                         <div className="space-y-4">
//                                             <h4 className="font-semibold text-lg flex items-center gap-2 border-b pb-2">
//                                                 <GraduationCap className="h-5 w-5" />
//                                                 Education
//                                             </h4>
//                                             <div className="space-y-3">
//                                                 {resumeData.education.map((edu, index) => (
//                                                     <div key={index} className="p-4 bg-blue-50 rounded-lg border border-blue-200">
//                                                         <p className="font-semibold text-gray-900">{edu.degree}</p>
//                                                         <p className="text-blue-600 font-medium">{edu.institution}</p>
//                                                         <div className="flex items-center gap-2 mt-1">
//                                                             <Calendar className="h-3 w-3 text-gray-500" />
//                                                             <span className="text-sm text-gray-600">{edu.year}</span>
//                                                             {edu.gpa && (
//                                                                 <>
//                                                                     <span className="text-gray-400">•</span>
//                                                                     <span className="text-sm text-gray-600">GPA: {edu.gpa}</span>
//                                                                 </>
//                                                             )}
//                                                         </div>
//                                                     </div>
//                                                 ))}
//                                             </div>
//                                         </div>
//                                     </div>

//                                     <div className="space-y-6">
//                                         <div className="space-y-4">
//                                             <h4 className="font-semibold text-lg flex items-center gap-2 border-b pb-2">
//                                                 <Briefcase className="h-5 w-5" />
//                                                 Recent Experience
//                                             </h4>
//                                             <div className="space-y-3">
//                                                 {resumeData.experience.slice(0, 3).map((exp, index) => (
//                                                     <div key={index} className="p-4 bg-green-50 rounded-lg border border-green-200">
//                                                         <p className="font-semibold text-gray-900">{exp.title}</p>
//                                                         <p className="text-green-600 font-medium">{exp.company}</p>
//                                                         <div className="flex items-center gap-2 mt-1">
//                                                             <Calendar className="h-3 w-3 text-gray-500" />
//                                                             <span className="text-sm text-gray-600">{exp.duration}</span>
//                                                         </div>
//                                                     </div>
//                                                 ))}
//                                             </div>
//                                         </div>

//                                         {resumeData.projects && resumeData.projects.length > 0 && (
//                                             <div className="space-y-4">
//                                                 <h4 className="font-semibold text-lg flex items-center gap-2 border-b pb-2">
//                                                     <Code className="h-5 w-5" />
//                                                     Key Projects
//                                                 </h4>
//                                                 <div className="space-y-3">
//                                                     {resumeData.projects.map((project, index) => (
//                                                         <div key={index} className="p-4 bg-purple-50 rounded-lg border border-purple-200">
//                                                             <p className="font-semibold text-gray-900">{project.name}</p>
//                                                             <p className="text-sm text-gray-600 mt-1">{project.description}</p>
//                                                             <div className="flex flex-wrap gap-1 mt-2">
//                                                                 {project.technologies.map((tech, techIndex) => (
//                                                                     <Badge key={techIndex} variant="outline" className="text-xs">
//                                                                         {tech}
//                                                                     </Badge>
//                                                                 ))}
//                                                             </div>
//                                                         </div>
//                                                     ))}
//                                                 </div>
//                                             </div>
//                                         )}
//                                     </div>

//                                     <div className="space-y-6">
//                                         <div className="space-y-4">
//                                             <h4 className="font-semibold text-lg flex items-center gap-2 border-b pb-2">
//                                                 <Code className="h-5 w-5" />
//                                                 Top Skills
//                                             </h4>
//                                             <div className="flex flex-wrap gap-2">
//                                                 {resumeData.skills
//                                                     .sort((a, b) => b.level - a.level)
//                                                     .slice(0, 10)
//                                                     .map((skill, index) => (
//                                                         <Badge key={index} variant="secondary" className="px-3 py-1">
//                                                             {skill.name}
//                                                             <span className="ml-1 text-xs opacity-70">({skill.level}%)</span>
//                                                         </Badge>
//                                                     ))}
//                                             </div>
//                                         </div>

//                                         {resumeData.certifications.length > 0 && (
//                                             <div className="space-y-4">
//                                                 <h4 className="font-semibold text-lg flex items-center gap-2 border-b pb-2">
//                                                     <Award className="h-5 w-5" />
//                                                     Certifications
//                                                 </h4>
//                                                 <div className="space-y-2">
//                                                     {resumeData.certifications.map((cert, index) => (
//                                                         <div key={index} className="flex items-center gap-2 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
//                                                             <Award className="h-4 w-4 text-yellow-600 flex-shrink-0" />
//                                                             <span className="text-sm text-gray-700">{cert}</span>
//                                                         </div>
//                                                     ))}
//                                                 </div>
//                                             </div>
//                                         )}

//                                         <div className="space-y-4">
//                                             <h4 className="font-semibold text-lg border-b pb-2">Summary</h4>
//                                             <div className="p-4 bg-gray-50 rounded-lg">
//                                                 <p className="text-sm text-gray-700 leading-relaxed">{resumeData.summary}</p>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </CardContent>
//                         </Card>

//                         <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                             <Button
//                                 variant="outline"
//                                 className="h-12 px-8"
//                                 onClick={() => {
//                                     setUploadedFile(null)
//                                     setResumeData(null)
//                                     setAnalysisResult(null)
//                                     setSelectedRole('')
//                                     setJobDescription('')
//                                 }}
//                             >
//                                 <Upload className="h-5 w-5 mr-2" />
//                                 Analyze Another Resume
//                             </Button>
//                             <Button
//                                 className="h-12 px-8 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
//                                 onClick={() => window.print()}
//                             >
//                                 <Download className="h-5 w-5 mr-2" />
//                                 Download Report
//                             </Button>
//                         </div>
//                     </div>
//                 )}
//             </div>
//         </div>
//     )
// }

// export default Page


'use client'

import React, { useState, useCallback, useMemo } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Separator } from '@/components/ui/separator'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from '@/components/ui/command'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
    Upload,
    FileText,
    CheckCircle,
    XCircle,
    AlertCircle,
    User,
    Briefcase,
    GraduationCap,
    Award,
    Code,
    Mail,
    Phone,
    MapPin,
    Calendar,
    Star,
    TrendingUp,
    Download,
    Search,
    ChevronDown,
    Check,
    BarChart3,
    PieChart,
    Target,
    Zap,
    Clock,
    Shield,
    Sparkles
} from 'lucide-react'
import { useDropzone } from 'react-dropzone'
import dynamic from 'next/dynamic'

declare global {
    interface Window {
        pdfjsLib: any;
    }
}

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

interface ResumeData {
    personalInfo: {
        name: string
        email: string
        phone: string
        location: string
    }
    summary: string
    experience: Array<{
        title: string
        company: string
        duration: string
        description: string
        yearsOfExperience: number
    }>
    education: Array<{
        degree: string
        institution: string
        year: string
        gpa?: string
    }>
    skills: Array<{
        name: string
        level: number
        category: string
    }>
    certifications: string[]
    projects?: Array<{
        name: string
        description: string
        technologies: string[]
    }>
}

interface AnalysisResult {
    overallScore: number
    matchPercentage: number
    strengths: string[]
    improvements: string[]
    keywordMatches: string[]
    missingKeywords: string[]
    recommendation: 'STRONG_FIT' | 'GOOD_FIT' | 'MODERATE_FIT' | 'POOR_FIT'
    experienceScore: number
    skillsScore: number
    educationScore: number
    certificationsScore: number
    detailedAnalysis: {
        technicalSkills: number
        softSkills: number
        domainExpertise: number
        leadership: number
    }
}

const jobRoles = [
    ...new Set([
        'Software Engineer', 'Frontend Developer', 'Backend Developer', 'Full Stack Developer',
        'Data Scientist', 'Data Analyst', 'Machine Learning Engineer', 'AI Engineer',
        'Product Manager', 'Project Manager', 'Scrum Master', 'Product Owner',
        'UI/UX Designer', 'Graphic Designer', 'Web Designer', 'Product Designer',
        'DevOps Engineer', 'Cloud Engineer', 'Systems Administrator', 'Network Engineer',
        'Mobile Developer', 'iOS Developer', 'Android Developer', 'React Native Developer',
        'QA Engineer', 'Test Automation Engineer', 'QA Analyst', 'Performance Tester',
        'Business Analyst', 'Systems Analyst', 'Financial Analyst',
        'Marketing Manager', 'Digital Marketing Specialist', 'Content Marketing Manager', 'SEO Specialist',
        'Sales Representative', 'Sales Manager', 'Account Manager', 'Business Development Manager',
        'HR Manager', 'HR Generalist', 'Recruiter', 'Talent Acquisition Specialist',
        'Accountant', 'Finance Manager', 'Investment Analyst',
        'Cybersecurity Analyst', 'Security Engineer', 'Information Security Specialist',
        'Database Administrator', 'Database Developer', 'Data Engineer',
        'Technical Writer', 'Documentation Specialist', 'Content Writer'
    ])
]

const Page = () => {
    const [selectedRole, setSelectedRole] = useState<string>('')
    const [jobDescription, setJobDescription] = useState<string>('')
    const [uploadedFile, setUploadedFile] = useState<File | null>(null)
    const [isAnalyzing, setIsAnalyzing] = useState(false)
    const [resumeData, setResumeData] = useState<ResumeData | null>(null)
    const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null)
    const [error, setError] = useState<string>('')
    const [open, setOpen] = useState(false)
    const [searchValue, setSearchValue] = useState('')

    const filteredRoles = useMemo(() => {
        return jobRoles.filter(role =>
            role.toLowerCase().includes(searchValue.toLowerCase())
        )
    }, [searchValue])

    const onDrop = useCallback((acceptedFiles: File[]) => {
        const file = acceptedFiles[0]
        if (file) {
            setUploadedFile(file)
            setError('')
            setResumeData(null)
            setAnalysisResult(null)
        }
    }, [])

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: {
            'application/pdf': ['.pdf'],
            'text/plain': ['.txt'],
            'application/msword': ['.doc'],
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx']
        },
        maxFiles: 1,
        maxSize: 10 * 1024 * 1024,
        onDropRejected: () => {
            setError('Please upload a valid resume file (PDF, TXT, DOC, or DOCX) under 10MB')
        }
    })

    const parseFileToText = async (file: File): Promise<string> => {
        try {
            if (file.type === 'application/pdf') {
                return await parsePDF(file)
            } else if (file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
                return await parseDOCX(file)
            } else if (file.type === 'application/msword') {
                return await parseDOC(file)
            } else if (file.type === 'text/plain') {
                return await file.text()
            }
            throw new Error('Unsupported file format. Please use PDF, DOCX, or TXT.')
        } catch (error: any) {
            console.error('Error parsing file:', error)
            throw new Error('Failed to read file content. Please ensure the file is not corrupted and try again.')
        }
    }

    const parsePDF = async (file: File): Promise<string> => {
        if (typeof window === 'undefined') return '';
        try {
            if (!window.pdfjsLib) {
                await new Promise<void>((resolve, reject) => {
                    const script = document.createElement('script');
                    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js';
                    script.onload = () => {
                        window.pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
                        resolve();
                    };
                    script.onerror = reject;
                    document.head.appendChild(script);
                });
            }

            const arrayBuffer = await file.arrayBuffer();
            const pdf = await window.pdfjsLib.getDocument({ data: arrayBuffer }).promise;
            let fullText = '';
            for (let i = 1; i <= pdf.numPages; i++) {
                const page = await pdf.getPage(i);
                const textContent = await page.getTextContent();
                fullText += textContent.items.map((item: any) => item.str).join(' ');
            }
            return fullText;
        } catch (error: any) {
            console.error('PDF parsing error:', error);
            throw new Error('Failed to parse PDF. The file might be image-based or corrupted. Try a text-based PDF or TXT file.');
        }
    }

    const parseDOCX = async (file: File): Promise<string> => {
        try {
            const JSZip = (await import('jszip')).default;
            const content = await JSZip.loadAsync(file);
            const doc = content.files['word/document.xml'];
            if (!doc) throw new Error('Invalid DOCX file structure');
            const xmlContent = await doc.async('string');
            const text = xmlContent.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
            return text;
        } catch (error: any) {
            console.error('DOCX parsing error:', error);
            throw new Error('Failed to parse DOCX. Please try converting to PDF or TXT.');
        }
    }

    const parseDOC = (file: File): Promise<string> => {
        console.warn('Parsing .doc files has limited support. Please convert to DOCX, PDF, or TXT for best performance.');
        return file.text();
    }

    const handleAnalyze = async () => {
        if (!uploadedFile || !selectedRole) {
            setError('Please upload a resume and select a job role.')
            return
        }

        setIsAnalyzing(true)
        setError('')
        setAnalysisResult(null)
        setResumeData(null)

        try {
            const resumeText = await parseFileToText(uploadedFile)
            if (!resumeText || resumeText.trim().length < 50) {
                throw new Error("Could not extract enough text from the resume. Please ensure it's a text-based file.");
            }

            const response = await fetch('/api/analyze', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ resumeText, jobDescription, selectedRole }),
            })

            if (!response.ok) {
                const errorData = await response.json()
                throw new Error(errorData.error || 'Analysis failed on the server.')
            }

            const { resumeData, analysisResult } = await response.json()

            if (!resumeData || !analysisResult) {
                throw new Error("Received an invalid response from the AI. Please try again.")
            }

            setResumeData(resumeData)
            setAnalysisResult(analysisResult)

        } catch (err: any) {
            setError(err.message || 'An unknown error occurred during analysis.')
            console.error(err)
        } finally {
            setIsAnalyzing(false)
        }
    }

    const getRecommendationColor = (recommendation: string) => {
        switch (recommendation) {
            case 'STRONG_FIT': return 'bg-emerald-500'
            case 'GOOD_FIT': return 'bg-blue-500'
            case 'MODERATE_FIT': return 'bg-amber-500'
            case 'POOR_FIT': return 'bg-red-500'
            default: return 'bg-gray-500'
        }
    }

    const getRecommendationText = (recommendation: string) => {
        switch (recommendation) {
            case 'STRONG_FIT': return 'Excellent Match'
            case 'GOOD_FIT': return 'Good Match'
            case 'MODERATE_FIT': return 'Moderate Match'
            case 'POOR_FIT': return 'Poor Match'
            default: return 'Unknown'
        }
    }

    const scoreChartOptions = {
        chart: { type: 'radialBar' as const, toolbar: { show: false } },
        plotOptions: {
            radialBar: {
                hollow: { size: '60%' },
                dataLabels: {
                    name: { fontSize: '16px', fontWeight: 600 },
                    value: { fontSize: '24px', fontWeight: 'bold', color: '#1f2937' }
                }
            }
        },
        colors: ['#10b981'],
        labels: ['Overall Score']
    }

    const detailedAnalysisOptions = {
        chart: { type: 'radar' as const, toolbar: { show: false } },
        xaxis: { categories: ['Technical Skills', 'Soft Skills', 'Domain Expertise', 'Leadership'] },
        colors: ['#3b82f6'],
        markers: { size: 4 },
        fill: { opacity: 0.1 }
    }

    const skillsDistributionOptions = {
        chart: { type: 'donut' as const, toolbar: { show: false } },
        labels: resumeData?.skills.reduce((acc, skill) => {
            if (!acc.includes(skill.category)) {
                acc.push(skill.category);
            }
            return acc;
        }, [] as string[]) || [],
        colors: ['#3b82f6', '#10b981', '#f59e0b', '#8b5cf6', '#ef4444', '#64748b', '#ec4899'],
        plotOptions: { pie: { donut: { size: '60%' } } },
        legend: { position: 'bottom' as const }
    }

    const categoryScoresOptions = {
        chart: { type: 'bar' as const, toolbar: { show: false } },
        plotOptions: { bar: { horizontal: true, borderRadius: 4 } },
        colors: ['#3b82f6'],
        xaxis: { categories: ['Experience', 'Skills', 'Education', 'Certifications'] }
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
            <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600">
                <div className="absolute inset-0 bg-black/10" />
                <div className="relative max-w-7xl mx-auto px-4 py-16 sm:py-24">
                    <div className="text-center">
                        <div className="flex justify-center mb-6">
                            <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
                                <Sparkles className="h-12 w-12 text-white" />
                            </div>
                        </div>
                        <h1 className="text-5xl font-bold text-white mb-4">
                            AI-Powered Resume Analysis
                        </h1>
                        <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                            Get instant, intelligent insights about your resume's match with your dream job.
                            Powered by advanced AI technology.
                        </p>
                        <div className="mt-8 flex justify-center space-x-8 text-blue-100">
                            <div className="flex items-center gap-2">
                                <Shield className="h-5 w-5" />
                                <span>Secure & Private</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Zap className="h-5 w-5" />
                                <span>Instant Analysis</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Target className="h-5 w-5" />
                                <span>Precision Matching</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
                        <CardHeader className="pb-4">
                            <CardTitle className="flex items-center gap-3 text-xl">
                                <div className="p-2 bg-blue-100 rounded-lg">
                                    <Upload className="h-6 w-6 text-blue-600" />
                                </div>
                                Upload Your Resume
                            </CardTitle>
                            <CardDescription className="text-base">
                                Support for multiple formats with intelligent parsing
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div
                                {...getRootProps()}
                                className={`border-2 border-dashed rounded-xl p-10 text-center cursor-pointer transition-all duration-300 ${isDragActive
                                    ? 'border-blue-500 bg-blue-50 scale-105'
                                    : uploadedFile
                                        ? 'border-green-500 bg-green-50'
                                        : 'border-gray-300 hover:border-blue-400 hover:bg-blue-50/50'
                                    }`}
                            >
                                <input {...getInputProps()} />
                                <div className="space-y-4">
                                    {uploadedFile ? (
                                        <CheckCircle className="h-16 w-16 mx-auto text-green-500" />
                                    ) : (
                                        <FileText className="h-16 w-16 mx-auto text-gray-400" />
                                    )}
                                    {uploadedFile ? (
                                        <div className="space-y-2">
                                            <p className="font-semibold text-green-700 text-lg">
                                                {uploadedFile.name}
                                            </p>
                                            <p className="text-sm text-gray-600">
                                                {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB • Ready for analysis
                                            </p>
                                            <Badge variant="outline" className="text-green-600 border-green-200">
                                                <CheckCircle className="h-3 w-3 mr-1" />
                                                File Uploaded
                                            </Badge>
                                        </div>
                                    ) : (
                                        <div className="space-y-2">
                                            <p className="text-gray-700 font-medium text-lg">
                                                Drop your resume here or click to browse
                                            </p>
                                            <p className="text-sm text-gray-500">
                                                PDF, DOCX, DOC, TXT • Max 10MB
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
                        <CardHeader className="pb-4">
                            <CardTitle className="flex items-center gap-3 text-xl">
                                <div className="p-2 bg-purple-100 rounded-lg">
                                    <Briefcase className="h-6 w-6 text-purple-600" />
                                </div>
                                Job Configuration
                            </CardTitle>
                            <CardDescription className="text-base">
                                Specify your target role for precise analysis
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="space-y-2">
                                <Label htmlFor="role" className="text-base font-medium">Target Job Role</Label>
                                <Popover open={open} onOpenChange={setOpen}>
                                    <PopoverTrigger asChild>
                                        <Button
                                            variant="outline"
                                            role="combobox"
                                            aria-expanded={open}
                                            className="w-full justify-between h-12 text-left font-normal"
                                        >
                                            {selectedRole || "Search and select a job role..."}
                                            <div className="flex items-center gap-2">
                                                <Search className="h-4 w-4 text-gray-400" />
                                                <ChevronDown className="h-4 w-4 text-gray-400" />
                                            </div>
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-full p-0">
                                        <Command>
                                            <CommandInput
                                                placeholder="Search job roles..."
                                                value={searchValue}
                                                onValueChange={setSearchValue}
                                            />
                                            <CommandEmpty>No role found.</CommandEmpty>
                                            <CommandGroup className="max-h-64 overflow-y-auto">
                                                {filteredRoles.map((role) => (
                                                    <CommandItem
                                                        key={role}
                                                        value={role}
                                                        onSelect={(currentValue) => {
                                                            setSelectedRole(currentValue === selectedRole ? "" : role)
                                                            setOpen(false)
                                                            setSearchValue('')
                                                        }}
                                                    >
                                                        <Check
                                                            className={`mr-2 h-4 w-4 ${selectedRole === role ? "opacity-100" : "opacity-0"
                                                                }`}
                                                        />
                                                        {role}
                                                    </CommandItem>
                                                ))}
                                            </CommandGroup>
                                        </Command>
                                    </PopoverContent>
                                </Popover>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="job-description" className="text-base font-medium">
                                    Job Description <span className="text-gray-500">(Optional)</span>
                                </Label>
                                <Textarea
                                    id="job-description"
                                    placeholder="Paste the job description here for more accurate analysis..."
                                    value={jobDescription}
                                    onChange={(e) => setJobDescription(e.target.value)}
                                    rows={5}
                                    className="resize-none"
                                />
                            </div>

                            <Button
                                onClick={handleAnalyze}
                                disabled={!uploadedFile || !selectedRole || isAnalyzing}
                                className="w-full h-12 text-base font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                            >
                                {isAnalyzing ? (
                                    <>
                                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3" />
                                        Analyzing Resume...
                                    </>
                                ) : (
                                    <>
                                        <TrendingUp className="h-5 w-5 mr-3" />
                                        Analyze Resume
                                    </>
                                )}
                            </Button>
                        </CardContent>
                    </Card>
                </div>

                {error && (
                    <Alert variant="destructive" className="border-red-200 bg-red-50">
                        <AlertCircle className="h-5 w-5" />
                        <AlertDescription className="text-base">{error}</AlertDescription>
                    </Alert>
                )}

                {analysisResult && resumeData && (
                    <div className="space-y-8">
                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                            <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-50 to-blue-100">
                                <CardContent className="p-6 text-center">
                                    <div className="space-y-2">
                                        <Star className="h-8 w-8 mx-auto text-blue-600" />
                                        <p className="text-sm font-medium text-blue-700">Overall Score</p>
                                        <p className="text-3xl font-bold text-blue-900">{analysisResult.overallScore}%</p>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="border-0 shadow-xl bg-gradient-to-br from-green-50 to-green-100">
                                <CardContent className="p-6 text-center">
                                    <div className="space-y-2">
                                        <Target className="h-8 w-8 mx-auto text-green-600" />
                                        <p className="text-sm font-medium text-green-700">Match Rate</p>
                                        <p className="text-3xl font-bold text-green-900">{analysisResult.matchPercentage}%</p>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="border-0 shadow-xl bg-gradient-to-br from-purple-50 to-purple-100">
                                <CardContent className="p-6 text-center">
                                    <div className="space-y-2">
                                        <CheckCircle className="h-8 w-8 mx-auto text-purple-600" />
                                        <p className="text-sm font-medium text-purple-700">Keywords Matched</p>
                                        <p className="text-3xl font-bold text-purple-900">{analysisResult.keywordMatches.length}</p>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className={`border-0 shadow-xl ${getRecommendationColor(analysisResult.recommendation)} text-white`}>
                                <CardContent className="p-6 text-center">
                                    <div className="space-y-2">
                                        <Award className="h-8 w-8 mx-auto" />
                                        <p className="text-sm font-medium opacity-90">Recommendation</p>
                                        <p className="text-xl font-bold">{getRecommendationText(analysisResult.recommendation)}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <Card className="border-0 shadow-xl">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <TrendingUp className="h-5 w-5" />
                                        Overall Performance
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="h-80">
                                        <Chart
                                            options={scoreChartOptions}
                                            series={[analysisResult.overallScore]}
                                            type="radialBar"
                                            height="100%"
                                        />
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="border-0 shadow-xl">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <Code className="h-5 w-5" />
                                        Skills Distribution
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="h-80">
                                        <Chart
                                            options={skillsDistributionOptions}
                                            series={
                                                skillsDistributionOptions.labels.map(category =>
                                                    resumeData.skills.filter(s => s.category === category).length
                                                )
                                            }
                                            type="donut"
                                            height="100%"
                                        />
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        <Card className="border-0 shadow-xl">
                            <CardHeader>
                                <CardTitle className="text-2xl">Comprehensive Analysis</CardTitle>
                                <CardDescription className="text-base">
                                    Detailed breakdown of your resume's strengths and areas for improvement
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Tabs defaultValue="overview" className="w-full">
                                    <TabsList className="grid w-full grid-cols-4 h-12">
                                        <TabsTrigger value="overview" className="text-sm">Overview</TabsTrigger>
                                        <TabsTrigger value="keywords" className="text-sm">Keywords</TabsTrigger>
                                        <TabsTrigger value="skills" className="text-sm">Skills</TabsTrigger>
                                        <TabsTrigger value="experience" className="text-sm">Experience</TabsTrigger>
                                    </TabsList>

                                    <TabsContent value="overview" className="mt-6 space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                            <div className="space-y-4">
                                                <h4 className="font-semibold text-green-700 text-lg flex items-center gap-2">
                                                    <CheckCircle className="h-5 w-5" />
                                                    Key Strengths
                                                </h4>
                                                <div className="space-y-3">
                                                    {analysisResult.strengths.map((strength, index) => (
                                                        <div key={index} className="flex items-start gap-3 p-4 bg-green-50 rounded-lg border border-green-200">
                                                            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                                                            <p className="text-gray-700 leading-relaxed">{strength}</p>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="space-y-4">
                                                <h4 className="font-semibold text-amber-700 text-lg flex items-center gap-2">
                                                    <AlertCircle className="h-5 w-5" />
                                                    Improvement Areas
                                                </h4>
                                                <div className="space-y-3">
                                                    {analysisResult.improvements.map((improvement, index) => (
                                                        <div key={index} className="flex items-start gap-3 p-4 bg-amber-50 rounded-lg border border-amber-200">
                                                            <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0" />
                                                            <p className="text-gray-700 leading-relaxed">{improvement}</p>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </TabsContent>

                                    <TabsContent value="keywords" className="mt-6 space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                            <div className="space-y-4">
                                                <h4 className="font-semibold text-green-700 text-lg">
                                                    Matched Keywords ({analysisResult.keywordMatches.length})
                                                </h4>
                                                <div className="flex flex-wrap gap-3">
                                                    {analysisResult.keywordMatches.map((keyword, index) => (
                                                        <Badge key={index} className="bg-green-100 text-green-800 border-green-300 px-3 py-1 text-sm">
                                                            <CheckCircle className="h-3 w-3 mr-1" />
                                                            {keyword}
                                                        </Badge>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="space-y-4">
                                                <h4 className="font-semibold text-red-700 text-lg">
                                                    Missing Keywords ({analysisResult.missingKeywords.length})
                                                </h4>
                                                <div className="flex flex-wrap gap-3">
                                                    {analysisResult.missingKeywords.map((keyword, index) => (
                                                        <Badge key={index} className="bg-red-100 text-red-800 border-red-300 px-3 py-1 text-sm">
                                                            <XCircle className="h-3 w-3 mr-1" />
                                                            {keyword}
                                                        </Badge>
                                                    ))}
                                                </div>
                                                <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                                                    <p className="text-sm text-blue-800">
                                                        <strong>Tip:</strong> Consider adding these keywords to your resume where relevant to improve your match score.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </TabsContent>

                                    <TabsContent value="skills" className="mt-6 space-y-6">
                                        <div className="space-y-6">
                                            <h4 className="font-semibold text-lg">Skills Assessment</h4>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                {Object.entries(
                                                    resumeData.skills.reduce((acc, skill) => {
                                                        if (!acc[skill.category]) acc[skill.category] = []
                                                        acc[skill.category].push(skill)
                                                        return acc
                                                    }, {} as Record<string, typeof resumeData.skills>)
                                                ).map(([category, skills]) => (
                                                    <div key={category} className="space-y-3">
                                                        <h5 className="font-medium text-gray-900 border-b pb-2">{category}</h5>
                                                        <div className="space-y-3">
                                                            {skills.map((skill, index) => (
                                                                <div key={index} className="space-y-2">
                                                                    <div className="flex justify-between items-center">
                                                                        <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                                                                        <span className="text-sm text-gray-500">{skill.level}%</span>
                                                                    </div>
                                                                    <Progress value={skill.level} className="h-2" />
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </TabsContent>

                                    <TabsContent value="experience" className="mt-6 space-y-6">
                                        <div className="space-y-6">
                                            <div className="flex items-center justify-between">
                                                <h4 className="font-semibold text-lg">Professional Experience</h4>
                                                <Badge variant="outline" className="text-blue-600 border-blue-300">
                                                    {resumeData.experience.reduce((total, exp) => total + exp.yearsOfExperience, 0)} years total
                                                </Badge>
                                            </div>
                                            <div className="space-y-4">
                                                {resumeData.experience.map((exp, index) => (
                                                    <Card key={index} className="border border-gray-200">
                                                        <CardContent className="p-6">
                                                            <div className="flex items-start justify-between mb-3">
                                                                <div>
                                                                    <h5 className="font-semibold text-lg text-gray-900">{exp.title}</h5>
                                                                    <p className="text-blue-600 font-medium">{exp.company}</p>
                                                                </div>
                                                                <Badge variant="secondary" className="flex items-center gap-1">
                                                                    <Calendar className="h-3 w-3" />
                                                                    {exp.duration}
                                                                </Badge>
                                                            </div>
                                                            <p className="text-gray-600 leading-relaxed">{exp.description}</p>
                                                        </CardContent>
                                                    </Card>
                                                ))}
                                            </div>
                                        </div>
                                    </TabsContent>
                                </Tabs>
                            </CardContent>
                        </Card>

                        <Card className="border-0 shadow-xl">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-3 text-2xl">
                                    <User className="h-6 w-6" />
                                    Resume Summary
                                </CardTitle>
                                <CardDescription className="text-base">
                                    Parsed information from your uploaded resume
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                                    <div className="space-y-6">
                                        <div className="space-y-4">
                                            <h4 className="font-semibold text-lg flex items-center gap-2 border-b pb-2">
                                                <User className="h-5 w-5" />
                                                Personal Information
                                            </h4>
                                            <div className="space-y-3">
                                                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                                                    <User className="h-4 w-4 text-gray-500 flex-shrink-0" />
                                                    <span className="text-sm text-gray-700">{resumeData.personalInfo.name}</span>
                                                </div>
                                                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                                                    <Mail className="h-4 w-4 text-gray-500 flex-shrink-0" />
                                                    <span className="text-sm text-gray-700">{resumeData.personalInfo.email}</span>
                                                </div>
                                                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                                                    <Phone className="h-4 w-4 text-gray-500 flex-shrink-0" />
                                                    <span className="text-sm text-gray-700">{resumeData.personalInfo.phone}</span>
                                                </div>
                                                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                                                    <MapPin className="h-4 w-4 text-gray-500 flex-shrink-0" />
                                                    <span className="text-sm text-gray-700">{resumeData.personalInfo.location}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-4">
                                            <h4 className="font-semibold text-lg flex items-center gap-2 border-b pb-2">
                                                <GraduationCap className="h-5 w-5" />
                                                Education
                                            </h4>
                                            <div className="space-y-3">
                                                {resumeData.education.map((edu, index) => (
                                                    <div key={index} className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                                                        <p className="font-semibold text-gray-900">{edu.degree}</p>
                                                        <p className="text-blue-600 font-medium">{edu.institution}</p>
                                                        <div className="flex items-center gap-2 mt-1">
                                                            <Calendar className="h-3 w-3 text-gray-500" />
                                                            <span className="text-sm text-gray-600">{edu.year}</span>
                                                            {edu.gpa && (
                                                                <>
                                                                    <span className="text-gray-400">•</span>
                                                                    <span className="text-sm text-gray-600">GPA: {edu.gpa}</span>
                                                                </>
                                                            )}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-6">
                                        <div className="space-y-4">
                                            <h4 className="font-semibold text-lg flex items-center gap-2 border-b pb-2">
                                                <Briefcase className="h-5 w-5" />
                                                Recent Experience
                                            </h4>
                                            <div className="space-y-3">
                                                {resumeData.experience.slice(0, 3).map((exp, index) => (
                                                    <div key={index} className="p-4 bg-green-50 rounded-lg border border-green-200">
                                                        <p className="font-semibold text-gray-900">{exp.title}</p>
                                                        <p className="text-green-600 font-medium">{exp.company}</p>
                                                        <div className="flex items-center gap-2 mt-1">
                                                            <Calendar className="h-3 w-3 text-gray-500" />
                                                            <span className="text-sm text-gray-600">{exp.duration}</span>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {resumeData.projects && resumeData.projects.length > 0 && (
                                            <div className="space-y-4">
                                                <h4 className="font-semibold text-lg flex items-center gap-2 border-b pb-2">
                                                    <Code className="h-5 w-5" />
                                                    Key Projects
                                                </h4>
                                                <div className="space-y-3">
                                                    {resumeData.projects.map((project, index) => (
                                                        <div key={index} className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                                                            <p className="font-semibold text-gray-900">{project.name}</p>
                                                            <p className="text-sm text-gray-600 mt-1">{project.description}</p>
                                                            <div className="flex flex-wrap gap-1 mt-2">
                                                                {project.technologies.map((tech, techIndex) => (
                                                                    <Badge key={techIndex} variant="outline" className="text-xs">
                                                                        {tech}
                                                                    </Badge>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    <div className="space-y-6">
                                        <div className="space-y-4">
                                            <h4 className="font-semibold text-lg flex items-center gap-2 border-b pb-2">
                                                <Code className="h-5 w-5" />
                                                Top Skills
                                            </h4>
                                            <div className="flex flex-wrap gap-2">
                                                {resumeData.skills
                                                    .sort((a, b) => b.level - a.level)
                                                    .slice(0, 10)
                                                    .map((skill, index) => (
                                                        <Badge key={index} variant="secondary" className="px-3 py-1">
                                                            {skill.name}
                                                            <span className="ml-1 text-xs opacity-70">({skill.level}%)</span>
                                                        </Badge>
                                                    ))}
                                            </div>
                                        </div>

                                        {resumeData.certifications.length > 0 && (
                                            <div className="space-y-4">
                                                <h4 className="font-semibold text-lg flex items-center gap-2 border-b pb-2">
                                                    <Award className="h-5 w-5" />
                                                    Certifications
                                                </h4>
                                                <div className="space-y-2">
                                                    {resumeData.certifications.map((cert, index) => (
                                                        <div key={index} className="flex items-center gap-2 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                                                            <Award className="h-4 w-4 text-yellow-600 flex-shrink-0" />
                                                            <span className="text-sm text-gray-700">{cert}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        <div className="space-y-4">
                                            <h4 className="font-semibold text-lg border-b pb-2">Summary</h4>
                                            <div className="p-4 bg-gray-50 rounded-lg">
                                                <p className="text-sm text-gray-700 leading-relaxed">{resumeData.summary}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                variant="outline"
                                className="h-12 px-8"
                                onClick={() => {
                                    setUploadedFile(null)
                                    setResumeData(null)
                                    setAnalysisResult(null)
                                    setSelectedRole('')
                                    setJobDescription('')
                                }}
                            >
                                <Upload className="h-5 w-5 mr-2" />
                                Analyze Another Resume
                            </Button>
                            <Button
                                className="h-12 px-8 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
                                onClick={() => window.print()}
                            >
                                <Download className="h-5 w-5 mr-2" />
                                Download Report
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Page