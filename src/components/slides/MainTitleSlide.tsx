import React from 'react';
import SlideWrapper from '../SlideWrapper';

export default function MainTitleSlide() {
  return (
    <SlideWrapper>
      <div className="w-full h-full flex relative z-0 bg-prussian overflow-hidden">
        {/* Background grid */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        
        {/* Left Column: Typography */}
        <div className="w-1/2 h-full flex flex-col justify-center px-24 relative z-10">
          <div className="font-mono text-2xl tracking-widest text-white/50 uppercase mb-12 border-b border-white/20 pb-6 self-start">
            Technical Presentation
          </div>
          
          <h1 className="font-display text-[9rem] leading-[1.05] tracking-tight text-white mb-12">
            Demystifying<br />Agents.
          </h1>
          
          <div className="font-sans text-3xl font-light text-white/80 max-w-2xl leading-relaxed mb-24">
            A systemic approach to understanding autonomous workflows, stripping away the hype to reveal clear, actionable patterns.
          </div>
          
          <div className="mt-auto mb-16 font-mono text-2xl text-white/40 flex flex-col gap-2">
            <span>hi.sipan@gmail.com</span>
            <span className="uppercase">CTO Group / Model Team • May 2026</span>
          </div>
        </div>

        {/* Right Column: Abstract Graphic */}
        <div className="w-1/2 h-full relative z-10 flex items-center justify-center p-16">
          <div className="w-[80%] aspect-square relative">
            {/* Circle 1 */}
            <div className="absolute top-0 right-0 w-[80%] h-[80%] border border-white/20 rounded-full flex items-center justify-center">
              <div className="w-[80%] h-[80%] border border-white/10 rounded-full"></div>
            </div>
            {/* Circle 2 */}
            <div className="absolute bottom-0 left-0 w-[60%] h-[60%] border-2 border-white/40 rounded-full backdrop-blur-sm bg-white/5 flex items-center justify-center">
               <div className="font-mono text-2xl text-white/60 tracking-widest">SYSTEM_CORE</div>
            </div>
            
            {/* Connecting Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100">
              <path d="M30,70 L70,30" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5" strokeDasharray="2 2" fill="none" />
              <circle cx="70" cy="30" r="2" fill="rgba(255,255,255,0.5)" />
              <circle cx="30" cy="70" r="2" fill="rgba(255,255,255,0.8)" />
            </svg>
            
            {/* Floating Data Blocks */}
            <div className="absolute top-1/4 left-0 bg-white/10 backdrop-blur-md border border-white/20 p-6 shadow-xl">
               <div className="font-mono text-[24px] text-white/50 mb-2">PROCESS_ID</div>
               <div className="font-mono text-2xl text-white">0xCAFEBABE</div>
            </div>
            <div className="absolute bottom-1/4 right-0 bg-white/10 backdrop-blur-md border border-white/20 p-6 shadow-xl">
               <div className="font-mono text-[24px] text-white/50 mb-2">TARGET_MODEL</div>
               <div className="font-mono text-2xl text-white">NOKIA_3310</div>
            </div>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}
