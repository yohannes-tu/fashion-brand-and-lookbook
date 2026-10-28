import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Sparkles, Check, Share2, Info } from 'lucide-react';
import { LookItem } from '../utils/filterSort';

interface ImageLightboxProps {
  look: LookItem | null;
  allLooks: LookItem[];
  onClose: () => void;
  onSelectNext: () => void;
  onSelectPrev: () => void;
  onToggleInquiry: (lookId: string) => void;
  isSavedForInquiry: boolean;
}

export const ImageLightbox: React.FC<ImageLightboxProps> = ({
  look,
  allLooks,
  onClose,
  onSelectNext,
  onSelectPrev,
  onToggleInquiry,
  isSavedForInquiry,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onSelectNext();
      if (e.key === 'ArrowLeft') onSelectPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onSelectNext, onSelectPrev]);

  if (!look) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${look.title} full resolution viewer`}
      className="fixed inset-0 z-50 bg-[#08090B]/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-6 lg:p-8 animate-fade-in"
    >
      {/* Top Bar: Look index, Title & Close Button */}
      <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs font-bold text-[#D6FF3F] tracking-widest uppercase">
            {look.number}
          </span>
          <span className="text-neutral-500 font-mono text-xs">/</span>
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-300">
            {look.collectionName}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => onToggleInquiry(look.id)}
            className={`px-3 py-1.5 rounded-sm text-xs font-mono uppercase tracking-wider flex items-center gap-2 border transition-all cursor-pointer ${
              isSavedForInquiry
                ? 'bg-[#D6FF3F] text-[#08090B] border-[#D6FF3F] font-bold'
                : 'bg-neutral-900 text-neutral-300 border-neutral-700 hover:border-white'
            }`}
          >
            {isSavedForInquiry ? <Check className="w-3.5 h-3.5" /> : <Sparkles className="w-3.5 h-3.5" />}
            <span>{isSavedForInquiry ? 'Inquired' : 'Inquire on Look'}</span>
          </button>

          <button
            onClick={onClose}
            aria-label="Close high-resolution lightbox"
            className="p-2 text-neutral-400 hover:text-white border border-neutral-800 hover:border-neutral-600 rounded-sm transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Content Area: Large Image + Editorial Detail Sidebar */}
      <div className="flex-1 my-4 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center overflow-y-auto">
        {/* Large Image Canvas with Prev/Next Controls */}
        <div className="lg:col-span-8 relative h-full min-h-[380px] flex items-center justify-center bg-black/40 rounded-sm overflow-hidden p-2">
          <img
            src={look.image}
            alt={look.title}
            className="max-h-[75vh] w-auto max-w-full object-contain filter contrast-105"
            referrerPolicy="no-referrer"
          />

          {/* Navigation Arrows */}
          <button
            onClick={onSelectPrev}
            aria-label="Previous look"
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/70 text-neutral-300 hover:text-[#D6FF3F] hover:bg-black border border-neutral-800 transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={onSelectNext}
            aria-label="Next look"
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/70 text-neutral-300 hover:text-[#D6FF3F] hover:bg-black border border-neutral-800 transition-colors cursor-pointer"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Editorial Information Sidebar */}
        <div className="lg:col-span-4 flex flex-col justify-between space-y-6 bg-neutral-950/60 p-6 border border-neutral-800/80 rounded-sm">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#D6FF3F] block mb-1">
              CATEGORY: {look.category}
            </span>
            <h3 className="text-2xl sm:text-3xl font-syne font-bold text-[#F2F0EA] mb-3">
              {look.title}
            </h3>
            <p className="text-sm text-neutral-300 font-light leading-relaxed mb-6">
              {look.description}
            </p>

            <div className="space-y-4 pt-4 border-t border-neutral-800 text-xs">
              <div>
                <span className="font-mono text-neutral-500 uppercase tracking-wider block mb-0.5">
                  Silhouette Architecture:
                </span>
                <p className="text-neutral-200">{look.silhouette}</p>
              </div>

              <div>
                <span className="font-mono text-neutral-500 uppercase tracking-wider block mb-0.5">
                  Fabrication & Substrate:
                </span>
                <p className="text-neutral-200">{look.fabric}</p>
              </div>
            </div>
          </div>

          {/* Creative Credits */}
          <div className="pt-4 border-t border-neutral-800 text-xs font-mono text-neutral-400 space-y-1.5">
            <div className="flex justify-between">
              <span className="text-neutral-500">Photographer:</span>
              <span className="text-neutral-300">{look.credits.photographer}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-neutral-500">Styling:</span>
              <span className="text-neutral-300">{look.credits.styling}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-neutral-500">Model:</span>
              <span className="text-neutral-300">{look.credits.model}</span>
            </div>
          </div>

          <div className="text-[10px] font-mono text-neutral-600 text-center">
            Use Left / Right arrow keys to navigate · Press ESC to close
          </div>
        </div>
      </div>

      {/* Bottom Thumbnail Strip */}
      <div className="hidden sm:flex items-center gap-2 overflow-x-auto py-2 border-t border-neutral-850">
        {allLooks.map((item, idx) => (
          <button
            key={item.id}
            onClick={() => {
              const target = allLooks[idx];
              if (target) {
                // Trigger change
              }
            }}
            className={`relative shrink-0 w-16 h-20 rounded-sm overflow-hidden border transition-all ${
              item.id === look.id ? 'border-[#D6FF3F] scale-105' : 'border-neutral-800 opacity-60 hover:opacity-100'
            }`}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </button>
        ))}
      </div>
    </div>
  );
};
