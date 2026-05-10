import React, { useEffect, useRef, useState, useContext } from 'react';
import { SlideContext } from '../App';

interface SlideWrapperProps {
  children: React.ReactNode;
  backgroundColor?: string;
}

export default function SlideWrapper({ children, backgroundColor = 'bg-ivory-light' }: SlideWrapperProps) {
  const outerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const { currentIndex, totalSlides } = useContext(SlideContext);

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

  const pageNum = String(currentIndex + 1).padStart(2, '0');
  const totalNum = String(totalSlides).padStart(2, '0');

  return (
    <div ref={outerRef} className="w-full h-full flex items-center justify-center overflow-hidden">
      <div 
        className={`relative shadow-2xl overflow-hidden shrink-0 slide-content-container ${backgroundColor}`}
        style={{
          width: '1920px',
          height: '1080px',
          transform: `scale(${scale})`,
          transformOrigin: 'center center',
        }}
      >
        {children}
        
        {/* Page Number Overlay */}
        <div className="absolute bottom-12 right-12 font-mono text-xl text-slate-dark/30 select-none">
          [PAGE {pageNum} / {totalNum}]
        </div>
      </div>
    </div>
  );
}
