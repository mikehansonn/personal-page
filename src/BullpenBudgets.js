import React from 'react';
import { Brain, Rocket } from 'lucide-react';

const BullpenBudgets = () => {
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
            Bullpen Budgets emerged from my passion for baseball analytics, evolving into a sophisticated tool for MLB analysts and sports bettors. The project served as an exciting introduction to web scraping and cloud services, allowing me to blend technical learning with my love for America's pastime.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-neutral-800/50 backdrop-blur-xl p-6 rounded-xl border border-orange-500/20 hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300">
              <h3 className="text-lg font-semibold text-orange-400 mb-2">Frontend Development</h3>
              <p className="text-gray-300">
                Building with Node.js and HTML opened new horizons in web development. The static webpage design taught me valuable lessons about creating intuitive, data-rich interfaces that serve both casual fans and professional analysts.
              </p>
            </div>

            <div className="bg-neutral-800/50 backdrop-blur-xl p-6 rounded-xl border border-orange-500/20 hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300">
              <h3 className="text-lg font-semibold text-orange-400 mb-2">Data Collection</h3>
              <p className="text-gray-300">
                Diving into BeautifulSoup4 for web scraping was enlightening. The exploration of both BS4 and Selenium helped me understand the nuances of automated data collection and choose the perfect tool for our specific needs.
              </p>
            </div>

            <div className="bg-neutral-800/50 backdrop-blur-xl p-6 rounded-xl border border-orange-500/20 hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300">
              <h3 className="text-lg font-semibold text-orange-400 mb-2">Cloud Infrastructure</h3>
              <p className="text-gray-300">
                Leveraging AWS S3 Buckets and Lambda Functions introduced me to the world of cloud computing. Learning Route 53 for domain management completed the picture of modern web application deployment.
              </p>
            </div>

            <div className="bg-neutral-800/50 backdrop-blur-xl p-6 rounded-xl border border-orange-500/20 hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300">
              <h3 className="text-lg font-semibold text-orange-400 mb-2">Automation</h3>
              <p className="text-gray-300">
                Creating automated data collection pipelines taught me the importance of reliable, scalable systems. The challenge of processing data for all 30 MLB teams pushed me to optimize every aspect of the application.
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
            <h3 className="text-xl font-semibold text-orange-400 mb-4">Real-Time Analytics</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                Track the latest 5-day performance history for every MLB bullpen
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                Monitor individual pitcher workload with 3, 7, and 14-day pitch counts
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                Automatic daily updates for all 30 MLB teams
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                Historical trend analysis for informed decision-making
              </li>
            </ul>
          </div>

          <div className="bg-neutral-800/50 backdrop-blur-xl p-6 rounded-xl border border-orange-500/20">
            <h3 className="text-xl font-semibold text-orange-400 mb-4">User Experience</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                Customize your dashboard with up to 10 favorite teams
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                Quick-access favorites bar for rapid team switching
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                Intuitive interface designed for both casual fans and professionals
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                Mobile-responsive design for on-the-go analysis
              </li>
            </ul>
          </div>

          <div className="bg-neutral-800/50 backdrop-blur-xl p-6 rounded-xl border border-orange-500/20">
            <h3 className="text-xl font-semibold text-orange-400 mb-4">Advanced Statistics</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                Comprehensive pitcher usage patterns and trends
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                Detailed workload analysis for injury prevention
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                Performance metrics across multiple timeframes
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                Comparative analysis between different bullpens
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BullpenBudgets;