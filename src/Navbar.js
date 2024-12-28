import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Me' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && 
          menuRef.current && 
          !menuRef.current.contains(event.target) &&
          buttonRef.current &&
          !buttonRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="h-20 fixed top-0 left-0 right-0 z-50">
        {/* Backdrop */}
        <div className="absolute inset-0 bg-neutral-700 backdrop-blur-xl shadow-lg" />
        
        <nav className="relative h-full max-w-6xl mx-auto px-4 flex items-center justify-center">
          {/* Mobile Menu Button */}
          <button 
            ref={buttonRef}
            onClick={toggleMenu}
            className="md:hidden absolute left-4 top-1/2 -translate-y-1/2 p-3 
                     text-orange-400 hover:text-orange-500 transition-colors
                     bg-neutral-700 rounded-lg border border-orange-500/20
                     hover:bg-neutral-700/50"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Navigation Links */}
          <ul 
            ref={menuRef}
            className={`
              flex flex-col md:flex-row
              fixed md:relative
              top-20 md:top-0
              left-0 md:left-auto
              w-full md:w-auto
              h-auto md:h-full
              bg-neutral-700/90 md:bg-transparent
              backdrop-blur-xl md:backdrop-blur-none
              justify-start md:justify-center
              items-center
              gap-4 md:gap-8
              m-0 p-6 md:p-0
              transition-all duration-300 ease-in-out
              ${isMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
              border-t md:border-t-0 border-orange-500/20
              z-50
            `}
          >
            {navItems.map((item) => (
              <li
                key={item.path}
                className="w-full md:w-40 h-12 md:h-3/5 flex justify-center items-center"
                onMouseEnter={() => setHoveredItem(item.path)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <Link
                  to={item.path}
                  className={`relative w-full h-full flex justify-center items-center rounded-xl 
                    transition-all duration-300 group
                    ${location.pathname === item.path 
                      ? 'bg-gradient-to-r from-orange-500/20 via-orange-400/20 to-orange-500/20 border border-orange-500/20' 
                      : 'hover:bg-neutral-700/50'
                    }
                  `}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className={`font-light text-lg md:text-xl transition-all duration-300
                    ${location.pathname === item.path 
                      ? 'text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500 font-medium' 
                      : 'text-gray-300 group-hover:text-orange-400'
                    }
                    ${hoveredItem === item.path ? 'scale-105' : ''}
                  `}>
                    {item.label}
                  </span>

                  {/* Active indicator */}
                  {location.pathname === item.path && (
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 
                                  bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500" />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      
      {/* Overlay for mobile menu */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
          aria-hidden="true"
        />
      )}
      
      {/* Spacer */}
      <div className="h-20" aria-hidden="true" />
    </>
  );
};

export default Navbar;