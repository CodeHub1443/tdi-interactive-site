"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Solutions", href: "/solutions" },
    { name: "Technology", href: "/technology" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Insights", href: "/insights" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-[80px] flex items-center transition-all duration-300 ${
          isScrolled || isMobileMenuOpen
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1800px] mx-auto w-full px-6 flex justify-between items-center">
          {/* Left side: Logo */}
          <Link
            href="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`text-2xl font-bold tracking-tight transition-colors duration-300 ${
              isScrolled || isMobileMenuOpen ? "text-accentTeal" : "text-white"
            }`}
          >
            TDI
          </Link>

          {/* Right side navigation links & CTA (Desktop/Tablet Landscape) */}
          <div className="hidden lg:flex items-center gap-10">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`text-sm font-medium transition-colors duration-300 ${
                      isScrolled ? "text-textDark hover:text-accentTeal" : "text-white/90 hover:text-white"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Primary CTA button */}
            <Link
              href="#"
              className="bg-accentTeal text-white px-6 py-3 rounded-button text-sm font-semibold hover:opacity-90 transition-all duration-300 shadow-md"
            >
              Request Automation Audit
            </Link>
          </div>

          {/* Mobile Menu Button (Hamburger/Close) */}
          <button
            className={`lg:hidden p-2 -mr-2 transition-colors duration-300 ${
              isScrolled || isMobileMenuOpen ? "text-textDark" : "text-white"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18M3 6h18M3 18h18" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-white transition-transform duration-500 ease-in-out lg:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full pt-[100px] px-6 pb-12 overflow-y-auto">
          <ul className="flex flex-col gap-6 text-2xl font-light mb-12">
            {navLinks.map((link) => (
              <li key={link.name} className="border-b border-gray-100 pb-4">
                <Link
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-textDark hover:text-accentTeal transition-colors flex justify-between items-center"
                >
                  {link.name}
                  <span className="text-gray-300 text-sm">→</span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-auto">
            <Link
              href="#"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-center bg-accentTeal text-white px-6 py-4 rounded-button font-medium hover:opacity-90 transition-all duration-300"
            >
              Request Automation Audit
            </Link>
            
            <p className="text-sm text-textMuted text-center mt-6 font-light">
              TDI © {new Date().getFullYear()} Modern Enterprise
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
