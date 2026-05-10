import React, { useEffect, useRef, useState } from 'react';

interface SlideWrapperProps {
  children: React.ReactNode;
  backgroundColor?: string;
}

export default function SlideWrapper({ children, backgroundColor = 'bg-paper' }: SlideWrapperProps) {
  const outerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

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
      </div>
    </div>
  );
}
