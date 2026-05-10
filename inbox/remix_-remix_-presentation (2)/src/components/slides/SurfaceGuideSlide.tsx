import React from 'react';
import SlideWrapper from '../SlideWrapper';

export default function SurfaceGuideSlide() {
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
            Surfaces <span className="block text-prussian">& Materials.</span>
          </h2>
          <p className="font-sans text-3xl font-light text-dark/70 leading-relaxed max-w-lg mb-16">
            Material choices dictate the spatial hierarchy of the interface. We rely on strict contrasts between absolute flatness and stark translucency.
          </p>
          
          {/* Decorative measurement lines */}
          <div className="flex-1 w-full border-l border-prussian/10 relative">
            <div className="absolute top-0 left-0 w-3 h-px bg-prussian/20"></div>
            <div className="absolute bottom-0 left-0 w-3 h-px bg-prussian/20"></div>
            <div className="absolute top-1/2 left-0 w-2 h-px bg-prussian/20"></div>
            <span className="absolute top-1/2 left-6 -translate-y-1/2 font-mono text-2xl text-prussian/40 tracking-widest transform -rotate-90 origin-left whitespace-nowrap">SURFACE.Z-INDEX</span>
          </div>
        </div>

        {/* Right Content Grid */}
        <div className="col-span-8 flex flex-col pt-8 h-full">
           <h3 className="font-mono uppercase text-2xl tracking-widest text-dark/40 mb-6 border-b border-prussian/10 pb-4">03 / Surfacing & Materials</h3>
           
           <div className="flex-1 w-full bg-prussian rounded-none relative overflow-hidden flex items-center p-8 gap-8 border border-dark/10 shadow-inner">
             {/* Background Grid */}
             <div className="absolute inset-0 opacity-10 mix-blend-overlay" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '16px 16px' }} />
             
             {/* Surface 1: Glass */}
             <div className="flex-1 h-full w-full relative z-10 flex border-r border-white/10 pr-8 items-center justify-center">
                 
                 <div className="w-full max-w-[340px] h-[200px] bg-white/10 backdrop-blur-md border border-white/20 hover:border-white/40 transition-colors rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.2)] p-8 flex flex-col justify-between">
                   <div className="flex justify-between items-center">
                     <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center">
                       <div className="w-3 h-3 bg-white/80 rounded-full"></div>
                     </div>
                     <span className="font-mono text-2xl text-white/50 tracking-widest">BLUR_XI</span>
                   </div>
                   <div>
                     <div className="font-sans text-white text-4xl font-light mb-2">Glass Panel</div>
                     <div className="font-mono text-2xl text-white/40 uppercase">backdrop-blur-md</div>
                   </div>
                 </div>

             </div>

             {/* Surface 2: Solid Flat */}
             <div className="flex-1 h-full w-full relative z-10 flex pl-4 items-center justify-center">
                 
                 <div className="w-full max-w-[340px] h-[200px] bg-paper rounded-none p-8 flex flex-col justify-between border border-dark/10 shadow-sm hover:border-dark/20 transition-colors">
                   <div className="flex justify-between items-center">
                     <div className="w-10 h-10 rounded-none bg-paper border border-dark/10"></div>
                     <span className="font-mono text-2xl text-dark/40 font-bold tracking-widest">SLD_02</span>
                   </div>
                   <div>
                     <div className="font-sans text-dark/80 text-4xl font-medium mb-2">Solid Panel</div>
                     <div className="font-mono text-2xl text-dark/40 uppercase">bg-paper / border</div>
                   </div>
                 </div>

             </div>
           </div>
        </div>
      </div>
    </SlideWrapper>
  );
}
