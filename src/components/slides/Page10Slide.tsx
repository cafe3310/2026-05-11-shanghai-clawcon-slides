import React from 'react';
import SlideWrapper from '../SlideWrapper';

export default function Page10Slide() {
  return (
    <SlideWrapper backgroundColor="bg-ivory-light">
      <div className="w-full h-full flex flex-col p-16 text-slate-dark relative">
        {/* Header */}
        <div className="mb-12 border-b border-slate-dark/20 pb-6 z-10 shrink-0">
          <h1 className="font-sans font-bold text-6xl tracking-tight">
            对非技术 (Non-dev) 成员的新挑战是什么？
          </h1>
          <p className="text-3xl mt-4 opacity-80 font-serif">
            岗位倒不会消失，但额外附加了「盲打」… 不对是「LLM 使用」和「LLM Sense」作为基础要求。
          </p>
        </div>

        {/* Main Content - Two Columns */}
        <div className="flex-1 flex border-[4px] border-slate-dark mb-8 shadow-[8px_8px_0px_rgba(30,41,59,1)]">
          {/* Left Column */}
          <div className="flex-1 bg-slate-dark text-white p-12 flex flex-col border-r-[4px] border-slate-dark relative overflow-hidden">
            <h2 className="text-4xl font-bold mb-10">被压缩（必须掌握但不再加分）的旧能力</h2>
            <ul className="space-y-8 text-3xl font-medium z-10">
              <li>依赖和使用信息差</li>
              <li>纯粹的文书整理</li>
              <li>流程执行熟练度和准确度</li>
              <li>长链路沟通中的「中介」功能</li>
            </ul>
            {/* Decorative background element */}
            <div className="absolute -bottom-10 -right-10 opacity-10">
              <svg width="300" height="300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" />
                <path d="M21 3v5h-5" />
              </svg>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex-1 bg-terracotta text-white p-12 flex flex-col relative overflow-hidden">
            <h2 className="text-4xl font-bold mb-10">被强化（从加分项变成基础要求）的新门槛</h2>
            <ul className="space-y-8 text-3xl font-medium z-10">
              <li>定义问题与拆解任务 - 包括拆给 LLM</li>
              <li>收集、定义、识别和提供高价值上下文</li>
              <li>约束和定义交付格式，哪怕在工作完全开始之前</li>
              <li>校验结果并对最终产出负责</li>
              <li>与智能系统稳定协作</li>
              <li>审美（见过足够多足够好的、见过足够多不好的）</li>
            </ul>
            {/* Decorative background element */}
            <div className="absolute -bottom-10 -right-10 opacity-10">
              <svg width="300" height="300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="mt-8 pt-6 border-t border-slate-dark/20 z-10 flex items-center shrink-0">
          <div className="bg-terracotta/10 text-terracotta font-serif text-2xl px-6 py-2 rounded-full mr-6 whitespace-nowrap">
            总而言之
          </div>
          <p className="font-sans font-medium text-3xl opacity-90 leading-tight">
            「能否将工作转化为人和系统可高速执行的结构」是一种全新而且比较玄学的能力，但倒也不是所有人都要学开发代码。
          </p>
        </div>
      </div>
    </SlideWrapper>
  );
}
