import React from 'react';
import { ArrowRight, Layers, Sparkles } from 'lucide-react';
import { COLLECTIONS_DATA } from '../data/fashionData';

interface FeaturedCollectionProps {
  onViewCollection: (collectionId: string) => void;
}

export const FeaturedCollection: React.FC<FeaturedCollectionProps> = ({ onViewCollection }) => {
  const collection = COLLECTIONS_DATA[0]; // NOCTURNE / 001

  return (
    <section id="featured-collection" className="py-24 bg-[#08090B] border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#D6FF3F] block mb-2">
              FEATURED RELEASE
            </span>
            <h2 className="text-3xl sm:text-5xl font-syne font-bold text-[#F2F0EA] tracking-tight">
              THE LATEST FORM
            </h2>
          </div>
          <p className="font-serif-luxury text-lg text-neutral-400 italic max-w-md">
            "A study in silhouette, movement, and material."
          </p>
        </div>

        {/* Asymmetrical Editorial Magazine Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Dominant Portrait Image */}
          <div className="lg:col-span-7 group relative overflow-hidden bg-neutral-900 rounded-sm border border-neutral-800">
            <div className="aspect-3/4 w-full overflow-hidden">
              <img
                src={collection.secondaryImage}
                alt="The Architect of Shadows - Nocturne Collection"
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#08090B] via-transparent to-transparent opacity-80" />
            
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#D6FF3F] block mb-1">
                KEY PIECE · {collection.number}
              </span>
              <h3 className="text-2xl font-syne font-bold text-white mb-2">
                The Architect of Shadows
              </h3>
              <p className="text-sm text-neutral-300 font-light max-w-lg">
                Cantilevered pleats structured from heavy carbon gabardine, designed to envelope the human silhouette.
              </p>
            </div>
          </div>

          {/* Secondary Editorial Composition & Information */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            {/* Collection Metadata Box */}
            <div className="p-8 bg-neutral-950/80 border border-neutral-800 rounded-sm space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
                <span className="text-xs font-mono uppercase tracking-widest text-neutral-500">
                  SEASON // {collection.year}
                </span>
                <span className="text-xs font-mono text-[#D6FF3F] font-bold">
                  {collection.season}
                </span>
              </div>

              <div>
                <span className="text-xs font-mono tracking-widest uppercase text-neutral-400 block mb-1">
                  COLLECTION {collection.number}
                </span>
                <h3 className="text-3xl font-syne font-bold text-[#F2F0EA] mb-3">
                  {collection.title}
                </h3>
                <p className="text-sm text-neutral-300 font-light leading-relaxed mb-4">
                  {collection.description}
                </p>
                <blockquote className="font-serif-luxury italic text-base text-neutral-400 pl-3 border-l border-[#D6FF3F]/50">
                  "{collection.statement}"
                </blockquote>
              </div>

              {/* Material Palette */}
              <div className="pt-4 border-t border-neutral-900">
                <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-400 block mb-2">
                  MATERIAL ARCHITECTURE:
                </span>
                <div className="flex flex-wrap gap-2">
                  {collection.materials.map((mat) => (
                    <span
                      key={mat}
                      className="text-xs font-mono px-2.5 py-1 bg-neutral-900 border border-neutral-800 text-neutral-300 rounded-sm"
                    >
                      {mat}
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={() => onViewCollection(collection.id)}
                className="w-full py-3 text-xs font-mono uppercase tracking-widest text-[#08090B] bg-[#D6FF3F] hover:bg-white transition-colors font-bold rounded-sm flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>VIEW FULL COLLECTION</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Close-up Material Study Thumbnail */}
            <div className="relative aspect-16/9 overflow-hidden bg-neutral-900 rounded-sm border border-neutral-800 group">
              <img
                src={collection.detailImage}
                alt="Nocturne Textile Study"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
              <div className="absolute bottom-3 left-4 text-xs font-mono text-neutral-300">
                <span className="text-[#D6FF3F]">DETAIL // </span>
                <span>Tactile Micro-Weave Examination</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
