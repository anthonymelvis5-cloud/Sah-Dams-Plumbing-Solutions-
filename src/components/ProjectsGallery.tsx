import React, { useState } from 'react';
import { PROJECTS } from '../data/plumbingData';
import { ProjectItem } from '../types';
import { MapPin, Clock, Check, ArrowRight, ExternalLink } from 'lucide-react';

interface ProjectsGalleryProps {
  onOpenQuote: (serviceTitle?: string) => void;
}

export const ProjectsGallery: React.FC<ProjectsGalleryProps> = ({ onOpenQuote }) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'bathroom' | 'piping' | 'water-heaters'>('all');
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'bathroom', label: 'Bathroom Installations' },
    { id: 'piping', label: 'Piping & Repipes' },
    { id: 'water-heaters', label: 'Tankless & Heaters' },
  ];

  const filteredProjects = selectedCategory === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <p className="text-xs sm:text-sm font-bold tracking-wider uppercase text-blue-700 mb-2">
              Featured Craftsmanship
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Recent Plumbing Installations & Upgrades
            </h2>
          </div>

          {/* Filter tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-200/80 rounded-xl overflow-x-auto no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id as any)}
                className={`px-3.5 py-1.5 text-xs sm:text-sm font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveProject(project)}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-400 transition-all duration-300 flex flex-col cursor-pointer"
            >
              {/* Image Frame with Aspect 4:3 */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-800">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                
                {/* Location indicator */}
                <div className="absolute top-4 left-4 bg-slate-900/85 backdrop-blur-md px-3 py-1.5 rounded-lg text-white text-xs font-medium flex items-center gap-1.5 border border-white/10">
                  <MapPin className="w-3.5 h-3.5 text-sky-400" />
                  <span>{project.location}</span>
                </div>

                <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-md text-slate-900 text-xs font-bold flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-blue-600" />
                  <span>{project.completionTime}</span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {project.scope}
                  </p>

                  {/* Spec bullets */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.specs.map((spec, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-xs text-slate-600 bg-slate-100 px-2.5 py-1 rounded-md font-medium"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-emerald-700 flex items-center gap-1">
                    <Check className="w-4 h-4" />
                    Verified Completion
                  </span>
                  <span className="text-xs font-bold text-blue-600 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>View Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Project Deep Dive Modal */}
      {activeProject && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-150"
          onClick={() => setActiveProject(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 relative p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
              <span className="text-xs font-mono font-bold text-blue-700 uppercase">
                Project Showcase
              </span>
              <button
                onClick={() => setActiveProject(null)}
                className="text-slate-400 hover:text-slate-600 p-1 rounded-md"
              >
                ✕
              </button>
            </div>

            <div className="aspect-[16/9] rounded-xl overflow-hidden mb-6 bg-slate-900">
              <img
                src={activeProject.image}
                alt={activeProject.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              {activeProject.title}
            </h3>
            <div className="flex items-center gap-2 text-xs text-slate-500 mb-6">
              <MapPin className="w-3.5 h-3.5 text-blue-600" />
              <span>{activeProject.location}</span>
              <span>·</span>
              <Clock className="w-3.5 h-3.5 text-blue-600" />
              <span>Turnaround: {activeProject.completionTime}</span>
            </div>

            <div className="space-y-4 mb-6 text-sm text-slate-700">
              <div>
                <h4 className="font-bold text-slate-900 mb-1">Challenge & Scope</h4>
                <p className="text-slate-600 leading-relaxed">{activeProject.scope}</p>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">Key Trade Outcome</h4>
                <p className="text-emerald-800 bg-emerald-50 p-3 rounded-lg border border-emerald-200 leading-relaxed">
                  {activeProject.outcome}
                </p>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-2">Technical Specifications</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeProject.specs.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                      <Check className="w-3.5 h-3.5 text-blue-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
              <button
                onClick={() => setActiveProject(null)}
                className="px-4 py-2.5 rounded-lg text-slate-600 hover:bg-slate-100 font-semibold text-xs"
              >
                Close
              </button>
              <button
                onClick={() => {
                  onOpenQuote(activeProject.title);
                  setActiveProject(null);
                }}
                className="px-6 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-sm"
              >
                Request Similar Project
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
