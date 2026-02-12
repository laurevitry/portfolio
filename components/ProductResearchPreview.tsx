import React from 'react';
import { Search, Lightbulb, Users, Target } from 'lucide-react';

const ProductResearchPreview: React.FC = () => {
  return (
    <div className="w-full h-full bg-[#f8f9fa] flex items-center justify-center relative overflow-hidden group select-none font-sans">
      {/* Background Pattern: Light Grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
      
      {/* Content Layout: Post-it / Cards arrangement */}
      <div className="relative w-full h-full p-6 md:p-12 flex flex-col justify-center gap-4">
        
        {/* Floating Insight Card 1 */}
        <div className="absolute top-[15%] left-[10%] w-[35%] aspect-square bg-white shadow-xl border border-gray-100 rounded-sm p-3 transform -rotate-6 transition-transform duration-500 group-hover:-rotate-2 group-hover:-translate-y-2 z-10">
            <div className="w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center mb-2">
                <Users size={8} className="text-blue-600" />
            </div>
            <div className="space-y-1">
                <div className="h-1.5 w-full bg-gray-100 rounded-full"></div>
                <div className="h-1.5 w-[80%] bg-gray-100 rounded-full"></div>
                <div className="h-1.5 w-[90%] bg-gray-100 rounded-full"></div>
            </div>
        </div>

        {/* Main "Insight" Card - Yellow Post-it vibe */}
        <div className="relative self-center w-[45%] aspect-square bg-[#fef9c3] shadow-2xl rounded-sm p-4 md:p-6 transform rotate-2 transition-all duration-700 group-hover:rotate-0 group-hover:scale-110 z-20 flex flex-col justify-between">
            <div className="flex justify-between items-start">
                <Lightbulb size={16} className="text-yellow-600 md:w-6 md:h-6" />
                <span className="text-[8px] md:text-[10px] font-bold text-yellow-700/50 uppercase tracking-tighter">Key Finding</span>
            </div>
            <div className="space-y-2 md:space-y-3">
                <div className="h-2 w-full bg-yellow-200/50 rounded-full"></div>
                <div className="h-2 w-full bg-yellow-400 rounded-full"></div>
                <div className="h-2 w-[70%] bg-yellow-200/50 rounded-full"></div>
            </div>
            <div className="flex items-center gap-1">
                 <div className="h-1.5 w-1.5 rounded-full bg-yellow-600"></div>
                 <div className="h-1 w-8 bg-yellow-600/20 rounded-full"></div>
            </div>
        </div>

        {/* Floating Insight Card 2 */}
        <div className="absolute bottom-[20%] right-[10%] w-[30%] aspect-square bg-white shadow-lg border border-gray-100 rounded-sm p-3 transform rotate-12 transition-transform duration-500 group-hover:rotate-6 group-hover:translate-x-2 z-10">
            <div className="w-4 h-4 rounded-full bg-green-100 flex items-center justify-center mb-2">
                <Target size={8} className="text-green-600" />
            </div>
            <div className="space-y-1">
                <div className="h-1.5 w-full bg-gray-50 rounded-full"></div>
                <div className="h-1.5 w-[60%] bg-gray-50 rounded-full"></div>
            </div>
        </div>

        {/* Search Bar Visual */}
        <div className="absolute top-8 right-8 flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full px-3 py-1.5 shadow-sm transform transition-all duration-500 group-hover:translate-x-2">
            <Search size={10} className="text-gray-400" />
            <div className="h-1 w-12 bg-gray-200 rounded-full"></div>
        </div>
      </div>

      {/* Background large text for texture */}
      <span className="absolute -bottom-4 -left-4 text-7xl font-bold text-gray-900/05 select-none pointer-events-none uppercase tracking-tighter">
        Discovery
      </span>
    </div>
  );
};

export default ProductResearchPreview;