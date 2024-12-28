import React, { useState, useEffect, useRef } from 'react';

const Background = () => {
  const [dots, setDots] = useState([]);
  const backgroundRef = useRef(null);

  useEffect(() => {
    // Generate initial dots
    const numberOfDots = 70;
    const newDots = Array.from({ length: numberOfDots }, () => ({
      id: Math.random(),
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      duration: (Math.random() * 5 + 5),
      translateX: (Math.random() - 0.5) * 200,
      translateY: (Math.random() - 0.5) * 200
    }));
    setDots(newDots);
  }, []);

  return (
    <div ref={backgroundRef} className="fixed inset-0 w-full h-full bg-neutral-700 pointer-events-none overflow-hidden">
      {dots.map((dot) => (
        <div
          key={dot.id}
          className="absolute w-1 h-1 bg-orange-400 rounded-full"
          style={{
            top: dot.top,
            left: dot.left,
            animation: `${dot.duration}s moveDot infinite linear`
          }}
        />
      ))}
      
      <style jsx>{`
        @keyframes moveDot {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(${dots[0]?.translateX || 0}px, ${dots[0]?.translateY || 0}px); }
        }
      `}</style>
    </div>
  );
};

export default Background;