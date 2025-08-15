'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Download, Copy, Check } from 'lucide-react';
import { jsPDF } from 'jspdf';

interface DownloadButtonsProps {
    optimizedText: string;
}

export function DownloadButtons({ optimizedText }: DownloadButtonsProps) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(optimizedText).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
        });
    };

    const handleDownloadPdf = () => {
        const doc = new jsPDF();
        // Split text into lines that fit the PDF width
        const splitText = doc.splitTextToSize(optimizedText, 180);
        doc.text(splitText, 10, 10);
        doc.save('optimized-resume.pdf');
    };

    return (
        <div className="flex items-center gap-2">
            <Button variant="outline" onClick={handleCopy}>
                {copied ? (
                    <>
                        <Check className="h-4 w-4 mr-2 text-green-500" /> Copied!
                    </>
                ) : (
                    <>
                        <Copy className="h-4 w-4 mr-2" /> Copy Text
                    </>
                )}
            </Button>
            <Button onClick={handleDownloadPdf}>
                <Download className="h-4 w-4 mr-2" /> Download PDF
            </Button>
        </div>
    );
}