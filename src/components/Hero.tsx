import React, { useState, useEffect } from 'react';
import { ArrowDown, Play, Instagram, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenContact: () => void;
  onOpenReel: () => void;
}

export default function Hero({ onOpenContact, onOpenReel }: HeroProps) {
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX - innerWidth / 2) / (innerWidth / 2);
      const y = (e.clientY - innerHeight / 2) / (innerHeight / 2);
      setMouseOffset({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-[96vh] flex items-center justify-center pt-28 pb-20 overflow-hidden bg-white">
      
      {/* Background Architectural Blueprint Lines & Blue Micro-dots */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Subtle Vertical & Horizontal Hairline Grid */}
        <div className="absolute left-1/4 top-0 bottom-0 w-[1px] bg-[#080808]/[0.04]" />
        <div className="absolute right-1/4 top-0 bottom-0 w-[1px] bg-[#080808]/[0.04]" />
        <div className="absolute top-1/3 left-0 right-0 h-[1px] bg-[#080808]/[0.04]" />
        <div className="absolute bottom-1/4 left-0 right-0 h-[1px] bg-[#080808]/[0.04]" />

        {/* Blue Accent Grid Line & Dots */}
        <div className="absolute top-1/2 left-0 w-32 h-[2px] bg-[#3155FF]/40" />
        <div className="absolute top-1/2 right-0 w-32 h-[2px] bg-[#3155FF]/40" />
        <div className="absolute top-24 left-1/4 -translate-x-1/2 w-2 h-2 rounded-full bg-[#3155FF]" />
        <div className="absolute bottom-32 right-1/4 translate-x-1/2 w-2 h-2 rounded-full bg-[#3155FF]" />

        {/* Massive Background Transparent Outline Typography extending beyond viewport */}
        <div 
          aria-hidden="true" 
          className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[8vw] font-display font-black text-outline opacity-[0.03] select-none whitespace-nowrap leading-none tracking-tighter"
        >
          NITIKESH KANODIYA
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Main Center Typography Composition */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto relative z-20">
          
          {/* Name Kicker */}
          <h1 className="text-xs sm:text-sm font-mono font-bold tracking-widest text-[#080808]/60 uppercase mb-3">
            NITIKESH KANODIYA
          </h1>

          {/* Refined Headline Typography */}
          <div className="space-y-1 sm:space-y-2 mb-8 w-full select-none">
            <div className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black text-[#080808] tracking-tight leading-tight">
              CONTENT
            </div>
            
            <div className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black text-[#080808] tracking-tight leading-tight flex items-center justify-center gap-2.5 sm:gap-4 flex-wrap">
              <span>THAT</span>
              <span className="text-[#3155FF] italic font-serif tracking-normal">STOPS</span>
            </div>

            <div className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black text-[#080808] tracking-tight leading-tight">
              THE SCROLL.
            </div>
          </div>

          {/* Only 2 Buttons: [VIEW WORK] & [CONTACT] */}
          <div className="flex flex-row items-center justify-center gap-3.5">
            <a
              href="#work"
              data-cursor="view"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-mono font-bold text-xs tracking-wider text-white bg-[#080808] hover:bg-[#3155FF] transition-all transform hover:-translate-y-0.5 shadow-lg shadow-black/10"
            >
              <span>VIEW WORK</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={onOpenContact}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-mono font-bold text-xs tracking-wider text-white bg-[#3155FF] hover:bg-[#1635C7] transition-all transform hover:-translate-y-0.5 shadow-lg shadow-[#3155FF]/20 cursor-pointer"
            >
              <span>CONTACT</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Floating Creative Campaign Assets Around Typography in 3D Depth */}
        
        {/* Asset 1: Floating Vertical Reel Card (Left Top) */}
        <div
          onClick={onOpenReel}
          data-cursor="play"
          className="hidden xl:block absolute left-2 lg:left-6 top-12 w-56 rounded-2xl overflow-hidden bg-white p-2.5 border-2 border-[#080808] shadow-2xl transition-transform duration-300 pointer-events-auto cursor-pointer hover:border-[#3155FF] hover:scale-105 z-30"
          style={{
            transform: `translate3d(${mouseOffset.x * -24}px, ${mouseOffset.y * -24}px, 0) rotate(-5deg)`,
          }}
        >
          <div className="relative aspect-[9/16] rounded-xl overflow-hidden bg-[#080808]">
            <img
              src="/src/assets/images/reel_student_life_1791193648635.jpg"
              alt="Reel preview"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30" />
            
            <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-black/70 text-[10px] font-mono text-white">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3155FF]" />
              <span>01 / REEL</span>
            </div>

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-11 h-11 rounded-full bg-white text-[#080808] flex items-center justify-center shadow-2xl hover:bg-[#3155FF] hover:text-white transition-colors">
                <Play className="w-4 h-4 fill-current translate-x-0.5" />
              </div>
            </div>

            <div className="absolute bottom-2.5 left-2.5 right-2.5 text-left text-white text-[11px] font-mono leading-tight truncate">
              Campus Life · CapCut Cut
            </div>
          </div>
        </div>

        {/* Asset 2: Tilted Admission Flyer (Right Top) */}
        <div
          className="hidden xl:block absolute right-2 lg:right-6 top-16 w-52 rounded-2xl overflow-hidden bg-white p-2.5 border-2 border-[#080808] shadow-2xl transition-transform duration-300 pointer-events-auto hover:border-[#3155FF] hover:scale-105 z-30"
          style={{
            transform: `translate3d(${mouseOffset.x * 26}px, ${mouseOffset.y * 26}px, 0) rotate(6deg)`,
          }}
        >
          <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-neutral-100">
            <img
              src="/src/assets/images/flyer_admission_campaign_1791192595809.jpg"
              alt="Admission flyer"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-2 left-2 right-2 bg-white px-2 py-1 rounded text-[10px] font-mono text-[#080808] font-bold border border-[#080808]/10 truncate">
              MIST Admissions 2026
            </div>
          </div>
        </div>

        {/* Asset 3: Floating Placement Achievement Creative (Left Bottom) */}
        <div
          className="hidden xl:block absolute left-8 lg:left-14 bottom-4 w-60 rounded-2xl overflow-hidden bg-white p-3 border-2 border-[#080808] shadow-2xl transition-transform duration-300 pointer-events-auto hover:border-[#3155FF] hover:scale-105 z-30"
          style={{
            transform: `translate3d(${mouseOffset.x * -18}px, ${mouseOffset.y * -18}px, 0) rotate(3deg)`,
          }}
        >
          <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-neutral-100 mb-2">
            <img
              src="/src/assets/images/flyer_placement_drive_1791193681344.jpg"
              alt="Placement poster"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-left flex items-center justify-between">
            <span className="text-[10px] font-mono text-[#3155FF] font-extrabold uppercase">
              CAMPAIGN
            </span>
            <span className="text-[10px] font-mono text-[#080808]/60">
              Canva
            </span>
          </div>
        </div>

        {/* Asset 4: Floating Tech Symposium Creative (Right Bottom) */}
        <div
          className="hidden xl:block absolute right-8 lg:right-14 bottom-4 w-56 rounded-2xl overflow-hidden bg-white p-3 border-2 border-[#080808] shadow-2xl transition-transform duration-300 pointer-events-auto hover:border-[#3155FF] hover:scale-105 z-30"
          style={{
            transform: `translate3d(${mouseOffset.x * 20}px, ${mouseOffset.y * 20}px, 0) rotate(-4deg)`,
          }}
        >
          <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-neutral-100 mb-2">
            <img
              src="/src/assets/images/poster_tech_seminar_1791192609268.jpg"
              alt="Tech symposium"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-left flex items-center justify-between">
            <span className="text-[10px] font-mono text-[#3155FF] font-extrabold uppercase">
              POSTER
            </span>
            <span className="text-[10px] font-mono text-[#080808]/60">
              National Event
            </span>
          </div>
        </div>

      </div>

    </section>
  );
}
