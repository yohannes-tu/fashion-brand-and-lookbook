import React from 'react';
import { STUDIO_PROCESS } from '../data/fashionData';

export const StudioSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#08090B] border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#D6FF3F] block mb-2">
              PROCESS & ATELIER
            </span>
            <h2 className="text-3xl sm:text-5xl font-syne font-bold text-[#F2F0EA] tracking-tight">
              INSIDE THE STUDIO
            </h2>
          </div>
          <p className="font-serif-luxury text-lg text-neutral-400 italic max-w-md">
            "From computational volumetrics to hand-finished carbon weave."
          </p>
        </div>

        {/* 4-Step Studio Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STUDIO_PROCESS.map((step) => (
            <div
              key={step.step}
              className="bg-neutral-950/80 border border-neutral-850 rounded-sm overflow-hidden flex flex-col justify-between group hover:border-neutral-700 transition-colors"
            >
              <div className="p-6 space-y-3">
                <div className="flex items-center justify-between pb-3 border-b border-neutral-850">
                  <span className="font-mono text-xs text-[#D6FF3F] font-bold">
                    PHASE // {step.step}
                  </span>
                  <span className="font-mono text-[10px] text-neutral-500 uppercase">
                    ATELIER PARIS
                  </span>
                </div>

                <h3 className="text-lg font-syne font-bold text-[#F2F0EA]">
                  {step.title}
                </h3>

                <p className="text-xs text-neutral-400 font-light leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="relative aspect-4/3 w-full bg-neutral-900 overflow-hidden border-t border-neutral-900">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter grayscale contrast-115"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                <div className="absolute bottom-2 left-3 right-3 text-[10px] font-mono text-neutral-300 truncate">
                  {step.detail}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
