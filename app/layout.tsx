import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://personal-website-nu-mocha-22.vercel.app"),

  title: {
    default: "Sanidhya Kumar Tiwari | Software Engineer | AI Engineer",
    template: "%s | Sanidhya Kumar Tiwari",
  },

  description:
    "Portfolio of Sanidhya Kumar Tiwari, an M.Tech Artificial Intelligence student at IIT Patna, showcasing software engineering, AI, machine learning, backend development, and full-stack projects.",

  keywords: [
    "Sanidhya Kumar Tiwari",
    "Software Engineer",
    "AI Engineer",
    "Machine Learning Engineer",
    "Backend Developer",
    "Full Stack Developer",
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
      url: "https://personal-website-nu-mocha-22.vercel.app",
    },
  ],

  creator: "Sanidhya Kumar Tiwari",

  applicationName: "Sanidhya Portfolio",

  openGraph: {
    title: "Sanidhya Kumar Tiwari | Software Engineer | AI Engineer",
    description:
      "Portfolio showcasing software engineering, AI, machine learning, backend development, and full-stack development projects.",
    url: "https://personal-website-nu-mocha-22.vercel.app",
    siteName: "Sanidhya Portfolio",
    locale: "en_US",
    type: "website",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sanidhya Kumar Tiwari Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Sanidhya Kumar Tiwari | Software Engineer | AI Engineer",
    description:
      "Portfolio showcasing software engineering, AI, machine learning, backend development, and full-stack projects.",

    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  category: "technology",
};