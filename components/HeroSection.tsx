import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { Button } from './ui/button';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-200/30 rounded-full blur-2xl animate-ping" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Logo */}
        <div className="mb-12">
          <div className="inline-flex items-center space-x-4 mb-8">
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-blue-500 rounded-3xl flex items-center justify-center shadow-2xl">
                <div className="w-10 h-10 bg-white rounded-full animate-pulse" />
              </div>
              <div className="absolute -inset-3 bg-gradient-to-br from-purple-400/30 to-blue-500/30 rounded-3xl blur-lg animate-pulse" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">SeiPulse</h1>
          </div>
        </div>

        {/* Main Tagline */}
        <div className="mb-20">
          <h2 className="text-7xl md:text-9xl font-bold mb-8 text-slate-900 leading-tight animate-pulse">
            Send. Watch. Pulse.
          </h2>
          <p className="text-2xl md:text-3xl text-slate-800 mb-8 max-w-3xl mx-auto font-light leading-relaxed">
            The future of crypto payments and portfolio tracking
          </p>
          <p className="text-lg text-slate-700 max-w-2xl mx-auto leading-loose">
            Lightning-fast P2P payments with AI-powered security on Sei blockchain
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-24">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0 px-12 py-6 text-xl shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/50 hover:shadow-2xl hover:scale-105 transition-all duration-300 rounded-full animate-pulse hover:animate-none"
          >
            <Download className="mr-3" size={24} />
            Download SeiPulse
          </Button>
          
          <Button 
            size="lg" 
            variant="outline"
            className="border-2 border-purple-300 text-purple-700 hover:bg-purple-100 hover:border-purple-400 hover:scale-105 px-10 py-5 text-xl transition-all duration-300 rounded-full"
          >
            Learn More
            <ArrowRight className="ml-3" size={20} />
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center bg-white/70 backdrop-blur-sm rounded-3xl p-6 shadow-lg">
            <div className="text-4xl font-bold text-purple-600 mb-2">50K+</div>
            <div className="text-slate-600 text-sm font-medium">Users</div>
          </div>
          <div className="text-center bg-white/70 backdrop-blur-sm rounded-3xl p-6 shadow-lg">
            <div className="text-4xl font-bold text-blue-600 mb-2">$2.5M</div>
            <div className="text-slate-600 text-sm font-medium">Volume</div>
          </div>
          <div className="text-center bg-white/70 backdrop-blur-sm rounded-3xl p-6 shadow-lg">
            <div className="text-4xl font-bold text-pink-600 mb-2">99.9%</div>
            <div className="text-slate-600 text-sm font-medium">Uptime</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-purple-500 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-purple-500 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};