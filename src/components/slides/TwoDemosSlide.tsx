import React from 'react';
import SlideWrapper from '../SlideWrapper';

export default function TwoDemosSlide() {
  return (
    <SlideWrapper>
      {/* Top Header / Nav Area */}
      <div className="absolute top-0 left-0 w-full p-16 flex justify-between items-start z-10 pointer-events-none">
        <div className="font-display font-medium text-5xl text-dark">
          Theme Tone
        </div>
        <div className="flex gap-8 font-mono text-2xl tracking-tight uppercase">
          <span className="text-dark/40">Comparative Analysis</span>
        </div>
      </div>

      <div className="w-full h-full pt-40 px-16 pb-16 grid grid-cols-12 gap-16 relative z-0">
        
        {/* Left Column: 2 Demos */}
        <div className="col-span-6 flex flex-col gap-10 h-full">
           {/* Top Video/Demo */}
           <div className="flex-1 bg-dark rounded-none shadow-[0_10px_30px_rgba(0,0,0,0.2)] border border-dark/10 flex flex-col overflow-hidden relative">
             <div className="h-10 w-full bg-[#2A2B2E] border-b border-black/50 flex items-center px-4 gap-4 shrink-0">
                <div className="w-3 h-3 rounded-none bg-[#FF5F56] border border-[#E0443E]"></div>
                <div className="font-mono text-[24px] text-white/40 tracking-widest uppercase">CONVENTIONAL_UI.APP</div>
             </div>
             <div className="flex-1 bg-[#1A1A1A] flex items-center justify-center p-8">
                {/* Mock UI Elements */}
                <div className="w-full max-w-[400px] border border-white/10 p-6 flex flex-col gap-4">
                  <div className="w-1/2 h-4 bg-white/20"></div>
                  <div className="w-full h-10 bg-white/5 border border-white/10"></div>
                  <div className="w-full h-10 bg-white/5 border border-white/10"></div>
                  <div className="w-1/3 h-10 bg-prussian ml-auto mt-4"></div>
                </div>
             </div>
             {/* Progress bar mock */}
             <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10">
                <div className="h-full bg-white/30 w-1/4"></div>
             </div>
           </div>

           {/* Bottom Video/Demo */}
           <div className="flex-1 bg-dark rounded-none shadow-[0_10px_30px_rgba(0,0,0,0.2)] border-2 border-prussian flex flex-col overflow-hidden relative">
             <div className="h-10 w-full bg-prussian border-b border-black/50 flex items-center px-4 gap-4 shrink-0">
                <div className="w-3 h-3 rounded-none bg-white/90"></div>
                <div className="font-mono text-[24px] text-white tracking-widest uppercase font-bold">AGENTIC_INTERFACE.APP</div>
             </div>
             <div className="flex-1 bg-[#111] flex items-center justify-center p-8">
                {/* Mock Text/Dialogue Stream */}
                <div className="w-full h-full flex flex-col gap-4 font-mono text-2xl text-white/70 justify-end">
                  <div className="flex gap-4"><span className="text-prussian font-bold">{'>'}</span> <span>Parsing user intent...</span></div>
                  <div className="flex gap-4"><span className="text-prussian font-bold">{'>'}</span> <span>Calling DB_SEARCH with params [id: 442]</span></div>
                  <div className="flex gap-4"><span className="text-green-500 font-bold">{'>'}</span> <span>Found 3 records. Synthesizing changes.</span></div>
                  <div className="flex gap-4 opacity-50"><span className="text-prussian font-bold">{'>'}</span> <span className="animate-pulse">Applying patch...</span></div>
                </div>
             </div>
             <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10">
                <div className="h-full bg-prussian w-3/4"></div>
             </div>
           </div>
        </div>

        {/* Right Column: Bullet Points */}
        <div className="col-span-6 flex flex-col justify-center pl-8">
          <h2 className="font-display text-[6rem] leading-[1.05] tracking-tight text-dark mb-10">
            Shift in <span className="block text-prussian">Interaction.</span>
          </h2>
          
          <div className="flex flex-col gap-10 mt-8">
             <div className="flex gap-8">
               <div className="font-mono text-4xl text-prussian font-bold">01</div>
               <div>
                  <h4 className="font-sans font-semibold text-3xl text-dark mb-3">Declarative vs Imperative</h4>
                  <p className="font-sans font-light text-2xl text-dark/70 leading-relaxed">Users state goals instead of providing a sequence of steps. The interface abstracts the state iterations.</p>
               </div>
             </div>
             <div className="border-t border-prussian/10"></div>
             <div className="flex gap-8">
               <div className="font-mono text-4xl text-prussian font-bold">02</div>
               <div>
                  <h4 className="font-sans font-semibold text-3xl text-dark mb-3">Non-Deterministic State</h4>
                  <p className="font-sans font-light text-2xl text-dark/70 leading-relaxed">Unlike buttons with fixed callbacks, the agent negotiates ambiguity and selects appropriate tools dynamically.</p>
               </div>
             </div>
             <div className="border-t border-prussian/10"></div>
             <div className="flex gap-8">
               <div className="font-mono text-4xl text-prussian font-bold">03</div>
               <div>
                  <h4 className="font-sans font-semibold text-3xl text-dark mb-3">Continuous Mediation</h4>
                  <p className="font-sans font-light text-2xl text-dark/70 leading-relaxed">Human-in-the-loop validation points replace standard form validation, requiring confidence visualizations.</p>
               </div>
             </div>
          </div>
        </div>

      </div>
    </SlideWrapper>
  );
}
