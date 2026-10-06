import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowUpRight, Instagram } from 'lucide-react';
import { REELS_LIST, ReelItem } from '../data/portfolioData';

interface ReelsShowcaseProps {
  onOpenReel: (reel: ReelItem) => void;
}

export default function ReelsShowcase({ onOpenReel }: ReelsShowcaseProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const amount = direction === 'left' ? -360 : 360;
      scrollContainerRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  return (
    <section id="reels" className="py-24 bg-[#080808] text-white relative overflow-hidden">
      
      {/* Background Subtle Outline Typography */}
      <div 
        aria-hidden="true" 
        className="absolute -top-8 left-0 text-[8vw] font-display font-black text-outline-white opacity-[0.03] pointer-events-none select-none whitespace-nowrap"
      >
        VERTICAL MOTION
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-white/20 pb-6 mb-12 gap-6 select-none">
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono text-xs text-[#3155FF] font-bold tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-[#3155FF]" />
              <span>INSTAGRAM REELS · VERTICAL MOTION</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black text-white tracking-tight leading-none">
              REELS<span className="text-[#3155FF]">.</span>
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-white/50 tracking-wider mr-2 hidden sm:inline">
              (0{REELS_LIST.length}) VIDEOS
            </span>
            <button
              onClick={() => scroll('left')}
              className="p-3 rounded-full border border-white/20 hover:border-[#3155FF] text-white hover:text-[#3155FF] transition-colors cursor-pointer"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-3 rounded-full border border-white/20 hover:border-[#3155FF] text-white hover:text-[#3155FF] transition-colors cursor-pointer"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Real Instagram Reels Cards (Scrollable Rack on Mobile/Tablet, 4-Card Grid on Desktop) */}
        <div
          ref={scrollContainerRef}
          className="flex lg:grid lg:grid-cols-4 gap-6 overflow-x-auto lg:overflow-visible pb-6 scrollbar-none snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {REELS_LIST.map((reel) => (
            <div
              key={reel.id}
              className="snap-start shrink-0 w-[290px] sm:w-[320px] lg:w-auto rounded-3xl bg-[#121212] border-2 border-white/10 hover:border-[#3155FF] transition-all duration-300 p-4 flex flex-col justify-between group shadow-2xl"
            >
              {/* Card Top Strip */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
                <div className="flex items-center gap-1.5">
                  <Instagram className="w-3.5 h-3.5 text-pink-500" />
                  <span className="text-[10px] font-mono font-bold text-[#3155FF] uppercase tracking-wider">
                    {reel.index} / REEL
                  </span>
                </div>

                <a
                  href={reel.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] font-mono font-bold text-white/80 hover:text-[#3155FF] transition-colors"
                  title="View on Instagram"
                >
                  <span>VIEW ON IG</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#3155FF]" />
                </a>
              </div>

              {/* Real Instagram Reel Live Embed */}
              <div className="relative w-full rounded-2xl overflow-hidden bg-black border border-white/10 mb-4 aspect-[9/14] sm:aspect-[9/13] max-h-[540px]">
                <iframe
                  src={reel.embedUrl}
                  title={reel.title}
                  className="w-full h-full border-0"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  allowFullScreen
                  scrolling="no"
                  loading="lazy"
                />
              </div>

              {/* Bottom Info: Updated Heading according to the Reel */}
              <div className="pt-1 flex flex-col gap-1.5">
                <h3 className="text-sm sm:text-base font-display font-black text-white leading-snug line-clamp-2">
                  {reel.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
