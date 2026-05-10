import React from 'react';
import SlideWrapper from '../SlideWrapper';
import { MessageSquare, Settings, Layers, TrendingUp } from 'lucide-react';

export default function ContentSlide() {
  return (
    <SlideWrapper backgroundColor="bg-ivory-light">
      <div className="w-full h-full flex flex-col p-16 text-slate-dark relative">
        
        {/* Background decorative grid */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: 'linear-gradient(#2D2B2A 1px, transparent 1px), linear-gradient(90deg, #2D2B2A 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
        </div>

        {/* Header */}
        <div className="mb-12 border-b border-slate-dark/20 pb-6 z-10">
          <h1 className="font-sans font-bold text-5xl tracking-tight">
            时间精力有限的人，怎么持续跟上技能更新而保持一定的精神健康
          </h1>
          <p className="text-3xl mt-4 opacity-80 font-serif">
            我也不知道为什么会想出这个标题
          </p>
        </div>

        {/* 2x2 Grid for Rules */}
        <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-6 z-10">
          
          {/* Rule 1 */}
          <div className="bg-white/60 border border-slate-dark/10 rounded-2xl p-10 flex flex-col relative overflow-hidden group hover:bg-white transition-colors shadow-sm">
            <div className="flex items-center gap-6 mb-8">
              <div className="text-terracotta font-serif italic text-5xl">01</div>
              <h2 className="font-sans font-bold text-3xl">固定一个稳定入口</h2>
            </div>
            <p className="font-sans text-2xl leading-relaxed opacity-80 flex-1">
              找一个顺手的 LLM Client（如 Cherry Studio, Jan.ai）长期使用。不要长期只靠网页 Chat，那不利于沉淀个人的任务模板与工作流。
            </p>
            <div className="absolute -bottom-10 -right-10 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity text-terracotta">
              <MessageSquare size={200} strokeWidth={1} />
            </div>
          </div>

          {/* Rule 2 */}
          <div className="bg-white/60 border border-slate-dark/10 rounded-2xl p-10 flex flex-col relative overflow-hidden group hover:bg-white transition-colors shadow-sm">
            <div className="flex items-center gap-6 mb-8">
              <div className="text-terracotta font-serif italic text-5xl">02</div>
              <h2 className="font-sans font-bold text-3xl">先替代最烦的重复劳动</h2>
            </div>
            <p className="font-sans text-2xl leading-relaxed opacity-80 flex-1">
              不要一上来就幻想打造“全自动数字员工”。先挑一段你最讨厌的脏活（如特定纪要、资料整理）替掉，建立正反馈。
            </p>
            <div className="absolute -bottom-10 -right-10 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity text-terracotta">
              <Settings size={200} strokeWidth={1} />
            </div>
          </div>

          {/* Rule 3 */}
          <div className="bg-white/60 border border-slate-dark/10 rounded-2xl p-10 flex flex-col relative overflow-hidden group hover:bg-white transition-colors shadow-sm">
            <div className="flex items-center gap-6 mb-8">
              <div className="text-terracotta font-serif italic text-5xl">03</div>
              <h2 className="font-sans font-bold text-3xl">先理解原理，再升级工具</h2>
            </div>
            <div className="font-sans text-2xl leading-relaxed opacity-80 flex-1">
              <div className="flex items-center justify-between mb-6 bg-white/50 p-4 rounded-xl border border-slate-dark/10">
                <div className="text-center"><span className="font-bold block mb-2 text-lg">基础文本</span><span className="text-base opacity-80">基础模型 Chat</span></div>
                <div className="text-terracotta font-bold">→</div>
                <div className="text-center"><span className="font-bold block mb-2 text-lg">重复流程</span><span className="text-base opacity-80">Dify 等</span></div>
                <div className="text-terracotta font-bold">→</div>
                <div className="text-center"><span className="font-bold block mb-2 text-lg">复杂机制</span><span className="text-base opacity-80">IM + 自主 Agent</span></div>
              </div>
              <p>不同模型适合不同任务，不同任务匹配不同 Harness。</p>
            </div>
            <div className="absolute -bottom-10 -right-10 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity text-terracotta">
              <Layers size={200} strokeWidth={1} />
            </div>
          </div>

          {/* Rule 4 */}
          <div className="bg-white/60 border border-slate-dark/10 rounded-2xl p-10 flex flex-col relative overflow-hidden group hover:bg-white transition-colors shadow-sm">
            <div className="flex items-center gap-6 mb-8">
              <div className="text-terracotta font-serif italic text-5xl">04</div>
              <h2 className="font-sans font-bold text-3xl">不高估短期，不低估长期</h2>
            </div>
            <p className="font-sans text-2xl leading-relaxed opacity-80 flex-1">
              不必追赶每一个新冒出的工具热点，晚学几天没有决定性损失。但必须持续将 AI 内化为自己的稳定外部能力。
            </p>
            <div className="absolute -bottom-10 -right-10 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity text-terracotta">
              <TrendingUp size={200} strokeWidth={1} />
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-slate-dark/20 z-10 flex items-center">
          <div className="bg-terracotta/10 text-terracotta font-serif text-2xl px-6 py-2 rounded-full mr-6">
            总而言之
          </div>
          <p className="font-sans font-medium text-2xl opacity-90">
            与其焦虑自己没用上所有新工具，不如逐步积累一套稳定、可控、真正帮你省事的个人外挂。哪怕过程中很多时候都要复制粘贴。
          </p>
        </div>

      </div>
    </SlideWrapper>
  );
}
