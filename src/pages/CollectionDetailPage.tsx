import React from 'react';
import { ArrowLeft, ArrowRight, Sparkles, Layers, ShieldCheck } from 'lucide-react';
import { COLLECTIONS_DATA, LOOKBOOK_DATA } from '../data/fashionData';
import { LookItem } from '../utils/filterSort';

interface CollectionDetailPageProps {
  collectionId: string;
  onBack: () => void;
  onSelectLook: (look: LookItem) => void;
  onSelectCollection: (id: string) => void;
  onContactCTA: () => void;
}

export const CollectionDetailPage: React.FC<CollectionDetailPageProps> = ({
  collectionId,
  onBack,
  onSelectLook,
  onSelectCollection,
  onContactCTA,
}) => {
  const collection =
    COLLECTIONS_DATA.find((c) => c.id === collectionId) || COLLECTIONS_DATA[0];

  const collectionLooks = LOOKBOOK_DATA.filter(
    (l) => l.collectionId === collection.id
  );

  const otherCollections = COLLECTIONS_DATA.filter((c) => c.id !== collection.id);

  return (
    <div className="pt-28 pb-24 bg-[#08090B] min-h-screen text-[#F2F0EA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-400 hover:text-[#D6FF3F] transition-colors mb-8 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Collections</span>
        </button>

        {/* Collection Hero Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20 pb-16 border-b border-neutral-900">
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#D6FF3F]">
                COLLECTION {collection.number}
              </span>
              <span className="text-neutral-600 font-mono">/</span>
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
                {collection.season} {collection.year}
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-syne font-extrabold tracking-tight">
              {collection.title}
            </h1>

            <p className="font-serif-luxury text-xl sm:text-2xl text-neutral-300 italic">
              "{collection.tagline}"
            </p>

            <p className="text-sm text-neutral-300 font-light leading-relaxed">
              {collection.description}
            </p>

            <div className="pt-4 border-t border-neutral-850">
              <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-400 block mb-2">
                Substrate Composition:
              </span>
              <div className="flex flex-wrap gap-2">
                {collection.materials.map((m) => (
                  <span
                    key={m}
                    className="text-xs font-mono px-3 py-1 bg-neutral-900 border border-neutral-800 text-neutral-300 rounded-sm"
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative aspect-4/5 w-full bg-neutral-900 rounded-sm overflow-hidden border border-neutral-800 shadow-2xl">
              <img
                src={collection.heroImage}
                alt={collection.title}
                className="w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <blockquote className="font-serif-luxury italic text-base text-neutral-200">
                  "{collection.statement}"
                </blockquote>
              </div>
            </div>
          </div>
        </div>

        {/* Looks in this Collection */}
        <div className="mb-24">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#D6FF3F] block mb-2">
                LOOKBOOK ARCHIVE
              </span>
              <h2 className="text-3xl font-syne font-bold text-white">
                SILHOUETTES & DETAILS
              </h2>
            </div>
            <p className="text-xs font-mono text-neutral-500 uppercase">
              Click any look for full high-resolution monograph
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {collectionLooks.map((look) => (
              <div
                key={look.id}
                onClick={() => onSelectLook(look)}
                className="group cursor-pointer bg-neutral-950 border border-neutral-850 rounded-sm overflow-hidden flex flex-col justify-between hover:border-neutral-700 transition-colors"
              >
                <div className="relative aspect-3/4 w-full bg-neutral-900 overflow-hidden">
                  <img
                    src={look.image}
                    alt={look.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-70 group-hover:opacity-40 transition-opacity" />
                  <div className="absolute top-3 left-3 bg-black/80 px-2 py-0.5 text-[10px] font-mono text-[#D6FF3F] rounded-sm uppercase tracking-widest">
                    {look.number}
                  </div>
                </div>

                <div className="p-5 space-y-2">
                  <h3 className="text-lg font-syne font-bold text-white group-hover:text-[#D6FF3F] transition-colors truncate">
                    {look.title}
                  </h3>
                  <p className="text-xs text-neutral-400 font-light line-clamp-2">
                    {look.silhouette}
                  </p>
                  <p className="text-[11px] font-mono text-neutral-500 truncate pt-1">
                    {look.fabric}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Inquiry CTA */}
        <div className="p-10 bg-neutral-950 border border-neutral-800 rounded-sm mb-20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#D6FF3F] block mb-1">
              COMMISSION INQUIRY
            </span>
            <h3 className="text-2xl font-syne font-bold text-white">
              Interested in styling or acquiring from {collection.title}?
            </h3>
            <p className="text-xs text-neutral-400 font-light mt-1">
              Our atelier works directly with fashion directors, stylists, and private collectors.
            </p>
          </div>
          <button
            onClick={onContactCTA}
            className="px-6 py-3 text-xs font-mono uppercase tracking-widest text-[#08090B] bg-[#D6FF3F] hover:bg-white font-bold rounded-sm transition-colors cursor-pointer shrink-0"
          >
            Initiate Atelier Dialogue
          </button>
        </div>

        {/* Related Collections */}
        <div>
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-neutral-500 block mb-6">
            OTHER ARCHIVED SEASONS
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {otherCollections.map((col) => (
              <div
                key={col.id}
                onClick={() => onSelectCollection(col.id)}
                className="p-6 bg-neutral-950 border border-neutral-850 hover:border-neutral-700 rounded-sm cursor-pointer flex items-center justify-between group transition-colors"
              >
                <div>
                  <span className="text-[10px] font-mono text-[#D6FF3F] uppercase tracking-wider block">
                    COLLECTION {col.number} · {col.season}
                  </span>
                  <h4 className="text-xl font-syne font-bold text-white group-hover:text-[#D6FF3F] transition-colors">
                    {col.title}
                  </h4>
                  <p className="text-xs text-neutral-400 font-light truncate max-w-sm">
                    {col.tagline}
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-neutral-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
