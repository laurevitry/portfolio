import React from 'react';
import { Info, Check } from 'lucide-react';

const SuperProPreview: React.FC = () => {
  return (
    <div className="relative w-full h-full overflow-hidden bg-gray-200 flex items-center justify-center">
      
      {/* Background Ambience (Blurred Workshop/Construction vibe) */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-40 blur-sm scale-110"></div>
      
      {/* Hand Container */}
      <div className="relative w-auto h-[90%] aspect-[9/19] flex items-center justify-center transform rotate-[-2deg] transition-transform duration-700 hover:rotate-0 hover:scale-105">
        
        {/* Fingers (Behind the phone) - Left side */}
        <div className="absolute top-[20%] -left-[12%] w-[20%] h-[12%] bg-[#eac096] rounded-l-xl transform -rotate-12 border-l border-b border-[#d6a575] shadow-lg"></div>
        <div className="absolute top-[34%] -left-[12%] w-[20%] h-[12%] bg-[#eac096] rounded-l-xl transform -rotate-6 border-l border-b border-[#d6a575] shadow-lg"></div>
        <div className="absolute top-[48%] -left-[12%] w-[20%] h-[12%] bg-[#eac096] rounded-l-xl transform rotate-2 border-l border-b border-[#d6a575] shadow-lg"></div>
        <div className="absolute top-[62%] -left-[10%] w-[18%] h-[11%] bg-[#eac096] rounded-l-xl transform rotate-12 border-l border-b border-[#d6a575] shadow-lg"></div>

        {/* The Phone Frame */}
        <div className="relative z-10 w-full h-full bg-white rounded-[12%] md:rounded-[2.5rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] overflow-hidden border-[4px] md:border-[6px] border-zinc-800 ring-1 ring-zinc-700/50 text-[0.6rem] md:text-xs select-none">
            
            {/* Notch / Status Bar Area */}
            <div className="absolute top-0 w-full h-[5%] bg-white z-20 flex justify-center">
                <div className="w-[40%] h-[80%] bg-black rounded-b-xl"></div>
            </div>

            {/* Floating Notification */}
            <div className="absolute top-[8%] left-1/2 -translate-x-1/2 w-[90%] z-20 animate-in fade-in slide-in-from-top-4 duration-700">
            <div className="bg-white rounded-lg md:rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] p-2 md:p-4 border border-gray-100">
                <div className="flex justify-between items-start mb-1 md:mb-2">
                <div className="flex items-center gap-1">
                    <div className="bg-[#1e2e46] text-white p-0.5 rounded text-[8px] md:text-[10px] font-bold flex items-center justify-center">
                        <Check size={8} strokeWidth={4} className="md:w-[10px] md:h-[10px]" />
                    </div>
                    <span className="text-[#1e2e46] font-bold italic text-[10px] md:text-sm">SUPER<span className="text-[#fcae38]">Pro</span></span>
                </div>
                <Info size={12} className="text-[#1e2e46] md:w-4 md:h-4" />
                </div>
                <p className="text-[9px] md:text-sm text-gray-700 font-medium leading-tight">
                Livraison illimitée à <span className="font-bold">149€/an</span>
                </p>
            </div>
            </div>

            {/* Main Screen Content */}
            <div className="h-full w-full bg-white pt-[28%] px-4 flex flex-col font-sans">
                
                {/* Invoice Details */}
                <div className="space-y-2 md:space-y-3 mb-4 flex-grow">
                    <div className="flex justify-between items-center text-gray-800 font-medium">
                        <span>Panier HT</span>
                        <span>100 €</span>
                    </div>
                    <div className="flex justify-between items-center text-gray-500">
                        <span>TVA</span>
                        <span>49,80 €</span>
                    </div>
                    <div className="h-px bg-gray-100 my-1"></div>
                    <div className="flex justify-between items-center">
                        <span className="text-gray-800 font-medium max-w-[60%] leading-tight">Livraison avec <span className="italic font-bold text-[#1e2e46]">SUPER<span className="text-[#fcae38]">Pro</span></span></span>
                        <div className="flex flex-col items-end leading-none">
                            <span className="text-gray-300 line-through text-[8px] md:text-[10px]">24,00 €</span>
                            <span className="font-bold text-gray-900">Offerte</span>
                        </div>
                    </div>
                    <div className="h-px bg-gray-100 my-1"></div>
                    <div className="flex justify-between items-center font-bold text-gray-900 text-sm md:text-base">
                        <span>Total TTC</span>
                        <span>298,80 €</span>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mb-4 md:mb-8">
                    {/* CTA Button */}
                    <button className="w-full bg-[#fcae38] text-[#1e2e46] font-bold py-2 md:py-3.5 rounded-md md:rounded-lg shadow-sm mb-2 md:mb-4 text-[10px] md:text-sm whitespace-nowrap active:scale-95 transition-transform">
                        Passer à la livraison
                    </button>

                    {/* Footer / Payment Options */}
                    <div className="bg-gray-50 rounded-md p-2 hidden xs:block">
                        <p className="text-[8px] md:text-[10px] font-bold text-gray-700 mb-0.5">Commander maintenant. Payer plus tard.</p>
                    </div>
                    
                    <p className="text-center text-[8px] text-gray-400 mt-2">Paiement sécurisé</p>
                </div>

            </div>
        </div>

        {/* Thumb (In front of the phone) */}
        <div className="absolute -bottom-[2%] -right-[10%] w-[45%] h-[20%] bg-[#eac096] rounded-l-3xl rounded-r-xl transform -rotate-[30deg] z-20 shadow-xl border-t border-l border-[#d6a575]">
             <div className="absolute top-[10%] left-[5%] w-[30%] h-[60%] bg-[#eac096] opacity-0 rounded-full blur-sm"></div>
             {/* Nail */}
             <div className="absolute top-[25%] left-[10%] w-[15%] h-[40%] bg-[#f5d0b0] rounded-[40%] opacity-60"></div>
        </div>

      </div>
    </div>
  );
};

export default SuperProPreview;