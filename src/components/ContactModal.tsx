import React, { useState } from 'react';
import { X, Mail, Phone, MessageCircle, Copy, Check, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [copied, setCopied] = useState<string | null>(null);

  if (!isOpen) return null;

  const copyText = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative z-10 w-full max-w-lg bg-white border-2 border-[#080808] rounded-[36px] p-6 sm:p-8 shadow-2xl">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-5 border-b-2 border-[#080808] mb-6">
          <div>
            <div className="flex items-center gap-1.5 font-mono text-[10px] font-bold tracking-widest text-[#3155FF] uppercase mb-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3155FF]" />
              <span>AVAILABLE FOR ROLES</span>
            </div>
            <h3 className="text-3xl font-display font-black text-[#080808] tracking-tight">
              Let's Connect<span className="text-[#3155FF]">.</span>
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 rounded-full hover:bg-[#080808]/5 text-[#080808] transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Contact Actions */}
        <div className="space-y-4">
          
          {/* WhatsApp Direct in Cobalt Blue */}
          <a
            href={PERSONAL_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full p-4 sm:p-5 rounded-2xl bg-[#3155FF] hover:bg-[#1635C7] text-white flex items-center justify-between shadow-xl shadow-[#3155FF]/25 transition-all transform hover:-translate-y-0.5"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-white/80">
                  INSTANT RESPONSE
                </div>
                <div className="text-base font-display font-black">
                  Chat on WhatsApp
                </div>
              </div>
            </div>
            <ArrowUpRight className="w-5 h-5" />
          </a>

          {/* Email Direct */}
          <div className="p-4 sm:p-5 rounded-2xl bg-white border-2 border-[#080808] flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#080808]/5 flex items-center justify-center text-[#080808]">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] font-mono font-bold text-[#080808]/50 uppercase tracking-wider">
                  DIRECT EMAIL
                </div>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-xs sm:text-sm font-mono font-bold text-[#080808] hover:text-[#3155FF] transition-colors"
                >
                  {PERSONAL_INFO.email}
                </a>
              </div>
            </div>

            <button
              onClick={() => copyText(PERSONAL_INFO.email, 'email')}
              className="p-2.5 rounded-lg hover:bg-[#080808]/5 text-[#080808]/60 hover:text-[#080808] transition-colors"
              title="Copy Email"
            >
              {copied === 'email' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          {/* Phone Direct */}
          <div className="p-4 sm:p-5 rounded-2xl bg-white border-2 border-[#080808] flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#080808]/5 flex items-center justify-center text-[#080808]">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] font-mono font-bold text-[#080808]/50 uppercase tracking-wider">
                  PHONE CALL
                </div>
                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="text-xs sm:text-sm font-mono font-bold text-[#080808] hover:text-[#3155FF] transition-colors"
                >
                  +91 {PERSONAL_INFO.phone}
                </a>
              </div>
            </div>

            <button
              onClick={() => copyText(PERSONAL_INFO.phone, 'phone')}
              className="p-2.5 rounded-lg hover:bg-[#080808]/5 text-[#080808]/60 hover:text-[#080808] transition-colors"
              title="Copy Phone"
            >
              {copied === 'phone' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

        </div>

        {/* Footer */}
        <div className="mt-6 pt-4 border-t border-[#080808]/10 text-center font-mono text-xs font-semibold text-[#080808]/60">
          Based in Indore, India · Open for Immediate Roles
        </div>

      </div>
    </div>
  );
}
