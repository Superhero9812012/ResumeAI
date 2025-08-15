"use client";
import React from 'react';
import Link from 'next/link';
import { Mail, Phone, Facebook, Twitter, Instagram, Linkedin, BrainCircuit, ArrowRight, Upload, Star, Users, TrendingUp, Heart, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';

const FooterEnhanced = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = [
        {
            title: "Product",
            links: [
                { name: "Templates", href: "#templates" },
                { name: "Pricing", href: "/pricing" },
                { name: "How It Works", href: "/how-it-works" },
                { name: "Examples", href: "/examples" }
            ]
        },
        {
            title: "Resources",
            links: [
                { name: "Resume Tips", href: "/blog/resume-tips" },
                { name: "Career Guide", href: "/blog/career-guide" },
                { name: "ATS Guide", href: "/blog/ats-guide" },
                { name: "Job Search", href: "/blog/job-search" }
            ]
        },
        {
            title: "Support",
            links: [
                { name: "Help Center", href: "/help" },
                { name: "Contact Us", href: "/contact-us" },
                { name: "FAQ", href: "/faq" },
                { name: "Status", href: "/status" }
            ]
        },
        {
            title: "Company",
            links: [
                { name: "About Us", href: "/about-us" },
                { name: "Privacy Policy", href: "/privacy-policy" },
                { name: "Terms of Service", href: "/terms-conditions" },
                { name: "Refund & Cancellations", href: "/refund-policy" }
            ]
        }
    ];

    const socialLinks = [
        { name: "LinkedIn", href: "https://linkedin.com/company/resumebot", icon: Linkedin },
        { name: "Twitter", href: "https://twitter.com/resumebot", icon: Twitter },
        { name: "Facebook", href: "https://facebook.com/resumebot", icon: Facebook },
        { name: "Instagram", href: "https://instagram.com/resumebot", icon: Instagram }
    ];

    const stats = [
        { icon: Users, value: "50K+", label: "Happy Users" },
        { icon: Star, value: "4.9", label: "Average Rating" },
        { icon: TrendingUp, value: "85%", label: "Interview Success" }
    ];

    return (
        <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
            {/* CTA Banner */}
            <div className="relative overflow-hidden py-16">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-4 left-4 w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    <div className="absolute top-8 right-8 w-1 h-1 bg-white rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute bottom-6 left-12 w-1.5 h-1.5 bg-white rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
                    <div className="absolute bottom-12 right-4 w-2 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                </div>

                <div className="px-6 md:px-10 lg:px-24 xl:px-40 relative">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="flex flex-col lg:flex-row items-center justify-between gap-8"
                    >
                        <div className="text-center lg:text-left max-w-2xl">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                Ready to 10x your job search?
                            </h2>
                            <p className="text-lg leading-relaxed text-blue-100">
                                Join 50,000+ professionals who've landed their dream jobs with AI-optimized resumes.
                            </p>

                            {/* Stats */}
                            <div className="flex justify-center lg:justify-start gap-6 mt-6">
                                {stats.map((stat, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: index * 0.1, duration: 0.5 }}
                                        viewport={{ once: true }}
                                        className="text-center"
                                    >
                                        <div className="flex items-center justify-center gap-1 text-white mb-1">
                                            <stat.icon className="h-4 w-4 text-blue-400" />
                                            <span className="text-2xl font-bold">{stat.value}</span>
                                        </div>
                                        <span className="text-sm text-blue-200">{stat.label}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button
                                onClick={() => window.location.href = '/upload'}
                                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                            >
                                <Sparkles size={20} className="mr-2" />
                                Get Started Free
                            </Button>
                            <Button
                                variant="outline"
                                className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-2xl"
                            >
                                View Templates
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Main Footer Content */}
            <div className="px-6 md:px-10 lg:px-24 xl:px-40 py-16 border-t border-white/10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                    {/* Logo and Description */}
                    <div className="lg:col-span-2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <Link href="/" className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                                    <BrainCircuit className="h-5 w-5 text-white" />
                                </div>
                                <div>
                                    <span className="font-bold text-xl">ResumeBot</span>
                                    <span className="block text-sm text-blue-300">AI-Powered</span>
                                </div>
                            </Link>
                            <p className="text-blue-200 mb-6 max-w-md">
                                Transform your resume with AI-powered optimization. Beat ATS systems, 
                                get noticed by recruiters, and land your dream job faster.
                            </p>
                            
                            {/* Newsletter Signup */}
                            <div className="space-y-3">
                                <p className="text-sm font-medium text-white">Stay updated with career tips</p>
                                <div className="flex gap-2">
                                    <Input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="bg-white/10 border-white/20 text-white placeholder:text-blue-200 focus:border-blue-400"
                                    />
                                    <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                                        <ArrowRight size={16} />
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Footer Links */}
                    {footerLinks.map((section, sectionIndex) => (
                        <motion.div
                            key={section.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: sectionIndex * 0.1, duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="font-semibold text-white mb-4">{section.title}</h3>
                            <ul className="space-y-3">
                                {section.links.map((link, linkIndex) => (
                                    <motion.li
                                        key={link.name}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: (sectionIndex * 0.1) + (linkIndex * 0.05), duration: 0.5 }}
                                        viewport={{ once: true }}
                                    >
                                        <Link
                                            href={link.href}
                                            className="text-blue-200 hover:text-white transition-colors duration-300 text-sm"
                                        >
                                            {link.name}
                                        </Link>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="border-t border-white/10 pt-8 mt-12"
                >
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <div className="flex items-center gap-2 text-blue-200 text-sm">
                            <span>© {currentYear} ResumeBot. Made with</span>
                            <Heart size={14} className="text-red-400 fill-current animate-pulse" />
                            <span>in India</span>
                        </div>
                        
                        {/* Social Links */}
                        <div className="flex items-center gap-4">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.1, duration: 0.5 }}
                                    viewport={{ once: true }}
                                >
                                    <social.icon size={18} className="text-blue-300" />
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
};

export default FooterEnhanced;
