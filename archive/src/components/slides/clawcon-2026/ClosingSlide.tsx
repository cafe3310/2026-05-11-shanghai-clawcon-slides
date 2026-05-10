import React, { useState, useContext } from 'react';
import SlideWrapper from '../../SlideWrapper';
import { SlideContext } from '../../../App';
import { Download, CheckCircle2, Loader2 } from 'lucide-react';

export default function ClosingSlide() {
  const { totalSlides, goToIndex } = useContext(SlideContext);
  const [isExporting, setIsExporting] = useState(false);
  const [status, setStatus] = useState('');
  const [progress, setProgress] = useState(0);

  const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

  const exportAllSlides = async () => {
    // Robust check for the library in global scope
    const h2i = (window as any).htmlToImage;
    
    if (!h2i) {
      alert('导出库尚未加载（htmlToImage 未定义）。请确保网络通畅并刷新页面。');
      return;
    }

    setIsExporting(true);
    setStatus('开始全套导出...');

    try {
      // Loop through all slides
      for (let i = 0; i < totalSlides; i++) {
        setProgress(i + 1);
        setStatus(`正在导出第 ${i + 1} / ${totalSlides} 页...`);
        
        // 1. Navigate
        goToIndex(i);
        
        // 2. Wait for rendering
        await delay(1000); 

        // 3. Find element
        const slideElements = document.querySelectorAll('.slide-content-container');
        if (slideElements.length === 0) continue;
        
        const currentSlide = slideElements[0] as HTMLElement;

        // 4. Capture with precise constraints to avoid borders/scaling artifacts
        const dataUrl = await h2i.toPng(currentSlide, {
          width: 1920,
          height: 1080,
          style: {
            transform: 'none',
            transformOrigin: 'top left',
            margin: '0',
            padding: '0',
            boxShadow: 'none',
            borderRadius: '0',
          },
          quality: 1,
          pixelRatio: 2, 
          backgroundColor: '#FDFCF8' 
        });

        // 5. Download
        const link = document.createElement('a');
        link.download = `present-${String(i + 1).padStart(2, '0')}.png`;
        link.href = dataUrl;
        link.click();
        
        await delay(500);
      }

      setStatus('全套导出完成！');
      goToIndex(totalSlides - 1);
      setTimeout(() => setStatus(''), 3000);
    } catch (error) {
      console.error('Export failed:', error);
      setStatus('导出失败');
    } finally {
      setIsExporting(false);
      setProgress(0);
    }
  };

  return (
    <SlideWrapper backgroundColor="bg-ivory-light">
      <div className="w-full h-full flex flex-col p-16 text-slate-dark relative overflow-hidden">
        
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: 'linear-gradient(#2D2B2A 1px, transparent 1px), linear-gradient(90deg, #2D2B2A 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center z-10 text-center">
          <div className="mb-12">
            <h1 className="font-sans font-bold text-8xl tracking-tight text-slate-dark mb-6">
              感谢聆听
            </h1>
            <p className="text-4xl opacity-60 font-serif">
              祝大家在 AI 时代都能找准自己的位子，从容“摸鱼”。
            </p>
          </div>

          <div className="flex flex-col items-center gap-6 mt-8">
            <button 
              onClick={exportAllSlides}
              disabled={isExporting}
              className={`
                flex items-center gap-4 px-12 py-6 rounded-2xl font-bold text-3xl shadow-xl transition-all
                ${isExporting 
                  ? 'bg-slate-200 text-slate-400 cursor-not-allowed' 
                  : 'bg-terracotta text-white hover:bg-terracotta/90 hover:scale-105 active:scale-95'}
              `}
            >
              {isExporting ? <Loader2 className="animate-spin" size={32} /> : <Download size={32} />}
              {isExporting ? `正在导出 (${progress}/${totalSlides})` : '导出全套 PNG'}
            </button>
            
            {status && (
              <div className="flex items-center gap-3 text-sage font-bold text-2xl">
                <CheckCircle2 size={28} />
                {status}
              </div>
            )}
            
            <p className="text-xl opacity-40 mt-4 max-w-2xl leading-relaxed">
              * 导出过程中会自动翻页。请在下载提示出现时点击“允许”。
            </p>
          </div>
        </div>

        <div className="mt-auto pt-8 border-t border-slate-dark/10 z-10 flex items-center justify-center">
          <div className="bg-terracotta/10 text-terracotta font-serif text-2xl px-6 py-2 rounded-full mr-6 whitespace-nowrap">
            by 四盘
          </div>
          <p className="font-sans font-medium text-2xl opacity-90">
            基础智能技术部 | Model as Product
          </p>
        </div>

      </div>
    </SlideWrapper>
  );
}
