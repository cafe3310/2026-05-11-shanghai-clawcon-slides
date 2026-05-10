import React, { useEffect, useRef, useState, useContext } from 'react';
import { SlideContext } from '../App';

interface SlideWrapperProps {
  children: React.ReactNode;
  backgroundColor?: string;
  footerTheme?: 'light' | 'dark';
}

export default function SlideWrapper({ children, backgroundColor = 'bg-paper', footerTheme = 'dark' }: SlideWrapperProps) {
  const outerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const { currentIndex, totalSlides, elapsedSeconds, isRunning, toggleTimer } = useContext(SlideContext);

  useEffect(() => {
    const updateScale = () => {
      if (outerRef.current) {
        const { clientWidth, clientHeight } = outerRef.current;
        // Target aspect ratio 16:9
        const targetRatio = 16 / 9;
        const currentRatio = clientWidth / clientHeight;
        
        let newScale = 1;
        if (currentRatio > targetRatio) {
          // Container is wider than 16:9, scale based on height
          newScale = clientHeight / 1080;
        } else {
          // Container is taller than 16:9, scale based on width
          newScale = clientWidth / 1920;
        }
        
        setScale(newScale);
      }
    };

    const observer = new ResizeObserver(() => {
      updateScale();
    });

    if (outerRef.current) {
      observer.observe(outerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const pageNumber = `${String(currentIndex + 1).padStart(2, '0')} / ${String(totalSlides).padStart(2, '0')}`;
  
  const formatTime = (totalSeconds: number) => {
    const m = Math.floor(totalSeconds / 60).toString().padStart(2, '0');
    const s = (totalSeconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  const footerColor = footerTheme === 'light' ? 'text-white/40' : 'text-dark/30';
  const footerHoverColor = footerTheme === 'light' ? 'hover:text-white/80' : 'hover:text-dark/60';

  return (
    <div ref={outerRef} className="w-full h-full flex items-center justify-center overflow-hidden">
      <div 
        className={`relative shadow-2xl overflow-hidden shrink-0 ${backgroundColor}`}
        style={{
          width: '1920px',
          height: '1080px',
          transform: `scale(${scale})`,
          transformOrigin: 'center center',
        }}
      >
        {children}
        
        {/* Timer & Page Number */}
        <div className={`absolute bottom-8 right-12 flex flex-col items-end gap-1 font-mono tracking-widest ${footerColor} z-50 select-none`}>
          <div className="flex items-center gap-2 text-[20px]">
            <span>{formatTime(elapsedSeconds)}</span>
            <button 
              onClick={toggleTimer}
              className={`${footerHoverColor} transition-colors w-6 flex justify-center items-center pointer-events-auto cursor-pointer`}
              title={isRunning ? "Pause timer" : "Resume timer"}
            >
              {isRunning ? 'x' : '>'}
            </button>
          </div>
          <div className="text-[24px]">
            {pageNumber}
          </div>
        </div>
      </div>
    </div>
  );
}
