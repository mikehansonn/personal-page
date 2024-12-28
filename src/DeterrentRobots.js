import React from 'react';
import { Brain, Rocket } from 'lucide-react';
import robot1 from "./images/robot1.jpg";
import robot2 from "./images/robot2.jpg";
import robot3 from "./images/robot3.jpg";
import robot4 from "./images/robot4.jpg";

const DeterrentRobots = () => {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Header Section */}
      <div className="mb-6">
        <p className="text-gray-300 text-lg">
          (Robots pictured below)
        </p>
      </div>

      {/* Learning Experience Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500 mb-6 flex items-center gap-2">
          <Brain size={24} className="text-white" />
          Learning Experience
        </h2>
        
        <div className="prose max-w-none text-gray-300">
          <p className="mb-8">
            Inspired by a childhood near a pond plagued by geese, I developed a network of autonomous robots to manage wildlife presence in specific areas. This project became an exciting journey into robotics, combining hardware integration, distributed systems, and real-world problem-solving.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-neutral-800/50 backdrop-blur-xl p-6 rounded-xl border border-orange-500/20 hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300">
              <h3 className="text-lg font-semibold text-orange-400 mb-2">Hardware Integration</h3>
              <p className="text-gray-300">
                Working with Raspberry Pi, electronic compasses, and GPS-RTK modules taught me valuable lessons about hardware interfaces and precision navigation systems. Each robot became a self-contained unit capable of accurate positioning and movement.
              </p>
            </div>

            <div className="bg-neutral-800/50 backdrop-blur-xl p-6 rounded-xl border border-orange-500/20 hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300">
              <h3 className="text-lg font-semibold text-orange-400 mb-2">Distributed Systems</h3>
              <p className="text-gray-300">
                Building a central control server that coordinates multiple robots introduced me to distributed system architecture. Managing real-time data flow and robot coordination provided insights into scalable system design.
              </p>
            </div>

            <div className="bg-neutral-800/50 backdrop-blur-xl p-6 rounded-xl border border-orange-500/20 hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300">
              <h3 className="text-lg font-semibold text-orange-400 mb-2">Physical Design</h3>
              <p className="text-gray-300">
                Learning CAD for robot chassis design opened new possibilities in physical computing. Creating custom enclosures and mounts for electronic components helped me understand the intersection of hardware and software design.
              </p>
            </div>

            <div className="bg-neutral-800/50 backdrop-blur-xl p-6 rounded-xl border border-orange-500/20 hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300">
              <h3 className="text-lg font-semibold text-orange-400 mb-2">User Interface</h3>
              <p className="text-gray-300">
                Developing a Flask web interface for robot control taught me about creating intuitive human-machine interactions. The challenge of real-time monitoring and control pushed me to optimize both backend and frontend systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500 mb-6 flex items-center gap-2">
          <Rocket size={24} className="text-white" />
          Key Features
        </h2>
        
        <div className="space-y-4">
          <div className="bg-neutral-800/50 backdrop-blur-xl p-6 rounded-xl border border-orange-500/20">
            <h3 className="text-xl font-semibold text-orange-400 mb-4">Autonomous Navigation</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                Precision movement using GPS-RTK technology
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                Electronic compass guidance for accurate orientation
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                Custom patrol route programming
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                Dynamic area coverage algorithms
              </li>
            </ul>
          </div>

          <div className="bg-neutral-800/50 backdrop-blur-xl p-6 rounded-xl border border-orange-500/20">
            <h3 className="text-xl font-semibold text-orange-400 mb-4">Central Control System</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                Real-time robot position tracking
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                500ms data update frequency
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                Intelligent task distribution
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                Automated coverage optimization
              </li>
            </ul>
          </div>

          <div className="bg-neutral-800/50 backdrop-blur-xl p-6 rounded-xl border border-orange-500/20">
            <h3 className="text-xl font-semibold text-orange-400 mb-4">User Control Interface</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                Web-based control dashboard
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                Manual robot control capabilities
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                Real-time system monitoring
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                Custom patrol area definition
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="">
        <h2 className="text-2xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500 mb-6 flex items-center gap-2">
          Images
        </h2>
        <img alt='img1' src={robot1}></img>
        <img alt='img2' src={robot2}></img>
        <img alt='img3' src={robot3}></img>
        <img alt='img4' src={robot4}></img>
      </section>
    </div>
  );
};

export default DeterrentRobots;