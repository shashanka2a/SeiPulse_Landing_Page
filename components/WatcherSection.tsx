import React from 'react';
import { TrendingUp, Activity, BarChart3 } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';

export const WatcherSection: React.FC = () => {
  return (
    <section className="py-40 px-6 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #E4E2F6 0%, #D9F3F3 50%, #E0E7FF 100%)' }}>
      {/* Wave Section Divider with Gradient Fill */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <svg className="relative block w-full h-24" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#E4E2F6', stopOpacity: 0.4 }} />
              <stop offset="50%" style={{ stopColor: '#D9F3F3', stopOpacity: 0.3 }} />
              <stop offset="100%" style={{ stopColor: '#E0E7FF', stopOpacity: 0.4 }} />
            </linearGradient>
          </defs>
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill="url(#waveGradient)"></path>
        </svg>
      </div>

      {/* Feathered Transition Overlay */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-purple-100/20 via-blue-100/15 to-transparent"></div>

      {/* Subtle Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-200/15 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-teal-200/15 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-32">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-slate-900">
            Smart Portfolio Tracking
          </h2>
          <p className="text-xl text-slate-700 max-w-2xl mx-auto">
            AI-powered insights for memecoins, NFTs, and wallet monitoring
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 mb-20">
          <Card className="p-12 text-center hover:shadow-2xl hover:scale-105 transition-all duration-500 border-0 bg-gradient-to-br from-white/90 via-purple-50/80 to-pink-50/80 backdrop-blur-sm rounded-3xl shadow-lg">
            <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-500 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl hover:shadow-purple-400/40 transition-all duration-300">
              <TrendingUp size={40} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-6 text-slate-900">Real-Time Data</h3>
            <p className="text-slate-800 text-lg leading-loose">
              Live price feeds and market analysis across all major exchanges
            </p>
          </Card>

          <Card className="p-12 text-center hover:shadow-2xl hover:scale-105 transition-all duration-500 border-0 bg-gradient-to-br from-white/90 via-blue-50/80 to-purple-50/80 backdrop-blur-sm rounded-3xl shadow-lg">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl hover:shadow-blue-400/40 transition-all duration-300">
              <Activity size={40} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-6 text-slate-900">AI Insights</h3>
            <p className="text-slate-800 text-lg leading-loose">
              Smart algorithms provide intelligent trading recommendations
            </p>
          </Card>

          <Card className="p-12 text-center hover:shadow-2xl hover:scale-105 transition-all duration-500 border-0 bg-gradient-to-br from-white/90 via-pink-50/80 to-blue-50/80 backdrop-blur-sm rounded-3xl shadow-lg">
            <div className="w-24 h-24 bg-gradient-to-br from-pink-400 to-blue-500 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl hover:shadow-pink-400/40 transition-all duration-300">
              <BarChart3 size={40} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-6 text-slate-900">Advanced Charts</h3>
            <p className="text-slate-800 text-lg leading-loose">
              Professional-grade tools with technical indicators
            </p>
          </Card>
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/40 px-12 py-6 text-xl rounded-full shadow-lg transition-all duration-300">
            <BarChart3 className="mr-3" size={24} />
            Explore Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
};