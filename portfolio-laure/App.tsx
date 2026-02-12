import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import ProjectCard from './components/ProjectCard';
import About from './components/About';
import Contact from './components/Contact';
import ProjectDetail from './components/ProjectDetail';
import { PROJECTS } from './data';
import { Project } from './types';
import { ArrowUp } from 'lucide-react';

type ViewState = 'portfolio' | 'project';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('portfolio');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleProjectSelect = (project: Project) => {
    setSelectedProject(project);
    setView('project');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleCloseProject = () => {
    setView('portfolio');
    setSelectedProject(null);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleNavigate = (sectionId: string) => {
    setView('portfolio');
    setSelectedProject(null);
    
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-white">
      <Sidebar 
        onProjectSelect={handleProjectSelect} 
        onNavigate={handleNavigate}
        activeProject={selectedProject}
      />

      <main className="md:ml-[33.333333%] lg:ml-[25%] transition-all duration-300">
        {view === 'project' && selectedProject ? (
          <ProjectDetail 
            project={selectedProject} 
            onClose={handleCloseProject}
            onNext={handleProjectSelect}
          />
        ) : (
          <>
            <div className="h-20 md:hidden"></div>
            <div id="work" className="grid grid-cols-1 md:grid-cols-2 gap-1 animate-in fade-in duration-500">
              {PROJECTS.map((project) => (
                <ProjectCard 
                    key={project.id} 
                    project={project} 
                    onClick={handleProjectSelect}
                />
              ))}
            </div>
            <div className="bg-white">
              <About />
              <Contact />
            </div>
            <div className="w-full flex justify-center py-20 bg-white">
              <button 
                onClick={scrollToTop}
                className="group flex flex-col items-center gap-2 text-gray-300 hover:text-zinc-900 transition-colors duration-500"
                aria-label="Back to top"
              >
                <ArrowUp className="w-5 h-5 group-hover:-translate-y-2 transition-transform duration-500 ease-out" strokeWidth={1.5} />
                <span className="text-xs font-bold uppercase tracking-widest">Back to top</span>
              </button>
            </div>
            <footer className="p-8 md:hidden text-center text-[10px] text-gray-400 tracking-widest border-t border-gray-100 leading-relaxed">
              &copy; 2025 Laure Vitry<br />
              Crafted with AI 🩵
            </footer>
          </>
        )}
      </main>
    </div>
  );
};

export default App;