import React from 'react';
import SlideWrapper from '../SlideWrapper';

export default function FinalSlide() {
  return (
    <SlideWrapper>
      <div className="w-full h-full flex relative z-0 bg-paper text-dark overflow-hidden items-center justify-center">
        {/* Background Grid */}
        <div className="absolute inset-0 z-0 opacity-40 pointer-events-none" style={{ backgroundImage: 'linear-gradient(to right, #E0E0DB 1px, transparent 1px), linear-gradient(to bottom, #E0E0DB 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        <div className="w-full max-w-5xl relative z-10 flex flex-col items-center mt-[-10px]">

          <h2 className="font-display text-6xl tracking-tight text-dark mb-6 text-center leading-tight">
            OpenClaw 提供了不错的基座，<br/><span className="text-prussian">有诉求不妨自己写写看。</span>
          </h2>

          <div className="flex flex-col items-center mb-12">
            <p className="text-[24px] text-dark/80 text-center max-w-3xl leading-relaxed mb-4">
              但如果你缺个低幻觉、干重活的主力模型，可以试试我们刚发的 <strong className="font-mono text-dark bg-dark/5 px-2 py-1 rounded-none border border-dark/10">Ring-2.6-1T</strong>。
              主打 Token 效率与极低幻觉，<span className="ml-4 bg-prussian text-white px-3 py-1 font-sans font-medium text-[22px] tracking-wide inline-block">最近在 OpenRouter 免费使用。</span>
            </p>
            <p className="text-[24px] text-dark/50 font-mono tracking-tight">
              也可以在 <span className="text-dark font-medium underline underline-offset-4 decoration-prussian/30">ant-ling.com</span> 了解信息和我们的社群。（也可以等会问我们）
            </p>
          </div>

          {/* New Concluding Text */}
          <div className="w-full mt-16 pt-8 border-t border-dark/10 text-center">
            <p className="text-[24px] text-dark/60 font-mono tracking-tight leading-relaxed">
            </p>
          </div>

        </div>
      </div>
    </SlideWrapper>
  );
}
