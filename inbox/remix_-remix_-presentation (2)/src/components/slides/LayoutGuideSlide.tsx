import React from 'react';
import SlideWrapper from '../SlideWrapper';

export default function LayoutGuideSlide() {
  return (
    <SlideWrapper>
      {/* Top Header / Nav Area */}
      <div className="absolute top-0 left-0 w-full p-16 flex justify-between items-start z-10">
        <div className="font-display font-medium text-5xl text-dark">
          Theme Tone
        </div>
        <div className="flex gap-8 font-mono text-2xl tracking-tight uppercase">
          <span className="text-dark/40">System Layout</span>
        </div>
      </div>

      <div className="w-full h-full pt-40 px-16 pb-16 grid grid-cols-2 gap-16 relative z-0">
        
        {/* Background grid texture across the whole lower section */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #0B25B3 1px, transparent 0)', backgroundSize: '32px 32px' }} />

        {/* Left Column: Typography Block */}
        <div className="flex flex-col justify-center h-full relative z-10 bg-paper/90 backdrop-blur-sm pr-16 py-12 border-r border-prussian/10 overflow-hidden">
            
            <h2 className="font-display text-[6rem] leading-[1.05] tracking-tight text-dark mb-10 relative z-10">
              Agents, <span className="block text-prussian">running locally.</span>
            </h2>

            <p className="font-sans text-3xl font-light text-dark/80 leading-relaxed mb-16 max-w-xl relative z-10">
              Models coordinate to solve complex problems. Not just a chatbot, but a transparent operation system.
            </p>


        </div>

        {/* Right Column: Demonstration Frame */}
        <div className="h-full relative z-10 flex items-center justify-center">
            
            {/* MacOS Window Mockup */}
            <div className="w-full max-w-[800px] aspect-[16/10] bg-dark rounded-none shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/10 relative flex flex-col overflow-hidden">
              
              {/* Traffic Lights Bar */}
              <div className="h-10 w-full bg-[#2A2B2E] border-b border-black/50 flex items-center px-4 gap-2 shrink-0">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]"></div>
              </div>

              {/* Video Player Area */}
              <div className="flex-1 w-full bg-[#111] relative flex items-center justify-center">
                  {/* Play Button */}
                  <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center cursor-pointer hover:bg-white/20 transition-colors">
                      <div className="w-0 h-0 border-t-[16px] border-t-transparent border-l-[26px] border-l-white border-b-[16px] border-b-transparent ml-2"></div>
                  </div>

                  {/* Fake progress bar */}
                  <div className="absolute bottom-6 left-6 right-6 h-1.5 bg-white/20 rounded-full overflow-hidden">
                      <div className="w-1/3 h-full bg-prussian"></div>
                  </div>
              </div>
            </div>

        </div>

      </div>
    </SlideWrapper>
  );
}
