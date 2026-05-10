import React from 'react';
import SlideWrapper from '../SlideWrapper';

export default function DiagramSlide() {
  return (
    <SlideWrapper>
      {/* Top Header / Nav Area */}
      <div className="absolute top-0 left-0 w-full p-16 flex justify-between items-start z-10 pointer-events-none">
        <div className="font-display font-medium text-5xl text-dark">
          Theme Tone
        </div>
        <div className="flex gap-8 font-mono text-2xl tracking-tight uppercase">
          <span className="text-dark/40">Structural Paradigm</span>
        </div>
      </div>

      <div className="w-full h-full pt-40 px-16 pb-16 grid grid-cols-12 gap-16 relative z-0">
        
        {/* Left Column: Diagrams */}
        <div className="col-span-6 flex flex-col gap-10 h-full">
           {/* Anti-pattern Diagram */}
           <div className="flex-1 bg-white border border-dark/10 p-8 flex flex-col relative shadow-sm">
             <div className="font-mono text-2xl text-dark/40 uppercase mb-4 tracking-widest">Anti-Pattern (Brittle)</div>
             <div className="flex-1 flex items-center justify-center w-full">
               {/* Messy unstructured nodes */}
               <div className="relative w-full min-h-[250px] border-2 border-dashed border-dark/10 p-8 flex-shrink-0">
                 <div className="absolute top-8 left-8 w-32 h-16 bg-gray-light border border-dark/20 flex items-center justify-center font-mono text-[24px]">PROMPT</div>
                 <svg className="absolute top-16 left-40 w-24 h-12 stroke-dark/30" viewBox="0 0 100 50"><path d="M0,25 Q50,-10 100,25" fill="none" strokeWidth="2" strokeDasharray="4 4" /></svg>
                 <div className="absolute top-12 left-64 w-40 h-16 bg-gray-light border border-dark/20 flex items-center justify-center font-mono text-[24px]">MEMORY</div>
                 <svg className="absolute top-28 left-20 w-48 h-32 stroke-dark/30" viewBox="0 0 100 100"><path d="M0,0 Q50,100 100,50" fill="none" strokeWidth="2" strokeDasharray="4 4" /></svg>
                 <div className="absolute bottom-12 left-12 w-32 h-16 bg-gray-light border border-dark/20 flex items-center justify-center font-mono text-[24px]">TOOL_1</div>
                 <div className="absolute bottom-16 right-16 w-32 h-16 bg-gray-light border border-dark/20 flex items-center justify-center font-mono text-[24px]">OUTPUT</div>
               </div>
             </div>
           </div>

           {/* Correct Pattern Diagram */}
           <div className="flex-1 bg-paper border-2 border-prussian p-8 flex flex-col relative shadow-[inset_0_0_40px_rgba(11,37,179,0.05)]">
             <div className="font-mono text-2xl text-prussian uppercase mb-4 tracking-widest font-bold">Standardized (Robust)</div>
             <div className="flex-1 flex items-center justify-center w-full">
               {/* Neat structured nodes */}
               <div className="relative w-full min-h-[250px] flex items-center justify-between px-10 py-6 flex-shrink-0">
                 
                 <div className="w-40 h-40 bg-prussian text-white flex flex-col items-center justify-center font-mono text-2xl p-4 text-center z-10">
                   AGENT<br/>CORE
                 </div>
                 
                 <div className="flex-1 flex flex-col items-center justify-center relative w-full h-full">
                    <div className="w-full h-0.5 bg-prussian absolute top-1/2 -translate-y-1/2"></div>
                    <div className="w-0.5 h-[calc(100%-4rem)] bg-prussian absolute right-0 top-1/2 -translate-y-1/2"></div>
                    <div className="w-full h-0.5 bg-prussian absolute top-8 right-0 origin-right scale-x-[0.3]"></div>
                    <div className="w-full h-0.5 bg-prussian absolute bottom-8 right-0 origin-right scale-x-[0.3]"></div>
                 </div>

                 <div className="flex flex-col justify-between h-[calc(100%-1rem)] w-48 z-10">
                   <div className="w-full h-16 bg-white border-2 border-prussian flex items-center justify-center font-mono text-[24px] text-prussian font-bold shadow-sm">
                     STATE
                   </div>
                   <div className="w-full h-16 bg-white border-2 border-prussian flex items-center justify-center font-mono text-[24px] text-prussian font-bold shadow-sm">
                     ROUTER
                   </div>
                   <div className="w-full h-16 bg-white border-2 border-prussian flex items-center justify-center font-mono text-[24px] text-prussian font-bold shadow-sm">
                     TOOLS
                   </div>
                 </div>

               </div>
             </div>
           </div>
        </div>

        {/* Right Column: Text */}
        <div className="col-span-6 flex flex-col justify-center pl-8">
          <h2 className="font-display text-[6rem] leading-[1.05] tracking-tight text-dark mb-10">
            Systematic<br /><span className="text-prussian">Cohesion.</span>
          </h2>
          <p className="font-sans text-3xl font-light text-dark/80 leading-relaxed mb-16 max-w-xl">
            Ad-hoc implementations fail at scale. Standardizing the interface between the model and environment guarantees reproducibility.
          </p>
          <ul className="space-y-12 max-w-xl">
            <li className="flex items-start gap-6">
              <div className="w-2 h-10 bg-prussian shrink-0 mt-2"></div>
              <div>
                <div className="font-sans text-4xl font-semibold text-dark mb-3">Single Source of Truth</div>
                <div className="font-sans text-2xl text-dark/60 font-light leading-relaxed">State must be explicitly managed outside the model's transient context.</div>
              </div>
            </li>
            <li className="flex items-start gap-6">
              <div className="w-2 h-10 bg-prussian shrink-0 mt-2"></div>
              <div>
                <div className="font-sans text-4xl font-semibold text-dark mb-3">Deterministic Routing</div>
                <div className="font-sans text-2xl text-dark/60 font-light leading-relaxed">Use rigid schemas and structured outputs to guide the LLM into predictable paths.</div>
              </div>
            </li>
            <li className="flex items-start gap-6">
              <div className="w-2 h-10 bg-prussian shrink-0 mt-2"></div>
              <div>
                <div className="font-sans text-4xl font-semibold text-dark mb-3">Observable Actions</div>
                <div className="font-sans text-2xl text-dark/60 font-light leading-relaxed">Every external API or side effect must emit a rigid, parser-friendly trace for review.</div>
              </div>
            </li>
          </ul>
        </div>
        
      </div>
    </SlideWrapper>
  );
}
