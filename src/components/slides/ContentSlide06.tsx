import React from 'react';
import SlideWrapper from '../SlideWrapper';
import { MessageSquare, ArrowRight, DollarSign } from 'lucide-react';

export default function ContentSlide06() {
  return (
    <SlideWrapper>
      <div className="w-full h-full pt-20 px-24 pb-16 flex relative z-0">

        {/* Left Column: Routing Diagram */}
        <div className="w-1/2 h-full flex flex-col justify-center relative z-10">
          <div className="flex flex-row items-center w-full max-w-3xl">
            {/* Left Node */}
            <div className="bg-paper border rounded-full w-48 h-32 flex flex-col items-center justify-center relative z-10 border-dark/15 shrink-0 shadow-sm">
              <MessageSquare className="w-8 h-8 text-dark mb-1 opacity-70" strokeWidth={1.5} />
              <span className="font-mono text-dark font-medium tracking-wide text-[24px] uppercase mt-1">User Input</span>
            </div>

            {/* Branching Lines */}
            <div className="w-20 h-[480px] relative shrink-0">
                <div className="absolute top-1/2 left-0 w-8 h-[2px] bg-dark/20 -translate-y-1/2"></div>
                <div className="absolute top-[25%] bottom-[25%] left-8 w-[2px] bg-dark/20"></div>

                <div className="absolute top-[25%] left-8 right-0 h-[2px] bg-dark/20 -translate-y-1/2"></div>
                <ArrowRight className="absolute top-[25%] right-0 -translate-y-1/2 text-dark/30 w-5 h-5 translate-x-1/2 bg-transparent"/>

                <div className="absolute top-[75%] left-8 right-0 h-[2px] bg-dark/20 -translate-y-1/2"></div>
                <ArrowRight className="absolute top-[75%] right-0 -translate-y-1/2 text-dark/30 w-5 h-5 translate-x-1/2 bg-transparent"/>
            </div>

            {/* Right Nodes */}
            <div className="flex flex-col justify-around h-[480px] w-full ml-6">
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
                  <div className="font-display text-[24px] text-dark mb-1">前台聊天与 UX <span className="text-[20px] text-dark/50 ml-1 font-sans font-normal">/ Front-end Chat & UX</span></div>
                  <div className="text-[24px] font-medium text-dark/50 mb-4 font-mono">Opus / Gemini Pro</div>

                  <div className="flex flex-wrap gap-2 text-[24px]">
                    <span className="px-2 py-1 bg-dark/5 text-dark/80 rounded-none border border-dark/10">高同理心</span>
                    <span className="px-2 py-1 bg-dark/5 text-dark/80 rounded-none border border-dark/10">上下文复杂、感性诉求</span>
                  </div>                </div>
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
                  <div className="font-display text-[24px] text-dark mb-1">后台数据干活 <span className="text-[20px] text-dark/50 ml-1 font-sans font-normal">/ Back-end Data Processing</span></div>
                  <div className="text-[24px] font-medium text-dark/50 mb-4 font-mono">DeepSeek, GLM, Ring, etc</div>
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
            <h1 className="font-display text-[4rem] leading-tight tracking-tight text-dark mb-2">
              路由模型，控制幻觉，省钱
            </h1>
            <h2 className="font-display text-[32px] leading-tight text-dark/60 tracking-tight">
              Model Routing: Control Hallucinations, Save Money
            </h2>
          </div>

          <div className="space-y-10 mt-6">
            <div className="flex items-start">
              <span className="text-prussian mr-4 mt-2 font-mono text-3xl opacity-80">✦</span>
              <div className="text-dark/80 leading-relaxed text-3xl font-normal">
                <strong className="block text-dark font-medium tracking-wide mb-2 text-4xl font-display">
                  「干活」任务的指数级用量
                </strong>
                <span className="block text-dark/60 text-[28px] mb-3 leading-snug">"Work" Tasks Consume Exponential Tokens</span>
                复杂的报告任务容易产生指数用量而烧出天价。根据任务特性动态分配模型，是生产环境省钱的关键。<br/>
                <span className="text-dark/50 text-[24px] mt-2 block">Complex reporting tasks easily rack up astronomical API bills. Dynamically routing models based on task characteristics is key to saving money in production.</span>
              </div>
            </div>

            <div className="flex items-start">
              <span className="text-prussian mr-4 mt-2 font-mono text-3xl opacity-80">✦</span>
              <div className="text-dark/80 leading-relaxed text-3xl font-normal">
                <strong className="block text-dark font-medium tracking-wide mb-2 text-4xl font-display">
                  「聊天」与「工作」的不同需求
                </strong>
                <span className="block text-dark/60 text-[28px] mb-3 leading-snug">Different Needs for "Chat" vs. "Work"</span>
                闲聊模型需要情绪价值给够；涉及重要决策、大量上下文消耗的工作，最好切换至低成本低幻觉模型。<br/>
                <span className="text-dark/50 text-[24px] mt-2 block">Chat models need to provide emotional value; for critical decisions or high-context work, switch to low-cost, low-hallucination models.</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </SlideWrapper>
  );
}
