import React from 'react';
import SlideWrapper from '../SlideWrapper';
import { Terminal, Globe } from 'lucide-react';

export default function FinalSlide() {
  return (
    <SlideWrapper>
      <div className="w-full h-full flex relative z-0 bg-[#EFECE8] text-[#1D1D1D] overflow-hidden items-center justify-center">
        {/* Background Grid */}
        <div className="absolute inset-0 z-0 opacity-40 pointer-events-none" style={{ backgroundImage: 'linear-gradient(to right, #e5e5e5 1px, transparent 1px), linear-gradient(to bottom, #e5e5e5 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        <div className="w-full max-w-5xl relative z-10 flex flex-col items-center mt-[-10px]">
          
          <h2 className="font-display text-6xl tracking-tight text-[#1D1D1D] mb-6 text-center leading-tight">
            我们不卖 Agent Harness。<br/>
            <span className="text-[#B54A2D]">有诉求，自己写。</span>
          </h2>

          <p className="text-[24px] text-[#3A3935] mb-12 text-center max-w-3xl leading-relaxed">
            但如果你缺个干苦力的脑子，可以试试我们的 <strong className="font-mono text-[#1D1D1D] bg-[#1D1D1D]/10 px-2 py-1 rounded">ring-2.6-1t</strong>。主打 Token 效率与极低幻觉。
          </p>

          <div className="w-full grid grid-cols-2 gap-8 items-stretch h-[260px]">
            
            {/* Left: JSON Block */}
            <div className="bg-[#1D1D1D] text-[#EFECE8] rounded-xl p-8 font-mono text-[24px] leading-relaxed shadow-lg relative overflow-hidden text-left flex flex-col justify-center">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#4B6A53]"></div>
              <div className="flex items-center text-[#8A8985] mb-6 border-b border-white/10 pb-4">
                <Terminal className="w-4 h-4 mr-2" />
                <span>the_pragmatic_choice.json</span>
              </div>
              <pre className="text-[#A3B8CC]">
<span className="text-[#D3B47D]">{"{"}</span>
{"  "}<span className="text-[#86B1D2]">"model"</span>: <span className="text-[#A2C794]">"ring-2.6-1t"</span>,
{"  "}<span className="text-[#86B1D2]">"role"</span>: <span className="text-[#A2C794]">"background_worker"</span>,
{"  "}<span className="text-[#86B1D2]">"hallucination_tolerance"</span>: <span className="text-[#A2C794]">"strict"</span>
<span className="text-[#D3B47D]">{"}"}</span>
              </pre>
              <div className="mt-8 pt-4 border-t border-white/10 text-[#A2C794] flex items-center">
                <span className="opacity-50 mr-2 text-[24px]">◆</span>
                <span className="tracking-widest uppercase">Free on OpenRouter this week</span>
              </div>
            </div>

            {/* Right: Quote Block */}
            <div className="bg-white/60 rounded-xl p-8 border border-[#1D1D1D]/10 shadow-sm shadow-[#1D1D1D]/5 flex flex-col justify-center text-left relative">
               <div className="text-[80px] text-[#B54A2D] opacity-10 absolute -top-2 left-2 font-display leading-none">"</div>
               <div className="relative z-10 pl-4">
                 <p className="text-[24px] text-[#3A3935] leading-relaxed font-display tracking-wide mb-8">
                   <strong className="text-[#1D1D1D] font-medium">宁可左右脑互搏卡死，也绝不给你编瞎话。</strong>
                   <br/><br/>少了点“人味儿”，但天生是个打工圣体。
                 </p>
                 <div className="text-[24px] font-mono tracking-widest text-[#8A8985] uppercase flex items-center">
                   <div className="w-4 h-px bg-[#8A8985] mr-3"></div>
                   cafe3310
                 </div>
               </div>
            </div>

          </div>

          {/* Bottom Action / Contact Row */}
          <div className="w-full mt-10 flex items-center justify-between border-t border-[#1D1D1D]/10 pt-6">
            
            <div className="flex items-center space-x-8">
              <div className="flex flex-col">
                 <span className="text-[24px] text-[#8A8985] font-mono tracking-wider uppercase mb-2">Status</span>
                 <div className="flex items-center text-[#4B6A53] bg-[#4B6A53]/10 px-3 py-1.5 rounded font-medium text-[24px] border border-[#4B6A53]/20">
                   <div className="relative flex w-2.5 h-2.5 mr-2">
                     <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4B6A53] opacity-40"></span>
                     <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#4B6A53]"></span>
                   </div>
                   OpenRouter 本周限免中
                 </div>
              </div>

              <div className="w-px h-10 bg-[#1D1D1D]/10"></div>

              <div className="flex flex-col">
                 <span className="text-[24px] text-[#8A8985] font-mono tracking-wider uppercase mb-2">Website</span>
                 <div className="flex items-center text-[#1D1D1D] text-[24px]">
                   <Globe className="w-4 h-4 mr-2 opacity-60" />
                   <span className="font-mono bg-[#1D1D1D]/5 px-2.5 py-1 rounded border border-[#1D1D1D]/10 tracking-wide">ant-ling.com</span>
                 </div>
              </div>
            </div>

            <div className="flex flex-col items-end">
               <span className="text-[24px] text-[#8A8985] font-mono tracking-wider uppercase mb-2">Contact</span>
               <div className="flex items-center text-[#3A3935] text-[24px]">
                 <span className="mr-2 opacity-80">找我交流：</span>
                 <span className="font-mono bg-[#1D1D1D]/5 px-2.5 py-1 rounded border border-[#1D1D1D]/10 text-[#1D1D1D] font-medium mr-3">@cafe3310</span>
                 <span className="text-[#8A8985] text-[24px]">（全网固定三花猫头像 🐈）</span>
               </div>
            </div>

          </div>

        </div>
      </div>
    </SlideWrapper>
  );
}
