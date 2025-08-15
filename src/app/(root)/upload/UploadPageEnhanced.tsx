"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import {
    UploadCloud,
    FileText,
    BrainCircuit,
    Zap,
    Target,
    Shield,
    Clock,
    CheckCircle,
    Users,
    Star,
    TrendingUp,
    ArrowRight,
    ArrowLeft,
    X,
    Loader2,
    Sparkles,
    Rocket,
    Lock,
    Eye,
    FileCheck,
    Search,
    Briefcase,
    GraduationCap,
    Building2,
    Palette,
    Code,
    Heart,
    Star as StarIcon,
    Play,
    Award,
    Globe,
    Download,
    Settings,
    BarChart3,
    Lightbulb,
    MousePointer,
    Smartphone,
    Monitor
} from 'lucide-react';
import { UploadFormEnhanced } from '@/components/Base/Upload/UploadFormEnhanced';

const UploadPageEnhanced = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [activeTab, setActiveTab] = useState('upload');

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const tabs = [
        { id: 'upload', label: 'Upload Resume', icon: <UploadCloud className="h-5 w-5" /> },
        { id: 'optimize', label: 'AI Optimization', icon: <BrainCircuit className="h-5 w-5" /> },
        { id: 'download', label: 'Download', icon: <Download className="h-5 w-5" /> }
    ];

    const benefits = [
        {
            icon: <Zap className="h-6 w-6" />,
            title: "Lightning Fast",
            description: "Get your optimized resume in under 30 seconds",
            color: "from-yellow-400 to-orange-500"
        },
        {
            icon: <Target className="h-6 w-6" />,
            title: "ATS Optimized",
            description: "Pass through Applicant Tracking Systems with ease",
            color: "from-blue-500 to-purple-600"
        },
        {
            icon: <Award className="h-6 w-6" />,
            title: "Professional Quality",
            description: "Industry-standard formatting and content",
            color: "from-emerald-500 to-teal-600"
        }
    ];

    const testimonials = [
        {
            name: "Sarah Johnson",
            role: "Software Engineer",
            company: "Google",
            text: "ResumeBot helped me land my dream job at Google. The AI optimization was incredible!",
            rating: 5,
            avatar: "SJ"
        },
        {
            name: "Michael Chen",
            role: "Product Manager",
            company: "Microsoft",
            text: "The ATS optimization feature is a game-changer. My resume now gets through every screening.",
            rating: 5,
            avatar: "MC"
        },
        {
            name: "Emily Rodriguez",
            role: "Marketing Director",
            company: "Netflix",
            text: "Professional, fast, and effective. ResumeBot transformed my career prospects.",
            rating: 5,
            avatar: "ER"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
                    style={{
                        backgroundImage: `url('data:image/svg+xml,${encodeURIComponent(`
                            <svg width="1200" height="800" viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" style="stop-color:#1e293b;stop-opacity:1" />
                                        <stop offset="50%" style="stop-color:#7c3aed;stop-opacity:1" />
                                        <stop offset="100%" style="stop-color:#1e293b;stop-opacity:1" />
                                    </linearGradient>
                                </defs>
                                <rect width="100%" height="100%" fill="url(#bg)"/>
                                
                                <!-- Resume Documents -->
                                <g opacity="0.15">
                                    <!-- Document 1 -->
                                    <rect x="100" y="150" width="200" height="280" rx="8" fill="#ffffff" opacity="0.1"/>
                                    <rect x="120" y="170" width="160" height="8" rx="4" fill="#ffffff" opacity="0.2"/>
                                    <rect x="120" y="190" width="140" height="6" rx="3" fill="#ffffff" opacity="0.15"/>
                                    <rect x="120" y="210" width="150" height="6" rx="3" fill="#ffffff" opacity="0.15"/>
                                    <rect x="120" y="230" width="130" height="6" rx="3" fill="#ffffff" opacity="0.15"/>
                                    <rect x="120" y="250" width="160" height="6" rx="3" fill="#ffffff" opacity="0.15"/>
                                    <rect x="120" y="270" width="140" height="6" rx="3" fill="#ffffff" opacity="0.15"/>
                                    <rect x="120" y="290" width="150" height="6" rx="3" fill="#ffffff" opacity="0.15"/>
                                    <rect x="120" y="310" width="130" height="6" rx="3" fill="#ffffff" opacity="0.15"/>
                                    <rect x="120" y="330" width="160" height="6" rx="3" fill="#ffffff" opacity="0.15"/>
                                    <rect x="120" y="350" width="140" height="6" rx="3" fill="#ffffff" opacity="0.15"/>
                                    <rect x="120" y="370" width="150" height="6" rx="3" fill="#ffffff" opacity="0.15"/>
                                    <rect x="120" y="390" width="130" height="6" rx="3" fill="#ffffff" opacity="0.15"/>
                                    
                                    <!-- Document 2 -->
                                    <rect x="900" y="200" width="180" height="240" rx="8" fill="#ffffff" opacity="0.1"/>
                                    <rect x="920" y="220" width="140" height="8" rx="4" fill="#ffffff" opacity="0.2"/>
                                    <rect x="920" y="240" width="120" height="6" rx="3" fill="#ffffff" opacity="0.15"/>
                                    <rect x="920" y="260" width="130" height="6" rx="3" fill="#ffffff" opacity="0.15"/>
                                    <rect x="920" y="280" width="110" height="6" rx="3" fill="#ffffff" opacity="0.15"/>
                                    <rect x="920" y="300" width="140" height="6" rx="3" fill="#ffffff" opacity="0.15"/>
                                    <rect x="920" y="320" width="125" height="6" rx="3" fill="#ffffff" opacity="0.15"/>
                                    <rect x="920" y="340" width="135" height="6" rx="3" fill="#ffffff" opacity="0.15"/>
                                    <rect x="920" y="360" width="115" height="6" rx="3" fill="#ffffff" opacity="0.15"/>
                                    <rect x="920" y="380" width="130" height="6" rx="3" fill="#ffffff" opacity="0.15"/>
                                    <rect x="920" y="400" width="120" height="6" rx="3" fill="#ffffff" opacity="0.15"/>
                                    <rect x="920" y="420" width="140" height="6" rx="3" fill="#ffffff" opacity="0.15"/>
                                    
                                    <!-- Document 3 -->
                                    <rect x="500" y="100" width="160" height="200" rx="8" fill="#ffffff" opacity="0.1"/>
                                    <rect x="520" y="120" width="120" height="8" rx="4" fill="#ffffff" opacity="0.2"/>
                                    <rect x="520" y="140" width="100" height="6" rx="3" fill="#ffffff" opacity="0.15"/>
                                    <rect x="520" y="160" width="110" height="6" rx="3" fill="#ffffff" opacity="0.15"/>
                                    <rect x="520" y="180" width="90" height="6" rx="3" fill="#ffffff" opacity="0.15"/>
                                    <rect x="520" y="200" width="120" height="6" rx="3" fill="#ffffff" opacity="0.15"/>
                                    <rect x="520" y="220" width="105" height="6" rx="3" fill="#ffffff" opacity="0.15"/>
                                    <rect x="520" y="240" width="115" height="6" rx="3" fill="#ffffff" opacity="0.15"/>
                                    <rect x="520" y="260" width="95" height="6" rx="3" fill="#ffffff" opacity="0.15"/>
                                    <rect x="520" y="280" width="110" height="6" rx="3" fill="#ffffff" opacity="0.15"/>
                                </g>
                                
                                <!-- Career Elements -->
                                <g opacity="0.12">
                                    <!-- Briefcase -->
                                    <rect x="200" y="500" width="60" height="40" rx="4" fill="#ffffff" opacity="0.15"/>
                                    <rect x="210" y="510" width="40" height="20" rx="2" fill="#ffffff" opacity="0.25"/>
                                    <line x1="220" y1="530" x2="240" y2="530" stroke="#ffffff" stroke-width="2" opacity="0.3"/>
                                    
                                    <rect x="950" y="500" width="60" height="40" rx="4" fill="#ffffff" opacity="0.15"/>
                                    <rect x="960" y="510" width="40" height="20" rx="2" fill="#ffffff" opacity="0.25"/>
                                    <line x1="970" y1="530" x2="990" y2="530" stroke="#ffffff" stroke-width="2" opacity="0.3"/>
                                    
                                    <!-- Graduation cap -->
                                    <path d="M 400 480 L 440 460 L 480 480 L 480 500 L 400 500 Z" fill="#ffffff" opacity="0.15"/>
                                    <rect x="410" y="460" width="60" height="8" rx="4" fill="#ffffff" opacity="0.25"/>
                                    <line x1="420" y1="468" x2="460" y2="468" stroke="#ffffff" stroke-width="1" opacity="0.3"/>
                                    
                                    <!-- Office building -->
                                    <rect x="700" y="450" width="80" height="60" fill="#ffffff" opacity="0.15"/>
                                    <rect x="710" y="460" width="15" height="15" fill="#ffffff" opacity="0.25"/>
                                    <rect x="730" y="460" width="15" height="15" fill="#ffffff" opacity="0.25"/>
                                    <rect x="750" y="460" width="15" height="15" fill="#ffffff" opacity="0.25"/>
                                    <rect x="710" y="480" width="15" height="15" fill="#ffffff" opacity="0.25"/>
                                    <rect x="730" y="480" width="15" height="15" fill="#ffffff" opacity="0.25"/>
                                    <rect x="750" y="480" width="15" height="15" fill="#ffffff" opacity="0.25"/>
                                    <rect x="710" y="500" width="15" height="15" fill="#ffffff" opacity="0.25"/>
                                    <rect x="730" y="500" width="15" height="15" fill="#ffffff" opacity="0.25"/>
                                    <rect x="750" y="500" width="15" height="15" fill="#ffffff" opacity="0.25"/>
                                </g>
                                
                                <!-- AI/Technology Elements -->
                                <g opacity="0.1">
                                    <!-- Circuit patterns -->
                                    <path d="M 150 600 L 200 600 L 200 650 L 250 650 L 250 600 L 300 600" stroke="#3b82f6" stroke-width="2" fill="none" opacity="0.4"/>
                                    <path d="M 850 600 L 900 600 L 900 650 L 950 650 L 950 600 L 1000 600" stroke="#8b5cf6" stroke-width="2" fill="none" opacity="0.4"/>
                                    <path d="M 500 650 L 550 650 L 550 700 L 600 700 L 600 650 L 650 650" stroke="#10b981" stroke-width="2" fill="none" opacity="0.4"/>
                                    
                                    <!-- Data points -->
                                    <circle cx="180" cy="620" r="3" fill="#3b82f6" opacity="0.5"/>
                                    <circle cx="220" cy="620" r="3" fill="#3b82f6" opacity="0.5"/>
                                    <circle cx="260" cy="620" r="3" fill="#3b82f6" opacity="0.5"/>
                                    
                                    <circle cx="880" cy="620" r="3" fill="#8b5cf6" opacity="0.5"/>
                                    <circle cx="920" cy="620" r="3" fill="#8b5cf6" opacity="0.5"/>
                                    <circle cx="960" cy="620" r="3" fill="#8b5cf6" opacity="0.5"/>
                                    
                                    <circle cx="530" cy="670" r="3" fill="#10b981" opacity="0.5"/>
                                    <circle cx="570" cy="670" r="3" fill="#10b981" opacity="0.5"/>
                                    <circle cx="610" cy="670" r="3" fill="#10b981" opacity="0.5"/>
                                </g>
                                
                                <!-- Success Elements -->
                                <g opacity="0.12">
                                    <!-- Checkmarks -->
                                    <path d="M 300 300 L 320 320 L 340 300" stroke="#10b981" stroke-width="3" fill="none" opacity="0.5"/>
                                    <path d="M 800 350 L 820 370 L 840 350" stroke="#10b981" stroke-width="3" fill="none" opacity="0.5"/>
                                    <path d="M 600 400 L 620 420 L 640 400" stroke="#10b981" stroke-width="3" fill="none" opacity="0.5"/>
                                    
                                    <!-- Upward arrows -->
                                    <path d="M 350 550 L 370 530 L 390 550 L 370 570 Z" fill="#3b82f6" opacity="0.4"/>
                                    <path d="M 750 580 L 770 560 L 790 580 L 770 600 Z" fill="#8b5cf6" opacity="0.4"/>
                                    <path d="M 550 620 L 570 600 L 590 620 L 570 640 Z" fill="#10b981" opacity="0.4"/>
                                </g>
                            </svg>
                        `)}')`
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900/60 via-purple-900/50 to-slate-900/60" />
                
                {/* Floating Elements */}
                <motion.div
                    className="absolute top-20 left-20 w-2 h-2 bg-blue-400 rounded-full"
                    animate={{
                        y: [0, -20, 0],
                        opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute top-40 right-32 w-1 h-1 bg-purple-400 rounded-full"
                    animate={{
                        y: [0, -15, 0],
                        opacity: [0.3, 0.8, 0.3],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1,
                    }}
                />
                <motion.div
                    className="absolute bottom-32 left-1/3 w-1.5 h-1.5 bg-emerald-400 rounded-full"
                    animate={{
                        y: [0, -25, 0],
                        opacity: [0.4, 0.9, 0.4],
                    }}
                    transition={{
                        duration: 3.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2,
                    }}
                />
            </div>

            {/* Header */}
            <header className="relative z-10 pt-8 pb-16">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-8"
                        >
                            <Sparkles className="h-4 w-4" />
                            AI-Powered Resume Optimization
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
                        >
                            <span className="text-white drop-shadow-lg">
                                Transform Your
                            </span>
                            <br />
                            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent drop-shadow-lg">
                                Resume Today
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed"
                        >
                            Upload your resume and let our advanced AI create a professional, ATS-optimized version that will help you stand out to recruiters and land your dream job.
                        </motion.p>

                        {/* Quick Stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7, duration: 0.8 }}
                            className="flex flex-wrap justify-center gap-8 mb-12"
                        >
                            <div className="text-center">
                                <div className="text-3xl font-bold text-white mb-1">50K+</div>
                                <div className="text-gray-400 text-sm">Resumes Optimized</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-white mb-1">4.9★</div>
                                <div className="text-gray-400 text-sm">User Rating</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-white mb-1">85%</div>
                                <div className="text-gray-400 text-sm">Success Rate</div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </header>

            {/* Main Content */}
            <main className="relative z-10 pb-20">
                <div className="container mx-auto px-6">
                    {/* Upload Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9, duration: 0.8 }}
                        className="max-w-4xl mx-auto"
                    >
                        <Card className="relative overflow-hidden border-0 shadow-2xl bg-white/95 backdrop-blur-xl">
                            <CardContent className="p-8">
                                <UploadFormEnhanced />
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Benefits Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="mt-32"
                    >
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                                Why Choose{" "}
                                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                    ResumeBot?
                                </span>
                            </h2>
                            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                                Advanced AI technology designed to give you the competitive edge in today's job market
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {benefits.map((benefit, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.2 }}
                                    viewport={{ once: true }}
                                    className="group"
                                >
                                    <Card className="relative overflow-hidden border-0 shadow-xl bg-white/10 backdrop-blur-sm group-hover:bg-white/20 transition-all duration-500">
                                        <CardContent className="p-8 text-center text-white">
                                            <motion.div
                                                className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${benefit.color} flex items-center justify-center mx-auto mb-6 shadow-lg`}
                                                whileHover={{ scale: 1.1, rotate: 5 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <div className="text-white">{benefit.icon}</div>
                                            </motion.div>
                                            <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                                            <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Testimonials Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="mt-32"
                    >
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                                Loved by{" "}
                                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                    Professionals
                                </span>
                            </h2>
                            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                                Join thousands of job seekers who have transformed their careers with ResumeBot
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {testimonials.map((testimonial, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.2 }}
                                    viewport={{ once: true }}
                                >
                                    <Card className="relative overflow-hidden border-0 shadow-xl bg-white/10 backdrop-blur-sm">
                                        <CardContent className="p-8 text-white">
                                            <div className="flex items-center gap-1 mb-4">
                                                {[...Array(testimonial.rating)].map((_, i) => (
                                                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                                                ))}
                                            </div>
                                            <p className="text-gray-300 mb-6 leading-relaxed">"{testimonial.text}"</p>
                                            <div className="flex items-center gap-4">
                                                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold">
                                                    {testimonial.avatar}
                                                </div>
                                                <div>
                                                    <div className="font-semibold">{testimonial.name}</div>
                                                    <div className="text-sm text-gray-400">{testimonial.role} at {testimonial.company}</div>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* CTA Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="mt-32 text-center"
                    >
                        <Card className="relative overflow-hidden border-0 shadow-2xl bg-gradient-to-r from-blue-600 to-purple-600">
                            <CardContent className="p-12 text-center text-white">
                                <motion.div
                                    className="w-20 h-20 rounded-2xl bg-white/20 flex items-center justify-center mx-auto mb-8 shadow-lg"
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Rocket className="h-10 w-10 text-white" />
                                </motion.div>
                                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                    Ready to Transform Your Career?
                                </h2>
                                <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                                    Join thousands of professionals who have already optimized their resumes and landed their dream jobs
                                </p>
                                <Button
                                    size="lg"
                                    className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                >
                                    <Sparkles className="h-6 w-6 mr-3" />
                                    Start Optimizing Now
                                    <ArrowRight className="h-6 w-6 ml-3" />
                                </Button>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </main>
        </div>
    );
};

export default UploadPageEnhanced;
