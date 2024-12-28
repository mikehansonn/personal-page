import React from 'react';
import { Mail, Linkedin, Copy, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('michaelhanson2030@gmail.com');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="relative h-[calc(100vh-80px)] z-10 py-16">
      <div className="absolute inset-0 z-0" />
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-extralight mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600">
              Let's Connect
            </span>
          </h1>
          <p className="text-gray-300 text-lg">
            I'm always interested in discussing new opportunities and projects
          </p>
        </div>

        {/* Contact Card */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-neutral-800/50 backdrop-blur-xl rounded-3xl p-10 shadow-2xl 
            transform transition-all duration-500 hover:shadow-orange-500/20 border border-orange-500/20">
            
            {/* Name Section */}
            <div className="mb-10 pb-8 border-b border-neutral-700/50">
              <h2 className="text-4xl font-light text-transparent bg-clip-text bg-gradient-to-r 
                from-orange-400 via-orange-500 to-orange-600">
                Mike Hanson
              </h2>
            </div>

            {/* Contact Methods */}
            <div className="space-y-8">
              {/* Email */}
              <div className="group">
                <h3 className="text-gray-400 text-sm mb-2">EMAIL</h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-neutral-700/50 rounded-xl">
                      <Mail size={20} className="text-orange-500" />
                    </div>
                    <a href="mailto:michaelhanson2030@gmail.com" 
                      className="text-gray-200 hover:text-orange-400 transition-colors">
                      michaelhanson2030@gmail.com
                    </a>
                  </div>
                  <button
                    onClick={copyEmail}
                    className="p-2 hover:bg-neutral-700/50 rounded-lg transition-colors"
                    aria-label="Copy email"
                  >
                    {copied ? (
                      <CheckCircle2 size={20} className="text-green-500" />
                    ) : (
                      <Copy size={20} className="text-gray-400 group-hover:text-orange-400" />
                    )}
                  </button>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="group">
                <h3 className="text-gray-400 text-sm mb-2">LINKEDIN</h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-neutral-700/50 rounded-xl">
                      <Linkedin size={20} className="text-orange-500" />
                    </div>
                    <a href="https://www.linkedin.com/in/michael-hanson-6b605824a/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-200 hover:text-orange-400 transition-colors">
                      Michael Hanson
                    </a>
                  </div>
                  <a href="https://www.linkedin.com/in/michael-hanson-6b605824a/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 hover:bg-neutral-700/50 rounded-lg transition-colors">
                    <div className="transform rotate-45">
                      <Mail size={20} className="text-gray-400 group-hover:text-orange-400" />
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-12 pt-8 border-t border-neutral-700/50">
              <p className="text-gray-400 text-center">
                Feel free to reach out anytime. I'll get back to you as soon as possible!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;