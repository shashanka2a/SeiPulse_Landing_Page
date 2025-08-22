import React from 'react';
import { Download, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

export const FinalCTASection: React.FC = () => {
  return (
    <section className="py-32 px-6 bg-gradient-to-br from-purple-600 via-indigo-700 to-blue-800 relative overflow-hidden">
      {/* Diagonal Section Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <svg className="relative block w-full h-32" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" className="fill-lavender-100/50" style={{fill: '#E4E2F6'}}></path>
        </svg>
      </div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-400/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-5xl md:text-7xl font-bold mb-8 text-white drop-shadow-lg">
          Ready to Pulse?
        </h2>
        
        <p className="text-xl md:text-2xl text-purple-100 mb-12 max-w-2xl mx-auto drop-shadow-sm leading-relaxed">
          Join thousands using the fastest crypto payments on Sei blockchain
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50 text-white border-0 px-12 py-6 text-xl shadow-2xl shadow-blue-500/30 transition-all duration-300 rounded-full animate-pulse hover:animate-none"
          >
            <Download className="mr-3" size={28} />
            Download SeiPulse
          </Button>
          
          <Button 
            size="lg" 
            variant="outline"
            className="border-2 border-purple-200 text-purple-100 hover:bg-purple-500/20 hover:border-purple-100 hover:scale-105 px-12 py-6 text-xl transition-all duration-300 rounded-full backdrop-blur-sm"
          >
            View Demo
            <ArrowRight className="ml-3" size={24} />
          </Button>
        </div>

        {/* Sei Blockchain Badge */}
        <div className="inline-flex items-center space-x-3 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full border border-purple-300/50">
          <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-bold">S</span>
          </div>
          <span className="text-purple-100 font-medium">Powered by Sei Blockchain</span>
        </div>
      </div>
    </section>
  );
};