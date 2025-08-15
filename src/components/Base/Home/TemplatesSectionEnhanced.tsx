"use client";
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { FileText, Eye, Download, Star, Sparkles, Building2, Palette, Zap, Users, Code, Briefcase, ArrowRight, CheckCircle } from 'lucide-react';
import Section from '../Section';
import { motion, AnimatePresence } from 'framer-motion';

interface Template {
    id: string;
    name: string;
    description: string;
    icon: React.ComponentType<{ className?: string; size?: number }>;
    features: string[];
    rating: number;
    downloads: string;
    category: 'modern' | 'creative' | 'corporate' | 'professional';
    isPopular?: boolean;
    isNew?: boolean;
    gradient: string;
    previewImage: string;
}

const templates: Template[] = [
    {
        id: 'classic-professional',
        name: 'Classic Professional',
        description: 'Timeless professional design with traditional layout. Perfect for experienced professionals across all industries.',
        icon: Users,
        features: ['ATS-Friendly', 'Traditional Layout', 'Professional Design', 'Multi-Section'],
        rating: 4.8,
        downloads: '18.2k',
        category: 'professional',
        isPopular: true,
        gradient: 'from-blue-500 to-purple-600',
        previewImage: '/api/placeholder/400/300'
    },
    {
        id: 'modern-minimal',
        name: 'Modern Minimal',
        description: 'Clean, contemporary design with emphasis on typography and white space. Perfect for tech professionals.',
        icon: Zap,
        features: ['ATS-Friendly', 'Single Page', 'Modern Typography', 'Clean Layout'],
        rating: 4.9,
        downloads: '15.7k',
        category: 'modern',
        isPopular: true,
        gradient: 'from-emerald-500 to-blue-600',
        previewImage: '/api/placeholder/400/300'
    },
    {
        id: 'corporate-clean',
        name: 'Corporate Clean',
        description: 'Sophisticated corporate design with clean lines and professional styling. Ideal for business executives.',
        icon: Building2,
        features: ['Executive Style', 'Corporate Design', 'Clean Layout', 'Professional'],
        rating: 4.7,
        downloads: '12.4k',
        category: 'corporate',
        gradient: 'from-slate-600 to-gray-700',
        previewImage: '/api/placeholder/400/300'
    },
    {
        id: 'creative-timeline',
        name: 'Creative Timeline',
        description: 'Innovative timeline-based layout with creative elements. Perfect for designers and creative professionals.',
        icon: Palette,
        features: ['Timeline Layout', 'Creative Design', 'Visual Timeline', 'Portfolio Ready'],
        rating: 4.6,
        downloads: '9.8k',
        category: 'creative',
        isNew: true,
        gradient: 'from-pink-500 to-purple-600',
        previewImage: '/api/placeholder/400/300'
    },
    {
        id: 'executive-summary',
        name: 'Executive Summary',
        description: 'Executive-focused design with emphasis on achievements and leadership. Great for C-suite professionals.',
        icon: Briefcase,
        features: ['Executive Focus', 'Achievement Highlights', 'Leadership Style', 'Results-Driven'],
        rating: 4.8,
        downloads: '11.3k',
        category: 'corporate',
        isPopular: true,
        gradient: 'from-amber-500 to-orange-600',
        previewImage: '/api/placeholder/400/300'
    },
    {
        id: 'original-professional',
        name: 'Original Professional',
        description: 'Classic professional template with proven track record. Trusted design for all career levels.',
        icon: FileText,
        features: ['Proven Design', 'All Industries', 'Career Flexible', 'Time-Tested'],
        rating: 4.7,
        downloads: '22.1k',
        category: 'professional',
        gradient: 'from-indigo-500 to-blue-600',
        previewImage: '/api/placeholder/400/300'
    }
];

const categories = [
    { id: 'all', name: 'All Templates', icon: FileText, count: templates.length },
    { id: 'professional', name: 'Professional', icon: Users, count: templates.filter(t => t.category === 'professional').length },
    { id: 'modern', name: 'Modern', icon: Zap, count: templates.filter(t => t.category === 'modern').length },
    { id: 'corporate', name: 'Corporate', icon: Building2, count: templates.filter(t => t.category === 'corporate').length },
    { id: 'creative', name: 'Creative', icon: Palette, count: templates.filter(t => t.category === 'creative').length },
];

export const TemplatesSectionEnhanced = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [hoveredTemplate, setHoveredTemplate] = useState<string | null>(null);

    const filteredTemplates = selectedCategory === 'all' 
        ? templates 
        : templates.filter(template => template.category === selectedCategory);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <Section id="templates">
            <div className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
                <div className="text-center mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <Badge className="mb-4 px-4 py-2 text-sm font-medium bg-gradient-to-r from-blue-500 to-purple-600 text-white border-0">
                        <Sparkles size={14} className="mr-2" />
                        Premium Templates
                    </Badge>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                        Choose Your Perfect
                        <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
                            Resume Template
                        </span>
                    </h2>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                        Professional, ATS-friendly templates designed to make your resume stand out and get you noticed by recruiters.
                    </p>
                </motion.div>
            </div>

            {/* Category Filter */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex flex-wrap justify-center gap-4 mb-12"
            >
                {categories.map((category) => (
                    <motion.button
                        key={category.id}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setSelectedCategory(category.id)}
                                                 className={`flex items-center gap-3 px-6 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-md ${
                             selectedCategory === category.id
                                 ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl border-2 border-blue-500'
                                 : 'bg-white text-slate-800 hover:bg-blue-50 hover:text-blue-800 hover:border-blue-400 border-2 border-slate-300 hover:shadow-lg'
                         }`}
                    >
                                                 <category.icon size={18} className={selectedCategory === category.id ? 'text-white' : 'text-blue-700'} />
                        <span className="text-base">{category.name}</span>
                        <Badge 
                            variant="secondary" 
                                                     className={`ml-2 px-3 py-1 text-xs font-bold ${
                             selectedCategory === category.id
                                 ? 'bg-white/30 text-white border-white/40'
                                 : 'bg-blue-200 text-blue-800 border-blue-300'
                         }`}
                        >
                            {category.count}
                        </Badge>
                    </motion.button>
                ))}
            </motion.div>

            {/* Templates Grid */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
                <AnimatePresence mode="wait">
                    {filteredTemplates.map((template, index) => (
                        <motion.div
                            key={template.id}
                            variants={itemVariants}
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            onHoverStart={() => setHoveredTemplate(template.id)}
                            onHoverEnd={() => setHoveredTemplate(null)}
                            className="group"
                        >
                            <Card className="relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/80 backdrop-blur-sm group-hover:scale-105">
                                {/* Template Preview */}
                                <div className="relative overflow-hidden">
                                    <div className={`h-48 bg-gradient-to-br ${template.gradient} relative`}>
                                        <div className="absolute inset-0 bg-black/10" />
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <template.icon size={48} className="text-white/80" />
                                        </div>
                                        
                                        {/* Popular/New Badge */}
                                        {template.isPopular && (
                                            <Badge className="absolute top-4 left-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white border-0">
                                                <Star size={12} className="mr-1" />
                                                Popular
                                            </Badge>
                                        )}
                                        {template.isNew && (
                                            <Badge className="absolute top-4 left-4 bg-gradient-to-r from-emerald-500 to-blue-600 text-white border-0">
                                                <Sparkles size={12} className="mr-1" />
                                                New
                                            </Badge>
                                        )}
                                    </div>
                                    
                                    {/* Hover Overlay */}
                                    <motion.div
                                        className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        initial={false}
                                    >
                                        <div className="flex gap-3">
                                            <Button size="sm" className="bg-white text-slate-900 hover:bg-slate-100">
                                                <Eye size={16} className="mr-2" />
                                                Preview
                                            </Button>
                                            <Button size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                                                <Download size={16} className="mr-2" />
                                                Use Template
                                            </Button>
                                        </div>
                                    </motion.div>
                                </div>

                                <CardContent className="p-6">
                                    <div className="flex items-start justify-between mb-3">
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-900 mb-2">{template.name}</h3>
                                            <p className="text-slate-600 text-sm leading-relaxed">{template.description}</p>
                                        </div>
                                    </div>

                                    {/* Features */}
                                    <div className="mb-4">
                                        <div className="flex flex-wrap gap-2">
                                            {template.features.slice(0, 3).map((feature, idx) => (
                                                <Badge
                                                    key={idx}
                                                    variant="outline"
                                                    className="text-xs bg-slate-50 text-slate-600 border-slate-200"
                                                >
                                                    <CheckCircle size={10} className="mr-1" />
                                                    {feature}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Stats */}
                                    <div className="flex items-center justify-between text-sm text-slate-500">
                                        <div className="flex items-center gap-1">
                                            <Star size={14} className="text-amber-500 fill-current" />
                                            <span>{template.rating}</span>
                                        </div>
                                        <span>{template.downloads} downloads</span>
                                    </div>

                                    {/* CTA Button */}
                                    <Button 
                                        className="w-full mt-4 bg-gray-600 hover:bg-gray-700 text-pink-300 border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                                        size="lg"
                                    >
                                        Use This Template
                                        <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

            {/* Bottom CTA */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-center mt-16"
            >
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white">
                    <h3 className="text-2xl font-bold mb-4">Ready to Create Your Perfect Resume?</h3>
                    <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                        Choose from our premium templates and start building a resume that will get you noticed by top employers.
                    </p>
                                         <Button 
                         size="lg" 
                         className="bg-gray-600 hover:bg-gray-700 text-pink-300 px-8 py-4 text-lg font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                     >
                         Start Building Now
                         <ArrowRight size={20} className="ml-2" />
                     </Button>
                </div>
            </motion.div>
            </div>
        </Section>
    );
};
