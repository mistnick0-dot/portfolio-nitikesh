import React, { useEffect } from 'react';
import { X, ArrowUpRight, Instagram } from 'lucide-react';
import { VisualWorkItem, DesignWorkItem } from '../data/portfolioData';

interface VisualProjectModalProps {
  item: VisualWorkItem | DesignWorkItem | null;
  onClose: () => void;
}

export default function VisualProjectModal({ item, onClose }: VisualProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!item) return null;

  const isInstagramItem = 'embedUrl' in item && Boolean(item.embedUrl);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative z-10 w-full max-w-4xl bg-white border-2 border-[#080808] rounded-[32px] overflow-hidden shadow-2xl my-8">
        
        {/* Top Header */}
        <div className="flex items-center justify-between p-6 border-b-2 border-[#080808]">
          <div>
            <span className="text-[11px] font-mono text-[#3155FF] font-extrabold uppercase tracking-widest block mb-0.5">
              {'category' in item ? item.category : 'tag' in item ? item.tag : 'INSTAGRAM WORK'}
            </span>
            <h2 className="text-xl sm:text-3xl font-display font-black text-[#080808] tracking-tight">
              {item.title}
            </h2>
          </div>

          <div className="flex items-center gap-3">
            {isInstagramItem && 'instagramUrl' in item && (
              <a
                href={item.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#080808] hover:bg-[#3155FF] text-white font-mono text-xs font-bold transition-colors"
              >
                <Instagram className="w-3.5 h-3.5 text-pink-500" />
                <span>OPEN ON INSTAGRAM</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}

            <button
              onClick={onClose}
              className="p-2.5 rounded-full hover:bg-[#080808]/5 text-[#080808] transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Main Visual Display */}
          <div className="relative rounded-2xl overflow-hidden bg-[#080808] border border-[#080808]/20 flex items-center justify-center max-h-[68vh]">
            {isInstagramItem && 'embedUrl' in item ? (
              <div className="w-full max-w-md mx-auto aspect-[9/14] sm:aspect-[9/13] max-h-[64vh] overflow-hidden rounded-xl">
                <iframe
                  src={item.embedUrl}
                  title={item.title}
                  className="w-full h-full border-0"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  allowFullScreen
                  scrolling="no"
                />
              </div>
            ) : item.image ? (
              <img
                src={item.image}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="w-full h-auto max-h-[62vh] object-contain"
              />
            ) : null}
          </div>

          {/* Minimal Editorial Details */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
            <div>
              <span className="text-[11px] font-mono text-[#080808]/60 font-bold tracking-wider uppercase block mb-1.5">
                TOOLS & CRAFT
              </span>
              <div className="flex flex-wrap gap-2">
                {item.tools.map((tool, i) => (
                  <span
                    key={i}
                    className="px-3.5 py-1 rounded-full bg-[#080808] text-white font-mono text-xs font-bold"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3">
              {isInstagramItem && 'instagramUrl' in item && (
                <a
                  href={item.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sm:hidden px-5 py-2.5 rounded-full bg-[#080808] text-white text-xs font-mono font-bold tracking-wider flex items-center gap-1.5"
                >
                  <span>VIEW ON IG</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              )}
              <button
                onClick={onClose}
                className="px-8 py-3 rounded-full bg-[#3155FF] hover:bg-[#1635C7] text-white text-xs font-mono font-bold tracking-widest transition-colors cursor-pointer"
              >
                CLOSE VIEWER
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
