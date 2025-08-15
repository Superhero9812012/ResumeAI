"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    Home, FileText, DollarSign, Info, Mail, Menu, X, Upload, BrainCircuit, ArrowRight,
    LayoutDashboard, LogIn, Sparkles, HelpCircle, IndianRupee, User, Settings
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
// import {
//     SignInButton,
//     SignedIn,
//     SignedOut,
//     UserButton,
//     useUser
// } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';

interface NavItem {
    name: string;
    path: string;
    icon: React.ReactNode;
}

const HeaderEnhanced: React.FC = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    const navItems: NavItem[] = [
        { name: 'Home', path: '/', icon: <Home size={16} /> },
        { name: 'Templates', path: '/templates', icon: <FileText size={16} /> },
        { name: 'Pricing', path: '/pricing', icon: <IndianRupee size={16} /> },
        { name: 'About', path: '/about-us', icon: <Info size={16} /> },
        { name: 'FAQ', path: '/faq', icon: <HelpCircle size={16} /> },
        { name: 'Contact', path: '/contact-us', icon: <Mail size={16} /> },
    ];

    // const { isSignedIn } = useUser();
    const router = useRouter();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const isActive = (path: string) => {
        if (path === '/') {
            return pathname === '/';
        }
        return pathname.startsWith(path);
    };

    return (
        <>
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`sticky top-0 z-50 w-full transition-all duration-500 ${
                    scrolled 
                        ? 'bg-white/80 backdrop-blur-xl border-b border-slate-200/50 shadow-lg' 
                        : 'bg-transparent'
                }`}
            >
                <div className="px-6 md:px-10 lg:px-24 xl:px-40">
                    <div className="flex h-20 items-center justify-between">
                        {/* Logo */}
                        <Link href="/" className="flex items-center group">
                            <motion.div 
                                className="flex items-center gap-3"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.2 }}
                            >
                                <div className="relative">
                                    <motion.div
                                        className="w-10 h-10 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300"
                                        style={{
                                            background: 'linear-gradient(135deg, #0EA5E9 0%, #38BDF8 100%)',
                                        }}
                                        whileHover={{ rotate: 5 }}
                                        animate={{ 
                                            boxShadow: scrolled 
                                                ? "0 10px 25px rgba(14, 165, 233, 0.3)" 
                                                : "0 5px 15px rgba(14, 165, 233, 0.2)"
                                        }}
                                    >
                                        <BrainCircuit className="h-5 w-5 text-white" />
                                    </motion.div>
                                    <motion.div
                                        className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-400 to-purple-500 opacity-20 blur-sm"
                                        animate={{ scale: [1, 1.2, 1] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-bold text-xl tracking-tight text-slate-900">
                                        ResumeBot
                                    </span>
                                    <span className="text-xs text-slate-500 -mt-1">
                                        AI-Powered
                                    </span>
                                </div>
                            </motion.div>
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center gap-8">
                            {navItems.map((item, index) => (
                                <motion.div
                                    key={item.name}
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1, duration: 0.3 }}
                                >
                                    <Link
                                        href={item.path}
                                        className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all duration-300 relative group ${
                                            isActive(item.path)
                                                ? 'text-blue-600 bg-blue-50'
                                                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                                        }`}
                                    >
                                        {item.icon}
                                        {item.name}
                                        {isActive(item.path) && (
                                            <motion.div
                                                className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full"
                                                layoutId="activeTab"
                                                initial={false}
                                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                            />
                                        )}
                                    </Link>
                                </motion.div>
                            ))}
                        </nav>

                        {/* CTA Buttons */}
                        <div className="hidden lg:flex items-center gap-4">
                            {/* <SignedOut> */}
                                {/* <SignInButton mode="modal"> */}
                                    <Button
                                        variant="ghost"
                                        className="text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                                    >
                                        <LogIn size={16} className="mr-2" />
                                        Sign In
                                    </Button>
                                {/* </SignInButton> */}
                                <Button
                                    onClick={() => router.push('/upload')}
                                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                                >
                                    <Sparkles size={16} className="mr-2" />
                                    Get Started
                                </Button>
                            {/* </SignedOut> */}
                            {/* <SignedIn> */}
                                <Button
                                    variant="ghost"
                                    onClick={() => router.push('/dashboard')}
                                    className="text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                                >
                                    <LayoutDashboard size={16} className="mr-2" />
                                    Dashboard
                                </Button>
                                {/* <UserButton 
                                    appearance={{
                                        elements: {
                                            avatarBox: "w-10 h-10"
                                        }
                                    }}
                                /> */}
                            {/* </SignedIn> */}
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="lg:hidden p-2 rounded-xl hover:bg-slate-100 transition-colors"
                        >
                            <AnimatePresence mode="wait">
                                {mobileMenuOpen ? (
                                    <motion.div
                                        key="close"
                                        initial={{ rotate: -90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: 90, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <X size={24} className="text-slate-600" />
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="menu"
                                        initial={{ rotate: 90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: -90, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <Menu size={24} className="text-slate-600" />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-slate-200/50"
                        >
                            <div className="px-6 py-6 space-y-4">
                                {navItems.map((item, index) => (
                                    <motion.div
                                        key={item.name}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1, duration: 0.3 }}
                                    >
                                        <Link
                                            href={item.path}
                                            onClick={() => setMobileMenuOpen(false)}
                                            className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                                                isActive(item.path)
                                                    ? 'text-blue-600 bg-blue-50'
                                                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                                            }`}
                                        >
                                            {item.icon}
                                            {item.name}
                                        </Link>
                                    </motion.div>
                                ))}
                                
                                <div className="pt-4 border-t border-slate-200/50 space-y-3">
                                    {/* <SignedOut> */}
                                        {/* <SignInButton mode="modal"> */}
                                            <Button
                                                variant="ghost"
                                                className="w-full justify-start text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                                            >
                                                <LogIn size={16} className="mr-3" />
                                                Sign In
                                            </Button>
                                        {/* </SignInButton> */}
                                        <Button
                                            onClick={() => {
                                                router.push('/upload');
                                                setMobileMenuOpen(false);
                                            }}
                                            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                                        >
                                            <Sparkles size={16} className="mr-3" />
                                            Get Started
                                        </Button>
                                    {/* </SignedOut> */}
                                    {/* <SignedIn> */}
                                        <Button
                                            variant="ghost"
                                            onClick={() => {
                                                router.push('/dashboard');
                                                setMobileMenuOpen(false);
                                            }}
                                            className="w-full justify-start text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                                        >
                                            <LayoutDashboard size={16} className="mr-3" />
                                            Dashboard
                                        </Button>
                                    {/* </SignedIn> */}
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.header>
        </>
    );
};

export default HeaderEnhanced;
