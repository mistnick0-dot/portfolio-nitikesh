import React from 'react';
import { ArrowUpRight, Instagram } from 'lucide-react';
import { DESIGN_WALL_ITEMS, DesignWorkItem } from '../data/portfolioData';

interface DesignWallProps {
  onSelectDesign: (design: DesignWorkItem) => void;
}

export default function DesignWall({ onSelectDesign }: DesignWallProps) {
  return (
    <section id="design" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-white">
      
      {/* Editorial Header */}
      <div className="relative mb-14 select-none border-b-2 border-[#080808] pb-6">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
          <div className="space-y-0 sm:space-y-1">
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black text-[#080808] tracking-tight leading-none">
              DESIGN
            </h2>
            <div className="flex items-baseline gap-4 sm:gap-6">
              <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black text-[#080808] tracking-tight leading-none">
                WORK
              </h2>
              <span className="font-mono text-xs sm:text-sm font-bold text-[#3155FF] tracking-widest uppercase">
                (0{DESIGN_WALL_ITEMS.length}) FLYERS · POSTERS
              </span>
            </div>
          </div>

          <div className="text-right font-mono text-xs text-[#080808]/60 hidden sm:block">
            <div>CANVA PRO</div>
            <div>SWISS TYPOGRAPHY</div>
          </div>
        </div>

        {/* Background Transparent Outline Text */}
        <div 
          aria-hidden="true" 
          className="absolute -top-8 right-0 text-[8vw] font-display font-black text-outline opacity-[0.03] pointer-events-none select-none"
        >
          CREATIVES
        </div>
      </div>

      {/* Visual Archive Wall of Real Instagram Work Previews */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {DESIGN_WALL_ITEMS.map((item, index) => (
          <div
            key={item.id}
            className="rounded-3xl border-2 border-[#080808] bg-white p-4 sm:p-5 shadow-xl hover:border-[#3155FF] transition-all duration-300 flex flex-col justify-between group"
          >
            {/* Card Header Strip */}
            <div className="flex items-center justify-between pb-3.5 mb-3 border-b border-[#080808]/10">
              <div className="flex items-center gap-2">
                <Instagram className="w-4 h-4 text-pink-600 shrink-0" />
                <span className="text-[10px] font-mono font-extrabold text-[#3155FF] uppercase tracking-wider">
                  {item.category}
                </span>
              </div>

              <a
                href={item.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[11px] font-mono font-bold text-[#080808] hover:text-[#3155FF] transition-colors"
                title="Open live on Instagram"
              >
                <span>VIEW ON IG</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#3155FF]" />
              </a>
            </div>

            {/* Real Instagram Live Embed Container */}
            <div className="relative w-full rounded-2xl overflow-hidden bg-neutral-950 border border-[#080808]/15 mb-4 aspect-[4/5] sm:aspect-[9/12] max-h-[560px]">
              <iframe
                src={item.embedUrl}
                title={item.title}
                className="w-full h-full border-0"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                allowFullScreen
                scrolling="no"
                loading="lazy"
              />
            </div>

            {/* Editorial Card Footer */}
            <div className="pt-1 flex flex-col gap-2">
              <h3 className="text-base font-display font-black text-[#080808] leading-snug line-clamp-2">
                {item.title}
              </h3>

              {/* Craft / Tools Tags */}
              <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-[#080808]/10 mt-1">
                {item.tools.map((tool, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-0.5 rounded-full bg-[#080808]/5 text-[#080808] font-mono text-[10px] font-bold"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
