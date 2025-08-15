// "use client";

// import React, { useState } from 'react';
// import { Button } from '@/components/ui/button';
// import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
// import { Download, Loader2, File, FileText } from 'lucide-react';
// import jsPDF from 'jspdf';
// import { saveAs } from 'file-saver';
// import { Document, Packer, Paragraph } from 'docx';

// // --- TYPE DEFINITIONS ---
// interface PersonalInfo { name?: string; title?: string; email?: string; phone?: string; location?: string; website?: string; github?: string; linkedin?: string; }
// interface Experience { position?: string; company?: string; location?: string; startDate?: string; endDate?: string; achievements?: string[]; }
// interface Project { name?: string; technologies?: string[]; description?: string; link?: string; }
// interface Education { degree?: string; institution?: string; location?: string; graduationDate?: string; gpa?: string; }
// type ResumeData = { personalInfo?: PersonalInfo; summary?: string; experience?: Experience[]; projects?: Project[]; skills?: Record<string, string[]>; education?: Education[]; };

// interface DownloadButtonProps {
//     resumeData: ResumeData;
//     templateKey: string;
// }

// // --- PDF & DATA HELPERS ---
// const safeText = (text: string | undefined | null, fallback = ''): string => text ?? fallback;

// // --- PDF GENERATOR IMPLEMENTATIONS ---

// const generateOriginalPDF = (data: ResumeData): jsPDF => {
//     const doc = new jsPDF('p', 'pt', 'a4');
//     let y = 40; const m = 40; const w = doc.internal.pageSize.getWidth() - m * 2; const p = data.personalInfo ?? {};

//     const checkPageBreak = (yPos: number) => { if (yPos > doc.internal.pageSize.getHeight() - 60) { doc.addPage(); return 40; } return yPos; };

//     const renderSection = (title: string, contentFn: (y: number) => number) => {
//         const sectionData = data[title.toLowerCase() as keyof ResumeData];
//         if (!sectionData || (Array.isArray(sectionData) && sectionData.length === 0)) return;
//         y = checkPageBreak(y);
//         doc.setFont('helvetica', 'bold').setFontSize(12).setTextColor(0).text(title.toUpperCase(), m, y); y += 8;
//         doc.setDrawColor(220).setLineWidth(1).line(m, y, m + w, y); y += 18;
//         y = contentFn(y); y += 10;
//     };

//     doc.setFont('helvetica', 'bold').setFontSize(24).text(safeText(p.name), m, y); y += 24;
//     doc.setFont('helvetica', 'normal').setFontSize(14).setTextColor(100).text(safeText(p.title), m, y); y += 20;
//     doc.setFontSize(9).setTextColor(50).text([p.email, p.phone, p.location].filter(Boolean).join('  •  '), m, y); y += 15;
//     if (p.website || p.linkedin || p.github) doc.setFontSize(9).setTextColor(0, 102, 204).textWithLink(safeText(p.website || p.linkedin || p.github), m, y, {}); y += 10;

//     renderSection("Summary", (y) => { const lines = doc.splitTextToSize(safeText(data.summary), w); doc.text(lines, m, y); return y + lines.length * 12; });
//     renderSection("Experience", (y) => { data.experience?.forEach(exp => { y = checkPageBreak(y); doc.setFont('helvetica', 'bold').setFontSize(11).text(safeText(exp.position), m, y); doc.setFont('helvetica', 'normal').text(`${safeText(exp.startDate)} - ${safeText(exp.endDate)}`, m + w, y, { align: 'right' }); y += 14; doc.setFont('helvetica', 'italic').setFontSize(10).setTextColor(100).text(`${safeText(exp.company)} | ${safeText(exp.location)}`, m, y); y += 16; exp.achievements?.forEach(ach => { const lines = doc.splitTextToSize(`• ${safeText(ach)}`, w - 10); y = checkPageBreak(y); doc.text(lines, m + 5, y); y += lines.length * 12; }); y += 5; }); return y; });
//     renderSection("Skills", (y) => { Object.entries(data.skills ?? {}).forEach(([cat, skills]) => { y = checkPageBreak(y); doc.setFont('helvetica', 'bold').setFontSize(10).text(`${cat}:`, m, y); const lines = doc.splitTextToSize(skills.join(', '), w - doc.getTextWidth(`${cat}: `) - 5); doc.text(lines, m + doc.getTextWidth(`${cat}: `) + 5, y); y += lines.length * 12 + 5; }); return y; });
//     renderSection("Projects", (y) => { data.projects?.forEach(proj => { y = checkPageBreak(y); doc.setFont('helvetica', 'bold').setFontSize(11).text(safeText(proj.name), m, y); if (proj.link) doc.setFont('helvetica', 'normal').setFontSize(9).setTextColor(0, 102, 204).textWithLink(safeText(proj.link), m + w, y, { url: safeText(proj.link), align: 'right' }); y += 14; const lines = doc.splitTextToSize(safeText(proj.description), w); doc.text(lines, m, y); y += lines.length * 12 + 5; }); return y; });
//     renderSection("Education", (y) => { data.education?.forEach(edu => { y = checkPageBreak(y); doc.setFont('helvetica', 'bold').setFontSize(11).text(safeText(edu.degree), m, y); doc.setFont('helvetica', 'normal').text(safeText(edu.graduationDate), m + w, y, { align: 'right' }); y += 14; doc.setFont('helvetica', 'italic').setFontSize(10).setTextColor(100).text(safeText(edu.institution), m, y); y += 14; }); return y; });
//     return doc;
// };

// const generateClassicPDF = (data: ResumeData): jsPDF => {
//     const doc = new jsPDF('p', 'pt', 'a4');
//     let yMain = 40, ySidebar = 120;
//     const m = 40, sidebarWidth = 150, mainWidth = doc.internal.pageSize.getWidth() - m * 3 - sidebarWidth, sidebarX = m + mainWidth + m;
//     const p = data.personalInfo ?? {};

//     const checkPageBreak = (yPos: number) => { if (yPos > doc.internal.pageSize.getHeight() - 60) { doc.addPage(); return 40; } return yPos; };

//     doc.setFillColor(245, 245, 245).rect(sidebarX - 10, 0, sidebarWidth + 20, doc.internal.pageSize.getHeight(), 'F');
//     doc.setFont('helvetica', 'bold').setFontSize(28).setTextColor(0).text(safeText(p.name), m, yMain); yMain += 28;
//     doc.setFont('helvetica', 'normal').setFontSize(16).setTextColor(80).text(safeText(p.title), m, yMain); yMain += 30;

//     const addSidebarSection = (title: string, contentFn: (y: number) => number) => { doc.setFont('helvetica', 'bold').setFontSize(11).setTextColor(0).text(title.toUpperCase(), sidebarX, ySidebar); ySidebar = contentFn(ySidebar + 15); ySidebar += 20; };
//     const addMainSection = (title: string, contentFn: (y: number) => number) => { yMain = checkPageBreak(yMain); doc.setFont('helvetica', 'bold').setFontSize(14).setTextColor(0).text(title.toUpperCase(), m, yMain); yMain += 8; doc.setDrawColor(200).setLineWidth(1).line(m, yMain, m + mainWidth, yMain); yMain += 20; yMain = contentFn(yMain); yMain += 10; };

//     addSidebarSection("Contact", (y) => { [p.email, p.phone, p.location, p.website, p.linkedin].filter(Boolean).forEach(item => { const lines = doc.splitTextToSize(safeText(item), sidebarWidth); doc.text(lines, sidebarX, y); y += lines.length * 11 + 5; }); return y; });
//     if (data.skills) addSidebarSection("Skills", (y) => { Object.entries(data.skills ?? {}).forEach(([cat, skills]) => { doc.setFont('helvetica', 'bold').setFontSize(10).text(cat, sidebarX, y); y += 12; const lines = doc.splitTextToSize(skills.join(', '), sidebarWidth); doc.text(lines, sidebarX, y); y += lines.length * 11 + 5; }); return y; });
//     if (data.education) addSidebarSection("Education", (y) => { data.education?.forEach(edu => { doc.setFont('helvetica', 'bold').setFontSize(10).text(safeText(edu.degree), sidebarX, y); y += 12; doc.setFont('helvetica', 'normal').setFontSize(9).text(safeText(edu.institution), sidebarX, y); y += 11; doc.setTextColor(100).text(safeText(edu.graduationDate), sidebarX, y); y += 20; }); return y; });

//     if (data.summary) addMainSection("Summary", (y) => { const lines = doc.splitTextToSize(safeText(data.summary), mainWidth); doc.text(lines, m, y); return y + lines.length * 12; });
//     if (data.experience) addMainSection("Experience", (y) => { data.experience?.forEach(exp => { y = checkPageBreak(y); doc.setFont('helvetica', 'bold').setFontSize(11).text(safeText(exp.position), m, y); doc.setFont('helvetica', 'normal').text(`${safeText(exp.startDate)} - ${safeText(exp.endDate)}`, m + mainWidth, y, { align: 'right' }); y += 14; doc.setFont('helvetica', 'italic').setFontSize(10).setTextColor(100).text(`${safeText(exp.company)} | ${safeText(exp.location)}`, m, y); y += 16; exp.achievements?.forEach(ach => { const lines = doc.splitTextToSize(`• ${safeText(ach)}`, mainWidth - 10); y = checkPageBreak(y); doc.text(lines, m + 5, y); y += lines.length * 12; }); y += 5; }); return y; });
//     return doc;
// };

// const generateModernPDF = (data: ResumeData): jsPDF => {
//     const doc = new jsPDF('p', 'pt', 'a4');
//     let y = 60; const m = 60; const w = doc.internal.pageSize.getWidth() - m * 2; const p = data.personalInfo ?? {};

//     const checkPageBreak = (yPos: number) => { if (yPos > doc.internal.pageSize.getHeight() - 60) { doc.addPage(); return 40; } return yPos; };

//     doc.setFont('helvetica', 'bold').setFontSize(26).text(safeText(p.name), m, y);
//     doc.setFont('helvetica', 'normal').setFontSize(9).text([p.email, p.phone, p.location].filter(Boolean).join(' / '), doc.internal.pageSize.getWidth() - m, y, { align: 'right' });
//     y += 26;
//     doc.setFont('helvetica', 'normal').setFontSize(14).setTextColor(150).text(safeText(p.title), m, y); y += 40;

//     const render = (title: string, fn: (y: number) => number) => { if (data[title.toLowerCase() as keyof ResumeData]) { y = checkPageBreak(y); doc.setFont('helvetica', 'bold').setFontSize(10).setTextColor(150).text(title.toUpperCase(), m, y); y += 20; y = fn(y); y += 15; } };
//     render("Experience", (y) => { data.experience?.forEach(exp => { y = checkPageBreak(y); doc.setFont('helvetica', 'bold').setFontSize(11).text(safeText(exp.position), m, y); y += 14; doc.setFont('helvetica', 'italic').setFontSize(10).setTextColor(150).text(`${safeText(exp.company)} | ${safeText(exp.startDate)} - ${safeText(exp.endDate)}`, m, y); y += 16; }); return y; });
//     return doc;
// };

// const generateCorporatePDF = (data: ResumeData): jsPDF => {
//     const doc = new jsPDF('p', 'pt', 'a4');
//     let y = 110; const m = 40; const w = doc.internal.pageSize.getWidth() - m * 2; const p = data.personalInfo ?? {};
//     const corporateBlue = [34, 49, 63];

//     const checkPageBreak = (yPos: number) => { if (yPos > doc.internal.pageSize.getHeight() - 60) { doc.addPage(); return 40; } return yPos; };

//     doc.setFillColor(corporateBlue[0], corporateBlue[1], corporateBlue[2]).rect(0, 0, doc.internal.pageSize.getWidth(), 80, 'F');
//     doc.setFont('helvetica', 'bold').setFontSize(24).setTextColor(255).text(safeText(p.name), m, 45);
//     doc.setFont('helvetica', 'normal').setFontSize(14).text(safeText(p.title), m, 65);

//     const render = (title: string, fn: (y: number) => number) => { if (data[title.toLowerCase() as keyof ResumeData]) { y = checkPageBreak(y); doc.setFont('helvetica', 'bold').setFontSize(12).setTextColor(corporateBlue[0], corporateBlue[1], corporateBlue[2]).text(title.toUpperCase(), m, y); y += 20; y = fn(y); y += 15; } };
//     render("Experience", (y) => { data.experience?.forEach(exp => { y = checkPageBreak(y); doc.setFont('helvetica', 'bold').setFontSize(11).text(safeText(exp.position), m, y); y += 14; }); return y; });
//     return doc;
// };

// const generateCreativePDF = (data: ResumeData): jsPDF => {
//     const doc = new jsPDF('p', 'pt', 'a4');
//     let y = 60; const m = 40; const timelineX = 80; const contentX = 100;
//     const p = data.personalInfo ?? {};

//     const checkPageBreak = (yPos: number) => { if (yPos > doc.internal.pageSize.getHeight() - 60) { doc.addPage(); doc.setDrawColor(220).setLineWidth(1.5).line(timelineX, 40, timelineX, doc.internal.pageSize.getHeight() - 40); return 40; } return yPos; };

//     doc.setFont('helvetica', 'bold').setFontSize(26).text(safeText(p.name), doc.internal.pageSize.getWidth() / 2, y, { align: 'center' }); y += 26;
//     doc.setFont('helvetica', 'normal').setFontSize(14).text(safeText(p.title), doc.internal.pageSize.getWidth() / 2, y, { align: 'center' }); y += 40;

//     doc.setDrawColor(220).setLineWidth(1.5).line(timelineX, y, timelineX, doc.internal.pageSize.getHeight() - 40);

//     const addTimelineEvent = (title: string, subtitle: string, date: string, details?: string[]) => {
//         y = checkPageBreak(y + 20);
//         doc.setFillColor(34, 49, 63).circle(timelineX, y, 5, 'F');
//         doc.setFont('helvetica', 'bold').setFontSize(11).text(title, contentX, y + 4);
//         doc.setFont('helvetica', 'normal').setFontSize(9).setTextColor(150).text(date, doc.internal.pageSize.getWidth() - m, y + 4, { align: 'right' });
//         y += 14; doc.setFont('helvetica', 'italic').setFontSize(10).text(subtitle, contentX, y + 4); y += 16;
//         details?.forEach(d => { const lines = doc.splitTextToSize(`• ${d}`, doc.internal.pageSize.getWidth() - contentX - m); y = checkPageBreak(y); doc.text(lines, contentX, y); y += lines.length * 12; });
//         y += 15;
//     };
//     if (data.experience) data.experience.forEach(exp => addTimelineEvent(safeText(exp.position), `${safeText(exp.company)}, ${safeText(exp.location)}`, `${safeText(exp.startDate)} - ${safeText(exp.endDate)}`, exp.achievements));
//     if (data.education) data.education.forEach(edu => addTimelineEvent(safeText(edu.degree), safeText(edu.institution), safeText(edu.graduationDate)));
//     return doc;
// };

// const generateExecutivePDF = (data: ResumeData): jsPDF => {
//     const doc = new jsPDF('p', 'pt', 'a4');
//     let y = 40; const m = 40; const w = doc.internal.pageSize.getWidth() - m * 2; const p = data.personalInfo ?? {};

//     const checkPageBreak = (yPos: number) => { if (yPos > doc.internal.pageSize.getHeight() - 60) { doc.addPage(); return 40; } return yPos; };

//     doc.setFont('helvetica', 'bold').setFontSize(28).text(safeText(p.name).toUpperCase(), doc.internal.pageSize.getWidth() / 2, y, { align: 'center' }); y += 28;
//     doc.setFont('helvetica', 'normal').setFontSize(11).text([p.location, p.phone, p.email, p.linkedin].filter(Boolean).join(' | '), doc.internal.pageSize.getWidth() / 2, y, { align: 'center' }); y += 25;

//     const renderSection = (title: string, contentFn: (y: number) => number) => { if (data[title.toLowerCase() as keyof ResumeData]) { y = checkPageBreak(y); doc.setFont('helvetica', 'bold').setFontSize(12).text(title.toUpperCase(), m, y); y += 8; doc.setDrawColor(220).setLineWidth(1).line(m, y, m + w, y); y += 18; y = contentFn(y); y += 10; } };
//     renderSection("Experience", (y) => { data.experience?.forEach(exp => { y = checkPageBreak(y); doc.setFont('helvetica', 'bold').setFontSize(11).text(safeText(exp.position), m, y); y += 14; }); return y; });
//     return doc;
// };


// // --- DISPATCHER & COMPONENT ---
// const pdfGenerators: { [key: string]: (data: ResumeData) => jsPDF } = {
//     'original': generateOriginalPDF,
//     'classic': generateClassicPDF,
//     'modern': generateModernPDF,
//     'corporate': generateCorporatePDF,
//     'creative': generateCreativePDF,
//     'executive': generateExecutivePDF,
// };

// const generateTxt = (data: ResumeData): string => JSON.stringify(data, null, 2);
// const generateDocx = async (data: ResumeData): Promise<Blob> => Packer.toBlob(new Document({ sections: [{ children: [new Paragraph("Word resume...")] }] }));

// export function DownloadButton({ resumeData, templateKey }: DownloadButtonProps) {
//     const [isGenerating, setIsGenerating] = useState(false);

//     const handleDownload = async (format: 'pdf' | 'docx' | 'txt') => {
//         if (isGenerating || !resumeData.personalInfo) return;
//         setIsGenerating(true);
//         const fileName = `Resume-${safeText(resumeData.personalInfo.name, 'Resume').replace(/ /g, '_')}`;
//         await new Promise(resolve => setTimeout(resolve, 50));

//         try {
//             if (format === 'pdf') {
//                 const generatePdf = pdfGenerators[templateKey] || pdfGenerators['original'];
//                 const doc = generatePdf(resumeData);
//                 doc.save(`${fileName}.pdf`);
//             }
//             else if (format === 'docx') { const blob = await generateDocx(resumeData); saveAs(blob, `${fileName}.docx`); }
//             else if (format === 'txt') { const content = generateTxt(resumeData); const blob = new Blob([content], { type: 'text/plain;charset=utf-8' }); saveAs(blob, `${fileName}.txt`); }
//         } catch (error) { console.error("Failed to generate file:", error); }
//         finally { setIsGenerating(false); }
//     };

//     return (
//         <DropdownMenu>
//             <DropdownMenuTrigger asChild>
//                 <Button size="sm" variant={"default"} className="flex items-center gap-2" disabled={isGenerating}>
//                     {isGenerating ? <Loader2 className="h-4 w-4 animate-spin" /> : <Download className="h-4 w-4" />}
//                     {isGenerating ? 'Generating...' : 'Download'}
//                 </Button>
//             </DropdownMenuTrigger>
//             <DropdownMenuContent align="end">
//                 <DropdownMenuItem onClick={() => handleDownload('pdf')} disabled={isGenerating}><File className="h-4 w-4 mr-2" /> PDF Document</DropdownMenuItem>
//                 <DropdownMenuItem onClick={() => handleDownload('docx')} disabled={isGenerating}><FileText className="h-4 w-4 mr-2" /> Word Document (.docx)</DropdownMenuItem>
//                 <DropdownMenuItem onClick={() => handleDownload('txt')} disabled={isGenerating}><FileText className="h-4 w-4 mr-2" /> Plain Text (.txt)</DropdownMenuItem>
//             </DropdownMenuContent>
//         </DropdownMenu>
//     );
// }


"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Download, Loader2, File, FileText } from 'lucide-react';
import { saveAs } from 'file-saver';
import { Document, Packer, Paragraph, TextRun, HeadingLevel } from 'docx';

// TYPES (Remain the same)
interface PersonalInfo {
    name: string;
    title: string;
    email: string;
    phone: string;
    location?: string;
    website?: string;
    linkedin?: string;
    github?: string;
}

interface Experience {
    position: string;
    company: string;
    location?: string;
    period: string;
    achievements: string[];
}

interface Education {
    degree: string;
    school: string;
    location?: string;
    year: string;
    gpa?: string;
}

interface Project {
    title: string;
    period: string;
    description: string;
    technologies: string[];
    link?: string;
}

interface ResumeData {
    personalInfo: PersonalInfo;
    summary: string;
    experience: Experience[];
    education: Education[];
    skills: Record<string, string[]>;
    projects: Project[];
}

// PROPS (Updated: targetRef is removed, templateKey is added)
interface DownloadButtonProps {
    resumeData: ResumeData;
    templateKey: string;
}

// DOCX and TXT generators (Remain the same)
const generateTxt = (data: ResumeData): string => {
    const { personalInfo, summary, experience, education, skills, projects } = data;
    let content = '';

    content += `${personalInfo.name}\n`;
    content += `${personalInfo.title}\n`;
    content += `Contact: ${personalInfo.email} | ${personalInfo.phone} | ${personalInfo.location || ''}\n`;
    const links = [personalInfo.website, personalInfo.linkedin, personalInfo.github].filter(Boolean).join(' | ');
    if (links) content += `Links: ${links}\n`;
    content += '\n';

    if (summary) {
        content += '--- SUMMARY ---\n';
        content += `${summary}\n\n`;
    }

    if (experience?.length > 0) {
        content += '--- EXPERIENCE ---\n';
        experience.forEach(exp => {
            content += `${exp.position} at ${exp.company} (${exp.period})\n`;
            exp.achievements.forEach(ach => content += `- ${ach}\n`);
            content += '\n';
        });
    }

    if (projects?.length > 0) {
        content += '--- PROJECTS ---\n';
        projects.forEach(proj => {
            content += `${proj.title} (${proj.period})\n`;
            content += `${proj.description}\n`;
            content += `Technologies: ${proj.technologies.join(', ')}\n\n`;
        });
    }

    if (skills && Object.keys(skills).length > 0) {
        content += '--- SKILLS ---\n';
        Object.entries(skills).forEach(([category, skillList]) => {
            content += `${category}: ${skillList.join(', ')}\n`;
        });
        content += '\n';
    }

    if (education?.length > 0) {
        content += '--- EDUCATION ---\n';
        education.forEach(edu => {
            content += `${edu.degree}, ${edu.school} (${edu.year})\n`;
            if (edu.gpa) content += `GPA: ${edu.gpa}\n`;
            content += '\n';
        });
    }

    return content;
};

const generateDocx = async (data: ResumeData): Promise<Blob> => {
    const { personalInfo, summary, experience, education, skills, projects } = data;
    const docChildren: Paragraph[] = [];

    docChildren.push(new Paragraph({ text: personalInfo.name, heading: HeadingLevel.TITLE }));
    docChildren.push(new Paragraph({ text: personalInfo.title, heading: HeadingLevel.HEADING_2, spacing: { after: 200 } }));
    docChildren.push(new Paragraph(`${personalInfo.email} | ${personalInfo.phone} | ${personalInfo.location || ''}`));
    const links = [personalInfo.website, personalInfo.linkedin, personalInfo.github].filter(Boolean).join(' | ');
    if (links) {
        docChildren.push(new Paragraph(links));
    }
    docChildren.push(new Paragraph(""));

    if (summary) {
        docChildren.push(new Paragraph({ text: "Summary", heading: HeadingLevel.HEADING_1, border: { bottom: { color: "auto", space: 1, value: "single", size: 6 } }, spacing: { after: 100 } }));
        docChildren.push(new Paragraph(summary));
        docChildren.push(new Paragraph(""));
    }

    if (experience?.length > 0) {
        docChildren.push(new Paragraph({ text: "Experience", heading: HeadingLevel.HEADING_1, border: { bottom: { color: "auto", space: 1, value: "single", size: 6 } }, spacing: { after: 100 } }));
        experience.forEach(exp => {
            docChildren.push(new Paragraph({ children: [new TextRun({ text: exp.position, bold: true }), new TextRun(` at ${exp.company}`)] }));
            docChildren.push(new Paragraph({ children: [new TextRun({ text: exp.period, italics: true, color: "595959" })] }));
            exp.achievements.forEach(ach => docChildren.push(new Paragraph({ text: ach, bullet: { level: 0 } })));
            docChildren.push(new Paragraph(""));
        });
    }

    if (skills && Object.keys(skills).length > 0) {
        docChildren.push(new Paragraph({ text: "Skills", heading: HeadingLevel.HEADING_1, border: { bottom: { color: "auto", space: 1, value: "single", size: 6 } }, spacing: { after: 100 } }));
        Object.entries(skills).forEach(([category, skillList]) => {
            docChildren.push(new Paragraph({ children: [new TextRun({ text: `${category}: `, bold: true }), new TextRun(skillList.join(', '))] }));
        });
        docChildren.push(new Paragraph(""));
    }

    const doc = new Document({ sections: [{ children: docChildren }] });
    return Packer.toBlob(doc);
};


// MAIN COMPONENT (Updated with new PDF logic)
export function DownloadButton({ resumeData, templateKey }: DownloadButtonProps) {
    const [isGenerating, setIsGenerating] = useState(false);
    const safeName = resumeData?.personalInfo?.name?.replace(/ /g, '_') || "Resume";

    const handleDownload = async (format: 'pdf' | 'docx' | 'txt') => {
        if (isGenerating || !resumeData.personalInfo) return;

        setIsGenerating(true);
        await new Promise(resolve => setTimeout(resolve, 50));

        try {
            if (format === 'pdf') {
                const response = await fetch('/api/generate-pdf', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ resumeData, templateKey }),
                });

                if (!response.ok) {
                    const errorText = await response.text();
                    throw new Error(`PDF generation failed: ${errorText}`);
                }

                const blob = await response.blob();
                saveAs(blob, `${safeName}.pdf`);

            } else if (format === 'docx') {
                const blob = await generateDocx(resumeData);
                saveAs(blob, `${safeName}.docx`);
            } else if (format === 'txt') {
                const content = generateTxt(resumeData);
                const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
                saveAs(blob, `${safeName}.txt`);
            }
        } catch (error) {
            console.error("Failed to generate file:", error);
        } finally {
            setIsGenerating(false);
        }
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button size="sm" variant={"default"} className="flex items-center gap-2" disabled={isGenerating}>
                    {isGenerating ? <Loader2 className="h-4 w-4 animate-spin" /> : <Download className="h-4 w-4" />}
                    {isGenerating ? 'Generating...' : 'Download'}
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => handleDownload('pdf')} disabled={isGenerating}>
                    <File className="h-4 w-4 mr-2" /> PDF (High-Fidelity)
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleDownload('docx')} disabled={isGenerating}>
                    <FileText className="h-4 w-4 mr-2" /> Word (ATS-Friendly)
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleDownload('txt')} disabled={isGenerating}>
                    <FileText className="h-4 w-4 mr-2" /> Plain Text (ATS-Friendly)
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}