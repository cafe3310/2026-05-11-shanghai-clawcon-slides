import React from 'react';
import SlideWrapper from '../../SlideWrapper';

export default function TitleSlide() {
  return (
    <SlideWrapper backgroundColor="bg-ivory-light">
      <div className="w-full h-full flex p-16 text-slate-dark relative">
        
        {/* Background Isometric Grid (Subtle) */}
        <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-5 pointer-events-none overflow-hidden">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="iso-grid" width="60" height="103.92" patternUnits="userSpaceOnUse">
                <path d="M30 0 L60 17.32 L60 51.96 L30 69.28 L0 51.96 L0 17.32 Z" fill="none" stroke="currentColor" strokeWidth="1"/>
                <path d="M30 0 L30 34.64 L60 51.96" fill="none" stroke="currentColor" strokeWidth="1"/>
                <path d="M30 34.64 L0 51.96" fill="none" stroke="currentColor" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#iso-grid)" />
          </svg>
        </div>

        {/* Left Column - Text Content */}
        <div className="w-[55%] flex flex-col justify-center z-10 pl-8">
          <h1 className="font-sans font-bold text-[85px] leading-[1.15] tracking-tight mb-20 text-slate-dark">
            一些闲聊，从 LLM Client<br />
            到 Agent  的务实使用指南
          </h1>
          
          <div className="border border-slate-dark/20 rounded-2xl w-[750px] text-[24px] bg-white/50 backdrop-blur-sm overflow-hidden shadow-sm p-8 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="text-slate-dark/60">by  </span>
              <span className="font-bold">四盘(司潘俊楠)</span>
              <span className="text-slate-dark/40 mx-1">|</span>
              <span>基础智能技术部 - Model as Product</span>
            </div>
            
            <div className="flex items-center gap-3">
              <span className="text-slate-dark/60">id</span>
              <span className="font-mono">cafe3310</span>
              <span className="text-[20px] opacity-60 font-mono">(CAFEBABE + Nokia3310 的梗)</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-slate-dark/60">特长,</span>
              <span>三花猫饲养</span>
            </div>
          </div>
        </div>

        {/* Right Column - Illustration */}
        <div className="w-[45%] flex items-center justify-center relative z-10">
          <svg width="700" height="700" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" className="opacity-80">
            <g stroke="#2D2B2A" strokeWidth="1.5" fill="none" strokeLinejoin="round" strokeLinecap="round">
              
              {/* Center Frame */}
              <path d="M200 150 L280 190 L200 230 L120 190 Z" fill="#FDFCF8" />
              <path d="M120 190 L200 230 L200 310 L120 270 Z" fill="#FDFCF8" />
              <path d="M280 190 L200 230 L200 310 L280 270 Z" fill="#FDFCF8" />
              
              {/* Inner Frame Lines */}
              <path d="M130 195 L195 227.5 L195 300" />
              <path d="M270 195 L205 227.5 L205 300" />
              <path d="M135 190 L200 222.5 L265 190" />
              
              {/* Sage Layer (Replaced Blue) */}
              <path d="M200 190 L260 220 L200 250 L140 220 Z" fill="#8F9E8B" stroke="#8F9E8B" />
              <path d="M140 220 L200 250 L200 260 L140 230 Z" fill="#7A8A76" stroke="#7A8A76" />
              <path d="M260 220 L200 250 L200 260 L260 230 Z" fill="#657561" stroke="#657561" />
              
              {/* Top Exploded Part */}
              <path d="M200 60 L280 100 L200 140 L120 100 Z" fill="#FDFCF8" />
              <path d="M200 70 L270 105 L200 140 L130 105 Z" strokeDasharray="4,4" />
              <line x1="200" y1="140" x2="200" y2="150" strokeDasharray="4,4" />
              <line x1="120" y1="100" x2="120" y2="190" strokeDasharray="4,4" />
              <line x1="280" y1="100" x2="280" y2="190" strokeDasharray="4,4" />
              
              {/* Bottom Exploded Part */}
              <path d="M200 330 L280 290 L200 250 L120 290 Z" fill="#FDFCF8" />
              <path d="M120 290 L200 330 L200 350 L120 310 Z" fill="#FDFCF8" />
              <path d="M280 290 L200 330 L200 350 L280 310 Z" fill="#FDFCF8" />
              <line x1="200" y1="310" x2="200" y2="330" strokeDasharray="4,4" />
              
              {/* Left Exploded Part */}
              <path d="M40 190 L100 220 L100 300 L40 270 Z" fill="#FDFCF8" />
              <path d="M40 190 L100 220 L40 250 L-20 220 Z" fill="#FDFCF8" />
              <line x1="40" y1="190" x2="100" y2="270" />
              <line x1="100" y1="220" x2="40" y2="300" />
              <line x1="100" y1="220" x2="120" y2="190" strokeDasharray="4,4" />
              <line x1="100" y1="300" x2="120" y2="270" strokeDasharray="4,4" />
              
              {/* Right Exploded Part */}
              <path d="M360 190 L300 220 L300 300 L360 270 Z" fill="#FDFCF8" />
              <path d="M360 190 L300 220 L360 250 L420 220 Z" fill="#FDFCF8" />
              <line x1="300" y1="220" x2="360" y2="300" />
              <line x1="360" y1="190" x2="300" y2="270" />
              <line x1="300" y1="220" x2="280" y2="190" strokeDasharray="4,4" />
              <line x1="300" y1="300" x2="280" y2="270" strokeDasharray="4,4" />

            </g>
          </svg>
        </div>

      </div>
    </SlideWrapper>
  );
}
