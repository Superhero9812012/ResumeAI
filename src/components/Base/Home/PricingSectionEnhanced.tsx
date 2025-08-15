"use client";
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, Star, Sparkles, Download, FileText, Bot, Zap, Shield, Award, ArrowRight, Crown, Users, TrendingUp } from 'lucide-react';
import Section from '../Section';
import { motion } from 'framer-motion';

export const PricingSectionEnhanced = () => {
    const features = [
        { icon: Bot, title: 'AI-Powered Resume Building', description: 'Advanced AI analyzes your profile and creates tailored resumes' },
        { icon: FileText, title: 'All Premium Templates', description: 'Access to all 6 professional resume templates' },
        { icon: Zap, title: 'Unlimited Resume Generation', description: 'Create as many resumes as you need, no limits' },
        { icon: Download, title: 'Multiple Export Formats', description: 'Download in PDF, DOCX, and other formats' },
        { icon: Shield, title: 'ATS Optimization', description: 'Ensures your resume passes Applicant Tracking Systems' },
        { icon: Award, title: 'Keyword Analysis', description: 'Smart keyword suggestions for your industry' },
        { icon: Sparkles, title: 'Real-time Optimization', description: 'Get instant feedback and improvement suggestions' },
        { icon: Star, title: 'Priority Support', description: '24/7 customer support with priority response' }
    ];

    return (
        <Section id="pricing">
            <div className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
            <div className="container mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <Badge className="mb-4 px-4 py-2 text-sm font-medium bg-gradient-to-r from-blue-500 to-purple-600 text-white border-0">
                        <Sparkles size={14} className="mr-2" />
                        Simple Pricing
                    </Badge>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                        Choose Your Perfect
                        <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
                            Pricing Plan
                        </span>
                    </h2>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                        Get lifetime access to our AI-powered resume builder with all premium features included. No recurring fees, no surprises.
                    </p>
                </motion.div>

                {/* Main Pricing Card */}
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="relative mb-12"
                    >
                        <Card className="border-2 border-blue-500 shadow-2xl bg-gradient-to-br from-blue-500/5 to-blue-500/10 overflow-hidden">
                            {/* Popular Badge */}
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                <Badge className="bg-blue-600 text-white px-4 py-1.5 text-sm font-semibold">
                                    <Star className="h-4 w-4 mr-1 fill-current" />
                                    Most Popular Choice
                                </Badge>
                            </div>

                            <CardHeader className="text-center pt-12 pb-8">
                                <CardTitle className="text-3xl font-bold mb-2">AI Resume Builder Pro</CardTitle>
                                <div className="flex items-center justify-center gap-4 mb-4">
                                    <span className="text-5xl font-bold text-blue-600">₹199</span>
                                    <div className="text-left">
                                        <div className="text-sm text-slate-500 line-through">₹499</div>
                                        <div className="text-sm font-medium text-green-600">60% OFF</div>
                                    </div>
                                </div>
                                <CardDescription className="text-lg">
                                    One-time payment • Lifetime access • No recurring fees
                                </CardDescription>
                            </CardHeader>

                            <CardContent className="px-8 pb-8">
                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    {features.map((feature, index) => {
                                        const IconComponent = feature.icon;
                                        return (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ delay: index * 0.1 }}
                                                className="flex items-start gap-3"
                                            >
                                                <div className="flex-shrink-0 w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center">
                                                    <IconComponent className="h-5 w-5 text-blue-600" />
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-sm mb-1">{feature.title}</h4>
                                                    <p className="text-xs text-slate-600 leading-relaxed">{feature.description}</p>
                                                </div>
                                            </motion.div>
                                        );
                                    })}
                                </div>

                                <div className="space-y-4">
                                    <Button size="lg" className="w-full text-lg py-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.02]">
                                        <Sparkles className="h-5 w-5 mr-2" />
                                        Get Started - Pay ₹199 Once
                                    </Button>
                                    <p className="text-center text-sm text-slate-500">
                                        ✨ Instant access • 💎 No hidden fees • 🔒 Secure payment
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Bottom CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white">
                            <h3 className="text-2xl font-bold mb-4">Join 10,000+ Job Seekers Who Got Hired</h3>
                            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                                Our AI-powered resume builder has helped thousands of professionals land their dream jobs. 
                                Join them today and take your career to the next level.
                            </p>
                            <Button 
                                size="lg" 
                                className="bg-white text-blue-600 hover:bg-slate-100 px-8 py-4 text-lg font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                Start Building Now
                                <ArrowRight size={20} className="ml-2" />
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>
            </div>
        </Section>
    );
}; 
