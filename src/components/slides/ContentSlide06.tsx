import React from 'react';
import SlideWrapper from '../SlideWrapper';
import { MessageSquare, ArrowRight, DollarSign, Bot, Zap } from 'lucide-react';

export default function ContentSlide06() {
  return (
    <SlideWrapper>
      <div className="w-full h-full flex relative z-0 bg-[#EFECE8] text-[#1D1D1D] overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 z-0 opacity-40 pointer-events-none" style={{ backgroundImage: 'linear-gradient(to right, #e5e5e5 1px, transparent 1px), linear-gradient(to bottom, #e5e5e5 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        <div className="w-full h-full flex flex-col pt-20 px-24 pb-16 relative z-10">
          {/* Header */}
          <div className="mb-14">
            <div className="font-mono text-sm tracking-widest text-[#8A8985] uppercase mb-4">
              03_TRUSTWORTHY | 动态路由与降本增效
            </div>
            <h2 className="font-display text-5xl tracking-tight text-[#1D1D1D] mb-4">
              动态路由，做个聪明的算力守财奴
            </h2>
            <div className="h-px w-full bg-[#1D1D1D]/10"></div>
          </div>

          {/* Content area: left bullet points, right diagram */}
          <div className="flex-1 flex space-x-16 mt-4 items-center">
            
            {/* Left Column: Text Points */}
            <div className="w-5/12 space-y-8 pb-4">
              <div className="space-y-6">
                <div className="flex items-start">
                  <span className="text-[#B54A2D] mr-3 mt-1 font-mono text-lg opacity-80">✦</span>
                  <div className="text-[#3A3935] leading-relaxed text-lg">
                    <strong className="block text-[#1D1D1D] font-medium tracking-wide mb-2 text-xl font-display">
                      “干活”任务的指数级用量
                    </strong>
                    不同任务选择不同的模型，是一个常被忽略的优化点，但在生产环境中能显著省钱。如果全程使用高性能模型，复杂任务极易耗尽额度。
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="text-[#B54A2D] mr-3 mt-1 font-mono text-lg opacity-80">✦</span>
                  <div className="text-[#3A3935] leading-relaxed text-lg">
                    <strong className="block text-[#1D1D1D] font-medium tracking-wide mb-2 text-xl font-display">
                      警惕“谄媚”引发的误差
                    </strong>
                    高幻觉的强大对话模型有时为了迎合用户预期，会过度揣测动机，给出看似贴心但错误的建议。
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="text-[#B54A2D] mr-3 mt-1 font-mono text-lg opacity-80">✦</span>
                  <div className="text-[#3A3935] leading-relaxed text-lg">
                    <strong className="block text-[#1D1D1D] font-medium tracking-wide mb-2 text-xl font-display">
                      把好钢用在“展示”上
                    </strong>
                    让昂贵的“御三家”专门负责前台聊天，提供情绪价值；遇到无需创意、强调规则执行的苦力活，坚决切换至低成本低幻觉的专门模型。
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Routing Diagram */}
            <div className="w-7/12 flex flex-col justify-center bg-white/60 rounded-xl p-10 border border-[#1D1D1D]/5 shadow-sm shadow-[#1D1D1D]/5 h-[480px]">
              
              <div className="flex flex-row items-center w-full max-w-2xl mx-auto h-full">
                {/* Left Node */}
                <div className="bg-white border rounded-full w-32 h-32 flex flex-col items-center justify-center relative z-10 border-[#1D1D1D]/15 shrink-0 shadow-sm">
                  <MessageSquare className="w-8 h-8 text-[#1D1D1D] mb-1 opacity-70" strokeWidth={1.5} />
                  <span className="font-mono text-[#1D1D1D] font-medium tracking-wide text-xs uppercase mt-1">User Input</span>
                </div>

                {/* Branching Lines */}
                <div className="w-20 h-56 relative shrink-0">
                    <div className="absolute top-1/2 left-0 w-8 h-[2px] bg-[#1D1D1D]/20 -translate-y-1/2"></div>
                    <div className="absolute top-4 bottom-4 left-8 w-[2px] bg-[#1D1D1D]/20"></div>
                    
                    <div className="absolute top-4 left-8 right-0 h-[2px] bg-[#1D1D1D]/20"></div>
                    <ArrowRight className="absolute top-4 right-0 -translate-y-1/2 text-[#1D1D1D]/30 w-5 h-5 translate-x-1/2 bg-transparent"/>
                    
                    <div className="absolute bottom-4 left-8 right-0 h-[2px] bg-[#1D1D1D]/20"></div>
                    <ArrowRight className="absolute bottom-4 right-0 -translate-y-1/2 text-[#1D1D1D]/30 w-5 h-5 translate-x-1/2 bg-transparent"/>
                </div>

                {/* Right Nodes */}
                <div className="flex flex-col justify-between h-56 w-full ml-6">
                  {/* Top Node */}
                  <div className="bg-white rounded border border-[#1D1D1D]/10 shadow p-5 w-full relative">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#1D1D1D] rounded-l"></div>
                    <div className="pl-4">
                      <div className="flex justify-between items-start mb-2">
                        <div className="font-mono text-xs tracking-wider text-[#1D1D1D] uppercase bg-[#1D1D1D]/5 px-2 py-1 inline-flex items-center rounded">
                          The Show-off
                        </div>
                        <div className="flex text-[#1D1D1D]/40 font-mono tracking-widest text-lg items-center">
                          <DollarSign className="w-5 h-5 -mr-1"/><DollarSign className="w-5 h-5 -mr-1"/><DollarSign className="w-5 h-5"/>
                        </div>
                      </div>
                      <div className="font-display text-xl text-[#1D1D1D] mb-1">前台聊天与 UX</div>
                      <div className="text-sm font-medium text-[#8A8985] mb-4 font-mono">Opus / Gemini Pro</div>
                      
                      <div className="flex flex-wrap gap-2 text-xs">
                        <span className="px-2 py-1 bg-[#1D1D1D]/5 text-[#1D1D1D]/80 rounded border border-[#1D1D1D]/10">高同理心</span>
                        <span className="px-2 py-1 bg-[#B54A2D]/10 text-[#B54A2D] rounded border border-[#B54A2D]/20">谄媚 / 高幻觉</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Bottom Node */}
                  <div className="bg-white rounded border border-[#1D1D1D]/10 shadow p-5 w-full relative">
                     <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#8A8985] rounded-l"></div>
                     <div className="pl-4">
                      <div className="flex justify-between items-start mb-2">
                        <div className="font-mono text-xs tracking-wider text-[#1D1D1D] uppercase bg-[#1D1D1D]/5 px-2 py-1 inline-flex items-center rounded">
                          The Workhorse
                        </div>
                        <div className="flex text-[#1D1D1D]/40 font-mono tracking-widest text-lg items-center">
                          <DollarSign className="w-5 h-5"/>
                        </div>
                      </div>
                      <div className="font-display text-xl text-[#1D1D1D] mb-1">后台数据干活</div>
                      <div className="text-sm font-medium text-[#8A8985] mb-4 font-mono">ring-1t (等低成本模型)</div>
                      
                      <div className="flex flex-wrap gap-2 text-xs">
                        <span className="px-2 py-1 bg-[#1D1D1D]/5 text-[#1D1D1D]/80 rounded border border-[#1D1D1D]/10">Dry Logic</span>
                        <span className="px-2 py-1 bg-[#4B6A53]/10 text-[#4B6A53] rounded border border-[#4B6A53]/20">务实 / 低幻觉</span>
                      </div>
                    </div>
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
