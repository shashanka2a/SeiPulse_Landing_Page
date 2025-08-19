import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { Button } from './ui/button';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-800 to-teal-900" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-400/30 rounded-full blur-2xl animate-ping" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Logo */}
        <div className="mb-12">
          <div className="inline-flex items-center space-x-4 mb-8">
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-3xl flex items-center justify-center shadow-2xl">
                <div className="w-10 h-10 bg-white rounded-full animate-pulse" />
              </div>
              <div className="absolute -inset-3 bg-gradient-to-br from-teal-400/50 to-cyan-500/50 rounded-3xl blur-lg animate-pulse" />
            </div>
            <h1 className="text-4xl font-bold text-white">SeiPulse</h1>
          </div>
        </div>

        {/* Main Tagline */}
        <div className="mb-16">
          <h2 className="text-7xl md:text-9xl font-bold mb-8 bg-gradient-to-r from-white via-teal-200 to-cyan-300 bg-clip-text text-transparent leading-tight">
            Send. Watch. Pulse.
          </h2>
          <p className="text-2xl md:text-3xl text-gray-300 mb-6 max-w-3xl mx-auto font-light">
            The future of crypto payments and portfolio tracking
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Lightning-fast P2P payments with AI-powered security on Sei blockchain
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white border-0 px-10 py-5 text-xl shadow-2xl shadow-teal-500/25 hover:shadow-teal-500/40 transition-all duration-300 rounded-2xl"
          >
            <Download className="mr-3" size={24} />
            Get Started
          </Button>
          
          <Button 
            size="lg" 
            variant="outline"
            className="border-2 border-teal-400/50 text-teal-200 hover:bg-teal-400/10 px-10 py-5 text-xl backdrop-blur-sm rounded-2xl"
          >
            Learn More
            <ArrowRight className="ml-3" size={20} />
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-teal-400/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-teal-400 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};