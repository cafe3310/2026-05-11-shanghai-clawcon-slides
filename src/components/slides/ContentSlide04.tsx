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

          <div className="flex flex-col gap-8">
            <p className="font-sans text-3xl font-normal text-dark/80 leading-relaxed ">
              基于 Prompt / Skill 的防护不可能一直有效。
            </p>

            <p className="font-sans text-3xl font-normal text-dark/70 leading-relaxed ">
              它们极易被文件链接等机制绕过。如果你的设备管着钱，最好想想更强的手段：
            </p>

            <div className="mt-4 bg-prussian text-white p-10 rounded-none relative overflow-hidden">
               <p className="font-sans text-3xl font-medium leading-relaxed tracking-wide">
                 安全护栏必须硬编码在模型之外（外部 Harness / Filesystem / 虚拟化隔离）。
               </p>
            </div>
          </div>

        </div>

      </div>
    </SlideWrapper>
  );
}
