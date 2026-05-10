import React from 'react';
import SlideWrapper from '../../SlideWrapper';
import { MessageSquare, Files, Wrench, Workflow, Database, Globe } from 'lucide-react';

const AsteriskIcon: React.FC<{ width?: number | string, height?: number | string, className?: string }> = ({ width = 48, height = 48, className = "" }) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07L19.07 4.93" />
  </svg>
);

const ArchNode: React.FC<{ title: string, subtitle?: string, icon: React.ReactNode, className?: string, style?: React.CSSProperties }> = ({ title, subtitle, icon, className, style }) => (
  <div 
    className={`absolute flex flex-col border-2 rounded-xl bg-ivory-light overflow-hidden shadow-sm w-52 h-32 ${className}`}
    style={{ ...style, transform: 'translate(-50%, -50%)' }}
  >
    <div className="bg-slate-dark/5 border-b-2 border-slate-dark/15 py-2 px-2 text-center flex flex-col justify-center h-14">
      <span className="font-bold text-xl leading-tight text-slate-dark">{title}</span>
    </div>
    <div className="flex-1 flex flex-col items-center justify-center text-slate-dark/70 p-2">
      {icon}
      {subtitle && <span className="text-base leading-tight opacity-80 text-slate-dark mt-1.5 text-center font-medium">{subtitle}</span>}
    </div>
  </div>
);

export default function Page04Slide() {
  // Center coordinates - Shifted up
  const cx = 350;
  const cy = 300;

  // Node definitions
  const nodes = [
    { id: 'model', title: '模型 (Model)', subtitle: '唯一核心驱动', icon: <AsteriskIcon width="28" height="28" />, x: cx, y: cy, className: 'border-terracotta text-terracotta bg-white z-20 shadow-md' },
    
    // Inner Layer (R=160)
    { id: 'prompt', title: 'Prompt', subtitle: '指令 / 目标 / 约束', icon: <MessageSquare size={24} strokeWidth={1.5} />, x: cx, y: cy - 160, className: 'border-slate-dark/15 z-10' },
    { id: 'context', title: '上下文管理', subtitle: '历史 / 背景 / 角色', icon: <Files size={24} strokeWidth={1.5} />, x: cx + 138, y: cy + 80, className: 'border-slate-dark/15 z-10' },
    { id: 'memory', title: '状态 / 记忆', subtitle: '任务状态 / 长期信息', icon: <Database size={24} strokeWidth={1.5} />, x: cx - 138, y: cy + 80, className: 'border-slate-dark/15 z-10' },
    
    // Outer Layer (R=280)
    { id: 'tools', title: '工具调用', subtitle: '查询 / 发消息 / API', icon: <Wrench size={24} strokeWidth={1.5} />, x: cx + 242, y: cy - 140, className: 'border-slate-dark/15 z-10' },
    { id: 'environment', title: '环境对接', subtitle: 'IM / 文件 / 浏览器', icon: <Globe size={24} strokeWidth={1.5} />, x: cx - 242, y: cy - 140, className: 'border-slate-dark/15 z-10' },
    { id: 'orchestration', title: '工作流编排', subtitle: '多步执行 / 条件分支', icon: <Workflow size={24} strokeWidth={1.5} />, x: cx, y: cy + 280, className: 'border-slate-dark/15 z-10' },
  ];

  const listItems = [
    { id: 1, title: '模型 (Model)', desc: '唯一真正不可替代的驱动', color: 'text-terracotta', bg: 'bg-terracotta/10 border-terracotta/20' },
    { id: 2, title: 'Prompt', desc: '指令 / 目标 / 约束', color: 'text-slate-dark', bg: 'bg-slate-dark/5 border-slate-dark/10' },
    { id: 3, title: '上下文管理', desc: '历史 / 背景 / 资料 / 角色', color: 'text-slate-dark', bg: 'bg-slate-dark/5 border-slate-dark/10' },
    { id: 4, title: '工具调用', desc: '查询 / 发消息 / 调 API / 操作系统', color: 'text-slate-dark', bg: 'bg-slate-dark/5 border-slate-dark/10' },
    { id: 5, title: '工作流编排', desc: '多步骤执行 / 条件分支', color: 'text-slate-dark', bg: 'bg-slate-dark/5 border-slate-dark/10' },
    { id: 6, title: '状态 / 记忆', desc: '任务状态 / 长期信息', color: 'text-slate-dark', bg: 'bg-slate-dark/5 border-slate-dark/10' },
    { id: 7, title: '环境对接', desc: 'IM / 文件系统 / 浏览器 / 定时任务', color: 'text-slate-dark', bg: 'bg-slate-dark/5 border-slate-dark/10' },
  ];

  return (
    <SlideWrapper backgroundColor="bg-ivory-light">
      <div className="w-full h-full flex flex-col p-16 text-slate-dark relative">
        
        {/* Header */}
        <div className="mb-10 border-b border-slate-dark/20 pb-6 z-10">
          <h1 className="font-sans font-bold text-6xl tracking-tight">
            这些「主动 Agent」到底是什么？
          </h1>
          <p className="text-3xl mt-4 opacity-80 font-serif">
            反正定义混乱，不妨理解为 Agent = LLM + 提示词 + 工具 + 花里胡哨的其他东西
          </p>
        </div>

        <div className="flex-1 flex gap-12 z-10 items-center min-h-0">
          
          {/* Left: Diagram - Centered and scaled */}
          <div className="w-[50%] flex justify-center items-center relative h-full -mt-10">
            <div className="relative w-[700px] h-[700px] scale-90 origin-center">
              
              {/* SVG Background */}
              <svg className="absolute inset-0 w-full h-full text-slate-dark/20" style={{ pointerEvents: 'none' }}>
                <circle cx={cx} cy={cy} r="160" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 6" />
                <circle cx={cx} cy={cy} r="280" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 6" />
                {nodes.filter(n => n.id !== 'model').map(node => (
                  <line 
                    key={`line-${node.id}`} 
                    x1={cx} y1={cy} 
                    x2={node.x} y2={node.y} 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    className="opacity-40"
                  />
                ))}
              </svg>

              {/* Nodes */}
              {nodes.map(node => (
                <ArchNode 
                  key={node.id}
                  title={node.title} 
                  subtitle={node.subtitle} 
                  icon={node.icon} 
                  style={{ left: node.x, top: node.y }}
                  className={node.className}
                />
              ))}
            </div>
          </div>

          {/* Right: Explanation */}
          <div className="w-[50%] flex flex-col justify-center">
            <div className="space-y-4 mb-8">
              {listItems.map(item => (
                <div key={item.id} className="flex items-start gap-5">
                  <div className={`w-10 h-10 rounded-full ${item.bg} flex items-center justify-center ${item.color} shrink-0 mt-0.5`}>
                    <span className="text-xl font-bold">{item.id}</span>
                  </div>
                  <div>
                    <h4 className={`font-bold text-2xl mb-0.5 ${item.color}`}>{item.title}</h4>
                    <p className="opacity-80 text-xl leading-snug">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-slate-dark/20 z-10 flex items-center">
              <div className="bg-terracotta/10 text-terracotta font-serif text-2xl px-6 py-2 rounded-full mr-6 whitespace-nowrap">
                总而言之
              </div>
              <p className="font-sans font-medium text-2xl opacity-90 leading-tight">
                考虑 Agent 是模型 + 外壳层的系统工程。了解其结构原理，避开各种营销用名词。
              </p>
            </div>
          </div>

        </div>
      </div>
    </SlideWrapper>
  );
}
