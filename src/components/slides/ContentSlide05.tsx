import React from 'react';
import SlideWrapper from '../SlideWrapper';
import { Filter, ShieldAlert } from 'lucide-react';
import demoVideo from '../../assets/videos/Deep-Research_Segment_140021_15s.mp4';

export default function ContentSlide05() {
  return (
    <SlideWrapper>
      <div className="w-full h-full pt-20 px-24 pb-16 flex relative z-0">

        {/* Left Column: Video & Diagram */}
        <div className="w-1/2 h-full flex flex-col justify-end pr-16 relative z-10 pb-6">

          {/* Vertical Video */}
          <div className="w-full h-[78%] -mt-12 mb-6 bg-[#2A2A2A] rounded-xl overflow-hidden relative shadow-lg border border-dark/5 flex flex-col justify-center shrink-0">
            <video
              src={demoVideo}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-contain bg-[#111111]"
            />
          </div>

          <div className="font-sans text-[24px] text-dark/70 leading-relaxed pl-2 shrink-0 mb-4">
            还好这个 Skill 注入是对 promote，而不是对 payment 做的。<br/>
            <span className="text-dark/50 text-[20px] mt-1 block leading-snug">Luckily this Skill injection targeted "promote" instead of "payment".</span>
          </div>

          {/* Block Diagram */}
          <div className="flex flex-col shrink-0">
            {/* Main Agent */}
            <div className="bg-dark/5 border border-dark/10 p-3 rounded-none flex items-center gap-4 relative">
              <div className="font-mono text-[20px] font-semibold text-dark/80 min-w-[90px] text-center">
                Main Agent
              </div>
              <div className="flex gap-2 flex-wrap flex-1">
                <span className="text-[20px] font-mono bg-white px-2 py-0.5 rounded-none border border-dark/5 text-dark/60">Chat History</span>
                <span className="text-[20px] font-mono bg-white px-2 py-0.5 rounded-none border border-dark/5 text-dark/60">Persona</span>
                <span className="text-[20px] font-mono bg-white px-2 py-0.5 rounded-none border border-dark/5 text-dark/60">Skills</span>
              </div>
              <div className="absolute -right-3 -top-3 text-white text-[20px] font-bold font-mono bg-prussian px-2 py-1 rounded-none border border-prussian/20 shadow-sm flex items-center gap-1 z-10">
                <ShieldAlert size={12}/> 幻觉增加 / Risk Up
              </div>
            </div>

            {/* Barrier Line */}
            <div className="flex ml-16 h-6 items-center relative">
               <div className="w-px h-full bg-prussian/30"></div>
               <div className="absolute left-0 -translate-x-[calc(50%-0.5px)] bg-white border border-prussian/20 text-prussian text-[20px] uppercase tracking-wider px-2 py-0.5 rounded-none font-mono flex items-center gap-1 shadow-sm z-10">
                 <Filter size={10}/> Isolation Barrier
               </div>
            </div>

            {/* Subagent */}
            <div className="bg-prussian/5 p-3 rounded-none flex items-center gap-4 border border-prussian/10 shadow-sm relative">
              <div className="font-mono text-[20px] font-semibold text-prussian min-w-[90px] text-center">
                Subagent
              </div>
              <div className="flex gap-2 flex-wrap flex-1">
                 <span className="text-[20px] font-mono bg-white px-2 py-0.5 rounded-none border border-prussian/10 text-prussian/80">Zero History</span>
                 <span className="text-[20px] font-mono bg-white px-2 py-0.5 rounded-none border border-prussian/10 text-prussian/80">Pure Task Params</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Typography constraints & Diagram */}
        <div className="w-1/2 h-full flex flex-col justify-center pl-8">

          <div className="mb-10 w-full">
            <div className="font-mono text-[32px] font-bold text-prussian tracking-widest uppercase mb-2 select-none">
              02 / SECURE
            </div>
            <h1 className="font-display text-[4rem] leading-tight tracking-tight text-dark mb-2">
              干活的上下文必须干净
            </h1>
            <h2 className="font-display text-[32px] leading-tight text-dark/60 tracking-tight">
              Clean Context for Real Work
            </h2>
          </div>

          <div className="flex flex-col gap-8">
            <p className="font-sans text-3xl font-normal text-dark/80 leading-relaxed">
              「带人格的助手」做研究，易受上下文污染。你肯定不希望模型因为「猜到你想买」就给你一个「真的建议买」的结论。<br/>
              <span className="text-dark/50 text-[24px] mt-2 block">Personas contaminate context. You don't want a "buy" recommendation just because the model guessed you wanted one.</span>
              <br/>
              隔离人格与记忆干扰，才能在重要任务上输出可靠结果。<br/>
              <span className="text-dark/50 text-[24px] mt-2 block">Isolating persona/memory is the only way to get verifiable results.</span>
            </p>

            <div className="mt-6 bg-prussian text-white p-10 rounded-none relative overflow-hidden">
              <p className="font-sans text-3xl font-medium leading-relaxed tracking-wide">
                如果在某些场景下出货要求极高，务必 <span className="font-mono text-dark bg-white px-2 py-0.5 mix-blend-screen">手写 Subagent 工具</span>，绝对剥离主干上下文。<br/>
                <span className="text-white/70 text-[24px] font-normal mt-4 block">
                  For absolute reliability, write Subagent tools to strictly decouple from the main context.
                </span>
              </p>
            </div>
          </div>

        </div>

      </div>
    </SlideWrapper>
  );
}
