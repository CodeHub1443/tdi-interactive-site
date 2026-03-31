"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <main className="pt-20 h-screen flex flex-col overflow-hidden">
      <section className="bg-black py-8 md:py-12 border-b border-white/5 flex-shrink-0">
        <div className="max-w-[1800px] mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl md:text-6xl font-normal tracking-tight text-white mb-4">
              Start Your <br/><span className="text-accentTeal">Automation Discovery</span>
            </h1>
            <p className="text-white/50 text-base md:text-lg font-light leading-relaxed max-w-3xl">
              Every engagement begins with a structured discovery session to understand your operational environment, current automation maturity, and specific objectives.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-black flex-1 flex items-start py-6 md:py-8">
        <div className="max-w-[1800px] mx-auto px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-[#0c1414] border border-white/5 rounded-3xl p-6 lg:p-8"
            >
              <h2 className="text-xl font-normal text-white mb-6">Request a Discovery Session</h2>
              <form className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] uppercase tracking-widest text-white/30 font-bold">Full Name</label>
                    <input type="text" className="bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-accentTeal transition-colors" placeholder="John Doe" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] uppercase tracking-widest text-white/30 font-bold">Work Email</label>
                    <input type="email" className="bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-accentTeal transition-colors" placeholder="john@company.com" />
                  </div>
                </div>
                
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase tracking-widest text-white/30 font-bold">Organization & Industry</label>
                  <input type="text" className="bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-accentTeal transition-colors" placeholder="Acme Corp - Logistics" />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase tracking-widest text-white/30 font-bold">Automation Objective</label>
                  <textarea rows={3} className="bg-transparent border border-white/10 p-3 rounded-xl text-white text-sm focus:outline-none focus:border-accentTeal transition-colors" placeholder="Tell us about the processes you are looking to automate..." />
                </div>

                <button className="w-full bg-white text-black font-semibold py-3.5 rounded-full hover:bg-accentTeal hover:text-white transition-all shadow-xl">
                  Request Discovery Session
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col justify-between py-10"
            >
              <div className="space-y-10">
                <div>
                  <h3 className="text-[10px] uppercase tracking-widest text-accentTeal font-bold mb-6">Contact Details</h3>
                  <div className="space-y-4">
                    <p className="text-xl md:text-2xl text-white font-medium">connect@thedataisland.com</p>
                    <p className="text-xl md:text-2xl text-white font-medium">+880 1711 XXX XXX</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-[10px] uppercase tracking-widest text-accentTeal font-bold mb-6">Strategic Locations</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="flex flex-col gap-2">
                      <span className="text-white text-lg font-medium">Singapore (HQ)</span>
                      <p className="text-white/40 text-sm leading-relaxed font-light">The Data Island LLC<br/>Marina Bay, Singapore</p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <span className="text-white text-lg font-medium">Bangladesh (Ops)</span>
                      <p className="text-white/40 text-sm leading-relaxed font-light">Dhaka City Office<br/>Bangladesh</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-white/5">
                <p className="text-white/30 text-xs font-light max-w-sm">
                  We generally respond to discovery requests within 24–48 hours to schedule an initial consultation.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
