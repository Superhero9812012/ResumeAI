
"use client";
import "../globals.css";
import { cn } from "@/lib/utils";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {



    return (
        <div className="flex min-h-screen">
            {/* <Sidebar onToggle={handleSidebarToggle} /> */}
            <main className={cn(
                "flex-1 min-h-screen relative transition-all duration-300 ease-in-out",

            )}>
                {/* Subtle background pattern */}
                {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_50%)] pointer-events-none" /> */}
                <div className="relative z-10 h-full">
                    {children}
                </div>
            </main>
        </div>
    );
}