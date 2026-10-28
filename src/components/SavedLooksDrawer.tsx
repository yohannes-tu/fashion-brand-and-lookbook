import React from 'react';
import { X, Trash2, ArrowRight, Sparkles } from 'lucide-react';
import { LOOKBOOK_DATA } from '../data/fashionData';

interface SavedLooksDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  savedLookIds: string[];
  onRemoveLook: (lookId: string) => void;
  onProceedToInquiry: () => void;
}

export const SavedLooksDrawer: React.FC<SavedLooksDrawerProps> = ({
  isOpen,
  onClose,
  savedLookIds,
  onRemoveLook,
  onProceedToInquiry,
}) => {
  if (!isOpen) return null;

  const savedLooks = LOOKBOOK_DATA.filter((l) => savedLookIds.includes(l.id));

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Inquiry Portfolio Drawer"
      className="fixed inset-0 z-50 bg-[#08090B]/80 backdrop-blur-sm flex justify-end animate-fade-in"
    >
      <div className="w-full max-w-md bg-neutral-950 border-l border-neutral-800 h-full flex flex-col justify-between p-6 shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#D6FF3F]" />
            <h3 className="font-syne font-bold text-lg text-white">
              Inquiry Selection
            </h3>
            <span className="font-mono text-xs text-[#D6FF3F] tabular-nums font-bold">
              ({savedLooks.length})
            </span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close inquiry drawer"
            className="p-1.5 text-neutral-400 hover:text-white border border-neutral-800 rounded-sm"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* List of Looks */}
        <div className="flex-1 overflow-y-auto py-6 space-y-4">
          {savedLooks.length === 0 ? (
            <div className="text-center py-12 text-neutral-500 font-mono text-xs space-y-3">
              <p>Your curated inquiry selection is empty.</p>
              <p className="text-[11px] text-neutral-600">
                Click "Inquire on Look" in the hero carousel, lookbook, or collection view to assemble a commission portfolio.
              </p>
            </div>
          ) : (
            savedLooks.map((look) => (
              <div
                key={look.id}
                className="p-3 bg-neutral-900/60 border border-neutral-850 rounded-sm flex items-center gap-4"
              >
                <img
                  src={look.image}
                  alt={look.title}
                  className="w-14 h-18 object-cover rounded-sm shrink-0"
                  referrerPolicy="no-referrer"
                />
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] font-mono text-[#D6FF3F] uppercase block">
                    {look.number} · {look.collectionName}
                  </span>
                  <h4 className="font-syne font-bold text-white text-sm truncate">
                    {look.title}
                  </h4>
                  <p className="text-xs text-neutral-400 font-light truncate">
                    {look.silhouette}
                  </p>
                </div>
                <button
                  onClick={() => onRemoveLook(look.id)}
                  aria-label={`Remove ${look.title} from inquiry`}
                  className="p-1.5 text-neutral-500 hover:text-rose-400 transition-colors"
                  title="Remove look"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer actions */}
        <div className="pt-4 border-t border-neutral-850 space-y-3">
          <button
            disabled={savedLooks.length === 0}
            onClick={() => {
              onProceedToInquiry();
              onClose();
            }}
            className="w-full py-3 text-xs font-mono uppercase tracking-widest text-[#08090B] bg-[#D6FF3F] hover:bg-white font-bold rounded-sm transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:pointer-events-none"
          >
            <span>Proceed to Commission Inquiry</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <p className="text-[10px] font-mono text-neutral-500 text-center">
            Looks will be cited in your commission dossier.
          </p>
        </div>
      </div>
    </div>
  );
};
