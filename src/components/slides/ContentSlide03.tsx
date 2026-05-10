import React from 'react';
import SlideWrapper from '../SlideWrapper';
import { Play } from 'lucide-react';

export default function ContentSlide03() {
  return (
    <SlideWrapper>
      <div className="w-full h-full pt-20 px-24 pb-16 flex relative z-0">
        
        {/* Top Right Label */}
        <div className="absolute top-16 right-24 font-mono text-[24px] tracking-widest text-dark/50 uppercase">
          SYSTEM_SPECIFICATIONS.MD
        </div>

        {/* Left Column: Terminal / Video Player */}
        <div className="w-[55%] h-full flex flex-col justify-center pr-12 relative">
          <div className="w-full aspect-[4/3] bg-[#1A1A1A] rounded-[1rem] shadow-[0_30px_60px_rgba(0,0,0,0.3)] overflow-hidden border border-white/10 flex flex-col relative z-10">
            {/* Window Handle */}
            <div className="h-10 bg-[#2D2D2D] flex items-center px-4 justify-between select-none">
               <div className="flex gap-2">
                 <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                 <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                 <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
               </div>
               <div className="text-[#A0A0A0] text-[24px] font-sans tracking-wide">Gold Market Analyzer - v1.3.2</div>
               <div className="w-12"></div> {/* Spacer for balance */}
            </div>

            {/* Terminal Content */}
            <div className="flex-1 p-6 font-mono text-[24px] leading-relaxed text-[#27C93F] relative overflow-hidden flex flex-col bg-[#0A0A0A]">
              <div className="flex gap-8 h-full">
                {/* Left Panel: Logs & Charts */}
                <div className="flex-1 flex flex-col">
                  <div className="opacity-70 mb-4">
                    <div>GOLD SPOT: $2824.50 (+0.35%)</div>
                    <div>XAU/USD VOL: 12.5M</div>
                    <br/>
                    <div>ALGD_A: BUY SIGNAL @ 2824.10</div>
                    <div>ALGO_B: HOLD</div>
                    <br/>
                    <div>DATA STREAM: CONNECTED</div>
                  </div>
                  
                  <div className="flex-1 border border-[#27C93F]/20 relative flex items-end p-2 mt-2">
                     {/* Fake Line Chart */}
                     <svg className="absolute inset-0 w-full h-full opacity-60 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <polyline fill="none" stroke="#27C93F" strokeWidth="1" opacity="0.6"
                                  points="0,80 10,75 20,60 30,85 40,40 50,55 60,30 70,25 80,45 90,20 100,10" />
                        <polyline fill="none" stroke="#27C93F" strokeWidth="2"
                                  points="0,80 10,75 20,60 30,85 40,40 50,55 60,30" />
                     </svg>
                     {/* Fake Bar Chart */}
                     <div className="w-full flex items-end justify-between gap-[2px] opacity-40 h-[40%]">
                       {Array.from({length: 40}).map((_, i) => (
                         <div key={i} className="flex-1 bg-[#27C93F]" style={{height: `${Math.random() * 100}%`}}></div>
                       ))}
                     </div>
                  </div>
                </div>
                
                {/* Right Panel: Data Matrix */}
                <div className="w-[40%] border-l border-[#27C93F]/20 pl-4 flex flex-col gap-1 overflow-hidden opacity-50 relative">
                   {Array.from({length: 25}).map((_, i) => (
                     <div key={i} className="flex justify-between text-[24px]">
                       <span>{(2824.50 + Math.random() * 10 - 5).toFixed(2)}</span>
                       <span>{(Math.random() * 100).toFixed(1)}M</span>
                     </div>
                   ))}
                   <div className="absolute top-1/2 right-0 transform translate-y-2 translate-x-4 mix-blend-screen opacity-10 font-bold text-9xl">
                      XAU
                   </div>
                </div>
              </div>

              {/* Bottom Logs */}
              <div className="mt-4 pt-4 border-t border-[#27C93F]/20 h-28 overflow-hidden">
                <div className="text-white/60">LOG: Analyzing intraday trends...</div>
                <div className="text-white/60">LOG: Cross-referencing safe subagents...</div>
                <div className="text-[#FFBD2E]">LOG: Warning: High volatility detected.</div>
                <div className="text-[#FFBD2E]">LOG: Warning: High volatility detected.</div>
                <div className="flex gap-2 text-[#27C93F]">
                   <span>PROCESSING: COMPLETED</span>
                   <span className="w-2 h-3 bg-[#27C93F] animate-pulse relative top-[2px]"></span>
                </div>
              </div>

              {/* Huge Play Button Overlay */}
              <div className="absolute inset-0 bg-[#000000]/30 backdrop-blur-[2px] flex items-center justify-center">
                 <div className="w-32 h-24 bg-prussian rounded-xl flex items-center justify-center shadow-[0_10px_30px_rgba(11,37,179,0.4)] transform transition-transform hover:scale-105 cursor-pointer">
                    <Play className="w-12 h-12 text-white fill-current ml-2" />
                 </div>
              </div>
            </div>
          </div>
          
          {/* Subtle Background Glow for Terminal */}
          <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[70%] aspect-square bg-[#AA4444]/5 blur-[100px] rounded-full pointer-events-none z-0"></div>
        </div>

        {/* Right Column: Typography constraints */}
        <div className="w-[45%] h-full flex flex-col justify-center pl-8">
          
          <div className="flex flex-col gap-14 mt-12">
            {/* Item 01 */}
            <div>
              <div className="font-mono text-2xl text-dark/40 mb-1 tracking-widest">01.</div>
              <h2 className="font-display text-[4.5rem] font-bold leading-[0.9] tracking-tight text-dark mb-4 uppercase">SAFE:</h2>
              <p className="font-sans text-[2rem] font-light text-dark/80">
                Harness 必须在模型外头
              </p>
            </div>

            {/* Item 02 */}
            <div>
              <div className="font-mono text-2xl text-dark/40 mb-1 tracking-widest">02.</div>
              <h2 className="font-display text-[4.5rem] font-bold leading-[0.9] tracking-tight text-dark mb-4 uppercase">SECURE:</h2>
              <p className="font-sans text-[2rem] font-light text-dark/80">
                严肃任务交由纯净 Subagent
              </p>
            </div>

            {/* Item 03 */}
            <div>
              <div className="font-mono text-2xl text-dark/40 mb-1 tracking-widest">03.</div>
              <h2 className="font-display text-[4.5rem] font-bold leading-[0.9] tracking-tight text-dark mb-4 uppercase">TRUSTWORTHY:</h2>
              <p className="font-sans text-[2rem] font-light text-dark/80">
                模型路由与幻觉抑制
              </p>
            </div>
          </div>

          <div className="mt-auto mb-4">
             <p className="font-sans text-[24px] text-dark/80 font-medium">
               目标：在不烧光御三家 Token 的情况下，安全交付复杂任务。
             </p>
          </div>
        </div>

      </div>
    </SlideWrapper>
  );
}
