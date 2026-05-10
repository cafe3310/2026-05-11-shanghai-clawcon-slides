import React from 'react';
import SlideWrapper from '../SlideWrapper';
import { Play } from 'lucide-react';

export default function ContentSlide04() {
  return (
    <SlideWrapper>
      <div className="w-full h-full pt-20 px-24 pb-16 flex relative z-0">
        
        {/* Left Column: Video Comparisons */}
        <div className="w-1/2 h-full flex flex-col justify-center pr-16 gap-8 relative z-10">
          
          {/* Top Video: External Harness */}
          <div className="flex flex-col gap-3">
            <div className="w-full aspect-[16/9] bg-[#2A2A2A] rounded-xl overflow-hidden relative shadow-lg group cursor-pointer border border-dark/5">
              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 text-white fill-current ml-1" />
                </div>
              </div>
              {/* Progress Bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-dark/20">
                <div className="h-full bg-prussian w-[65%]"></div>
              </div>
            </div>
            <div className="font-mono text-[24px] tracking-widest text-dark/60 uppercase pl-2">
              <span className="text-prussian font-bold">[ PASS ]</span> External Architecture Harness
            </div>
          </div>

          {/* Bottom Video: Prompt Harness */}
          <div className="flex flex-col gap-3">
            <div className="w-full aspect-[16/9] bg-[#2A2A2A] rounded-xl overflow-hidden relative shadow-lg group cursor-pointer border border-dark/5">
              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 text-white fill-current ml-1" />
                </div>
              </div>
              {/* Progress Bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-dark/20">
                <div className="h-full bg-[#AA4444] w-[45%]"></div>
              </div>
            </div>
            <div className="font-mono text-[24px] tracking-widest text-dark/60 uppercase pl-2">
              <span className="text-[#AA4444] font-bold">[ FAIL ]</span> Prompt Harness Bypass
            </div>
          </div>

        </div>

        {/* Right Column: Typography constraints */}
        <div className="w-1/2 h-full flex flex-col justify-center pl-8">
          
          <div className="mb-12">
            <div className="font-mono text-[24px] tracking-widest text-prussian uppercase mb-4 font-semibold">
              01 / SAFE
            </div>
            <h2 className="font-display text-[4rem] leading-[1.1] tracking-tight text-dark mb-8">
              提示词防线 <br/>
              <span className="text-dark/50">=没防线</span>
            </h2>
          </div>

          <div className="flex flex-col gap-6">
            <p className="font-sans text-2xl font-light text-dark/80 leading-relaxed border-l-2 border-prussian/20 pl-6">
              任何基于 Prompt 的所谓 Harness 都并非完全靠谱。
            </p>
            
            <p className="font-sans text-[24px] font-light text-dark/70 leading-relaxed pl-6">
              基于提示词的防御（如<span className="font-mono bg-dark/5 px-2 py-0.5 rounded text-dark/80 mx-1">不要写 X</span>）极易被文件链接等机制绕过。在涉及资金或核心业务的任务面前，这种防御形同虚设。
            </p>

            <div className="mt-8 bg-prussian/5 border border-prussian/10 p-8 rounded-xl relative overflow-hidden">
               {/* Accent line */}
               <div className="absolute top-0 bottom-0 left-0 w-1.5 bg-prussian"></div>
               <p className="font-sans text-[1.75rem] font-medium text-prussian leading-snug">
                 Security 逻辑必须硬编码在模型之外（代码层 / 网关层隔离）。
               </p>
            </div>
          </div>

        </div>

      </div>
    </SlideWrapper>
  );
}
