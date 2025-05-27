import React from 'react';
import { Brain, Rocket } from 'lucide-react';

const AiceHigh = () => {
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
            Inspired by Daniel Negreanu's insight that "too many players focus on physical tells," Aice High emerged as my exploration into merging AI-powered personality simulation with strategic poker gameplay. This project challenged me to create realistic AI opponents that communicate and behave like real players, bringing the psychological complexity of live poker to the digital realm.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-neutral-800/50 backdrop-blur-xl p-6 rounded-xl border border-orange-500/20 hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300">
              <h3 className="text-lg font-semibold text-orange-400 mb-2">AI Integration</h3>
              <p className="text-gray-300">
                Working with OpenAI's API to create distinct AI personalities was fascinating. Each opponent needed unique playing styles, verbal patterns, and strategic approaches while maintaining realistic poker decision-making capabilities.
              </p>
            </div>

            <div className="bg-neutral-800/50 backdrop-blur-xl p-6 rounded-xl border border-orange-500/20 hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300">
              <h3 className="text-lg font-semibold text-orange-400 mb-2">Game Logic</h3>
              <p className="text-gray-300">
                Implementing No-Limit Texas Hold'em rules from scratch taught me about complex state management and game flow. Building the betting system, hand evaluation, and pot calculation required careful attention to poker's intricate mechanics.
              </p>
            </div>

            <div className="bg-neutral-800/50 backdrop-blur-xl p-6 rounded-xl border border-orange-500/20 hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300">
              <h3 className="text-lg font-semibold text-orange-400 mb-2">Psychology & Strategy</h3>
              <p className="text-gray-300">
                Creating AI that provides verbal commentary while making strategic decisions pushed me to understand poker psychology. Balancing authentic behavior with competitive gameplay became a unique design challenge.
              </p>
            </div>

            <div className="bg-neutral-800/50 backdrop-blur-xl p-6 rounded-xl border border-orange-500/20 hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300">
              <h3 className="text-lg font-semibold text-orange-400 mb-2">Analytics System</h3>
              <p className="text-gray-300">
                Building comprehensive performance tracking taught me about data visualization and user analytics. Creating meaningful metrics that help players improve their game required deep understanding of poker strategy.
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
            <h3 className="text-xl font-semibold text-orange-400 mb-4">AI Personality System</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                10 unique AI personalities with distinct playing styles
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                Real-time verbal commentary and strategic insights
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                Psychological tells through betting patterns and speech
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                Adaptive AI behavior based on game dynamics
              </li>
            </ul>
          </div>

          <div className="bg-neutral-800/50 backdrop-blur-xl p-6 rounded-xl border border-orange-500/20">
            <h3 className="text-xl font-semibold text-orange-400 mb-4">Customizable Gameplay</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                Play against up to 5 AI opponents simultaneously
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                Hand-pick opponents or random selection for challenge
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                Hidden identity mode for mysterious gameplay
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                Standard 100 big blind starting stacks
              </li>
            </ul>
          </div>

          <div className="bg-neutral-800/50 backdrop-blur-xl p-6 rounded-xl border border-orange-500/20">
            <h3 className="text-xl font-semibold text-orange-400 mb-4">No-Limit Texas Hold'em</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                Full implementation of poker rules and mechanics
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                Dynamic betting system with all-in capabilities
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                Accurate hand evaluation and showdown resolution
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                Real-time pot calculation and side pot management
              </li>
            </ul>
          </div>

          <div className="bg-neutral-800/50 backdrop-blur-xl p-6 rounded-xl border border-orange-500/20">
            <h3 className="text-xl font-semibold text-orange-400 mb-4">Performance Analytics</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                Comprehensive game statistics tracking
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                Detailed post-game performance insights
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                Pattern analysis for strategy refinement
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                Historical data for long-term improvement tracking
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AiceHigh;