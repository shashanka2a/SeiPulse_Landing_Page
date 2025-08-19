import React from 'react';
import { Twitter, Github, MessageCircle, ArrowUp } from 'lucide-react';
import { Button } from './ui/button';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 mb-12">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-2xl flex items-center justify-center">
                <div className="w-6 h-6 bg-white rounded-full" />
              </div>
              <h3 className="text-3xl font-bold">SeiPulse</h3>
            </div>
            <p className="text-gray-400 max-w-md">
              The future of crypto payments and portfolio tracking on Sei blockchain.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-4">
            <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-gray-800 w-12 h-12">
              <Twitter size={24} />
            </Button>
            <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-gray-800 w-12 h-12">
              <Github size={24} />
            </Button>
            <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-gray-800 w-12 h-12">
              <MessageCircle size={24} />
            </Button>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-gray-400">
              <p>© 2024 SeiPulse. All rights reserved.</p>
              <div className="flex space-x-6">
                <a href="#" className="hover:text-white transition-colors">Privacy</a>
                <a href="#" className="hover:text-white transition-colors">Terms</a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-gray-400">
                <span className="text-sm">Powered by</span>
                <div className="w-6 h-6 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">S</span>
                </div>
                <span className="text-sm font-medium">Sei</span>
              </div>

              <Button 
                variant="ghost" 
                size="icon" 
                onClick={scrollToTop}
                className="text-gray-400 hover:text-white hover:bg-gray-800"
              >
                <ArrowUp size={20} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};