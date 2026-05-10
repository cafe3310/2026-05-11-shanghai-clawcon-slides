import React from 'react';
import SlideWrapper from '../../SlideWrapper';
import { Search, PackageOpen, Ruler, Compass } from 'lucide-react';

export default function TocSlide() {
  return (
    <SlideWrapper backgroundColor="bg-ivory-light">
      <div className="w-full h-full flex flex-col p-16 text-slate-dark relative overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
             style={{ backgroundImage: 'linear-gradient(#2D2B2A 1px, transparent 1px), linear-gradient(90deg, #2D2B2A 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
        </div>

        {/* Header - Reduced margin */}
        <div className="mb-4 border-b border-slate-dark/20 pb-4 z-10 shrink-0">
          <h1 className="font-sans font-bold text-6xl tracking-tight">
            接下来会聊到什么
          </h1>
          <p className="text-3xl mt-2 opacity-80 font-serif">
            也没有什么大纲，就 QA 形式吧
          </p>
        </div>

        {/* 2x2 Grid - Tight gap */}
        <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-4 z-10 min-h-0">

          {/* Part 1 */}
          <div className="bg-white/60 border border-slate-dark/10 rounded-2xl px-8 py-5 flex flex-col hover:bg-white transition-colors shadow-sm">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 flex-shrink-0 rounded-full flex items-center justify-center bg-manilla text-terracotta mt-2">
                <Search size={32} strokeWidth={1.5} />
              </div>
              <div className="flex-1">
                <p className="font-mono text-2xl opacity-50 mb-1 tracking-widest uppercase">Part 1</p>
                <h2 className="font-sans font-bold text-5xl mb-1 text-slate-dark">关于「焦虑溯源」的问题</h2>
                <ul className="list-none space-y-1 opacity-80 text-3xl leading-snug">
                  <li className="flex items-start">
                    <span className="text-terracotta mr-3 mt-1">•</span>
                    <span>焦虑从哪来：为什么最近大家这么 FOMO？</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Part 2 */}
          <div className="bg-white/60 border border-slate-dark/10 rounded-2xl px-8 py-5 flex flex-col hover:bg-white transition-colors shadow-sm">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 flex-shrink-0 rounded-full flex items-center justify-center bg-manilla text-terracotta mt-2">
                <PackageOpen size={32} strokeWidth={1.5} />
              </div>
              <div className="flex-1">
                <p className="font-mono text-2xl opacity-50 mb-1 tracking-widest uppercase">Part 2</p>
                <h2 className="font-sans font-bold text-5xl mb-1 text-slate-dark">关于「Agent 本质」的问题</h2>
                <ul className="list-none space-y-1 opacity-80 text-3xl leading-snug">
                  <li className="flex items-start">
                    <span className="text-terracotta mr-3 mt-1">•</span>
                    <span>Agent 到底是什么？ - 别被包装名词带着跑</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-terracotta mr-3 mt-1">•</span>
                    <span>如何进行 Agent 工具选择和避坑？</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Part 3 */}
          <div className="bg-white/60 border border-slate-dark/10 rounded-2xl px-8 py-5 flex flex-col hover:bg-white transition-colors shadow-sm">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 flex-shrink-0 rounded-full flex items-center justify-center bg-manilla text-terracotta mt-2">
                <Ruler size={32} strokeWidth={1.5} />
              </div>
              <div className="flex-1">
                <p className="font-mono text-2xl opacity-50 mb-1 tracking-widest uppercase">Part 3</p>
                <h2 className="font-sans font-bold text-5xl mb-1 text-slate-dark">关于「学习路径」的问题</h2>
                <ul className="list-none space-y-1 opacity-80 text-3xl leading-snug">
                  <li className="flex items-start">
                    <span className="text-terracotta mr-3 mt-1">•</span>
                    <span>合理的学习路径是什么？什么值得学，什么值得无视？</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-terracotta mr-3 mt-1">•</span>
                    <span>什么适合交给 Agent，什么不适合？</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-terracotta mr-3 mt-1">•</span>
                    <span>跨界 Vibe Coding 有用吗？- 如何避免浪费时间</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Part 4 */}
          <div className="bg-white/60 border border-slate-dark/10 rounded-2xl px-8 py-5 flex flex-col hover:bg-white transition-colors shadow-sm">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 flex-shrink-0 rounded-full flex items-center justify-center bg-manilla text-terracotta mt-2">
                <Compass size={32} strokeWidth={1.5} />
              </div>
              <div className="flex-1">
                <p className="font-mono text-2xl opacity-50 mb-1 tracking-widest uppercase">Part 4</p>
                <h2 className="font-sans font-bold text-5xl mb-1 text-slate-dark">关于「未来心态」的问题</h2>
                <ul className="list-none space-y-1 opacity-80 text-3xl leading-snug">
                  <li className="flex items-start">
                    <span className="text-terracotta mr-3 mt-1">•</span>
                    <span>对非技术岗位成员的新挑战是什么？</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-terracotta mr-3 mt-1">•</span>
                    <span>如何在跟上技能更新的同时，保持精神健康？</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </SlideWrapper>
  );
}
