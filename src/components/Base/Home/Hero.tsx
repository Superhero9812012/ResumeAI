"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowRight,
  BrainCircuit,
  Zap,
  Target,
  FileText,
  Sparkles,
  ListChecks,
  Star,
  CheckCircle,
  Shield,
  Rocket,
} from "lucide-react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Section from "@/components/Base/Section";
import { colors } from "@/components/Global/colors";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentFeature, setCurrentFeature] = useState(0);
  const router = useRouter();
  const { scrollY } = useScroll();
  
  const y = useTransform(scrollY, [0, 300], [0, 100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.3]);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: <Zap size={20} className="text-amber-500" />,
      text: "Rewrite resumes in seconds, not hours",
      description: "AI-powered optimization that saves you time",
    },
    {
      icon: <Target size={20} className="text-blue-500" />,
      text: "Optimize with role-specific keywords",
      description: "Beat ATS systems with targeted optimization",
    },
    {
      icon: <FileText size={20} className="text-emerald-500" />,
      text: "Beat ATS scans and get noticed",
      description: "Format-optimized for maximum compatibility",
    },
  ];

  const trustIndicators = [
    { icon: <Shield size={16} className="text-emerald-500" />, text: "100% secure" },
    { icon: <CheckCircle size={16} className="text-blue-500" />, text: "No signup required" },
    { icon: <Star size={16} className="text-amber-500" />, text: "AI-powered" },
  ];

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-emerald-400/20 to-blue-400/20 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <Section id="hero">
        <div className="relative z-10 grid min-h-[calc(100vh_-_80px)] grid-cols-1 items-center gap-12 py-8 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* AI Badge */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.2, duration: 0.6, type: "spring", bounce: 0.4 }}
              className="inline-flex items-center gap-3 rounded-full border border-blue-200 bg-white/80 px-6 py-3 text-sm font-semibold text-blue-700 shadow-lg backdrop-blur-sm"
            >
              <div className="relative">
                <BrainCircuit size={18} className="text-blue-600" />
                <motion.div
                  className="absolute -inset-1 rounded-full bg-blue-400/20"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
              <span>AI-Powered Resume Optimizer</span>
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-5xl font-bold tracking-tight text-slate-900 md:text-6xl lg:text-7xl"
              >
                Transform Your Resume With{" "}
                <span className="relative">
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
                    AI-Powered Excellence
                  </span>
                  <motion.div
                    className="absolute -bottom-2 left-0 h-1 w-full rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1, duration: 0.8 }}
                  />
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="max-w-2xl text-xl leading-relaxed text-slate-600 md:text-2xl"
              >
                Upload your resume, select your target role, and receive an AI-optimized version that captures recruiter attention and effortlessly passes ATS screening.
              </motion.p>
            </div>

            {/* Dynamic Features */}
            <div className="space-y-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentFeature}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.5 }}
                  className="flex items-center gap-4 rounded-2xl border border-blue-100 bg-white/60 p-4 shadow-lg backdrop-blur-sm"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 shadow-lg">
                    {features[currentFeature].icon}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">{features[currentFeature].text}</p>
                    <p className="text-sm text-slate-600">{features[currentFeature].description}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-col gap-4 sm:flex-row sm:items-center"
            >
              <Link href="/upload">
                <Button
                  size="lg"
                  className="group relative w-full overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-6 text-lg font-semibold text-white shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 sm:w-auto"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    initial={false}
                  />
                  <span className="relative z-10 flex items-center gap-3">
                    <Rocket size={20} className="animate-bounce-gentle" />
                    Optimize Your Resume Free
                    <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </Button>
              </Link>
              
              <Button
                size="lg"
                variant="outline"
                onClick={() => router.push("/shortlisting")}
                className="group w-full rounded-2xl border-2 border-slate-200 bg-white/80 px-8 py-6 text-lg font-semibold text-slate-700 shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-blue-300 hover:bg-blue-50 hover:shadow-xl hover:scale-105 sm:w-auto"
              >
                <ListChecks className="mr-3 text-blue-600" />
                Check Shortlisting Chances
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="flex flex-wrap items-center gap-6 text-sm text-slate-600"
            >
              {trustIndicators.map((indicator, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                  className="flex items-center gap-2 rounded-full bg-white/60 px-4 py-2 shadow-md backdrop-blur-sm"
                >
                  {indicator.icon}
                  <span className="font-medium">{indicator.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Interactive Resume Preview */}
          <motion.div
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8, rotateY: 15 }}
            animate={isVisible ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
            transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
            style={{ y, opacity }}
          >
            <div className="relative w-full max-w-lg">
              {/* Glow Effects */}
              <div className="absolute -inset-8 rounded-3xl bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-emerald-400/20 blur-3xl" />
              
              {/* Main Resume Card */}
              <motion.div
                className="relative overflow-hidden rounded-3xl border border-white/20 bg-white/90 shadow-2xl backdrop-blur-xl"
                whileHover={{ scale: 1.02, rotateY: 5 }}
                transition={{ duration: 0.3 }}
              >
                {/* Resume Header */}
                <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 p-8 text-white">
                  <div className="relative z-10">
                    <motion.h2
                      className="text-2xl font-bold"
                      animate={{ opacity: [0.8, 1, 0.8] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      Sarah Johnson
                    </motion.h2>
                    <p className="text-lg opacity-90">Senior Marketing Manager</p>
                    <p className="mt-2 text-sm opacity-80">
                      sarah.johnson@email.com • (555) 123-4567
                    </p>
                  </div>
                  
                  {/* AI Badge */}
                  <div className="absolute top-4 right-4">
                    <Badge className="flex items-center gap-2 rounded-full bg-emerald-500 px-3 py-1 text-xs font-semibold text-white shadow-lg">
                      <BrainCircuit size={12} />
                      AI Optimized
                    </Badge>
                  </div>
                </div>

                {/* Resume Body */}
                <div className="p-8 space-y-6">
                  {/* Summary */}
                  <div>
                    <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-800">
                      PROFESSIONAL SUMMARY
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      >
                        <Sparkles size={14} className="text-amber-500" />
                      </motion.div>
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-600">
                      Results-driven marketing leader with 8+ years driving revenue growth through data-driven campaigns. Expertise in digital marketing, team leadership, and ROI optimization.
                    </p>
                  </div>

                  {/* Experience */}
                  <div>
                    <h3 className="mb-3 text-sm font-semibold text-slate-800">EXPERIENCE</h3>
                    <div className="space-y-4">
                      <div className="rounded-xl border border-slate-100 bg-slate-50/50 p-4">
                        <h4 className="font-semibold text-slate-800">Senior Marketing Manager</h4>
                        <p className="text-sm font-medium text-blue-600">TechCorp • 2021-Present</p>
                        <ul className="mt-2 space-y-2 text-sm text-slate-600">
                          <li className="flex items-start gap-2">
                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500" />
                            Increased lead generation by{" "}
                            <Badge className="bg-emerald-100 text-emerald-700">40%</Badge>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500" />
                            Managed{" "}
                            <Badge className="bg-purple-100 text-purple-700">$2M</Badge>{" "}
                            budget with 25% cost reduction
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500" />
                            Led team of{" "}
                            <Badge className="bg-orange-100 text-orange-700">12</Badge>{" "}
                            professionals
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Skills */}
                  <div>
                    <h3 className="mb-3 text-sm font-semibold text-slate-800">KEY SKILLS</h3>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Digital Marketing",
                        "SEO/SEM",
                        "Analytics",
                        "Team Leadership",
                        "A/B Testing",
                        "CRM",
                      ].map((skill, index) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.1 * index, duration: 0.3 }}
                        >
                          <Badge className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 transition-colors hover:bg-blue-100">
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Section>
    </div>
  );
};

export default Hero;
