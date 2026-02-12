import React from 'react';
import { Sliders, Play, Tv, Info } from 'lucide-react';

const AlgorithmControlPreview: React.FC = () => {
  return (
    <div className="w-full h-full bg-[#050505] flex items-center justify-center relative overflow-hidden group select-none font-sans">
      {/* Background Content Grid (Blurred) */}
      <div className="absolute inset-0 grid grid-cols-3 md:grid-cols-4 gap-2 p-2 opacity-20 blur-[2px]">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="aspect-video bg-zinc-800 rounded-sm overflow-hidden">
            <img src={`https://picsum.photos/400/225?random=${i + 20}`} alt="Content" className="w-full h-full object-cover grayscale" />
          </div>
        ))}
      </div>

      {/* Main Interface Overlay */}
      <div className="relative z-10 w-[85%] h-[75%] bg-zinc-900/40 backdrop-blur-xl border border-white/10 rounded-xl p-4 md:p-8 flex flex-col shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]">
        
        {/* Top Navigation Bar */}
        <div className="flex justify-between items-center mb-6 border-b border-white/5 pb-4">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
              <Tv size={14} className="text-white" />
            </div>
            <div className="h-2 w-24 bg-white/20 rounded-full"></div>
          </div>
          <div className="flex gap-2">
            <div className="h-1.5 w-8 bg-white/10 rounded-full"></div>
            <div className="h-1.5 w-8 bg-white/10 rounded-full"></div>
          </div>
        </div>

        {/* Feature: The "Control" Panel */}
        <div className="flex-grow flex flex-col justify-center">
          <div className="mb-4">
            <h4 className="text-[10px] uppercase tracking-widest text-zinc-400 font-bold mb-4 flex items-center gap-2">
              <Sliders size={12} /> Algorithm Control
            </h4>
            
            <div className="space-y-4 max-w-xs">
              {/* Slider 1 */}
              <div className="space-y-2">
                <div className="flex justify-between text-[8px] text-zinc-500 uppercase font-bold tracking-tighter">
                  <span>Discovery Range</span>
                  <span className="text-blue-400">Deep Cut</span>
                </div>
                <div className="h-1.5 w-full bg-white/5 rounded-full relative overflow-hidden">
                  <div className="absolute top-0 left-0 h-full w-[75%] bg-gradient-to-r from-blue-600 to-blue-400"></div>
                </div>
              </div>

              {/* Slider 2 */}
              <div className="space-y-2">
                <div className="flex justify-between text-[8px] text-zinc-500 uppercase font-bold tracking-tighter">
                  <span>Mood Bias</span>
                  <span className="text-purple-400">Dark / Intense</span>
                </div>
                <div className="h-1.5 w-full bg-white/5 rounded-full relative overflow-hidden">
                  <div className="absolute top-0 left-0 h-full w-[40%] bg-gradient-to-r from-purple-600 to-purple-400"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Prompt Bubble */}
          <div className="mt-4 p-3 bg-white/5 border border-white/5 rounded-lg flex items-start gap-3 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
            <div className="w-6 h-6 rounded-full bg-zinc-700 flex-shrink-0 flex items-center justify-center">
              <Info size={10} className="text-zinc-300" />
            </div>
            <div className="space-y-1">
              <div className="h-1.5 w-32 bg-white/30 rounded-full"></div>
              <div className="h-1.5 w-24 bg-white/10 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Bottom Action */}
        <div className="mt-6 flex justify-end">
          <div className="bg-white text-black px-4 py-2 rounded-full flex items-center gap-2 transition-transform active:scale-95">
            <Play size={10} fill="black" />
            <span className="text-[9px] font-bold uppercase tracking-widest">Update Feed</span>
          </div>
        </div>
      </div>

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-600/10 blur-[100px] pointer-events-none group-hover:bg-blue-600/20 transition-colors duration-700"></div>
    </div>
  );
};

export default AlgorithmControlPreview;