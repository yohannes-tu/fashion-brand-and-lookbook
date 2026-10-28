import React, { useState, useEffect } from 'react';
import { Preloader } from './components/Preloader';
import { SiteHeader } from './components/SiteHeader';
import { HeroSection } from './components/HeroSection';
import { FeaturedCollection } from './components/FeaturedCollection';
import { LookbookGallery } from './components/LookbookGallery';
import { ImageLightbox } from './components/ImageLightbox';
import { EditorialStatement } from './components/EditorialStatement';
import { DesignPhilosophy } from './components/DesignPhilosophy';
import { CampaignFeature } from './components/CampaignFeature';
import { StudioSection } from './components/StudioSection';
import { SelectedWorks } from './components/SelectedWorks';
import { BrandManifesto } from './components/BrandManifesto';
import { ContactForm } from './components/ContactForm';
import { SiteFooter } from './components/SiteFooter';
import { SearchModal } from './components/SearchModal';
import { SavedLooksDrawer } from './components/SavedLooksDrawer';

import { CollectionsPage } from './pages/CollectionsPage';
import { CollectionDetailPage } from './pages/CollectionDetailPage';
import { LookbookPage } from './pages/LookbookPage';
import { StudioPage } from './pages/StudioPage';
import { JournalPage } from './pages/JournalPage';
import { ContactPage } from './pages/ContactPage';

import { LOOKBOOK_DATA, COLLECTIONS_DATA } from './data/fashionData';
import { LookItem } from './utils/filterSort';
import { toggleAmbientSound, stopAmbientSound } from './utils/audioAmbience';

export function App() {
  // Ultra-mode: ?autostart=1 skips preloader directly
  const [showPreloader, setShowPreloader] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      return params.get('autostart') !== '1';
    }
    return true;
  });

  const [currentView, setCurrentView] = useState<string>('home');
  const [selectedCollectionId, setSelectedCollectionId] = useState<string>('nocturne-001');
  const [activeLightboxLook, setActiveLightboxLook] = useState<LookItem | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isSavedDrawerOpen, setIsSavedDrawerOpen] = useState<boolean>(false);
  const [savedLookIds, setSavedLookIds] = useState<string[]>(['look-01']);
  const [isAudioPlaying, setIsAudioPlaying] = useState<boolean>(false);

  // Scroll to top when view changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView, selectedCollectionId]);

  const handleNavigate = (view: string, detailId?: string) => {
    if (view === 'collection-detail' && detailId) {
      setSelectedCollectionId(detailId);
    }
    setCurrentView(view);
  };

  const handleToggleSavedLook = (lookId: string) => {
    setSavedLookIds((prev) =>
      prev.includes(lookId) ? prev.filter((id) => id !== lookId) : [...prev, lookId]
    );
  };

  const handleOpenLightboxByTitle = (title: string) => {
    const found = LOOKBOOK_DATA.find(
      (l) => l.title.toLowerCase().includes(title.toLowerCase())
    );
    if (found) {
      setActiveLightboxLook(found);
    } else {
      setActiveLightboxLook(LOOKBOOK_DATA[0]);
    }
  };

  const handleNextLightboxLook = () => {
    if (!activeLightboxLook) return;
    const currentIndex = LOOKBOOK_DATA.findIndex((l) => l.id === activeLightboxLook.id);
    const nextIndex = (currentIndex + 1) % LOOKBOOK_DATA.length;
    setActiveLightboxLook(LOOKBOOK_DATA[nextIndex]);
  };

  const handlePrevLightboxLook = () => {
    if (!activeLightboxLook) return;
    const currentIndex = LOOKBOOK_DATA.findIndex((l) => l.id === activeLightboxLook.id);
    const prevIndex = (currentIndex - 1 + LOOKBOOK_DATA.length) % LOOKBOOK_DATA.length;
    setActiveLightboxLook(LOOKBOOK_DATA[prevIndex]);
  };

  const handleToggleAudio = () => {
    const newState = toggleAmbientSound(isAudioPlaying);
    setIsAudioPlaying(newState);
  };

  return (
    <div className="min-h-screen bg-[#08090B] text-[#F2F0EA] flex flex-col justify-between selection:bg-[#D6FF3F] selection:text-[#08090B]">
      {/* Skippable Preloader */}
      {showPreloader && <Preloader onComplete={() => setShowPreloader(false)} />}

      {/* Persistent Site Header */}
      <SiteHeader
        currentView={currentView}
        onNavigate={handleNavigate}
        onOpenSearch={() => setIsSearchOpen(true)}
        savedLooksCount={savedLookIds.length}
        onOpenSavedLooks={() => setIsSavedDrawerOpen(true)}
        isAudioPlaying={isAudioPlaying}
        onToggleAudio={handleToggleAudio}
      />

      {/* Main View Router */}
      <main className="flex-1">
        {currentView === 'home' && (
          <>
            <HeroSection
              onExploreCollection={(id) => handleNavigate('collection-detail', id || 'nocturne-001')}
              onSelectLookForInquiry={(lookId) => handleToggleSavedLook(lookId)}
              onOpenLightboxByLookTitle={handleOpenLightboxByTitle}
            />
            <FeaturedCollection
              onViewCollection={(id) => handleNavigate('collection-detail', id)}
            />
            <LookbookGallery
              onOpenLightbox={(look) => setActiveLightboxLook(look)}
              savedLookIds={savedLookIds}
              onToggleInquiry={handleToggleSavedLook}
            />
            <EditorialStatement />
            <DesignPhilosophy />
            <CampaignFeature />
            <StudioSection />
            <SelectedWorks />
            <BrandManifesto />
            <ContactForm />
          </>
        )}

        {currentView === 'collections' && (
          <CollectionsPage
            onSelectCollection={(id) => handleNavigate('collection-detail', id)}
          />
        )}

        {currentView === 'collection-detail' && (
          <CollectionDetailPage
            collectionId={selectedCollectionId}
            onBack={() => handleNavigate('collections')}
            onSelectLook={(look) => setActiveLightboxLook(look)}
            onSelectCollection={(id) => handleNavigate('collection-detail', id)}
            onContactCTA={() => handleNavigate('contact')}
          />
        )}

        {currentView === 'lookbook' && (
          <LookbookPage
            onOpenLightbox={(look) => setActiveLightboxLook(look)}
            savedLookIds={savedLookIds}
            onToggleInquiry={handleToggleSavedLook}
          />
        )}

        {currentView === 'studio' && (
          <StudioPage onContactCTA={() => handleNavigate('contact')} />
        )}

        {currentView === 'journal' && <JournalPage />}

        {currentView === 'contact' && <ContactPage savedLookIds={savedLookIds} />}
      </main>

      {/* Site Footer */}
      <SiteFooter onNavigate={handleNavigate} />

      {/* Lightbox Modal */}
      <ImageLightbox
        look={activeLightboxLook}
        allLooks={LOOKBOOK_DATA}
        onClose={() => setActiveLightboxLook(null)}
        onSelectNext={handleNextLightboxLook}
        onSelectPrev={handlePrevLightboxLook}
        onToggleInquiry={handleToggleSavedLook}
        isSavedForInquiry={activeLightboxLook ? savedLookIds.includes(activeLightboxLook.id) : false}
      />

      {/* Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectCollection={(id) => handleNavigate('collection-detail', id)}
        onSelectLook={(look) => setActiveLightboxLook(look)}
        onSelectArticle={(id) => handleNavigate('journal')}
      />

      {/* Saved Looks / Inquiry Portfolio Drawer */}
      <SavedLooksDrawer
        isOpen={isSavedDrawerOpen}
        onClose={() => setIsSavedDrawerOpen(false)}
        savedLookIds={savedLookIds}
        onRemoveLook={handleToggleSavedLook}
        onProceedToInquiry={() => handleNavigate('contact')}
      />
    </div>
  );
}

export default App;
