"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo placeholder */}
          <Link href="/" className="flex items-center group">
            <div
              className={`w-44 h-12 rounded-lg flex items-center justify-center text-sm font-medium transition-all duration-300 ${
                scrolled
                  ? "bg-[#1a2e35] text-white"
                  : "bg-white/90 text-[#1a2e35]"
              }`}
            >
              [LOGO]
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              { href: "/", label: "Home" },
              { href: "/gallery", label: "Gallery" },
              { href: "/rocklear", label: "Rocklear" },
              { href: "/resources", label: "Resources" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative font-medium transition-colors duration-300 ${
                  scrolled ? "text-gray-700 hover:text-[#1a2e35]" : "text-white hover:text-white/80"
                } after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="#book"
              className={`btn-primary px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                scrolled
                  ? "bg-[#1a2e35] text-white"
                  : "bg-white text-[#1a2e35]"
              }`}
            >
              Get Free Quote
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
              scrolled ? "text-gray-700" : "text-white"
            }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile nav */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 space-y-3 bg-white/95 backdrop-blur-md rounded-xl mb-4 px-4">
            {[
              { href: "/", label: "Home" },
              { href: "/gallery", label: "Gallery" },
              { href: "/rocklear", label: "Rocklear" },
              { href: "/resources", label: "Resources" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-2 text-gray-700 hover:text-[#1a2e35] font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="#book"
              className="block w-full bg-[#1a2e35] text-white px-5 py-3 rounded-full text-center font-medium hover:bg-[#2d4a54] transition-colors mt-4"
              onClick={() => setIsOpen(false)}
            >
              Get Free Quote
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
