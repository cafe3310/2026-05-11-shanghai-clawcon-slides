import React from 'react';
import SlideWrapper from '../SlideWrapper';

export default function Page06Slide() {
  return (
    <SlideWrapper backgroundColor="bg-ivory-light">
      <div className="w-full h-full flex flex-col px-16 py-12 text-slate-dark">
        {/* Header */}
        <div className="mb-8 border-b border-slate-dark/20 pb-6 z-10">
          <h1 className="font-sans font-bold text-6xl tracking-tight">
            什么适合交给 Agent，什么不适合？
          </h1>
          <p className="text-3xl mt-4 opacity-80 font-serif">
            问题比「AI 行不行」要复杂得多。你要考虑「任务和模型能力契合度」，考虑 Jagged Frontier。
          </p>
        </div>

        {/* Main Chart Area */}
        <div className="relative flex-1 flex flex-col mt-2 pl-12 pb-12">
          {/* Y-Axis */}
          <div className="absolute left-0 top-0 bottom-12 w-12 flex flex-col items-center">
            <div className="text-xl font-bold mb-2 text-slate-500">高</div>
            <div className="flex-1 w-px bg-slate-dark/40 relative">
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-r-[6px] border-b-[10px] border-l-transparent border-r-transparent border-b-slate-dark/60"></div>
            </div>
            <div className="text-xl font-bold mt-2 text-slate-500">低</div>
            <div className="absolute top-1/2 -translate-y-1/2 -rotate-90 whitespace-nowrap text-xl font-bold tracking-widest text-slate-700">
              容错率与可人工校正度
            </div>
          </div>

          {/* X-Axis */}
          <div className="absolute left-12 right-0 bottom-0 h-12 flex flex-row items-center">
            <div className="text-xl font-bold mr-2 text-slate-500">容易补齐</div>
            <div className="flex-1 h-px bg-slate-dark/40 relative">
              <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-b-[6px] border-l-[10px] border-t-transparent border-b-transparent border-l-slate-dark/60"></div>
            </div>
            <div className="text-xl font-bold ml-4 text-slate-500">极难补齐</div>
            <div className="absolute left-1/2 -translate-x-1/2 top-6 whitespace-nowrap text-xl font-bold tracking-widest text-slate-700">
              上下文完备度与结构清晰度
            </div>
          </div>

          {/* Quadrants Container */}
          <div className="flex-1 border border-slate-dark/20 relative grid grid-cols-2 grid-rows-2 bg-white/40 shadow-sm rounded-2xl overflow-hidden">
            {/* Crosshairs */}
            <div className="absolute top-1/2 left-0 right-0 h-px bg-slate-dark/20 z-10"></div>
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-dark/20 z-10"></div>

            {/* Top Left: 绝对好球区 */}
            <div className="relative p-10 bg-white/80 z-0 flex flex-col transition-colors hover:bg-white">
              <h3 className="text-3xl font-bold mb-4 text-slate-dark flex items-center gap-3">
                <span className="bg-slate-dark text-white px-3 py-1 rounded-md text-xl font-sans">左上</span>
                绝对好球区
              </h3>
              <p className="text-2xl leading-relaxed font-bold mb-3 text-slate-dark">
                编程代码生成、会议纪要、周报月报、方案初稿。
              </p>
              <p className="text-xl leading-relaxed opacity-70 font-medium text-slate-dark">
                所有人都知道的舒适区。特征：允许试错、方便人类随时介入修正、有明确 SOP。
              </p>
            </div>

            {/* Top Right: 被低估的潜力区 */}
            <div className="relative p-10 bg-white/40 z-0 flex flex-col transition-colors hover:bg-white/60">
              <h3 className="text-3xl font-bold mb-4 text-slate-dark flex items-center gap-3">
                <span className="bg-slate-dark/10 text-slate-dark px-3 py-1 rounded-md text-xl font-sans">右上</span>
                被低估的潜力区
              </h3>
              <p className="text-2xl leading-relaxed font-bold mb-3 text-slate-dark">
                年终总结、绩效草稿、招聘辅助、复杂需求分析。
              </p>
              <p className="text-xl leading-relaxed opacity-70 font-medium text-slate-dark mb-4">
                往往不被认为是好球区，但实际上很好。做不好通常是因为任务没拆对、上下文没给够。
              </p>
              <div className="mt-auto bg-terracotta/10 border border-terracotta/20 p-4 rounded-xl flex items-start gap-3">
                <span className="text-terracotta font-bold text-xl">💡</span>
                <span className="text-xl font-medium text-slate-dark">小贴士：引入 <strong className="text-terracotta">知识图谱</strong> 或完善的 RAG，补齐上下文后，可以让右上变成左上。</span>
              </div>
            </div>

            {/* Bottom Left: 需引入校验机制 */}
            <div className="relative p-10 bg-slate-dark/5 z-0 flex flex-col transition-colors hover:bg-slate-dark/10">
              <h3 className="text-3xl font-bold mb-4 text-slate-dark flex items-center gap-3">
                <span className="bg-slate-dark/10 text-slate-dark px-3 py-1 rounded-md text-xl font-sans">左下</span>
                高危结构化任务
              </h3>
              <p className="text-2xl leading-relaxed font-bold mb-3 text-slate-dark">
                财务报表精准核算、法律合同关键条款定稿、核心数据库直接写操作。
              </p>
              <p className="text-xl leading-relaxed opacity-70 font-medium text-slate-dark">
                上下文容易补齐，但容错率极低。必须配合严格的自动化校验与人工 Review，不能直接交接。
              </p>
            </div>

            {/* Bottom Right: 不适合直接交接 */}
            <div 
              className="relative p-10 z-0 flex flex-col"
              style={{
                backgroundImage: 'repeating-linear-gradient(45deg, rgba(203,108,81,0.05), rgba(203,108,81,0.05) 10px, rgba(203,108,81,0.1) 10px, rgba(203,108,81,0.1) 20px)'
              }}
            >
              <div className="bg-white/80 p-8 rounded-xl backdrop-blur-sm h-full border border-terracotta/20 shadow-sm flex flex-col">
                <h3 className="text-3xl font-bold mb-4 text-terracotta flex items-center gap-3">
                  <span className="bg-terracotta text-white px-3 py-1 rounded-md text-xl font-sans">右下</span>
                  不适合直接交接
                </h3>
                <p className="text-2xl leading-relaxed font-bold mb-3 text-slate-dark">
                  心理治疗情绪干预、投资与股市分析、高风险拍板决策、纯主观价值判断。
                </p>
                <p className="text-xl leading-relaxed opacity-70 font-medium text-slate-dark">
                  极难验证真假、缺乏稳定评价标准、错误代价极高。
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Insight Bar */}
        <div className="mt-8 pt-6 border-t border-slate-dark/20 z-10 flex items-center">
          <div className="bg-terracotta/10 text-terracotta font-serif text-2xl px-6 py-2 rounded-full mr-6 whitespace-nowrap">
            总而言之
          </div>
          <p className="font-sans font-medium text-3xl opacity-90">
            你交给 Agent 的任务，有没有帮你解决不想亲手做的重复劳动，为你节约了注意力？摸鱼总是好事。
          </p>
        </div>

      </div>
    </SlideWrapper>
  );
}
