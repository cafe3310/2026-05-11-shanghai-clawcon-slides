import React, { useState, useEffect, useCallback, createContext } from 'react';
import { ChevronLeft, ChevronRight, LayoutGrid } from 'lucide-react';

// ClawCon 2026 Slides
import TitleSlide from './components/slides/clawcon-2026/TitleSlide';
import TocSlide from './components/slides/clawcon-2026/TocSlide';
import Page02Slide from './components/slides/clawcon-2026/Page02Slide';
import Page03Slide from './components/slides/clawcon-2026/Page03Slide';
import Page04Slide from './components/slides/clawcon-2026/Page04Slide';
import Page05Slide from './components/slides/clawcon-2026/Page05Slide';
import Page06Slide from './components/slides/clawcon-2026/Page06Slide';
import Page07Slide from './components/slides/clawcon-2026/Page07Slide';
import Page10Slide from './components/slides/clawcon-2026/Page10Slide';
import Page11Slide from './components/slides/clawcon-2026/Page11Slide';
import ContentSlide from './components/slides/clawcon-2026/ContentSlide';
import DesignSystemSlide from './components/slides/clawcon-2026/DesignSystemSlide';
import LayoutDesignSlide from './components/slides/clawcon-2026/LayoutDesignSlide';
import ClosingSlide from './components/slides/clawcon-2026/ClosingSlide';

// OpenClaw 2026 Slides
import OpenClawTitle from './components/slides/2026-openclaw/TitleSlide';

export const SlideContext = createContext({
  currentIndex: 0,
  totalSlides: 0,
  goToIndex: (index: number) => {}
});

const slideSets = {
  'openclaw-2026': {
    title: 'ClawCon Shanghai',
    description: '让 Claw 帮你安心摸鱼',
    slides: [
      <OpenClawTitle key="openclaw-title" />,
      <div key="placeholder" className="w-full h-full flex items-center justify-center bg-slate-dark text-white text-4xl">More slides coming soon...</div>
    ]
  },
  'clawcon-2026': {
    title: '工作分享: 从 LLM Client 到 Agent',
    description: '给非技术人员的务实上手指南',
    isArchived: true,
    slides: [
      <TitleSlide key="title" />,
      <TocSlide key="toc" />,
      <Page02Slide key="page02" />,
      <Page03Slide key="page03" />,
      <Page04Slide key="page04" />,
      <Page05Slide key="page05" />,
      <Page07Slide key="page07" />,
      <Page06Slide key="page06" />,
      <Page11Slide key="page11" />,
      <Page10Slide key="page10" />,
      <ContentSlide key="content" />,
      <DesignSystemSlide key="design" />,
      <LayoutDesignSlide key="layout" />,
      <ClosingSlide key="closing" />
    ]
  }
};

type PresentationId = keyof typeof slideSets;

export default function App() {
  const [currentSetId, setCurrentSetId] = useState<PresentationId | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = currentSetId ? (slideSets[currentSetId] as any).slides : [];

  const goToNext = useCallback(() => {
    if (!currentSetId) return;
    setCurrentIndex((prev) => (prev < slides.length - 1 ? prev + 1 : prev));
  }, [currentSetId, slides.length]);

  const goToPrev = useCallback(() => {
    if (!currentSetId) return;
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
  }, [currentSetId]);

  const exitPresentation = () => {
    setCurrentSetId(null);
    setCurrentIndex(0);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!currentSetId) return;
      
      if (e.key === 'ArrowRight' || e.key === ' ') {
        goToNext();
      } else if (e.key === 'ArrowLeft') {
        goToPrev();
      } else if (e.key === 'Escape') {
        exitPresentation();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSetId, goToNext, goToPrev]);

  if (!currentSetId) {
    return (
      <div className="w-full h-[100dvh] bg-slate-dark flex flex-col items-center justify-center p-8">
        <h1 className="text-white text-5xl font-bold mb-16 tracking-tight">Select Presentation</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
          {(Object.keys(slideSets) as PresentationId[]).map((id) => {
            const set = slideSets[id] as any;
            return (
              <button
                key={id}
                onClick={() => {
                  setCurrentSetId(id);
                  setCurrentIndex(0);
                }}
                className={`group relative border rounded-3xl text-left transition-all duration-300 p-12 ${
                  set.isArchived 
                    ? 'bg-white/[0.02] border-white/5 opacity-50 grayscale-[0.5] hover:opacity-80 hover:grayscale-0' 
                    : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-focus-blue/50'
                }`}
              >
                {set.isArchived && (
                  <div className="absolute top-6 right-6 bg-white/10 px-3 py-1 rounded-full text-[12px] text-white/40 font-bold tracking-widest uppercase">
                    Archived
                  </div>
                )}
                <div className={`${set.isArchived ? 'text-white/20' : 'text-focus-blue'} mb-6 group-hover:scale-110 transition-transform`}>
                  <LayoutGrid size={48} />
                </div>
                <h2 className="text-white text-3xl font-bold mb-4">{set.title}</h2>
                <p className="text-white/40 text-lg leading-relaxed">{set.description}</p>
                <div className={`mt-8 flex items-center font-bold tracking-wide uppercase text-sm ${set.isArchived ? 'text-white/20' : 'text-focus-blue'}`}>
                  Open Presentation
                  <ChevronRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <SlideContext.Provider value={{ 
      currentIndex, 
      totalSlides: slides.length,
      goToIndex: setCurrentIndex 
    }}>
      <div className="relative w-full h-[100dvh] bg-slate-dark overflow-hidden">
        {/* Current Slide */}
        <div className="absolute inset-0 transition-opacity duration-300">
          {slides[currentIndex]}
        </div>

        {/* Navigation Overlay (Invisible click zones) */}
        <div className="absolute inset-0 flex z-50 pointer-events-none">
          <div 
            className="w-1/4 h-full pointer-events-auto cursor-w-resize" 
            onClick={goToPrev}
            title="Previous Slide"
          />
          <div className="w-2/4 h-full" />
          <div 
            className="w-1/4 h-full pointer-events-auto cursor-e-resize" 
            onClick={goToNext}
            title="Next Slide"
          />
        </div>

        {/* Minimal UI Controls */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-6 z-50 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300">
          <button 
            onClick={exitPresentation}
            className="text-white hover:text-focus-blue transition-colors mr-2"
            title="Exit to Selection"
          >
            <LayoutGrid size={20} />
          </button>

          <button 
            onClick={goToPrev}
            disabled={currentIndex === 0}
            className="text-white disabled:opacity-30 hover:text-focus-blue transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
          
          <div className="flex gap-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === currentIndex ? 'bg-white scale-125' : 'bg-white/30 hover:bg-white/60'
                }`}
              />
            ))}
          </div>

          <button 
            onClick={goToNext}
            disabled={currentIndex === slides.length - 1}
            className="text-white disabled:opacity-30 hover:text-focus-blue transition-colors"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </SlideContext.Provider>
  );
}
