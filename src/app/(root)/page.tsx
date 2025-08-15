"use client";
import React from 'react';
import Hero from '@/components/Base/Home/HeroEnhanced';
import { TemplatesSectionEnhanced } from '@/components/Base/Home/TemplatesSectionEnhanced';
import { PricingSectionEnhanced } from '@/components/Base/Home/PricingSectionEnhanced';
import { AboutSection } from '@/components/Base/Home/AboutSection';
import { ContactSection } from '@/components/Base/Home/ContactSection';
import { FAQSection } from '@/components/Base/Home/faqSection';


const Homepage = () => {
    return (
        <main>
            <Hero />
            <TemplatesSectionEnhanced />
            <PricingSectionEnhanced />
            <FAQSection/>
            {/* <AboutSection />
            <ContactSection /> */}
        </main>
    );
};

export default Homepage;