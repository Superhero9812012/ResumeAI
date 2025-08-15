'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useDropzone } from 'react-dropzone';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
    UploadCloud,
    File as FileIcon,
    FileText,
    X,
    Loader2,
    BrainCircuit,
    CheckCircle,
    AlertCircle,
    Zap,
    ArrowRight,
    ArrowLeft,
    Check
} from 'lucide-react';
import { colors } from '@/components/Global/colors';
import { SearchableRoleSelect } from './SearchableRoleSelect';

interface Step {
    id: number;
    title: string;
    description: string;
    completed: boolean;
}

// This is the self-contained form component with all the logic.
export function UploadForm() {
    const [currentStep, setCurrentStep] = useState(1);
    const [file, setFile] = useState<File | null>(null);
    const [role, setRole] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const router = useRouter();

    const steps: Step[] = [
        { id: 1, title: "Upload Resume", description: "Upload your current resume", completed: !!file },
        { id: 2, title: "Target Role", description: "Choose your desired job", completed: !!role.trim() },
        { id: 3, title: "Generate", description: "AI optimization", completed: false }
    ];

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop: (acceptedFiles) => {
            if (acceptedFiles[0]) {
                setFile(acceptedFiles[0]);
                setError('');
            }
        },
        accept: {
            'application/pdf': ['.pdf'],
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
            'application/msword': ['.doc'],
            'text/plain': ['.txt'],
        },
        multiple: false,
        maxSize: 10 * 1024 * 1024, // 10MB
        onDropRejected: (rejectedFiles) => {
            const rejection = rejectedFiles[0]?.errors[0];
            if (rejection?.code === 'file-too-large') {
                setError('File size must be less than 10MB.');
            } else if (rejection?.code === 'file-invalid-type') {
                setError('Please upload a PDF, DOC, DOCX, or TXT file.');
            } else {
                setError('Invalid file. Please try again.');
            }
        }
    });

    const formatFileSize = (bytes: number): string => {
        if (bytes === 0) return '0 B';
        const k = 1024;
        const sizes = ['B', 'KB', 'MB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
    };

    const getFileIcon = (type: string) => {
        if (type === 'application/pdf') return <FileText className="h-8 w-8" style={{ color: colors.error }} />;
        if (type.includes('word')) return <FileIcon className="h-8 w-8" style={{ color: colors.primary }} />;
        if (type === 'text/plain') return <FileText className="h-8 w-8" style={{ color: colors.success }} />;
        return <FileIcon className="h-8 w-8" style={{ color: colors.neutral }} />;
    };

    const canProceedToNext = () => {
        switch (currentStep) {
            case 1: return !!file;
            case 2: return !!role.trim();
            case 3: return true;
            default: return false;
        }
    };

    const handleNext = () => {
        if (canProceedToNext() && currentStep < 3) {
            setCurrentStep(currentStep + 1);
            setError('');
        }
    };

    const handlePrevious = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
            setError('');
        }
    };

    const handleSubmit = async () => {
        if (!file || !role.trim()) {
            setError('Please complete all steps before generating.');
            return;
        }

        setIsLoading(true);
        setError('');

        const formData = new FormData();
        formData.append('file', file);
        formData.append('role', role);

        try {
            const res = await fetch('/api/optimize', {
                method: 'POST',
                body: formData,
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || 'An unexpected error occurred.');
            }

            // *** CRITICAL UPDATE ***
            // On success, redirect to the template selection page with the new job ID.
            router.push(`/select-template/${data.jobId}`);

        } catch (err: any) {
            setError(err.message);
            setIsLoading(false);
        }
    };

    return (
        <div className="space-y-8">
            {/* Progress Steps */}
            <div className="flex items-center justify-between relative">
                {steps.map((step, index) => (
                    <div key={step.id} className="flex items-center flex-1">
                        <div className="flex flex-col items-center">
                            <div
                                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${step.completed ? 'text-white shadow-lg' : currentStep === step.id ? 'text-white shadow-lg' : 'border-2'}`}
                                style={{
                                    backgroundColor: step.completed || currentStep === step.id ? colors.primary : 'transparent',
                                    borderColor: step.completed || currentStep === step.id ? colors.primary : colors.secondaryDark,
                                    color: step.completed || currentStep === step.id ? colors.lightBg : colors.neutral
                                }}
                            >
                                {step.completed ? <Check className="h-5 w-5" /> : step.id}
                            </div>
                            <div className="text-center mt-2">
                                <p className={`text-sm font-semibold ${currentStep === step.id ? 'font-bold' : ''}`} style={{ color: step.completed || currentStep === step.id ? colors.primary : colors.neutral }}>{step.title}</p>
                                <p className="text-xs" style={{ color: colors.neutral }}>{step.description}</p>
                            </div>
                        </div>
                        {index < steps.length - 1 && (
                            <div className="flex-1 h-0.5 mx-4 transition-all duration-300" style={{ backgroundColor: step.completed ? colors.primary : colors.secondaryDark }} />
                        )}
                    </div>
                ))}
            </div>

            {/* Step Content */}
            <div className="min-h-[300px] !mb-0">
                {currentStep === 1 && (
                    <div className="space-y-6">
                        <div
                            {...getRootProps()}
                            className={`relative flex flex-col items-center justify-center p-12 border-2 border-dashed rounded-xl cursor-pointer transition-all duration-300 ${isDragActive ? 'scale-105' : ''}`}
                            style={{ borderColor: isDragActive ? colors.primary : file ? colors.success : colors.secondaryDark, backgroundColor: isDragActive ? colors.primaryOpacity(0.1) : file ? colors.successOpacity(0.05) : colors.secondaryOpacity(0.3) }}
                        >
                            <input {...getInputProps()} />
                            {file ? (
                                <div className="flex flex-col items-center gap-4 text-center w-full">
                                    <div className="flex items-center gap-4">{getFileIcon(file.type)}<div className="text-left"><p className="font-semibold text-lg" style={{ color: colors.tertiary }}>{file.name}</p><p className="text-sm" style={{ color: colors.neutral }}>{formatFileSize(file.size)}</p></div></div>
                                    <div className="flex items-center gap-2"><CheckCircle className="h-6 w-6" style={{ color: colors.success }} /><span className="text-base font-medium" style={{ color: colors.success }}>File uploaded successfully</span></div>
                                    <Button type="button" variant="ghost" size="sm" className="text-red-500 hover:text-red-600 hover:bg-red-50 mt-2" onClick={(e) => { e.stopPropagation(); setFile(null); setError(''); }}><X className="h-4 w-4 mr-2" />Remove and choose different file</Button>
                                </div>
                            ) : (
                                <div className="flex flex-col items-center gap-6 text-center">
                                    <div className="p-6 rounded-full" style={{ backgroundColor: colors.primaryOpacity(0.1) }}><UploadCloud className="h-12 w-12" style={{ color: colors.primary }} /></div>
                                    <div>
                                        <p className="font-semibold text-xl mb-2" style={{ color: colors.tertiary }}>{isDragActive ? 'Drop your file here' : 'Drag & drop your resume here'}</p>
                                        <p className="text-base mb-4" style={{ color: colors.neutral }}>or click to browse your files</p>
                                        <div className="flex gap-3 flex-wrap justify-center mb-4">{['.PDF', '.DOC', '.DOCX', '.TXT'].map((ext) => (<Badge key={ext} variant="outline" className="text-sm px-3 py-1" style={{ borderColor: colors.primaryOpacity(0.3), color: colors.primary, backgroundColor: colors.primaryOpacity(0.05) }}>{ext}</Badge>))}</div>
                                        <p className="text-sm" style={{ color: colors.neutral }}>Maximum file size: 10MB</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {currentStep === 2 && (
                    <div className="space-y-6">
                        <div className="max-w-md mx-auto">
                            <SearchableRoleSelect value={role} onChange={setRole} placeholder="Search for a job role or type your own..." helperText="Be specific about the position you're targeting for better optimization" required={true} disabled={isLoading} className="w-full" />
                        </div>
                        {role && (
                            <div className="max-w-md mx-auto p-4 rounded-lg border" style={{ backgroundColor: colors.primaryOpacity(0.05), borderColor: colors.primaryOpacity(0.2) }}>
                                <div className="flex items-center gap-2"><CheckCircle className="h-5 w-5" style={{ color: colors.success }} /><span className="font-medium" style={{ color: colors.tertiary }}>Target Role Selected:</span></div>
                                <p className="text-lg font-semibold mt-1" style={{ color: colors.primary }}>{role}</p>
                            </div>
                        )}
                    </div>
                )}

                {currentStep === 3 && (
                    <div className="space-y-8">
                        <div className="space-y-4 max-w-md mx-auto">
                            <div className="p-4 rounded-lg border" style={{ backgroundColor: colors.lightBg, borderColor: colors.secondaryDark }}><div className="flex items-center gap-3">{file && getFileIcon(file.type)}<div><p className="font-medium" style={{ color: colors.tertiary }}>{file?.name}</p><p className="text-sm" style={{ color: colors.neutral }}>{file && formatFileSize(file.size)}</p></div></div></div>
                            <div className="p-4 rounded-lg border" style={{ backgroundColor: colors.lightBg, borderColor: colors.secondaryDark }}><p className="font-medium mb-1" style={{ color: colors.tertiary }}>Target Role</p><p className="text-lg font-semibold" style={{ color: colors.primary }}>{role}</p></div>
                        </div>
                        <div className="max-w-md mx-auto">
                            <Button onClick={handleSubmit} disabled={isLoading || !file || !role.trim()} className="w-full font-semibold py-6 text-lg transition-all duration-300 hover:shadow-xl" size="lg" style={{ background: colors.primaryGradient, color: colors.lightBg, opacity: (isLoading || !file || !role.trim()) ? 0.6 : 1 }}>
                                {isLoading ? (<div className="flex items-center gap-2"><Loader2 className="h-6 w-6 animate-spin" /><BrainCircuit className="h-6 w-6" /><span>Optimizing Resume...</span></div>) : (<div className="flex items-center gap-2"><Zap className="h-6 w-6" /><span>Generate AI-Optimized Resume</span></div>)}
                            </Button>
                        </div>
                        {isLoading && (
                            <div className="max-w-md mx-auto p-4 rounded-lg border" style={{ backgroundColor: colors.primaryOpacity(0.05), borderColor: colors.primaryOpacity(0.2) }}>
                                <div className="flex items-center gap-3"><Loader2 className="h-5 w-5 animate-spin" style={{ color: colors.primary }} /><div ><p className="font-medium text-sm" style={{ color: colors.tertiary }}>AI is analyzing and optimizing your resume...</p><p className="text-xs" style={{ color: colors.neutral }}>This process typically takes 15-30 seconds</p></div></div>
                            </div>
                        )}
                    </div>
                )}
            </div>

            {error && (
                <div className="flex items-center gap-2 p-3 rounded-lg" style={{ backgroundColor: colors.errorOpacity(0.1) }}>
                    <AlertCircle className="h-4 w-4 flex-shrink-0" style={{ color: colors.error }} /><p className="text-sm font-medium" style={{ color: colors.error }}>{error}</p>
                </div>
            )}

            {currentStep < 3 && (
                <div className="flex justify-between items-center pt-6">
                    <Button type="button" variant="ghost" onClick={handlePrevious} disabled={currentStep === 1} className="flex items-center gap-2" style={{ color: currentStep === 1 ? colors.neutral : colors.primary, opacity: currentStep === 1 ? 0.5 : 1 }}><ArrowLeft className="h-4 w-4" />Previous</Button>
                    <Button type="button" onClick={handleNext} disabled={!canProceedToNext()} className="flex items-center gap-2 font-medium px-6" style={{ background: canProceedToNext() ? colors.primaryGradient : colors.neutralOpacity(0.3), color: colors.lightBg, opacity: canProceedToNext() ? 1 : 0.6 }}>{currentStep === 1 ? 'Choose Target Role' : 'Review & Generate'}<ArrowRight className="h-4 w-4" /></Button>
                </div>
            )}

            {currentStep === 3 && !isLoading && (
                <div className="flex justify-center pt-6">
                    <Button type="button" variant="ghost" onClick={handlePrevious} className="flex items-center gap-2" style={{ color: colors.primary }}><ArrowLeft className="h-4 w-4" />Back to Role Selection</Button>
                </div>
            )}
        </div>
    );
}