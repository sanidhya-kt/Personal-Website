import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sanidhya Kumar Tiwari | Software Engineer | AI Engineer",

  description:
    "Portfolio of Sanidhya Kumar Tiwari, an M.Tech Artificial Intelligence student at IIT Patna, showcasing software engineering, AI, machine learning, backend development, and full-stack projects.",

  keywords: [
    "Sanidhya Kumar Tiwari",
    "Software Engineer",
    "AI Engineer",
    "Machine Learning Engineer",
    "Full Stack Developer",
    "Backend Developer",
    "Next.js",
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Python",
    "C++",
    "Artificial Intelligence",
    "Machine Learning",
    "LLM",
    "Agentic AI",
    "Portfolio",
    "IIT Patna",
  ],

  authors: [
    {
      name: "Sanidhya Kumar Tiwari",
    },
  ],

  creator: "Sanidhya Kumar Tiwari",

  applicationName: "Sanidhya Portfolio",

  openGraph: {
    title: "Sanidhya Kumar Tiwari | Software Engineer | AI Engineer",
    description:
      "Portfolio showcasing software engineering, AI, machine learning, and full-stack development projects.",
    siteName: "Sanidhya Portfolio",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Sanidhya Kumar Tiwari | Software Engineer | AI Engineer",
    description:
      "Portfolio showcasing software engineering, AI, machine learning, and full-stack development projects.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}