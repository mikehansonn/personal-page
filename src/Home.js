import React from 'react';
import Logostack from './Logostack';

const Home = () => {
  return (
    // Make this div flex and use the full viewport height
    <div className="relative h-[calc(100vh-80px)] z-10 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0" />
      {/* Remove the flex justify-center and items-center from here since it's now on the parent */}
      <div className="relative z-10 mx-auto px-4">
        {/* Main Content */}
        <div className="flex flex-col items-center justify-center">
          {/* Rest of the content remains the same */}
          <div className="text-center mb-4">
            <h2 className="text-4xl font-light">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600">
                Hello There! I'm
              </span>
            </h2>
          </div>

          <div className="rounded-2xl">
            <div className="inline-block">
              <h1 className="font-light text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-gray-200 whitespace-nowrap
                            animate-typing typing-animation border-r-[0.1em] border-orange-500
                            overflow-hidden w-0">
                Mike Hanson
              </h1>
            </div>
          </div>

          <div className="mt-8">
            <Logostack />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes typing {
          from { width: 0 }
          to { width: 100% }
        }
        
        @keyframes blink {
          from { border-color: transparent }
          to { border-color: rgb(249, 115, 22) }
        }
        
        .typing-animation {
          animation: typing 2s steps(20, end) forwards,
                     blink 1s infinite;
        }
      `}</style>
    </div>
  );
};

export default Home;