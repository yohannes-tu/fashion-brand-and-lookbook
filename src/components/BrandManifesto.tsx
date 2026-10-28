import React from 'react';
import { BRAND_IDENTITY } from '../data/fashionData';

export const BrandManifesto: React.FC = () => {
  return (
    <section className="py-28 bg-[#08090B] border-t border-neutral-900 relative overflow-hidden">
      <div className="absolute inset-0 reticle-grid opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <span className="text-xs font-mono uppercase tracking-[0.4em] text-[#D6FF3F] block">
          THE ATELIER MANIFESTO
        </span>

        <div className="space-y-6">
          {BRAND_IDENTITY.manifesto.map((line, index) => (
            <p
              key={index}
              className={`font-syne font-bold tracking-tight text-[#F2F0EA] ${
                index === BRAND_IDENTITY.manifesto.length - 1
                  ? 'text-2xl sm:text-4xl text-[#D6FF3F] font-extrabold pt-2'
                  : 'text-2xl sm:text-3xl text-neutral-200'
              }`}
            >
              {line}
            </p>
          ))}
        </div>

        <div className="pt-6 flex justify-center items-center gap-4 text-xs font-mono text-neutral-500">
          <span>{BRAND_IDENTITY.name}</span>
          <span>·</span>
          <span>AUTONOMOUS COUTURE ARCHITECTURE</span>
          <span>·</span>
          <span>2026</span>
        </div>
      </div>
    </section>
  );
};
