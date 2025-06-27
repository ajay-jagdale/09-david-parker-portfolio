import React from 'react';
import { projectsData } from '../data/projectsData.js';
import { GitHubIcon } from './Icons.jsx'; // Assuming GitHubIcon can be reused and styled

const ExternalLinkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

const ProjectCard = ({ project }) => (
  <div className="bg-slate-800 rounded-xl shadow-2xl overflow-hidden transform hover:scale-[1.02] hover:shadow-sky-500/40 transition-all duration-300 ease-in-out flex flex-col group">
    <div className="overflow-hidden">
      <img src={project.imageUrl} alt={project.title} className="w-full h-56 object-cover transition-transform duration-300 ease-in-out group-hover:scale-110" loading="lazy" />
    </div>
    <div className="p-5 sm:p-6 flex flex-col flex-grow">
      <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-sky-400">{project.title}</h3>
      <div className="mb-5 mt-2">
        <h4 className="text-xs sm:text-sm font-semibold text-slate-200 mb-2">Technologies:</h4>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="bg-slate-700 text-teal-300 px-3 py-1 rounded-full text-xs font-semibold">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-auto flex space-x-3 sm:space-x-4">
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-2 text-center bg-sky-600 hover:bg-sky-500 text-white py-2.5 px-3 sm:px-4 rounded-md text-xs sm:text-sm font-medium transition-colors"
          aria-label={`View live demo of ${project.title}`}
        >
          <ExternalLinkIcon />
          Live Demo
        </a>
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-2 text-center bg-slate-600 hover:bg-slate-500 text-white py-2.5 px-3 sm:px-4 rounded-md text-xs sm:text-sm font-medium transition-colors"
          aria-label={`View source code of ${project.title} on GitHub`}
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"> {/* Smaller GitHub Icon */}
            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.026 2.747-1.026.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
          </svg>
          GitHub
        </a>
      </div>
    </div>
  </div>
);

const Projects = () => (
  <section id="projects" className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-gray-900">
    <div className="container mx-auto px-4 pt-10 sm:px-6 lg:px-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16 text-blue-500">My Recent Work</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  </section>
);

export default Projects;