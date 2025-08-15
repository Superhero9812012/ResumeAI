import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Mail, MessageCircle, Clock, MapPin, Phone, Send, CheckCircle, Star, Headphones, Users, Zap } from 'lucide-react';
import Section from '../Section';

export const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        category: '',
        message: ''
    });

    const contactMethods = [
        {
            icon: Mail,
            title: 'Email Support',
            description: 'Get detailed help via email',
            contact: 'support@airesume.com',
            responseTime: 'Within 24 hours',
            color: 'from-blue-500 to-cyan-500'
        },
        {
            icon: MessageCircle,
            title: 'Live Chat',
            description: 'Instant help when you need it',
            contact: 'Available 24/7',
            responseTime: 'Immediate',
            color: 'from-green-500 to-emerald-500'
        },
        {
            icon: Phone,
            title: 'Phone Support',
            description: 'Speak directly with our team',
            contact: '+91 98765 43210',
            responseTime: 'Mon-Fri 9AM-6PM IST',
            color: 'from-purple-500 to-violet-500'
        }
    ];

    const faqs = [
        {
            question: 'How does the AI resume optimization work?',
            answer: 'Our AI analyzes job descriptions, industry trends, and ATS requirements to optimize your resume content, format, and keywords for maximum impact.'
        },
        {
            question: 'Can I get a refund if I\'m not satisfied?',
            answer: 'Yes! We offer a 30-day money-back guarantee. If you\'re not completely satisfied with your results, we\'ll refund your payment.'
        },
        {
            question: 'How many resumes can I create?',
            answer: 'With your one-time payment of ₹199, you get unlimited resume creation with all our premium templates and features.'
        },
        {
            question: 'Is my data secure?',
            answer: 'Absolutely. We use enterprise-grade encryption and never share your personal information with third parties. Your privacy is our priority.'
        }
    ];

    const handleInputChange = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Handle form submission here
    };

    return (
        <Section id="contact">
            <div className="container mx-auto py-20">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <Headphones className="h-8 w-8 text-primary" />
                        <Badge variant="secondary" className="text-sm font-medium">
                            24/7 Support Available
                        </Badge>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                        We're Here to Help
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        Have questions about our AI resume builder? Need technical support? Want to share feedback?
                        Our team is ready to assist you every step of the way.
                    </p>
                </div>

                {/* Contact Methods */}
                <div className="grid md:grid-cols-3 gap-6 mb-16">
                    {contactMethods.map((method, index) => {
                        const IconComponent = method.icon;
                        return (
                            <Card key={index} className="text-center p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                                <div className={`w-16 h-16 bg-gradient-to-r ${method.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                                    <IconComponent className="h-8 w-8 text-white" />
                                </div>
                                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{method.title}</h3>
                                <p className="text-muted-foreground mb-3">{method.description}</p>
                                <div className="space-y-1">
                                    <div className="font-semibold text-primary">{method.contact}</div>
                                    <div className="text-sm text-muted-foreground flex items-center justify-center gap-1">
                                        <Clock className="h-3 w-3" />
                                        {method.responseTime}
                                    </div>
                                </div>
                            </Card>
                        );
                    })}
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <Card className="shadow-xl border-2 border-primary/10">
                        <CardHeader className="text-center pb-6">
                            <CardTitle className="text-2xl flex items-center justify-center gap-2">
                                <Send className="h-6 w-6 text-primary" />
                                Send Us a Message
                            </CardTitle>
                            <p className="text-muted-foreground">Fill out the form below and we'll get back to you as soon as possible.</p>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="name">Full Name *</Label>
                                        <Input
                                            id="name"
                                            placeholder="Enter your full name"
                                            value={formData.name}
                                            onChange={(e) => handleInputChange('name', e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email Address *</Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder="Enter your email"
                                            value={formData.email}
                                            onChange={(e) => handleInputChange('email', e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="category">Category</Label>
                                    <Select onValueChange={(value) => handleInputChange('category', value)}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select a category" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="general">General Inquiry</SelectItem>
                                            <SelectItem value="technical">Technical Support</SelectItem>
                                            <SelectItem value="billing">Billing Question</SelectItem>
                                            <SelectItem value="feature">Feature Request</SelectItem>
                                            <SelectItem value="bug">Bug Report</SelectItem>
                                            <SelectItem value="feedback">Feedback</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="subject">Subject *</Label>
                                    <Input
                                        id="subject"
                                        placeholder="Brief description of your inquiry"
                                        value={formData.subject}
                                        onChange={(e) => handleInputChange('subject', e.target.value)}
                                        required
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="message">Message *</Label>
                                    <Textarea
                                        id="message"
                                        placeholder="Tell us more about your question or feedback..."
                                        rows={5}
                                        value={formData.message}
                                        onChange={(e) => handleInputChange('message', e.target.value)}
                                        required
                                    />
                                </div>

                                <Button type="submit" className="w-full text-lg py-6 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.02]">
                                    <Send className="h-5 w-5 mr-2" />
                                    Send Message
                                </Button>

                                <p className="text-center text-sm text-muted-foreground">
                                    We typically respond within 24 hours during business days.
                                </p>
                            </form>
                        </CardContent>
                    </Card>

                    {/* FAQ Section */}
                    <div>
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                <MessageCircle className="h-6 w-6 text-primary" />
                                Frequently Asked Questions
                            </h3>
                            <p className="text-muted-foreground">
                                Quick answers to common questions about our AI resume builder.
                            </p>
                        </div>

                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <Card key={index} className="p-6 hover:shadow-md transition-shadow">
                                    <h4 className="font-semibold text-primary mb-2 flex items-start gap-2">
                                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                                        {faq.question}
                                    </h4>
                                    <p className="text-muted-foreground text-sm leading-relaxed pl-7">
                                        {faq.answer}
                                    </p>
                                </Card>
                            ))}
                        </div>

                        {/* Additional Support Info */}
                        <Card className="mt-8 bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
                            <CardContent className="p-6">
                                <div className="flex items-start gap-4">
                                    <div className="bg-primary rounded-full p-2 flex-shrink-0">
                                        <Star className="h-5 w-5 text-primary-foreground" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-2">Premium Support Included</h4>
                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            With your ₹199 purchase, you get priority support, detailed guidance on resume optimization,
                                            and access to our career experts who can help you succeed in your job search.
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="mt-16 text-center bg-gradient-to-r from-muted/50 to-muted/30 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
                    <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                        Our support team is available 24/7 to help you create the perfect resume and land your dream job.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Button variant="outline" className="flex items-center gap-2">
                            <MessageCircle className="h-4 w-4" />
                            Start Live Chat
                        </Button>
                        <Button variant="outline" className="flex items-center gap-2">
                            <Phone className="h-4 w-4" />
                            Schedule Call
                        </Button>
                        <Button variant="outline" className="flex items-center gap-2">
                            <Mail className="h-4 w-4" />
                            Email Us
                        </Button>
                    </div>
                </div>
            </div>
        </Section>
    );
};