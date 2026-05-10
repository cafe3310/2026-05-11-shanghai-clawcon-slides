import React from 'react';
import SlideWrapper from '../SlideWrapper';
import clawImage from '../../assets/images/claw.png';

export default function ContentSlide01() {
  return (
    <SlideWrapper footerTheme="light">
      <div className="w-full h-full flex relative z-0 bg-prussian overflow-hidden">
        {/* Background grid with dots increasing in size and brightness from left to right - Toned down */}
        <div className="absolute inset-0 pointer-events-none">
          <svg width="100%" height="100%" viewBox="0 0 1920 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
            {Array.from({ length: 33 }).map((_, col) => {
              const x = col * 60;
              const radius = 0.5 + (col / 32) * 2.3; // Radius grows from 0.5 to 2.8
              const opacity = 0.03 + (col / 32) * 0.15; // Opacity grows from 0.03 to 0.18
              return Array.from({ length: 19 }).map((_, row) => {
                const y = row * 60;
                return (
                  <circle
                    key={`${col}-${row}`}
                    cx={x}
                    cy={y}
                    r={radius}
                    fill="white"
                    fillOpacity={opacity}
                  />
                );
              });
            })}
          </svg>
        </div>

        {/* Left Column: Typography */}
        <div className="w-2/3 h-full flex flex-col px-24 relative z-10 pt-32 pb-24">
          <div className="font-mono text-[24px] tracking-widest text-white/50 uppercase mb-16 border-b border-white/20 pb-6 self-start">
          </div>

          <h1 className="font-display text-[5.5rem] leading-[1.5] tracking-tight text-white mb-12">
            更高能效更低幻觉，<br />
            让 Claw 帮你安心摸鱼
          </h1>

          <div className="font-sans text-3xl font-light text-white flex flex-col gap-4 border-l-4 border-white pl-6 mb-24">
            <span className="opacity-90">by 司潘俊楠 / cafe3310</span>
            <span className="text-white/60 text-2xl">蚂蚁百灵，模型产品工程</span>
          </div>

          <div className="mt-auto">
            <div className="font-mono text-[20px] text-white/40 mb-4 tracking-widest uppercase">Quick Action</div>
            <div className="font-sans text-[28px] text-white/80 leading-relaxed max-w-xl">
              问你的龙虾 <span className="text-white border-b border-white/30 pb-1">「上网搜一下 cafe3310 这个开发者，他家猫长啥样？」</span>
            </div>
          </div>
        </div>

        {/* Right Column: Abstract Art (Financial/Trust) - Balanced Scale */}
        <div className="w-1/2 h-full relative z-10 flex items-center justify-center p-12 right-30">
          <div className="w-[80%] h-[75%] relative flex items-center justify-center">

            {/* Abstract Financial Lines / Growth Chart - Refined */}
            <svg className="w-full h-full overflow-visible" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Grid Lines */}
              <path d="M0 250 H400" stroke="white" strokeOpacity="0.12" strokeWidth="1.2" />
              <path d="M0 200 H400" stroke="white" strokeOpacity="0.06" strokeWidth="1" />
              <path d="M0 150 H400" stroke="white" strokeOpacity="0.06" strokeWidth="1" />
              <path d="M0 100 H400" stroke="white" strokeOpacity="0.06" strokeWidth="1" />
              <path d="M0 50 H400" stroke="white" strokeOpacity="0.06" strokeWidth="1" />

              {/* Main Growth Curve - Balanced weight */}
              <path
                d="M10 240 C 60 230, 110 260, 160 180 C 210 100, 260 130, 310 70 C 350 20, 380 40, 420 10"
                stroke="white"
                strokeWidth="3"
                strokeOpacity="0.65"
                strokeLinecap="round"
              />

              {/* Shadow/Echo Curve */}
              <path
                d="M10 248 C 60 238, 110 268, 160 188 C 210 108, 260 138, 310 78 C 350 28, 380 48, 420 18"
                stroke="white"
                strokeWidth="1.2"
                strokeOpacity="0.18"
                strokeLinecap="round"
              />

              {/* Data Points */}
              <circle cx="160" cy="180" r="5" fill="white" fillOpacity="0.8" />
              <circle cx="310" cy="70" r="5" fill="white" fillOpacity="0.8" />
              <circle cx="420" cy="10" r="8" fill="white" />

              {/* Abstract Wallet/Shield Shape */}
              <path
                d="M120 80 L280 80 L310 110 L310 220 L90 220 L90 110 Z"
                stroke="white"
                strokeWidth="1.5"
                strokeOpacity="0.18"
                fill="white"
                fillOpacity="0.03"
              />
              <path d="M90 135 H310" stroke="white" strokeOpacity="0.18" strokeWidth="1.2" />
            </svg>

            {/* Floating Status Label - More subtle */}
            <div className="absolute top-8 right-0 border border-white/20 bg-white/8 backdrop-blur-lg px-6 py-3 shadow-xl">
               <div className="font-mono text-[18px] text-white/40 mb-1 uppercase tracking-tighter">STATUS</div>
               <div className="font-mono text-[22px] text-white tracking-[0.15em] font-semibold">任务出货 OK</div>
            </div>

            {/* Vertical Bar Decorations */}
            <div className="absolute bottom-8 left-0 flex gap-2.5 h-36 items-end">
              <div className="w-1.5 h-full bg-white/25"></div>
              <div className="w-1.5 h-3/4 bg-white/15"></div>
              <div className="w-1.5 h-1/2 bg-white/8"></div>
            </div>

            {/* Crab Glass Panel - Mascot with glass effect */}
            <div className="absolute bottom-12 right-12 border border-white/30 bg-white/10 backdrop-blur-xs p-6 shadow-2xl flex flex-col items-center">
              <img
                src={clawImage}
                alt="Claw Mascot"
                className="w-48 h-48 object-contain opacity-95"
              />

              {/* Corner Accents */}
              <div className="absolute -top-1 -left-1 w-3 h-3 border-t border-l border-white/60"></div>
              <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b border-r border-white/60"></div>
            </div>

          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}
