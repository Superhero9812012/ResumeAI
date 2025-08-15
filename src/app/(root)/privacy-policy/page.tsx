"use client";
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Database, Users, Lock, Eye, FileText, Phone, Mail, AlertTriangle } from 'lucide-react';
import Section from '@/components/Base/Section';

const PrivacyPolicyPage = () => {
    const sections = [
        {
            title: "Information Collection",
            icon: Database,
            content: [
                "Personal data provided during sign-up: name, date of birth, address, telephone/mobile number, email ID",
                "Identity or address proof information as shared by you",
                "Sensitive personal data with your consent: bank account, credit/debit card, payment information",
                "Biometric information (facial features, physiological information) for certain opted features",
                "Behavioral data, preferences, and transaction information on the Platform",
                "Information from third-party business partners (governed by their privacy policies)"
            ]
        },
        {
            title: "Information Usage",
            icon: Eye,
            content: [
                "Provide the services you request and enhance customer experience",
                "Assist in handling and fulfilling orders with business partners",
                "Resolve disputes and troubleshoot problems",
                "Inform you about online and offline offers, products, services, and updates",
                "Customize your experience and detect fraud or criminal activity",
                "Enforce terms and conditions and conduct marketing research and surveys",
                "You can opt-out of marketing uses of your personal data"
            ]
        },
        {
            title: "Information Sharing",
            icon: Users,
            content: [
                "Internal sharing within group entities, corporate entities, and affiliates for service access",
                "Disclosure to sellers, business partners, logistics partners, and payment service providers",
                "Sharing required for service provision, legal compliance, and fraud prevention",
                "Disclosure to government agencies or law enforcement if required by law",
                "Sharing to protect rights, property, or safety of users and the general public",
                "Third-party entities may market to you unless you explicitly opt-out"
            ]
        },
        {
            title: "Security & Protection",
            icon: Lock,
            content: [
                "Reasonable security practices and procedures to protect your data",
                "Secure server usage when you access your account information",
                "Protection against unauthorized access, disclosure, loss, or misuse",
                "Users responsible for protecting their login and password records",
                "Data transmission over internet carries inherent risks that cannot be completely secured",
                "We adhere to security guidelines once information is in our possession"
            ]
        }
    ];

    return (
        <Section>
            <div className="container mx-auto py-20">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <Shield className="h-8 w-8 text-primary" />
                        <Badge variant="secondary" className="text-sm font-medium">
                            Data Protection
                        </Badge>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                        Privacy Policy
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        We are committed to protecting your privacy and ensuring the security of your personal information.
                        This policy explains how we collect, use, and protect your data.
                    </p>
                </div>

                {/* Important Notice */}
                <Card className="mb-12 border-blue-200 bg-blue-50 dark:bg-blue-950/20 dark:border-blue-800">
                    <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                            <AlertTriangle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                                    Data Processing Notice
                                </h3>
                                <p className="text-sm text-blue-700 dark:text-blue-300 leading-relaxed">
                                    Your personal data will primarily be stored and processed in India. By using our Platform,
                                    you agree to be governed by Indian laws including data protection and privacy regulations.
                                    <strong> We do not offer services outside India.</strong>
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

                {/* Additional Rights & Policies */}
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-lg flex items-center gap-2">
                                <FileText className="h-5 w-5 text-primary" />
                                Data Retention & Deletion
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div>
                                <h4 className="font-medium mb-2">Account Deletion</h4>
                                <p className="text-sm text-muted-foreground">
                                    You can delete your account through profile settings, resulting in loss of all account information.
                                    We may refuse deletion if there are pending grievances or services.
                                </p>
                            </div>
                            <div>
                                <h4 className="font-medium mb-2">Data Retention</h4>
                                <p className="text-sm text-muted-foreground">
                                    We retain personal data only as long as required for collection purposes or as required by law.
                                    Data may be retained in anonymized form for analytical purposes.
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle className="text-lg flex items-center gap-2">
                                <Eye className="h-5 w-5 text-primary" />
                                Your Rights & Consent
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div>
                                <h4 className="font-medium mb-2">Access & Update</h4>
                                <p className="text-sm text-muted-foreground">
                                    You can access, rectify, and update your personal data through Platform functionalities.
                                </p>
                            </div>
                            <div>
                                <h4 className="font-medium mb-2">Consent Withdrawal</h4>
                                <p className="text-sm text-muted-foreground">
                                    You can withdraw consent by contacting our Grievance Officer. Note that withdrawal
                                    is not retrospective and may affect service provision.
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Security Warning */}
                <Card className="mb-16 border-red-200 bg-red-50 dark:bg-red-950/20 dark:border-red-800">
                    <CardHeader>
                        <CardTitle className="text-red-800 dark:text-red-200 flex items-center gap-2">
                            <AlertTriangle className="h-5 w-5" />
                            Security Warning
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-red-700 dark:text-red-300 leading-relaxed">
                            <strong>Important:</strong> We will never ask for your debit/credit card PIN, net-banking,
                            or mobile banking passwords via email or phone calls. If you receive such requests,
                            do not provide this information and report it immediately to law enforcement agencies.
                        </p>
                    </CardContent>
                </Card>

                {/* Contact & Grievance */}
                <Card className="text-center">
                    <CardHeader>
                        <CardTitle>Contact & Grievance Officer</CardTitle>
                        <p className="text-muted-foreground">
                            For privacy concerns, data requests, or to withdraw consent, please contact us.
                        </p>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
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

                            <div className="mt-6 p-4 bg-muted/30 rounded-lg">
                                <p className="text-sm text-muted-foreground mb-2">
                                    <strong>For consent withdrawal requests:</strong>
                                </p>
                                <p className="text-xs text-muted-foreground">
                                    Please mention "Withdrawal of consent for processing personal data" in your subject line.
                                </p>
                            </div>

                            <div className="mt-4 text-xs text-muted-foreground">
                                <p>ResumeBot</p>
                                <p>A1-203 Akshar Elementa, Pune, India</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Policy Updates */}
                <div className="text-center mt-12 text-sm text-muted-foreground">
                    <p className="mb-2">
                        <strong>Policy Updates:</strong> We may update this Privacy Policy to reflect changes to our information practices.
                    </p>
                    <p>We will notify you about significant changes as required under applicable laws.</p>
                    <p className="mt-2">Please check this policy periodically for updates.</p>
                </div>
            </div>
        </Section>
    );
};

export default PrivacyPolicyPage;