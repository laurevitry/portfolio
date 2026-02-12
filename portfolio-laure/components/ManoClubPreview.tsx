import React from 'react';
import { Search, ShoppingCart, Menu, Heart } from 'lucide-react';

const ManoClubPreview: React.FC = () => {
  return (
    <div className="relative w-full h-full overflow-hidden bg-white flex items-center justify-center select-none group">
      
      {/* 1. Background Image - Real Human Hand & iPhone Mockup */}
      <img 
        src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&auto=format&fit=crop" 
        alt="Hand holding iPhone" 
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 ease-out"
      />

      {/* 2. Interface Container - Mapped to the screen area of the photo */}
      {/* 
          Note: We use absolute positioning and a specific width/height ratio 
          to match the iPhone screen in this specific Unsplash photo.
      */}
      <div className="relative z-10 w-[245px] h-[530px] ml-[2px] mt-[10px] rounded-[38px] overflow-hidden shadow-2xl transition-transform duration-1000 group-hover:scale-105 ease-out flex flex-col bg-white">
        
        {/* L'INTERFACE MANOCLUB (Code réutilisé et optimisé) */}
        <div className="flex-grow flex flex-col overflow-y-auto overflow-x-hidden no-scrollbar bg-white text-[8px] leading-tight">
            
            {/* Top Banner */}
            <div className="bg-[#c6f6d5] py-1.5 text-center text-[7px] font-bold text-zinc-800 shrink-0 uppercase tracking-tighter">
                Soldes : les meilleures offres sont là !
            </div>

            {/* Nav */}
            <div className="bg-[#162a47] p-2 flex flex-col gap-2 shrink-0">
                <div className="flex justify-between items-center text-white">
                    <div className="flex items-center gap-1.5">
                        <Menu size={12} strokeWidth={3} />
                        <div className="flex items-center gap-1">
                            <div className="w-3 h-3 bg-[#00e5bc] rounded-[2px] flex items-center justify-center font-black text-[6px] text-[#162a47]">M</div>
                            <span className="font-extrabold tracking-tighter text-[9px]">ManoMano</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <ShoppingCart size={12} />
                    </div>
                </div>

                {/* Search Bar */}
                <div className="relative">
                    <div className="w-full bg-white rounded-full py-1.5 px-3 text-zinc-400 flex items-center justify-between">
                        <span className="text-[7px]">Rechercher un produit...</span>
                        <div className="w-5 h-5 bg-[#00e5bc] rounded-full flex items-center justify-center">
                            <Search size={8} className="text-[#162a47]" strokeWidth={4} />
                        </div>
                    </div>
                </div>

                {/* Tags */}
                <div className="flex gap-1 overflow-x-auto no-scrollbar py-0.5">
                    <span className="bg-[#ef4444] text-white px-2 py-0.5 rounded-[2px] font-bold whitespace-nowrap">Soldes</span>
                    <span className="bg-[#1e3a5f] border border-white/20 text-white px-2 py-0.5 rounded-[2px] font-bold whitespace-nowrap">Zéro coup de froid</span>
                    <span className="bg-transparent text-white/80 px-2 py-0.5 rounded-[2px] whitespace-nowrap">Mois du blanc</span>
                </div>
            </div>

            {/* Hero Section */}
            <div className="relative h-32 shrink-0 overflow-hidden">
                <img 
                    src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=400&auto=format&fit=crop" 
                    className="w-full h-full object-cover" 
                    alt="Background"
                />
                <div className="absolute inset-0 bg-black/40 p-4 flex flex-col justify-center">
                    <h2 className="text-white text-sm font-bold leading-tight max-w-[90%] drop-shadow-md">
                        Bonjour, vous voulez faire partie du ManoClub ?
                    </h2>

                    {/* Yellow Card */}
                    <div className="mt-3 bg-[#fde047] rounded-lg p-3 shadow-lg flex flex-col gap-2 transform -rotate-1">
                        <div className="flex items-center gap-1">
                            <span className="font-black italic text-[#162a47] text-[9px]">Mano</span>
                            <div className="bg-[#162a47] text-white px-1 rounded-sm font-bold text-[7px]">Club</div>
                        </div>
                        <div className="text-[#162a47]">
                            <span className="text-[11px] font-black">5 € cagnottés</span>
                            <span className="text-[7px] font-medium ml-1">dès le 1er achat</span>
                        </div>
                        <div className="w-full bg-white text-[#162a47] font-bold py-1.5 rounded-md text-center text-[8px] shadow-sm">
                            Créer un compte
                        </div>
                    </div>
                </div>
            </div>

            {/* Bonus Section */}
            <div className="p-4 bg-white space-y-4">
                <h3 className="text-[10px] font-extrabold text-[#162a47] uppercase tracking-tight">Votre bonus à débloquer</h3>
                
                <div className="bg-white border border-zinc-100 rounded-xl p-3 shadow-sm flex items-center justify-between gap-3">
                    <div className="flex-grow space-y-1.5">
                        <span className="bg-[#fde047] text-[#162a47] px-1.5 py-0.5 rounded-sm font-bold text-[6px] uppercase tracking-tighter">Bonus de bienvenue</span>
                        <p className="text-[8px] text-zinc-700 font-bold leading-tight">
                            5€ de plus dans votre cagnotte dès votre 1er achat dès 250€
                        </p>
                        <div className="text-[#162a47] font-extrabold underline decoration-[#fde047] decoration-2 underline-offset-2 text-[7px]">En profiter</div>
                    </div>
                    <div className="relative w-14 h-14 rounded-full overflow-hidden shrink-0 border-2 border-white shadow-md">
                        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop" className="w-full h-full object-cover" alt="User" />
                        <div className="absolute bottom-1 left-0 right-0 bg-[#fde047] py-0.5 px-1 text-[5px] font-black text-center text-[#162a47] mx-2 rounded-full shadow-sm">5€ offerts</div>
                    </div>
                </div>

                <h3 className="text-[10px] font-extrabold text-[#162a47] uppercase tracking-tight pt-2">Les avantages Membre</h3>
                <div className="bg-zinc-50 border border-zinc-100 rounded-xl p-3 space-y-2">
                     <div className="flex items-center gap-2">
                         <div className="bg-[#162a47] text-white px-1 py-0.5 rounded-sm font-bold text-[6px]">Membre</div>
                         <span className="text-zinc-500 font-bold text-[7px]">Statut actuel</span>
                     </div>
                     <ul className="space-y-1.5 text-[8px] font-bold text-zinc-800">
                         <li className="flex items-center gap-2">
                             <div className="w-1 h-1 bg-green-500 rounded-full animate-pulse"></div>
                             Commencez à cagnotter !
                         </li>
                         <li className="flex items-center gap-2">
                             <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                             Offres spéciales réservées
                         </li>
                     </ul>
                </div>
            </div>
        </div>
      </div>

      {/* 3. Subtle Overlay for Depth */}
      <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-700 pointer-events-none"></div>
    </div>
  );
};

export default ManoClubPreview;
