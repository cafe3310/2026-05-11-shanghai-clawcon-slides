import React from 'react';
import SlideWrapper from '../SlideWrapper';

export default function DesignGuideSlide() {
  return (
    <SlideWrapper>
      {/* Top Header / Nav Area */}
      <div className="absolute top-0 left-0 w-full p-16 flex justify-between items-start z-10">
        <div className="font-display font-medium text-5xl text-dark">
          Theme Tone
        </div>
        <div className="flex gap-8 font-mono text-2xl tracking-tight uppercase">
          <span className="underline decoration-1 underline-offset-4 cursor-pointer">View Documentation</span>
        </div>
      </div>

      {/* Main Grid Layout */}
      <div className="w-full h-full pt-40 px-16 pb-16 grid grid-cols-2 gap-0 relative">
        {/* Left Column */}
        <div className="flex flex-col h-full bg-paper pr-16 relative">
          <h1 className="font-display text-[7.5rem] leading-[1.05] tracking-tight text-dark mb-12 relative z-10">
            Rational <span className="block text-prussian">Design</span>
          </h1>

          <div className="flex-1 w-full relative mt-8">
            {/* Outline box mimicking the white frame structure but in Prussian Blue filled */}
            <div className="absolute top-0 left-0 w-[calc(100%+64px)] h-[calc(100%+64px)] -mx-16 -my-8 bg-prussian z-0">
              {/* Fake grid texture for the blue background */}
              <div className="w-full h-full opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }} />
            </div>

            {/* Inner Content Block with White Frame */}
            <div className="relative z-10 top-16 left-0">
              <div className="w-[120%] border border-white/20 p-8 rounded-xl bg-prussian/80 backdrop-blur-sm shadow-2xl relative overflow-hidden">
                <div className="absolute top-4 left-4 w-12 h-12 flex flex-col justify-between opacity-50 mix-blend-overlay">
                  <div className="w-2 h-2 rounded-full border border-white"></div>
                  <div className="w-2 h-2 rounded-full border border-white"></div>
                </div>
                <div className="pl-16 pr-8 py-8">
                   <p className="text-white text-4xl font-light leading-relaxed font-sans mb-12">
                     We focus on the essence of AI agents—stripping away hype to reveal clear, actionable workflows.
                   </p>
                   
                   <p className="text-white/80 text-3xl font-light font-sans max-w-xl">
                      Interfaces should serve as structured dialogue. We translate capabilities into a calm, readable, and focused environment.
                   </p>
                </div>
              </div>
            </div>
            
            {/* Outline Numbering */}
            <div className="absolute bottom-0 right-0 z-20 font-display text-[14rem] leading-none text-transparent transform translate-x-12 translate-y-12" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.4)' }}>
              01
            </div>
          </div>
        </div>

        {/* Right Column (Image space placeholder) */}
        <div className="relative bg-[#a5b4d4] h-full flex flex-col overflow-hidden">
             {/* Example camera/lens composition made of CSS to mimic the right side industrial imagery */}
             <div className="absolute -right-32 -top-16 w-[120%] h-[120%] bg-prussian mix-blend-multiply opacity-90 rounded-full blur-[100px]"></div>
             
             <div className="relative w-full h-full flex items-center justify-center">
                 {/* Decorative elements representing the mechanical lens structure */}
                <div className="w-[600px] h-[600px] border-[40px] border-prussian/20 rounded-full flex items-center justify-center relative">
                   <div className="w-[400px] h-[400px] border-[60px] border-prussian/40 rounded-full flex items-center justify-center relative shadow-[inset_0_20px_50px_rgba(0,0,0,0.5)]">
                      <div className="w-[150px] h-[150px] bg-dark rounded-full shadow-[0_0_100px_rgba(11,37,179,1)]"></div>
                   </div>
                   
                   <div className="absolute -top-16 -left-16 w-48 h-48 bg-white rounded-full shadow-2xl flex items-center justify-center">
                       <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gray-100 to-gray-300 shadow-inner"></div>
                   </div>
                </div>
                
                <div className="absolute right-12 bottom-12 rotate-[-90deg] font-mono text-2xl tracking-widest text-prussian/60 origin-bottom-right">
                  ANODIZED ALLOY BRACKETS MULTI-COATED GLASS OPTICS
                </div>
             </div>
        </div>
      </div>
    </SlideWrapper>
  );
}
