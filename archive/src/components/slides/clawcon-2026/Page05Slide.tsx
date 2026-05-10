import React from 'react';
import SlideWrapper from '../../SlideWrapper';
import { ArrowRight } from 'lucide-react';

export default function Page05Slide() {
  return (
    <SlideWrapper backgroundColor="bg-ivory-light">
      <div className="w-full h-full flex flex-col p-16 text-slate-dark relative">
        
        {/* Header */}
        <div className="mb-12 border-b border-slate-dark/20 pb-6 z-10">
          <h1 className="font-sans font-bold text-6xl tracking-tight">
            合理的学习路径是什么？
          </h1>
          <p className="text-2xl mt-4 opacity-80 font-serif">
            先绕开复杂的工程层，直接和模型对话。然后逐渐提高自己的「使用技能」。就跟练琴一样的。
          </p>
        </div>

        {/* Main Content Area: Flex Staircase */}
        <div className="flex-1 flex gap-8 relative z-10 mb-12">
          {/* Decorative background line to emphasize the upward path */}
          <div className="absolute left-10 right-10 top-[60%] h-0 border-t-2 border-dashed border-slate-dark/15 -z-10 transform -rotate-[10deg] origin-left"></div>

          {/* Step 1 */}
          <div className="flex-1 flex flex-col justify-end pb-8">
            <div className="bg-white/80 border border-slate-dark/10 rounded-2xl p-8 shadow-sm relative">
              <div className="text-terracotta font-serif italic text-6xl mb-4 opacity-80">01</div>
              <h3 className="font-sans font-bold text-3xl mb-2">基础交互</h3>
              <p className="font-mono text-xl opacity-60 mb-4 uppercase tracking-wider">LLM Client</p>
              <div className="space-y-4">
                <p className="text-2xl opacity-80 leading-relaxed">
                  <span className="font-bold text-slate-dark">任务</span>：总结纪要、文案改写、单点排查
                </p>
                <p className="text-2xl opacity-80 leading-relaxed">
                  <span className="font-bold text-slate-dark">推荐</span>：Cherry Studio / Chatbox
                </p>
              </div>
            </div>
          </div>
          
          {/* Step 2 */}
          <div className="flex-1 flex flex-col justify-center">
            <div className="bg-white/80 border border-slate-dark/10 rounded-2xl p-8 shadow-sm relative">
              <div className="text-terracotta font-serif italic text-6xl mb-4 opacity-80">02</div>
              <h3 className="font-sans font-bold text-3xl mb-2">流程固化</h3>
              <p className="font-mono text-xl opacity-60 mb-4 uppercase tracking-wider">Workflow</p>
              <div className="space-y-4">
                <p className="text-2xl opacity-80 leading-relaxed">
                  <span className="font-bold text-slate-dark">任务</span>：SOP 自动化、办公外挂制作
                </p>
                <p className="text-2xl opacity-80 leading-relaxed">
                  <span className="font-bold text-slate-dark">推荐</span>：Claude Cowork / Dify / n8n
                </p>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex-1 flex flex-col justify-start pt-8">
            <div className="bg-white/80 border border-slate-dark/10 rounded-2xl p-8 shadow-sm relative">
              <div className="text-terracotta font-serif italic text-6xl mb-4 opacity-80">03</div>
              <h3 className="font-sans font-bold text-3xl mb-2">复杂编排</h3>
              <p className="font-mono text-xl opacity-60 mb-4 uppercase tracking-wider">Autonomous Agent</p>
              <div className="space-y-4">
                <p className="text-2xl opacity-80 leading-relaxed">
                  <span className="font-bold text-slate-dark">任务</span>：跨系统协同、Claw-like bot
                </p>
                <p className="text-2xl opacity-80 leading-relaxed">
                  <span className="font-bold text-slate-dark">推荐</span>：Replit Agent / Bolt.new
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Process Flow */}
        <div className="mt-auto border-l-4 border-terracotta pl-8 py-4">
          <h2 className="font-mono text-xl font-bold mb-6 uppercase tracking-widest opacity-60">
            个人推荐的路径：
          </h2>
          
          <div className="flex items-center gap-4">
            {/* Step 1 */}
            <div className="flex-1 bg-white/60 border border-slate-dark/10 rounded-xl p-5 shadow-sm text-center">
              <p className="font-bold text-2xl mb-2 font-sans">1. 避开误区</p>
              <p className="text-xl opacity-80">不要先买课或盲目收集工具</p>
            </div>
            
            <ArrowRight className="text-terracotta opacity-60 shrink-0" size={32} />
            
            {/* Step 2 */}
            <div className="flex-1 bg-white/60 border border-slate-dark/10 rounded-xl p-5 shadow-sm text-center">
              <p className="font-bold text-2xl mb-2 font-sans">2. 建立环境</p>
              <p className="text-xl opacity-80">找顶级模型给自己当老师</p>
            </div>
            
            <ArrowRight className="text-terracotta opacity-60 shrink-0" size={32} />
            
            {/* Step 3 */}
            <div className="flex-1 bg-white/60 border border-slate-dark/10 rounded-xl p-5 shadow-sm text-center">
              <p className="font-bold text-2xl mb-2 font-sans">3. 核心方法</p>
              <p className="text-xl opacity-80">带着问题，让模型交互式教你</p>
            </div>
            
            <ArrowRight className="text-terracotta opacity-60 shrink-0" size={32} />
            
            {/* Step 4 */}
            <div className="flex-1 bg-white/60 border border-slate-dark/10 rounded-xl p-5 shadow-sm text-center">
              <p className="font-bold text-2xl mb-2 font-sans">4. 进阶原则</p>
              <p className="text-xl opacity-80">了解原理，按复杂度阶梯提升</p>
            </div>
          </div>
        </div>

      </div>
    </SlideWrapper>
  );
}
