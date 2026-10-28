import React, { useState, useEffect } from 'react';
import { Search, X, ArrowRight, Grid, Layers, FileText } from 'lucide-react';
import { COLLECTIONS_DATA, LOOKBOOK_DATA, JOURNAL_ARTICLES } from '../data/fashionData';
import { LookItem } from '../utils/filterSort';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectCollection: (id: string) => void;
  onSelectLook: (look: LookItem) => void;
  onSelectArticle: (articleId: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectCollection,
  onSelectLook,
  onSelectArticle,
}) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const q = query.toLowerCase().trim();

  const matchingCollections = q
    ? COLLECTIONS_DATA.filter(
        (c) =>
          c.title.toLowerCase().includes(q) ||
          c.description.toLowerCase().includes(q) ||
          c.materials.some((m) => m.toLowerCase().includes(q))
      )
    : [];

  const matchingLooks = q
    ? LOOKBOOK_DATA.filter(
        (l) =>
          l.title.toLowerCase().includes(q) ||
          l.silhouette.toLowerCase().includes(q) ||
          l.fabric.toLowerCase().includes(q) ||
          l.category.toLowerCase().includes(q)
      )
    : LOOKBOOK_DATA.slice(0, 3); // initial suggestions

  const matchingArticles = q
    ? JOURNAL_ARTICLES.filter(
        (a) =>
          a.title.toLowerCase().includes(q) ||
          a.excerpt.toLowerCase().includes(q) ||
          a.category.toLowerCase().includes(q)
      )
    : [];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Search Atelier Noir archives"
      className="fixed inset-0 z-50 bg-[#08090B]/90 backdrop-blur-xl flex flex-col items-center pt-20 px-4 animate-fade-in"
    >
      <div className="w-full max-w-2xl bg-neutral-950 border border-neutral-800 rounded-sm shadow-2xl overflow-hidden flex flex-col">
        {/* Search input header */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-neutral-800">
          <Search className="w-5 h-5 text-[#D6FF3F] shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search silhouettes, fabrics, collections, or editorial essays..."
            className="w-full bg-transparent text-sm sm:text-base text-white placeholder-neutral-500 focus:outline-none"
          />
          <button
            onClick={onClose}
            aria-label="Close search"
            className="p-1 text-neutral-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Body */}
        <div className="p-6 max-h-[60vh] overflow-y-auto space-y-6">
          {q && matchingCollections.length === 0 && matchingLooks.length === 0 && matchingArticles.length === 0 && (
            <div className="text-center py-8 text-neutral-500 font-mono text-xs">
              No matching archive records found for "{query}".
            </div>
          )}

          {/* Collections results */}
          {matchingCollections.length > 0 && (
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#D6FF3F] block mb-2">
                COLLECTIONS
              </span>
              <div className="space-y-2">
                {matchingCollections.map((col) => (
                  <button
                    key={col.id}
                    onClick={() => {
                      onSelectCollection(col.id);
                      onClose();
                    }}
                    className="w-full text-left p-3 rounded-sm bg-neutral-900/60 hover:bg-neutral-900 border border-neutral-800 flex items-center justify-between group transition-colors"
                  >
                    <div>
                      <div className="font-syne font-bold text-white group-hover:text-[#D6FF3F] text-sm">
                        {col.title} ({col.season} {col.year})
                      </div>
                      <div className="text-xs text-neutral-400 font-light truncate max-w-md">
                        {col.description}
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-neutral-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Looks results */}
          {matchingLooks.length > 0 && (
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#D6FF3F] block mb-2">
                {q ? 'LOOKBOOK RESULTS' : 'RECOMMENDED ARCHIVE LOOKS'}
              </span>
              <div className="space-y-2">
                {matchingLooks.map((look) => (
                  <button
                    key={look.id}
                    onClick={() => {
                      onSelectLook(look);
                      onClose();
                    }}
                    className="w-full text-left p-2.5 rounded-sm bg-neutral-900/60 hover:bg-neutral-900 border border-neutral-800 flex items-center gap-4 group transition-colors"
                  >
                    <img
                      src={look.image}
                      alt={look.title}
                      className="w-12 h-16 object-cover rounded-sm shrink-0"
                      referrerPolicy="no-referrer"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[10px] text-[#D6FF3F]">
                          {look.number}
                        </span>
                        <h4 className="font-syne font-bold text-white group-hover:text-[#D6FF3F] text-sm truncate">
                          {look.title}
                        </h4>
                      </div>
                      <p className="text-xs text-neutral-400 truncate">{look.silhouette}</p>
                      <p className="text-[11px] font-mono text-neutral-500 truncate">{look.fabric}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-neutral-500 group-hover:text-white group-hover:translate-x-1 transition-all shrink-0" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Journal articles */}
          {matchingArticles.length > 0 && (
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#D6FF3F] block mb-2">
                EDITORIAL ESSAYS
              </span>
              <div className="space-y-2">
                {matchingArticles.map((article) => (
                  <button
                    key={article.id}
                    onClick={() => {
                      onSelectArticle(article.id);
                      onClose();
                    }}
                    className="w-full text-left p-3 rounded-sm bg-neutral-900/60 hover:bg-neutral-900 border border-neutral-800 flex items-center justify-between group transition-colors"
                  >
                    <div>
                      <div className="font-syne font-bold text-white group-hover:text-[#D6FF3F] text-sm">
                        {article.title}
                      </div>
                      <div className="text-xs text-neutral-400 font-light truncate max-w-md">
                        {article.excerpt}
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-neutral-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="px-5 py-3 bg-neutral-950 border-t border-neutral-900 flex justify-between items-center text-[11px] font-mono text-neutral-500">
          <span>Search query active</span>
          <span>ESC to close</span>
        </div>
      </div>
    </div>
  );
};
