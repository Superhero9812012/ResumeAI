"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
    BrainCircuit, 
    Users, 
    Target, 
    Zap, 
    Shield, 
    Award, 
    TrendingUp, 
    Heart, 
    Lightbulb, 
    Globe,
    Rocket,
    ArrowRight,
    Star,
    CheckCircle,
    Clock,
    Eye,
    Code,
    Palette,
    BarChart3,
    MessageCircle,
    Phone,
    Mail,
    MapPin,
    Calendar,
    BookOpen,
    GraduationCap,
    Briefcase,
    Building2,
    Sparkles,
    Crown,
    Infinity,
    Lock,
    Globe2,
    Smartphone,
    Monitor,
    Tablet
} from 'lucide-react';
import Section from '@/components/Base/Section';

const AboutPageEnhanced = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [activeTab, setActiveTab] = useState('mission');

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const stats = [
        { number: '50,000+', label: 'Resumes Created', icon: TrendingUp, color: 'from-blue-500 to-cyan-500' },
        { number: '95%', label: 'ATS Pass Rate', icon: Shield, color: 'from-green-500 to-emerald-500' },
        { number: '2.5x', label: 'More Interviews', icon: Award, color: 'from-purple-500 to-violet-500' },
        { number: '24/7', label: 'AI Support', icon: Zap, color: 'from-yellow-500 to-orange-500' }
    ];

    const values = [
        {
            icon: Target,
            title: 'Precision & Quality',
            description: 'Every resume is crafted with precision using advanced AI algorithms that understand what recruiters and ATS systems are looking for.',
            color: 'from-blue-500 to-cyan-500',
            features: ['AI-powered optimization', 'Industry-specific insights', 'Real-time feedback']
        },
        {
            icon: Heart,
            title: 'User-First Approach',
            description: 'We put our users at the center of everything we do, ensuring an intuitive experience that delivers real results.',
            color: 'from-red-500 to-pink-500',
            features: ['Intuitive interface', 'Personalized experience', '24/7 support']
        },
        {
            icon: Lightbulb,
            title: 'Innovation & Growth',
            description: 'Constantly evolving with the latest AI technology and job market trends to keep you ahead of the competition.',
            color: 'from-yellow-500 to-orange-500',
            features: ['Latest AI technology', 'Market trend analysis', 'Continuous updates']
        },
        {
            icon: Globe,
            title: 'Global Accessibility',
            description: 'Making professional resume building accessible to job seekers worldwide, regardless of their background or experience.',
            color: 'from-green-500 to-emerald-500',
            features: ['Multi-language support', 'Global templates', 'Universal accessibility']
        }
    ];

    const team = [
        {
            name: 'Dr. Sarah Chen',
            role: 'Chief AI Officer',
            avatar: 'SC',
            expertise: 'Machine Learning & NLP',
            experience: '10+ years',
            color: 'from-blue-500 to-purple-500'
        },
        {
            name: 'Michael Rodriguez',
            role: 'Head of Product',
            avatar: 'MR',
            expertise: 'UX Design & Strategy',
            experience: '8+ years',
            color: 'from-green-500 to-emerald-500'
        },
        {
            name: 'Emily Watson',
            role: 'Lead Engineer',
            avatar: 'EW',
            expertise: 'Full-Stack Development',
            experience: '7+ years',
            color: 'from-purple-500 to-pink-500'
        },
        {
            name: 'David Kim',
            role: 'Career Success Manager',
            avatar: 'DK',
            expertise: 'HR & Recruitment',
            experience: '12+ years',
            color: 'from-orange-500 to-red-500'
        }
    ];

    const milestones = [
        {
            year: '2024',
            title: 'AI-Powered Revolution',
            description: 'Launched advanced AI resume optimization with 95% ATS pass rate',
            icon: BrainCircuit,
            color: 'from-purple-500 to-blue-500'
        },
        {
            year: '2023',
            title: 'Global Expansion',
            description: 'Reached 50,000+ users across 25+ countries',
            icon: Globe,
            color: 'from-green-500 to-emerald-500'
        },
        {
            year: '2022',
            title: 'Platform Launch',
            description: 'Introduced the first AI-powered resume builder',
            icon: Rocket,
            color: 'from-blue-500 to-cyan-500'
        },
        {
            year: '2021',
            title: 'Research & Development',
            description: 'Analyzed 10,000+ successful resumes and job descriptions',
            icon: BookOpen,
            color: 'from-yellow-500 to-orange-500'
        }
    ];

    const technologies = [
        {
            name: 'OpenAI GPT-4',
            description: 'Advanced language processing for content optimization',
            icon: BrainCircuit,
            color: 'from-green-500 to-emerald-500'
        },
        {
            name: 'Custom ATS Engine',
            description: 'Proprietary algorithm for ATS compatibility scoring',
            icon: Target,
            color: 'from-blue-500 to-purple-500'
        },
        {
            name: 'Real-time Analytics',
            description: 'Live tracking of resume performance and optimization',
            icon: BarChart3,
            color: 'from-purple-500 to-pink-500'
        },
        {
            name: 'Multi-platform Support',
            description: 'Seamless experience across web, mobile, and desktop',
            icon: Smartphone,
            color: 'from-orange-500 to-red-500'
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                <div className="absolute top-40 right-32 w-1 h-1 bg-purple-400 rounded-full animate-pulse delay-1000" />
                <div className="absolute bottom-32 left-1/3 w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse delay-2000" />
                <div className="absolute top-1/2 left-10 w-1 h-1 bg-yellow-400 rounded-full animate-pulse delay-1500" />
                <div className="absolute bottom-20 right-20 w-2 h-2 bg-pink-400 rounded-full animate-pulse delay-3000" />
            </div>

            <Section id="about">
                <div className="container mx-auto py-20">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isVisible ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-white/20 text-slate-700 text-sm font-medium mb-8"
                        >
                            <BrainCircuit className="h-4 w-4" />
                            Powered by Advanced AI
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={isVisible ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
                        >
                            <span className="text-slate-900">
                                Revolutionizing
                            </span>
                            <br />
                            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
                                Resume Building
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={isVisible ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="text-xl text-slate-600 max-w-3xl mx-auto mb-12 leading-relaxed"
                        >
                            We're on a mission to democratize career success by making professional, ATS-optimized resumes accessible to everyone through the power of artificial intelligence.
                        </motion.p>
                    </motion.div>

                    {/* Stats Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={isVisible ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.7, duration: 0.8 }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
                    >
                        {stats.map((stat, index) => {
                            const IconComponent = stat.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                                    transition={{ delay: 0.9 + index * 0.1, duration: 0.6 }}
                                    className="group"
                                >
                                    <Card className="text-center p-6 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                                        <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                                            <IconComponent className="h-8 w-8 text-white" />
                                        </div>
                                        <div className="text-3xl font-bold text-slate-900 mb-1">{stat.number}</div>
                                        <div className="text-sm text-slate-600">{stat.label}</div>
                                    </Card>
                                </motion.div>
                            );
                        })}
                    </motion.div>

                    {/* Mission & Vision */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="grid lg:grid-cols-2 gap-16 items-center mb-20"
                    >
                        {/* Story Section */}
                        <div className="space-y-8">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                                className="space-y-6"
                            >
                                <h3 className="text-3xl font-bold text-slate-900">The Problem We Solve</h3>
                                <p className="text-slate-600 leading-relaxed text-lg">
                                    In today's competitive job market, 75% of resumes never reach human eyes due to Applicant Tracking Systems (ATS).
                                    Even qualified candidates struggle to get noticed because their resumes aren't optimized for both AI screening and human review.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                viewport={{ once: true }}
                                className="space-y-6"
                            >
                                <h3 className="text-3xl font-bold text-slate-900">Our Solution</h3>
                                <p className="text-slate-600 leading-relaxed text-lg">
                                    Our AI Resume Builder combines cutting-edge artificial intelligence with industry expertise to create resumes that pass ATS filters
                                    and impress hiring managers. We've analyzed thousands of successful resumes to understand exactly what works.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                viewport={{ once: true }}
                                className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 border border-blue-100"
                            >
                                <p className="text-blue-900 font-semibold text-xl mb-3">
                                    "Your dream job shouldn't depend on knowing resume secrets."
                                </p>
                                <p className="text-slate-600">
                                    That's why we built an AI that knows them all and applies them for you.
                                </p>
                            </motion.div>
                        </div>

                        {/* Mission & Vision Cards */}
                        <div className="space-y-8">
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                            >
                                <Card className="p-8 bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200 shadow-xl">
                                    <div className="flex items-start gap-4">
                                        <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl p-4 flex-shrink-0">
                                            <Target className="h-8 w-8 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold mb-4 text-slate-900">Our Mission</h3>
                                            <p className="text-slate-600 leading-relaxed text-lg">
                                                To eliminate resume-related barriers in job applications and ensure every qualified candidate
                                                gets the opportunity to showcase their potential to the right employers.
                                            </p>
                                        </div>
                                    </div>
                                </Card>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                viewport={{ once: true }}
                            >
                                <Card className="p-8 bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-200 shadow-xl">
                                    <div className="flex items-start gap-4">
                                        <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl p-4 flex-shrink-0">
                                            <Users className="h-8 w-8 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold mb-4 text-slate-900">Our Vision</h3>
                                            <p className="text-slate-600 leading-relaxed text-lg">
                                                A world where every job seeker has access to professional, AI-optimized resumes that open doors to their dream careers.
                                            </p>
                                        </div>
                                    </div>
                                </Card>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Values Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="mb-20"
                    >
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                What Drives Us{" "}
                                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                    Forward
                                </span>
                            </h2>
                            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                                Our core values shape every feature we build and every interaction we have with our users.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {values.map((value, index) => {
                                const IconComponent = value.icon;
                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 40 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: index * 0.2 }}
                                        viewport={{ once: true }}
                                        className="group"
                                    >
                                        <Card className="p-8 group-hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                                            <div className="flex items-start gap-6">
                                                <div className={`bg-gradient-to-r ${value.color} p-4 rounded-2xl flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg`}>
                                                    <IconComponent className="h-8 w-8 text-white" />
                                                </div>
                                                <div>
                                                    <h4 className="text-2xl font-bold mb-4 group-hover:text-blue-600 transition-colors">
                                                        {value.title}
                                                    </h4>
                                                    <p className="text-slate-600 leading-relaxed text-lg mb-4">
                                                        {value.description}
                                                    </p>
                                                    <div className="space-y-2">
                                                        {value.features.map((feature, idx) => (
                                                            <div key={idx} className="flex items-center gap-2">
                                                                <CheckCircle className="h-4 w-4 text-green-500" />
                                                                <span className="text-sm text-slate-600">{feature}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </Card>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>

                    {/* Team Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="mb-20"
                    >
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                Meet Our{" "}
                                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                    Expert Team
                                </span>
                            </h2>
                            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                                A passionate team of AI engineers, career coaches, and design experts working together to build
                                the most effective resume creation platform for the modern job market.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {team.map((member, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="group"
                                >
                                    <Card className="text-center p-6 group-hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white/80 backdrop-blur-sm border-0 shadow-lg flex flex-col h-full">
                                        <div className={`w-20 h-20 bg-gradient-to-r ${member.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                                            <span className="text-2xl font-bold text-white">{member.avatar}</span>
                                        </div>
                                        <h4 className="text-xl font-bold text-slate-900 mb-2">{member.name}</h4>
                                        <p className="text-blue-600 font-semibold mb-2">{member.role}</p>
                                        <p className="text-sm text-slate-600 mb-2">{member.expertise}</p>
                                        <p className="text-xs text-slate-500">{member.experience}</p>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Technology Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="mb-20"
                    >
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                Cutting-Edge{" "}
                                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                    Technology
                                </span>
                            </h2>
                            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                                We leverage the latest AI and machine learning technologies to deliver exceptional results.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {technologies.map((tech, index) => {
                                const IconComponent = tech.icon;
                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 40 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: index * 0.2 }}
                                        viewport={{ once: true }}
                                        className="group"
                                    >
                                        <Card className="p-8 group-hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white/80 backdrop-blur-sm border-0 shadow-lg flex flex-col h-full">
                                            <div className="flex items-start gap-6">
                                                <div className={`bg-gradient-to-r ${tech.color} p-4 rounded-2xl flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg`}>
                                                    <IconComponent className="h-8 w-8 text-white" />
                                                </div>
                                                <div>
                                                    <h4 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
                                                        {tech.name}
                                                    </h4>
                                                    <p className="text-slate-600 leading-relaxed">
                                                        {tech.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </Card>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>

                    {/* Journey Timeline */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="mb-20"
                    >
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                Our{" "}
                                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                    Journey
                                </span>
                            </h2>
                            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                                From humble beginnings to revolutionizing resume building with AI.
                            </p>
                        </div>

                        <div className="relative">
                            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500"></div>
                            <div className="space-y-12">
                                {milestones.map((milestone, index) => {
                                    const IconComponent = milestone.icon;
                                    const isEven = index % 2 === 0;
                                    return (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.8, delay: index * 0.2 }}
                                            viewport={{ once: true }}
                                            className={`flex items-center ${isEven ? 'flex-row' : 'flex-row-reverse'}`}
                                        >
                                            <div className={`w-1/2 ${isEven ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                                                <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                                                    <div className={`flex items-center gap-4 ${isEven ? 'flex-row-reverse' : 'flex-row'}`}>
                                                        <div className={`bg-gradient-to-r ${milestone.color} p-3 rounded-xl shadow-lg`}>
                                                            <IconComponent className="h-6 w-6 text-white" />
                                                        </div>
                                                        <div>
                                                            <div className="text-2xl font-bold text-slate-900 mb-2">{milestone.year}</div>
                                                            <h4 className="text-lg font-semibold text-slate-800 mb-2">{milestone.title}</h4>
                                                            <p className="text-slate-600">{milestone.description}</p>
                                                        </div>
                                                    </div>
                                                </Card>
                                            </div>
                                            <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-lg"></div>
                                            <div className="w-1/2"></div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>
                    </motion.div>

                    {/* CTA Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center"
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
                                    Join thousands of professionals who've already upgraded their job search with our AI-powered resume builder.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                    <Button
                                        size="lg"
                                        className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                                    >
                                        <Sparkles className="h-6 w-6 mr-3" />
                                        Start Building Now
                                        <ArrowRight className="h-6 w-6 ml-3" />
                                    </Button>
                                    <Button
                                        size="lg"
                                        variant="outline"
                                        className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-2xl"
                                    >
                                        <MessageCircle className="h-6 w-6 mr-3" />
                                        Contact Us
                                    </Button>
                                </div>
                                <div className="flex flex-wrap justify-center gap-6 mt-8">
                                    <div className="flex items-center gap-2 text-sm text-blue-200">
                                        <Shield className="h-4 w-4 text-green-400" />
                                        <span>ATS-Optimized</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-blue-200">
                                        <Zap className="h-4 w-4 text-yellow-400" />
                                        <span>Instant Results</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-blue-200">
                                        <Award className="h-4 w-4 text-purple-400" />
                                        <span>Professional Quality</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </Section>
        </div>
    );
};

export default AboutPageEnhanced;