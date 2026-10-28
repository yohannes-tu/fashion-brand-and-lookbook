import React, { useState } from 'react';
import { Eye, Sparkles, Filter } from 'lucide-react';
import { LOOKBOOK_DATA, COLLECTIONS_DATA } from '../data/fashionData';
import { LookItem, filterLooks } from '../utils/filterSort';

interface LookbookPageProps {
  onOpenLightbox: (look: LookItem) => void;
  savedLookIds: string[];
  onToggleInquiry: (lookId: string) => void;
}

export const LookbookPage: React.FC<LookbookPageProps> = ({
  onOpenLightbox,
  savedLookIds,
  onToggleInquiry,
}) => {
  const [activeCollectionId, setActiveCollectionId] = useState<string>('all');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = ['all', 'Outerwear', 'Bodysuit', 'Architectural', 'Tailoring', 'Accessories'];

  let filtered = filterLooks(LOOKBOOK_DATA, activeCollectionId);
  if (activeCategory !== 'all') {
    filtered = filtered.filter((l) => l.category === activeCategory);
  }

  return (
    <div className="pt-28 pb-24 bg-[#08090B] min-h-screen text-[#F2F0EA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14 border-b border-neutral-900 pb-10 space-y-4">
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#D6FF3F] block">
            VISUAL LOOK ARCHIVE
          </span>
          <h1 className="text-4xl sm:text-6xl font-syne font-extrabold tracking-tight">
            THE LOOKBOOK
          </h1>
          <p className="font-serif-luxury text-xl text-neutral-400 italic max-w-2xl">
            "A visual archive of individual forms, styling concepts, fabrics, and silhouettes."
          </p>
        </div>

        {/* Dual Filter Controls: Collection & Silhouette Category */}
        <div className="space-y-4 mb-12">
          {/* Collection Filter */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono text-neutral-500 uppercase mr-2">Collection:</span>
            <button
              onClick={() => setActiveCollectionId('all')}
              className={`px-3 py-1.5 text-xs font-mono uppercase tracking-wider rounded-sm transition-colors cursor-pointer ${
                activeCollectionId === 'all'
                  ? 'bg-[#D6FF3F] text-[#08090B] font-bold'
                  : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
              }`}
            >
              All Collections
            </button>
            {COLLECTIONS_DATA.map((col) => (
              <button
                key={col.id}
                onClick={() => setActiveCollectionId(col.id)}
                className={`px-3 py-1.5 text-xs font-mono uppercase tracking-wider rounded-sm transition-colors cursor-pointer ${
                  activeCollectionId === col.id
                    ? 'bg-[#D6FF3F] text-[#08090B] font-bold'
                    : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
                }`}
              >
                {col.title} ({col.season})
              </button>
            ))}
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono text-neutral-500 uppercase mr-2">Category:</span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1 text-xs font-mono uppercase tracking-wider rounded-sm transition-colors cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-white text-black font-bold'
                    : 'text-neutral-400 hover:text-white border border-neutral-850'
                }`}
              >
                {cat === 'all' ? 'All Silhouettes' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Lookbook Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((item, index) => {
            const isSaved = savedLookIds.includes(item.id);

            return (
              <div
                key={item.id}
                className="group relative bg-neutral-950 border border-neutral-850 rounded-sm overflow-hidden flex flex-col justify-between hover:border-neutral-700 transition-colors"
              >
                <div
                  onClick={() => onOpenLightbox(item)}
                  className="relative aspect-3/4 w-full bg-neutral-900 overflow-hidden cursor-pointer"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-75 group-hover:opacity-40 transition-opacity" />

                  <div className="absolute top-3 left-3 bg-black/80 px-2 py-0.5 text-[10px] font-mono text-[#D6FF3F] rounded-sm uppercase tracking-widest">
                    {item.number}
                  </div>

                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="p-2 bg-neutral-900/90 text-white rounded-sm border border-neutral-700 flex items-center justify-center">
                      <Eye className="w-4 h-4 text-[#D6FF3F]" />
                    </span>
                  </div>
                </div>

                <div className="p-4 space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 block">
                        {item.collectionName}
                      </span>
                      <h3
                        onClick={() => onOpenLightbox(item)}
                        className="text-sm font-syne font-bold text-white hover:text-[#D6FF3F] transition-colors cursor-pointer truncate"
                      >
                        {item.title}
                      </h3>
                    </div>

                    <button
                      onClick={() => onToggleInquiry(item.id)}
                      className={`p-1.5 rounded-sm border transition-colors cursor-pointer ${
                        isSaved
                          ? 'bg-[#D6FF3F] text-[#08090B] border-[#D6FF3F]'
                          : 'border-neutral-800 text-neutral-400 hover:text-white'
                      }`}
                      title={isSaved ? 'Inquired' : 'Inquire on Look'}
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <p className="text-xs text-neutral-400 font-light line-clamp-2">
                    {item.silhouette}
                  </p>
                  <p className="text-[11px] font-mono text-neutral-500 truncate pt-1">
                    {item.fabric}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
