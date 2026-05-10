import React from 'react';
import SlideWrapper from '../SlideWrapper';

export default function Page11Slide() {
  return (
    <SlideWrapper backgroundColor="bg-ivory-light">
      <div className="w-full h-full flex flex-col p-12 text-slate-dark relative overflow-hidden">

        {/* Background Grid */}
        <div
          className="absolute inset-0 opacity-20 pointer-events-none z-0"
          style={{
            backgroundImage: `linear-gradient(30deg, #cbd5e1 1px, transparent 1px), linear-gradient(150deg, #cbd5e1 1px, transparent 1px)`,
            backgroundSize: '60px 103.92px',
            backgroundPosition: '0 0, 0 0'
          }}
        />

        {/* Header */}
        <div className="mb-12 border-b border-slate-dark/20 pb-6 z-10">
          <h1 className="font-sans font-bold text-6xl tracking-tight leading-tight">
            Vibe Coding 是不错的探索工具，但无法直接替代交付责任
          </h1>
        </div>

        {/* Main Content - Two Columns + Bottom Tree */}
        <div className="flex-1 flex flex-col relative z-10">

          {/* Top: Two Columns */}
          <div className="flex flex-1 relative mb-4">
            {/* Center Dashed Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0 border-l-[3px] border-dashed border-slate-dark/30 -translate-x-1/2"></div>

            {/* Left Column */}
            <div className="flex-1 flex flex-col items-center pr-12">
              <h2 className="text-2xl font-bold mb-4 bg-white px-6 py-2 border-[3px] border-slate-dark rounded-md shadow-sm">
                [原型与探索 / 完全可以 Vibe]
              </h2>

              {/* Illustration Placeholder - Sketchy Building */}
              <div className="w-full flex items-center justify-center relative mb-6">
                <div className="relative w-56 h-56">
                  {/* Isometric Sketch Representation */}
                  <svg viewBox="0 0 200 200" className="w-full h-full stroke-slate-dark fill-transparent" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round">
                    <path d="M100 170 L10 125 L100 80 L190 125 Z" strokeDasharray="4 4" className="stroke-slate-400" />
                    <path d="M100 110 L140 90 L140 50 L100 70 Z" className="fill-white" />
                    <path d="M100 70 L60 50 L100 30 L140 50 Z" className="fill-slate-50" />
                    <path d="M100 110 L60 90 L60 50 L100 70 Z" className="fill-slate-100" />
                    <path d="M70 140 L30 120 L30 80 L70 100 Z" className="fill-white" />
                    <path d="M70 100 L110 80 L110 120 L70 140 Z" className="fill-slate-100" />
                    <path d="M70 100 L30 80 L70 60 L110 80 Z" className="fill-slate-50" />
                    <path d="M130 140 L90 120 L90 80 L130 100 Z" className="fill-white" />
                    <path d="M130 100 L170 80 L170 120 L130 140 Z" className="fill-slate-100" />
                    <path d="M130 100 L90 80 L130 60 L170 80 Z" className="fill-slate-50" />
                    <path d="M30 80 L30 125 M70 100 L70 145 M110 80 L110 125 M130 100 L130 145 M170 80 L170 125" className="stroke-slate-500 opacity-50" />
                    <path d="M30 120 L75 142 M70 140 L115 118 M90 120 L135 142 M130 140 L175 118" className="stroke-slate-500 opacity-50" />
                  </svg>
                </div>
              </div>

              {/* Bullet Points */}
              <div className="bg-white border-[3px] border-slate-dark p-6 shadow-[4px_4px_0px_rgba(30,41,59,1)] w-full max-w-lg">
                <ul className="space-y-4 text-2xl font-medium">
                  <li className="flex items-start gap-3">
                    <span className="mt-2.5 w-2.5 h-2.5 rounded-full bg-slate-dark shrink-0"></span>
                    <span>将模糊想法快速可视化验证</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2.5 w-2.5 h-2.5 rounded-full bg-slate-dark shrink-0"></span>
                    <span>帮助非技术人员跨越“从 0 到 1”的启动门槛</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2.5 w-2.5 h-2.5 rounded-full bg-slate-dark shrink-0"></span>
                    <span>低成本试错与启发式 Demo 制作</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column */}
            <div className="flex-1 flex flex-col items-center pl-12">
              <h2 className="text-2xl font-bold mb-4 bg-white px-6 py-2 border-[3px] border-slate-dark rounded-md shadow-sm">
                [上线与交付 / 不能只靠 Vibe]
              </h2>

              {/* Illustration Placeholder - Solid Building */}
              <div className="w-full flex items-center justify-center relative mb-6">
                <div className="relative w-56 h-56">
                  {/* Isometric Solid Representation */}
                  <svg viewBox="0 0 200 200" className="w-full h-full stroke-slate-dark" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round">
                    <path d="M100 180 L20 140 L100 100 L180 140 Z" className="fill-slate-100" />
                    <path d="M20 140 L20 155 L100 195 L100 180 Z" className="fill-slate-200" />
                    <path d="M180 140 L180 155 L100 195 L100 180 Z" className="fill-slate-300" />
                    <path d="M100 160 L40 130 L100 100 L160 130 Z" className="fill-white" />
                    <path d="M100 140 L60 120 L60 70 L100 90 Z" className="fill-white" />
                    <path d="M100 140 L140 120 L140 70 L100 90 Z" className="fill-slate-100" />
                    <path d="M100 90 L60 70 L100 50 L140 70 Z" className="fill-slate-50" />
                    <g stroke="#4F80FF" strokeWidth="2" fill="none">
                      <path d="M20 90 L40 100 M20 95 L40 105" />
                      <polygon points="40,105 35,95 45,100" fill="#4F80FF" stroke="none" />
                      <path d="M180 90 L160 100 M180 95 L160 105" />
                      <polygon points="160,105 165,95 155,100" fill="#4F80FF" stroke="none" />
                    </g>
                  </svg>
                </div>
              </div>

              {/* Bullet Points */}
              <div className="bg-white border-[3px] border-slate-dark p-6 shadow-[4px_4px_0px_rgba(30,41,59,1)] w-full max-w-lg">
                <ul className="space-y-4 text-2xl font-medium">
                  <li className="flex items-start gap-3">
                    <span className="mt-2.5 w-2.5 h-2.5 rounded-full bg-slate-dark shrink-0"></span>
                    <span>计算机组成、操作系统原理、网络架构</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2.5 w-2.5 h-2.5 rounded-full bg-slate-dark shrink-0"></span>
                    <span>信息安全与权限边界设计</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2.5 w-2.5 h-2.5 rounded-full bg-slate-dark shrink-0"></span>
                    <span>状态流动、异常处理与系统依赖管理</span>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 w-2 h-2 rounded-full bg-slate-dark shrink-0"></span>
                      <span>可观测性、可维护性与灾难回滚能力</span>
                    </li>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom: Dependency Tree */}
          <div className="w-full mt-auto flex flex-col">
            <div className="text-xl font-bold text-slate-dark/50 mb-3 uppercase tracking-wider pl-2">Engineering Dependency Tree</div>
            <div className="w-full flex items-center justify-between bg-white/60 border border-slate-dark/10 rounded-2xl p-6 shadow-sm">
              <div className="bg-slate-50 text-slate-700 px-5 py-4 rounded-xl font-medium text-xl border border-slate-200 shadow-sm">
                计算机组成原理
              </div>
              <div className="text-terracotta/50 font-bold text-2xl">→</div>
              <div className="flex flex-col gap-2">
                <div className="bg-slate-50 text-slate-700 px-4 py-2 rounded-xl font-medium text-lg border border-slate-200 shadow-sm text-center">操作系统原理</div>
                <div className="bg-slate-50 text-slate-700 px-4 py-2 rounded-xl font-medium text-lg border border-slate-200 shadow-sm text-center">计算机网络</div>
              </div>
              <div className="text-terracotta/50 font-bold text-2xl">→</div>
              <div className="flex flex-col gap-2">
                <div className="bg-slate-50 text-slate-700 px-4 py-2 rounded-xl font-medium text-lg border border-slate-200 shadow-sm text-center">状态流动 & 异常处理</div>
                <div className="bg-slate-50 text-slate-700 px-4 py-2 rounded-xl font-medium text-lg border border-slate-200 shadow-sm text-center">信息安全 & 权限控制</div>
              </div>
              <div className="text-terracotta/50 font-bold text-2xl">→</div>
              <div className="bg-slate-dark text-white px-5 py-4 rounded-xl font-bold text-xl shadow-sm text-center">
                软件工程约束<br/><span className="text-base font-normal opacity-80">可观测 / 可回滚</span>
              </div>
              <div className="text-terracotta/50 font-bold text-2xl">→</div>
              <div className="bg-terracotta text-white px-6 py-5 rounded-xl font-bold text-2xl shadow-sm text-center">
                业务系统交付
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 pt-6 border-t border-slate-dark/20 z-10 flex items-center">
          <div className="bg-terracotta/10 text-terracotta font-serif text-2xl px-6 py-2 rounded-full mr-6 whitespace-nowrap">
            总而言之
          </div>
          <p className="font-sans font-medium text-3xl opacity-90 leading-snug">
            如果 Vibe Coding 只是让你用了个「一句话生成工具」，那么没啥意义。如果让你验证 Idea 并产生了自我反馈，就不错。如果想「Vibe 上线」，要么补课，要么预备大爆炸。
          </p>
        </div>

      </div>
    </SlideWrapper>
  );
}
