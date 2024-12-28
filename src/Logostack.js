import React from 'react';
import { FaLinkedin, FaGithub, FaPaperclip } from 'react-icons/fa';

const Logostack = () => {
  const logos = [
    {
      icon: FaLinkedin,
      href: 'https://www.linkedin.com/in/michael-hanson-6b605824a/',
      label: 'LinkedIn'
    },
    {
      icon: FaGithub,
      href: 'https://github.com/mikehansonn',
      label: 'GitHub'
    },
    {
      icon: FaPaperclip,
      href: 'https://www.example.com',
      label: 'Resume'
    }
  ];

  return (
    <div className="py-8">
      <ul className="flex justify-center items-center gap-6">
        {logos.map(({ icon: Icon, href, label }) => (
          <li key={label} className="flex items-center justify-center">
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="group relative p-6 bg-neutral-800/50 backdrop-blur-xl rounded-2xl
                       border border-orange-500/20 transition-all duration-300
                       hover:shadow-lg hover:shadow-orange-500/20 hover:border-orange-500/40"
            >
              <div className="relative z-10">
                <Icon 
                  size={40} 
                  className="text-orange-400 transition-all duration-300
                           group-hover:text-orange-500 group-hover:scale-110" 
                />
              </div>
              
              {/* Gradient hover effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100
                            bg-gradient-to-r from-orange-500/10 via-orange-400/10 to-orange-500/10
                            transition-opacity duration-300" 
              />
              
              {/* Label tooltip */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2
                            px-3 py-1 bg-neutral-800/90 rounded-full border border-orange-500/20
                            opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-sm text-gray-300 whitespace-nowrap">{label}</span>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Logostack;