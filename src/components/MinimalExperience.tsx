import React from 'react';
import { Download, ArrowUpRight } from 'lucide-react';
import { EXPERIENCE_ITEMS } from '../data/portfolioData';

export default function MinimalExperience() {
  const handleDownloadResume = () => {
    const resumeText = `NITIKESH KANODIYA
Social Media Handler • Digital Marketer • Content Creator
Email: kanodiyanitikesh@gmail.com | Phone: +91 9589566876 | Location: Indore, India

EXPERIENCE:
1. Malwa Institute of Science and Technology (October 2025 – Present)
   Role: Marketing Executive
   Focus: Admissions campaigns, campus visibility, video reels, promotional collateral, lead generation.

2. Marketing Master (Founder)
   Focus: Social media marketing, content creation, SEO, website development, Google Business Profile optimization.

SKILLS:
Social Media Marketing, Content Creation, Canva, CapCut, Lead Generation, Analytics, Brand Promotion.`;

    const blob = new Blob([resumeText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Nitikesh_Kanodiya_Resume.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white relative">
      
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b-2 border-[#080808] pb-6 mb-12 gap-4">
        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black text-[#080808] tracking-tight leading-none">
          EXPERIENCE<span className="text-[#3155FF]">.</span>
        </h2>

        <button
          onClick={handleDownloadResume}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#080808] hover:bg-[#3155FF] text-white font-mono text-xs font-bold tracking-widest uppercase transition-colors self-start sm:self-auto cursor-pointer"
        >
          <span>DOWNLOAD RESUME</span>
          <Download className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Minimalist Timeline (Zero Paragraphs) */}
      <div className="space-y-10">
        {EXPERIENCE_ITEMS.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col md:flex-row md:items-baseline justify-between py-8 border-b border-[#080808]/15 gap-4 hover:border-[#3155FF] transition-colors group"
          >
            {/* Period */}
            <div className="w-52 font-mono text-base font-bold text-[#3155FF]">
              {item.period}
            </div>

            {/* Role & Company */}
            <div className="flex-1">
              <h3 className="text-2xl sm:text-4xl font-display font-black text-[#080808] group-hover:text-[#3155FF] transition-colors">
                {item.company}
              </h3>
              <div className="text-sm font-mono text-[#080808]/70 mt-1 font-bold">
                {item.role}
              </div>
            </div>

            {/* Minimal Tags */}
            <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-[#080808]">
              {item.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-3.5 py-1.5 rounded-full bg-white border border-[#080808]/20 group-hover:border-[#3155FF] font-bold text-[11px] tracking-wider"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
