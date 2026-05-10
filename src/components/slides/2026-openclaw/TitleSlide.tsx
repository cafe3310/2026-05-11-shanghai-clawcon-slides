import React from 'react';
import SlideWrapper from '../../SlideWrapper';

export default function TitleSlide() {
  return (
    <SlideWrapper backgroundColor="bg-slate-dark">
      <div className="w-full h-full flex flex-col items-center justify-center p-16 text-white relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dot-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dot-grid)" />
          </svg>
        </div>

        <div className="z-10 text-center">
          <h1 className="font-sans font-bold text-[100px] leading-[1.1] tracking-tight mb-8">
            2026 OpenClaw <br />
            Next Generation Agents
          </h1>
          <p className="text-[32px] text-white/60 mb-16">
            Exploring the Frontier of AI Systems
          </p>
          <div className="h-1 w-32 bg-focus-blue mx-auto mb-16"></div>
          <div className="text-[24px] font-medium opacity-80">
            Shanghai OpenSource Community
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}
