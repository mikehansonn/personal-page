import React from 'react';
import { GraduationCap, Code2, Heart } from 'lucide-react';

const About = () => {
  const technologies = [
    { name: 'Java', icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
    { name: 'Python', icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
    { name: 'C', icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" },
    { name: 'C++', icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" },
    { name: 'MongoDB', icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
    { name: 'Tailwind', icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
    { name: 'NodeJS', icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
    { name: 'React', icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
    { name: 'FastAPI', icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" },
    { name: 'Docker', icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
    { name: 'AWS', icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
    { name: 'Git', icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" }
  ];

  return (
    <div className="relative h-[calc(100vh-80px)] z-10 pt-16">
      <div className="absolute inset-0 z-0" />
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-extralight mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600">
              About Me
            </span>
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Main Content */}
          <div className="flex-1">
            <div className="space-y-4">
              {/* Education Section */}
              <div className="bg-neutral-800/50 backdrop-blur-xl p-8 rounded-2xl border border-orange-500/20">
                <h2 className="text-2xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500 mb-4 flex items-center gap-2">
                  <GraduationCap size={24} className="text-white" />
                  Education
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed">  
                  I am a senior at <span className="text-orange-400">Virginia Tech</span> studying Computer Science in the  
                  College of Engineering, where I have consistently been on the Dean's List since Spring 2022. I currently  
                  maintain a GPA of 3.5, delving into the fascinating world of technology.  
                </p>
              </div>

              {/* Interests Section */}
              <div className="bg-neutral-800/50 backdrop-blur-xl p-8 rounded-2xl border border-orange-500/20">
                <h2 className="text-2xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500 mb-4 flex items-center gap-2">
                  <Code2 size={24} className="text-white" />
                  Professional Interests
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Apart from the material I learn in my classes, I enjoy working
                  on side projects and learning about the innovation behind software creations that I use everyday. 
                  My most recent interest has been quantum computers and tech that utilizes machine learning.
                </p>
              </div>

              {/* Personal Section */}
              <div className="bg-neutral-800/50 backdrop-blur-xl p-8 rounded-2xl border border-orange-500/20">
                <h2 className="text-2xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500 mb-4 flex items-center gap-2">
                  <Heart size={24} className="text-white" />
                  Personal Life
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  When I am not coding, you might catch me on the golf course, on a run, or watching New York sports teams.
                </p>
              </div>
            </div>
          </div>

          {/* Technologies Grid */}
          <div className="lg:w-2/5 mx-auto">
            <div className="bg-neutral-800/50 backdrop-blur-xl p-8 rounded-2xl border border-orange-500/20">
              <h2 className="text-2xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500 mb-6">
                Technologies
              </h2>
              <div className="grid grid-cols-3 gap-4">
                {technologies.map((tech) => (
                  <div key={tech.name} 
                    className="bg-neutral-700/50 p-4 rounded-xl border border-orange-500/20 
                      hover:border-orange-500/40 hover:shadow-lg hover:shadow-orange-500/20 
                      transition-all duration-300">
                    <div className="flex flex-col items-center gap-2">
                      <img 
                        src={tech.icon} 
                        alt={tech.name}
                        className="h-12 w-12" 
                      />
                      <span className="text-gray-300 text-sm font-light">
                        {tech.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;