import React from 'react';

export default function SkillCloud() {
  const skills = [
    { name: 'CONTENT', size: 'text-2xl sm:text-4xl', style: 'text-[#080808] font-black' },
    { name: 'REELS', size: 'text-4xl sm:text-6xl', style: 'text-[#3155FF] font-black italic' },
    { name: 'CANVA', size: 'text-3xl sm:text-5xl', style: 'text-outline font-black' },
    { name: 'CAPCUT', size: 'text-3xl sm:text-5xl', style: 'text-[#3155FF] font-black' },
    { name: 'BRANDING', size: 'text-2xl sm:text-4xl', style: 'text-[#080808] font-black' },
    { name: 'CAMPAIGNS', size: 'text-4xl sm:text-6xl', style: 'text-outline font-black' },
    { name: 'SEO', size: 'text-2xl sm:text-4xl', style: 'text-[#3155FF] font-black' },
    { name: 'ANALYTICS', size: 'text-2xl sm:text-4xl', style: 'text-[#080808] font-black' },
    { name: 'COMMUNITY', size: 'text-3xl sm:text-5xl', style: 'text-outline-blue font-black' },
  ];

  return (
    <section className="py-28 bg-[#FFFFFF] border-b-2 border-[#080808] overflow-hidden relative">
      
      {/* Background Subtle Outline Typography */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[8vw] font-display font-black text-outline opacity-[0.03] pointer-events-none select-none whitespace-nowrap"
      >
        TOOLKIT
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <div className="inline-flex items-center gap-2 mb-4 font-mono text-xs font-bold text-[#3155FF] tracking-widest uppercase">
          <span className="w-2 h-2 rounded-full bg-[#3155FF]" />
          <span>SKILLS & ARSENAL</span>
        </div>

        {/* Central Core Statement */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black text-[#080808] tracking-tight leading-none mb-10 select-none">
          SOCIAL MEDIA<span className="text-[#3155FF]">.</span>
        </h2>

        {/* Large Typography-Based Cloud with Variable Sizing, Outlines & Blue Accents */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 max-w-5xl mx-auto">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className={`px-6 sm:px-10 py-3 sm:py-5 rounded-full border-2 border-[#080808]/15 bg-white hover:border-[#3155FF] hover:scale-105 transition-all duration-300 font-display tracking-tight cursor-default select-none shadow-sm hover:shadow-xl ${skill.size} ${skill.style}`}
            >
              {skill.name}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
