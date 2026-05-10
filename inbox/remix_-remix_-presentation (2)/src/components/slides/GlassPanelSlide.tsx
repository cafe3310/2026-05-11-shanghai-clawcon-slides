import React from 'react';
import SlideWrapper from '../SlideWrapper';

export default function GlassPanelSlide() {
  return (
    <SlideWrapper>
      {/* Top Header / Nav Area */}
      <div className="absolute top-0 left-0 w-full p-16 flex justify-between items-start z-10 pointer-events-none">
        <div className="font-display font-medium text-5xl text-dark">
          Theme Tone
        </div>
        <div className="flex gap-8 font-mono text-2xl tracking-tight uppercase">
          <span className="text-dark/40">Layering Model</span>
        </div>
      </div>

      <div className="w-full h-full pt-40 px-16 pb-16 flex relative z-0">
        <div className="w-1/2 flex flex-col justify-center pr-16 z-20">
          <h2 className="font-display text-[6.5rem] leading-[1.05] tracking-tight text-dark mb-10">
            Transparent <span className="block text-prussian">Operations.</span>
          </h2>
          <p className="font-sans text-3xl font-light text-dark/80 leading-relaxed mb-12 border-l-4 border-prussian pl-8">
            By exposing intermediate reasoning layers, we build trust. The glass panel is not just an aesthetic—it is a pedagogical tool showing the work behind the scenes.
          </p>
          <ul className="font-mono text-2xl text-dark/60 space-y-6 uppercase tracking-widest leading-loose">
            <li className="flex items-center gap-4"><div className="w-2 h-2 bg-prussian"></div> Visibility into context limits</li>
            <li className="flex items-center gap-4"><div className="w-2 h-2 bg-prussian"></div> Real-time state inspection</li>
            <li className="flex items-center gap-4"><div className="w-2 h-2 bg-prussian"></div> Confidence in execution</li>
          </ul>
        </div>
        
        <div className="w-1/2 h-full relative flex items-center justify-center">
            {/* Background Structural Element */}
            <div className="absolute w-[80%] h-[70%] left-0 top-16 bg-prussian shadow-2xl flex flex-col p-10">
               <div className="font-mono text-2xl text-white/40 mb-6 border-b border-white/20 pb-4">RAW DATA STREAM</div>
               <div className="font-mono text-2xl text-white/60 space-y-2 opacity-50 break-words leading-snug">
                 {'01010011 01111001 01110011 01110100 01100101 01101101 '.repeat(35)}
               </div>
            </div>
            
            {/* Overlapping Glass Panel */}
            <div className="absolute w-[75%] h-[80%] right-0 bottom-16 bg-white/20 backdrop-blur-xl border border-white/50 shadow-[0_30px_60px_rgba(0,0,0,0.1)] p-12 flex flex-col">
               <div className="font-mono text-2xl text-dark font-bold mb-8 uppercase tracking-widest border-b border-dark/10 pb-4">PARSED.OUTCOME</div>
               <div className="text-[2.25rem] font-sans text-dark/90 leading-relaxed font-light mt-4">
                 Agent successfully extracted the underlying meaning from the noise, forming a structural representation of the objective.
               </div>
               <div className="mt-auto border-t border-dark/10 pt-8 flex justify-between items-center">
                 <span className="font-mono text-2xl text-dark/40 uppercase tracking-widest">Confidence: <span className="text-prussian font-bold">99.8%</span></span>
                 <div className="w-48 h-2 bg-dark/10">
                   <div className="w-[99%] h-full bg-prussian"></div>
                 </div>
               </div>
            </div>
        </div>
      </div>
    </SlideWrapper>
  );
}
