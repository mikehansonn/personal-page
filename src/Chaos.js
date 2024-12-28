import React from 'react';
import { Brain, Rocket } from 'lucide-react';

const Chaos = () => {
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
            I recently built Chaos Fantasy, a full-featured fantasy football application using the FARM stack (FastAPI, React, MongoDB). This has been my most ambitious and rewarding project during my time at university, pushing me to learn new technologies and solve complex problems along the way.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-neutral-800/50 backdrop-blur-xl p-6 rounded-xl border border-orange-500/20 hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300">
              <h3 className="text-lg font-semibold text-orange-400 mb-2">Frontend</h3>
              <p className="text-gray-300">
                While I had some experience with Tailwind CSS, this project let me dive deeper into its more advanced features and best practices.
              </p>
            </div>

            <div className="bg-neutral-800/50 backdrop-blur-xl p-6 rounded-xl border border-orange-500/20 hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300">
              <h3 className="text-lg font-semibold text-orange-400 mb-2">Backend</h3>
              <p className="text-gray-300">
                Coming from Flask and Django, FastAPI was a fresh experience. I particularly enjoyed learning about its streamlined database connectivity and inline data manipulation capabilities.
              </p>
            </div>

            <div className="bg-neutral-800/50 backdrop-blur-xl p-6 rounded-xl border border-orange-500/20 hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300">
              <h3 className="text-lg font-semibold text-orange-400 mb-2">Data Collection</h3>
              <p className="text-gray-300">
                Building Celery scraper workers was entirely new to me. The well-documented beat worker system made gathering real-time NFL data much more manageable than I expected.
              </p>
            </div>

            <div className="bg-neutral-800/50 backdrop-blur-xl p-6 rounded-xl border border-orange-500/20 hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300">
              <h3 className="text-lg font-semibold text-orange-400 mb-2">Database</h3>
              <p className="text-gray-300">
                Using MongoDB Atlas to host my data taught me valuable lessons about handling large data collections efficiently. The early stages involved some trial and error, but the learning curve was worth it for the flexibility MongoDB offers.
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
            <h3 className="text-xl font-semibold text-orange-400 mb-4">Getting Started</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                Create an account (or use the demo credentials)
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                Create your own league or join friends with an invite ID
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                Flexible league sizes from 2-20 players
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                Live draft system with real-time updates
              </li>
            </ul>
          </div>

          <div className="bg-neutral-800/50 backdrop-blur-xl p-6 rounded-xl border border-orange-500/20">
            <h3 className="text-xl font-semibold text-orange-400 mb-4">Weekly Gameplay</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                Edit your team lineup throughout the week
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                Scout the waiver wire for available players
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                Rosters lock Thursday at 8:00 PM
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                Watch NFL games and track your players' performance in real-time
              </li>
            </ul>
          </div>

          <div className="bg-neutral-800/50 backdrop-blur-xl p-6 rounded-xl border border-orange-500/20">
            <h3 className="text-xl font-semibold text-orange-400 mb-4">League Management</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                View detailed matchup breakdowns
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                Track league standings and team records
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                Make roster moves between matchups
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                Plan ahead with upcoming matchup previews
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Chaos;