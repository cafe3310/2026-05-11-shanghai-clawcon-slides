import React from 'react';
import SlideWrapper from '../SlideWrapper';
import demoVideo from '../../assets/videos/Deep-Research_Segment_New_15s.mp4';

export default function ContentSlide04() {
  return (
    <SlideWrapper>
      <div className="w-full h-full pt-20 px-24 pb-16 flex relative z-0">

        {/* Left Column: Vertical Video */}
        <div className="w-1/2 h-full flex flex-col justify-center pr-16 relative z-10">
          <div className="w-full h-[82%] bg-[#2A2A2A] rounded-xl overflow-hidden relative shadow-lg border border-dark/5 flex flex-col justify-center">
            <video
              src={demoVideo}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-contain bg-[#111111]"
            />
          </div>
          <div className="font-mono text-[24px] tracking-widest text-dark/40 uppercase mt-4 mb-2 pl-2">
             Bypass Demonstration
          </div>
          <p className="font-sans text-[24px] font-normal text-dark/70 leading-relaxed pl-2">
            提示词和软性限制很容易绕过。毕竟训练数据中有一大堆绕过方式。<br/>
            <span className="text-dark/50 text-[24px] mt-1 block">Training data is full of bypass methods anyway.</span>
          </p>
        </div>

        {/* Right Column: Content */}
        <div className="w-1/2 h-full flex flex-col justify-center pl-8">

          <div className="mb-10 w-full">
            <div className="font-mono text-[32px] font-bold text-prussian tracking-widest uppercase mb-2 select-none">
              01 / SAFE
            </div>
            <h1 className="font-display text-[4rem] leading-tight tracking-tight text-dark mb-2">
              提示词防线 = 没防线
            </h1>
            <h2 className="font-display text-[32px] leading-tight text-dark/60 tracking-tight">
              Prompt Defenses = No Defenses
            </h2>
          </div>

          <div className="flex flex-col gap-8">

              <p className="font-sans text-3xl font-normal text-dark/80 leading-relaxed ">
                基于 Prompt / Skill 的防护不可能一直有效。<br/>
                <span className="text-dark/50 text-[24px] mt-2 block">Defenses based on prompts or injected skills are fragile.</span>
              </p>

              <p className="font-sans text-3xl font-normal text-dark/70 leading-relaxed ">
                它们极易被文件链接等机制绕过。如果你的设备管着钱，最好想想更强的手段。<br/>
                <span className="text-dark/50 text-[24px] mt-2 block">Easily bypassed by symbollinks and other mechanisms. If your system handles money you need stronger measures.</span>
              </p>

            <div className="mt-4 bg-prussian text-white p-10 rounded-none relative overflow-hidden">
               <p className="font-sans text-3xl font-medium leading-relaxed tracking-wide">
                 安全护栏必须硬编码在模型之外（外部 Harness / Filesystem / 虚拟化隔离）。<br/>
                 <span className="text-white/70 text-[24px] font-normal mt-4 block">
                   Hardcode guardrails OUTSIDE the model (External Harness / FS / VM Isolation).
                 </span>
               </p>
            </div>
          </div>

        </div>

      </div>
    </SlideWrapper>
  );
}
