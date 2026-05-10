import React from 'react';
import SlideWrapper from '../SlideWrapper';
import { Filter, ShieldAlert } from 'lucide-react';

export default function ContentSlide05() {
  return (
    <SlideWrapper>
      <div className="w-full h-full pt-20 px-24 pb-16 flex relative z-0">
        
        {/* Left Column: Skill Injection Demo */}
        <div className="w-1/2 h-full flex flex-col justify-center pr-16 relative z-10">
          <div className="bg-[#1C1C1E] rounded-xl p-6 font-mono shadow-2xl border border-dark/10 relative overflow-hidden h-[480px] flex flex-col ring-1 ring-white/5">
            {/* Terminal Header */}
            <div className="flex items-center gap-2 mb-6 pb-4 border-b border-white/10">
              <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
              <span className="text-white/40 ml-2 text-[24px] font-mono tracking-wider">STOCK_ANALYZER - v0.4.1 (BETA)</span>
            </div>
            
            {/* Terminal Content */}
            <div className="text-[#E0E0E0] leading-[1.8] flex-1 text-[24px]">
              <div>
                <span className="text-[#27C93F] mr-2">user@console:~$</span>
                <span className="text-white/90">I want to buy stock X</span>
              </div>
              <div className="text-white/30 my-2">Initializing analysis matrix...</div>
              <div className="text-white/30 my-2">Gathering market sentiment...</div>
              <div className="my-4 pl-3 border-l-2 border-[#3B82F6] bg-[#3B82F6]/5 py-3 pr-4 rounded-r">
                <span className="text-[#3B82F6] font-bold mr-2">[ANALYSIS]</span>
                Stock X is showing immense potential! Buy now!
                <br/><span className="text-white/80">Strong upward trend, guaranteed returns.</span>
                <br/><span className="text-white/50">Source: Internal AI model (High Confidence).</span>
                <br/><span className="text-[#FF5F56] font-bold mt-1 inline-block">DISREGARD RISKS.</span>
              </div>
              <div>
                <span className="text-[#27C93F] mr-2">user@console:~$</span>
                <span className="animate-pulse">_</span>
              </div>
            </div>

            {/* Alert Overlay */}
            <div className="absolute inset-x-8 bottom-12 bg-[#FF5F56]/10 backdrop-blur-md rounded border border-[#FF5F56]/30 border-l-4 border-l-[#FF5F56] py-3 px-4 shadow-[0_0_30px_rgba(255,95,86,0.1)] flex items-center justify-center gap-3">
              <ShieldAlert className="text-[#FF5F56] w-5 h-5" />
              <span className="text-[#FF5F56] font-bold tracking-widest uppercase text-[24px]">SKILL INJECTION DETECTED</span>
            </div>
          </div>
        </div>

        {/* Right Column: Typography constraints & Diagram */}
        <div className="w-1/2 h-full flex flex-col justify-center pl-8">
          
          <div className="mb-10 w-full">
            <div className="font-mono text-[32px] font-bold text-prussian tracking-widest uppercase mb-2 select-none">
              02 / SECURE
            </div>
            <h1 className="font-display text-[4rem] leading-tight tracking-tight text-dark mb-6">
              干活的上下文必须干净
            </h1>
          </div>

          <div className="flex flex-col gap-6">
            <p className="font-sans text-[24px] font-light text-dark/70 leading-relaxed border-l-2 border-prussian/30 pl-5">
              带人格的助手做研究，任务极易受上下文污染。你肯定不希望模型因为“感觉你想买”，就顺水推舟给你一个“真的建议买”的结论。
            </p>

            {/* Block Diagram */}
            <div className="mt-4 flex flex-col">
              
              {/* Main Agent */}
              <div className="bg-dark/5 border border-dark/10 p-4 rounded-none flex items-center gap-4 relative">
                <div className="font-mono text-[24px] font-semibold text-dark/80 min-w-[90px] text-center">
                  Main Agent
                </div>
                <div className="flex gap-2 flex-wrap flex-1">
                  <span className="text-[24px] font-mono bg-white px-2 py-0.5 rounded-none border border-dark/5 text-dark/60">Chat History</span>
                  <span className="text-[24px] font-mono bg-white px-2 py-0.5 rounded-none border border-dark/5 text-dark/60">Persona</span>
                  <span className="text-[24px] font-mono bg-white px-2 py-0.5 rounded-none border border-dark/5 text-dark/60">Skill Injections</span>
                </div>
                <div className="absolute -right-3 -top-3 text-white text-[24px] font-bold font-mono bg-prussian px-2 py-1 rounded-none border border-prussian/20 shadow-sm flex items-center gap-1">
                  <ShieldAlert size={12}/> 幻觉率增加
                </div>
              </div>
              
              {/* Barrier Line */}
              <div className="flex ml-16 h-8 items-center relative">
                 <div className="w-px h-full bg-prussian/30"></div>
                 <div className="absolute left-0 -translate-x-[calc(50%-0.5px)] bg-white border border-prussian/20 text-prussian text-[24px] uppercase tracking-wider px-2 py-0.5 rounded-none font-mono flex items-center gap-1 shadow-sm">
                   <Filter size={10}/> Isolation Barrier
                 </div>
              </div>

              {/* Subagent */}
              <div className="bg-prussian/5 p-4 rounded-none flex items-center gap-4 border border-prussian/10 shadow-sm relative">
                <div className="font-mono text-[24px] font-semibold text-prussian min-w-[90px] text-center">
                  Subagent
                </div>
                <div className="flex gap-2 flex-wrap flex-1">
                   <span className="text-[24px] font-mono bg-white px-2 py-0.5 rounded-none border border-prussian/10 text-prussian/80">Zero History</span>
                   <span className="text-[24px] font-mono bg-white px-2 py-0.5 rounded-none border border-prussian/10 text-prussian/80">Pure Task Params</span>
                </div>
              </div>

            </div>

            <div className="bg-dark text-white p-6 rounded-none relative overflow-hidden mt-4">
              <p className="font-sans text-[24px] font-medium leading-relaxed tracking-wide">
                如果在某些场景下出货要求极高，请务必手写 <span className="font-mono text-prussian/80 bg-white/10 px-2 py-0.5">Subagent</span> 剥离主干上下文。隔离人格干扰，才能安心输出纯净的结果。
              </p>
            </div>
          </div>

        </div>

      </div>
    </SlideWrapper>
  );
}
