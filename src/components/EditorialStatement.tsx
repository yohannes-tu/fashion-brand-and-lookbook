import React from 'react';

export const EditorialStatement: React.FC = () => {
  return (
    <section className="relative py-32 bg-[#08090B] overflow-hidden border-t border-b border-neutral-900">
      {/* Background Subtle Gradient & Reticle */}
      <div className="absolute inset-0 reticle-grid opacity-20 pointer-events-none" />
      
      {/* Horizontal laser axis */}
      <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D6FF3F]/30 to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-xs font-mono uppercase tracking-[0.4em] text-[#D6FF3F] block mb-6">
          MANIFESTO STATEMENT
        </span>

        <h2 className="text-3xl sm:text-5xl lg:text-7xl font-syne font-extrabold text-[#F2F0EA] tracking-tight leading-tight sm:leading-none uppercase mb-8">
          Fashion is not the future.
          <br />
          <span className="font-serif-luxury italic font-normal text-neutral-400 block mt-3 sm:mt-4 text-3xl sm:text-5xl lg:text-6xl normal-case">
            It is how we imagine it.
          </span>
        </h2>

        <div className="w-16 h-px bg-[#D6FF3F] mx-auto mb-6" />

        <p className="text-xs sm:text-sm font-mono text-neutral-400 uppercase tracking-widest max-w-xl mx-auto">
          PARIS · REYKJAVÍK · TOKYO // AUTUMN–WINTER 2026 EDITION
        </p>
      </div>
    </section>
  );
};
