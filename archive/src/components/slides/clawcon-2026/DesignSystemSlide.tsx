import React from 'react';
import SlideWrapper from '../../SlideWrapper';

export default function DesignSystemSlide() {
  return (
    <SlideWrapper backgroundColor="bg-ivory-light">
      <div className="w-full h-full flex flex-col p-16 text-slate-dark">
        <div className="mb-12 border-b border-slate-dark/20 pb-6">
          <h1 className="font-sans font-bold text-6xl tracking-tight">Design System & Components</h1>
          <p className="text-2xl mt-4 opacity-80 font-serif italic">Natural Tones Palette & Humanist UI Elements</p>
        </div>

        <div className="flex-1 flex gap-12">
          {/* Left Column: Colors & Typography */}
          <div className="w-1/2 flex flex-col gap-12">
            {/* Colors */}
            <section>
              <h2 className="font-mono text-2xl font-bold mb-6 uppercase tracking-widest opacity-60">Color Palette</h2>
              <div className="grid grid-cols-3 gap-6">
                <div className="flex flex-col">
                  <div className="h-16 bg-ivory-light border border-slate-dark/10 rounded-2xl mb-3 shadow-sm"></div>
                  <span className="font-sans text-xl font-bold">Ivory Light</span>
                  <span className="font-mono text-lg opacity-60">#FDFCF8</span>
                </div>
                <div className="flex flex-col">
                  <div className="h-16 bg-manilla border border-slate-dark/10 rounded-2xl mb-3 shadow-sm"></div>
                  <span className="font-sans text-xl font-bold">Manilla</span>
                  <span className="font-mono text-lg opacity-60">#F4F1EB</span>
                </div>
                <div className="flex flex-col">
                  <div className="h-16 bg-terracotta border border-slate-dark/10 rounded-2xl mb-3 shadow-sm"></div>
                  <span className="font-sans text-xl font-bold">Terracotta</span>
                  <span className="font-mono text-lg opacity-60">#D47A6A</span>
                </div>
                <div className="flex flex-col">
                  <div className="h-16 bg-slate-dark border border-slate-dark/10 rounded-2xl mb-3 shadow-sm"></div>
                  <span className="font-sans text-xl font-bold">Slate Dark</span>
                  <span className="font-mono text-lg opacity-60">#2D2B2A</span>
                </div>
                <div className="flex flex-col">
                  <div className="h-16 bg-sage border border-slate-dark/10 rounded-2xl mb-3 shadow-sm"></div>
                  <span className="font-sans text-xl font-bold">Sage</span>
                  <span className="font-mono text-lg opacity-60">#8F9E8B</span>
                </div>
                <div className="flex flex-col">
                  <div className="h-16 bg-ochre border border-slate-dark/10 rounded-2xl mb-3 shadow-sm"></div>
                  <span className="font-sans text-xl font-bold">Ochre</span>
                  <span className="font-mono text-lg opacity-60">#D4A373</span>
                </div>
              </div>
            </section>

            {/* Typography */}
            <section>
              <h2 className="font-mono text-2xl font-bold mb-6 uppercase tracking-widest opacity-60">Typography</h2>
              <div className="space-y-8">
                <div>
                  <p className="font-sans font-bold text-4xl">Inter (Sans-serif)</p>
                  <p className="font-sans text-2xl opacity-80 mt-2">Used for primary headings, body text, and UI elements. Clean, modern, highly legible.</p>
                </div>
                <div>
                  <p className="font-serif italic text-4xl">Lora (Serif)</p>
                  <p className="font-serif text-2xl opacity-80 mt-2">Used for accents, secondary titles, and adding a humanist, editorial touch.</p>
                </div>
                <div>
                  <p className="font-mono text-3xl">JetBrains Mono (Mono)</p>
                  <p className="font-mono text-2xl opacity-80 mt-2">Used for code, labels, and technical details.</p>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column: Components */}
          <div className="w-1/2 flex flex-col gap-12">
            <section>
              <h2 className="font-mono text-2xl font-bold mb-6 uppercase tracking-widest opacity-60">Core Components</h2>
              
              <div className="space-y-10">
                {/* Highlight Banner */}
                <div>
                  <p className="font-mono text-xl mb-3 opacity-60 uppercase">Highlight Banner</p>
                  <div className="border-l-4 border-terracotta pl-6 py-2">
                    <p className="text-3xl font-serif italic opacity-80">
                      Important takeaway or disclaimer message goes here. It uses a left border and serif italic text.
                    </p>
                  </div>
                </div>

                {/* Editorial Card */}
                <div>
                  <p className="font-mono text-xl mb-3 opacity-60 uppercase">Editorial Card</p>
                  <div className="bg-white/60 border border-slate-dark/10 rounded-2xl p-8 shadow-sm">
                    <h3 className="font-sans font-bold text-3xl mb-3">Card Title</h3>
                    <p className="text-2xl opacity-80 leading-relaxed">
                      This card style uses a soft background fill, a very thin border, and subtle rounded corners to create depth without relying on harsh shadows, fitting the humanist aesthetic.
                    </p>
                  </div>
                </div>

                {/* Numbered Item */}
                <div>
                  <p className="font-mono text-xl mb-3 opacity-60 uppercase">Numbered List Item</p>
                  <div className="flex items-center gap-6">
                    <div className="text-terracotta font-serif italic text-6xl">01</div>
                    <p className="font-sans text-3xl font-bold">Key Principle or Rule</p>
                  </div>
                </div>
                
                {/* Subtle Badge */}
                <div>
                  <p className="font-mono text-xl mb-3 opacity-60 uppercase">Subtle Badge</p>
                  <div className="bg-terracotta/10 text-terracotta font-serif italic text-2xl px-5 py-2 rounded-full inline-block">
                    Final Anchor Text
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}
