import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "../app/(root)/layout.css";
// import {
//   ClerkProvider,
//   SignInButton,
//   SignedIn,
//   SignedOut,
//   UserButton
// } from '@clerk/nextjs'

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "ResumeBot – AI-Powered Resume Optimizer",
    template: "%s | ResumeBot – Smart Resume Rewriting with AI",
  },
  description:
    "ResumeBot is an AI-powered resume optimizer that enhances your CV for specific job roles. Use AI to rewrite and improve your resume instantly for better hiring results.",
  keywords: [
    "resume optimizer",
    "AI resume writer",
    "resume rewrite tool",
    "ATS resume checker",
    "ResumeBot AI",
    "smart resume generator",
    "AI job resume builder",
    "resume improvement tool",
    "job seeker AI",
    "career boost resume",
    "tailored resume AI",
    "resume rewrite for ATS",
    "job application optimization",
  ],
  authors: [{ name: "ResumeBot", url: "https://resumebot.co.in" }],
  creator: "ResumeBot",
  publisher: "ResumeBot",
  category: "AI Resume Tools",
  applicationName: "ResumeBot",
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  alternates: {
    canonical: "https://resumebot.co.in",
    languages: {
      "en-US": "https://resumebot.co.in",
      "en-GB": "https://resumebot.co.in/uk",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://resumebot.co.in",
    title: "ResumeBot – AI-Powered Resume Optimizer",
    description:
      "Use ResumeBot to rewrite your resume with AI. Make your CV ATS-friendly and job-specific with just a few clicks. Trusted by professionals worldwide.",
    siteName: "ResumeBot",
    images: [
      {
        url: "https://resumebot.co.in/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ResumeBot – AI Resume Tool Screenshot",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@resumebot",
    creator: "@resumebot",
    title: "ResumeBot – Instantly Rewrite Your Resume with AI",
    description:
      "Get a perfectly optimized resume in seconds. ResumeBot rewrites your CV using AI to increase job interview chances.",
    images: ["https://resumebot.co.in/twitter-card.jpg"],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#2563EB" },
    { media: "(prefers-color-scheme: dark)", color: "#1E3A8A" },
  ],
  verification: {
    google: "your-google-site-verification-code",
    yandex: "your-yandex-verification-code",
    other: {
      bing: "your-bing-verification-code",
    },
  },
  appleWebApp: {
    title: "ResumeBot",
    statusBarStyle: "black-translucent",
    capable: true,
  },
  manifest: "https://resumebot.co.in/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#2563EB",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={nunito.variable}>
      <head>
        <meta name="author" content="ResumeBot" />
        <meta name="copyright" content="© ResumeBot" />
      </head>
      <body className="antialiased text-gray-800 bg-white dark:bg-gray-900">
        {children}
      </body>
    </html>
  );
}
