import React from 'react';
import { ContactForm } from '../components/ContactForm';
import { MapPin, Mail, Phone, Clock, Sparkles } from 'lucide-react';
import { BRAND_IDENTITY, LOOKBOOK_DATA } from '../data/fashionData';

interface ContactPageProps {
  savedLookIds: string[];
}

export const ContactPage: React.FC<ContactPageProps> = ({ savedLookIds }) => {
  const savedLooks = LOOKBOOK_DATA.filter((l) => savedLookIds.includes(l.id));

  return (
    <div className="pt-28 pb-24 bg-[#08090B] min-h-screen text-[#F2F0EA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14 border-b border-neutral-900 pb-10 space-y-4">
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#D6FF3F] block">
            COMMISSIONS & DIALOGUE
          </span>
          <h1 className="text-4xl sm:text-6xl font-syne font-extrabold tracking-tight">
            CONTACT THE ATELIER
          </h1>
          <p className="font-serif-luxury text-xl text-neutral-400 italic max-w-2xl">
            "For editorial loans, creative collaborations, private bespoke commissions, and press inquiries."
          </p>
        </div>

        {/* If user has saved looks, show curated portfolio banner */}
        {savedLooks.length > 0 && (
          <div className="p-6 bg-neutral-950 border border-[#D6FF3F]/30 rounded-sm mb-12 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-[#D6FF3F] shrink-0" />
              <div>
                <h3 className="font-syne font-bold text-sm text-white">
                  Curated Inquiry Portfolio Active ({savedLooks.length} looks selected)
                </h3>
                <p className="text-xs text-neutral-400">
                  {savedLooks.map((l) => l.title).join(' · ')}
                </p>
              </div>
            </div>
            <span className="text-[11px] font-mono text-[#D6FF3F] uppercase tracking-wider shrink-0">
              Auto-referenced in dispatch
            </span>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Atelier Information */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 bg-neutral-950 border border-neutral-850 rounded-sm space-y-6">
              <span className="text-xs font-mono uppercase tracking-widest text-[#D6FF3F] block">
                ATELIER LOCATIONS
              </span>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#D6FF3F] mt-1 shrink-0" />
                  <div className="text-xs font-mono">
                    <strong className="text-white block text-sm mb-0.5">Paris Couture Atelier</strong>
                    <p className="text-neutral-400">14 Rue de Turenne</p>
                    <p className="text-neutral-400">75004 Paris, France</p>
                    <p className="text-neutral-500 text-[11px] mt-1">By private appointment only</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-4 border-t border-neutral-900">
                  <MapPin className="w-4 h-4 text-[#D6FF3F] mt-1 shrink-0" />
                  <div className="text-xs font-mono">
                    <strong className="text-white block text-sm mb-0.5">Reykjavík Textile Lab</strong>
                    <p className="text-neutral-400">Laugavegur 105</p>
                    <p className="text-neutral-400">101 Reykjavík, Iceland</p>
                    <p className="text-neutral-500 text-[11px] mt-1">Research & Material Science</p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-neutral-850 space-y-3 text-xs font-mono">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-neutral-500" />
                  <span className="text-neutral-300">commissions@ateliernoir.paris</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-neutral-500" />
                  <span className="text-neutral-300">press@ateliernoir.paris</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-neutral-500" />
                  <span className="text-neutral-400">Mon–Fri: 10:00 – 18:00 CET</span>
                </div>
              </div>
            </div>

            {/* Social channels */}
            <div className="p-6 bg-neutral-950 border border-neutral-850 rounded-sm space-y-3 font-mono text-xs">
              <span className="text-neutral-500 uppercase tracking-widest block font-bold">
                Digital Presence
              </span>
              <div className="flex flex-col space-y-2 text-neutral-300">
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-[#D6FF3F] transition-colors">
                  Instagram: @atelier.noir.paris
                </a>
                <a href="https://behance.net" target="_blank" rel="noreferrer" className="hover:text-[#D6FF3F] transition-colors">
                  Behance: behance.net/ateliernoir
                </a>
                <a href="https://discord.com" target="_blank" rel="noreferrer" className="hover:text-[#D6FF3F] transition-colors">
                  Discord: Atelier Nøir Guild
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};
