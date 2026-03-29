"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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

  const navLinks = [
    { name: "Solutions", href: "#" },
    { name: "Technology", href: "#" },
    { name: "Case Studies", href: "#" },
    { name: "Insights", href: "#" },
    { name: "About", href: "#" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 h-[80px] flex items-center transition-all duration-300 ${isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100" : "bg-transparent"
        }`}
    >
      <div className="max-w-[1800px] mx-auto w-full px-6 flex justify-between items-center">
        {/* Left side: Logo */}
        <Link
          href="/"
          className={`text-2xl font-bold tracking-tight transition-colors duration-300 ${isScrolled ? "text-accentTeal" : "text-white"}`}
        >
          TDI
        </Link>

        {/* Right side navigation links & CTA */}
        <div className="hidden md:flex items-center gap-10">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={`text-sm font-medium transition-colors duration-300 ${isScrolled ? "text-textDark hover:text-accentTeal" : "text-white/90 hover:text-white"
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
      </div>
    </nav>
  );
};

export default Navbar;
