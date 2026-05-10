import React from 'react';
import SlideWrapper from '../SlideWrapper';

export default function ContentSlide01() {
  return (
    <SlideWrapper>
      <div className="w-full h-full flex relative z-0 bg-prussian overflow-hidden">
        {/* Background grid */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />

        {/* Left Column: Typography */}
        <div className="w-2/3 h-full flex flex-col px-24 relative z-10 pt-32 pb-24">
          <div className="font-mono text-[24px] tracking-widest text-white/50 uppercase mb-16 border-b border-white/20 pb-6 self-start">
          </div>

          <h1 className="font-display text-[5.5rem] leading-[1.5] tracking-tight text-white mb-12">
            更高能效更低幻觉，<br />
            让 Claw 帮你安心摸鱼
          </h1>

          <div className="mt-auto font-sans text-3xl font-light text-white flex flex-col gap-4 border-l-4 border-white pl-6">
            <span className="opacity-90">by 司潘俊楠 / cafe3310</span>
            <span className="text-white/60 text-2xl">蚂蚁百灵，模型产品工程</span>
          </div>
        </div>

        {/* Right Column: Wireframe Abstract Art */}
        <div className="w-1/2 h-full relative z-10 flex items-center justify-center p-16">
          <div className="w-[90%] h-[80%] relative">

            {/* Concentric Wireframe Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] aspect-square border border-white/10 rounded-full flex items-center justify-center pointer-events-none">
              <div className="w-[70%] h-[70%] border border-white/20 rounded-full flex items-center justify-center">
                <div className="w-[50%] h-[50%] border border-white/10 rounded-full"></div>
              </div>
            </div>

            {/* Cross Lines */}
            <div className="absolute top-0 bottom-0 left-[20%] w-[1px] bg-white/10 pointer-events-none"></div>
            <div className="absolute top-0 bottom-0 right-[20%] w-[1px] bg-white/10 pointer-events-none"></div>
            <div className="absolute top-[30%] left-0 right-0 h-[1px] bg-white/10 pointer-events-none"></div>

            {/* Connecting Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0,30 L100,70" stroke="rgba(255,255,255,0.3)" strokeWidth="0.2" strokeDasharray="1 2" fill="none" />
              <path d="M20,100 L80,0" stroke="rgba(255,255,255,0.2)" strokeWidth="0.2" strokeDasharray="2 4" fill="none" />
            </svg>

            {/* Floating Terminal Input Point - Wireframe Style */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl bg-prussian/40 backdrop-blur-xl border border-white/40 p-10 shadow-[0_30px_60px_rgba(0,0,0,0.5)]">
              <div className="flex justify-between items-center mb-8">
                <div className="font-mono text-[24px] text-white/50 tracking-widest font-semibold">TARGET_PROMPT</div>
                <div className="flex gap-3">
                  <div className="w-3 h-3 border border-white/50"></div>
                  <div className="w-3 h-3 bg-white/80"></div>
                </div>
              </div>

              <div className="font-sans text-4xl leading-[1.4] text-white">
                「上网搜一下 <span className="font-mono bg-white text-prussian px-2 py-0.5 mx-1 font-bold">cafe3310</span> 这个开发者，他家猫长啥样？」
              </div>

              <div className="mt-12 flex justify-between items-center border-t border-white/20 pt-6">
                <div className="font-mono text-[24px] text-white/40 flex items-center gap-2">
                  <span className="w-2 h-2 bg-white/40 block animate-pulse"></span>
                  WAITING_FOR_INPUT
                </div>
                <button className="font-mono text-[24px] text-prussian tracking-widest bg-white px-6 py-3 hover:bg-white/90 transition-colors">
                  EXECUTE
                </button>
              </div>
            </div>

            {/* Additional floating wireframe details */}
            <div className="absolute top-16 right-12 border border-white/30 p-5 bg-white/5 backdrop-blur-md">
               <div className="font-mono text-[24px] text-white/50 mb-2">PROCESS_ID</div>
               <div className="font-mono text-[24px] text-white">0xCAFEBABE</div>
            </div>

            <div className="absolute bottom-16 left-12 border-l border-b border-white/30 p-5 bg-white/5 backdrop-blur-md">
               <div className="font-mono text-[24px] text-white/50 mb-2">DEVICE_TARGET</div>
               <div className="font-mono text-[24px] text-white">NOKIA_3310</div>
            </div>

          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}
