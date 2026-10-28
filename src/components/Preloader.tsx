import React, { useState, useEffect } from 'react';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // Respect reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      onComplete();
      return;
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setFading(true);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 5;
      });
    }, 45);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#08090B] transition-opacity duration-500 ${
        fading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="relative text-center px-6">
        {/* Subtle geometric reticle lines */}
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-px h-8 bg-gradient-to-b from-transparent to-neutral-700" />
        
        <p className="text-[10px] tracking-[0.4em] text-neutral-500 uppercase mb-3 font-mono">
          HAUTE COUTURE ARCHITECTURE
        </p>
        
        <h1 className="text-3xl sm:text-5xl font-syne font-bold tracking-[0.25em] text-[#F2F0EA] mb-6">
          ATELIER NØIR
        </h1>

        {/* Minimal electric-lime progress indicator */}
        <div className="w-48 sm:w-64 h-[1px] bg-neutral-800 mx-auto overflow-hidden relative mb-4">
          <div
            className="h-full bg-[#D6FF3F] transition-all duration-75"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="flex items-center justify-between w-48 sm:w-64 mx-auto text-[10px] font-mono text-neutral-500">
          <span>PARIS / REYKJAVÍK</span>
          <span className="tabular-nums text-[#D6FF3F]">{progress}%</span>
        </div>

        <button
          onClick={() => {
            setFading(true);
            setTimeout(onComplete, 200);
          }}
          className="mt-8 text-[11px] tracking-widest uppercase text-neutral-400 hover:text-[#D6FF3F] transition-colors py-1 px-3 border border-neutral-800 hover:border-neutral-700 rounded-sm"
        >
          Skip Intro →
        </button>
      </div>
    </div>
  );
};
