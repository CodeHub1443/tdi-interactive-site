"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { trackEvent } from "@/lib/analytics";

export const CTASection: React.FC = () => {
  return (
    <section aria-labelledby="cta-heading" className="bg-slate-950 text-white py-16 md:py-24 lg:py-40 relative overflow-hidden">
      {/* Decorative background elements */}
      <div aria-hidden="true" className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-accentTeal/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-accentTeal/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-ultra mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 id="cta-heading" className="text-3xl md:text-6xl lg:text-7xl font-normal leading-[1.05] tracking-tight mb-6 md:mb-8">
              Start Your AI <br aria-hidden="true" />
              <span className="text-accentTeal italic">Automation Audit</span>
            </h2>
            <p className="text-white/60 text-base md:text-xl lg:text-2xl mb-8 md:mb-12 font-light max-w-3xl leading-relaxed">
              Every engagement begins with a structured discovery session to understand your operational environment before any technical recommendations are made.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                onClick={() => trackEvent("cta_click", { cta_name: "Request Automation Audit (CTA Section)" })}
                className="w-full sm:w-auto text-center bg-white text-black px-8 md:px-10 py-4 md:py-5 rounded-full text-base font-semibold hover:bg-accentTeal hover:text-white transition-all shadow-2xl"
              >
                Request Automation Audit
              </Link>
              <Link
                href="/contact"
                onClick={() => trackEvent("cta_click", { cta_name: "Contact TDI (CTA Section)" })}
                className="w-full sm:w-auto text-center border border-white/20 text-white px-8 md:px-10 py-4 md:py-5 rounded-full text-base font-semibold hover:bg-white/10 transition-all backdrop-blur-sm"
              >
                Contact TDI
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
