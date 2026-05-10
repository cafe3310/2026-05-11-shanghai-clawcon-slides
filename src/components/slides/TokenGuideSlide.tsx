import React from 'react';
import SlideWrapper from '../SlideWrapper';

export default function TokenGuideSlide() {
  return (
    <SlideWrapper>
      {/* Top Header / Nav Area */}
      <div className="absolute top-0 left-0 w-full p-16 flex justify-between items-start z-10">
        <div className="font-display font-medium text-5xl text-dark">
          Theme Tone
        </div>
        <div className="flex gap-8 font-mono text-2xl tracking-tight uppercase">
          <span className="text-dark/40">System Specifications</span>
        </div>
      </div>

      <div className="w-full h-full pt-40 px-16 pb-16 grid grid-cols-12 gap-16 relative z-0">
        {/* Left Introduction */}
        <div className="col-span-4 flex flex-col pt-8">
          <h2 className="font-display text-[6rem] leading-[1.05] tracking-tight text-dark mb-8">
            Design <span className="block text-prussian">Tokens.</span>
          </h2>
          <p className="font-sans text-3xl font-light text-dark/70 leading-relaxed max-w-lg mb-16">
            The foundational vocabulary of the system interface. Minimal yet highly specific values that maintain cadence, harmony, and structural clarity across all components.
          </p>
          
          {/* Decorative measurement lines */}
          <div className="flex-1 w-full border-l border-prussian/10 relative">
            <div className="absolute top-0 left-0 w-3 h-px bg-prussian/20"></div>
            <div className="absolute bottom-0 left-0 w-3 h-px bg-prussian/20"></div>
            <div className="absolute top-1/2 left-0 w-2 h-px bg-prussian/20"></div>
            <span className="absolute top-1/2 left-6 -translate-y-1/2 font-mono text-2xl text-prussian/40 tracking-widest transform -rotate-90 origin-left whitespace-nowrap">BASELINE.TRK</span>
          </div>
        </div>

        {/* Right Content Grid */}
        <div className="col-span-8 flex flex-col gap-12 pt-8 h-full">
          <div className="grid grid-cols-2 gap-16">
            
            {/* Palette */}
            <div>
              <h3 className="font-mono uppercase text-2xl tracking-widest text-dark/40 mb-6 border-b border-prussian/10 pb-4">01 / Color Palette</h3>
              <div className="grid grid-cols-2 gap-8">
                {/* Prussian */}
                <div>
                  <div className="h-20 w-full bg-prussian rounded-none mb-3 border border-dark/5 shadow-sm"></div>
                  <div className="font-sans text-3xl font-semibold text-dark mb-2">Prussian Blue</div>
                  <div className="font-mono text-2xl text-dark/50 leading-relaxed">#0B25B3<br/>var(--color-prussian)</div>
                </div>
                {/* Paper */}
                <div>
                  <div className="h-20 w-full bg-paper rounded-none mb-3 border border-prussian/10 shadow-sm relative overflow-hidden">
                    <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #0B25B3 1px, transparent 0)', backgroundSize: '8px 8px' }}></div>
                  </div>
                  <div className="font-sans text-3xl font-semibold text-dark mb-2">Technical Paper</div>
                  <div className="font-mono text-2xl text-dark/50 leading-relaxed">#F3F3EF<br/>var(--color-paper)</div>
                </div>
                {/* Dark */}
                <div>
                  <div className="h-20 w-full bg-dark rounded-none mb-3 shadow-sm border border-dark/10"></div>
                  <div className="font-sans text-3xl font-semibold text-dark mb-2">Midnight</div>
                  <div className="font-mono text-2xl text-dark/50 leading-relaxed">#111111<br/>var(--color-dark)</div>
                </div>
                {/* Light Gray */}
                <div>
                  <div className="h-20 w-full bg-gray-light rounded-none mb-3 shadow-sm border border-dark/5"></div>
                  <div className="font-sans text-3xl font-semibold text-dark mb-2">Structural Gray</div>
                  <div className="font-mono text-2xl text-dark/50 leading-relaxed">#E0E0DB<br/>var(--color-gray-light)</div>
                </div>
              </div>
            </div>

            {/* Typography */}
            <div>
              <h3 className="font-mono uppercase text-2xl tracking-widest text-dark/40 mb-6 border-b border-prussian/10 pb-4">02 / Typography Layout</h3>
              <div className="flex flex-col gap-6">
                <div className="flex items-end gap-5 border-b border-prussian/5 pb-5">
                  <div className="text-[5rem] font-display font-medium leading-none text-dark -mb-1">Aa</div>
                  <div className="flex flex-col">
                    <span className="font-sans text-3xl font-semibold text-dark">Space Grotesk</span>
                    <span className="font-mono text-2xl text-dark/50 mt-2">Headers / Display. Tracking Tight.</span>
                  </div>
                </div>
                <div className="flex items-end gap-5 border-b border-prussian/5 pb-5">
                  <div className="text-[4.5rem] font-sans font-light leading-none text-dark -mb-1">Aa</div>
                  <div className="flex flex-col">
                    <span className="font-sans text-3xl font-semibold text-dark">SF Pro</span>
                    <span className="font-mono text-2xl text-dark/50 mt-2">Body / Legibility. Relaxed line-height.</span>
                  </div>
                </div>
                <div className="flex items-end gap-5 border-b border-prussian/5 pb-5">
                  <div className="text-[4rem] font-mono leading-none text-prussian -mb-1">Aa</div>
                  <div className="flex flex-col">
                    <span className="font-sans text-3xl font-semibold text-dark">JetBrains Mono</span>
                    <span className="font-mono text-2xl text-dark/50 mt-2">Data / Annotations. Uppercase.</span>
                  </div>
                </div>
                <div className="flex items-end gap-5">
                  <div className="text-[36px] font-sans font-light leading-none text-dark border border-prussian/20 p-2 mb-1">24px</div>
                  <div className="flex flex-col">
                    <span className="font-sans text-3xl font-semibold text-dark">Minimum Constraint</span>
                    <span className="font-mono text-2xl text-dark/50 mt-2">Absolute minimum permissible size</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}
