import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onClick: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  const DEEP_BLUE_OVERLAY = '#2A4B6A'; // Pronounced Deep Abyss Blue

  return (
    <div 
      id={project.id} 
      onClick={() => onClick(project)}
      className="group relative w-full aspect-square overflow-hidden bg-gray-100 cursor-pointer scroll-mt-10"
    >
      
      {/* Content: Either Custom Component or Image */}
      {project.component ? (
        <div className="h-full w-full transition-transform duration-700 group-hover:scale-105">
          {project.component}
        </div>
      ) : (
        <div className="h-full w-full overflow-hidden">
            <img
            src={project.imageUrl}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 will-change-transform"
            loading="lazy"
            />
        </div>
      )}

      {/* Hover Overlay - Pronounced Abyss Blue Overlay */}
      <div 
        className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col items-center justify-center p-6 text-center z-20"
        style={{ 
          backgroundColor: `${DEEP_BLUE_OVERLAY}F2`, // F2 = 95% opacity for a deep, rich look
          color: 'white' 
        }} 
      >
        <span className="text-sm font-medium tracking-widest mb-2 opacity-60 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
          {project.year}
        </span>
        <h3 className="text-2xl md:text-3xl font-bold tracking-wide mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
          {project.title}
        </h3>
        <p className="text-lg font-light opacity-80 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150">
          {project.subtitle}
        </p>
        <div className="w-8 h-0.5 bg-white mt-4 opacity-0 group-hover:opacity-100 transition-opacity delay-200 duration-500"></div>
        <span className="mt-8 text-xs font-bold uppercase tracking-widest border border-white px-4 py-2 rounded-full hover:bg-white hover:text-[#2A4B6A] transition-colors duration-300 translate-y-4 group-hover:translate-y-0 delay-200">
            View Case Study
        </span>
      </div>
    </div>
  );
};

export default ProjectCard;