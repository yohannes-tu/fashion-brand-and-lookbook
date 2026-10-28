import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowUpRight, Compass, Shield, Share2 } from 'lucide-react';
import { HERO_SLIDES, BRAND_IDENTITY } from '../data/fashionData';

interface HeroSectionProps {
  onExploreCollection: (collectionId?: string) => void;
  onSelectLookForInquiry: (lookId: string) => void;
  onOpenLightboxByLookTitle: (title: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreCollection,
  onSelectLookForInquiry,
  onOpenLightboxByLookTitle,
}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const slide = HERO_SLIDES[currentSlideIndex];

  const handleNext = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const handlePrev = () => {
    setCurrentSlideIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  return (
    <section className="relative min-h-screen w-full bg-[#08090B] flex flex-col justify-between pt-24 pb-8 overflow-hidden reticle-grid">
      {/* Central Dramatic Monolith Model Visual (Reference Layout) */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center overflow-hidden">
        {/* Deep radial dark vignette to fade out background side text */}
        <div className="absolute inset-0 bg-radial from-transparent via-[#08090B]/70 to-[#08090B] z-10" />
        <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#08090B] via-[#08090B]/80 to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[#08090B] via-[#08090B]/80 to-transparent z-10" />

        {/* Vertical crosshair axis from reference */}
        <div className="absolute top-0 bottom-0 w-px bg-white/10 z-10 left-1/2 -translate-x-1/2" />
        
        {/* Reticle circle behind hooded head */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-64 sm:h-64 rounded-full border border-white/10 z-10 pointer-events-none flex items-center justify-center">
          <div className="w-2 h-2 rounded-full border border-[#D6FF3F]/40" />
          <div className="absolute top-0 w-2 h-px bg-[#D6FF3F]/60 -translate-x-1/2" />
          <div className="absolute bottom-0 w-2 h-px bg-[#D6FF3F]/60 -translate-x-1/2" />
          <div className="absolute left-0 h-2 w-px bg-[#D6FF3F]/60 -translate-y-1/2" />
          <div className="absolute right-0 h-2 w-px bg-[#D6FF3F]/60 -translate-y-1/2" />
        </div>

        {/* Center Reference Image Model with clean center focus */}
        <div className="relative w-full h-full max-w-4xl flex items-center justify-center">
          <img
            src="/public/assets/aistudio/image_71628699.png"
            alt="ATELIER NØIR Haute Couture Silhouette"
            className="h-full w-full object-cover object-center scale-110 opacity-70 filter contrast-115 brightness-95"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>

      {/* Decorative Four-Pointed Star Center Reticle Emblem (From Reference Top Center) */}
      <div className="relative z-20 flex justify-center py-2 pointer-events-none">
        <div className="relative flex items-center justify-center w-8 h-8 text-neutral-300">
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white drop-shadow-md">
            <path d="M12 0L14 9.5L24 12L14 14.5L12 24L10 14.5L0 12L10 9.5L12 0Z" />
          </svg>
        </div>
      </div>

      {/* Main Content Grid: Left Futuristic Typography + Right Interactive Look Spotlight */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
        {/* Left Column (Reference Composition: FUTURE FASHION + Discover) */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
          {/* Framed Display Typography Box */}
          <div className="relative p-6 sm:p-8 bg-neutral-950/70 backdrop-blur-md border border-neutral-800/80 rounded-sm">
            {/* Corner hairline accents */}
            <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#D6FF3F]" />
            <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#D6FF3F]" />

            <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#D6FF3F] block mb-2">
              COLLECTION 001 / AUTUMN–WINTER 2026
            </span>
            <h1 className="text-3xl sm:text-5xl font-orbitron font-extrabold tracking-tight text-[#F2F0EA] leading-none mb-3">
              FUTURE<br />FASHION
            </h1>
            <p className="font-serif-luxury text-xl sm:text-2xl text-neutral-300 italic">
              "{BRAND_IDENTITY.heroStatement}"
            </p>
          </div>

          {/* Description & Action Box */}
          <div className="p-6 bg-neutral-950/70 backdrop-blur-md border border-neutral-800/80 rounded-sm space-y-5">
            <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
              Explore bold styles, tech-infused fabrics, and next-gen looks designed for tomorrow.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => onExploreCollection('nocturne-001')}
                className="px-6 py-2.5 text-xs font-mono uppercase tracking-widest text-[#08090B] bg-[#D6FF3F] hover:bg-white transition-all font-semibold rounded-sm flex items-center gap-2 group cursor-pointer"
              >
                <span>Discover</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
              <button
                onClick={() => {
                  const el = document.getElementById('featured-collection');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-5 py-2.5 text-xs font-mono uppercase tracking-widest text-neutral-300 hover:text-white border border-neutral-800 hover:border-neutral-600 transition-colors rounded-sm cursor-pointer"
              >
                Nocturne / 001
              </button>
            </div>
          </div>
        </div>

        {/* Center Spacer on Large Displays to Keep Monolith Visible */}
        <div className="hidden lg:block lg:col-span-3" />

        {/* Right Column: Interactive Look Card Carousel (Reference Look Card) */}
        <div className="lg:col-span-4 w-full">
          <div className="bg-neutral-950/80 backdrop-blur-md border border-neutral-800/80 rounded-sm p-5 space-y-4 shadow-2xl">
            {/* Header with Look Carousel Navigation Controls */}
            <div className="relative aspect-4/3 w-full bg-neutral-900 rounded-sm overflow-hidden group">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-transparent to-transparent" />

              {/* Carousel Arrows directly matching reference */}
              <div className="absolute inset-0 flex items-center justify-between px-3 pointer-events-none">
                <button
                  onClick={handlePrev}
                  aria-label="Previous look preview"
                  className="p-1.5 rounded-full bg-black/60 text-white hover:text-[#D6FF3F] hover:bg-black/90 transition-colors pointer-events-auto cursor-pointer"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  aria-label="Next look preview"
                  className="p-1.5 rounded-full bg-black/60 text-white hover:text-[#D6FF3F] hover:bg-black/90 transition-colors pointer-events-auto cursor-pointer"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Subtle Tag Overlay */}
              <div className="absolute bottom-2 left-3 text-[10px] font-mono uppercase tracking-widest text-[#D6FF3F]">
                {slide.tagline}
              </div>
            </div>

            {/* Look Details */}
            <div className="space-y-2">
              <div className="flex items-baseline justify-between">
                <h2 className="text-lg font-syne font-bold text-[#F2F0EA]">
                  {slide.title}
                </h2>
                <span className="font-mono text-xs text-[#D6FF3F] font-bold tabular-nums">
                  {slide.number}
                </span>
              </div>
              <p className="text-xs text-neutral-400 font-light leading-relaxed">
                {slide.description}
              </p>
            </div>

            {/* Action Buttons: "Get Now" / Inquire + Full Look Details */}
            <div className="pt-2 border-t border-neutral-900 flex items-center justify-between gap-3">
              <button
                onClick={() => onSelectLookForInquiry(slide.id)}
                className="flex-1 px-4 py-2 text-xs font-mono uppercase tracking-wider text-[#08090B] bg-[#F2F0EA] hover:bg-[#D6FF3F] transition-colors font-medium rounded-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                {/* Stylized vector mark from reference */}
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 16 16">
                  <path d="M1 8L6 13L15 2L13 1L6 10L3 7L1 8Z" />
                </svg>
                <span>Get Now / Inquire</span>
              </button>

              <button
                onClick={() => onOpenLightboxByLookTitle(slide.title)}
                className="p-2 border border-neutral-800 hover:border-neutral-700 text-neutral-300 hover:text-white rounded-sm transition-colors cursor-pointer"
                title="View in full high-resolution lightbox"
                aria-label={`View ${slide.title} in lightbox`}
              >
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Status & Subtle Social Bar (Reference Composition) */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-500 border-t border-neutral-900/60">
        {/* Social Icons matching reference bottom-left */}
        <div className="flex items-center gap-4 text-neutral-400">
          <a
            href="https://discord.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#D6FF3F] transition-colors"
            aria-label="Discord Atelier Noir"
          >
            <span className="font-mono text-xs">Discord</span>
          </a>
          <span>·</span>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#D6FF3F] transition-colors"
            aria-label="Instagram Atelier Noir"
          >
            <span className="font-mono text-xs">Instagram</span>
          </a>
          <span>·</span>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#D6FF3F] transition-colors"
            aria-label="LinkedIn Atelier Noir"
          >
            <span className="font-mono text-xs">LinkedIn</span>
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="flex items-center gap-2 text-[11px] text-neutral-400">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#D6FF3F]" />
          <span>SCROLL TO EXPLORE WORLD</span>
          <span className="font-mono">↓</span>
        </div>
      </div>
    </section>
  );
};
