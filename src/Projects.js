import React, { useState } from 'react';
import { ExternalLink, Github, ChevronLeft, ChevronRight, Calendar, Wrench } from 'lucide-react';
import Chaos from './Chaos';
import BullpenBudgets from './BullpenBudgets';
import SPXRadar from './SPXRadar';
import DeterrentRobots from './DeterrentRobots';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(0);
  const [isHovered, setIsHovered] = useState(null);

  const projects = [
    {
      title: "Chaos Fantasy",
      date: "Fall 2024",
      technologies: ["Python", "FastAPI", "React", "MongoDB", "Tailwind", "Sockets", "Celery", "Redis", "BS4", "Heroku", "Git", "Docker"],
      demoUrl: "https://chaos-ff-app-b564eaadb8cf.herokuapp.com/",
      demoCredentials: "Username: admin | Password: pass",
      githubURL: "https://github.com/mikehansonn/fantasy-football",
      description: <Chaos />
    },
    {
      title: "Bullpen Budgets",
      date: "Spring 2024",
      technologies: ["Python", "HTML", "Node.js", "BS4", "AWS S3", "Git"],
      demoUrl: "https://bullpenbudgets.com/",
      githubURL: "https://github.com/mikehansonn/BullpenBudgets",
      description: <BullpenBudgets />
    },
    {
      title: "SPX Radar",
      date: "Fall 2023",
      technologies: ["Python", "Flask", "yfinance", "PythonAnywhere", "Git"],
      demoUrl: "https://www.spxradar.xyz/",
      githubURL: "https://github.com/mikehansonn/StockAnalysisEngine",
      description: <SPXRadar />
    },
    {
      title: "Deterrent Robots",
      date: "Fall 2022 - Spring 2023",
      technologies: ["C", "Python", "Flask", "Raspberry Pi", "Electronic Compass", "GPS-RTK", "CAD"],
      demoUrl: null,
      description: <DeterrentRobots />
    }
  ];

  const handlePrevious = () => {
    setSelectedProject(prev => (prev > 0 ? prev - 1 : projects.length - 1));
  };

  const handleNext = () => {
    setSelectedProject(prev => (prev < projects.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="relative min-h-screen z-10 py-8 md:py-16">
      <div className="absolute inset-0 z-0" />
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-extralight text-center mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600">
            Featured Projects
          </span>
        </h1>
        <p className="text-center text-gray-300 mb-8 md:mb-16">Explore my latest works and technical achievements</p>

        {/* Timeline Navigation */}
        <div className="relative mb-16 md:mb-32">
          <div className="flex items-center gap-2 md:gap-4">
            <button 
              onClick={handlePrevious}
              className="p-2 md:p-3 rounded-full bg-neutral-800/70 text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-lg backdrop-blur-md"
            >
              <ChevronLeft size={20} className="md:w-6 md:h-6" />
            </button>

            <div className="relative flex-1">
              {/* Timeline Base */}
              <div className="absolute left-0 w-full h-1 md:h-2 bg-neutral-600/90 top-4 md:top-5 rounded-full overflow-hidden backdrop-blur-md"></div>
              
              {/* Progress Bar */}
              <div 
                className="absolute left-0 h-1 md:h-2 bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500 top-4 md:top-5 transition-all duration-500 rounded-full"
                style={{ width: `${(selectedProject / (projects.length - 1)) * 100}%` }}
              ></div>

              {/* Timeline Points */}
              <div className="flex justify-between">
                {projects.map((project, index) => (
                  <div 
                    key={index}
                    className="relative group"
                    onMouseEnter={() => setIsHovered(index)}
                    onMouseLeave={() => setIsHovered(null)}
                  >
                    <button
                      onClick={() => setSelectedProject(index)}
                      className={`relative w-8 h-8 md:w-12 md:h-12 rounded-full transition-all duration-300 
                        ${selectedProject === index 
                          ? 'bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500 scale-110 shadow-lg shadow-orange-500/30' 
                          : 'bg-neutral-800/70 hover:bg-orange-500/60 backdrop-blur-md'}
                        flex items-center justify-center border border-orange-500/20`}
                    >
                      <div className={`w-3 h-3 md:w-5 md:h-5 rounded-full transition-all duration-300
                        ${selectedProject === index ? 'bg-white scale-75' : 'bg-orange-500/40'}`} />
                    </button>
                    
                    {/* Date label - Hidden on mobile unless selected/hovered */}
                    <div className={`absolute -bottom-12 left-1/2 transform -translate-x-1/2 
                      whitespace-nowrap text-xs md:text-sm transition-all duration-300 
                      flex items-center gap-1 md:gap-2 backdrop-blur-sm px-2 md:px-3 py-1 rounded-full
                      ${selectedProject === index || isHovered === index 
                        ? 'opacity-100 text-orange-400 scale-110 bg-neutral-800/50' 
                        : 'opacity-0 md:opacity-100 text-gray-300 bg-neutral-800/30'}
                      group-hover:opacity-100`}>
                      <Calendar size={12} className="hidden md:inline" />
                      <span className="hidden md:inline">{project.date}</span>
                      <span className="md:hidden">{project.date.split(' ')[1]}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button 
              onClick={handleNext}
              className="p-2 md:p-3 rounded-full bg-neutral-800/70 text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-lg backdrop-blur-md"
            >
              <ChevronRight size={20} className="md:w-6 md:h-6" />
            </button>
          </div>
        </div>

        {/* Project Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-neutral-800/50 backdrop-blur-xl rounded-2xl md:rounded-3xl p-4 md:p-10 shadow-2xl transform transition-all duration-500
            hover:shadow-2xl hover:shadow-orange-500/20 border border-orange-500/20">
            {/* Header */}
            <div className="mb-6 md:mb-10 border-b border-neutral-700/50 pb-6 md:pb-8">
              <h2 className="text-3xl md:text-6xl font-extralight text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 mb-4">
                {projects[selectedProject].title}
              </h2>
              <p className="text-gray-300 flex items-center gap-2 text-sm md:text-base">
                <Calendar size={16} />
                {projects[selectedProject].date}
              </p>
            </div>

            {/* Technologies */}
            <div className="mb-10">
              <h3 className="text-gray-200 mb-6 font-medium flex items-center gap-2 text-lg">
                <Wrench size={18} />
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-3">
                {projects[selectedProject].technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-neutral-700/50 text-orange-400 rounded-xl text-sm
                    hover:bg-orange-500 hover:text-white transition-all duration-300 cursor-default
                    border border-orange-500/20 backdrop-blur-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {projects[selectedProject].demoCredentials && (
              <p className='text-gray-200 mb-2 font-medium flex items-center gap-2 text-md'>Demo Credentials: {projects[selectedProject].demoCredentials}</p>
            )}
            {/* Links */}
            <div className="mb-10 flex gap-4">
              {projects[selectedProject].demoUrl && (
                <a
                  href={projects[selectedProject].demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500 
                  text-white rounded-xl hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-300 font-medium"
                >
                  <ExternalLink size={18} />
                  View Live Demo
                </a>
              )}
              {projects[selectedProject].demoUrl && (
                <a
                  href={projects[selectedProject].githubURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-neutral-700/50 text-orange-400 
                  rounded-xl hover:bg-neutral-800/50 hover:text-white transition-all duration-300
                  border border-orange-500/20 backdrop-blur-md font-medium"
                >
                  <Github size={18} />
                  View Source Code
                </a>
              )}
            </div>

            {/* Description */}
            <div className="bg-neutral-900/60 rounded-2xl p-8 text-gray-300 leading-relaxed backdrop-blur-md border border-neutral-700/50">
              <p className="text-gray-300">
                {projects[selectedProject].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;