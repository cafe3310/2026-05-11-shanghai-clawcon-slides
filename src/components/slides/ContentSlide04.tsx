import React from 'react';
import SlideWrapper from '../SlideWrapper';
import demoVideo from '../../assets/videos/showcase-26-deep-research_03-visual.mp4';

export default function ContentSlide04() {
  return (
    <SlideWrapper>
      <div className="w-full h-full pt-20 px-24 pb-16 flex relative z-0">
        
        {/* Left Column: Video Comparisons */}
        <div className="w-1/2 h-full flex flex-col justify-center pr-16 gap-8 relative z-10">
          
          {/* Top Video: External Harness */}
          <div className="flex flex-col gap-3">
            <div className="w-full aspect-[16/9] bg-[#2A2A2A] rounded-xl overflow-hidden relative shadow-lg border border-dark/5">
              <video 
                src={demoVideo}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
            <div className="font-mono text-[24px] tracking-widest text-dark/60 uppercase pl-2">
              <span className="text-prussian font-bold">[ PASS ]</span> External Architecture Harness
            </div>
          </div>

          {/* Bottom Video: Prompt Harness */}
          <div className="flex flex-col gap-3">
            <div className="w-full aspect-[16/9] bg-[#2A2A2A] rounded-xl overflow-hidden relative shadow-lg border border-dark/5">
              <video 
                src={demoVideo}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
            <div className="font-mono text-[24px] tracking-widest text-dark/60 uppercase pl-2">
              <span className="text-[#AA4444] font-bold">[ FAIL ]</span> Prompt Harness Bypass
            </div>
          </div>

        </div>

        {/* Right Column: Content */}
        <div className="w-1/2 h-full flex flex-col justify-center pl-8">
          
          <div className="mb-10 w-full">
            <div className="font-mono text-[32px] font-bold text-prussian tracking-widest uppercase mb-2 select-none">
              01 / SAFE
            </div>
            <h1 className="font-display text-[4rem] leading-tight tracking-tight text-dark mb-6">
              提示词防线 = 没防线
            </h1>
          </div>

          <div className="flex flex-col gap-6">
            <p className="font-sans text-[24px] font-light text-dark/80 leading-relaxed border-l-2 border-prussian/20 pl-6">
              任何基于 Prompt 的所谓 Harness 都并非完全靠谱。
            </p>
            
            <p className="font-sans text-[24px] font-light text-dark/70 leading-relaxed pl-6">
              基于提示词的防御（如<span className="font-mono bg-dark/5 px-2 py-0.5 rounded text-dark/80 mx-1">不要写 X</span>）极易被文件链接等机制绕过。在涉及资金或核心业务的任务面前，这种防御形同虚设。
            </p>

            <div className="mt-8 bg-dark text-white p-8 rounded-xl relative overflow-hidden">
               <p className="font-sans text-[24px] font-medium leading-relaxed tracking-wide">
                 Security 逻辑必须硬编码在模型之外（代码层 / 网关层隔离）。
               </p>
            </div>
          </div>

        </div>

      </div>
    </SlideWrapper>
  );
}
