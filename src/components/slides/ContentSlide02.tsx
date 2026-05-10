import React from 'react';
import SlideWrapper from '../SlideWrapper';

export default function ContentSlide02() {
  return (
    <SlideWrapper>
      <div className="w-full h-full pt-16 px-24 pb-12 flex flex-col relative z-0">
        {/* Header Section */}
        <div className="mb-8 w-full pl-4">
          <h1 className="font-display text-[4rem] leading-tight tracking-tight text-dark mb-6">
            既然你司又做模型又做理财，怎么才能靠谱地让 Claw 给我投资建议？
          </h1>
        </div>

        {/* Matrix Area */}
        <div className="flex-1 relative flex flex-col ml-12 mb-8">

          {/* Y Axis Label */}
          <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 -ml-12 -rotate-90 text-[24px] font-sans tracking-widest text-dark/80 whitespace-nowrap flex items-center gap-4 z-10 origin-center">
            <span>低</span>
            <div className="w-24 h-[1px] bg-prussian/40"></div>
            <span className="font-bold text-prussian">容错率与可人工校正度</span>
            <div className="w-24 h-[1px] bg-prussian/40"></div>
            <span>高</span>
          </div>

          {/* Grid setup */}
          <div className="flex-1 grid grid-cols-2 grid-rows-2 border-y border-prussian/20 relative">

            {/* Grid internal lines */}
            <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-prussian/20 pointer-events-none"></div>

            {/* Top Left: 绝对好球区 */}
            <div className="border-b border-prussian/20 p-8 flex flex-col justify-center">
              <div className="font-mono text-[24px] text-prussian/60 tracking-widest uppercase mb-4 select-none">好球区</div>
              <h3 className="font-display text-4xl text-dark mb-4">代码生成、会议整理、方案初稿</h3>
              <p className="font-sans text-[24px] font-normal text-dark/70 leading-relaxed pr-8">
                舒适区。允许试错，方便随时介入，有明确 SOP。
              </p>
            </div>

            {/* Top Right: 被低估的潜力区 */}
            <div className="bg-gray-light/50 border-b border-prussian/20 p-8 flex flex-col justify-center relative">
              <div className="absolute top-0 right-0 p-8">
              </div>
              <div className="font-mono text-[24px] text-prussian/60 tracking-widest uppercase mb-4 select-none">潜力区</div>
              <h3 className="font-display text-4xl text-dark mb-4">年终总结、人员管理、复杂研究</h3>
              <p className="font-sans text-[24px] font-normal text-dark/80 leading-relaxed mb-6 pr-8">
                潜力大。做不好大多因任务未拆解、缺乏上下文。知识库和 Wiki 在此有效。
              </p>
            </div>

            {/* Bottom Left: 高危结构化任务 */}
            <div className="p-8 flex flex-col justify-center">
              <div className="font-mono text-[24px] text-prussian/60 tracking-widest uppercase mb-4 select-none">高危任务</div>
              <h3 className="font-display text-4xl text-dark mb-4">财务报表精准核算、法律合同关键条款定稿</h3>
              <p className="font-sans text-[24px] font-normal text-dark/70 leading-relaxed pr-8">
                容错低，爆炸半径大。人工 Review 在此有效。
              </p>
            </div>

            {/* Bottom Right: 不适合直接交接 */}
            <div className="bg-prussian text-white p-8 flex flex-col justify-center shadow-[inset_0_20px_40px_rgba(0,0,0,0.2)]">
              <div className="font-mono text-[24px] text-white/50 tracking-widest uppercase mb-4 select-none">有点难搞</div>
              <h3 className="font-display text-4xl text-white mb-4"><b>投资与股市分析</b>、情绪干预、主观价值讨论</h3>
              <p className="font-sans text-[24px] font-light text-white/80 leading-relaxed pr-8 mb-6">
                难验证、易误判、代价高。涉及主观及高风险决策。
              </p>
              <div className="mt-6 border-t border-white/20 pt-6">
                <p className="font-sans text-[24px] text-white/70 leading-relaxed font-light">
                  <span className="font-medium text-white/90">那接下来看看，如果要让 Claw 推荐投资，怎么做更靠谱。</span>
                </p>
              </div>
            </div>

          </div>

          {/* X Axis Label */}
          <div className="absolute -bottom-12 left-0 right-0 flex items-center justify-center text-[24px] font-sans tracking-widest text-dark/80 z-10 w-full px-6">
            <span>容易补齐</span>
            <div className="flex-1 h-[1px] bg-prussian/40 mx-4 max-w-xs"></div>
            <span className="font-bold text-prussian">上下文完备度与结构清晰度</span>
            <div className="flex-1 h-[1px] bg-prussian/40 mx-4 max-w-xs"></div>
            <span>极难补齐</span>
          </div>

        </div>

      </div>
    </SlideWrapper>
  );
}
