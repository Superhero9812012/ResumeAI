import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BrainCircuit, Users, Target, Zap, Shield, Award, TrendingUp, Heart, Lightbulb, Globe } from 'lucide-react';
import Section from '../Section';

export const AboutSection = () => {
    const stats = [
        { number: '10,000+', label: 'Resumes Created', icon: TrendingUp },
        { number: '95%', label: 'ATS Pass Rate', icon: Shield },
        { number: '2.5x', label: 'More Interviews', icon: Award },
        { number: '24/7', label: 'AI Support', icon: Zap }
    ];

    const values = [
        {
            icon: Target,
            title: 'Precision & Quality',
            description: 'Every resume is crafted with precision using advanced AI algorithms that understand what recruiters and ATS systems are looking for.',
            color: 'from-blue-500 to-cyan-500'
        },
        {
            icon: Heart,
            title: 'User-First Approach',
            description: 'We put our users at the center of everything we do, ensuring an intuitive experience that delivers real results.',
            color: 'from-red-500 to-pink-500'
        },
        {
            icon: Lightbulb,
            title: 'Innovation & Growth',
            description: 'Constantly evolving with the latest AI technology and job market trends to keep you ahead of the competition.',
            color: 'from-yellow-500 to-orange-500'
        },
        {
            icon: Globe,
            title: 'Global Accessibility',
            description: 'Making professional resume building accessible to job seekers worldwide, regardless of their background or experience.',
            color: 'from-green-500 to-emerald-500'
        }
    ];

    return (
        <Section id="about">
            <div className="container mx-auto py-20">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <BrainCircuit className="h-8 w-8 text-primary" />
                        <Badge variant="secondary" className="text-sm font-medium">
                            Powered by Advanced AI
                        </Badge>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                        Revolutionizing Resume Building
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        We're on a mission to democratize career success by making professional, ATS-optimized resumes accessible to everyone through the power of artificial intelligence.
                    </p>
                </div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                    {/* Story Section */}
                    <div className="space-y-6">
                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold">The Problem We Solve</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                In today's competitive job market, 75% of resumes never reach human eyes due to Applicant Tracking Systems (ATS).
                                Even qualified candidates struggle to get noticed because their resumes aren't optimized for both AI screening and human review.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold">Our Solution</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Our AI Resume Builder combines cutting-edge artificial intelligence with industry expertise to create resumes that pass ATS filters
                                and impress hiring managers. We've analyzed thousands of successful resumes to understand exactly what works.
                            </p>
                        </div>

                        <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-6">
                            <p className="text-primary font-semibold text-lg mb-2">
                                "Your dream job shouldn't depend on knowing resume secrets."
                            </p>
                            <p className="text-sm text-muted-foreground">
                                That's why we built an AI that knows them all and applies them for you.
                            </p>
                        </div>
                    </div>

                    {/* Mission & Team Cards */}
                    <div className="space-y-6">
                        <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                            <div className="flex items-start gap-4">
                                <div className="bg-primary rounded-full p-3 flex-shrink-0">
                                    <Target className="h-6 w-6 text-primary-foreground" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-3">Our Mission</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        To eliminate resume-related barriers in job applications and ensure every qualified candidate
                                        gets the opportunity to showcase their potential to the right employers.
                                    </p>
                                </div>
                            </div>
                        </Card>

                        <Card className="p-8 bg-gradient-to-br from-secondary/20 to-secondary/10 border-secondary/30">
                            <div className="flex items-start gap-4">
                                <div className="bg-secondary rounded-full p-3 flex-shrink-0">
                                    <Users className="h-6 w-6 text-secondary-foreground" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-3">Our Team</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        A passionate team of AI engineers, career coaches, and design experts working together to build
                                        the most effective resume creation platform for the modern job market.
                                    </p>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
                    {stats.map((stat, index) => {
                        const IconComponent = stat.icon;
                        return (
                            <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <IconComponent className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-3xl font-bold text-primary mb-1">{stat.number}</div>
                                <div className="text-sm text-muted-foreground">{stat.label}</div>
                            </Card>
                        );
                    })}
                </div>

                {/* Values Section */}
                <div>
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-bold mb-4">What Drives Us Forward</h3>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Our core values shape every feature we build and every interaction we have with our users.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {values.map((value, index) => {
                            const IconComponent = value.icon;
                            return (
                                <Card key={index} className="p-8 group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                    <div className="flex items-start gap-4">
                                        <div className={`bg-gradient-to-r ${value.color} p-3 rounded-xl flex-shrink-0 group-hover:scale-110 transition-transform`}>
                                            <IconComponent className="h-6 w-6 text-white" />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                                                {value.title}
                                            </h4>
                                            <p className="text-muted-foreground leading-relaxed">
                                                {value.description}
                                            </p>
                                        </div>
                                    </div>
                                </Card>
                            );
                        })}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="mt-20 text-center bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-12">
                    <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Career?</h3>
                    <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                        Join thousands of professionals who've already upgraded their job search with our AI-powered resume builder.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Shield className="h-4 w-4 text-green-500" />
                            <span>ATS-Optimized</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Zap className="h-4 w-4 text-blue-500" />
                            <span>Instant Results</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Award className="h-4 w-4 text-purple-500" />
                            <span>Professional Quality</span>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};