import React, { useState, useEffect, useCallback } from 'react';
import ContentSlide01 from './components/slides/ContentSlide01';
import ContentSlide02 from './components/slides/ContentSlide02';
import ContentSlide03 from './components/slides/ContentSlide03';
import ContentSlide04 from './components/slides/ContentSlide04';
import ContentSlide05 from './components/slides/ContentSlide05';
import ContentSlide06 from './components/slides/ContentSlide06';
import FinalSlide from './components/slides/FinalSlide';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  <ContentSlide01 key="content-01" />,
  <ContentSlide02 key="content-02" />,
  <ContentSlide03 key="content-03" />,
  <ContentSlide04 key="content-04" />,
  <ContentSlide05 key="content-05" />,
  <ContentSlide06 key="content-06" />,
  <FinalSlide key="final-slide" />
];

export const SlideContext = React.createContext({
  currentIndex: 0,
  totalSlides: 0,
  elapsedSeconds: 0,
  isRunning: true,
  toggleTimer: () => {},
});

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    let interval: number;
    if (isRunning) {
      interval = window.setInterval(() => {
        setElapsedSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const toggleTimer = useCallback(() => setIsRunning((prev) => !prev), []);

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
    <SlideContext.Provider value={{ currentIndex, totalSlides: slides.length, elapsedSeconds, isRunning, toggleTimer }}>
      <div className="relative w-full h-[100dvh] bg-dark overflow-hidden">
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
            className="text-white disabled:opacity-30 hover:text-prussian transition-colors"
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
            className="text-white disabled:opacity-30 hover:text-prussian transition-colors"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </SlideContext.Provider>
  );
}
