import React from 'react';
import { Download, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

export const FinalCTASection: React.FC = () => {
  return (
    <section className="py-32 px-6 bg-gradient-to-br from-slate-900 via-blue-900 to-teal-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-teal-200 to-cyan-300 bg-clip-text text-transparent">
          Ready to Pulse?
        </h2>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Join thousands using the fastest crypto payments on Sei blockchain
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white border-0 px-12 py-6 text-xl shadow-2xl shadow-teal-500/25 hover:shadow-teal-500/40 transition-all duration-300 rounded-2xl"
          >
            <Download className="mr-3" size={28} />
            Download SeiPulse
          </Button>
          
          <Button 
            size="lg" 
            variant="outline"
            className="border-2 border-teal-400/50 text-teal-200 hover:bg-teal-400/10 px-12 py-6 text-xl backdrop-blur-sm rounded-2xl"
          >
            View Demo
            <ArrowRight className="ml-3" size={24} />
          </Button>
        </div>

        {/* Sei Blockchain Badge */}
        <div className="inline-flex items-center space-x-3 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
          <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-bold">S</span>
          </div>
          <span className="text-white font-medium">Powered by Sei Blockchain</span>
        </div>
      </div>
    </section>
  );
};