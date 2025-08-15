import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { HelpCircle, ChevronDown, ChevronUp, Search, Bot, CreditCard, Shield, Download, Users, Zap, MessageCircle, Star } from 'lucide-react';
import Section from '../Section';

interface FAQ {
    id: string;
    question: string;
    answer: string;
    category: 'general' | 'ai' | 'pricing' | 'technical' | 'templates' | 'support';
    popular?: boolean;
}

export const FAQSection = () => {
    const [openItems, setOpenItems] = useState<string[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string>('all');
    const [searchTerm, setSearchTerm] = useState('');

    const faqs: FAQ[] = [
        // General Questions
        {
            id: 'what-is-ai-resume',
            question: 'What is an AI Resume Builder and how does it work?',
            answer: 'Our AI Resume Builder uses advanced artificial intelligence to analyze your professional information, job descriptions, and industry trends to create optimized resumes. It automatically formats content, suggests improvements, optimizes keywords for ATS systems, and ensures your resume meets current hiring standards.',
            category: 'general',
            popular: true
        },
        {
            id: 'who-should-use',
            question: 'Who should use this AI Resume Builder?',
            answer: 'Our platform is perfect for job seekers at all career levels - from fresh graduates to experienced professionals, career changers, freelancers, and anyone looking to improve their resume\'s effectiveness. Whether you\'re in tech, healthcare, finance, marketing, or any other industry, our AI adapts to your field.',
            category: 'general'
        },
        {
            id: 'time-to-create',
            question: 'How long does it take to create a resume?',
            answer: 'With our AI-powered system, you can create a professional resume in just 10-15 minutes! Simply input your information, choose a template, and let our AI optimize everything. The process includes data entry, AI optimization, template selection, and final review.',
            category: 'general',
            popular: true
        },

        // AI-Related Questions
        {
            id: 'ai-optimization',
            question: 'How does the AI optimize my resume for ATS systems?',
            answer: 'Our AI analyzes thousands of successful resumes and current ATS requirements to optimize your content. It ensures proper keyword density, formats sections correctly, uses ATS-friendly fonts and layouts, removes problematic elements, and structures information in a way that both ATS systems and human recruiters prefer.',
            category: 'ai',
            popular: true
        },
        {
            id: 'ai-accuracy',
            question: 'How accurate is the AI in understanding my career profile?',
            answer: 'Our AI has been trained on millions of professional profiles and job descriptions across industries. It achieves 95%+ accuracy in understanding career contexts, skill relevance, and industry requirements. The system continuously learns and improves with each resume created.',
            category: 'ai'
        },
        {
            id: 'customize-ai-suggestions',
            question: 'Can I customize or override AI suggestions?',
            answer: 'Absolutely! While our AI provides intelligent suggestions, you have complete control. You can edit any content, modify suggestions, add personal touches, choose different phrasings, and ensure your resume reflects your unique voice while maintaining optimization benefits.',
            category: 'ai'
        },

        // Pricing Questions
        {
            id: 'pricing-model',
            question: 'Why is it only ₹199 for lifetime access?',
            answer: 'We believe professional career tools should be accessible to everyone. Our one-time payment of ₹199 gives you lifetime access to all features, templates, and future updates. No hidden fees, no monthly subscriptions - just a single payment for unlimited resume creation.',
            category: 'pricing',
            popular: true
        },
        {
            id: 'refund-policy',
            question: 'Do you offer refunds if I\'m not satisfied?',
            answer: 'Yes! We offer a 30-day money-back guarantee. If you\'re not completely satisfied with your results or our service, contact us within 30 days of purchase for a full refund. We\'re confident you\'ll love what our AI can do for your career.',
            category: 'pricing'
        },
        {
            id: 'payment-methods',
            question: 'What payment methods do you accept?',
            answer: 'We accept all major payment methods including credit cards (Visa, Mastercard, American Express), debit cards, UPI, net banking, and digital wallets. All payments are processed securely through encrypted payment gateways.',
            category: 'pricing'
        },

        // Technical Questions
        {
            id: 'data-security',
            question: 'Is my personal information secure?',
            answer: 'Your privacy and security are our top priorities. We use enterprise-grade encryption, secure servers, and strict data protection protocols. Your information is never shared with third parties, and you can delete your data anytime. We\'re fully compliant with data protection regulations.',
            category: 'technical',
            popular: true
        },
        {
            id: 'export-formats',
            question: 'What file formats can I download my resume in?',
            answer: 'You can download your resume in multiple formats including PDF (recommended for applications), Microsoft Word (.docx), and plain text. PDF ensures consistent formatting across all devices and platforms, while Word format allows for further customization if needed.',
            category: 'technical'
        },
        {
            id: 'mobile-compatibility',
            question: 'Can I use this on my mobile device?',
            answer: 'Yes! Our platform is fully responsive and works seamlessly on smartphones, tablets, and desktops. You can create, edit, and download resumes from any device with an internet connection. The mobile experience is optimized for touch navigation.',
            category: 'technical'
        },

        // Templates Questions
        {
            id: 'template-variety',
            question: 'How many resume templates are available?',
            answer: 'We currently offer 6 professionally designed templates: Classic Professional, Modern Minimal, Corporate Clean, Creative Timeline, Executive Summary, and Original Professional. Each template is ATS-optimized and designed for different industries and career levels.',
            category: 'templates'
        },
        {
            id: 'template-customization',
            question: 'Can I customize the templates?',
            answer: 'Yes! While our templates are professionally designed, you can customize colors, fonts, section order, and layout elements to match your personal brand. The AI ensures all customizations remain ATS-friendly and professional.',
            category: 'templates'
        },
        {
            id: 'industry-specific',
            question: 'Are templates industry-specific?',
            answer: 'Our templates are versatile and work across industries, but some are better suited for specific fields. For example, Creative Timeline works great for design roles, while Corporate Clean is perfect for finance and consulting. Our AI helps recommend the best template for your industry.',
            category: 'templates'
        },

        // Support Questions
        {
            id: 'customer-support',
            question: 'What kind of support do you provide?',
            answer: 'We provide comprehensive support including 24/7 live chat, email support with 24-hour response time, phone support during business hours, detailed guides and tutorials, and access to career experts for resume optimization tips.',
            category: 'support'
        },
        {
            id: 'resume-review',
            question: 'Do you offer professional resume review services?',
            answer: 'Yes! As part of your ₹199 purchase, you get access to our career experts who can provide personalized feedback on your AI-generated resume. We also offer tips for job searching, interview preparation, and career advancement.',
            category: 'support'
        }
    ];

    const categories = [
        { id: 'all', label: 'All Questions', icon: HelpCircle, count: faqs.length },
        { id: 'general', label: 'General', icon: Users, count: faqs.filter(f => f.category === 'general').length },
        { id: 'ai', label: 'AI Features', icon: Bot, count: faqs.filter(f => f.category === 'ai').length },
        { id: 'pricing', label: 'Pricing', icon: CreditCard, count: faqs.filter(f => f.category === 'pricing').length },
        { id: 'technical', label: 'Technical', icon: Shield, count: faqs.filter(f => f.category === 'technical').length },
        { id: 'templates', label: 'Templates', icon: Download, count: faqs.filter(f => f.category === 'templates').length },
        { id: 'support', label: 'Support', icon: MessageCircle, count: faqs.filter(f => f.category === 'support').length }
    ];

    const toggleItem = (id: string) => {
        setOpenItems(prev =>
            prev.includes(id)
                ? prev.filter(item => item !== id)
                : [...prev, id]
        );
    };

    const filteredFAQs = faqs.filter(faq => {
        const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
        const matchesSearch = searchTerm === '' ||
            faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
            faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const popularFAQs = faqs.filter(faq => faq.popular);

    return (
        <Section id="faq">
            <div className="container mx-auto py-20">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <HelpCircle className="h-8 w-8 text-primary" />
                        <Badge variant="secondary" className="text-sm font-medium">
                            Get Instant Answers
                        </Badge>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        Everything you need to know about our AI Resume Builder. Can't find what you're looking for?
                        Our support team is here to help 24/7.
                    </p>
                </div>

                {/* Search Bar */}
                <div className="max-w-md mx-auto mb-12">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <input
                            type="text"
                            placeholder="Search questions..."
                            className="w-full pl-10 pr-4 py-3 border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>

                {/* Popular Questions */}
                {searchTerm === '' && selectedCategory === 'all' && (
                    <div className="mb-12">
                        <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                            <Star className="h-6 w-6 text-yellow-500" />
                            Most Popular Questions
                        </h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            {popularFAQs.map((faq) => (
                                <Card key={`popular-${faq.id}`} className="p-4 hover:shadow-md transition-shadow cursor-pointer border-l-4 border-l-primary" onClick={() => toggleItem(faq.id)}>
                                    <div className="flex items-center justify-between">
                                        <h4 className="font-semibold text-primary pr-4">{faq.question}</h4>
                                        {openItems.includes(faq.id) ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                                    </div>
                                    {openItems.includes(faq.id) && (
                                        <p className="mt-3 text-muted-foreground text-sm leading-relaxed">{faq.answer}</p>
                                    )}
                                </Card>
                            ))}
                        </div>
                    </div>
                )}

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {categories.map((category) => {
                        const IconComponent = category.icon;
                        return (
                            <Button
                                key={category.id}
                                variant={selectedCategory === category.id ? "default" : "outline"}
                                onClick={() => setSelectedCategory(category.id)}
                                className="transition-all duration-200 hover:scale-105"
                            >
                                <IconComponent className="h-4 w-4 mr-2" />
                                {category.label}
                                <Badge variant="secondary" className="ml-2 text-xs">
                                    {category.count}
                                </Badge>
                            </Button>
                        );
                    })}
                </div>

                {/* FAQ List */}
                <div className="max-w-4xl mx-auto space-y-4">
                    {filteredFAQs.length > 0 ? (
                        filteredFAQs.map((faq) => (
                            <Card key={faq.id} className="overflow-hidden hover:shadow-lg transition-shadow !py-0">
                                <Collapsible open={openItems.includes(faq.id)} onOpenChange={() => toggleItem(faq.id)}>
                                    <CollapsibleTrigger asChild>
                                        <CardContent className="p-6 cursor-pointer hover:bg-muted/50 transition-colors">
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-3">
                                                    {faq.popular && <Star className="h-4 w-4 text-yellow-500 fill-current flex-shrink-0" />}
                                                    <h3 className="text-lg font-semibold text-left pr-4">{faq.question}</h3>
                                                </div>
                                                {openItems.includes(faq.id) ?
                                                    <ChevronUp className="h-5 w-5 text-muted-foreground flex-shrink-0" /> :
                                                    <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                                                }
                                            </div>
                                        </CardContent>
                                    </CollapsibleTrigger>
                                    <CollapsibleContent>
                                        <CardContent className="pt-0 pb-6 px-6">
                                            <div className="bg-muted/30 rounded-lg p-4 mt-2">
                                                <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                                            </div>
                                        </CardContent>
                                    </CollapsibleContent>
                                </Collapsible>
                            </Card>
                        ))
                    ) : (
                        <Card className="p-12 text-center">
                            <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                            <h3 className="text-xl font-semibold mb-2">No questions found</h3>
                            <p className="text-muted-foreground mb-6">
                                Try adjusting your search or browse different categories.
                            </p>
                            <Button onClick={() => { setSearchTerm(''); setSelectedCategory('all'); }}>
                                Clear Filters
                            </Button>
                        </Card>
                    )}
                </div>

                {/* Still have questions CTA */}
                <div className="mt-16 text-center bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-8">
                    <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
                    <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                        Our support team is available 24/7 to help you with any questions about creating your perfect resume.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Button className="flex items-center gap-2">
                            <MessageCircle className="h-4 w-4" />
                            Start Live Chat
                        </Button>
                        <Button variant="outline" className="flex items-center gap-2">
                            <HelpCircle className="h-4 w-4" />
                            Contact Support
                        </Button>
                    </div>
                </div>
            </div>
        </Section>
    );
};