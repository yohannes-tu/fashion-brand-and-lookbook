import React from 'react';
import { ArrowUp } from 'lucide-react';
import { BRAND_IDENTITY } from '../data/fashionData';

interface SiteFooterProps {
  onNavigate: (view: string) => void;
}

export const SiteFooter: React.FC<SiteFooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#08090B] border-t border-neutral-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Block */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-neutral-900">
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <h2 className="font-syne font-bold text-2xl tracking-[0.2em] text-[#F2F0EA]">
              {BRAND_IDENTITY.name}
            </h2>
            <p className="text-sm font-light text-neutral-400 max-w-sm leading-relaxed">
              An independent avant-garde fashion house exploring the architecture of the human form, responsive materials, and post-digital sovereignty.
            </p>
            <p className="text-xs font-mono text-[#D6FF3F] uppercase tracking-wider">
              {BRAND_IDENTITY.established}
            </p>
          </div>

          {/* Nav links */}
          <div className="md:col-span-3 space-y-3 font-mono text-xs uppercase tracking-wider">
            <span className="text-neutral-500 block mb-2 font-bold">Navigation</span>
            <div className="flex flex-col space-y-2">
              <button
                onClick={() => onNavigate('home')}
                className="text-left text-neutral-400 hover:text-white transition-colors cursor-pointer"
              >
                Home
              </button>
              <button
                onClick={() => onNavigate('collections')}
                className="text-left text-neutral-400 hover:text-white transition-colors cursor-pointer"
              >
                Collections Archive
              </button>
              <button
                onClick={() => onNavigate('lookbook')}
                className="text-left text-neutral-400 hover:text-white transition-colors cursor-pointer"
              >
                Lookbook Gallery
              </button>
              <button
                onClick={() => onNavigate('studio')}
                className="text-left text-neutral-400 hover:text-white transition-colors cursor-pointer"
              >
                Studio & Craft
              </button>
              <button
                onClick={() => onNavigate('journal')}
                className="text-left text-neutral-400 hover:text-white transition-colors cursor-pointer"
              >
                Editorial Journal
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="text-left text-neutral-400 hover:text-white transition-colors cursor-pointer"
              >
                Inquiries & Dialogue
              </button>
            </div>
          </div>

          {/* Social & Contact */}
          <div className="md:col-span-4 space-y-3 font-mono text-xs text-neutral-400">
            <span className="text-neutral-500 uppercase tracking-wider block mb-2 font-bold">
              Direct Contact
            </span>
            <p className="text-white">atelier@ateliernoir.paris</p>
            <p>14 Rue de Turenne, 75004 Paris</p>
            <p>Laugavegur 105, 101 Reykjavík</p>

            <div className="pt-4 flex items-center gap-4 text-xs">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="text-neutral-400 hover:text-[#D6FF3F] transition-colors"
              >
                Instagram
              </a>
              <span>·</span>
              <a
                href="https://behance.net"
                target="_blank"
                rel="noreferrer"
                className="text-neutral-400 hover:text-[#D6FF3F] transition-colors"
              >
                Behance
              </a>
              <span>·</span>
              <a
                href="https://discord.com"
                target="_blank"
                rel="noreferrer"
                className="text-neutral-400 hover:text-[#D6FF3F] transition-colors"
              >
                Discord
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-500">
          <div>
            © {new Date().getFullYear()} {BRAND_IDENTITY.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span>FORM · FUTURE · IDENTITY</span>
            <button
              onClick={scrollToTop}
              aria-label="Return to top of page"
              className="flex items-center gap-1.5 text-neutral-400 hover:text-[#D6FF3F] transition-colors p-1"
            >
              <span>TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
