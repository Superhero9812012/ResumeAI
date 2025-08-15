// src/components/Global/colors.ts
/**
 * ResumeBot.co.in - Enhanced Color System
 * A comprehensive color palette with semantic naming
 * for consistent application styling
 */

// Define the color object
const colorPalette = {
    // Core Brand Colors - Modern Teal to Blue Gradient
    primary: "#0EA5E9",           // Sky Blue
    secondary: "#F8FAFC",         // Slate 50
    tertiary: "#0F172A",         // Slate 900

    // Derived Shades
    primaryDark: "#0369A1",       // Sky 700
    primaryLight: "#38BDF8",      // Sky 400
    primaryGradient: "linear-gradient(135deg, #0EA5E9 0%, #38BDF8 100%)",
    primaryGradientHover: "linear-gradient(135deg, #0369A1 0%, #0EA5E9 100%)",

    secondaryDark: "#E2E8F0",     // Slate 200
    secondaryLight: "#F1F5F9",    // Slate 100

    tertiaryLight: "#334155",     // Slate 700

    // Accent & Status Colors
    accent: "#F59E0B",            // Amber 500
    accentLight: "#FBBF24",       // Amber 400
    accentGradient: "linear-gradient(135deg, #F59E0B 0%, #FBBF24 100%)",

    success: "#10B981",           // Emerald 500
    warning: "#F59E0B",           // Amber 500
    error: "#EF4444",             // Red 500

    neutral: "#64748B",           // Slate 500
    neutralMedium: "#94A3B8",     // Slate 400
    neutralLight: "#E2E8F0",      // Slate 200

    // Backgrounds
    darkBg: "#0F172A",            // Slate 900
    lightBg: "#FFFFFF",           // White
    cardBg: "#F8FAFC",            // Slate 50
    glassBg: "rgba(255, 255, 255, 0.1)",

    // Additional Gradients
    successGradient: 'linear-gradient(135deg, #10B981 0%, #34D399 100%)',
    warningGradient: 'linear-gradient(135deg, #F59E0B 0%, #FBBF24 100%)',
    errorGradient: 'linear-gradient(135deg, #EF4444 0%, #F87171 100%)',

    backgroundGradient: 'linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%)',
    heroGradient: 'linear-gradient(135deg, #0EA5E9 0%, #38BDF8 100%)',
    
    // Glassmorphism & Shadows
    glassBorder: "rgba(255, 255, 255, 0.2)",
    glassShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
    
    // AI Theme Colors
    aiBlue: "#3B82F6",            // Blue 500
    aiPurple: "#8B5CF6",          // Violet 500
    aiGreen: "#10B981",           // Emerald 500
    aiOrange: "#F59E0B",          // Amber 500
} as const;

// --- Opacity Helpers ---
// Helper function to convert hex to rgba
const hexToRgba = (hex: string, alpha: number): string => {
    const bigint = parseInt(hex.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

// Define the final colors object including helpers
export const colors = {
    ...colorPalette,
    // Opacity functions
    primaryOpacity: (opacity: number): string => hexToRgba(colorPalette.primary, opacity),
    secondaryOpacity: (opacity: number): string => hexToRgba(colorPalette.secondary, opacity),
    tertiaryOpacity: (opacity: number): string => hexToRgba(colorPalette.tertiary, opacity),
    accentOpacity: (opacity: number): string => hexToRgba(colorPalette.accent, opacity),
    successOpacity: (opacity: number): string => hexToRgba(colorPalette.success, opacity),
    warningOpacity: (opacity: number): string => hexToRgba(colorPalette.warning, opacity),
    errorOpacity: (opacity: number): string => hexToRgba(colorPalette.error, opacity),
    neutralOpacity: (opacity: number): string => hexToRgba(colorPalette.neutral, opacity),
    lightBgOpacity: (opacity: number): string => hexToRgba(colorPalette.lightBg, opacity),
    darkBgOpacity: (opacity: number): string => hexToRgba(colorPalette.darkBg, opacity),
} as const;

// Optional: Define a type for color keys if needed elsewhere
export type ColorKeys = keyof typeof colors;

// Theme variants
export const themeVariants = {
    default: {
        background: colors.secondary,
        text: colors.tertiary,
        border: colors.secondaryDark,
    },
    primary: {
        background: colors.primary,
        text: colors.lightBg,
        border: colors.primaryDark,
    },
    accent: {
        background: colors.accent,
        text: colors.lightBg,
        border: colors.tertiary,
    },
    dark: {
        background: colors.darkBg,
        text: colors.lightBg,
        border: colors.secondary,
    },
    light: {
        background: colors.lightBg,
        text: colors.tertiary,
        border: colors.secondaryDark,
    },
    glass: {
        background: colors.glassBg,
        text: colors.tertiary,
        border: colors.glassBorder,
    },
};

// Generate CSS variables
export const generateCSSVariables = (): string => {
    let cssVars = ':root {\n';
    Object.entries(colorPalette).forEach(([key, value]) => {
        if (typeof value === 'string' && !key.endsWith('Gradient') && !key.endsWith('Opacity')) {
            cssVars += `  --color-${key}: ${value};\n`;
        }
    });
    cssVars += '}';
    return cssVars;
};

export default colors; // Export the enhanced colors object