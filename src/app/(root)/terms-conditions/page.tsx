"use client";
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FileText, Shield, AlertCircle, Scale, Phone, Mail } from 'lucide-react';
import Section from '@/components/Base/Section';

const TermsConditionsPage = () => {
    const sections = [
        {
            title: "Platform Information",
            icon: FileText,
            content: [
                "This document is an electronic record under the Information Technology Act, 2000 and applicable amendments.",
                "The Platform https://resumebot.co.in/ ('Website') includes related mobile site and mobile applications.",
                "The Platform is owned by ResumeBot, incorporated under the Companies Act, 1956 with registered office at A1-203 Akshar Elementa, Pune, India.",
                "By using the Platform, you agree to be bound by these Terms of Use and applicable policies."
            ]
        },
        {
            title: "User Obligations",
            icon: Shield,
            content: [
                "You must provide true, accurate and complete information during and after registration.",
                "You are responsible for all acts done through your registered account on the Platform.",
                "You must independently assess that the Services meet your requirements.",
                "You agree to pay the charges associated with availing the Services.",
                "You agree not to use the Platform for any unlawful, illegal or forbidden purpose."
            ]
        },
        {
            title: "Platform Rights & Limitations",
            icon: Scale,
            content: [
                "Neither we nor third parties provide warranty for accuracy, timeliness, or completeness of information.",
                "The contents of the Platform are proprietary and you have no authority to claim intellectual property rights.",
                "Your use of Services is at your own risk and discretion.",
                "We may contain links to third-party websites governed by their own terms and policies.",
                "Unauthorized use may lead to action under these Terms and applicable laws."
            ]
        }
    ];

    return (
        <Section>
            <div className="container mx-auto py-20">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <Scale className="h-8 w-8 text-primary" />
                        <Badge variant="secondary" className="text-sm font-medium">
                            Legal Document
                        </Badge>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                        Terms & Conditions
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        Please read these terms and conditions carefully before using our Platform.
                        By accessing or using ResumeBot, you agree to be bound by these terms.
                    </p>
                </div>

                {/* Key Points Alert */}
                <Card className="mb-12 border-amber-200 bg-amber-50 dark:bg-amber-950/20 dark:border-amber-800">
                    <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                            <AlertCircle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">
                                    Important Notice
                                </h3>
                                <p className="text-sm text-amber-700 dark:text-amber-300 leading-relaxed">
                                    <strong>By accessing, browsing or using the Platform, you indicate your agreement to all terms and conditions.</strong>
                                    These terms can be modified at any time. It is your responsibility to review these terms periodically.
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Main Sections */}
                <div className="space-y-8 mb-16">
                    {sections.map((section, index) => {
                        const IconComponent = section.icon;
                        return (
                            <Card key={index} className="overflow-hidden">
                                <CardHeader className="bg-muted/30">
                                    <CardTitle className="flex items-center gap-3 text-xl">
                                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                                            <IconComponent className="h-5 w-5 text-primary" />
                                        </div>
                                        {section.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="p-6">
                                    <ul className="space-y-3">
                                        {section.content.map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                                                <span className="text-muted-foreground leading-relaxed">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>

                {/* Additional Terms */}
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-lg">Indemnification</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                You shall indemnify and hold harmless ResumeBot, its affiliates, and their officers,
                                directors, agents, and employees from any claim, demand, or actions including reasonable
                                attorney's fees, made by any third party due to your breach of these Terms.
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle className="text-lg">Force Majeure</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Neither party shall be liable for failure to perform obligations if performance is
                                prevented or delayed by a force majeure event beyond reasonable control.
                            </p>
                        </CardContent>
                    </Card>
                </div>

                {/* Governing Law */}
                <Card className="mb-16 bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Scale className="h-5 w-5 text-primary" />
                            Governing Law & Jurisdiction
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-3 text-sm text-muted-foreground">
                            <p>
                                <strong>Governing Law:</strong> These Terms and any dispute relating to them shall be governed
                                by and construed in accordance with the laws of India.
                            </p>
                            <p>
                                <strong>Jurisdiction:</strong> All disputes arising out of or in connection with these Terms
                                shall be subject to the exclusive jurisdiction of the courts in Pune and Maharashtra.
                            </p>
                        </div>
                    </CardContent>
                </Card>

                {/* Contact Information */}
                <Card className="text-center">
                    <CardHeader>
                        <CardTitle>Contact Us</CardTitle>
                        <p className="text-muted-foreground">
                            All concerns or communications relating to these Terms must be communicated to us using the contact information below.
                        </p>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-col sm:flex-row justify-center gap-6">
                            <div className="flex items-center gap-2 justify-center">
                                <Mail className="h-4 w-4 text-primary" />
                                <span className="text-sm">support@resumebot.co.in</span>
                            </div>
                            <div className="flex items-center gap-2 justify-center">
                                <Phone className="h-4 w-4 text-primary" />
                                <span className="text-sm">Monday - Friday (9:00 - 18:00)</span>
                            </div>
                        </div>
                        <div className="mt-4 text-xs text-muted-foreground">
                            <p>ResumeBot</p>
                            <p>A1-203 Akshar Elementa, Pune, India</p>
                        </div>
                    </CardContent>
                </Card>

                {/* Last Updated */}
                <div className="text-center mt-12 text-sm text-muted-foreground">
                    <p>This document was last updated on the date of your access.</p>
                    <p>Please check periodically for updates to these Terms & Conditions.</p>
                </div>
            </div>
        </Section>
    );
};

export default TermsConditionsPage;