import React, { useState } from 'react';
import { ArrowUpRight, X, Camera, Sparkles, MapPin } from 'lucide-react';
import { BRAND_IDENTITY } from '../data/fashionData';

export const CampaignFeature: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const campaign = BRAND_IDENTITY.campaign;

  return (
    <>
      <section className="py-24 bg-[#08090B] border-t border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-sm border border-neutral-800 bg-neutral-950 group">
            {/* Cinematic Full-Bleed 16:9 Image */}
            <div className="relative aspect-16/9 sm:aspect-21/9 w-full overflow-hidden">
              <img
                src={campaign.image}
                alt={campaign.title}
                className="w-full h-full object-cover object-center filter contrast-110 transition-transform duration-1000 ease-out group-hover:scale-102"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08090B] via-[#08090B]/40 to-transparent" />
            </div>

            {/* Campaign Overlay Information */}
            <div className="p-8 sm:p-12 relative z-10 flex flex-col lg:flex-row lg:items-end justify-between gap-8 -mt-20 sm:-mt-32">
              <div className="max-w-2xl">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[11px] font-mono uppercase tracking-[0.3em] text-[#D6FF3F]">
                    CAMPAIGN SPOTLIGHT
                  </span>
                  <span className="text-neutral-500 font-mono">/</span>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-300">
                    {campaign.season}
                  </span>
                </div>

                <h2 className="text-3xl sm:text-5xl font-syne font-bold text-[#F2F0EA] tracking-tight mb-4">
                  {campaign.title}
                </h2>

                <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed mb-6">
                  {campaign.description}
                </p>

                {/* Creative Team Credits */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono pt-4 border-t border-neutral-800 text-neutral-400">
                  <div>
                    <span className="text-neutral-500 block mb-1">Direction:</span>
                    <span className="text-white">{campaign.credits.creativeDirector}</span>
                  </div>
                  <div>
                    <span className="text-neutral-500 block mb-1">Photography:</span>
                    <span className="text-white">{campaign.credits.photographer}</span>
                  </div>
                  <div>
                    <span className="text-neutral-500 block mb-1">Styling:</span>
                    <span className="text-white">{campaign.credits.stylist}</span>
                  </div>
                  <div>
                    <span className="text-neutral-500 block mb-1">Atmosphere:</span>
                    <span className="text-white">{campaign.credits.soundDesign}</span>
                  </div>
                </div>
              </div>

              {/* View Campaign CTA */}
              <button
                onClick={() => setModalOpen(true)}
                className="shrink-0 px-6 py-3.5 text-xs font-mono uppercase tracking-widest text-[#08090B] bg-[#D6FF3F] hover:bg-white transition-colors font-bold rounded-sm flex items-center gap-2 group cursor-pointer"
              >
                <span>VIEW CAMPAIGN NOTES</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Campaign Modal Experience */}
      {modalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-[#08090B]/95 backdrop-blur-xl flex flex-col justify-between p-6 sm:p-10 overflow-y-auto animate-fade-in"
        >
          <div className="max-w-5xl mx-auto w-full">
            <div className="flex justify-between items-center pb-6 border-b border-neutral-800">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#D6FF3F]">
                  GLOBAL CAMPAIGN ARCHIVE
                </span>
                <h3 className="text-2xl sm:text-3xl font-syne font-bold text-white mt-1">
                  {campaign.title}
                </h3>
              </div>
              <button
                onClick={() => setModalOpen(false)}
                aria-label="Close campaign modal"
                className="p-2 border border-neutral-800 hover:border-neutral-600 text-neutral-400 hover:text-white rounded-sm cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-8 space-y-8">
              <div className="aspect-16/9 w-full bg-neutral-900 rounded-sm overflow-hidden border border-neutral-800">
                <img
                  src={campaign.image}
                  alt={campaign.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-neutral-300">
                <div className="md:col-span-2 space-y-4">
                  <h4 className="text-lg font-syne font-bold text-white">
                    The Monolithic Void of Sub-Level VII
                  </h4>
                  <p className="text-sm font-light leading-relaxed">
                    Set against the brutalist concrete pillars of a subterranean reservoir, "After the Static" explores garments that absorb surrounding acoustics and redefine human geometry.
                  </p>
                  <p className="text-sm font-light leading-relaxed">
                    Four models move through measured choreography, cloaked in cantilevered carbon gabardine and high-collar metallic embroideries. The atmosphere is stark, quiet, and timeless.
                  </p>
                </div>

                <div className="bg-neutral-950 p-6 border border-neutral-850 rounded-sm space-y-3 font-mono text-xs text-neutral-400">
                  <div className="flex items-center gap-2 text-white">
                    <MapPin className="w-4 h-4 text-[#D6FF3F]" />
                    <span>{campaign.location}</span>
                  </div>
                  <div>
                    <span className="text-neutral-500">Camera System:</span> Leica S3 / 35mm Summarit
                  </div>
                  <div>
                    <span className="text-neutral-500">Light Technique:</span> Collimated Fresnel Monochromatic
                  </div>
                  <div>
                    <span className="text-neutral-500">Soundtrack:</span> 40Hz resonant drone
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
