import React from 'react';
import { TrendingUp, Activity, BarChart3 } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';

export const WatcherSection: React.FC = () => {
  return (
    <section className="py-32 px-6 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Smart Portfolio Tracking
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            AI-powered insights for memecoins, NFTs, and wallet monitoring
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950 dark:to-red-950">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <TrendingUp size={32} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Real-Time Data</h3>
            <p className="text-muted-foreground">
              Live price feeds and market analysis across all major exchanges
            </p>
          </Card>

          <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Activity size={32} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">AI Insights</h3>
            <p className="text-muted-foreground">
              Smart algorithms provide intelligent trading recommendations
            </p>
          </Card>

          <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950 dark:to-cyan-950">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <BarChart3 size={32} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Advanced Charts</h3>
            <p className="text-muted-foreground">
              Professional-grade tools with technical indicators
            </p>
          </Card>
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-10 py-5 text-xl rounded-2xl">
            Explore Portfolio
            <BarChart3 className="ml-3" size={24} />
          </Button>
        </div>
      </div>
    </section>
  );
};