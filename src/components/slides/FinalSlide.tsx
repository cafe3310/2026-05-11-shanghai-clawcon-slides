import React from 'react';
import SlideWrapper from '../SlideWrapper';

export default function FinalSlide() {
  return (
    <SlideWrapper>
      <div className="w-full h-full flex relative z-0 bg-paper text-dark overflow-hidden items-center justify-center">
        {/* Background Grid */}
        <div className="absolute inset-0 z-0 opacity-40 pointer-events-none" style={{ backgroundImage: 'linear-gradient(to right, #E0E0DB 1px, transparent 1px), linear-gradient(to bottom, #E0E0DB 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        <div className="w-full h-full flex flex-col justify-center px-32 relative z-10">

           <div className="mb-24">
              <h1 className="font-display text-[5.5rem] leading-[1.1] tracking-tight text-dark mb-4">
                OpenClaw 提供了不错的基座，<br/>
                <span className="text-prussian">有诉求不妨二次开发，试试前面的经验</span>
              </h1>
              <h2 className="font-display text-[3.5rem] leading-[1.1] text-dark/60 tracking-tight">
                Having the solid foundation from Openclaw<br/>
                Just build upon and explore these principles.
              </h2>
           </div>

           <div className="grid grid-cols-12 gap-8 w-full relative">
              {/* Left Highlight Block */}
              <div className="col-span-8 bg-white/40 backdrop-blur-xl rounded-xl p-12 flex flex-col justify-between border border-white/50 shadow-[0_20px_40px_rgba(0,0,0,0.05)] relative overflow-hidden z-10">
                <div className="font-mono text-[28px] text-dark/40 tracking-widest uppercase mb-8">
                  The Workhorse Model
                </div>
                <p className="font-sans text-[36px] leading-relaxed mb-16 text-dark/90">
                  如果你缺个低幻觉、干重活的主力模型，<br />试试 <strong className="font-mono bg-dark/5 px-3 py-1 font-bold text-dark tracking-wide border border-dark/10">Ring-2.6-1T</strong>。主打 Token 效率与极低幻觉。<br/>
                  <span className="text-[28px] text-dark/60 mt-4 block">
                    If you need a low-hallucination workhorse model for heavy lifting, try Ring-2.6-1T. Built for token efficiency and near-zero hallucinations.
                  </span>
                </p>
                <div className="flex items-center">
                  <span className="bg-prussian text-white px-4 py-2 font-sans font-medium text-[28px] tracking-wide inline-block">
                    Free On OpenRouter 最近限免
                  </span>
                </div>
              </div>

              {/* Right Resources Block */}
              <div className="col-span-4 bg-white/60 p-12 flex flex-col justify-between border border-dark/10 shadow-sm">
                <div className="font-mono text-[28px] text-dark/40 tracking-widest uppercase mb-8">
                  Resources & Contact
                </div>
                <div className="flex flex-col gap-12 mt-auto">
                  <div>
                    <div className="font-sans text-[24px] text-dark/60 mb-2">
                      了解更多与社群 (X, WeChat, Discord)<br/>
                      <span className="text-[24px] text-dark/40">Learn More & Join the Community</span>
                    </div>
                    <div className="font-mono text-[32px] text-prussian font-bold underline underline-offset-8 decoration-prussian/30 mt-2">
                      ant-ling.com
                    </div>
                  </div>
                  <div>
                    <div className="font-sans text-[24px] text-dark/60 mb-2">
                      或者线上找我闲聊<br/>
                      <span className="text-[24px] text-dark/40">Or chat with me online</span>
                    </div>
                    <div className="font-mono text-[32px] text-dark font-bold mt-2">
                      @cafe3310
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
