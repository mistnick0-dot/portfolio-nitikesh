import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function MinimalAbout() {
  return (
    <section id="about" className="py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white relative">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 sm:gap-16 items-center">
        
        {/* Left: Black-and-White Brand Visual Asset with Subtle Blue Accent Border */}
        <div className="md:col-span-5 flex justify-center">
          <div className="relative w-full max-w-md aspect-square rounded-[36px] overflow-hidden bg-white p-3 border-2 border-[#080808] shadow-2xl group">
            <div className="relative w-full h-full rounded-[26px] overflow-hidden bg-[#080808]">
              {/* Grayscale filter with subtle contrast */}
              <img
                src="/src/assets/images/brand_abstract_identity_1791192583023.jpg"
                alt="Nitikesh Kanodiya"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              
              {/* Blue accent corner tag */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white font-mono text-[11px]">
                <span className="font-bold text-[#3155FF]">NITIKESH KANODIYA</span>
                <span className="text-white/70">INDORE, INDIA</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Massive Typography (Beside It) */}
        <div className="md:col-span-7 space-y-6">
          
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#3155FF] tracking-widest uppercase">
            <span className="w-2 h-2 rounded-full bg-[#3155FF]" />
            <span>CREATIVE STRATEGIST</span>
          </div>

          {/* Editorial Name */}
          <div className="space-y-0 select-none">
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black text-[#080808] tracking-tight leading-none">
              NITIKESH
            </h2>
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black text-[#080808] tracking-tight leading-none">
              KANODIYA<span className="text-[#3155FF]">.</span>
            </h2>
          </div>

          {/* Core Roles in bold black font-mono */}
          <div className="text-sm sm:text-base font-mono font-bold text-[#080808]/70 tracking-wider space-y-1">
            <div>SOCIAL MEDIA HANDLER</div>
            <div>CONTENT CREATOR</div>
            <div>DIGITAL MARKETING EXECUTIVE</div>
          </div>

          {/* One Short Sentence Only */}
          <p className="text-2xl sm:text-3xl font-display font-bold text-[#080808] leading-tight pt-2">
            “{PERSONAL_INFO.subline}”
          </p>

          {/* Minimal Status Strip */}
          <div className="pt-4 flex items-center gap-4 font-mono text-xs font-bold text-[#080808]">
            <span className="px-3.5 py-1.5 rounded-full bg-[#3155FF] text-white">
              OPEN TO WORK
            </span>
            <span>·</span>
            <span className="text-[#080808]/60">MALWA INSTITUTE & MARKETING MASTER</span>
          </div>

        </div>

      </div>
    </section>
  );
}
