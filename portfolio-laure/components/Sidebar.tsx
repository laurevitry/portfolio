import React, { useState, useEffect } from 'react';
import { PROJECTS } from '../data';
import { Menu, X } from 'lucide-react';
import { Project } from '../types';

interface SidebarProps {
  onProjectSelect: (project: Project) => void;
  onNavigate: (sectionId: string) => void;
  activeProject?: Project | null;
}

const Sidebar: React.FC<SidebarProps> = ({ onProjectSelect, onNavigate, activeProject }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const [hoveredProjectId, setHoveredProjectId] = useState<string | null>(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsAtTop(scrollY < 50 && !activeProject);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeProject]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    onNavigate('home');
    setIsOpen(false);
  };

  const handleProjectClick = (project: Project) => {
    onProjectSelect(project);
    setIsOpen(false);
  };

  const handleSectionClick = (sectionId: string) => {
    onNavigate(sectionId);
    setIsOpen(false);
  };

  // Unified Deep Abyss Blue
  const ACCENT_BLUE = '#2A4B6A';

  return (
    <>
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm p-4 flex justify-between items-center border-b border-gray-100">
        <button 
          onClick={scrollToTop} 
          className="text-xl font-bold tracking-tighter uppercase text-left hover:text-[#2A4B6A] transition-colors"
        >
          LAURE VITRY
        </button>
        <button onClick={toggleMenu} className="p-2">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <aside 
        className={`
          fixed inset-y-0 left-0 z-40 w-64 md:w-1/3 lg:w-1/4 bg-white p-8 md:p-12 flex flex-col justify-between
          transform transition-transform duration-300 ease-in-out border-r border-gray-100
          ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 overflow-y-auto
        `}
      >
        <div className="mt-16 md:mt-0">
          <header className="mb-12">
            <button onClick={scrollToTop} className="text-left group">
              <h1 className="text-3xl md:text-4xl font-bold uppercase tracking-tighter leading-tight mb-4 hover:text-[#2A4B6A] transition-colors duration-200">
                Laure<br />Vitry
              </h1>
            </button>
            <p className="text-sm text-gray-500 font-medium leading-relaxed max-w-[240px]">
              Product Manager bridging design, tech and business to build <span className="bg-[#E7F3F8] text-zinc-900 px-1 rounded-sm">products that matter. ✳︎</span>
            </p>
          </header>

          <nav className="space-y-8">
            <div>
              <button 
                onClick={scrollToTop} 
                className={`text-xs font-bold uppercase tracking-widest text-gray-400 mb-4 transition-colors text-left ${
                  isAtTop ? 'cursor-default' : 'hover:text-[#2A4B6A] cursor-pointer'
                }`}
              >
                Work
              </button>
              <ul className="space-y-2">
                {PROJECTS.map((project) => {
                  const isActive = activeProject?.id === project.id;
                  const isHovered = hoveredProjectId === project.id;
                  
                  return (
                    <li key={project.id}>
                      <button
                        onMouseEnter={() => setHoveredProjectId(project.id)}
                        onMouseLeave={() => setHoveredProjectId(null)}
                        onClick={() => handleProjectClick(project)}
                        style={{ 
                          color: (isActive || isHovered) ? ACCENT_BLUE : undefined 
                        }}
                        className={`text-sm md:text-base font-medium transition-colors duration-300 text-left w-full ${
                          !isActive && !isHovered ? 'text-gray-400' : ''
                        }`}
                      >
                        {project.title}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="space-y-4">
              <button 
                onClick={() => handleSectionClick('about')} 
                className="block text-xs font-bold uppercase tracking-widest hover:text-[#2A4B6A] transition-colors text-left w-full text-zinc-900"
              >
                About
              </button>
              <button 
                onClick={() => handleSectionClick('contact')} 
                className="block text-xs font-bold uppercase tracking-widest hover:text-[#2A4B6A] transition-colors text-left w-full text-zinc-900"
              >
                Contact
              </button>
            </div>
          </nav>
        </div>

        <div className="text-[10px] text-gray-300 tracking-widest hidden md:block leading-relaxed">
          &copy; 2025 Laure Vitry<br />
          Crafted with AI 🩵
        </div>
      </aside>

      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;