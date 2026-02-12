import React, { useEffect } from 'react';
import { Project } from '../types';
import { PROJECTS } from '../data';
import { ArrowLeft, ArrowRight, ChevronRight } from 'lucide-react';

interface ProjectDetailProps {
  project: Project;
  onClose: () => void;
  onNext: (project: Project) => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onClose, onNext }) => {
  const { details } = project;
  const ABYSS_BLUE = '#2A4B6A';

  // Projects navigation
  const currentIndex = PROJECTS.findIndex(p => p.id === project.id);
  
  const nextIndex = (currentIndex + 1) % PROJECTS.length;
  const nextProject = PROJECTS[nextIndex];

  const prevIndex = (currentIndex - 1 + PROJECTS.length) % PROJECTS.length;
  const prevProject = PROJECTS[prevIndex];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [project.id]);

  if (!details) {
    return (
      <div className="p-12">
        <button onClick={onClose} className="flex items-center gap-2 text-sm uppercase tracking-widest font-bold mb-8 hover:text-[#2A4B6A] transition-colors">
          <ArrowLeft size={16} /> Back
        </button>
        <h1 className="text-4xl font-bold mb-4">Content coming soon</h1>
        <p>Detailed case study for {project.title} is being written.</p>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Navbar / Breadcrumb */}
      <div className="sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-gray-100 px-6 py-4 md:px-12 flex items-center">
        <nav className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest">
            <button 
                onClick={onClose} 
                className="text-zinc-500 hover:text-[#2A4B6A] transition-colors"
            >
                Work
            </button>
            <ChevronRight size={12} className="text-zinc-300" />
            <span className="text-zinc-900">
                {project.title}
            </span>
        </nav>
      </div>

      <div className="px-6 py-12 md:px-12 md:py-16 max-w-7xl mx-auto">
        
        {/* Header Section */}
        <header className="mb-16 md:mb-24">
            <div className="flex flex-col mb-8 border-b border-black pb-8">
                <span className="block text-sm font-medium text-gray-500 mb-2 uppercase tracking-tight">{project.category} — {project.year}</span>
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                  <h1 className="text-4xl md:text-7xl font-bold tracking-tight text-zinc-900 leading-none">
                      {project.detailTitle || project.title}
                  </h1>
                  <p className="text-xl md:text-2xl font-light text-gray-600 leading-tight md:text-right md:max-w-md">
                      {project.subtitle}
                  </p>
                </div>
            </div>

            {/* Hero Visual */}
            <div className="w-full aspect-video md:aspect-[21/9] bg-gray-100 rounded-lg overflow-hidden shadow-sm mb-16">
                {project.component ? (
                    <div className="w-full h-full transform scale-100">{project.component}</div>
                ) : (
                    <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
                )}
            </div>

            {/* Intro Text */}
            <p className="text-xl md:text-3xl font-light leading-relaxed text-zinc-800 max-w-4xl whitespace-pre-line">
                {details.intro}
            </p>
        </header>

        {/* Project Overview Grid */}
        <section className="mb-20">
            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6 border-b border-gray-200 pb-2">
                {details.overviewTitle || "Project Overview"}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                {details.overview.map((item, index) => (
                    <div key={index} className="flex flex-col gap-1">
                        <span className="text-xs font-bold uppercase text-gray-400">{item.label}</span>
                        <span className="text-sm md:text-base font-medium text-zinc-900 leading-snug">{item.value}</span>
                    </div>
                ))}
            </div>
        </section>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-24">
            
            {/* Context & Challenge */}
            <div className="lg:col-span-8 lg:col-start-1 space-y-20">
                
                <section>
                    <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-2">
                        Context
                    </h2>
                    <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-light whitespace-pre-line">
                        {details.context}
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl md:text-3xl font-bold mb-8">Objectives</h2>
                    <div className="grid grid-cols-1 gap-8">
                        {details.objectives.map((obj, i) => (
                            <div key={i} className="border-l-2 border-gray-200 pl-6">
                                <h3 className="font-bold text-lg mb-2 text-zinc-900">{obj.title}</h3>
                                <ul className="space-y-2">
                                    {obj.content.map((line, idx) => (
                                        <li key={idx} className="text-gray-700 leading-relaxed text-base">{line}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl md:text-3xl font-bold mb-8">Approach</h2>
                    <div className="space-y-8">
                        {details.approach.map((step, i) => (
                            <div key={i} className="group">
                                <h3 className="text-lg md:text-xl font-bold mb-2 flex items-baseline gap-3">
                                    <span 
                                      className="text-xs font-bold border px-2 py-0.5 rounded-full whitespace-nowrap bg-[#2A4B6A] text-white border-transparent"
                                    >
                                      STEP 0{i+1}
                                    </span>
                                    {step.step}
                                </h3>
                                <p className="text-gray-700 text-lg leading-relaxed md:pl-[4.5rem]">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {details.features && (
                  <section>
                      <h2 className="text-2xl md:text-3xl font-bold mb-8">Key Features</h2>
                      <div className="grid grid-cols-1 gap-6">
                          {details.features.map((feature, i) => (
                              <div key={i} className="border-b border-gray-100 pb-6 last:border-0">
                                  <h4 className="font-bold text-lg text-zinc-900 mb-1">{feature.title}</h4>
                                  <p className="text-gray-600 text-base leading-relaxed">{feature.description}</p>
                              </div>
                          ))}
                      </div>
                  </section>
                )}

                <section>
                    <h2 className="text-2xl md:text-3xl font-bold mb-8">Constraints & Trade-offs</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                         {details.constraints.map((c, i) => (
                             <div key={i} className="bg-gray-50 p-6 rounded-sm">
                                 <h4 className="font-bold text-sm mb-2">{c.title}</h4>
                                 <p className="text-sm text-gray-600 leading-relaxed">{c.description}</p>
                             </div>
                         ))}
                    </div>
                </section>

            </div>
        </div>

        {/* Results Section - Enhanced hover white-out on numbers */}
        <section 
          className="-mx-6 md:-mx-12 px-6 md:px-12 py-20 md:py-24"
          style={{ 
            backgroundColor: ABYSS_BLUE,
            color: 'white'
          }}
        >
            <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-4 mb-16">
                    <div className="h-px w-12 bg-white/30"></div>
                    <h2 className="text-xs font-bold uppercase tracking-widest text-white/70">
                        {project.id === 'research' ? 'Key Insights' : 'Impact & Key Results'}
                    </h2>
                </div>

                <div className="space-y-12">
                    {details.results.map((result, i) => {
                        const isObject = typeof result === 'object';
                        const title = isObject ? result.title : null;
                        const content = isObject ? result.content : result;

                        return (
                            <div key={i} className="flex flex-col md:flex-row md:items-start gap-4 md:gap-12 border-b pb-12 last:border-0 last:pb-0 group border-white/20">
                                <span className="text-5xl md:text-6xl font-bold font-mono transition-all duration-300 shrink-0 leading-none text-white/20 group-hover:text-white group-hover:scale-110 origin-left">
                                    0{i+1}
                                </span>
                                <div className="flex flex-col gap-3 transition-transform duration-300 group-hover:translate-x-2">
                                    {title && (
                                        <h4 className="text-xl md:text-2xl font-bold tracking-tight leading-snug">
                                            {title}
                                        </h4>
                                    )}
                                    <p className={`text-xl md:text-3xl font-medium leading-tight transition-opacity duration-300 ${title ? 'opacity-90 md:text-2xl' : ''} group-hover:opacity-100`}>
                                        {content}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>

        {/* Anchor Insight / Quote Section */}
        {details.quote && (
          <section className="py-24 md:py-32 flex justify-center text-center">
            <div className="max-w-3xl px-6">
                <h3 className="text-xs font-bold uppercase tracking-[0.3em] mb-8 text-[#2A4B6A]">
                  Anchor Insight
                </h3>
                <blockquote className="text-3xl md:text-5xl font-light tracking-tight text-zinc-900 leading-tight">
                    "{details.quote}"
                </blockquote>
            </div>
          </section>
        )}

        {/* Footer Navigation */}
        <div className="mt-12 border-t border-gray-100 pt-12 flex justify-between items-center">
             {project.id === 'manoclub' ? (
                <button 
                    onClick={onClose}
                    className="group flex items-center gap-3 text-zinc-500 hover:text-[#2A4B6A] transition-colors"
                >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    <span className="text-xs font-bold uppercase tracking-widest">Back to all</span>
                </button>
             ) : (
                <button 
                    onClick={() => onNext(prevProject)}
                    className="group flex items-center gap-3 text-zinc-900 transition-colors"
                >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform shrink-0" />
                    <div className="flex flex-col items-start text-left">
                        <span className="text-[10px] text-gray-400 font-normal uppercase tracking-wider mb-0.5">Previous</span>
                        <span className="text-xs font-bold uppercase tracking-widest max-w-[120px] md:max-w-none group-hover:text-[#2A4B6A] transition-colors">{prevProject.title}</span>
                    </div>
                </button>
             )}

            <button 
                onClick={() => onNext(nextProject)}
                className="group flex items-center gap-3 text-zinc-900 transition-colors text-right"
            >
                <div className="flex flex-col items-end">
                    <span className="text-[10px] text-gray-400 font-normal uppercase tracking-wider mb-0.5">Next</span>
                    <span className="text-xs font-bold uppercase tracking-widest max-w-[120px] md:max-w-none group-hover:text-[#2A4B6A] transition-colors">{nextProject.title}</span>
                </div>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform shrink-0" />
            </button>
        </div>

      </div>
    </div>
  );
};

export default ProjectDetail;