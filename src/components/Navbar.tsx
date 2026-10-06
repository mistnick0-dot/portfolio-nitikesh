import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenContact: () => void;
}

export default function Navbar({ onOpenContact }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'WORK', href: '#work' },
    { name: 'REELS', href: '#reels' },
    { name: 'DESIGN', href: '#design' },
    { name: 'PROCESS', href: '#process' },
    { name: 'ABOUT', href: '#about' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-[#080808]/10 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo: NITIKESH in bold black */}
          <a
            href="#"
            className="text-lg md:text-xl font-display font-black tracking-tight text-[#080808] hover:text-[#3155FF] transition-colors whitespace-nowrap"
          >
            NITIKESH
          </a>

          {/* Nav Links: Black font-mono */}
          <nav className="hidden md:flex items-center gap-9 text-xs font-mono font-bold tracking-widest text-[#080808]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-[#3155FF] transition-colors whitespace-nowrap relative py-1"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Contact Button: BLUE background, white text */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenContact}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-mono font-bold tracking-wider text-white bg-[#3155FF] hover:bg-[#1635C7] rounded-full shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 whitespace-nowrap cursor-pointer"
            >
              <span>CONTACT</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#080808] hover:text-[#3155FF] focus:outline-none"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-[#080808]/15 px-6 py-5 space-y-4">
          <div className="flex flex-col gap-3.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-mono font-bold tracking-wider text-[#080808] hover:text-[#3155FF] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-[#080808]/10 flex items-center justify-between">
            <span className="text-xs text-[#080808]/60 font-mono">Indore, India</span>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="text-xs text-[#3155FF] font-mono font-bold"
            >
              GET IN TOUCH →
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
