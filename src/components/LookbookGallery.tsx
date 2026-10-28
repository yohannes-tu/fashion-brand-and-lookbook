import React, { useState } from 'react';
import { Eye, ArrowUpRight, Sparkles } from 'lucide-react';
import { LOOKBOOK_DATA } from '../data/fashionData';
import { LookItem } from '../utils/filterSort';

interface LookbookGalleryProps {
  onOpenLightbox: (look: LookItem) => void;
  savedLookIds: string[];
  onToggleInquiry: (lookId: string) => void;
}

export const LookbookGallery: React.FC<LookbookGalleryProps> = ({
  onOpenLightbox,
  savedLookIds,
  onToggleInquiry,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Looks' },
    { id: 'Outerwear', label: 'Outerwear' },
    { id: 'Bodysuit', label: 'Bodysuit' },
    { id: 'Architectural', label: 'Architectural' },
    { id: 'Tailoring', label: 'Tailoring' },
    { id: 'Accessories', label: 'Accessories' },
  ];

  const filteredLooks =
    selectedCategory === 'all'
      ? LOOKBOOK_DATA
      : LOOKBOOK_DATA.filter((item) => item.category === selectedCategory);

  return (
    <section id="lookbook-gallery" className="py-24 bg-[#08090B] border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading & Category Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#D6FF3F] block mb-2">
              LOOKBOOK ARCHIVE
            </span>
            <h2 className="text-3xl sm:text-5xl font-syne font-bold text-[#F2F0EA] tracking-tight">
              THE LOOKBOOK
            </h2>
            <p className="font-serif-luxury text-lg text-neutral-400 italic mt-2">
              "One collection. Multiple perspectives."
            </p>
          </div>

          {/* Functional Category Filter Segmented Controls */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-neutral-900/80 border border-neutral-800 rounded-sm">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-mono uppercase tracking-wider rounded-sm transition-colors cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#F2F0EA] text-[#08090B] font-bold shadow-sm'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Varied Editorial Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredLooks.map((item, index) => {
            const isSaved = savedLookIds.includes(item.id);
            // Give varied vertical rhythms
            const isTall = index % 3 === 0;

            return (
              <div
                key={item.id}
                className={`group relative bg-neutral-950 border border-neutral-850 rounded-sm overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-neutral-700 ${
                  isTall ? 'sm:row-span-2' : ''
                }`}
              >
                {/* Look Image with Zoom on Hover */}
                <div
                  onClick={() => onOpenLightbox(item)}
                  className="relative w-full aspect-3/4 sm:aspect-auto sm:h-full min-h-[320px] overflow-hidden cursor-pointer"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                  {/* Corner Look Number Tag */}
                  <div className="absolute top-3 left-3 bg-neutral-950/80 backdrop-blur-sm border border-neutral-800 px-2.5 py-1 text-[10px] font-mono text-[#D6FF3F] tracking-widest uppercase rounded-sm">
                    {item.number}
                  </div>

                  {/* Hover Eye Icon Button */}
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="p-2 bg-neutral-900/90 text-white rounded-sm border border-neutral-700 flex items-center justify-center">
                      <Eye className="w-4 h-4 text-[#D6FF3F]" />
                    </span>
                  </div>
                </div>

                {/* Information Card Bottom */}
                <div className="p-4 bg-neutral-950/95 border-t border-neutral-900 space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 block">
                        {item.collectionName}
                      </span>
                      <h3
                        onClick={() => onOpenLightbox(item)}
                        className="text-sm font-syne font-bold text-[#F2F0EA] hover:text-[#D6FF3F] transition-colors cursor-pointer truncate"
                      >
                        {item.title}
                      </h3>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleInquiry(item.id);
                      }}
                      aria-label={`Save ${item.title} to inquiry`}
                      className={`p-1.5 rounded-sm border transition-colors cursor-pointer ${
                        isSaved
                          ? 'bg-[#D6FF3F] text-[#08090B] border-[#D6FF3F]'
                          : 'border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700'
                      }`}
                      title={isSaved ? 'Inquired' : 'Inquire on Look'}
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <p className="text-xs text-neutral-400 font-light line-clamp-2">
                    {item.silhouette}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
