"use client";

import Link from "next/link";
import Image from "next/image";
import { trackEvent } from "@/lib/analytics";

const navLinks = [
  { name: "Solutions", href: "/solutions" },
  { name: "Technology", href: "/technology" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Insights", href: "/insights" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 text-white md:snap-start">
      <div className="max-w-ultra mx-auto px-6 lg:px-8 py-14 md:py-20">
        
        {/* Top Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14 md:mb-20">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block mb-6" aria-label="TDI Homepage">
              <Image
                src="/TDI_logo_White.svg"
                alt="TDI Logo"
                width={20}
                height={60}
                className="h-14 w-auto"
              />
            </Link>
            <p className="text-white/40 text-sm font-light leading-relaxed max-w-xs">
              AI-first professional services. We design and deploy automation that works in production.
            </p>
          </div>

          {/* Navigation */}
          <nav aria-labelledby="footer-nav-heading">
            <h4 id="footer-nav-heading" className="text-[10px] uppercase tracking-widest text-white/30 font-bold mb-5">Navigation</h4>
            <ul role="list" className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-white/60 hover:text-white transition-colors font-light">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <section aria-labelledby="footer-contact-heading">
            <h4 id="footer-contact-heading" className="text-[10px] uppercase tracking-widest text-white/30 font-bold mb-5">Contact</h4>
            <div className="flex flex-col gap-3 text-sm text-white/60 font-light">
              <a href="mailto:connect@thedataisland.com" className="hover:text-white transition-colors break-all">
                connect@thedataisland.com
              </a>
              <span>Singapore (HQ)</span>
              <span>Dhaka, Bangladesh (Ops)</span>
            </div>
          </section>

          {/* Social */}
          <section aria-labelledby="footer-social-heading">
            <h4 id="footer-social-heading" className="text-[10px] uppercase tracking-widest text-white/30 font-bold mb-5">Follow Us</h4>
            <div className="flex gap-3" role="list">
              {[
                { label: "X", href: "https://x.com/thedataisland", ariaLabel: "Follow TDI on X" },
                { label: "In", href: "https://linkedin.com/company/thedataisland", ariaLabel: "Follow TDI on LinkedIn" },
                { label: "Ig", href: "https://instagram.com/thedataisland", ariaLabel: "Follow TDI on Instagram" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent("outbound_click", { link_url: s.href, link_text: s.label })}
                  aria-label={s.ariaLabel}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all text-xs font-bold"
                >
                  <span aria-hidden="true">{s.label}</span>
                </a>
              ))}
            </div>
          </section>
        </div>

        {/* Bottom Row */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="text-white/20 text-xs font-light">
            © {new Date().getFullYear()} The Data Island LLC. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-white/20 font-light">
            <Link href="#" className="hover:text-white/50 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white/50 transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}

