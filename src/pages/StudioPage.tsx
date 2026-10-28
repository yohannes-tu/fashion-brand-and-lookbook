import React from 'react';
import { ArrowRight, MapPin, Compass, Shield, Sparkles } from 'lucide-react';
import { BRAND_IDENTITY, STUDIO_PROCESS } from '../data/fashionData';

interface StudioPageProps {
  onContactCTA: () => void;
}

export const StudioPage: React.FC<StudioPageProps> = ({ onContactCTA }) => {
  return (
    <div className="pt-28 pb-24 bg-[#08090B] min-h-screen text-[#F2F0EA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 border-b border-neutral-900 pb-12 space-y-4">
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#D6FF3F] block">
            THE ATELIER & RESEARCH LAB
          </span>
          <h1 className="text-4xl sm:text-6xl font-syne font-extrabold tracking-tight">
            STUDIO & CRAFT
          </h1>
          <p className="font-serif-luxury text-xl sm:text-2xl text-neutral-300 italic max-w-2xl">
            "Where computational volumetrics meets the precision of haute couture tailoring."
          </p>
        </div>

        {/* Narrative & Philosophy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24 pb-16 border-b border-neutral-900">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono uppercase tracking-widest text-[#D6FF3F] block">
              ORIGIN & INTENT
            </span>
            <h2 className="text-3xl font-syne font-bold text-white">
              An Architecture for the Human Contour
            </h2>
            <p className="text-sm text-neutral-300 font-light leading-relaxed">
              Founded in 2024 across Paris and Reykjavík, ATELIER NØIR was conceived as an antidote to disposable fast fashion and superficial tech gimmicks. We treat the garment not as a temporary ornament, but as the primary architectural shelter of the individual.
            </p>
            <p className="text-sm text-neutral-300 font-light leading-relaxed">
              Our garments are sculpted with cantilevered drapes, articulated joints, and monolithic volumes. We integrate conductive silver micro-filaments, responsive polymers, and dense carbon wool—materials engineered to respond to thermal and acoustic shifts in post-digital environments.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4 font-mono text-xs">
              <div className="p-4 bg-neutral-950 border border-neutral-850 rounded-sm">
                <div className="flex items-center gap-1.5 text-white font-bold mb-1">
                  <MapPin className="w-3.5 h-3.5 text-[#D6FF3F]" />
                  <span>Paris Atelier</span>
                </div>
                <p className="text-neutral-400">14 Rue de Turenne, 75004</p>
                <p className="text-neutral-500 text-[11px]">Couture Drafting & Fittings</p>
              </div>

              <div className="p-4 bg-neutral-950 border border-neutral-850 rounded-sm">
                <div className="flex items-center gap-1.5 text-white font-bold mb-1">
                  <MapPin className="w-3.5 h-3.5 text-[#D6FF3F]" />
                  <span>Reykjavík Lab</span>
                </div>
                <p className="text-neutral-400">Laugavegur 105, 101</p>
                <p className="text-neutral-500 text-[11px]">Textile Science & Weaves</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative aspect-4/3 w-full bg-neutral-900 rounded-sm overflow-hidden border border-neutral-800 shadow-2xl">
              <img
                src="/src/assets/images/studio_textile_detail_1793173120792.jpg"
                alt="Atelier Noir Material Science Lab"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-6 text-xs font-mono text-neutral-300">
                <span className="text-[#D6FF3F]">LAB INVESTIGATION // </span>
                <span>Tactile Micro-Weave & Thermal Responsiveness</span>
              </div>
            </div>
          </div>
        </div>

        {/* Leadership & Creative Direction Profiles */}
        <div className="mb-24">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#D6FF3F] block mb-2">
            CREATIVE LEADERSHIP
          </span>
          <h2 className="text-3xl font-syne font-bold text-white mb-10">
            THE ATELIER DIRECTORS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-neutral-950 border border-neutral-850 rounded-sm space-y-4">
              <div className="flex justify-between items-baseline">
                <h3 className="text-2xl font-syne font-bold text-white">
                  Kaelen Vance
                </h3>
                <span className="text-xs font-mono text-[#D6FF3F] uppercase">
                  Creative Director & Founder
                </span>
              </div>
              <p className="text-xs font-mono text-neutral-500">
                Former Architectural Fellow, ETH Zürich & Architectural Association
              </p>
              <p className="text-sm text-neutral-300 font-light leading-relaxed">
                Vance brings twelve years of monumental architectural theory to fashion design, pioneering the use of structural stays and tensile physics to achieve garments that command space with stone-like calm.
              </p>
            </div>

            <div className="p-8 bg-neutral-950 border border-neutral-850 rounded-sm space-y-4">
              <div className="flex justify-between items-baseline">
                <h3 className="text-2xl font-syne font-bold text-white">
                  Dr. Mira Chen
                </h3>
                <span className="text-xs font-mono text-[#D6FF3F] uppercase">
                  Head of Material Science
                </span>
              </div>
              <p className="text-xs font-mono text-neutral-500">
                Ph.D. Polymer Physics, Kyoto University Institute for Chemical Research
              </p>
              <p className="text-sm text-neutral-300 font-light leading-relaxed">
                Dr. Chen leads our Icelandic substrate laboratory, inventing proprietary micro-jacquard weaves that embed silver threads into natural wool faille without altering drape or luxurious hand-feel.
              </p>
            </div>
          </div>
        </div>

        {/* 4 Phases of Craft */}
        <div className="mb-24">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#D6FF3F] block mb-2">
            METHODOLOGY
          </span>
          <h2 className="text-3xl font-syne font-bold text-white mb-10">
            THE 4-PHASE DEVELOPMENT CYCLE
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STUDIO_PROCESS.map((s) => (
              <div
                key={s.step}
                className="p-6 bg-neutral-950 border border-neutral-850 rounded-sm space-y-3"
              >
                <div className="font-mono text-xs text-[#D6FF3F] font-bold">
                  PHASE // {s.step}
                </div>
                <h3 className="text-lg font-syne font-bold text-white">{s.title}</h3>
                <p className="text-xs text-neutral-400 font-light leading-relaxed">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Studio Inquiry CTA */}
        <div className="p-10 bg-neutral-950 border border-neutral-800 rounded-sm text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-[#D6FF3F]">
            COLLABORATION & VISITS
          </span>
          <h3 className="text-2xl sm:text-3xl font-syne font-bold text-white">
            Private Atelier Appointments & Commissions
          </h3>
          <p className="text-sm text-neutral-400 font-light max-w-xl mx-auto">
            We welcome fashion editors, cultural institutions, private collectors, and architectural partners for bespoke dialogues.
          </p>
          <button
            onClick={onContactCTA}
            className="mt-4 px-8 py-3 text-xs font-mono uppercase tracking-widest text-[#08090B] bg-[#D6FF3F] hover:bg-white font-bold rounded-sm transition-colors cursor-pointer"
          >
            Schedule Atelier Inquiry
          </button>
        </div>
      </div>
    </div>
  );
};
