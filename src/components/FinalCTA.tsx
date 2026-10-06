import React from 'react';
import { ArrowUpRight, Mail, Phone, MessageCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FinalCTAProps {
  onOpenContact: () => void;
}

export default function FinalCTA({ onOpenContact }: FinalCTAProps) {
  return (
    <section id="contact" className="py-28 bg-[#080808] text-white relative overflow-hidden">
      
      {/* Background Outline Typography */}
      <div 
        aria-hidden="true" 
        className="absolute bottom-0 right-0 text-[8vw] font-display font-black text-outline-white opacity-[0.03] pointer-events-none select-none whitespace-nowrap"
      >
        LET'S CONNECT
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-center">
          
          {/* Left Column: Typography with BLUE MEMORABLE. */}
          <div className="lg:col-span-7 space-y-6 select-none">
            
            <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#3155FF] tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-[#3155FF]" />
              <span>THE NEXT STEP</span>
            </div>

            {/* Typography Headline */}
            <div className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black tracking-tight leading-tight space-y-1">
              <div>LET'S</div>
              <div>CREATE</div>
              <div>SOMETHING</div>
              <div className="text-[#3155FF]">MEMORABLE.</div>
            </div>

            {/* Blue Action Button: CONTACT → */}
            <div className="pt-4">
              <button
                onClick={onOpenContact}
                className="inline-flex items-center gap-3 px-10 py-5 rounded-full font-mono font-bold text-sm tracking-widest text-white bg-[#3155FF] hover:bg-[#1635C7] transition-all transform hover:-translate-y-1 shadow-2xl shadow-[#3155FF]/40 cursor-pointer"
              >
                <span>CONTACT →</span>
                <ArrowUpRight className="w-5 h-5" />
              </button>
            </div>

            {/* Clean Contact Metadata Strip */}
            <div className="pt-10 border-t border-white/15 grid grid-cols-1 sm:grid-cols-2 gap-6 font-mono text-xs">
              <div>
                <span className="text-white/50 block mb-1 uppercase tracking-wider">DIRECT EMAIL</span>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="font-bold text-white hover:text-[#3155FF] transition-colors text-sm"
                >
                  {PERSONAL_INFO.email}
                </a>
              </div>

              <div>
                <span className="text-white/50 block mb-1 uppercase tracking-wider">PHONE / WHATSAPP</span>
                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="font-bold text-white hover:text-[#3155FF] transition-colors text-sm"
                >
                  +91 {PERSONAL_INFO.phone}
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Giant Floating Smartphone Mockup with Best Creative */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-[300px] sm:w-[340px] rounded-[48px] p-3.5 bg-black border-[5px] border-[#222222] shadow-2xl shadow-black/80 transform rotate-2 hover:rotate-0 transition-transform duration-500">
              
              {/* Notch */}
              <div className="absolute top-5 left-1/2 -translate-x-1/2 w-24 h-5 bg-[#000000] rounded-full z-20 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-[#1A1A1A] mr-2" />
                <div className="w-1.5 h-1.5 rounded-full bg-[#3155FF]" />
              </div>

              {/* Screen displaying best creative */}
              <div className="relative aspect-[9/16] rounded-[38px] overflow-hidden bg-black border border-white/10">
                <img
                  src="/src/assets/images/reel_student_life_1791193648635.jpg"
                  alt="Creative Mockup"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30" />
                
                <div className="absolute bottom-6 left-5 right-5 text-white">
                  <span className="text-[10px] font-mono font-bold text-white bg-[#3155FF] px-2.5 py-0.5 rounded-full block w-fit mb-2">
                    MALWA INSTITUTE
                  </span>
                  <h4 className="text-base font-display font-black leading-tight">
                    Content That Stops The Scroll.
                  </h4>
                  <p className="text-xs text-white/70 mt-1 font-mono">
                    Social Media Executive & Digital Marketer
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Minimal Footer Strip */}
        <div className="mt-24 pt-8 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/50">
          <div>
            © {new Date().getFullYear()} NITIKESH KANODIYA. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#3155FF] transition-colors font-bold"
            >
              WHATSAPP
            </a>
            <span>·</span>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="text-white hover:text-[#3155FF] transition-colors font-bold"
            >
              EMAIL
            </a>
            <span>·</span>
            <span className="text-white/60">INDORE, INDIA</span>
          </div>
        </div>

      </div>
    </section>
  );
}
