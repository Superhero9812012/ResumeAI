'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useDropzone } from 'react-dropzone';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
    UploadCloud,
    FileText,
    File as FileIcon,
    X,
    Loader2,
    BrainCircuit,
    CheckCircle,
    AlertCircle,
    Zap,
    ArrowRight,
    ArrowLeft,
    Check,
    Target,
    Sparkles,
    Rocket,
    Shield,
    Clock,
    Eye
} from 'lucide-react';
import { SearchableRoleSelect } from './SearchableRoleSelect';

interface Step {
    id: number;
    title: string;
    description: string;
    completed: boolean;
    icon: React.ReactNode;
}

export function UploadFormEnhanced() {
    const [currentStep, setCurrentStep] = useState(1);
    const [file, setFile] = useState<File | null>(null);
    const [role, setRole] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const router = useRouter();

    const steps: Step[] = [
        { 
            id: 1, 
            title: "Upload Resume", 
            description: "Upload your current resume", 
            completed: !!file,
            icon: <UploadCloud className="h-5 w-5" />
        },
        { 
            id: 2, 
            title: "Target Role", 
            description: "Choose your desired job", 
            completed: !!role.trim(),
            icon: <Target className="h-5 w-5" />
        },
        { 
            id: 3, 
            title: "AI Optimization", 
            description: "Generate enhanced resume", 
            completed: false,
            icon: <BrainCircuit className="h-5 w-5" />
        }
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
        if (type === 'application/pdf') return <FileText className="h-8 w-8 text-red-500" />;
        if (type.includes('word')) return <FileIcon className="h-8 w-8 text-blue-500" />;
        if (type === 'text/plain') return <FileText className="h-8 w-8 text-green-500" />;
        return <FileIcon className="h-8 w-8 text-gray-500" />;
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

            router.push(`/select-template/${data.jobId}`);

        } catch (err: any) {
            setError(err.message);
            setIsLoading(false);
        }
    };

    return (
        <div className="space-y-8">
            {/* Simple Progress Indicator */}
            <div className="flex items-center justify-center gap-4 mb-8">
                {steps.map((step, index) => (
                    <div key={step.id} className="flex items-center">
                        <motion.div
                            className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                                step.completed 
                                    ? 'bg-gradient-to-r from-emerald-500 to-green-600 text-white shadow-lg' 
                                    : currentStep === step.id 
                                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg' 
                                        : 'bg-gray-200 text-gray-500'
                            }`}
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.2 }}
                        >
                            {step.completed ? (
                                <Check className="h-5 w-5" />
                            ) : (
                                <div className="flex items-center justify-center">
                                    {step.icon}
                                </div>
                            )}
                        </motion.div>
                        
                        {index < steps.length - 1 && (
                            <div className={`w-16 h-0.5 mx-2 transition-all duration-300 ${
                                step.completed ? 'bg-gradient-to-r from-emerald-500 to-green-600' : 'bg-gray-200'
                            }`} />
                        )}
                    </div>
                ))}
            </div>

            {/* Step Content */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentStep}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="min-h-[300px]"
                >
                    {currentStep === 1 && (
                        <div className="space-y-6">
                            <motion.div
                                {...getRootProps()}
                                className={`relative flex flex-col items-center justify-center p-12 border-2 border-dashed rounded-2xl cursor-pointer transition-all duration-300 ${
                                    isDragActive ? 'scale-105 border-blue-500 bg-blue-50' : 
                                    file ? 'border-emerald-500 bg-emerald-50' : 
                                    'border-gray-300 bg-gray-50 hover:border-blue-400 hover:bg-blue-50'
                                }`}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <input {...getInputProps()} />
                                
                                {file ? (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="flex flex-col items-center gap-4 text-center w-full"
                                    >
                                        <div className="flex items-center gap-4">
                                            {getFileIcon(file.type)}
                                            <div className="text-left">
                                                <p className="font-semibold text-lg text-gray-900">{file.name}</p>
                                                <p className="text-sm text-gray-600">{formatFileSize(file.size)}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <CheckCircle className="h-6 w-6 text-emerald-500" />
                                            <span className="text-base font-medium text-emerald-600">
                                                File uploaded successfully
                                            </span>
                                        </div>
                                        <Button
                                            type="button"
                                            variant="ghost"
                                            size="sm"
                                            className="text-red-500 hover:text-red-600 hover:bg-red-50 mt-2"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setFile(null);
                                                setError('');
                                            }}
                                        >
                                            <X className="h-4 w-4 mr-2" />
                                            Remove and choose different file
                                        </Button>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="flex flex-col items-center gap-6 text-center"
                                    >
                                        <motion.div
                                            className="p-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg"
                                            whileHover={{ scale: 1.1 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <UploadCloud className="h-12 w-12 text-white" />
                                        </motion.div>
                                        
                                        <div>
                                            <p className="font-semibold text-xl mb-2 text-gray-900">
                                                {isDragActive ? 'Drop your file here' : 'Drag & drop your resume here'}
                                            </p>
                                            <p className="text-base mb-4 text-gray-600">or click to browse your files</p>
                                            
                                            <div className="flex gap-3 flex-wrap justify-center mb-4">
                                                {['.PDF', '.DOC', '.DOCX', '.TXT'].map((ext) => (
                                                    <Badge
                                                        key={ext}
                                                        variant="outline"
                                                        className="text-sm px-3 py-1 border-blue-300 text-blue-600 bg-blue-50"
                                                    >
                                                        {ext}
                                                    </Badge>
                                                ))}
                                            </div>
                                            
                                            <p className="text-sm text-gray-500">Maximum file size: 10MB</p>
                                        </div>
                                    </motion.div>
                                )}
                            </motion.div>
                        </div>
                    )}

                    {currentStep === 2 && (
                        <div className="space-y-6">
                            <div className="max-w-md mx-auto">
                                <SearchableRoleSelect
                                    value={role}
                                    onChange={setRole}
                                    placeholder="Search for a job role or type your own..."
                                    helperText="Be specific about the position you're targeting for better optimization"
                                    required={true}
                                    disabled={isLoading}
                                    className="w-full"
                                />
                            </div>
                            
                            {role && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="max-w-md mx-auto p-4 rounded-xl border bg-emerald-50 border-emerald-200"
                                >
                                    <div className="flex items-center gap-2">
                                        <CheckCircle className="h-5 w-5 text-emerald-500" />
                                        <span className="font-medium text-gray-900">Target Role Selected:</span>
                                    </div>
                                    <p className="text-lg font-semibold mt-1 text-emerald-600">{role}</p>
                                </motion.div>
                            )}
                        </div>
                    )}

                    {currentStep === 3 && (
                        <div className="space-y-8">
                            <div className="space-y-4 max-w-md mx-auto">
                                <div className="p-4 rounded-xl border border-gray-200 bg-white">
                                    <div className="flex items-center gap-3">
                                        {file && getFileIcon(file.type)}
                                        <div>
                                            <p className="font-medium text-gray-900">{file?.name}</p>
                                            <p className="text-sm text-gray-600">{file && formatFileSize(file.size)}</p>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="p-4 rounded-xl border border-gray-200 bg-white">
                                    <p className="font-medium mb-1 text-gray-900">Target Role</p>
                                    <p className="text-lg font-semibold text-blue-600">{role}</p>
                                </div>
                            </div>
                            
                            <div className="max-w-md mx-auto">
                                <Button
                                    onClick={handleSubmit}
                                    disabled={isLoading || !file || !role.trim()}
                                    className="w-full font-semibold py-6 text-lg transition-all duration-300 hover:shadow-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-2xl"
                                    size="lg"
                                >
                                    {isLoading ? (
                                        <div className="flex items-center gap-2">
                                            <Loader2 className="h-6 w-6 animate-spin" />
                                            <BrainCircuit className="h-6 w-6" />
                                            <span>Optimizing Resume...</span>
                                        </div>
                                    ) : (
                                        <div className="flex items-center gap-2">
                                            <Sparkles className="h-6 w-6" />
                                            <span>Generate AI-Optimized Resume</span>
                                            <Rocket className="h-6 w-6" />
                                        </div>
                                    )}
                                </Button>
                            </div>
                            
                            {isLoading && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="max-w-md mx-auto p-4 rounded-xl border bg-blue-50 border-blue-200"
                                >
                                    <div className="flex items-center gap-3">
                                        <Loader2 className="h-5 w-5 animate-spin text-blue-500" />
                                        <div>
                                            <p className="font-medium text-sm text-gray-900">
                                                AI is analyzing and optimizing your resume...
                                            </p>
                                            <p className="text-xs text-gray-600">
                                                This process typically takes 15-30 seconds
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </div>
                    )}
                </motion.div>
            </AnimatePresence>

            {/* Error Display */}
            <AnimatePresence>
                {error && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex items-center gap-2 p-4 rounded-xl bg-red-50 border border-red-200"
                    >
                        <AlertCircle className="h-5 w-5 flex-shrink-0 text-red-500" />
                        <p className="text-sm font-medium text-red-700">{error}</p>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Navigation Buttons */}
            {currentStep < 3 && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex justify-between items-center pt-6"
                >
                    <Button
                        type="button"
                        variant="ghost"
                        onClick={handlePrevious}
                        disabled={currentStep === 1}
                        className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Previous
                    </Button>
                    
                    <Button
                        type="button"
                        onClick={handleNext}
                        disabled={!canProceedToNext()}
                        className="flex items-center gap-2 font-medium px-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl"
                    >
                        {currentStep === 1 ? 'Choose Target Role' : 'Review & Generate'}
                        <ArrowRight className="h-4 w-4" />
                    </Button>
                </motion.div>
            )}

            {currentStep === 3 && !isLoading && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex justify-center pt-6"
                >
                    <Button
                        type="button"
                        variant="ghost"
                        onClick={handlePrevious}
                        className="flex items-center gap-2 text-blue-600 hover:text-blue-700"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Back to Role Selection
                    </Button>
                </motion.div>
            )}

            {/* Trust Indicators */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap justify-center gap-6 pt-8 border-t border-gray-200"
            >
                <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Shield className="h-4 w-4 text-emerald-500" />
                    <span>100% Secure</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="h-4 w-4 text-blue-500" />
                    <span>30 Seconds</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Eye className="h-4 w-4 text-purple-500" />
                    <span>No Account Required</span>
                </div>
            </motion.div>
        </div>
    );
}
