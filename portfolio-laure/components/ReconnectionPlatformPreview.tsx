import React from 'react';
import { Heart, Moon, Sparkles, MessageCircle } from 'lucide-react';

const ReconnectionPlatformPreview: React.FC = () => {
  return (
    <div className="w-full h-full bg-[#FAF9F6] flex items-center justify-center relative overflow-hidden group select-none font-sans">
      {/* Soft Animated Gradients in Background */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-200/40 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-100/40 rounded-full blur-3xl animate-pulse delay-700"></div>

      {/* Phone Mockup */}
      <div className="relative z-10 w-[70%] h-[85%] bg-white rounded-[2.5rem] shadow-2xl border-[6px] border-zinc-900 overflow-hidden flex flex-col transition-transform duration-700 group-hover:scale-105 group-hover:rotate-1">
        
        {/* App Header */}
        <div className="pt-10 px-6 pb-4 flex justify-between items-center">
            <div className="space-y-1">
                <div className="h-1.5 w-16 bg-zinc-100 rounded-full"></div>
                <h4 className="text-sm font-semibold text-zinc-800">Hi Laure,</h4>
            </div>
            <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center">
                <Sparkles size={14} className="text-orange-500" />
            </div>
        </div>

        {/* Hero Card: Breathing Circle */}
        <div className="px-6 flex-grow flex flex-col justify-center">
            <div className="relative w-full aspect-square flex items-center justify-center">
                {/* Breathing Rings */}
                <div className="absolute inset-0 rounded-full bg-indigo-50 animate-ping opacity-20"></div>
                <div className="absolute inset-4 rounded-full bg-indigo-100/50 animate-pulse"></div>
                
                <div className="relative z-20 w-32 h-32 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex flex-col items-center justify-center shadow-xl shadow-indigo-200">
                    <span className="text-white text-[10px] uppercase font-bold tracking-widest mb-1">Focus</span>
                    <Heart size={20} className="text-white fill-white/20" />
                </div>
            </div>
            
            <div className="mt-8 text-center space-y-2">
                <p className="text-xs font-medium text-zinc-400">How are you feeling now?</p>
                <div className="flex justify-center gap-2">
                    {[1, 2, 3, 4, 5].map(i => (
                        <div key={i} className={`w-2 h-2 rounded-full ${i === 3 ? 'bg-indigo-500' : 'bg-zinc-100'}`}></div>
                    ))}
                </div>
            </div>
        </div>

        {/* Bottom Navigation */}
        <div className="p-6 bg-white border-t border-zinc-50 flex justify-between items-center">
            <div className="p-2 bg-indigo-50 text-indigo-600 rounded-xl">
                <Moon size={18} />
            </div>
            <div className="p-2 text-zinc-300">
                <MessageCircle size={18} />
            </div>
            <div className="p-2 text-zinc-300">
                <Sparkles size={18} />
            </div>
        </div>
      </div>

      {/* Floating UI Elements */}
      <div className="absolute top-[20%] left-[5%] p-3 bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-white/50 transform -rotate-12 transition-all duration-500 group-hover:-translate-y-2 group-hover:rotate-0">
          <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400"></div>
              <div className="h-1 w-12 bg-zinc-200 rounded-full"></div>
          </div>
      </div>
    </div>
  );
};

export default ReconnectionPlatformPreview;