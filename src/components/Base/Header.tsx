"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    Home, FileText, DollarSign, Info, Mail, Menu, X, Upload, BrainCircuit, ArrowRight,
    LayoutDashboard,
    LogIn,
    Sparkles,
    HelpCircle,
    IndianRupee
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { colors } from '@/components/Global/colors';
// import {
//     SignInButton,
//     SignedIn,
//     SignedOut,
//     UserButton,
//     useUser
// } from '@clerk/nextjs'
import { useRouter } from 'next/navigation';

interface NavItem {
    name: string;
    path: string;
    icon: React.ReactNode;
}

const Header: React.FC = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    const navItems: NavItem[] = [
        { name: 'Home', path: '/', icon: <Home size={16} /> },
        // { name: 'Templates', path: '/templates', icon: <FileText size={16} /> },
        { name: 'Pricing', path: '/pricing', icon: <IndianRupee size={16} /> },
        { name: 'About', path: '/about-us', icon: <Info size={16} /> },
        { name: 'FAQ', path: '/faq', icon: <HelpCircle size={16} /> },
        { name: 'Contact', path: '/contact-us', icon: <Mail size={16} /> },
    ];

    // const { isSignedIn } = useUser()
    const isSignedIn = false; // Temporarily set to false for build
    const router = useRouter()

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
            <header
                className={`sticky top-0 z-50 w-full transition-all duration-500`}
                style={{
                    backgroundColor: scrolled
                        ? colors.lightBgOpacity(0.8)
                        : colors.lightBg,
                    backdropFilter: scrolled ? 'blur(12px)' : 'none',
                    borderBottom: `1px solid ${scrolled ? colors.secondaryOpacity(0.2) : colors.secondaryDark}`,
                    boxShadow: scrolled ? `0 1px 3px ${colors.neutralOpacity(0.1)}` : 'none'
                }}
            >
                <div className="px-6 md:px-10 lg:px-24 xl:px-40">
                    <div className="flex h-20 items-center justify-between">

                        <Link href="/" className="flex items-center group">
                            <div className="flex items-center gap-3">
                                <div className="relative">
                                    <div
                                        className="w-9 h-9 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105"
                                        style={{
                                            background: colors.primaryGradient,
                                        }}
                                    >
                                        <BrainCircuit className="h-5 w-5" style={{ color: colors.lightBg }} />
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <span
                                        className="font-bold text-xl tracking-tight"
                                        style={{ color: colors.tertiary }}
                                    >
                                        ResumeBot
                                    </span>
                                    <span
                                        className="text-xs font-medium tracking-wide -mt-0.5 hidden sm:block"
                                        style={{ color: colors.neutral }}
                                    >
                                        AI Resume Optimizer
                                    </span>
                                </div>
                            </div>
                        </Link>

                        <nav className="hidden lg:flex items-center">
                            <div
                                className="flex items-center space-x-1 rounded-full p-1 border"
                                style={{
                                    backgroundColor: colors.secondaryOpacity(0.5),
                                    borderColor: colors.secondaryOpacity(0.5)
                                }}
                            >
                                {navItems.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.path}
                                        className="px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 transition-all duration-300"
                                        style={{
                                            backgroundColor: isActive(item.path)
                                                ? colors.lightBg
                                                : 'transparent',
                                            color: isActive(item.path)
                                                ? colors.primary
                                                : colors.neutral,
                                            border: isActive(item.path)
                                                ? `1px solid ${colors.secondaryOpacity(0.5)}`
                                                : '1px solid transparent',
                                            boxShadow: isActive(item.path)
                                                ? `0 1px 3px ${colors.neutralOpacity(0.1)}`
                                                : 'none'
                                        }}
                                        onMouseEnter={(e) => {
                                            if (!isActive(item.path)) {
                                                e.currentTarget.style.color = colors.tertiary;
                                                e.currentTarget.style.backgroundColor = colors.lightBgOpacity(0.5);
                                            }
                                        }}
                                        onMouseLeave={(e) => {
                                            if (!isActive(item.path)) {
                                                e.currentTarget.style.color = colors.neutral;
                                                e.currentTarget.style.backgroundColor = 'transparent';
                                            }
                                        }}
                                    >
                                        {item.icon}
                                        <span className="hidden xl:inline">{item.name}</span>
                                    </Link>
                                ))}
                            </div>
                        </nav>

                        <div className="hidden md:flex items-center gap-3">
                            <Link href="/upload">
                                <Button
                                    size="sm"
                                    className="group shadow-lg hover:shadow-xl transition-all duration-300 font-medium px-5 cursor-pointer"
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
                                    <Upload className="h-4 w-4 mr-2" />
                                    Upload Resume
                                    <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-0.5 transition-transform duration-200" />
                                </Button>
                            </Link>

                            {
                                isSignedIn &&
                                <Button
                                    variant={"outline"}
                                    size="sm"
                                    onClick={() => router.push("/dashboard/overview")}
                                    className="transition-all duration-200 font-medium cursor-pointer"
                                    style={{
                                        color: colors.neutral,
                                        backgroundColor: 'transparent'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.color = colors.tertiary;
                                        e.currentTarget.style.backgroundColor = colors.secondaryOpacity(0.5);
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.color = colors.neutral;
                                        e.currentTarget.style.backgroundColor = 'transparent';
                                    }}
                                >
                                    <LayoutDashboard className="h-4 w-4 mr-2" />
                                    Dashboard
                                </Button>
                            }

                            {/* <SignedOut>
                                <div className="relative">
                                    <SignInButton
                                        mode="modal"
                                    >
                                        <Button
                                            size="sm"
                                            className="group shadow-md hover:shadow-lg transition-all duration-300 font-medium px-5 cursor-pointer"
                                            style={{
                                                background: `${colors.primary}`,
                                                color: colors.lightBg,
                                                border: 'none'
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.background = `${colors.primaryDark}`;
                                                e.currentTarget.style.transform = 'translateY(-1px)';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.background = `${colors.primary}`;
                                                e.currentTarget.style.transform = 'translateY(0px)';
                                            }}
                                        >
                                            <LogIn className="h-4 w-4 mr-2" />
                                            Sign In
                                            <Sparkles className="h-4 w-4 ml-1 group-hover:rotate-12 transition-transform duration-200" />
                                        </Button>
                                    </SignInButton>
                                </div>
                            </SignedOut> */}

                            {/* <SignedIn>
                                <div className="relative">
                                    <UserButton
                                        appearance={{
                                            elements: {
                                                avatarBox: "h-8 w-8 shadow-md hover:shadow-lg transition-all duration-200",
                                                userButtonPopoverCard: "shadow-xl border-0",
                                                userButtonPopoverActions: "bg-white/95 backdrop-blur-sm"
                                            }
                                        }}
                                    />
                                </div>
                            </SignedIn> */}
                        </div>

                        <div className="lg:hidden">
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                style={{
                                    color: colors.neutral,
                                    backgroundColor: 'transparent'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.color = colors.tertiary;
                                    e.currentTarget.style.backgroundColor = colors.secondaryOpacity(0.5);
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.color = colors.neutral;
                                    e.currentTarget.style.backgroundColor = 'transparent';
                                }}
                            >
                                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                            </Button>
                        </div>
                    </div>
                </div>
            </header>

            <div
                className={`fixed top-16 inset-x-0 lg:hidden transform transition-all duration-300 ease-out z-40 ${mobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0 pointer-events-none'
                    }`}
            >
                <div
                    className="border-b shadow-lg"
                    style={{
                        backgroundColor: colors.lightBgOpacity(0.95),
                        backdropFilter: 'blur(12px)',
                        borderBottomColor: colors.secondaryOpacity(0.5)
                    }}
                >
                    <div className="container mx-auto px-6 py-6 max-w-7xl">

                        <div className="space-y-1 mb-6">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.path}
                                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200"
                                    style={{
                                        backgroundColor: isActive(item.path)
                                            ? colors.primaryOpacity(0.1)
                                            : 'transparent',
                                        color: isActive(item.path)
                                            ? colors.primary
                                            : colors.neutral,
                                        border: isActive(item.path)
                                            ? `1px solid ${colors.primaryOpacity(0.2)}`
                                            : '1px solid transparent'
                                    }}
                                    onMouseEnter={(e) => {
                                        if (!isActive(item.path)) {
                                            e.currentTarget.style.color = colors.tertiary;
                                            e.currentTarget.style.backgroundColor = colors.secondaryOpacity(0.5);
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        if (!isActive(item.path)) {
                                            e.currentTarget.style.color = colors.neutral;
                                            e.currentTarget.style.backgroundColor = 'transparent';
                                        }
                                    }}
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {item.icon}
                                    {item.name}
                                </Link>
                            ))}
                        </div>

                        <div
                            className="space-y-3 pt-4 border-t"
                            style={{ borderTopColor: colors.secondaryOpacity(0.5) }}
                        >
                            {/* <SignedOut>
                                <SignInButton mode="modal">
                                    <Button
                                        variant="outline"
                                        className="w-full justify-center font-medium transition-all duration-200"
                                        style={{
                                            borderColor: colors.secondaryDark,
                                            color: colors.neutral,
                                            backgroundColor: 'transparent'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.backgroundColor = colors.secondaryOpacity(0.5);
                                            e.currentTarget.style.color = colors.tertiary;
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.backgroundColor = 'transparent';
                                            e.currentTarget.style.color = colors.neutral;
                                        }}
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        <LogIn className="h-4 w-4 mr-2" />
                                        Sign In
                                    </Button>
                                </SignInButton>
                            </SignedOut>

                            <SignedIn>
                                <Button
                                    variant="outline"
                                    className="w-full justify-center font-medium transition-all duration-200"
                                    onClick={() => {
                                        router.push("/dashboard/overview");
                                        setMobileMenuOpen(false);
                                    }}
                                    style={{
                                        borderColor: colors.secondaryDark,
                                        color: colors.neutral,
                                        backgroundColor: 'transparent'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.backgroundColor = colors.secondaryOpacity(0.5);
                                        e.currentTarget.style.color = colors.tertiary;
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.backgroundColor = 'transparent';
                                        e.currentTarget.style.color = colors.neutral;
                                    }}
                                >
                                    <LayoutDashboard className="h-4 w-4 mr-2" />
                                    Dashboard
                                </Button>
                            </SignedIn> */}

                            <Link href="/upload" onClick={() => setMobileMenuOpen(false)}>
                                <Button
                                    className="w-full group shadow-lg hover:shadow-xl transition-all duration-300 font-medium"
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
                                    <Upload className="h-4 w-4 mr-2" />
                                    Upload Resume Free
                                    <ArrowRight className="h-4 w-4 ml-auto group-hover:translate-x-0.5 transition-transform duration-200" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className={`fixed inset-0 backdrop-blur-sm lg:hidden z-30 transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                style={{
                    backgroundColor: colors.darkBgOpacity(0.1)
                }}
                onClick={() => setMobileMenuOpen(false)}
            />
        </>
    );
};

export default Header;