import React from 'react';
import { BRAND_IDENTITY } from '../data/fashionData';

export const DesignPhilosophy: React.FC = () => {
  return (
    <section className="py-24 bg-[#08090B] border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#D6FF3F] block mb-2">
              CORE PHILOSOPHY
            </span>
            <h2 className="text-3xl sm:text-5xl font-syne font-bold text-[#F2F0EA] tracking-tight">
              BEYOND THE SILHOUETTE
            </h2>
          </div>
          <p className="text-sm font-light text-neutral-400 max-w-md leading-relaxed">
            {BRAND_IDENTITY.philosophy}
          </p>
        </div>

        {/* 3 Principles Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {BRAND_IDENTITY.principles.map((p) => (
            <div
              key={p.number}
              className="bg-neutral-950/80 border border-neutral-850 rounded-sm overflow-hidden flex flex-col justify-between group hover:border-neutral-700 transition-colors"
            >
              <div className="p-8 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-neutral-850">
                  <span className="font-mono text-xs text-[#D6FF3F] font-bold tracking-widest">
                    PRINCIPLE // {p.number}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-500">
                    {p.subtitle}
                  </span>
                </div>

                <h3 className="text-2xl font-syne font-bold text-[#F2F0EA] pt-2">
                  {p.title}
                </h3>

                <blockquote className="font-serif-luxury italic text-base text-neutral-300">
                  "{p.quote}"
                </blockquote>

                <p className="text-xs text-neutral-400 font-light leading-relaxed">
                  {p.description}
                </p>
              </div>

              {/* Supporting Image / Detail */}
              <div className="relative aspect-16/10 w-full overflow-hidden bg-neutral-900 border-t border-neutral-900">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-60" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
