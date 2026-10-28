import React, { useState } from 'react';
import { ArrowUpRight, X } from 'lucide-react';
import { SELECTED_WORKS, SelectedWork } from '../data/fashionData';

export const SelectedWorks: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [activeWorkModal, setActiveWorkModal] = useState<SelectedWork | null>(null);

  const categories = ['All', 'Campaign', 'Editorial', 'Collaboration', 'Art Direction', 'Styling'];

  const filtered =
    activeCategory === 'All'
      ? SELECTED_WORKS
      : SELECTED_WORKS.filter((w) => w.category === activeCategory);

  return (
    <>
      <section className="py-24 bg-[#08090B] border-t border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#D6FF3F] block mb-2">
                CURATED ARCHIVE
              </span>
              <h2 className="text-3xl sm:text-5xl font-syne font-bold text-[#F2F0EA] tracking-tight">
                SELECTED WORKS
              </h2>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 bg-neutral-900/80 border border-neutral-800 rounded-sm">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 text-xs font-mono uppercase tracking-wider rounded-sm transition-colors cursor-pointer ${
                    activeCategory === cat
                      ? 'bg-[#F2F0EA] text-[#08090B] font-bold shadow-sm'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Project List / Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((work) => (
              <div
                key={work.id}
                onClick={() => setActiveWorkModal(work)}
                className="group cursor-pointer bg-neutral-950 border border-neutral-850 rounded-sm overflow-hidden flex flex-col justify-between hover:border-neutral-700 transition-colors"
              >
                <div className="relative aspect-4/3 w-full bg-neutral-900 overflow-hidden">
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-70 group-hover:opacity-40 transition-opacity" />
                  <div className="absolute top-3 left-3 bg-black/80 px-2 py-0.5 text-[10px] font-mono text-[#D6FF3F] rounded-sm uppercase tracking-widest">
                    {work.category}
                  </div>
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity p-1.5 bg-neutral-900 rounded-sm text-white">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                <div className="p-6 space-y-2">
                  <div className="flex justify-between items-baseline text-xs font-mono text-neutral-500">
                    <span>{work.client}</span>
                    <span>{work.year}</span>
                  </div>
                  <h3 className="text-lg font-syne font-bold text-[#F2F0EA] group-hover:text-[#D6FF3F] transition-colors">
                    {work.title}
                  </h3>
                  <p className="text-xs text-neutral-400 font-light line-clamp-2">
                    {work.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Detail Modal */}
      {activeWorkModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-[#08090B]/95 backdrop-blur-xl flex flex-col justify-center items-center p-6 animate-fade-in"
        >
          <div className="bg-neutral-950 border border-neutral-800 rounded-sm max-w-2xl w-full p-6 sm:p-8 space-y-6">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#D6FF3F]">
                  {activeWorkModal.category} · {activeWorkModal.year}
                </span>
                <h3 className="text-2xl font-syne font-bold text-white mt-1">
                  {activeWorkModal.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveWorkModal(null)}
                aria-label="Close project modal"
                className="p-1.5 text-neutral-400 hover:text-white border border-neutral-800 rounded-sm"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="aspect-16/9 w-full bg-neutral-900 rounded-sm overflow-hidden border border-neutral-850">
              <img
                src={activeWorkModal.image}
                alt={activeWorkModal.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="space-y-3 text-sm text-neutral-300 font-light leading-relaxed">
              <p>{activeWorkModal.description}</p>
              <div className="pt-3 border-t border-neutral-850 flex justify-between text-xs font-mono text-neutral-400">
                <span>Commission / Client: <strong className="text-white">{activeWorkModal.client}</strong></span>
                <span>Role: <strong className="text-[#D6FF3F]">{activeWorkModal.role}</strong></span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
