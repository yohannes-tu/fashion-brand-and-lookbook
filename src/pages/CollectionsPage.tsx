import React, { useState } from 'react';
import { ArrowRight, Filter, ArrowUpDown } from 'lucide-react';
import { COLLECTIONS_DATA } from '../data/fashionData';
import { filterCollections } from '../utils/filterSort';

interface CollectionsPageProps {
  onSelectCollection: (id: string) => void;
}

export const CollectionsPage: React.FC<CollectionsPageProps> = ({ onSelectCollection }) => {
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [sortOrder, setSortOrder] = useState<'newest' | 'oldest'>('newest');

  const categories = [
    { id: 'all', label: 'All Seasons' },
    { id: 'Autumn-Winter', label: 'Autumn–Winter' },
    { id: 'Spring-Summer', label: 'Spring–Summer' },
    { id: 'Experimental / Concept', label: 'Experimental / Concept' },
  ];

  const collections = filterCollections(COLLECTIONS_DATA, categoryFilter, sortOrder);

  return (
    <div className="pt-28 pb-24 bg-[#08090B] min-h-screen text-[#F2F0EA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14 space-y-4 border-b border-neutral-900 pb-10">
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#D6FF3F] block">
            HISTORICAL & CURRENT ARCHIVE
          </span>
          <h1 className="text-4xl sm:text-6xl font-syne font-extrabold tracking-tight">
            COLLECTIONS
          </h1>
          <p className="font-serif-luxury text-xl text-neutral-400 italic max-w-2xl">
            "Every season is a structural inquiry into materials, gravity, and the human contour."
          </p>
        </div>

        {/* Filter & Sort Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-12 p-3 bg-neutral-950 border border-neutral-850 rounded-sm">
          {/* Category Filter */}
          <div className="flex flex-wrap items-center gap-1.5">
            <Filter className="w-3.5 h-3.5 text-neutral-500 mr-1 hidden sm:inline" />
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setCategoryFilter(cat.id)}
                className={`px-3 py-1.5 text-xs font-mono uppercase tracking-wider rounded-sm transition-colors cursor-pointer ${
                  categoryFilter === cat.id
                    ? 'bg-[#F2F0EA] text-[#08090B] font-bold'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Sort Order Toggle */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-neutral-500 uppercase">Sort:</span>
            <button
              onClick={() => setSortOrder(sortOrder === 'newest' ? 'oldest' : 'newest')}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-neutral-900 text-xs font-mono uppercase tracking-wider text-neutral-300 hover:text-white border border-neutral-800 rounded-sm cursor-pointer"
            >
              <ArrowUpDown className="w-3.5 h-3.5 text-[#D6FF3F]" />
              <span>{sortOrder === 'newest' ? 'Newest First' : 'Oldest First'}</span>
            </button>
          </div>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((col) => (
            <div
              key={col.id}
              onClick={() => onSelectCollection(col.id)}
              className="group cursor-pointer bg-neutral-950 border border-neutral-850 rounded-sm overflow-hidden flex flex-col justify-between hover:border-neutral-700 transition-all duration-300"
            >
              <div className="relative aspect-4/5 w-full bg-neutral-900 overflow-hidden">
                <img
                  src={col.heroImage}
                  alt={col.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                <div className="absolute top-4 left-4 bg-black/80 px-2.5 py-1 text-[11px] font-mono text-[#D6FF3F] uppercase tracking-widest rounded-sm">
                  COLLECTION {col.number}
                </div>

                <div className="absolute top-4 right-4 bg-black/80 px-2.5 py-1 text-[11px] font-mono text-white uppercase tracking-widest rounded-sm">
                  {col.year}
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider block mb-1">
                    {col.season}
                  </span>
                  <h2 className="text-2xl font-syne font-bold text-white group-hover:text-[#D6FF3F] transition-colors">
                    {col.title}
                  </h2>
                </div>

                <p className="text-xs text-neutral-400 font-light leading-relaxed">
                  {col.description}
                </p>

                <div className="pt-4 border-t border-neutral-900 flex items-center justify-between text-xs font-mono text-[#D6FF3F]">
                  <span>EXPLORE LOOKBOOK & CONCEPT</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
