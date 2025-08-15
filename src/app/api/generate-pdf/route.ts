// src/app/api/generate-pdf/route.ts

import { NextRequest, NextResponse } from 'next/server';
import React from 'react';
import fs from 'fs/promises';
import path from 'path';

// UPDATED: Import the serverless-friendly packages
import chromium from '@sparticuz/chromium';
import puppeteer from 'puppeteer-core';

// Your server-only templates import remains the same
import {
    ClassicProfessionalTemplate_ForServer,
    CorporateCleanTemplate_ForServer,
    CreativeTimelineTemplate_ForServer,
    ExecutiveSummaryTemplate_ForServer,
    ModernMinimalTemplate_ForServer,
} from './templates';

// Type definitions remain the same
interface ResumeData {
    [key: string]: any;
}

const templateMap: Record<string, React.FC<{ data: ResumeData }>> = {
    'classic': ClassicProfessionalTemplate_ForServer,
    'corporate': CorporateCleanTemplate_ForServer,
    'creative': CreativeTimelineTemplate_ForServer,
    'executive': ExecutiveSummaryTemplate_ForServer,
    'modern': ModernMinimalTemplate_ForServer,
};

export async function POST(req: NextRequest) {
    let browser;
    try {
        const ReactDOMServer = (await import('react-dom/server')).default;
        const { resumeData, templateKey } = await req.json();

        if (!resumeData || !templateKey) {
            return new NextResponse('Missing resumeData or templateKey', { status: 400 });
        }

        const ResumeComponent = templateMap[templateKey];
        if (!ResumeComponent) {
            return new NextResponse(`Template with key "${templateKey}" not found`, { status: 400 });
        }

        const componentHtml = ReactDOMServer.renderToString(
            React.createElement(ResumeComponent, { data: resumeData })
        );

        const cssFilePath = path.join(process.cwd(), 'src/app/globals.css');
        const css = await fs.readFile(cssFilePath, 'utf-8');

        const fullHtml = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <style>${css}</style>
            </head>
            <body>
                ${componentHtml}
            </body>
            </html>
        `;

        // UPDATED: This is the new way to launch Puppeteer in a serverless environment
        browser = await puppeteer.launch({
            args: chromium.args,
            defaultViewport: chromium.defaultViewport,
            executablePath: await chromium.executablePath(),
            headless: chromium.headless,
            ignoreHTTPSErrors: true,
        });

        const page = await browser.newPage();
        await page.setContent(fullHtml, { waitUntil: 'networkidle0' });
        const pdfBuffer = await page.pdf({
            format: 'A4',
            printBackground: true,
            margin: { top: '0px', right: '0px', bottom: '0px', left: '0px' }
        });

        return new NextResponse(pdfBuffer, {
            status: 200,
            headers: {
                'Content-Type': 'application/pdf',
                'Content-Disposition': 'attachment; filename="resume.pdf"',
            },
        });

    } catch (error) {
        console.error('Error generating PDF:', error);
        return new NextResponse('Failed to generate PDF', { status: 500 });
    } finally {
        if (browser) {
            await browser.close();
        }
    }
}