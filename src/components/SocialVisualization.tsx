import React, { useState } from 'react';
import { Instagram, ArrowUpRight, Grid, Play, Bookmark, UserCheck, MessageSquare, ChevronDown } from 'lucide-react';

const MistLogo = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full rounded-full">
    <circle cx="50" cy="50" r="48" fill="#FFFFFF" stroke="#DC2626" strokeWidth="4" />
    <circle cx="50" cy="50" r="43" fill="#FFFFFF" stroke="#111827" strokeWidth="1.5" />
    {/* Geometric MIST Building Emblem */}
    <rect x="26" y="38" width="6" height="20" fill="#DC2626" />
    <polygon points="32,38 42,48 42,38 48,38 48,58 42,58 32,47 32,58 26,58" fill="#DC2626" />
    <rect x="52" y="38" width="6" height="20" fill="#DC2626" />
    <text x="50" y="27" textAnchor="middle" fontSize="5.5" fontWeight="900" fill="#111827" letterSpacing="0.3">
      MALWA INSTITUTE
    </text>
    <text x="50" y="68" textAnchor="middle" fontSize="5.2" fontWeight="900" fill="#DC2626" letterSpacing="0.2">
      OF SCIENCE & TECH
    </text>
    <text x="50" y="76" textAnchor="middle" fontSize="4.2" fontStyle="italic" fill="#4B5563">
      Icon Of The Future
    </text>
  </svg>
);

const MarketingMasterLogo = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full rounded-full">
    <circle cx="50" cy="50" r="48" fill="#FFFDF8" stroke="#E5E7EB" strokeWidth="2" />
    {/* Red Stylized M with Rising Golden Arrow */}
    <path
      d="M 28 58 L 28 36 L 40 49 L 52 36 L 58 48"
      stroke="#DC2626"
      strokeWidth="6"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <polygon points="68,26 78,30 74,40 66,33" fill="#EAB308" />
    <line x1="56" y1="42" x2="72" y2="31" stroke="#EAB308" strokeWidth="4" strokeLinecap="round" />
    <text x="50" y="70" textAnchor="middle" fontSize="7" fontWeight="900" fill="#DC2626" letterSpacing="0.5">
      MARKETING
    </text>
    <text x="50" y="78" textAnchor="middle" fontSize="7" fontWeight="900" fill="#DC2626" letterSpacing="0.5">
      MASTER
    </text>
    <text x="50" y="85" textAnchor="middle" fontSize="3.8" fontWeight="700" fill="#EAB308" letterSpacing="0.8">
      BUSINESS AT EASE
    </text>
  </svg>
);

export default function SocialVisualization() {
  const [activeAccount, setActiveAccount] = useState<'mist' | 'mm'>('mist');

  const isMist = activeAccount === 'mist';

  return (
    <section id="social" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      
      {/* Section Header */}
      <div className="relative mb-12 sm:mb-14 select-none border-b-2 border-[#080808] pb-6">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
          <div className="space-y-0 sm:space-y-1">
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black text-[#080808] tracking-tight leading-none">
              SOCIAL
            </h2>
            <div className="flex items-baseline gap-4 sm:gap-6">
              <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black text-[#080808] tracking-tight leading-none">
                MEDIA
              </h2>
              <span className="font-mono text-xs sm:text-sm font-bold text-[#3155FF] tracking-widest uppercase">
                MANAGED ACCOUNTS
              </span>
            </div>
          </div>

          {/* Account Selector Pill */}
          <div className="flex items-center gap-2 p-1.5 bg-[#080808]/5 rounded-full self-start sm:self-auto font-mono text-xs border border-[#080808]/10">
            <button
              onClick={() => setActiveAccount('mist')}
              className={`px-5 py-2 rounded-full font-bold transition-all cursor-pointer ${
                isMist
                  ? 'bg-[#080808] text-white shadow-sm'
                  : 'text-[#080808]/70 hover:text-[#080808]'
              }`}
            >
              @mist_indore
            </button>
            <button
              onClick={() => setActiveAccount('mm')}
              className={`px-5 py-2 rounded-full font-bold transition-all cursor-pointer ${
                !isMist
                  ? 'bg-[#080808] text-white shadow-sm'
                  : 'text-[#080808]/70 hover:text-[#080808]'
              }`}
            >
              @acemarketing_master
            </button>
          </div>
        </div>
      </div>

      {/* 3-Column Responsive Editorial Composition */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center py-4">
        
        {/* Left Column: Pillar 01 & 03 (Desktop) */}
        <div className="hidden lg:flex lg:col-span-3 flex-col gap-8 justify-center">
          
          {/* Pillar 01: CONTENT */}
          <div className="p-5 sm:p-6 rounded-3xl bg-white border-2 border-[#080808] shadow-lg hover:border-[#3155FF] hover:-translate-y-1 transition-all duration-300">
            <span className="text-[10px] font-mono font-extrabold text-[#3155FF] tracking-widest uppercase block mb-1">
              01 / PILLAR
            </span>
            <h3 className="text-lg xl:text-xl font-display font-black text-[#080808] tracking-tight leading-tight">
              CONTENT
            </h3>
            <p className="text-xs font-mono text-[#080808]/70 mt-2 leading-relaxed">
              Daily reels, event broadsides, story calendars & lab tours
            </p>
          </div>

          {/* Pillar 03: CAMPAIGNS */}
          <div className="p-5 sm:p-6 rounded-3xl bg-white border-2 border-[#080808] shadow-lg hover:border-[#3155FF] hover:-translate-y-1 transition-all duration-300">
            <span className="text-[10px] font-mono font-extrabold text-[#3155FF] tracking-widest uppercase block mb-1">
              03 / PILLAR
            </span>
            <h3 className="text-lg xl:text-xl font-display font-black text-[#080808] tracking-tight leading-tight">
              CAMPAIGNS
            </h3>
            <p className="text-xs font-mono text-[#080808]/70 mt-2 leading-relaxed">
              Jaro Education placement drives, hackathons & annual admissions
            </p>
          </div>

        </div>

        {/* Center Column: Original Instagram Account Mockup */}
        <div className="lg:col-span-6 flex justify-center py-2">
          <div className="relative w-full max-w-[340px] sm:max-w-[375px] rounded-[52px] p-3 sm:p-3.5 bg-[#080808] border-[5px] border-[#1C1C1C] shadow-2xl shadow-black/35 transform hover:scale-[1.008] transition-transform duration-300">
            
            {/* Dynamic Island Notch */}
            <div className="absolute top-5 sm:top-5.5 left-1/2 -translate-x-1/2 w-28 h-5 bg-[#000000] rounded-full z-40 flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-[#1A1A1A] mr-2" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#3155FF]" />
            </div>

            {/* Smartphone Screen Canvas */}
            <div className="relative rounded-[42px] overflow-hidden bg-[#0A0A0A] text-white pt-8 pb-4 px-3 sm:px-3.5 border border-white/10 select-none">
              
              {/* Instagram Top Bar */}
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10 pt-2">
                <div className="flex items-center gap-1.5">
                  <Instagram className="w-4 h-4 text-pink-500 shrink-0" />
                  <span className="text-xs font-mono font-black tracking-tight text-white">
                    {isMist ? 'mist_indore' : 'acemarketing_master'}
                  </span>
                  <ChevronDown className="w-3 h-3 text-white/60" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[9px] font-mono font-bold px-2 py-0.5 rounded-full bg-[#3155FF] text-white">
                    VERIFIED
                  </span>
                  <a
                    href={isMist ? 'https://www.instagram.com/mist_indore/' : 'https://www.instagram.com/acemarketing_master/'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-white"
                    title="Open on Instagram"
                  >
                    <ArrowUpRight className="w-4 h-4 text-[#3155FF]" />
                  </a>
                </div>
              </div>

              {/* Profile Header (Avatar + Stats) matching Image 2 & 3 */}
              <div className="flex items-center justify-between gap-3 mb-2.5">
                {/* Avatar with Gradient Story Ring */}
                <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full p-[2px] bg-gradient-to-tr from-amber-500 via-rose-500 to-fuchsia-600 shrink-0">
                  <div className="w-full h-full rounded-full bg-black p-[1.5px] overflow-hidden">
                    {isMist ? <MistLogo /> : <MarketingMasterLogo />}
                  </div>
                </div>

                {/* Real Stats */}
                <div className="flex-1 flex justify-around text-center">
                  <div>
                    <span className="text-sm font-bold text-white block leading-tight">
                      {isMist ? '1,377' : '30'}
                    </span>
                    <span className="text-[10px] text-white/60 font-mono">posts</span>
                  </div>
                  <div>
                    <span className="text-sm font-bold text-white block leading-tight">
                      {isMist ? '4,586' : '118'}
                    </span>
                    <span className="text-[10px] text-white/60 font-mono">followers</span>
                  </div>
                  <div>
                    <span className="text-sm font-bold text-white block leading-tight">
                      {isMist ? '2,505' : '74'}
                    </span>
                    <span className="text-[10px] text-white/60 font-mono">following</span>
                  </div>
                </div>
              </div>

              {/* Real Bio Information */}
              <div className="space-y-0.5 mb-2.5 text-left">
                <h4 className="text-xs font-bold text-white leading-tight">
                  {isMist ? 'Malwa Group of Institutions, Indore (Icon Of The Future)' : "Marketing Master's 😎"}
                </h4>
                <span className="text-[10px] text-white/60 block">
                  {isMist ? 'Education' : 'Marketing & Branding Agency, Indore'}
                </span>
                <p className="text-[10px] text-white/80 leading-snug">
                  {isMist ? (
                    <>
                      Behind Aurobindo Hospital, Sanwer Road<br />
                      📞 96447-10007 & 9644710006 · Palia, Indore
                    </>
                  ) : (
                    <>
                      🚀 Digital Marketing | Graphic Design | GMB | Social Media Management
                    </>
                  )}
                </p>
                <a
                  href={isMist ? 'https://www.mistindore.com' : 'https://marketingmaster.co.in'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] font-mono text-[#3155FF] font-bold inline-flex items-center gap-1 hover:underline pt-0.5"
                >
                  <span>🔗 {isMist ? 'www.mistindore.com' : 'marketingmaster.co.in'}</span>
                </a>
              </div>

              {/* Action Buttons: [ Following ▾ ] [ Message ] */}
              <div className="flex items-center gap-1.5 mb-2.5">
                <a
                  href={isMist ? 'https://www.instagram.com/mist_indore/' : 'https://www.instagram.com/acemarketing_master/'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-mono text-[11px] font-bold text-center transition-colors"
                >
                  Following ▾
                </a>
                <a
                  href={isMist ? 'https://www.instagram.com/mist_indore/' : 'https://www.instagram.com/acemarketing_master/'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-mono text-[11px] font-bold text-center transition-colors"
                >
                  Message
                </a>
              </div>

              {/* Story Highlights matching Image 2 */}
              <div className="flex items-center gap-2.5 overflow-x-auto pb-2 mb-2 scrollbar-none border-b border-white/10">
                {(isMist
                  ? [
                      { label: 'Placements 💯', icon: '🎓' },
                      { label: 'Placements 🏆', icon: '💼' },
                      { label: 'Events 💫', icon: '🎪' },
                      { label: 'Life at MIST', icon: '🏛' },
                    ]
                  : [
                      { label: 'Results 📈', icon: '🚀' },
                      { label: 'Branding 🎨', icon: '✨' },
                      { label: 'SEO Boost 🔍', icon: '📊' },
                      { label: 'Clients 🤝', icon: '⭐' },
                    ]
                ).map((hl) => (
                  <div key={hl.label} className="flex flex-col items-center shrink-0">
                    <div className="w-11 h-11 rounded-full p-[1.5px] border border-white/30 flex items-center justify-center bg-white/5 mb-1">
                      <span className="text-xs">{hl.icon}</span>
                    </div>
                    <span className="text-[8px] font-mono text-white/70 truncate max-w-[48px]">
                      {hl.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Grid / Reels Tabs */}
              <div className="grid grid-cols-3 text-center border-b border-white/10 pb-1.5 mb-2 text-white/50">
                <div className="text-white border-b-2 border-white pb-1 flex justify-center">
                  <Grid className="w-3.5 h-3.5" />
                </div>
                <div className="flex justify-center">
                  <Play className="w-3.5 h-3.5" />
                </div>
                <div className="flex justify-center">
                  <Bookmark className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Authentic Feed Thumbnails */}
              {isMist ? (
                /* MIST Real Feed Preview (Jaro Placement, SIH Hackathon, Induction, etc.) */
                <div className="grid grid-cols-3 gap-1 rounded-xl overflow-hidden mb-2">
                  <a
                    href="https://www.instagram.com/reel/Dbp56H2uNpG/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="aspect-square bg-gradient-to-br from-blue-900 to-black p-1.5 flex flex-col justify-between text-left hover:opacity-90 relative group"
                  >
                    <span className="text-[8px] font-mono text-[#3155FF] font-bold">REEL</span>
                    <span className="text-[9px] font-bold leading-tight line-clamp-2">100% Placement Guarantee</span>
                    <Play className="w-3 h-3 text-white fill-current absolute top-1 right-1" />
                  </a>

                  <a
                    href="https://www.instagram.com/p/DdiiObyjgHX/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="aspect-square bg-gradient-to-br from-amber-950 to-neutral-900 p-1.5 flex flex-col justify-between text-left hover:opacity-90 relative group"
                  >
                    <span className="text-[8px] font-mono text-amber-400 font-bold">FLYER</span>
                    <span className="text-[9px] font-bold leading-tight line-clamp-2">Jaro Education Drive</span>
                  </a>

                  <a
                    href="https://www.instagram.com/reel/DdBFe-IyfFJ/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="aspect-square bg-gradient-to-br from-indigo-950 to-neutral-900 p-1.5 flex flex-col justify-between text-left hover:opacity-90 relative group"
                  >
                    <span className="text-[8px] font-mono text-indigo-400 font-bold">REEL</span>
                    <span className="text-[9px] font-bold leading-tight line-clamp-2">MBA Induction Ceremony</span>
                    <Play className="w-3 h-3 text-white fill-current absolute top-1 right-1" />
                  </a>

                  <a
                    href="https://www.instagram.com/mist_indore/reel/DdmCmVss-3d/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="aspect-square bg-gradient-to-br from-red-950 to-neutral-900 p-1.5 flex flex-col justify-between text-left hover:opacity-90 relative group"
                  >
                    <span className="text-[8px] font-mono text-rose-400 font-bold">REEL</span>
                    <span className="text-[9px] font-bold leading-tight line-clamp-2">Smart India Hackathon</span>
                    <Play className="w-3 h-3 text-white fill-current absolute top-1 right-1" />
                  </a>

                  <a
                    href="https://www.instagram.com/mist_indore/p/DaN2X9jsvpt/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="aspect-square bg-gradient-to-br from-blue-950 to-neutral-900 p-1.5 flex flex-col justify-between text-left hover:opacity-90 relative group"
                  >
                    <span className="text-[8px] font-mono text-blue-400 font-bold">POST</span>
                    <span className="text-[9px] font-bold leading-tight line-clamp-2">MBA 6 Dual Degrees</span>
                  </a>

                  <a
                    href="https://www.instagram.com/mist_indore/p/DZ4E-mTSbIE/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="aspect-square bg-gradient-to-br from-emerald-950 to-neutral-900 p-1.5 flex flex-col justify-between text-left hover:opacity-90 relative group"
                  >
                    <span className="text-[8px] font-mono text-emerald-400 font-bold">COURSE</span>
                    <span className="text-[9px] font-bold leading-tight line-clamp-2">Biotech & Forensic</span>
                  </a>
                </div>
              ) : (
                /* Marketing Master Real Feed Preview matching Image 3 */
                <div className="grid grid-cols-3 gap-1 rounded-xl overflow-hidden mb-2">
                  <div className="aspect-square bg-[#FDFBF7] p-1.5 flex flex-col justify-center text-center border border-amber-900/10">
                    <span className="text-[8px] font-extrabold text-red-600 leading-tight font-display">
                      KOI DHANDHA CHHOTA NAHI HOTA AUR DHANDHE SE BADA...
                    </span>
                  </div>

                  <div className="aspect-square bg-[#FDFBF7] p-2 flex items-center justify-center border border-amber-900/10">
                    <MarketingMasterLogo />
                  </div>

                  <div className="aspect-square bg-[#FDFBF7] p-1.5 flex flex-col justify-center text-center border border-amber-900/10">
                    <span className="text-[8px] font-extrabold text-red-600 leading-tight font-display">
                      KOI DHANDHA CHHOTA NAHI HOTA DHANDHE KO BADA BANANA...
                    </span>
                  </div>

                  <div className="aspect-square bg-[#0E1525] p-1.5 flex flex-col justify-between text-left">
                    <span className="text-[8px] font-mono text-[#3155FF] font-bold">SEO</span>
                    <span className="text-[9px] font-bold leading-tight text-white">Google My Business 3x Calls</span>
                  </div>

                  <div className="aspect-square bg-[#1E112A] p-1.5 flex flex-col justify-between text-left">
                    <span className="text-[8px] font-mono text-purple-400 font-bold">REEL</span>
                    <span className="text-[9px] font-bold leading-tight text-white">Social Media Growth Hook</span>
                  </div>

                  <div className="aspect-square bg-[#1A1F16] p-1.5 flex flex-col justify-between text-left">
                    <span className="text-[8px] font-mono text-emerald-400 font-bold">AGENCY</span>
                    <span className="text-[9px] font-bold leading-tight text-white">Brand Velocity Kit</span>
                  </div>
                </div>
              )}

              {/* Bottom Direct Profile Link */}
              <div className="pt-1.5 border-t border-white/10 flex items-center justify-between text-[10px] font-mono">
                <span className="text-white/60">Managed by Nitikesh</span>
                <a
                  href={isMist ? 'https://www.instagram.com/mist_indore/' : 'https://www.instagram.com/acemarketing_master/'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#3155FF] font-bold flex items-center gap-1 hover:underline"
                >
                  <span>Open @{isMist ? 'mist_indore' : 'acemarketing_master'}</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>

            </div>

          </div>
        </div>

        {/* Right Column: Pillar 02 & 04 (Desktop) */}
        <div className="hidden lg:flex lg:col-span-3 flex-col gap-8 justify-center">
          
          {/* Pillar 02: ENGAGEMENT */}
          <div className="p-5 sm:p-6 rounded-3xl bg-white border-2 border-[#080808] shadow-lg hover:border-[#3155FF] hover:-translate-y-1 transition-all duration-300">
            <span className="text-[10px] font-mono font-extrabold text-[#3155FF] tracking-widest uppercase block mb-1">
              02 / PILLAR
            </span>
            <h3 className="text-lg xl:text-xl font-display font-black text-[#080808] tracking-tight leading-tight">
              ENGAGEMENT
            </h3>
            <p className="text-xs font-mono text-[#080808]/70 mt-2 leading-relaxed">
              Student inquiries, admissions triage, DM handling & community comments
            </p>
          </div>

          {/* Pillar 04: BRANDING */}
          <div className="p-5 sm:p-6 rounded-3xl bg-white border-2 border-[#080808] shadow-lg hover:border-[#3155FF] hover:-translate-y-1 transition-all duration-300">
            <span className="text-[10px] font-mono font-extrabold text-[#3155FF] tracking-widest uppercase block mb-1">
              04 / PILLAR
            </span>
            <h3 className="text-lg xl:text-xl font-display font-black text-[#080808] tracking-tight leading-tight">
              BRANDING
            </h3>
            <p className="text-xs font-mono text-[#080808]/70 mt-2 leading-relaxed">
              Unified design language, official emblems & institutional authority
            </p>
          </div>

        </div>

      </div>

      {/* Mobile & Tablet 4 Pillars Grid (< lg) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:hidden mt-8">
        {[
          { num: '01', title: 'CONTENT', desc: 'Daily reels, event broadsides, story calendars & lab tours' },
          { num: '02', title: 'ENGAGEMENT', desc: 'Student inquiries, admissions triage, DM handling & comments' },
          { num: '03', title: 'CAMPAIGNS', desc: 'Jaro Education placement drives, hackathons & annual admissions' },
          { num: '04', title: 'BRANDING', desc: 'Unified design language, official emblems & institutional authority' },
        ].map((pillar) => (
          <div
            key={pillar.title}
            className="p-5 rounded-2xl bg-white border-2 border-[#080808] shadow-md"
          >
            <span className="text-[10px] font-mono font-extrabold text-[#3155FF] block mb-1">
              {pillar.num} / PILLAR
            </span>
            <h4 className="text-base font-display font-black text-[#080808] tracking-tight">
              {pillar.title}
            </h4>
            <p className="text-xs font-mono text-[#080808]/70 mt-1 leading-snug">
              {pillar.desc}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
}
