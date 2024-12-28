import React from 'react';
import { Brain, Rocket } from 'lucide-react';

const SPXRadar = () => {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Learning Experience Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500 mb-6 flex items-center gap-2">
          <Brain size={24} className="text-white" />
          Learning Experience
        </h2>
        
        <div className="prose max-w-none text-gray-300">
          <p className="mb-8">
            SPX Radar marked my first venture into full-stack development, creating an intelligent trend analyzer for S&P 500 stocks. This project bridges the gap between complex market data and actionable insights, serving as a supportive tool for investors looking to spot emerging patterns that might escape the human eye.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-neutral-800/50 backdrop-blur-xl p-6 rounded-xl border border-orange-500/20 hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300">
              <h3 className="text-lg font-semibold text-orange-400 mb-2">Frontend Journey</h3>
              <p className="text-gray-300">
                My introduction to web development began here, using Flask to create dynamic interfaces that display real-time market data. Working with HTML and CSS taught me fundamental principles of user interface design and data visualization.
              </p>
            </div>

            <div className="bg-neutral-800/50 backdrop-blur-xl p-6 rounded-xl border border-orange-500/20 hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300">
              <h3 className="text-lg font-semibold text-orange-400 mb-2">Real-Time Data Processing</h3>
              <p className="text-gray-300">
                Integrating yfinance for live market data opened my eyes to the possibilities of real-time applications. The challenge of processing and analyzing data every 15 minutes taught me valuable lessons about efficient data handling.
              </p>
            </div>

            <div className="bg-neutral-800/50 backdrop-blur-xl p-6 rounded-xl border border-orange-500/20 hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300">
              <h3 className="text-lg font-semibold text-orange-400 mb-2">Cloud Deployment</h3>
              <p className="text-gray-300">
                Deploying on PythonAnywhere was my first experience with cloud hosting. Managing continuous tasks and maintaining uptime provided practical insights into production environment challenges.
              </p>
            </div>

            <div className="bg-neutral-800/50 backdrop-blur-xl p-6 rounded-xl border border-orange-500/20 hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300">
              <h3 className="text-lg font-semibold text-orange-400 mb-2">Data Architecture</h3>
              <p className="text-gray-300">
                Implementing pickle files for data storage taught me about data persistence and state management. This experience laid the groundwork for working with more advanced databases in future projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="">
        <h2 className="text-2xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500 mb-6 flex items-center gap-2">
          <Rocket size={24} className="text-white" />
          Key Features
        </h2>
        
        <div className="space-y-4">
          <div className="bg-neutral-800/50 backdrop-blur-xl p-6 rounded-xl border border-orange-500/20">
            <h3 className="text-xl font-semibold text-orange-400 mb-4">Smart Analysis</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                Dynamic stock grading updated every 15 minutes
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                Comprehensive 0-125 grading scale for accurate assessment
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                5-hour future trend projections
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                Real-time data integration through yfinance
              </li>
            </ul>
          </div>

          <div className="bg-neutral-800/50 backdrop-blur-xl p-6 rounded-xl border border-orange-500/20">
            <h3 className="text-xl font-semibold text-orange-400 mb-4">Investment Tools</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                Highlighted timeframe boxes for targeted investment planning
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                High-risk opportunity identification system
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                Custom stock search within S&P 500 index
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                Top-rated stock recommendations
              </li>
            </ul>
          </div>

          <div className="bg-neutral-800/50 backdrop-blur-xl p-6 rounded-xl border border-orange-500/20">
            <h3 className="text-xl font-semibold text-orange-400 mb-4">User Experience</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                Intuitive interface for quick market analysis
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                Visual timeframe indicators for easy trend spotting
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                Flexible search functionality for S&P 500 stocks
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                Regular updates for reliable decision support
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SPXRadar;