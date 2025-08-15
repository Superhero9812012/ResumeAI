import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, Star, Sparkles, Download, FileText, Bot, Zap, Shield, Award } from 'lucide-react';
import Section from '../Section';

export const PricingSection = () => {
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
            <div className="container mx-auto py-20 min-h-screen">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <Sparkles className="h-8 w-8 text-primary" />
                        <Badge variant="secondary" className="text-sm font-medium">
                            One-Time Payment
                        </Badge>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                        Simple, Affordable Pricing
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        Get lifetime access to our AI-powered resume builder with all premium features included.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    {/* Main Pricing Card */}
                    <div className="relative mb-12">
                        <Card className="border-2 border-primary shadow-2xl bg-gradient-to-br from-primary/5 to-primary/10 overflow-hidden">
                            {/* Popular Badge */}
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                <Badge className="bg-primary text-primary-foreground px-4 py-1.5 text-sm font-semibold">
                                    <Star className="h-4 w-4 mr-1 fill-current" />
                                    Most Popular Choice
                                </Badge>
                            </div>

                            <CardHeader className="text-center pt-12 pb-8">
                                <CardTitle className="text-3xl font-bold mb-2">AI Resume Builder Pro</CardTitle>
                                <div className="flex items-center justify-center gap-4 mb-4">
                                    <span className="text-5xl font-bold text-primary">₹199</span>
                                    <div className="text-left">
                                        <div className="text-sm text-muted-foreground line-through">₹499</div>
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
                                            <div key={index} className="flex items-start gap-3">
                                                <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                                                    <IconComponent className="h-5 w-5 text-primary" />
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-sm mb-1">{feature.title}</h4>
                                                    <p className="text-xs text-muted-foreground leading-relaxed">{feature.description}</p>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>

                                <div className="space-y-4">
                                    <Button size="lg" className="w-full text-lg py-6 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.02]">
                                        <Sparkles className="h-5 w-5 mr-2" />
                                        Get Started - Pay ₹199 Once
                                    </Button>
                                    <p className="text-center text-sm text-muted-foreground">
                                        ✨ Instant access • 💎 No hidden fees • 🔒 Secure payment
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* FAQ or Social Proof */}
                    <div className="text-center bg-gradient-to-r from-muted/50 to-muted/30 rounded-2xl p-8">
                        <h3 className="text-2xl font-bold mb-4">Join 10,000+ Job Seekers Who Got Hired</h3>
                        <div className="grid md:grid-cols-3 gap-6 text-center">
                            <div>
                                <div className="text-3xl font-bold text-primary">95%</div>
                                <div className="text-sm text-muted-foreground">ATS Pass Rate</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-primary">2.5x</div>
                                <div className="text-sm text-muted-foreground">More Interviews</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-primary">85%</div>
                                <div className="text-sm text-muted-foreground">Get Job Offers</div>
                            </div>
                        </div>
                        <p className="text-muted-foreground mt-4 text-sm">
                            "This AI resume builder helped me land my dream job in just 2 weeks!" - Sarah M., Software Engineer
                        </p>
                    </div>
                </div>
            </div>
        </Section>
    );
};