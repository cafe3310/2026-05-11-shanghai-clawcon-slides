import React from 'react';
import SlideWrapper from '../../SlideWrapper';

export default function Page02Slide() {
  return (
    <SlideWrapper backgroundColor="bg-ivory-light">
      <div className="w-full h-full flex flex-col p-16 text-slate-dark relative">
        
        {/* Background decorative grid */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: 'linear-gradient(#2D2B2A 1px, transparent 1px), linear-gradient(90deg, #2D2B2A 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
        </div>

        {/* Header */}
        <div className="mb-10 border-b border-slate-dark/20 pb-6 z-10 shrink-0">
          <h1 className="font-sans font-bold text-6xl tracking-tight">
            焦虑从哪来：为什么最近大家这么 FOMO？
          </h1>
          <p className="text-2xl mt-4 opacity-80 font-serif">
            倒也不是所有热点都会变成行业变化，但 LLM 是真的。下面的时间线不是发布时间，是国内感知强烈的时间。
          </p>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex gap-12 z-10 relative min-h-0">
          
          {/* Left: Timeline */}
          <div className="w-[65%] relative flex flex-col justify-center gap-8 py-4 ml-12 pr-8">
            
            {/* Vertical Timeline Line */}
            <div className="absolute left-[21px] top-6 bottom-6 w-0 border-l-4 border-dashed border-slate-dark/20 z-0"></div>
            
            {/* Step 1 */}
            <div className="relative z-10 pl-16 flex flex-col">
              <div className="absolute left-[13px] top-2 w-5 h-5 rounded-full bg-slate-dark/40 border-4 border-ivory-light"></div>
              <div className="flex justify-between items-end mb-2">
                <div className="font-sans font-bold text-2xl text-slate-dark">1. 基础模型 + LLM Client</div>
                <div className="font-mono text-2xl opacity-60">2023 - 2024中</div>
              </div>
              <div className="font-sans text-2xl opacity-80 leading-relaxed">
                <span className="text-slate-dark font-bold"></span>GPT-4 / Claude 2 / Poe / Perplexity
                <span className="mx-3 opacity-20">|</span>
                <span className="opacity-60">侧重 Prompt Engineering 与单点对话</span>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative z-10 pl-16 flex flex-col">
              <div className="absolute left-[13px] top-2 w-5 h-5 rounded-full bg-sage/60 border-4 border-ivory-light"></div>
              <div className="flex justify-between items-end mb-2">
                <div className="font-sans font-bold text-2xl text-slate-dark">
                  2. 增强模型 + 确定性工作流 / RAG
                  <span className="inline-block bg-terracotta/10 text-terracotta text-xl px-3 py-1 rounded ml-3 align-middle font-mono">Function Calling 概念</span>
                </div>
                <div className="font-mono text-2xl opacity-60">2024下半年</div>
              </div>
              <div className="font-sans text-2xl opacity-80 leading-relaxed">
                <span className="text-slate-dark font-bold"></span>GPT-4o / Dify / n8n
                <span className="mx-3 opacity-20">|</span>
                <span className="opacity-60">引入知识库挂载与函数调用机制</span>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative z-10 pl-16 flex flex-col">
              <div className="absolute left-[13px] top-2 w-5 h-5 rounded-full bg-ochre/80 border-4 border-ivory-light"></div>
              <div className="flex justify-between items-end mb-2">
                <div className="font-sans font-bold text-2xl text-slate-dark">3. 推理模型 + AI Native 生产力</div>
                <div className="font-mono text-2xl opacity-60">2025上半年</div>
              </div>
              <div className="font-sans text-2xl opacity-80 leading-relaxed">
                <span className="text-slate-dark font-bold"></span>GPT-o1 / Cursor / MCP / GPTs
                <span className="mx-3 opacity-20">|</span>
                <span className="opacity-60">长时思考与更强指令遵循，编程与深度任务规划</span>
              </div>
            </div>

            {/* Step 4 (Turning Point) */}
            <div className="relative z-10 pl-16 flex flex-col">
              {/* Pointer */}
              <div className="absolute -left-[100px] top-6 flex items-center gap-2 z-20">
                <div className="bg-terracotta text-white font-bold px-4 py-2 rounded-lg text-2xl shadow-sm">转折点</div>
                <div className="w-6 border-t-4 border-terracotta border-dashed"></div>
              </div>
              
              <div className="absolute left-[11px] top-9 w-6 h-6 rounded-full bg-terracotta border-4 border-ivory-light shadow-sm z-10"></div>
              
              <div className="bg-white/80 border-2 border-terracotta/30 rounded-xl p-6 shadow-sm -mt-2">
                <div className="flex justify-between items-end mb-3">
                  <div className="font-sans font-bold text-2xl text-terracotta">4. 行动模型 + 跨应用协同</div>
                  <div className="font-mono text-2xl text-terracotta font-bold">2025下半年</div>
                </div>
                <div className="font-sans text-2xl opacity-90 leading-relaxed">
                  <span className="font-bold"></span>Claude 3.5 Sonnet / OpenAI Operator / Claude Code
                  <span className="mx-3 opacity-20">|</span>
                  <span className="opacity-60">从“生成代码”转向“直接完成任务”，具备跨软件交互能力。</span>
                </div>
              </div>
            </div>

            {/* Step 5 */}
            <div className="relative z-10 pl-16 flex flex-col">
              <div className="absolute left-[13px] top-2 w-5 h-5 rounded-full bg-terracotta border-4 border-ivory-light"></div>
              <div className="flex justify-between items-end mb-2">
                <div className="font-sans font-bold text-2xl text-slate-dark">5. 推理原生应用 + 自主型 Agent</div>
                <div className="font-mono text-2xl text-terracotta font-bold">2026年初至今</div>
              </div>
              <div className="font-sans text-2xl opacity-80 leading-relaxed mb-4">
                <span className="text-slate-dark font-bold"></span>Claude Cowork / Claw-like / OS Agent
                <span className="mx-3 opacity-20">|</span>
                <span className="opacity-60">推理能力平权，深度介入办公闭环，替代剧增</span>
              </div>
              <div className="text-2xl text-terracotta/90 font-medium bg-terracotta/10 p-5 rounded-lg border border-terracotta/20 leading-relaxed max-w-[1200px]">
                ⚠️ 工作的替代被大规模曝光，导致三年的技术演进被暴力压缩，集中爆发导致集体焦虑。
              </div>
            </div>

          </div>

          {/* Right: Variables */}
          <div className="w-[35%] flex flex-col justify-center">
            <div className="bg-white/60 border border-slate-dark/10 rounded-3xl p-10 shadow-sm flex flex-col justify-center">
              <h3 className="font-sans font-bold text-3xl mb-10 text-slate-dark leading-snug">
                焦虑来源不是单一因素，<br/>而是<span className="text-terracotta">多重变量叠加</span>：
              </h3>
              <ul className="space-y-6 text-3xl opacity-80 font-medium">
                <li className="flex items-start">
                  <span className="text-terracotta mr-4 mt-1 font-bold text-3xl">→</span>
                  <span className="leading-relaxed">模型推理能力持续拉升</span>
                </li>
                <li className="flex items-start">
                  <span className="text-terracotta mr-4 mt-1 font-bold text-3xl">→</span>
                  <span className="leading-relaxed">工具封装层快速更迭</span>
                </li>
                <li className="flex items-start">
                  <span className="text-terracotta mr-4 mt-1 font-bold text-3xl">→</span>
                  <span className="leading-relaxed">人机协作边界向真实工作流推进</span>
                </li>
                <li className="flex items-start">
                  <span className="text-terracotta mr-4 mt-1 font-bold text-3xl">→</span>
                  <span className="leading-relaxed">生产关系重构</span>
                </li>
                <li className="flex items-start">
                  <span className="text-terracotta mr-4 mt-1 font-bold text-3xl">→</span>
                  <span className="leading-relaxed">个体间效能差距直接拉开</span>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="mt-8 pt-6 border-t border-slate-dark/10 z-10 flex items-center shrink-0">
          <div className="bg-terracotta/10 text-terracotta font-serif text-2xl px-6 py-2 rounded-full mr-6 whitespace-nowrap">
            总而言之
          </div>
          <p className="font-sans font-medium text-2xl opacity-90">
            变化并不是突然发生。是三年的技术演进，最近半年集中砸到了所有人脸上。
          </p>
        </div>

      </div>
    </SlideWrapper>
  );
}
