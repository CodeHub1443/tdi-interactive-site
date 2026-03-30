"use client";

import React from "react";
import { motion } from "framer-motion";

const partners = [
  { name: "Campbell's", logo: "🥣" },
  { name: "CME Group", logo: "📈" },
  { name: "McDonald's", logo: "🍔" },
  { name: "NSE", logo: "💹" },
  { name: "HERSHEY'S", logo: "🍫" },
  { name: "Global Enterprise", logo: "🌐" },
];

export const ClientSegments: React.FC = () => {
  return (
    <section className="bg-white py-20 border-t border-gray-100 dark:bg-black dark:border-white/5">
      <div className="max-w-[1800px] mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-sm uppercase tracking-[0.2em] text-gray-400 font-bold mb-4">Trusted by Market Leaders</h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
          {partners.map((partner, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center p-4">
              <span className="text-4xl mb-2">{partner.logo}</span>
              <span className="text-xs font-semibold tracking-wider text-gray-500">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
