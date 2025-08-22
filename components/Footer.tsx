import React from 'react';
import { Twitter, Github, MessageCircle, ArrowUp } from 'lucide-react';
import { Button } from './ui/button';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-slate-100 to-purple-100 dark:from-slate-900 dark:to-slate-800 text-slate-800 dark:text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 mb-12">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-blue-500 rounded-2xl flex items-center justify-center">
                <div className="w-6 h-6 bg-white rounded-full" />
              </div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">SeiPulse</h3>
            </div>
            <p className="text-slate-600 dark:text-slate-300 max-w-md">
              The future of crypto payments and portfolio tracking on Sei blockchain.
            </p>
          </div>

          {/* Social Links - Updated to pill style */}
          <div className="flex space-x-4">
            <Button variant="ghost" size="icon" className="text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-100 dark:hover:bg-purple-900 w-12 h-12 rounded-full">
              <Twitter size={24} />
            </Button>
            <Button variant="ghost" size="icon" className="text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-100 dark:hover:bg-purple-900 w-12 h-12 rounded-full">
              <Github size={24} />
            </Button>
            <Button variant="ghost" size="icon" className="text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-100 dark:hover:bg-purple-900 w-12 h-12 rounded-full">
              <MessageCircle size={24} />
            </Button>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-300 dark:border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-slate-500 dark:text-slate-400">
              <p>© 2024 SeiPulse. All rights reserved.</p>
              <div className="flex space-x-6">
                <a href="#" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Privacy</a>
                <a href="#" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Terms</a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-slate-500 dark:text-slate-400">
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
                className="text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-100 dark:hover:bg-purple-900 rounded-full"
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