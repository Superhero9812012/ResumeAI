
// import React, { useState } from 'react';
// import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { Badge } from '@/components/ui/badge';
// import { FileText, Eye, Download, Star, Sparkles, Building2, Palette, Zap, Users, Code, Briefcase } from 'lucide-react';
// import Section from '../Section';
// import { ClassicProfessionalTemplate } from '../templates/ClassicProfessionalTemplate';
// import { ModernMinimalTemplate } from '../templates/ModernMinimalTemplate';
// import { CorporateCleanTemplate } from '../templates/CorporateCleanTemplate';
// import { CreativeTimelineTemplate } from '../templates/CreativeTimelineTemplate';
// import { ExecutiveSummaryTemplate } from '../templates/ExecutiveSummaryTemplate';
// import { OriginalProfessionalTemplate } from '../templates/OriginalProfessionalTemplate';



// interface Template {
//     id: string;
//     name: string;
//     description: string;
//     icon: React.ComponentType<{ className?: string }>;
//     features: string[];
//     rating: number;
//     downloads: string;
//     component: React.ComponentType<any>;
//     category: 'modern' | 'creative' | 'corporate' | 'professional';
//     isPopular?: boolean;
//     isNew?: boolean;
// }

// const templates: Template[] = [
//     {
//         id: 'classic-professional',
//         name: 'Classic Professional',
//         description: 'Timeless professional design with traditional layout. Perfect for experienced professionals across all industries.',
//         icon: Users,
//         features: ['ATS-Friendly', 'Traditional Layout', 'Professional Design', 'Multi-Section'],
//         rating: 4.8,
//         downloads: '18.2k',
//         component: ClassicProfessionalTemplate,
//         category: 'professional',
//         isPopular: true
//     },
//     {
//         id: 'modern-minimal',
//         name: 'Modern Minimal',
//         description: 'Clean, contemporary design with emphasis on typography and white space. Perfect for tech professionals.',
//         icon: Zap,
//         features: ['ATS-Friendly', 'Single Page', 'Modern Typography', 'Clean Layout'],
//         rating: 4.9,
//         downloads: '15.7k',
//         component: ModernMinimalTemplate,
//         category: 'modern',
//         isPopular: true
//     },
//     {
//         id: 'corporate-clean',
//         name: 'Corporate Clean',
//         description: 'Sophisticated corporate design with clean lines and professional styling. Ideal for business executives.',
//         icon: Building2,
//         features: ['Executive Style', 'Corporate Design', 'Clean Layout', 'Professional'],
//         rating: 4.7,
//         downloads: '12.4k',
//         component: CorporateCleanTemplate,
//         category: 'corporate'
//     },
//     {
//         id: 'creative-timeline',
//         name: 'Creative Timeline',
//         description: 'Innovative timeline-based layout with creative elements. Perfect for designers and creative professionals.',
//         icon: Palette,
//         features: ['Timeline Layout', 'Creative Design', 'Visual Timeline', 'Portfolio Ready'],
//         rating: 4.6,
//         downloads: '9.8k',
//         component: CreativeTimelineTemplate,
//         category: 'creative',
//         isNew: true
//     },
//     {
//         id: 'executive-summary',
//         name: 'Executive Summary',
//         description: 'Executive-focused design with emphasis on achievements and leadership. Great for C-suite professionals.',
//         icon: Briefcase,
//         features: ['Executive Focus', 'Achievement Highlights', 'Leadership Style', 'Results-Driven'],
//         rating: 4.8,
//         downloads: '11.3k',
//         component: ExecutiveSummaryTemplate,
//         category: 'corporate',
//         isPopular: true
//     },
//     {
//         id: 'original-professional',
//         name: 'Original Professional',
//         description: 'Classic professional template with proven track record. Trusted design for all career levels.',
//         icon: FileText,
//         features: ['Proven Design', 'All Industries', 'Career Flexible', 'Time-Tested'],
//         rating: 4.7,
//         downloads: '22.1k',
//         component: OriginalProfessionalTemplate,
//         category: 'professional'
//     }
// ];

// const categories = [
//     { id: 'all', label: 'All Templates', count: templates.length },
//     { id: 'professional', label: 'Professional', count: templates.filter(t => t.category === 'professional').length },
//     { id: 'modern', label: 'Modern', count: templates.filter(t => t.category === 'modern').length },
//     { id: 'corporate', label: 'Corporate', count: templates.filter(t => t.category === 'corporate').length },
//     { id: 'creative', label: 'Creative', count: templates.filter(t => t.category === 'creative').length }
// ];

// export const TemplatesSection = () => {
//     const [selectedCategory, setSelectedCategory] = useState<'all' | 'modern' | 'creative' | 'corporate' | 'professional'>('all');
//     const [hoveredTemplate, setHoveredTemplate] = useState<string | null>(null);

//     const filteredTemplates = selectedCategory === 'all'
//         ? templates
//         : templates.filter(template => template.category === selectedCategory);

//     return (
//         <Section id="templates">
//             <div className="container mx-auto py-20 min-h-screen">
//                 {/* Header */}
//                 <div className="text-center mb-16">
//                     <div className="flex items-center justify-center gap-2 mb-4">
//                         <FileText className="h-8 w-8 text-primary" />
//                         <Badge variant="secondary" className="text-sm font-medium">
//                             50+ Professional Templates
//                         </Badge>
//                     </div>
//                     <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
//                         Professionally Designed Templates
//                     </h2>
//                     <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
//                         Choose from our collection of ATS-friendly, expertly crafted templates designed by industry professionals.
//                         Stand out with designs that get you noticed and hired.
//                     </p>
//                 </div>

//                 {/* Category Filter */}
//                 <div className="flex flex-wrap justify-center gap-3 mb-12">
//                     {categories.map((category) => (
//                         <Button
//                             key={category.id}
//                             variant={selectedCategory === category.id ? "default" : "outline"}
//                             onClick={() => setSelectedCategory(category.id as any)}
//                             className="transition-all duration-200 hover:scale-105"
//                         >
//                             {category.label}
//                             <Badge variant="secondary" className="ml-2 text-xs">
//                                 {category.count}
//                             </Badge>
//                         </Button>
//                     ))}
//                 </div>

//                 {/* Templates Grid */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                     {filteredTemplates.map((template) => {
//                         const IconComponent = template.icon;
//                         return (
//                             <Card
//                                 key={template.id}
//                                 className={`group cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border-2 hover:border-primary/20 relative overflow-hidden ${hoveredTemplate === template.id ? 'ring-2 ring-primary/50' : ''
//                                     }`}
//                                 onMouseEnter={() => setHoveredTemplate(template.id)}
//                                 onMouseLeave={() => setHoveredTemplate(null)}
//                             >
//                                 {/* Template Badges */}
//                                 <div className="absolute top-4 right-4 z-10 flex gap-2">
//                                     {template.isPopular && (
//                                         <Badge className="bg-orange-500 hover:bg-orange-600 text-white">
//                                             <Star className="h-3 w-3 mr-1" />
//                                             Popular
//                                         </Badge>
//                                     )}
//                                     {template.isNew && (
//                                         <Badge className="bg-green-500 hover:bg-green-600 text-white">
//                                             <Sparkles className="h-3 w-3 mr-1" />
//                                             New
//                                         </Badge>
//                                     )}
//                                 </div>

//                                 {/* Template Preview */}
//                                 <div className="aspect-[3/4] bg-gradient-to-br from-muted/50 to-muted overflow-hidden relative">
//                                     <div className="absolute inset-0 bg-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
//                                         <Button size="sm" variant="secondary" className="shadow-lg">
//                                             <Eye className="h-4 w-4 mr-1" />
//                                             Preview
//                                         </Button>
//                                         <Button size="sm" className="shadow-lg">
//                                             <Download className="h-4 w-4 mr-1" />
//                                             Use Template
//                                         </Button>
//                                     </div>

//                                     {/* Mock Resume Preview */}
//                                     <div className="p-6 h-full flex flex-col bg-white">
//                                         <div className="flex items-center gap-3 mb-4">
//                                             <IconComponent className="h-6 w-6 text-primary" />
//                                             <div className="text-sm font-semibold text-gray-800">{template.name}</div>
//                                         </div>
//                                         <div className="space-y-3 flex-1">
//                                             <div className="h-2 bg-gray-200 rounded w-3/4"></div>
//                                             <div className="h-1.5 bg-gray-100 rounded w-1/2"></div>
//                                             <div className="space-y-1.5 mt-4">
//                                                 <div className="h-1 bg-gray-200 rounded w-full"></div>
//                                                 <div className="h-1 bg-gray-200 rounded w-5/6"></div>
//                                                 <div className="h-1 bg-gray-200 rounded w-4/5"></div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 <CardHeader className="pb-3">
//                                     <div className="flex items-start justify-between">
//                                         <div>
//                                             <CardTitle className="text-lg group-hover:text-primary transition-colors">
//                                                 {template.name}
//                                             </CardTitle>
//                                             <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
//                                                 <div className="flex items-center gap-1">
//                                                     <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
//                                                     <span>{template.rating}</span>
//                                                 </div>
//                                                 <span>•</span>
//                                                 <span>{template.downloads} downloads</span>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <CardDescription className="mt-2 line-clamp-2">
//                                         {template.description}
//                                     </CardDescription>
//                                 </CardHeader>

//                                 <CardContent className="pt-0">
//                                     <div className="flex flex-wrap gap-1.5 mb-4">
//                                         {template.features.map((feature) => (
//                                             <Badge
//                                                 key={feature}
//                                                 variant="secondary"
//                                                 className="text-xs px-2 py-1"
//                                             >
//                                                 {feature}
//                                             </Badge>
//                                         ))}
//                                     </div>

//                                     <div className="flex gap-2">
//                                         <Button className="flex-1 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
//                                             <Download className="h-4 w-4 mr-2" />
//                                             Use Template
//                                         </Button>
//                                         <Button variant="outline" size="icon">
//                                             <Eye className="h-4 w-4" />
//                                         </Button>
//                                     </div>
//                                 </CardContent>
//                             </Card>
//                         );
//                     })}
//                 </div>

//                 {/* Stats Section */}
//                 <div className="mt-20 bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-8 text-center">
//                     <h3 className="text-2xl font-bold mb-4">Join thousands of successful job seekers</h3>
//                     <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//                         <div>
//                             <div className="text-3xl font-bold text-primary">6</div>
//                             <div className="text-muted-foreground">Templates</div>
//                         </div>
//                         <div>
//                             <div className="text-3xl font-bold text-primary">89k+</div>
//                             <div className="text-muted-foreground">Downloads</div>
//                         </div>
//                         <div>
//                             <div className="text-3xl font-bold text-primary">95%</div>
//                             <div className="text-muted-foreground">ATS Compatible</div>
//                         </div>
//                         <div>
//                             <div className="text-3xl font-bold text-primary">4.8★</div>
//                             <div className="text-muted-foreground">Average Rating</div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </Section>
//     );
// };


import React, { useState, useRef } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { FileText, Eye, Download, Star, Sparkles, Building2, Palette, Zap, Users, Code, Briefcase, ChevronLeft, ChevronRight } from 'lucide-react';
import Section from '../Section';

import { ClassicProfessionalTemplate } from '../templates/ClassicProfessionalTemplate';
import { ModernMinimalTemplate } from '../templates/ModernMinimalTemplate';
import { CorporateCleanTemplate } from '../templates/CorporateCleanTemplate';
import { CreativeTimelineTemplate } from '../templates/CreativeTimelineTemplate';
import { ExecutiveSummaryTemplate } from '../templates/ExecutiveSummaryTemplate';
import { OriginalProfessionalTemplate } from '../templates/OriginalProfessionalTemplate';

interface Template {
    id: string;
    name: string;
    description: string;
    icon: React.ComponentType<{ className?: string }>;
    features: string[];
    rating: number;
    downloads: string;
    component: React.ComponentType<any>;
    category: 'modern' | 'creative' | 'corporate' | 'professional';
    isPopular?: boolean;
    isNew?: boolean;
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
        component: ClassicProfessionalTemplate,
        category: 'professional',
        isPopular: true
    },
    {
        id: 'modern-minimal',
        name: 'Modern Minimal',
        description: 'Clean, contemporary design with emphasis on typography and white space. Perfect for tech professionals.',
        icon: Zap,
        features: ['ATS-Friendly', 'Single Page', 'Modern Typography', 'Clean Layout'],
        rating: 4.9,
        downloads: '15.7k',
        component: ModernMinimalTemplate,
        category: 'modern',
        isPopular: true
    },
    {
        id: 'corporate-clean',
        name: 'Corporate Clean',
        description: 'Sophisticated corporate design with clean lines and professional styling. Ideal for business executives.',
        icon: Building2,
        features: ['Executive Style', 'Corporate Design', 'Clean Layout', 'Professional'],
        rating: 4.7,
        downloads: '12.4k',
        component: CorporateCleanTemplate,
        category: 'corporate'
    },
    {
        id: 'creative-timeline',
        name: 'Creative Timeline',
        description: 'Innovative timeline-based layout with creative elements. Perfect for designers and creative professionals.',
        icon: Palette,
        features: ['Timeline Layout', 'Creative Design', 'Visual Timeline', 'Portfolio Ready'],
        rating: 4.6,
        downloads: '9.8k',
        component: CreativeTimelineTemplate,
        category: 'creative',
        isNew: true
    },
    {
        id: 'executive-summary',
        name: 'Executive Summary',
        description: 'Executive-focused design with emphasis on achievements and leadership. Great for C-suite professionals.',
        icon: Briefcase,
        features: ['Executive Focus', 'Achievement Highlights', 'Leadership Style', 'Results-Driven'],
        rating: 4.8,
        downloads: '11.3k',
        component: ExecutiveSummaryTemplate,
        category: 'corporate',
        isPopular: true
    },
    {
        id: 'original-professional',
        name: 'Original Professional',
        description: 'Classic professional template with proven track record. Trusted design for all career levels.',
        icon: FileText,
        features: ['Proven Design', 'All Industries', 'Career Flexible', 'Time-Tested'],
        rating: 4.7,
        downloads: '22.1k',
        component: OriginalProfessionalTemplate,
        category: 'professional'
    }
];

const categories = [
    { id: 'all', label: 'All Templates', count: templates.length },
    { id: 'professional', label: 'Professional', count: templates.filter(t => t.category === 'professional').length },
    { id: 'modern', label: 'Modern', count: templates.filter(t => t.category === 'modern').length },
    { id: 'corporate', label: 'Corporate', count: templates.filter(t => t.category === 'corporate').length },
    { id: 'creative', label: 'Creative', count: templates.filter(t => t.category === 'creative').length }
];

export const TemplatesSection = () => {
    const [selectedCategory, setSelectedCategory] = useState<'all' | 'modern' | 'creative' | 'corporate' | 'professional'>('all');
    const [hoveredTemplate, setHoveredTemplate] = useState<string | null>(null);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const filteredTemplates = selectedCategory === 'all'
        ? templates
        : templates.filter(template => template.category === selectedCategory);

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: -400, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: 400, behavior: 'smooth' });
        }
    };

    return (
        <Section id="templates">
            <div className="container mx-auto py-20 min-h-screen">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <FileText className="h-8 w-8 text-primary" />
                        <Badge variant="secondary" className="text-sm font-medium">
                            50+ Professional Templates
                        </Badge>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                        Professionally Designed Templates
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        Choose from our collection of ATS-friendly, expertly crafted templates designed by industry professionals.
                        Stand out with designs that get you noticed and hired.
                    </p>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {categories.map((category) => (
                        <Button
                            key={category.id}
                            variant={selectedCategory === category.id ? "default" : "outline"}
                            onClick={() => setSelectedCategory(category.id as any)}
                            className="transition-all duration-200 hover:scale-105"
                        >
                            {category.label}
                            <Badge variant="secondary" className="ml-2 text-xs">
                                {category.count}
                            </Badge>
                        </Button>
                    ))}
                </div>

                {/* Templates Carousel */}
                <div className="relative">
                    {/* Carousel Navigation */}
                    <div className="flex justify-between items-center mb-8">
                        <h3 className="text-2xl font-semibold">
                            {selectedCategory === 'all' ? 'All Templates' : categories.find(c => c.id === selectedCategory)?.label}
                            <span className="text-muted-foreground ml-2">({filteredTemplates.length})</span>
                        </h3>
                        <div className="flex gap-2">
                            <Button
                                variant="outline"
                                size="icon"
                                onClick={scrollLeft}
                                className="h-10 w-10"
                            >
                                <ChevronLeft className="h-4 w-4" />
                            </Button>
                            <Button
                                variant="outline"
                                size="icon"
                                onClick={scrollRight}
                                className="h-10 w-10"
                            >
                                <ChevronRight className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>

                    {/* Carousel Container */}
                    <div
                        ref={scrollContainerRef}
                        className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {filteredTemplates.map((template) => {
                            const IconComponent = template.icon;
                            return (
                                <Card
                                    key={template.id}
                                    className={`group cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border-2 hover:border-primary/20 relative overflow-hidden flex-shrink-0 w-80 ${hoveredTemplate === template.id ? 'ring-2 ring-primary/50' : ''
                                        }`}
                                    onMouseEnter={() => setHoveredTemplate(template.id)}
                                    onMouseLeave={() => setHoveredTemplate(null)}
                                >
                                    {/* Template Badges */}
                                    <div className="absolute top-4 right-4 z-10 flex gap-2">
                                        {template.isPopular && (
                                            <Badge className="bg-orange-500 hover:bg-orange-600 text-white">
                                                <Star className="h-3 w-3 mr-1" />
                                                Popular
                                            </Badge>
                                        )}
                                        {template.isNew && (
                                            <Badge className="bg-green-500 hover:bg-green-600 text-white">
                                                <Sparkles className="h-3 w-3 mr-1" />
                                                New
                                            </Badge>
                                        )}
                                    </div>

                                    {/* Template Preview */}
                                    <div className="aspect-[3/4] bg-gradient-to-br from-muted/50 to-muted overflow-hidden relative">
                                        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                            <Button size="sm" variant="secondary" className="shadow-lg">
                                                <Eye className="h-4 w-4 mr-1" />
                                                Preview
                                            </Button>
                                            <Button size="sm" className="shadow-lg">
                                                <Download className="h-4 w-4 mr-1" />
                                                Use Template
                                            </Button>
                                        </div>

                                        {/* Mock Resume Preview */}
                                        <div className="p-6 h-full flex flex-col bg-white">
                                            <div className="flex items-center gap-3 mb-4">
                                                <IconComponent className="h-6 w-6 text-primary" />
                                                <div className="text-sm font-semibold text-gray-800">{template.name}</div>
                                            </div>
                                            <div className="space-y-3 flex-1">
                                                <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                                                <div className="h-1.5 bg-gray-100 rounded w-1/2"></div>
                                                <div className="space-y-1.5 mt-4">
                                                    <div className="h-1 bg-gray-200 rounded w-full"></div>
                                                    <div className="h-1 bg-gray-200 rounded w-5/6"></div>
                                                    <div className="h-1 bg-gray-200 rounded w-4/5"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <CardHeader className="pb-3">
                                        <div className="flex items-start justify-between">
                                            <div>
                                                <CardTitle className="text-lg group-hover:text-primary transition-colors">
                                                    {template.name}
                                                </CardTitle>
                                                <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                                                    <div className="flex items-center gap-1">
                                                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                                                        <span>{template.rating}</span>
                                                    </div>
                                                    <span>•</span>
                                                    <span>{template.downloads} downloads</span>
                                                </div>
                                            </div>
                                        </div>
                                        <CardDescription className="mt-2 line-clamp-2">
                                            {template.description}
                                        </CardDescription>
                                    </CardHeader>

                                    <CardContent className="pt-0">
                                        <div className="flex flex-wrap gap-1.5 mb-4">
                                            {template.features.map((feature) => (
                                                <Badge
                                                    key={feature}
                                                    variant="secondary"
                                                    className="text-xs px-2 py-1"
                                                >
                                                    {feature}
                                                </Badge>
                                            ))}
                                        </div>

                                        <div className="flex gap-2">
                                            <Button className="flex-1 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                                                <Download className="h-4 w-4 mr-2" />
                                                Use Template
                                            </Button>
                                            <Button variant="outline" size="icon">
                                                <Eye className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </div>

                    {/* Carousel Indicators */}
                    <div className="flex justify-center mt-6 gap-2">
                        {Array.from({ length: Math.ceil(filteredTemplates.length / 3) }).map((_, index) => (
                            <div
                                key={index}
                                className="w-2 h-2 rounded-full bg-muted transition-colors hover:bg-primary/50"
                            />
                        ))}
                    </div>
                </div>

                {/* Stats Section */}
                <div className="mt-20 bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-8 text-center">
                    <h3 className="text-2xl font-bold mb-4">Join thousands of successful job seekers</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div>
                            <div className="text-3xl font-bold text-primary">6</div>
                            <div className="text-muted-foreground">Templates</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-primary">89k+</div>
                            <div className="text-muted-foreground">Downloads</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-primary">95%</div>
                            <div className="text-muted-foreground">ATS Compatible</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-primary">4.8★</div>
                            <div className="text-muted-foreground">Average Rating</div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};