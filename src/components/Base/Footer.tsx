"use client";

import React from 'react';
import Link from 'next/link';
import { Mail, Phone, Facebook, Twitter, Instagram, Linkedin, BrainCircuit, ArrowRight, Upload, Star, Users, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { colors } from '@/components/Global/colors';

const Footer = () => {
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
        { name: "LinkedIn", href: "https://linkedin.com/company/resumebot", icon: Linkedin, color: colors.primary },
        { name: "Twitter", href: "https://twitter.com/resumebot", icon: Twitter, color: colors.primary },
        { name: "Facebook", href: "https://facebook.com/resumebot", icon: Facebook, color: colors.primary },
        { name: "Instagram", href: "https://instagram.com/resumebot", icon: Instagram, color: colors.primary }
    ];

    const stats = [
        { icon: Users, value: "50K+", label: "Happy Users" },
        { icon: Star, value: "4.9", label: "Average Rating" },
        { icon: TrendingUp, value: "85%", label: "Interview Success" }
    ];

    return (
        <footer
            className="border-t"
            style={{
                backgroundColor: colors.lightBg,
                borderTopColor: colors.secondaryDark
            }}
        >
            {/* CTA Banner */}
            <div
                className="text-white py-12 relative overflow-hidden"
                style={{ background: colors.heroGradient }}
            >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-4 left-4 w-2 h-2 bg-white rounded-full"></div>
                    <div className="absolute top-8 right-8 w-1 h-1 bg-white rounded-full"></div>
                    <div className="absolute bottom-6 left-12 w-1.5 h-1.5 bg-white rounded-full"></div>
                    <div className="absolute bottom-12 right-4 w-2 h-2 bg-white rounded-full"></div>
                </div>

                <div className="px-6 md:px-10 lg:px-24 xl:px-40 relative">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                        <div className="text-center lg:text-left max-w-2xl">
                            <h2 className="text-3xl font-bold mb-3">Ready to 10x your job search?</h2>
                            <p className="text-lg leading-relaxed" style={{ color: colors.primaryLight }}>
                                Join 50,000+ professionals who've landed their dream jobs with AI-optimized resumes.
                            </p>

                            {/* Stats */}
                            <div className="flex justify-center lg:justify-start gap-6 mt-6">
                                {stats.map((stat, index) => (
                                    <div key={index} className="text-center">
                                        <div className="flex items-center justify-center gap-1 text-white mb-1">
                                            <stat.icon className="h-4 w-4" />
                                            <span className="font-bold text-lg">{stat.value}</span>
                                        </div>
                                        <div className="text-xs" style={{ color: colors.primaryLight }}>
                                            {stat.label}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3">
                            <Link href="/upload">
                                <Button
                                    size="lg"
                                    className="group shadow-lg hover:shadow-xl transition-all duration-300 font-semibold px-6"
                                    style={{
                                        backgroundColor: colors.lightBg,
                                        color: colors.primary,
                                        border: 'none'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.backgroundColor = colors.secondaryLight;
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.backgroundColor = colors.lightBg;
                                    }}
                                >
                                    <Upload className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                                    Start Free Now
                                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
                                </Button>
                            </Link>
                            <Button
                                size="lg"
                                variant="outline"
                                className="backdrop-blur-sm font-medium transition-all duration-200"
                                style={{
                                    borderColor: colors.lightBgOpacity(0.2),
                                    color: colors.lightBg,
                                    backgroundColor: 'transparent'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = colors.lightBgOpacity(0.1);
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = 'transparent';
                                }}
                            >
                                View Examples
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="px-6 md:px-10 lg:px-24 xl:px-40 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
                    {/* Company Info */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center mb-6">
                            <div
                                className="w-10 h-10 rounded-xl flex items-center justify-center mr-3 shadow-lg"
                                style={{ background: colors.primaryGradient }}
                            >
                                <BrainCircuit className="h-5 w-5 text-white" />
                            </div>
                            <div>
                                <span
                                    className="font-bold text-xl"
                                    style={{ color: colors.tertiary }}
                                >
                                    ResumeBot
                                </span>
                                <div
                                    className="text-xs"
                                    style={{ color: colors.neutral }}
                                >
                                    AI Resume Optimizer
                                </div>
                            </div>
                        </div>

                        <p
                            className="mb-6 leading-relaxed"
                            style={{ color: colors.neutral }}
                        >
                            Transform your resume with AI-powered optimization. Get noticed by recruiters and land more interviews with professionally crafted, ATS-friendly resumes.
                        </p>

                        {/* Trust Badges */}
                        <div className="flex flex-wrap gap-2 mb-6">
                            <Badge
                                variant="secondary"
                                className="transition-all duration-200"
                                style={{
                                    backgroundColor: colors.successOpacity(0.1),
                                    color: colors.success,
                                    borderColor: colors.successOpacity(0.2)
                                }}
                            >
                                ✓ 100% Secure
                            </Badge>
                            <Badge
                                variant="secondary"
                                className="transition-all duration-200"
                                style={{
                                    backgroundColor: colors.primaryOpacity(0.1),
                                    color: colors.primary,
                                    borderColor: colors.primaryOpacity(0.2)
                                }}
                            >
                                ✓ No Signup Required
                            </Badge>
                            <Badge
                                variant="secondary"
                                className="transition-all duration-200"
                                style={{
                                    backgroundColor: colors.accentOpacity(0.1),
                                    color: colors.accent,
                                    borderColor: colors.accentOpacity(0.2)
                                }}
                            >
                                ✓ Instant Results
                            </Badge>
                        </div>
                    </div>

                    {/* Navigation Links */}
                    {footerLinks.map((category) => (
                        <div key={category.title} className="lg:col-span-1">
                            <h3
                                className="font-semibold mb-4 text-sm uppercase tracking-wider"
                                style={{ color: colors.tertiary }}
                            >
                                {category.title}
                            </h3>
                            <ul className="space-y-3">
                                {category.links.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="transition-all duration-200 text-sm font-medium block hover:translate-x-1"
                                            style={{ color: colors.neutral }}
                                            onMouseEnter={(e) => e.currentTarget.style.color = colors.primary}
                                            onMouseLeave={(e) => e.currentTarget.style.color = colors.neutral}
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Newsletter */}
                <div
                    className="mt-16 pt-8 border-t"
                    style={{ borderTopColor: colors.secondaryDark }}
                >
                    <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
                        <div className="max-w-md">
                            <h3
                                className="font-semibold mb-2 text-lg"
                                style={{ color: colors.tertiary }}
                            >
                                Stay ahead in your career
                            </h3>
                            <p
                                className="text-sm leading-relaxed"
                                style={{ color: colors.neutral }}
                            >
                                Get exclusive resume tips, job search strategies, and career insights delivered to your inbox.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                            <Input
                                type="email"
                                placeholder="Enter your email address"
                                className="lg:w-80 transition-all duration-200"
                                style={{
                                    borderColor: colors.secondaryDark,
                                }}
                                onFocus={(e) => {
                                    e.currentTarget.style.borderColor = colors.primary;
                                    e.currentTarget.style.boxShadow = `0 0 0 3px ${colors.primaryOpacity(0.1)}`;
                                }}
                                onBlur={(e) => {
                                    e.currentTarget.style.borderColor = colors.secondaryDark;
                                    e.currentTarget.style.boxShadow = 'none';
                                }}
                            />
                            <Button
                                className="font-medium px-6 transition-all duration-300"
                                style={{
                                    background: colors.primaryGradient,
                                    color: colors.lightBg,
                                    border: 'none'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = `linear-gradient(135deg, ${colors.primaryDark} 0%, ${colors.primary} 100%)`;
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = colors.primaryGradient;
                                }}
                            >
                                Subscribe
                                <ArrowRight className="h-4 w-4 ml-1" />
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div
                    className="pt-8 mt-8 border-t"
                    style={{ borderTopColor: colors.secondaryDark }}
                >
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="flex flex-col sm:flex-row items-center gap-4 text-sm" style={{ color: colors.neutral }}>
                            <p>© {currentYear} ResumeBot. All rights reserved.</p>
                            <div className="flex gap-6 text-xs">
                                <Link
                                    href="/privacy"
                                    className="transition-colors"
                                    style={{ color: colors.neutral }}
                                    onMouseEnter={(e) => e.currentTarget.style.color = colors.primary}
                                    onMouseLeave={(e) => e.currentTarget.style.color = colors.neutral}
                                >
                                    Privacy Policy
                                </Link>
                                <Link
                                    href="/terms"
                                    className="transition-colors"
                                    style={{ color: colors.neutral }}
                                    onMouseEnter={(e) => e.currentTarget.style.color = colors.primary}
                                    onMouseLeave={(e) => e.currentTarget.style.color = colors.neutral}
                                >
                                    Terms of Service
                                </Link>
                                <Link
                                    href="/security"
                                    className="transition-colors"
                                    style={{ color: colors.neutral }}
                                    onMouseEnter={(e) => e.currentTarget.style.color = colors.primary}
                                    onMouseLeave={(e) => e.currentTarget.style.color = colors.neutral}
                                >
                                    Security
                                </Link>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <span
                                className="text-xs hidden sm:inline"
                                style={{ color: colors.neutralMedium }}
                            >
                                Follow us
                            </span>
                            <div className="flex gap-2">
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.name}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2.5 rounded-xl transition-all duration-200 hover:scale-105 hover:shadow-md"
                                        style={{
                                            color: colors.neutralMedium,
                                            backgroundColor: colors.secondaryOpacity(0.5)
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.color = social.color;
                                            e.currentTarget.style.backgroundColor = colors.secondaryLight;
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.color = colors.neutralMedium;
                                            e.currentTarget.style.backgroundColor = colors.secondaryOpacity(0.5);
                                        }}
                                        aria-label={social.name}
                                    >
                                        <social.icon className="h-4 w-4" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;