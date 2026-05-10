import React from 'react';
import SlideWrapper from '../SlideWrapper';

export default function ContentSlide02() {
  return (
    <SlideWrapper>
      <div className="w-full h-full pt-16 px-24 pb-12 flex flex-col relative z-0">
        {/* Header Section */}
        <div className="mb-8 w-full pl-4">
          <h1 className="font-display text-[4rem] leading-tight tracking-tight text-dark mb-6">
            让 Claw 帮我推荐投资，要怎么做才靠谱？
          </h1>
          <p className="font-sans text-[1.75rem] font-light text-dark/60 leading-relaxed">
            问题比「AI 行不行」要复杂得多。你要考虑「任务和模型能力契合度」，考虑 Jagged Frontier。
          </p>
        </div>

        {/* Matrix Area */}
        <div className="flex-1 relative flex flex-col ml-12 mb-8">
          
          {/* Y Axis Label */}
          <div className="absolute top-1/2 left-0 -translate-x-[5rem] -translate-y-1/2 -rotate-90 text-[24px] font-sans tracking-widest text-dark/40 whitespace-nowrap flex items-center gap-4 z-10 origin-center">
            <span>低</span>
            <div className="w-24 h-[1px] bg-prussian/20"></div>
            <span className="font-medium text-prussian/60">容错率与可人工校正度</span>
            <div className="w-24 h-[1px] bg-prussian/20"></div>
            <span>高</span>
          </div>

          {/* Grid setup */}
          <div className="flex-1 grid grid-cols-2 grid-rows-2 border-y border-prussian/20 relative">
            
            {/* Grid internal lines */}
            <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-prussian/20 pointer-events-none"></div>
            
            {/* Top Left: 绝对好球区 */}
            <div className="border-b border-prussian/20 p-8 flex flex-col justify-center">
              <div className="font-mono text-[24px] text-prussian/40 tracking-widest uppercase mb-4 select-none">Q1 / 绝对好球区</div>
              <h3 className="font-display text-4xl text-dark mb-4">编程代码生成、<br/>会议纪要、周报月报、方案初稿</h3>
              <p className="font-sans text-[24px] font-light text-dark/70 leading-relaxed pr-8">
                所有人都知道的舒适区。特征：允许试错、方便人类随时介入修正、有明确 SOP。
              </p>
            </div>

            {/* Top Right: 被低估的潜力区 */}
            <div className="bg-gray-light/50 border-b border-prussian/20 p-8 flex flex-col justify-center relative">
              <div className="absolute top-0 right-0 p-8">
                <div className="w-3 h-3 bg-prussian/40"></div>
              </div>
              <div className="font-mono text-[24px] text-prussian/60 tracking-widest uppercase mb-4 select-none">Q2 / 被低估的潜力区</div>
              <h3 className="font-display text-4xl text-dark mb-4">年终总结、绩效草稿、<br/>招聘辅助、复杂需求分析</h3>
              <p className="font-sans text-[24px] font-light text-dark/80 leading-relaxed mb-6 pr-8">
                往往不被认为是好球区，但实际上很好。做不好通常是因为任务没拆对、上下文没给够。
              </p>
              <div className="bg-white/60 p-4 border border-prussian/10 flex gap-4 mt-auto items-start">
                <span className="text-2xl leading-none">💡</span>
                <p className="font-sans text-[24px] text-dark/80 pt-1">
                  小贴士：引入<span className="font-medium text-prussian">知识图谱</span>或完善的 RAG，补齐上下文后，可以让右上变成左上。
                </p>
              </div>
            </div>

            {/* Bottom Left: 高危结构化任务 */}
            <div className="p-8 flex flex-col justify-center">
              <div className="font-mono text-[24px] text-prussian/40 tracking-widest uppercase mb-4 select-none">Q3 / 高危结构化任务</div>
              <h3 className="font-display text-4xl text-dark mb-4">财务报表精准核算、<br/>法律合同关键条款定稿</h3>
              <p className="font-sans text-[24px] font-light text-dark/70 leading-relaxed pr-8">
                上下文容易补齐，但容错率极低。必须配合严格的自动化校验与人工 Review，不能直接交接（如核心数据库直接写操作）。
              </p>
            </div>

            {/* Bottom Right: 不适合直接交接 */}
            <div className="bg-prussian text-white p-8 flex flex-col justify-center shadow-[inset_0_20px_40px_rgba(0,0,0,0.2)]">
              <div className="font-mono text-[24px] text-white/50 tracking-widest uppercase mb-4 select-none">Q4 / 不适合直接交接</div>
              <h3 className="font-display text-4xl text-white mb-4">心理治疗情绪干预、投资<br/>与股市分析、纯主观价值判断</h3>
              <p className="font-sans text-[24px] font-light text-white/80 leading-relaxed pr-8 mb-6">
                极难验证真伪、缺乏稳定评价标准、错误代价极高。高风险拍板决策。
              </p>
              <div className="mt-auto border-t border-white/20 pt-6">
                <p className="font-sans text-[24px] text-white/70 leading-relaxed font-light">
                  <span className="font-medium text-white/90">ClawCon 补充：</span>虽然在内部为了稳健我一般这么分享，但相信 ClawCon 的大家不会被吓到。那我们接下来就看看如果让 Claw 帮忙推荐投资，怎么做更靠谱。
                </p>
              </div>
            </div>

          </div>

          {/* X Axis Label */}
          <div className="absolute -bottom-8 left-0 right-0 flex items-center justify-center text-[24px] font-sans tracking-widest text-dark/40 z-10 w-full px-6">
            <span>容易补齐</span>
            <div className="flex-1 h-[1px] bg-prussian/20 mx-4 max-w-xs"></div>
            <span className="font-medium text-prussian/60">上下文完备度与结构清晰度</span>
            <div className="flex-1 h-[1px] bg-prussian/20 mx-4 max-w-xs"></div>
            <span>极难补齐</span>
          </div>

        </div>

      </div>
    </SlideWrapper>
  );
}
