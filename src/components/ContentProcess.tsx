import React, { useState } from 'react';
import { Lightbulb, Camera, Film, Smartphone, TrendingUp } from 'lucide-react';
import { PROCESS_STAGES } from '../data/portfolioData';

export default function ContentProcess() {
  const [activeStep, setActiveStep] = useState(1);

  const iconMap = {
    Lightbulb,
    Camera,
    Video: Film,
    Smartphone,
    TrendingUp,
  };

  return (
    <section id="process" className="py-24 bg-[#FFFFFF] border-y-2 border-[#080808] relative overflow-hidden">
      
      {/* Background Subtle Outline Typography */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/2 left-0 -translate-y-1/2 text-[8vw] font-display font-black text-outline opacity-[0.03] pointer-events-none select-none whitespace-nowrap"
      >
        WORKFLOW
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b-2 border-[#080808] pb-6 mb-12 gap-4 select-none">
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black text-[#080808] tracking-tight leading-none">
            PROCESS<span className="text-[#3155FF]">.</span>
          </h2>
          <span className="font-mono text-xs sm:text-sm font-bold text-[#3155FF] tracking-widest uppercase">
            05 STAGES · NO FLUFF
          </span>
        </div>

        {/* Responsive Typography Sequence: IDEA → CREATE → EDIT → PUBLISH → GROW */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5 items-stretch">
          {PROCESS_STAGES.map((stage, idx) => {
            const Icon = iconMap[stage.symbol as keyof typeof iconMap] || Lightbulb;
            const isSelected = activeStep === idx;

            return (
              <div
                key={stage.step}
                onMouseEnter={() => setActiveStep(idx)}
                onClick={() => setActiveStep(idx)}
                className={`p-5 sm:p-6 rounded-3xl border-2 transition-all duration-300 flex flex-col justify-between cursor-pointer group overflow-hidden ${
                  isSelected
                    ? 'bg-[#080808] text-white border-[#080808] shadow-2xl -translate-y-1.5'
                    : 'bg-white text-[#080808] border-[#080808]/15 hover:border-[#3155FF]'
                }`}
              >
                {/* Stage Header */}
                <div className="flex items-center justify-between mb-6">
                  <span className={`text-[11px] font-mono font-bold tracking-widest ${isSelected ? 'text-[#3155FF]' : 'text-[#080808]/50'}`}>
                    STAGE 0{idx + 1}
                  </span>
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors shrink-0 ${
                      isSelected
                        ? 'bg-[#3155FF] text-white'
                        : 'bg-[#080808]/5 text-[#080808] group-hover:bg-[#3155FF] group-hover:text-white'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                {/* Scaled Word Typography: Fits cleanly without overflowing */}
                <div className="my-auto py-3">
                  <h3
                    className={`text-2xl sm:text-3xl lg:text-2xl xl:text-3xl font-display font-black tracking-tight leading-tight transition-colors whitespace-nowrap truncate ${
                      isSelected ? 'text-[#3155FF]' : 'text-[#080808] group-hover:text-[#3155FF]'
                    }`}
                  >
                    {stage.word}
                  </h3>
                </div>

                {/* Minimal Label */}
                <div className="pt-5 border-t border-current/10">
                  <span className={`text-[11px] font-mono font-bold tracking-wider uppercase block truncate ${isSelected ? 'text-white/80' : 'text-[#080808]/60'}`}>
                    {stage.label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
