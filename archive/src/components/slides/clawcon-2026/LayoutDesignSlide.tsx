import React from 'react';
import SlideWrapper from '../../SlideWrapper';

export default function LayoutDesignSlide() {
  return (
    <SlideWrapper backgroundColor="bg-ivory-light">
      <div className="w-full h-full flex flex-col p-16 text-slate-dark relative">
        
        {/* Header */}
        <div className="mb-12 border-b border-slate-dark/20 pb-6 z-10">
          <h1 className="font-sans font-bold text-6xl tracking-tight">
            Layout Design & Specifications
          </h1>
          <p className="text-2xl mt-4 opacity-80 font-serif italic">
            空间布局与排版规范：固定标题、内容区与底部锚点
          </p>
        </div>

        <div className="flex-1 flex gap-16 z-10 items-center">
          
          {/* Left: Wireframe */}
          <div className="w-[55%] flex flex-col items-center justify-center relative">
            
            {/* The Wireframe Box representing a slide */}
            <div className="w-full aspect-video bg-white border-2 border-slate-dark/20 rounded-xl shadow-md p-6 flex flex-col relative overflow-hidden">
              
              {/* Wireframe Header */}
              <div className="border-2 border-dashed border-terracotta/40 bg-terracotta/5 p-4 rounded-lg mb-4 relative group transition-colors hover:bg-terracotta/10">
                <div className="absolute -left-28 top-1/2 -translate-y-1/2 text-sm font-mono text-terracotta font-bold text-right w-24">
                  Header<br/>(mb-6)
                </div>
                <div className="h-6 bg-slate-dark/30 rounded w-2/3 mb-3"></div>
                <div className="h-3 bg-slate-dark/15 rounded w-1/2 border-l-2 border-terracotta pl-2"></div>
              </div>

              {/* Wireframe Content */}
              <div className="flex-1 border-2 border-dashed border-focus-blue/40 bg-focus-blue/5 p-4 rounded-lg flex gap-4 relative group transition-colors hover:bg-focus-blue/10">
                <div className="absolute -left-28 top-1/2 -translate-y-1/2 text-sm font-mono text-focus-blue font-bold text-right w-24">
                  Content<br/>(flex-1)
                </div>
                <div className="flex-1 bg-white rounded border border-slate-dark/10 shadow-sm flex flex-col p-3">
                  <div className="h-3 bg-slate-dark/20 rounded w-1/3 mb-4"></div>
                  <div className="h-2 bg-slate-dark/10 rounded w-full mb-2"></div>
                  <div className="h-2 bg-slate-dark/10 rounded w-5/6 mb-2"></div>
                  <div className="h-2 bg-slate-dark/10 rounded w-4/6"></div>
                </div>
                <div className="flex-1 bg-white rounded border border-slate-dark/10 shadow-sm flex flex-col p-3">
                  <div className="h-3 bg-slate-dark/20 rounded w-1/3 mb-4"></div>
                  <div className="h-2 bg-slate-dark/10 rounded w-full mb-2"></div>
                  <div className="h-2 bg-slate-dark/10 rounded w-5/6 mb-2"></div>
                  <div className="h-2 bg-slate-dark/10 rounded w-4/6"></div>
                </div>
              </div>

              {/* Wireframe Footer */}
              <div className="mt-4 border-2 border-dashed border-sage/50 bg-sage/5 p-3 rounded-lg relative group transition-colors hover:bg-sage/10">
                <div className="absolute -left-28 top-1/2 -translate-y-1/2 text-sm font-mono text-sage font-bold text-right w-24">
                  Footer<br/>(mt-auto)
                </div>
                <div className="flex items-center gap-4">
                   <div className="h-6 w-20 bg-sage/30 rounded-full"></div>
                   <div className="h-3 bg-slate-dark/20 rounded flex-1"></div>
                </div>
              </div>

            </div>
          </div>

          {/* Right: Specs */}
          <div className="w-[45%] flex flex-col justify-center">
            <div className="bg-manilla/30 border border-slate-dark/5 rounded-2xl p-8 shadow-sm">
              <h3 className="font-sans font-bold text-2xl mb-6 text-slate-dark border-b border-slate-dark/10 pb-4">
                Typography & Positioning
              </h3>
              
              <div className="space-y-6">
                {/* Header Spec */}
                <div>
                  <h4 className="font-bold text-terracotta mb-1 text-lg flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-terracotta inline-block"></span>
                    1. 页面标题 (Header)
                  </h4>
                  <p className="text-sm opacity-80 mb-2">固定于页面顶部，保持统一的左边距与下边距。</p>
                  <ul className="font-mono text-base bg-white/60 p-4 rounded border border-slate-dark/10 space-y-2">
                    <li><span className="opacity-50 inline-block w-20">主标题:</span> <span className="text-slate-dark font-semibold">text-5xl font-bold mb-4</span></li>
                    <li><span className="opacity-50 inline-block w-20">副标题:</span> <span className="text-slate-dark font-semibold">text-2xl font-serif italic</span></li>
                    <li><span className="opacity-50 inline-block w-20">装饰线:</span> <span className="text-slate-dark font-semibold">border-l-4 border-terracotta pl-6</span></li>
                  </ul>
                </div>

                {/* Content Spec */}
                <div>
                  <h4 className="font-bold text-focus-blue mb-1 text-lg flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-focus-blue inline-block"></span>
                    2. 内容区块 (Content)
                  </h4>
                  <p className="text-sm opacity-80 mb-2">占据页面核心区域，采用 Flex 撑满剩余空间。</p>
                  <ul className="font-mono text-base bg-white/60 p-4 rounded border border-slate-dark/10 space-y-2">
                    <li><span className="opacity-50 inline-block w-20">外层容器:</span> <span className="text-slate-dark font-semibold">flex-1 flex gap-8 relative</span></li>
                    <li><span className="opacity-50 inline-block w-20">正文文本:</span> <span className="text-slate-dark font-semibold">text-lg</span> 至 <span className="text-slate-dark font-semibold">text-2xl</span></li>
                    <li><span className="opacity-50 inline-block w-20">行高:</span> <span className="text-slate-dark font-semibold">leading-relaxed</span></li>
                  </ul>
                </div>

                {/* Footer Spec */}
                <div>
                  <h4 className="font-bold text-sage mb-1 text-lg flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-sage inline-block"></span>
                    3. 核心观点 (Footer)
                  </h4>
                  <p className="text-sm opacity-80 mb-2">固定于页面底部，作为每页的总结锚点。</p>
                  <ul className="font-mono text-base bg-white/60 p-4 rounded border border-slate-dark/10 space-y-2">
                    <li><span className="opacity-50 inline-block w-20">外层容器:</span> <span className="text-slate-dark font-semibold">mt-auto pt-4 border-t</span></li>
                    <li><span className="opacity-50 inline-block w-20">标签:</span> <span className="text-slate-dark font-semibold">bg-sage/20 text-sage rounded-full</span></li>
                    <li><span className="opacity-50 inline-block w-20">金句:</span> <span className="text-slate-dark font-semibold">text-2xl font-medium opacity-90</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </SlideWrapper>
  );
}
