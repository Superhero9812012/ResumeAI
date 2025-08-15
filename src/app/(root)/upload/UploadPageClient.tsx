

"use client";

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Upload, BrainCircuit, Shield, Clock, CheckCircle, Zap, Target, FileText, Users, Star, TrendingUp } from 'lucide-react';
import Section from '@/components/Base/Section';
// Import the separated UploadForm component
import { UploadForm } from '@/components/Base/Upload/UploadForm';
import { colors } from '@/components/Global/colors';


// This is the main page component responsible for the overall layout and static content.
export default function UploadPage() {
    const features = [
        { icon: <Zap className="h-4 w-4" style={{ color: colors.primary }} />, text: "AI-powered optimization in seconds" },
        { icon: <Target className="h-4 w-4" style={{ color: colors.success }} />, text: "Role-specific keyword targeting" },
        { icon: <FileText className="h-4 w-4" style={{ color: colors.accent }} />, text: "ATS-friendly formatting" }
    ];

    const steps = [
        { number: "1", title: "Upload Resume", description: "Drop your PDF or DOCX file", detail: "Supports all major formats" },
        { number: "2", title: "Enter Target Role", description: "Specify your desired position", detail: "We'll optimize for that role" },
        { number: "3", title: "Get Optimized Resume", description: "Download your enhanced resume", detail: "Ready for applications" }
    ];

    const trustIndicators = [
        { icon: Shield, text: "100% Secure & Private", detail: "Your data is encrypted and protected" },
        { icon: Clock, text: "Results in Under 30 Seconds", detail: "Lightning-fast AI processing" },
        { icon: CheckCircle, text: "No Account Required", detail: "Start optimizing immediately" }
    ];

    const stats = [
        { icon: Users, value: "50K+", label: "Resumes Optimized" },
        { icon: Star, value: "4.9", label: "Average Rating" },
        { icon: TrendingUp, value: "85%", label: "Success Rate" }
    ];

    return (
        <div
            className="min-h-screen"
            style={{
                background: `linear-gradient(to bottom right, ${colors.secondary} 0%, ${colors.lightBg} 50%, ${colors.primaryOpacity(0.03)} 100%)`
            }}
        >
            {/* Enhanced Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-20 h-20 rounded-full blur-xl animate-pulse" style={{ backgroundColor: colors.primaryOpacity(0.05) }} />
                <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full blur-2xl animate-pulse delay-1000" style={{ backgroundColor: colors.accentOpacity(0.05) }} />
                <div className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full blur-xl animate-pulse delay-500" style={{ backgroundColor: colors.successOpacity(0.05) }} />
                <div className="absolute top-1/3 right-1/3 w-24 h-24 rounded-full blur-2xl animate-pulse delay-700" style={{ backgroundColor: colors.primaryOpacity(0.03) }} />
            </div>

            <Section>
                <div className="flex py-8 flex-col items-center justify-center min-h-[80vh]">
                    <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-12">

                        {/* Left Side - Header Section */}
                        <div className="flex-1 text-center lg:text-left">
                            <div className="mb-8">
                                <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
                                    <div className="p-3 rounded-xl shadow-lg" style={{ background: colors.primaryGradient }}><BrainCircuit className="h-6 w-6" style={{ color: colors.lightBg }} /></div>
                                    <Badge variant="secondary" className="border" style={{ backgroundColor: colors.primaryOpacity(0.1), color: colors.primary, borderColor: colors.primaryOpacity(0.2) }}>AI-Powered Optimization</Badge>
                                </div>
                                <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight mb-6" style={{ color: colors.tertiary }}>Optimize Your Resume</h1>
                                <p className="text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-8" style={{ color: colors.neutral }}>Upload your resume, enter your target role, and let our AI transform it into an ATS-friendly, interview-winning document.</p>
                                <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-8">
                                    {stats.map((stat, index) => (
                                        <div key={index} className="text-center">
                                            <div className="flex items-center justify-center gap-1 mb-1">
                                                <stat.icon className="h-4 w-4" style={{ color: colors.primary }} />
                                                <span className="font-bold text-lg" style={{ color: colors.tertiary }}>{stat.value}</span>
                                            </div>
                                            <div className="text-xs" style={{ color: colors.neutral }}>{stat.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                                {features.map((feature, index) => (
                                    <div key={index} className="flex items-center gap-2 px-4 py-2.5 rounded-full border shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105" style={{ backgroundColor: colors.lightBg, borderColor: colors.secondaryDark }}>
                                        {feature.icon}
                                        <span className="text-sm font-medium" style={{ color: colors.neutral }}>{feature.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Side - Upload Card */}
                        <div className="flex-1 w-full max-w-xl">
                            <Card className="shadow-2xl !gap-2.5 border-0 backdrop-blur-xl hover:shadow-3xl transition-all duration-500" style={{ backgroundColor: colors.lightBgOpacity(0.9) }}>
                                <CardHeader className="text-center pb-0">
                                    <div className="flex items-center justify-center gap-3">
                                        <div className="p-2 rounded-xl" style={{ backgroundColor: colors.primaryOpacity(0.1) }}><Upload className="h-6 w-6" style={{ color: colors.primary }} /></div>
                                        <CardTitle className="text-2xl font-bold" style={{ color: colors.tertiary }}>Upload Your Resume</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent className="pt-0">
                                    {/* The UploadForm component is rendered here */}
                                    <UploadForm />
                                    <div className="mt-6 p-4 rounded-xl border" style={{ backgroundColor: colors.secondaryOpacity(0.5), borderColor: colors.secondaryDark }}>
                                        <div className="flex items-center gap-2 text-sm">
                                            <Shield className="h-4 w-4" style={{ color: colors.success }} />
                                            <span style={{ color: colors.neutral }}>Your files are processed securely and deleted after optimization</span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </Section>

            {/* How It Works Section */}
            <Section>
                <div className="backdrop-blur-sm border-y py-16" style={{ backgroundColor: colors.lightBgOpacity(0.5), borderColor: colors.secondaryOpacity(0.5) }}>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: colors.tertiary }}>How It Works</h2>
                        <p className="text-lg max-w-2xl mx-auto" style={{ color: colors.neutral }}>Get your optimized resume in three simple steps</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        {steps.map((step, index) => (
                            <div key={index} className="text-center group relative">
                                <div className="relative mb-6">
                                    <div className="w-16 h-16 rounded-full text-white font-bold text-xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110" style={{ background: colors.primaryGradient }}>{step.number}</div>
                                    {index < steps.length - 1 && (<div className="hidden md:block absolute top-8 left-full w-full h-0.5 -z-10" style={{ background: `linear-gradient(to right, ${colors.primaryOpacity(0.2)} 0%, ${colors.neutralOpacity(0.2)} 100%)` }} />)}
                                </div>
                                <h3 className="font-bold text-xl mb-2" style={{ color: colors.tertiary }}>{step.title}</h3>
                                <p className="mb-1" style={{ color: colors.neutral }}>{step.description}</p>
                                <p className="text-sm font-medium" style={{ color: colors.primary }}>{step.detail}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Trust Indicators Section */}
            <Section>
                <div className="py-16">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl lg:text-3xl font-bold mb-4" style={{ color: colors.tertiary }}>Why Choose Us?</h2>
                        <p className="text-lg" style={{ color: colors.neutral }}>Trusted by professionals worldwide</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        {trustIndicators.map((indicator, index) => (
                            <div key={index} className="flex flex-col items-center gap-4 p-6 rounded-2xl border backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg" style={{ backgroundColor: colors.lightBgOpacity(0.7), borderColor: colors.secondaryOpacity(0.5) }}>
                                <div className="p-3 rounded-xl" style={{ backgroundColor: colors.primaryOpacity(0.1) }}><indicator.icon className="h-8 w-8" style={{ color: colors.primary }} /></div>
                                <div className="text-center">
                                    <h3 className="font-bold text-lg mb-2" style={{ color: colors.tertiary }}>{indicator.text}</h3>
                                    <p className="text-sm" style={{ color: colors.neutral }}>{indicator.detail}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Additional Info Section */}
            <Section>
                <div className="py-12 text-center border-t" style={{ borderTopColor: colors.secondaryOpacity(0.5) }}>
                    <div className="max-w-2xl mx-auto">
                        <p className="leading-relaxed" style={{ color: colors.neutral }}>
                            Your files are processed securely using enterprise-grade encryption and automatically deleted after optimization. We never store or share your personal information.
                            <br />
                            <Link href="/privacy" className="transition-colors underline font-medium mt-2 inline-block" style={{ color: colors.primary }}>
                                Learn more about our privacy policy →
                            </Link>
                        </p>
                    </div>
                </div>
            </Section>
        </div>
    );
}