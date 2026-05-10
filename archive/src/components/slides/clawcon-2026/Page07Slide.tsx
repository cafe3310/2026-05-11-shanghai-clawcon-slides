import React from 'react';
import SlideWrapper from '../../SlideWrapper';
import { Database, BookOpen, Zap, TrendingUp } from 'lucide-react';

export default function Page07Slide() {
  return (
    <SlideWrapper backgroundColor="bg-ivory-light">
      <div className="w-full h-full flex flex-col p-16 text-slate-dark">
        {/* Header */}
        <div className="mb-10 border-b border-slate-dark/20 pb-6 z-10 shrink-0">
          <h1 className="font-sans font-bold text-6xl tracking-tight">
            什么值得学，什么值得无视？
          </h1>
          <p className="text-2xl mt-4 opacity-80 font-serif">
            到处都是 Agent。如何选择对自己个人最好的学习内容，而不是被 FOMO 牵着鼻子走？
          </p>
        </div>

        {/* Main Content: Two Columns */}
        <div className="flex-1 flex gap-12 min-h-0">

          {/* Left Column: The Filter Grid */}
          <div className="flex-1 flex flex-col">
            <h2 className="text-2xl font-bold mb-6 font-mono uppercase tracking-widest opacity-60">
              「对个人技能有增量吗？」
            </h2>

            <div className="grid grid-cols-2 gap-4 mb-6 flex-1">
              {/* Box 1 */}
              <div className="bg-white/60 border border-slate-dark/10 rounded-2xl p-6 shadow-sm flex flex-col justify-center relative overflow-hidden">
                <Database className="absolute -right-4 -bottom-4 text-slate-dark/5 w-32 h-32" />
                <h3 className="text-3xl font-bold mb-2 font-sans relative z-10">1. 数据增量</h3>
                <p className="text-2xl opacity-80 leading-snug relative z-10">
                  是否帮你积累了有效信息？
                </p>
              </div>

              {/* Box 2 */}
              <div className="bg-white/60 border border-slate-dark/10 rounded-2xl p-6 shadow-sm flex flex-col justify-center relative overflow-hidden">
                <BookOpen className="absolute -right-4 -bottom-4 text-slate-dark/5 w-32 h-32" />
                <h3 className="text-3xl font-bold mb-2 font-sans relative z-10">2. 知识增量</h3>
                <p className="text-2xl opacity-80 leading-snug relative z-10">
                  是否让你加深了对 LLM 的理解？
                </p>
              </div>

              {/* Box 3 */}
              <div className="bg-white/60 border border-slate-dark/10 rounded-2xl p-6 shadow-sm flex flex-col justify-center relative overflow-hidden">
                <Zap className="absolute -right-4 -bottom-4 text-slate-dark/5 w-32 h-32" />
                <h3 className="text-3xl font-bold mb-2 font-sans relative z-10">3. 熟练度增量</h3>
                <p className="text-2xl opacity-80 leading-snug relative z-10">
                  是否提升了你的人机协作手感？
                </p>
              </div>

              {/* Box 4 */}
              <div className="bg-white/60 border border-slate-dark/10 rounded-2xl p-6 shadow-sm flex flex-col justify-center relative overflow-hidden">
                <TrendingUp className="absolute -right-4 -bottom-4 text-slate-dark/5 w-32 h-32" />
                <h3 className="text-3xl font-bold mb-2 font-sans relative z-10">4. 真实收益</h3>
                <p className="text-2xl opacity-80 leading-snug relative z-10">
                  是否节约了劳动、时间或注意力？
                </p>
              </div>
            </div>

            {/* Note Box */}
            <div className="mt-6 pt-6 border-t border-slate-dark/20 z-10 flex items-center">
              <div className="bg-terracotta/10 text-terracotta font-serif text-2xl px-6 py-2 rounded-full mr-6 whitespace-nowrap">
                总而言之
              </div>
              <p className="font-sans font-medium text-3xl opacity-90">
                如果只剩下「我先于别人用了个新工具」，那大概率可以无视。
              </p>
            </div>
          </div>

          {/* Vertical Divider */}
          <div className="w-px bg-slate-dark/10 my-4"></div>

          {/* Right Column: Contextual Matching */}
          <div className="flex-1 flex flex-col">
            <h2 className="text-2xl font-bold mb-6 font-mono uppercase tracking-widest opacity-60">
              「Agent 或工具 - 模型能力分布 - 我想做的任务，三者匹配吗？」
            </h2>

            {/* Infographic Area */}
            <div className="flex-1 flex flex-col gap-6">

              {/* Top Infographic Box (Radar Chart) */}
              <div className="bg-white/60 border border-slate-dark/10 rounded-2xl p-6 shadow-sm flex flex-col flex-1">
                <p className="text-2xl font-bold mb-2 text-center border-b border-slate-dark/10 pb-4">
                  模型能力的多维雷达图
                </p>

                <div className="flex-1 flex flex-col items-center justify-center relative w-full">
                  <svg viewBox="0 0 300 260" className="w-full h-full min-h-[220px] max-h-[260px]">
                    {/* Grid */}
                    <g className="stroke-slate-dark/10" fill="none" strokeWidth="1">
                      <polygon points="150,110 176,125 176,155 150,170 124,155 124,125" />
                      <polygon points="150,80 202,110 202,170 150,200 98,170 98,110" />
                      <polygon points="150,50 227.9,95 227.9,185 150,230 72.1,185 72.1,95" />
                    </g>

                    {/* Axes */}
                    <g className="stroke-slate-dark/20" strokeWidth="1" strokeDasharray="4 4">
                      <line x1="150" y1="140" x2="150" y2="50" />
                      <line x1="150" y1="140" x2="227.9" y2="95" />
                      <line x1="150" y1="140" x2="227.9" y2="185" />
                      <line x1="150" y1="140" x2="150" y2="230" />
                      <line x1="150" y1="140" x2="72.1" y2="185" />
                      <line x1="150" y1="140" x2="72.1" y2="95" />
                    </g>

                    {/* Model 2 */}
                    <polygon points="150,50 204.6,108.5 181.2,158 150,185 95.4,171.5 79.9,99.5" className="fill-sage/40 stroke-sage" strokeWidth="2" />

                    {/* Model 1 */}
                    <polygon points="150,104 220.1,99.5 227.9,185 150,230 79.9,180.5 103.2,113" className="fill-terracotta/40 stroke-terracotta" strokeWidth="2" />

                    {/* Labels */}
                    <g className="text-[18px] font-bold fill-slate-dark/80">
                      <text x="150" y="35" textAnchor="middle">文本生成</text>
                      <text x="245" y="100" textAnchor="start">逻辑推理</text>
                      <text x="245" y="190" textAnchor="start">代码生成</text>
                      <text x="150" y="250" textAnchor="middle">工具调用</text>
                      <text x="55" y="190" textAnchor="end">指令遵循</text>
                      <text x="55" y="100" textAnchor="end">长文本</text>
                    </g>
                  </svg>
                </div>

                {/* Legend & Dimensions */}
                <div className="mt-2 pt-4 border-t border-slate-dark/10 flex flex-col gap-4">
                  <div className="flex justify-center gap-8">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-terracotta/40 border-2 border-terracotta rounded-sm"></div>
                      <span className="font-bold text-xl">重型工程模型 (偏向严谨指令)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-sage/40 border-2 border-sage rounded-sm"></div>
                      <span className="font-bold text-xl">通用文本模型 (偏向自然表达)</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-xl text-slate-dark/80 bg-ivory-light/50 p-4 rounded-xl">
                    <div><span className="font-bold text-slate-dark">📝 文本生成:</span> 创作润色</div>
                    <div><span className="font-bold text-slate-dark">🧠 逻辑推理:</span> 问题拆解</div>
                    <div><span className="font-bold text-slate-dark">💻 代码生成:</span> 逻辑构建</div>
                    <div><span className="font-bold text-slate-dark">🔧 工具调用:</span> API 准确率</div>
                    <div><span className="font-bold text-slate-dark">🎯 指令遵循:</span> 格式约束</div>
                    <div><span className="font-bold text-slate-dark">📚 长文本:</span> 上下文记忆</div>
                  </div>
                </div>
              </div>

              {/* Warning Box */}
              <div className="bg-terracotta/5 border border-terracotta/20 rounded-2xl p-6 shadow-sm mt-auto">
                <h3 className="text-3xl font-bold mb-3 flex items-center gap-3 text-terracotta">
                  <span className="text-3xl">⚠️</span> 错配陷阱：丧失“人味儿”
                </h3>
                <p className="text-2xl opacity-80 leading-relaxed">
                  模型需要与工具匹配的 <strong className="font-bold">Harness</strong>。如果只盯着最新的重型工具，不分场景乱用模型，会让模型用<strong className="text-terracotta">「调用工具的逻辑」</strong>去写文章，最终导致输出干瘪、机械，毫无“人味儿”。
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </SlideWrapper>
  );
}
