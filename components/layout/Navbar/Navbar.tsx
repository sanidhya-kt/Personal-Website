"use client";

import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import Button from "@/components/ui/Button";
import { NavbarProps } from "./navbar.types";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar({}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-card-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <a
          href="#"
          className="text-2xl font-bold text-slate-100 transition duration-300 hover:text-primary"
        >
          SANIDHYA
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-slate-300 transition duration-300 hover:text-primary"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Resume Button */}
        <div className="hidden md:block">
          <a
            href="/Sanidhya_Kumar_Tiwari_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="sm">
              Resume
            </Button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-slate-100 transition hover:text-primary md:hidden"
          aria-label="Toggle Menu"
        >
          {isOpen ? <HiX size={30} /> : <HiMenu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-card-border bg-background md:hidden">
          <ul className="flex flex-col gap-6 px-6 py-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-slate-300 transition duration-300 hover:text-primary"
                >
                  {link.name}
                </a>
              </li>
            ))}

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
            >
              <Button size="sm">
                Resume
              </Button>
            </a>
          </ul>
        </div>
      )}
    </nav>
  );
}