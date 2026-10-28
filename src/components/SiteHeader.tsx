import React, { useState, useEffect } from 'react';
import { Search, Menu, X, Volume2, VolumeX, Sparkles, Grid } from 'lucide-react';
import { BRAND_IDENTITY } from '../data/fashionData';

interface SiteHeaderProps {
  currentView: string;
  onNavigate: (view: string, detailId?: string) => void;
  onOpenSearch: () => void;
  savedLooksCount: number;
  onOpenSavedLooks: () => void;
  isAudioPlaying: boolean;
  onToggleAudio: () => void;
}

export const SiteHeader: React.FC<SiteHeaderProps> = ({
  currentView,
  onNavigate,
  onOpenSearch,
  savedLooksCount,
  onOpenSavedLooks,
  isAudioPlaying,
  onToggleAudio,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'collections', label: 'Collections' },
    { id: 'lookbook', label: 'Lookbook' },
    { id: 'studio', label: 'Studio' },
    { id: 'journal', label: 'Journal' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#08090B]/90 backdrop-blur-md border-b border-neutral-800/80 py-3'
            : 'bg-gradient-to-b from-[#08090B]/95 via-[#08090B]/60 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-6">
            {/* Zone 1: Brand Wordmark with reference-inspired collection shortcut */}
            <div className="flex items-center gap-4 shrink-0">
              <button
                onClick={() => onNavigate('home')}
                className="text-left group flex items-baseline gap-2 cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D6FF3F]"
                aria-label="ATELIER NØIR Home"
              >
                <span className="font-syne font-bold text-lg sm:text-xl tracking-[0.2em] text-[#F2F0EA] group-hover:text-[#D6FF3F] transition-colors whitespace-nowrap">
                  {BRAND_IDENTITY.name}
                </span>
                <span className="hidden xl:inline text-[9px] font-mono text-neutral-500 tracking-widest uppercase">
                  HAUTE COUTURE
                </span>
              </button>

              <button
                onClick={() => onNavigate('collections')}
                className="hidden lg:flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider text-neutral-400 hover:text-white border border-neutral-800 hover:border-neutral-700 transition-colors rounded-sm"
                title="Browse collections"
              >
                <Grid className="w-3 h-3 text-[#D6FF3F]" />
                <span>Archive</span>
              </button>
            </div>

            {/* Zone 2: Reference Star Reticle Center Anchor & Clean Nav Links */}
            <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-xs font-mono uppercase tracking-widest text-neutral-400">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => onNavigate(link.id)}
                  className={`relative py-1 transition-colors whitespace-nowrap hover:text-white cursor-pointer ${
                    currentView === link.id
                      ? 'text-[#F2F0EA] font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:bg-[#D6FF3F]'
                      : 'text-neutral-400'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Zone 3: Interactive Affordances (Search, Audio, Inquired Looks Count, Mobile Toggle) */}
            <div className="flex items-center gap-3 sm:gap-4 shrink-0">
              {/* Search Button */}
              <button
                onClick={onOpenSearch}
                aria-label="Search collections and looks"
                className="flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white transition-colors p-1.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D6FF3F]"
              >
                <Search className="w-4 h-4" />
                <span className="hidden sm:inline font-mono text-[11px] uppercase tracking-wider">Search</span>
              </button>

              {/* Sound Ambience Toggle */}
              <button
                onClick={onToggleAudio}
                aria-label={isAudioPlaying ? 'Mute ambient runway sound' : 'Play ambient runway sound'}
                className="text-neutral-400 hover:text-[#D6FF3F] transition-colors p-1.5"
                title={isAudioPlaying ? 'Mute ambient runway sound' : 'Enable ambient sound'}
              >
                {isAudioPlaying ? (
                  <Volume2 className="w-4 h-4 text-[#D6FF3F]" />
                ) : (
                  <VolumeX className="w-4 h-4" />
                )}
              </button>

              {/* Saved Looks / Inquiry Cart Button */}
              <button
                onClick={onOpenSavedLooks}
                aria-label={`View ${savedLooksCount} selected looks for inquiry`}
                className="relative flex items-center gap-1.5 px-3 py-1.5 border border-neutral-800 hover:border-neutral-700 bg-neutral-900/60 rounded-sm text-xs font-mono text-[#F2F0EA] hover:text-[#D6FF3F] transition-colors"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#D6FF3F]" />
                <span className="hidden sm:inline text-[11px] tracking-wider uppercase">Inquiry</span>
                <span className="tabular-nums text-[11px] font-bold text-[#D6FF3F]">
                  {savedLooksCount}
                </span>
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle navigation menu"
                aria-expanded={mobileMenuOpen}
                className="md:hidden text-neutral-300 hover:text-white p-1.5 focus-visible:outline-none"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Full-screen Mobile Menu */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-[#08090B] flex flex-col justify-between p-6 md:hidden animate-fade-in"
        >
          <div className="flex items-center justify-between pb-6 border-b border-neutral-900">
            <span className="font-syne font-bold text-lg tracking-[0.2em] text-[#F2F0EA]">
              {BRAND_IDENTITY.name}
            </span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
              className="p-2 text-neutral-400 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="flex flex-col gap-6 my-auto">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  onNavigate(link.id);
                  setMobileMenuOpen(false);
                }}
                className={`text-left text-2xl font-syne font-bold tracking-wider transition-colors ${
                  currentView === link.id ? 'text-[#D6FF3F]' : 'text-neutral-300 hover:text-white'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="pt-6 border-t border-neutral-900 flex flex-col gap-4 text-xs font-mono text-neutral-500">
            <div className="flex justify-between items-center">
              <span>{BRAND_IDENTITY.established}</span>
              <button
                onClick={onToggleAudio}
                className="text-[#D6FF3F] underline underline-offset-4"
              >
                {isAudioPlaying ? 'Mute Ambience' : 'Play Ambience'}
              </button>
            </div>
            <p className="text-[11px] text-neutral-600">
              Form. Future. Identity. Avant-garde fashion architecture.
            </p>
          </div>
        </div>
      )}
    </>
  );
};
