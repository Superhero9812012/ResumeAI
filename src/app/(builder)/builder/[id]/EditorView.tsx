'use client';

import { Card, CardContent } from '@/components/ui/card';

interface EditorViewProps {
    text: string;
}

// This component displays the AI-generated text.
// It could be extended into a full text editor in the future.
export function EditorView({ text }: EditorViewProps) {
    return (
        <Card>
            <CardContent className="p-6">
                <div
                    className="prose dark:prose-invert max-w-none text-base leading-relaxed whitespace-pre-wrap"
                >
                    {text}
                </div>
            </CardContent>
        </Card>
    );
}