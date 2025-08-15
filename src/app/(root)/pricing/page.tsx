"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
    Check, 
    Star, 
    Sparkles, 
    Download, 
    FileText, 
    Bot, 
    Zap, 
    Shield, 
    Award, 
    Crown,
    Rocket,
    ArrowRight,
    TrendingUp,
    Users,
    Clock,
    Heart,
    Gift,
    Lock,
    Globe,
    Target,
    BrainCircuit,
    CheckCircle,
    DollarSign,
    Infinity,
    Calendar,
    Phone,
    MessageCircle,
    Mail,
    X
} from 'lucide-react';
import Section from '@/components/Base/Section';

const PricingPageEnhanced = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState('pro');
    const [isAnnual, setIsAnnual] = useState(true);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const plans = [
        {
            id: 'free',
            name: 'Free Trial',
            description: 'Perfect for trying out our AI features',
            price: { monthly: 0, annual: 0 },
            originalPrice: { monthly: 99, annual: 99 },
            features: [
                '1 AI-optimized resume',
                'Basic templates (3)',
                'ATS scoring',
                'Email support',
                '24-hour access'
            ],
            limitations: [
                'Watermarked downloads',
                'Limited AI suggestions',
                'No premium templates',
                'Basic analytics'
            ],
            color: 'from-slate-500 to-slate-600',
            icon: FileText,
            popular: false,
            badge: null
        },
        {
            id: 'pro',
            name: 'AI Resume Pro',
            description: 'Most popular choice for job seekers',
            price: { monthly: 299, annual: 199 },
            originalPrice: { monthly: 599, annual: 499 },
            features: [
                'Unlimited AI-optimized resumes',
                'All premium templates (15+)',
                'Advanced ATS scoring',
                'Keyword optimization',
                'Real-time suggestions',
                'Priority support',
                'Cover letter generator',
                'Multiple export formats',
                'Resume analytics',
                'Job matching insights',
                'Lifetime updates',
                'Mobile app access'
            ],
            limitations: [],
            color: 'from-purple-600 via-blue-600 to-emerald-600',
            icon: Crown,
            popular: true,
            badge: 'Most Popular'
        },
        {
            id: 'enterprise',
            name: 'Enterprise',
            description: 'For teams and organizations',
            price: { monthly: 999, annual: 799 },
            originalPrice: { monthly: 1999, annual: 1599 },
            features: [
                'Everything in Pro',
                'Team collaboration',
                'Custom branding',
                'Advanced analytics',
                'API access',
                'Dedicated support',
                'Custom integrations',
                'White-label options',
                'Bulk processing',
                'Advanced reporting',
                'Training sessions',
                'SLA guarantee'
            ],
            limitations: [],
            color: 'from-emerald-600 via-teal-600 to-cyan-600',
            icon: Rocket,
            popular: false,
            badge: 'Best Value'
        }
    ];

    const benefits = [
        {
            icon: BrainCircuit,
            title: "AI-Powered Optimization",
            description: "Advanced algorithms analyze job descriptions and optimize your resume for maximum impact",
            color: "from-blue-500 to-purple-600"
        },
        {
            icon: Target,
            title: "ATS-Friendly Design",
            description: "Every template is designed to pass Applicant Tracking Systems with flying colors",
            color: "from-green-500 to-emerald-600"
        },
        {
            icon: Zap,
            title: "Instant Results",
            description: "Get your optimized resume in under 30 seconds with our lightning-fast AI",
            color: "from-yellow-500 to-orange-600"
        },
        {
            icon: Shield,
            title: "Secure & Private",
            description: "Enterprise-grade security ensures your personal information stays protected",
            color: "from-red-500 to-pink-600"
        }
    ];

    const testimonials = [
        {
            name: "Sarah Johnson",
            role: "Software Engineer",
            company: "Google",
            text: "ResumeBot helped me land my dream job at Google. The AI optimization was incredible!",
            rating: 5,
            avatar: "SJ"
        },
        {
            name: "Michael Chen",
            role: "Product Manager",
            company: "Microsoft",
            text: "The ATS optimization feature is a game-changer. My resume now gets through every screening.",
            rating: 5,
            avatar: "MC"
        },
        {
            name: "Emily Rodriguez",
            role: "Marketing Director",
            company: "Netflix",
            text: "Professional, fast, and effective. ResumeBot transformed my career prospects.",
            rating: 5,
            avatar: "ER"
        }
    ];

    const stats = [
        { number: '50K+', label: 'Resumes Optimized', icon: TrendingUp },
        { number: '95%', label: 'ATS Pass Rate', icon: Shield },
        { number: '2.5x', label: 'More Interviews', icon: Award },
        { number: '24/7', label: 'AI Support', icon: Zap }
    ];

    const currentPlan = plans.find(plan => plan.id === selectedPlan);
    const currentPrice = isAnnual ? currentPlan?.price.annual : currentPlan?.price.monthly;
    const currentOriginalPrice = isAnnual ? currentPlan?.originalPrice.annual : currentPlan?.originalPrice.monthly;
    const savings = currentOriginalPrice - currentPrice;

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                <div className="absolute top-40 right-32 w-1 h-1 bg-purple-400 rounded-full animate-pulse delay-1000" />
                <div className="absolute bottom-32 left-1/3 w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse delay-2000" />
                <div className="absolute top-1/2 left-10 w-1 h-1 bg-yellow-400 rounded-full animate-pulse delay-1500" />
                <div className="absolute bottom-20 right-20 w-2 h-2 bg-pink-400 rounded-full animate-pulse delay-3000" />
            </div>

            <Section id="pricing">
                <div className="container mx-auto py-20">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isVisible ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-white/20 text-slate-700 text-sm font-medium mb-8"
                        >
                            <Sparkles className="h-4 w-4" />
                            AI-Powered Resume Optimization
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={isVisible ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
                        >
                            <span className="text-slate-900">
                                Simple, Transparent
                            </span>
                            <br />
                            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
                                Pricing
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={isVisible ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="text-xl text-slate-600 max-w-3xl mx-auto mb-12 leading-relaxed"
                        >
                            Choose the perfect plan for your career journey. All plans include our advanced AI technology and premium templates.
                        </motion.p>

                        {/* Billing Toggle */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isVisible ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.7, duration: 0.8 }}
                            className="flex items-center justify-center gap-4 mb-12"
                        >
                            <span className={`text-sm font-medium ${!isAnnual ? 'text-slate-900' : 'text-slate-500'}`}>
                                Monthly
                            </span>
                            <button
                                onClick={() => setIsAnnual(!isAnnual)}
                                className={`relative w-16 h-8 rounded-full transition-colors duration-300 ${
                                    isAnnual ? 'bg-gradient-to-r from-blue-600 to-purple-600' : 'bg-slate-300'
                                }`}
                            >
                                <motion.div
                                    className="absolute top-1 w-6 h-6 bg-white rounded-full shadow-md"
                                    animate={{ x: isAnnual ? 32 : 4 }}
                                    transition={{ duration: 0.3 }}
                                />
                            </button>
                            <span className={`text-sm font-medium ${isAnnual ? 'text-slate-900' : 'text-slate-500'}`}>
                                Annual
                                <Badge className="ml-2 bg-green-500 text-white text-xs">Save 33%</Badge>
                            </span>
                        </motion.div>
                    </motion.div>

                    {/* Pricing Cards */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={isVisible ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.9, duration: 0.8 }}
                        className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20"
                    >
                        {plans.map((plan, index) => {
                            const IconComponent = plan.icon;
                            const price = isAnnual ? plan.price.annual : plan.price.monthly;
                            const originalPrice = isAnnual ? plan.originalPrice.annual : plan.originalPrice.monthly;
                            const savings = originalPrice - price;

                            return (
                                <motion.div
                                    key={plan.id}
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                                    transition={{ delay: 1 + index * 0.2, duration: 0.8 }}
                                    className="relative"
                                >
                                    {plan.popular && (
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ delay: 1.2, duration: 0.6, type: "spring" }}
                                            className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10"
                                        >
                                            <Badge className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 text-sm font-semibold shadow-lg">
                                                <Star className="h-4 w-4 mr-1 fill-current" />
                                                {plan.badge}
                                            </Badge>
                                        </motion.div>
                                    )}

                                    <Card className={`relative overflow-hidden border-0 shadow-2xl transition-all duration-500 hover:shadow-3xl hover:-translate-y-2 flex flex-col h-full ${
                                        plan.popular 
                                            ? 'bg-gradient-to-br from-white via-purple-50 to-blue-50 border-2 border-purple-200' 
                                            : 'bg-white/80 backdrop-blur-sm'
                                    }`}>
                                        <CardHeader className="text-center pt-8 pb-6">
                                            <motion.div
                                                className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}
                                                whileHover={{ scale: 1.1, rotate: 5 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <IconComponent className="h-8 w-8 text-white" />
                                            </motion.div>
                                            
                                            <CardTitle className="text-2xl font-bold mb-2">{plan.name}</CardTitle>
                                            <p className="text-slate-600 mb-6">{plan.description}</p>

                                            <div className="flex items-center justify-center gap-4 mb-4">
                                                <div className="text-center">
                                                    <div className="flex items-center gap-2">
                                                        <span className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                                            ₹{price}
                                                        </span>
                                                        {!isAnnual && <span className="text-slate-500">/mo</span>}
                                                        {isAnnual && <span className="text-slate-500">/year</span>}
                                                    </div>
                                                    {savings > 0 && (
                                                        <div className="flex items-center gap-2 mt-2">
                                                            <span className="text-sm text-slate-500 line-through">₹{originalPrice}</span>
                                                            <Badge className="bg-green-500 text-white text-xs">
                                                                Save ₹{savings}
                                                            </Badge>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>

                                            {plan.id === 'free' && (
                                                <p className="text-sm text-slate-500">No credit card required</p>
                                            )}
                                        </CardHeader>

                                        <CardContent className="px-8 pb-8 flex-1 flex flex-col">
                                            {/* Features */}
                                            <div className="space-y-4 mb-8 flex-1">
                                                <h4 className="font-semibold text-slate-900 mb-4">What's included:</h4>
                                                {plan.features.map((feature, idx) => (
                                                    <motion.div
                                                        key={idx}
                                                        initial={{ opacity: 0, x: -20 }}
                                                        animate={isVisible ? { opacity: 1, x: 0 } : {}}
                                                        transition={{ delay: 1.5 + idx * 0.1, duration: 0.5 }}
                                                        className="flex items-center gap-3"
                                                    >
                                                        <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                                                            <Check className="h-3 w-3 text-green-600" />
                                                        </div>
                                                        <span className="text-sm text-slate-700">{feature}</span>
                                                    </motion.div>
                                                ))}
                                            </div>

                                            {/* Limitations */}
                                            {plan.limitations.length > 0 && (
                                                <div className="space-y-4 mb-8">
                                                    <h4 className="font-semibold text-slate-900 mb-4">Limitations:</h4>
                                                    {plan.limitations.map((limitation, idx) => (
                                                        <motion.div
                                                            key={idx}
                                                            initial={{ opacity: 0, x: -20 }}
                                                            animate={isVisible ? { opacity: 1, x: 0 } : {}}
                                                            transition={{ delay: 1.8 + idx * 0.1, duration: 0.5 }}
                                                            className="flex items-center gap-3"
                                                        >
                                                            <div className="w-5 h-5 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                                                                <X className="h-3 w-3 text-red-600" />
                                                            </div>
                                                            <span className="text-sm text-slate-500">{limitation}</span>
                                                        </motion.div>
                                                    ))}
                                                </div>
                                            )}

                                            {/* CTA Button */}
                                            <motion.div
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                            >
                                                <Button 
                                                    className={`w-full py-6 text-lg font-semibold rounded-2xl transition-all duration-300 ${
                                                        plan.popular
                                                            ? 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg hover:shadow-xl'
                                                            : 'bg-slate-900 hover:bg-slate-800 text-white shadow-lg hover:shadow-xl'
                                                    }`}
                                                >
                                                    {plan.id === 'free' ? (
                                                        <>
                                                            <Rocket className="h-5 w-5 mr-2" />
                                                            Start Free Trial
                                                        </>
                                                    ) : (
                                                        <>
                                                            <Crown className="h-5 w-5 mr-2" />
                                                            Get Started Now
                                                            <ArrowRight className="h-5 w-5 ml-2" />
                                                        </>
                                                    )}
                                                </Button>
                                            </motion.div>

                                            {plan.id !== 'free' && (
                                                <p className="text-center text-xs text-slate-500 mt-4">
                                                    ✨ Instant access • 💎 No hidden fees • 🔒 Secure payment
                                                </p>
                                            )}
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            );
                        })}
                    </motion.div>

                    {/* Benefits Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="mb-20"
                    >
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                Why Choose{" "}
                                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                    ResumeBot?
                                </span>
                            </h2>
                            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                                Advanced AI technology designed to give you the competitive edge in today's job market
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {benefits.map((benefit, index) => {
                                const IconComponent = benefit.icon;
                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 40 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: index * 0.2 }}
                                        viewport={{ once: true }}
                                        className="group"
                                    >
                                        <Card className="relative overflow-hidden border-0 shadow-xl bg-white/80 backdrop-blur-sm group-hover:bg-white/90 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 flex flex-col h-full">
                                            <CardContent className="p-8 text-center flex-1 flex flex-col justify-center">
                                                <motion.div
                                                    className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}
                                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                                    transition={{ duration: 0.3 }}
                                                >
                                                    <IconComponent className="h-8 w-8 text-white" />
                                                </motion.div>
                                                <h3 className="text-xl font-bold mb-4 text-slate-900">{benefit.title}</h3>
                                                <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>

                    {/* Stats Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="mb-20"
                    >
                        <div className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 rounded-3xl p-12 text-white relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-emerald-600/20" />
                            <div className="relative z-10">
                                <div className="text-center mb-12">
                                    <h3 className="text-3xl md:text-4xl font-bold mb-4">
                                        Trusted by{" "}
                                        <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                            50,000+ Professionals
                                        </span>
                                    </h3>
                                    <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                                        Join thousands of job seekers who have transformed their careers with ResumeBot
                                    </p>
                                </div>

                                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                                    {stats.map((stat, index) => {
                                        const IconComponent = stat.icon;
                                        return (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                                viewport={{ once: true }}
                                                className="text-center"
                                            >
                                                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                                                    <IconComponent className="h-8 w-8 text-white" />
                                                </div>
                                                <div className="text-3xl font-bold mb-2">{stat.number}</div>
                                                <div className="text-slate-300 text-sm">{stat.label}</div>
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Testimonials */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="mb-20"
                    >
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                Loved by{" "}
                                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                    Professionals
                                </span>
                            </h2>
                            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                                See what our users say about their experience with ResumeBot
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {testimonials.map((testimonial, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.2 }}
                                    viewport={{ once: true }}
                                >
                                    <Card className="relative overflow-hidden border-0 shadow-xl bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                                        <CardContent className="p-8">
                                            <div className="flex items-center gap-1 mb-4">
                                                {[...Array(testimonial.rating)].map((_, i) => (
                                                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                                                ))}
                                            </div>
                                            <p className="text-slate-600 mb-6 leading-relaxed italic">"{testimonial.text}"</p>
                                            <div className="flex items-center gap-4">
                                                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold">
                                                    {testimonial.avatar}
                                                </div>
                                                <div>
                                                    <div className="font-semibold text-slate-900">{testimonial.name}</div>
                                                    <div className="text-sm text-slate-500">{testimonial.role} at {testimonial.company}</div>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Final CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <Card className="relative overflow-hidden border-0 shadow-2xl bg-gradient-to-r from-blue-600 to-purple-600">
                            <CardContent className="p-12 text-center text-white">
                                <motion.div
                                    className="w-20 h-20 rounded-2xl bg-white/20 flex items-center justify-center mx-auto mb-8 shadow-lg"
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Rocket className="h-10 w-10 text-white" />
                                </motion.div>
                                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                    Ready to Transform Your Career?
                                </h2>
                                <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                                    Join thousands of professionals who have already optimized their resumes and landed their dream jobs
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                    <Button
                                        size="lg"
                                        className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                                    >
                                        <Sparkles className="h-6 w-6 mr-3" />
                                        Start Your Free Trial
                                        <ArrowRight className="h-6 w-6 ml-3" />
                                    </Button>
                                    <Button
                                        size="lg"
                                        variant="outline"
                                        className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-2xl"
                                    >
                                        <MessageCircle className="h-6 w-6 mr-3" />
                                        Talk to Sales
                                    </Button>
                                </div>
                                <p className="text-blue-200 mt-6 text-sm">
                                    ✨ No credit card required • 💎 30-day money-back guarantee • 🔒 Secure & private
                                </p>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </Section>
        </div>
    );
};

export default PricingPageEnhanced;