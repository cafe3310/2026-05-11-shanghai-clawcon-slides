import React from 'react';
import SlideWrapper from '../SlideWrapper';
import demoVideo from '../../assets/videos/showcase-26-deep-research_03-visual.mp4';

export default function ContentSlide03() {
  return (
    <SlideWrapper>
      <div className="w-full h-full pt-20 px-24 pb-16 flex relative z-0">

        {/* Left Column: Video Player */}
        <div className="w-[55%] h-full flex flex-col justify-center pr-12 relative">
          <div className="w-full aspect-[4/3] bg-[#1A1A1A] rounded-[1rem] shadow-[0_30px_60px_rgba(0,0,0,0.3)] overflow-hidden border border-white/10 flex flex-col relative z-10">
            <video
              src={demoVideo}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </div>

          <div className="mt-6 text-[24px] text-dark/60 font-mono text-left z-10 pl-2">
            OpenClaw + DeepResearch Sub-agent + Ring-2.6-1T<br/>
            黄金投资与风险调研报告 <span className="text-dark/40">/ Gold Investment & Risk Analysis</span>
          </div>

          {/* Subtle Background Glow for Video */}
          <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[70%] aspect-square bg-prussian/5 blur-[100px] rounded-full pointer-events-none z-0"></div>
        </div>

        {/* Right Column: Content */}
        <div className="w-[45%] h-full flex flex-col justify-center pl-8">

          <div className="mb-10 w-full">
            <h1 className="font-display text-[4rem] leading-tight tracking-tight text-dark mb-2">
              在 Claw 中构建可信赖的 Agent
            </h1>
            <h2 className="font-display text-[32px] leading-tight text-dark/60 tracking-tight">
              Building Trustworthy Agents
            </h2>
          </div>

          <div className="flex flex-col gap-10">
            {/* Item 01 */}
            <div>
              <div className="font-mono text-[32px] font-bold text-prussian tracking-widest uppercase mb-2 select-none">01 / SAFE</div>
              <h3 className="font-display text-4xl text-dark mb-1">Guardrail 必须在模型外头</h3>
              <p className="font-sans text-[28px] font-normal text-dark/60">
                Externalize Guardrails
              </p>
            </div>

            {/* Item 02 */}
            <div>
              <div className="font-mono text-[32px] font-bold text-prussian tracking-widest uppercase mb-2 select-none">02 / SECURE</div>
              <h3 className="font-display text-4xl text-dark mb-1">严肃任务交给纯净 Subagent</h3>
              <p className="font-sans text-[28px] font-normal text-dark/60">
                Pure Subagents for Critical Tasks
              </p>
            </div>

            {/* Item 03 */}
            <div>
              <div className="font-mono text-[32px] font-bold text-prussian tracking-widest uppercase mb-2 select-none">03 / TRUSTWORTHY</div>
              <h3 className="font-display text-4xl text-dark mb-1">模型路由与幻觉抑制</h3>
              <p className="font-sans text-[28px] font-normal text-dark/60">
                Model Routing & Hallucination Control
              </p>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-dark/10">
             <p className="font-sans text-[28px] text-dark/80 font-medium leading-relaxed">
               在不烧出天价 Token 的前题下交付复杂任务（可能也包括辅助投资）。让你有更多时间摸鱼。<br/>
               <span className="text-dark/50 text-[24px] font-normal mt-2 block">
                 Deliver complex tasks without burning tokens (and maybe help invest). More time to slack off.
               </span>
             </p>
          </div>
        </div>

      </div>
    </SlideWrapper>
  );
}
