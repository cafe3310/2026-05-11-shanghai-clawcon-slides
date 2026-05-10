import React from 'react';
import SlideWrapper from '../SlideWrapper';
import { Clock, Cpu, Wrench, Terminal, ArrowRight, ArrowLeft, Database, Workflow } from 'lucide-react';

export default function Page03Slide() {
  return (
    <SlideWrapper backgroundColor="bg-ivory-light">
      <div className="w-full h-full flex flex-col p-12 text-slate-dark relative overflow-hidden">

        {/* Background decorative grid */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
             style={{ backgroundImage: 'linear-gradient(#2D2B2A 1px, transparent 1px), linear-gradient(90deg, #2D2B2A 1px, transparent 1px)', backgroundSize: '60px 60px' }}>
        </div>

        {/* Header */}
        <div className="mb-6 border-b border-slate-dark/20 pb-4 z-10">
          <h1 className="font-sans font-bold text-6xl tracking-tight">
            这些「主动 Agent」到底是什么？
          </h1>
        </div>

        {/* Main Content Area - Flowchart */}
        <div className="flex items-center justify-center gap-4 z-10 relative px-8 mt-12">

          {/* Step 1 */}
          <div className="flex flex-col items-center w-1/4 relative z-10">
            <div className="w-full h-24 bg-white border-2 border-slate-dark/20 rounded-xl flex items-center justify-center mb-2 shadow-sm">
              <Clock size={56} strokeWidth={1.5} className="text-slate-dark/70" />
            </div>
            <div className="text-center">
              <div className="font-mono text-2xl text-terracotta font-bold">[Step 1]</div>
              <div className="font-sans font-bold text-2xl">定时器：Crontab</div>
              <div className="font-sans text-2xl opacity-70">每分钟触发一次</div>
            </div>
          </div>

          <ArrowRight size={48} strokeWidth={1.5} className="text-slate-dark/30 mb-12 shrink-0" />

          {/* Step 2 */}
          <div className="flex flex-col items-center w-1/4 relative z-10">
            <div className="w-full h-24 bg-white border-2 border-slate-dark/20 rounded-xl flex items-center justify-center mb-2 shadow-sm">
              <Cpu size={56} strokeWidth={1.5} className="text-slate-dark/70" />
            </div>
            <div className="text-center">
              <div className="font-mono text-2xl text-terracotta font-bold">[Step 2]</div>
              <div className="font-sans font-bold text-2xl">模型推理</div>
              <div className="font-sans text-2xl opacity-70">接收指令：“该做什么？”</div>
            </div>
          </div>

          <ArrowRight size={48} strokeWidth={1.5} className="text-slate-dark/30 mb-12 shrink-0" />

          {/* Step 3 */}
          <div className="flex flex-col items-center w-1/4 relative z-10">
            <div className="w-full h-24 bg-white border-2 border-slate-dark/20 rounded-xl flex items-center justify-center mb-2 shadow-sm">
              <Wrench size={56} strokeWidth={1.5} className="text-slate-dark/70" />
            </div>
            <div className="text-center">
              <div className="font-mono text-2xl text-terracotta font-bold">[Step 3]</div>
              <div className="font-sans font-bold text-2xl">工具调用：翻译为</div>
              <div className="font-sans text-2xl opacity-70">具体的发消息动作</div>
            </div>
          </div>

          <ArrowRight size={48} strokeWidth={1.5} className="text-ochre/50 mb-12 shrink-0" />

          {/* Step 4 */}
          <div className="flex flex-col items-center w-1/4 relative z-10">
            <div className="w-full h-24 bg-white border-2 border-ochre/40 rounded-xl flex items-center justify-center mb-2 shadow-md relative overflow-hidden">
               <div className="absolute inset-0 bg-ochre/5"></div>
              <Terminal size={56} strokeWidth={1.5} className="text-ochre relative z-10" />
            </div>
            <div className="text-center">
              <div className="font-mono text-2xl text-ochre font-bold">[Step 4]</div>
              <div className="font-sans font-bold text-2xl">环境输出：调取 API</div>
              <div className="font-sans text-2xl opacity-70">发送一句“在吗”</div>
            </div>
          </div>

        </div>

        {/* Code Snippet with Explanations */}
        <div className="w-full max-w-8xl mx-auto mt-12 z-10">
          <div className="flex flex-col">
            {/* Line 1 */}
            <div className="flex items-stretch">
              <div className="w-[55%] bg-slate-dark text-ivory-light/90 font-mono text-2xl p-4 rounded-tl-lg border-b border-slate-dark/40">
                (crontab -l 2&gt;/dev/null; echo "* * * * * \
              </div>
              <div className="w-[55%] bg-white/80 border border-slate-dark/10 rounded-tr-lg p-4 flex items-center gap-3 shadow-sm">
                <ArrowLeft className="text-terracotta shrink-0" size={24} />
                <span className="font-bold text-slate-dark text-2xl">定时触发</span>
              </div>
            </div>
            {/* Line 2 */}
            <div className="flex items-stretch">
              <div className="w-[55%] bg-slate-dark text-ivory-light/90 font-mono text-2xl p-4 border-b border-slate-dark/40">
                &nbsp;&nbsp;gemini --yolo \
              </div>
              <div className="w-[55%] bg-white/80 border border-slate-dark/10 border-t-0 p-4 flex items-center gap-3 shadow-sm">
                <ArrowLeft className="text-terracotta shrink-0" size={24} />
                <span className="font-bold text-slate-dark text-2xl">LLM 推理</span>
              </div>
            </div>
            {/* Line 3 */}
            <div className="flex items-stretch">
              <div className="w-[55%] bg-slate-dark text-ivory-light/90 font-mono text-2xl p-4 border-b border-slate-dark/40">
                &nbsp;&nbsp;-p '看看群消息，像个人样。\
              </div>
              <div className="w-[55%] bg-white/80 border border-slate-dark/10 border-t-0 p-4 flex items-center gap-3 shadow-sm">
                <ArrowLeft className="text-terracotta shrink-0" size={24} />
                <span className="font-bold text-slate-dark text-2xl">工具调用，获取环境信息</span>
              </div>
            </div>
            {/* Line 4 */}
            <div className="flex items-stretch">
              <div className="w-[55%] bg-slate-dark text-ivory-light/90 font-mono text-2xl p-4 rounded-bl-lg">
                &nbsp;&nbsp;没啥好主意的话就调用 send-ding 给张三发个消息'") | crontab -
              </div>
              <div className="w-[55%] bg-white/80 border border-slate-dark/10 border-t-0 rounded-br-lg p-4 flex items-center gap-3 shadow-sm">
                <ArrowLeft className="text-terracotta shrink-0" size={24} />
                <span className="font-bold text-slate-dark text-2xl">输出结果给 IM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Advanced Mechanisms */}
        <div className="w-full max-w-7xl mx-auto mt-8 z-10">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px bg-slate-dark/20 flex-1"></div>
            <span className="font-mono text-xl font-bold text-slate-dark/50 uppercase tracking-widest">进阶演化：热门 Agent 的扩展分支</span>
            <div className="h-px bg-slate-dark/20 flex-1"></div>
          </div>
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-white/60 border border-slate-dark/10 rounded-xl p-6 shadow-sm flex flex-col items-center text-center">
              <Database className="text-sage mb-3" size={32} />
              <h4 className="font-bold text-2xl mb-2">记忆机制</h4>
              <p className="text-xl opacity-70 leading-relaxed">引入向量库与长短期记忆，让 Agent 拥有历史知识</p>
            </div>
            <div className="bg-white/60 border border-slate-dark/10 rounded-xl p-6 shadow-sm flex flex-col items-center text-center">
              <Workflow className="text-ochre mb-3" size={32} />
              <h4 className="font-bold text-2xl mb-2">调用优化</h4>
              <p className="text-xl opacity-70 leading-relaxed">引入 ReAct、规划与反思机制，提升复杂任务的成功率。</p>
            </div>
            <div className="bg-white/60 border border-slate-dark/10 rounded-xl p-6 shadow-sm flex flex-col items-center text-center">
              <Wrench className="text-terracotta mb-3" size={32} />
              <h4 className="font-bold text-2xl mb-2">Skill 抽取</h4>
              <p className="text-xl opacity-70 leading-relaxed">将常用动作封装为独立技能，支持动态加载与 API 发现。</p>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="mt-auto pt-6 border-t border-slate-dark/20 z-10 flex items-center shrink-0">
          <div className="bg-terracotta/10 text-terracotta font-serif text-2xl px-6 py-2 rounded-full mr-6 whitespace-nowrap">
            总而言之
          </div>
          <p className="font-sans font-medium text-2xl opacity-90">
            这个极简系统看起来像一个「自主行动的助手」，本质上只是定时触发 + 模型推理 + 外部接口（当然各家都有自己的小花活）。
          </p>
        </div>

      </div>
    </SlideWrapper>
  );
}
