import React from 'react';
import SlideWrapper from '../SlideWrapper';
import { MessageSquare, ArrowRight, DollarSign } from 'lucide-react';

export default function ContentSlide06() {
  return (
    <SlideWrapper>
      <div className="w-full h-full pt-20 px-24 pb-16 flex relative z-0">
        
        {/* Left Column: Routing Diagram */}
        <div className="w-1/2 h-full flex flex-col justify-center pr-16 relative z-10">
          <div className="flex flex-row items-center w-full max-w-2xl mx-auto h-full">
            {/* Left Node */}
            <div className="bg-paper border rounded-full w-32 h-32 flex flex-col items-center justify-center relative z-10 border-dark/15 shrink-0 shadow-sm">
              <MessageSquare className="w-8 h-8 text-dark mb-1 opacity-70" strokeWidth={1.5} />
              <span className="font-mono text-dark font-medium tracking-wide text-[24px] uppercase mt-1">User Input</span>
            </div>

            {/* Branching Lines */}
            <div className="w-20 h-56 relative shrink-0">
                <div className="absolute top-1/2 left-0 w-8 h-[2px] bg-dark/20 -translate-y-1/2"></div>
                <div className="absolute top-4 bottom-4 left-8 w-[2px] bg-dark/20"></div>
                
                <div className="absolute top-4 left-8 right-0 h-[2px] bg-dark/20"></div>
                <ArrowRight className="absolute top-4 right-0 -translate-y-1/2 text-dark/30 w-5 h-5 translate-x-1/2 bg-transparent"/>
                
                <div className="absolute bottom-4 left-8 right-0 h-[2px] bg-dark/20"></div>
                <ArrowRight className="absolute bottom-4 right-0 -translate-y-1/2 text-dark/30 w-5 h-5 translate-x-1/2 bg-transparent"/>
            </div>

            {/* Right Nodes */}
            <div className="flex flex-col justify-between h-56 w-full ml-6">
              {/* Top Node */}
              <div className="bg-paper rounded-none border border-dark/10 shadow-sm p-5 w-full relative">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-dark"></div>
                <div className="pl-4">
                  <div className="flex justify-between items-start mb-2">
                    <div className="font-mono text-[24px] tracking-wider text-dark uppercase bg-dark/5 px-2 py-1 inline-flex items-center rounded-none">
                      The Show-off
                    </div>
                    <div className="flex text-dark/40 font-mono tracking-widest text-[24px] items-center">
                      <DollarSign className="w-5 h-5 -mr-1"/><DollarSign className="w-5 h-5 -mr-1"/><DollarSign className="w-5 h-5"/>
                    </div>
                  </div>
                  <div className="font-display text-[24px] text-dark mb-1">前台聊天与 UX</div>
                  <div className="text-[24px] font-medium text-dark/50 mb-4 font-mono">Opus / Gemini Pro</div>
                  
                  <div className="flex flex-wrap gap-2 text-[24px]">
                    <span className="px-2 py-1 bg-dark/5 text-dark/80 rounded-none border border-dark/10">高同理心</span>
                    <span className="px-2 py-1 bg-prussian/10 text-prussian rounded-none border border-prussian/20">谄媚 / 高幻觉</span>
                  </div>
                </div>
              </div>
              
              {/* Bottom Node */}
              <div className="bg-paper rounded-none border border-dark/10 shadow-sm p-5 w-full relative">
                 <div className="absolute left-0 top-0 bottom-0 w-1 bg-dark/30"></div>
                 <div className="pl-4">
                  <div className="flex justify-between items-start mb-2">
                    <div className="font-mono text-[24px] tracking-wider text-dark uppercase bg-dark/5 px-2 py-1 inline-flex items-center rounded-none">
                      The Workhorse
                    </div>
                    <div className="flex text-dark/40 font-mono tracking-widest text-[24px] items-center">
                      <DollarSign className="w-5 h-5"/>
                    </div>
                  </div>
                  <div className="font-display text-[24px] text-dark mb-1">后台数据干活</div>
                  <div className="text-[24px] font-medium text-dark/50 mb-4 font-mono">ring-1t (等低成本模型)</div>
                  
                  <div className="flex flex-wrap gap-2 text-[24px]">
                    <span className="px-2 py-1 bg-dark/5 text-dark/80 rounded-none border border-dark/10">Dry Logic</span>
                    <span className="px-2 py-1 bg-prussian/10 text-prussian rounded-none border border-prussian/20">务实 / 低幻觉</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Typography constraints & Content */}
        <div className="w-1/2 h-full flex flex-col justify-center pl-8">
          
          <div className="mb-10 w-full">
            <div className="font-mono text-[32px] font-bold text-prussian tracking-widest uppercase mb-2 select-none">
              03 / TRUSTWORTHY
            </div>
            <h1 className="font-display text-[4rem] leading-tight tracking-tight text-dark mb-6">
              动态路由，做个算力守财奴
            </h1>
          </div>

          <div className="space-y-8">
            <div className="flex items-start">
              <span className="text-prussian mr-3 mt-1 font-mono text-[24px] opacity-80">✦</span>
              <div className="text-dark/80 leading-relaxed text-[24px]">
                <strong className="block text-dark font-medium tracking-wide mb-2 text-[24px] font-display">
                  “干活”任务的指数级用量
                </strong>
                不同任务选择不同的模型，是一个常被忽略的优化点，但在生产环境中能显著省钱。如果全程使用高性能模型，复杂任务极易耗尽额度。
              </div>
            </div>

            <div className="flex items-start">
              <span className="text-prussian mr-3 mt-1 font-mono text-[24px] opacity-80">✦</span>
              <div className="text-dark/80 leading-relaxed text-[24px]">
                <strong className="block text-dark font-medium tracking-wide mb-2 text-[24px] font-display">
                  警惕“谄媚”引发的误差
                </strong>
                高幻觉的强大对话模型有时为了迎合用户预期，会过度揣测动机，给出看似贴心但错误的建议。
              </div>
            </div>

            <div className="flex items-start">
              <span className="text-prussian mr-3 mt-1 font-mono text-[24px] opacity-80">✦</span>
              <div className="text-dark/80 leading-relaxed text-[24px]">
                <strong className="block text-dark font-medium tracking-wide mb-2 text-[24px] font-display">
                  把好钢用在“展示”上
                </strong>
                让昂贵的“御三家”专门负责前台聊天，提供情绪价值；遇到无需创意、强调规则执行的苦力活，坚决切换至低成本低幻觉的专门模型。
              </div>
            </div>
          </div>

        </div>

      </div>
    </SlideWrapper>
  );
}
