"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import colors from '../Global/colors';

interface HeadingProps {
    tagText?: string;
    tagIcon?: LucideIcon;
    title: string;
    description?: string;
    isVisible?: boolean;
    primaryColor?: string;
    tertiaryColor?: string;
    className?: string;
    centered?: boolean;
}

const Heading: React.FC<HeadingProps> = ({
    tagText,
    tagIcon: TagIcon,
    title,
    description,
    isVisible = true,
    primaryColor = "#3B82F6", // Default blue color
    tertiaryColor = "#1E293B", // Default dark blue/slate
    className = "",
    centered = true,
}) => {
    const headerVariants = {
        hidden: { y: -20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.7,
                ease: "easeOut"
            }
        }
    };

    return (
        <motion.div
            className={`${centered ? 'text-center' : ''} mb-16 ${className}`}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={headerVariants}
        >
            {tagText && TagIcon && (
                <motion.div
                    className="inline-flex items-center py-2 px-5 rounded-full text-sm mb-6 bg-primary/10 text-primary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                >
                    <TagIcon size={15} className="mr-2" />
                    <span className="font-medium">{tagText}</span>
                </motion.div>
            )}

            <h2
                className="text-2xl md:text-3xl font-bold mb-4 text-transparent bg-clip-text"
                style={{
                    color: colors.tertiary
                }}
            >
                {title}
            </h2>

            {description && (
                <p className={`${centered ? 'max-w-2xl mx-auto' : ''} text-gray-600 text-lg`}>
                    {description}
                </p>
            )}
        </motion.div>
    );
};

export default Heading;