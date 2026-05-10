import React, { useState, useEffect, useCallback, createContext } from 'react';
import TitleSlide from './components/slides/TitleSlide';
import TocSlide from './components/slides/TocSlide';
import Page02Slide from './components/slides/Page02Slide';
import Page03Slide from './components/slides/Page03Slide';
import Page04Slide from './components/slides/Page04Slide';
import Page05Slide from './components/slides/Page05Slide';
import Page06Slide from './components/slides/Page06Slide';
import Page07Slide from './components/slides/Page07Slide';
import Page10Slide from './components/slides/Page10Slide';
import Page11Slide from './components/slides/Page11Slide';
import ContentSlide from './components/slides/ContentSlide';
import DesignSystemSlide from './components/slides/DesignSystemSlide';
import LayoutDesignSlide from './components/slides/LayoutDesignSlide';
import ClosingSlide from './components/slides/ClosingSlide';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const SlideContext = createContext({
  currentIndex: 0,
  totalSlides: 0,
  goToIndex: (index: number) => {}
});

const slides = [
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
];

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev < slides.length - 1 ? prev + 1 : prev));
  }, []);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        goToNext();
      } else if (e.key === 'ArrowLeft') {
        goToPrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNext, goToPrev]);

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
