import React, { useState } from 'react';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SelectedWork from './components/SelectedWork';
import ReelsShowcase from './components/ReelsShowcase';
import SocialVisualization from './components/SocialVisualization';
import DesignWall from './components/DesignWall';
import ContentProcess from './components/ContentProcess';
import MinimalExperience from './components/MinimalExperience';
import SkillCloud from './components/SkillCloud';
import MinimalAbout from './components/MinimalAbout';
import FinalCTA from './components/FinalCTA';

import VisualProjectModal from './components/VisualProjectModal';
import FullscreenReelModal from './components/FullscreenReelModal';
import ContactModal from './components/ContactModal';

import { VisualWorkItem, ReelItem, DesignWorkItem, REELS_LIST } from './data/portfolioData';

export default function App() {
  const [selectedWork, setSelectedWork] = useState<VisualWorkItem | null>(null);
  const [selectedDesign, setSelectedDesign] = useState<DesignWorkItem | null>(null);
  const [activeReel, setActiveReel] = useState<ReelItem | null>(null);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const handleOpenReelById = (reelId?: string) => {
    const found = REELS_LIST.find((r) => r.id === reelId) || REELS_LIST[0];
    setActiveReel(found);
  };

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#080808] selection:bg-[#3155FF] selection:text-white font-sans">
      {/* Light Custom Cursor */}
      <CustomCursor />

      {/* Minimal Floating Navigation */}
      <Navbar onOpenContact={() => setIsContactOpen(true)} />

      <main className="relative">
        {/* Hero: Immersive Visual Composition */}
        <Hero
          onOpenContact={() => setIsContactOpen(true)}
          onOpenReel={() => handleOpenReelById('reel-1')}
        />

        {/* Section 1: SELECTED WORK (Immediately after Hero, No paragraph, Asymmetric Magazine Grid) */}
        <SelectedWork
          onSelectWork={(item) => setSelectedWork(item)}
          onOpenReel={handleOpenReelById}
        />

        {/* Section 2: REELS / VIDEO (Vertical Smartphone-Style Video Cards) */}
        <ReelsShowcase
          onOpenReel={(reel) => setActiveReel(reel)}
        />

        {/* Section 3: SOCIAL MEDIA (Visualized 3D Smartphone & 4 Pillars) */}
        <SocialVisualization />

        {/* Section 4: DESIGN WALL (Visual Archive of Flyers & Posters) */}
        <DesignWall
          onSelectDesign={(design) => setSelectedDesign(design)}
        />

        {/* Section 5: CONTENT PROCESS (One Horizontal Process: IDEA -> CREATE -> EDIT -> PUBLISH -> GROW) */}
        <ContentProcess />

        {/* Section 6: EXPERIENCE (Minimalist Timeline, No Paragraphs) */}
        <MinimalExperience />

        {/* Section 7: SKILLS (Floating Skill Cloud Around SOCIAL MEDIA) */}
        <SkillCloud />

        {/* Section 8: ABOUT (Small Section with Asset & Short Statement) */}
        <MinimalAbout />

        {/* Section 9: FINAL CTA (LET'S CREATE SOMETHING PEOPLE REMEMBER) */}
        <FinalCTA onOpenContact={() => setIsContactOpen(true)} />
      </main>

      {/* Lightbox / Modals */}
      <VisualProjectModal
        item={selectedWork || selectedDesign}
        onClose={() => {
          setSelectedWork(null);
          setSelectedDesign(null);
        }}
      />

      <FullscreenReelModal
        reel={activeReel}
        onClose={() => setActiveReel(null)}
      />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
}
