import React from 'react';
import SlideWrapper from '../SlideWrapper';

export default function FourQuadrantsSlide() {
  return (
    <SlideWrapper>
      {/* Top Header / Nav Area */}
      <div className="absolute top-0 left-0 w-full p-16 flex justify-between items-start z-10 pointer-events-none">
        <div className="font-display font-medium text-5xl text-dark">
          Theme Tone
        </div>
        <div className="flex gap-8 font-mono text-2xl tracking-tight uppercase">
          <span className="text-dark/40">Capability Matrix</span>
        </div>
      </div>

      <div className="w-full h-full pt-40 px-16 pb-16 flex flex-col relative z-0">
        <div className="flex-1 grid grid-cols-2 grid-rows-2 border-y border-prussian/20">
          
          {/* Top Left: Default */}
          <div className="border-r border-b border-prussian/20 p-16 flex flex-col justify-center">
            <div className="font-mono text-2xl text-prussian/40 tracking-widest uppercase mb-6">01 / Scripted Exec</div>
            <h3 className="font-display text-5xl text-dark mb-6">Static Pipelines</h3>
            <p className="font-sans text-3xl font-light text-dark/70 leading-relaxed">
              Task sequences are hardcoded. Fails when inputs deviate from tight constraints. Zero adaptability.
            </p>
          </div>

          {/* Top Right: Highlighted */}
          <div className="bg-gray-light/50 border-b border-prussian/20 p-16 flex flex-col justify-center relative">
            <div className="absolute top-0 right-0 p-8">
               <div className="w-4 h-4 bg-prussian/40"></div>
            </div>
            <div className="font-mono text-2xl text-prussian/60 tracking-widest uppercase mb-6">02 / Dynamic Routes</div>
            <h3 className="font-display text-5xl text-dark mb-6">Conditionals</h3>
            <p className="font-sans text-3xl font-light text-dark/80 leading-relaxed">
              Rules determine the path. Better handling of edge cases, but still relies on predefined heuristics.
            </p>
          </div>

          {/* Bottom Left: Default */}
          <div className="border-r border-prussian/20 p-16 flex flex-col justify-center">
            <div className="font-mono text-2xl text-prussian/40 tracking-widest uppercase mb-6">03 / Tool Calling</div>
            <h3 className="font-display text-5xl text-dark mb-6">API Binding</h3>
            <p className="font-sans text-3xl font-light text-dark/70 leading-relaxed">
              Model invokes predefined functions. Bridging generation with execution to fetch current data.
            </p>
          </div>

          {/* Bottom Right: More Highlighted */}
          <div className="bg-prussian text-white p-16 flex flex-col justify-center shadow-[inset_0_20px_40px_rgba(0,0,0,0.2)]">
            <div className="font-mono text-2xl text-white/50 tracking-widest uppercase mb-6">04 / Autonomous</div>
            <h3 className="font-display text-6xl text-white mb-6">Agentic Workflows</h3>
            <p className="font-sans text-3xl font-light text-white/90 leading-relaxed">
              The model plans, executes, evaluates, and corrects its own trajectory. Goal-oriented behavior rather than instruction-following.
            </p>
          </div>

        </div>
      </div>
    </SlideWrapper>
  );
}
