import React, { useState } from 'react';
import { ArrowRight, Clock, Calendar, User, X } from 'lucide-react';
import { JOURNAL_ARTICLES, JournalArticle } from '../data/fashionData';

export const JournalPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeArticle, setActiveArticle] = useState<JournalArticle | null>(null);

  const categories = [
    { id: 'all', label: 'All Essays' },
    { id: 'Philosophy', label: 'Philosophy' },
    { id: 'Material Exploration', label: 'Material Science' },
    { id: 'Campaign Notes', label: 'Campaign Notes' },
  ];

  const filtered =
    selectedCategory === 'all'
      ? JOURNAL_ARTICLES
      : JOURNAL_ARTICLES.filter((a) => a.category === selectedCategory);

  return (
    <div className="pt-28 pb-24 bg-[#08090B] min-h-screen text-[#F2F0EA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14 border-b border-neutral-900 pb-10 space-y-4">
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#D6FF3F] block">
            CRITICAL DISCOURSE & RESEARCH
          </span>
          <h1 className="text-4xl sm:text-6xl font-syne font-extrabold tracking-tight">
            THE JOURNAL
          </h1>
          <p className="font-serif-luxury text-xl text-neutral-400 italic max-w-2xl">
            "Essays on garment architecture, responsive substrates, and post-human aesthetics."
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 text-xs font-mono uppercase tracking-wider rounded-sm transition-colors cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#F2F0EA] text-[#08090B] font-bold'
                  : 'bg-neutral-950 text-neutral-400 hover:text-white border border-neutral-850'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((article) => (
            <article
              key={article.id}
              onClick={() => setActiveArticle(article)}
              className="group cursor-pointer bg-neutral-950 border border-neutral-850 rounded-sm overflow-hidden flex flex-col justify-between hover:border-neutral-700 transition-colors"
            >
              <div className="relative aspect-16/10 w-full bg-neutral-900 overflow-hidden">
                <img
                  src={article.heroImage}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-80 group-hover:opacity-50 transition-opacity" />
                <div className="absolute top-3 left-3 bg-black/80 px-2 py-0.5 text-[10px] font-mono text-[#D6FF3F] rounded-sm uppercase tracking-widest">
                  {article.category}
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-center gap-3 text-xs font-mono text-neutral-500">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{article.date}</span>
                  </span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#D6FF3F]" />
                    <span>{article.readTime}</span>
                  </span>
                </div>

                <h3 className="text-xl font-syne font-bold text-white group-hover:text-[#D6FF3F] transition-colors leading-snug">
                  {article.title}
                </h3>

                <p className="text-xs text-neutral-400 font-light leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>

                <div className="pt-4 border-t border-neutral-900 flex items-center justify-between text-xs font-mono text-[#D6FF3F]">
                  <span>READ ESSAY</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Article Detail Reader Modal */}
      {activeArticle && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-[#08090B]/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-8 overflow-y-auto animate-fade-in"
        >
          <div className="max-w-3xl mx-auto w-full my-auto py-8">
            <div className="flex justify-between items-center pb-6 border-b border-neutral-800">
              <span className="text-xs font-mono uppercase tracking-widest text-[#D6FF3F]">
                {activeArticle.category} · {activeArticle.readTime}
              </span>
              <button
                onClick={() => setActiveArticle(null)}
                aria-label="Close article"
                className="p-1.5 text-neutral-400 hover:text-white border border-neutral-800 rounded-sm"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-8 space-y-8">
              <div>
                <h2 className="text-3xl sm:text-5xl font-syne font-bold text-white mb-4">
                  {activeArticle.title}
                </h2>
                <div className="flex items-center gap-4 text-xs font-mono text-neutral-400">
                  <span>Author: {activeArticle.author}</span>
                  <span>·</span>
                  <span>Published {activeArticle.date}</span>
                </div>
              </div>

              <div className="aspect-16/9 w-full bg-neutral-900 rounded-sm overflow-hidden border border-neutral-800">
                <img
                  src={activeArticle.heroImage}
                  alt={activeArticle.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <blockquote className="p-6 bg-neutral-950 border-l-2 border-[#D6FF3F] font-serif-luxury text-xl sm:text-2xl text-neutral-200 italic leading-relaxed">
                "{activeArticle.quote}"
              </blockquote>

              <div className="space-y-6 text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
                {activeArticle.content.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              <div className="pt-8 border-t border-neutral-850 flex justify-between items-center text-xs font-mono text-neutral-500">
                <span>ATELIER NØIR CRITICAL MONOGRAPH</span>
                <button
                  onClick={() => setActiveArticle(null)}
                  className="text-[#D6FF3F] underline cursor-pointer"
                >
                  Return to Journal Archive
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
