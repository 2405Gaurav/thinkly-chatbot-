import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "PlacementGPT – AI Placement Mentor",
  description:
    "Crack your placement interviews with AI-powered mentorship. Practice DSA, HR questions, mock interviews, and get your resume reviewed — all in one place.",
  keywords: [
    "placement prep",
    "campus placement",
    "DSA interview",
    "HR interview",
    "mock interview",
    "resume review",
    "FAANG interview",
    "PlacementGPT",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("scroll-smooth antialiased h-full", geist.variable)}
    >
      <body
        className="min-h-screen flex flex-col bg-[#f7f7f5] text-gray-800"
        style={{ fontFamily: "var(--font-sans), 'DM Sans', system-ui, sans-serif" }}
      >
      
        {children}
      </body>
    </html>
  );
}