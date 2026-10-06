import React, { useEffect } from 'react';
import { X, ArrowUpRight, Instagram } from 'lucide-react';
import { ReelItem } from '../data/portfolioData';

interface FullscreenReelModalProps {
  reel: ReelItem | null;
  onClose: () => void;
}

export default function FullscreenReelModal({ reel, onClose }: FullscreenReelModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!reel) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative z-10 w-full max-w-sm rounded-[44px] overflow-hidden bg-black border-2 border-white/20 shadow-2xl flex flex-col aspect-[9/16] max-h-[92vh]">
        
        {/* Dynamic Notch */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-4 bg-black rounded-full z-30 flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-white/20 mr-1.5" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#3155FF]" />
        </div>

        {/* Video Canvas with Live Embed */}
        <div className="relative flex-1 overflow-hidden bg-black flex flex-col justify-between">
          
          {/* Top Bar with Platform, Instagram link, and Close */}
          <div className="relative top-0 left-0 right-0 p-4 flex items-center justify-between z-30 bg-black/60 backdrop-blur-sm border-b border-white/10">
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/80 text-xs font-mono font-bold text-white border border-white/10">
              <Instagram className="w-3.5 h-3.5 text-pink-500" />
              <span>{reel.platform}</span>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={reel.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-black/80 text-white hover:text-[#3155FF] transition-colors"
                title="Open on Instagram"
              >
                <ArrowUpRight className="w-4 h-4 text-[#3155FF]" />
              </a>

              <button
                onClick={onClose}
                className="p-2 rounded-full bg-black/80 text-white hover:bg-[#3155FF] transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Live Reel Embed */}
          <div className="relative flex-1 w-full bg-black overflow-hidden">
            <iframe
              src={reel.embedUrl}
              title={reel.title}
              className="w-full h-full border-0"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              allowFullScreen
              scrolling="no"
            />
          </div>

          {/* Bottom Title & Details */}
          <div className="p-4 bg-black/80 backdrop-blur-sm border-t border-white/10 z-30 space-y-1 text-left">
            <span className="text-[10px] font-mono text-[#3155FF] font-extrabold block uppercase tracking-wider">
              {reel.brand}
            </span>
            <h3 className="text-sm font-display font-black text-white leading-tight">
              {reel.title}
            </h3>
          </div>

        </div>

      </div>
    </div>
  );
}
