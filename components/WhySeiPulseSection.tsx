import React from 'react';
import { Shield, Zap, Heart, Lock, Smartphone, Globe, Users, Award } from 'lucide-react';
import { Card } from './ui/card';

export const WhySeiPulseSection: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-blue-600 dark:from-white dark:to-blue-300 bg-clip-text text-transparent">
            Why Choose SeiPulse?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Built on Sei blockchain with cutting-edge technology for the ultimate crypto experience
          </p>
        </div>

        {/* Main Benefits */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Security */}
          <Card className="p-8 text-center hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950">
            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Shield size={40} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Bank-Grade Security</h3>
            <p className="text-muted-foreground mb-6">
              Multi-layer encryption, AI fraud detection, and biometric authentication keep your assets safe 24/7
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Lock size={16} className="text-green-600" />
                <span className="text-sm">256-bit encryption</span>
              </div>
              <div className="flex items-center space-x-3">
                <Shield size={16} className="text-green-600" />
                <span className="text-sm">AI-powered risk assessment</span>
              </div>
              <div className="flex items-center space-x-3">
                <Smartphone size={16} className="text-green-600" />
                <span className="text-sm">Biometric authentication</span>
              </div>
            </div>
          </Card>

          {/* Speed */}
          <Card className="p-8 text-center hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950 dark:to-cyan-950">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Zap size={40} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Lightning Fast</h3>
            <p className="text-muted-foreground mb-6">
              Powered by Sei's high-performance blockchain for instant transactions and real-time updates
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Zap size={16} className="text-blue-600" />
                <span className="text-sm">Sub-second transactions</span>
              </div>
              <div className="flex items-center space-x-3">
                <Globe size={16} className="text-blue-600" />
                <span className="text-sm">Global availability</span>
              </div>
              <div className="flex items-center space-x-3">
                <Award size={16} className="text-blue-600" />
                <span className="text-sm">99.9% uptime guarantee</span>
              </div>
            </div>
          </Card>

          {/* User-Friendly */}
          <Card className="p-8 text-center hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Heart size={40} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Made for Everyone</h3>
            <p className="text-muted-foreground mb-6">
              Intuitive design that makes crypto accessible to beginners while powerful enough for experts
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Heart size={16} className="text-purple-600" />
                <span className="text-sm">Intuitive interface</span>
              </div>
              <div className="flex items-center space-x-3">
                <Users size={16} className="text-purple-600" />
                <span className="text-sm">24/7 customer support</span>
              </div>
              <div className="flex items-center space-x-3">
                <Smartphone size={16} className="text-purple-600" />
                <span className="text-sm">Mobile-first design</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Stats Section */}
        <div className="text-center mb-16">
          <h3 className="text-2xl font-bold mb-8">Trusted by Thousands</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">50,000+</div>
              <div className="text-muted-foreground">Active Users</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">$2.5M</div>
              <div className="text-muted-foreground">Total Volume</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">150+</div>
              <div className="text-muted-foreground">Supported Tokens</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-cyan-600 mb-2">99.9%</div>
              <div className="text-muted-foreground">Uptime</div>
            </div>
          </div>
        </div>

        {/* Sei Blockchain Benefits */}
        <Card className="p-8 bg-gradient-to-r from-slate-900 to-blue-900 text-white border-0">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Built on Sei Blockchain</h3>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Experience the fastest blockchain optimized for trading with parallel processing and instant finality
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-300 mb-2">380ms</div>
                <div className="text-blue-200">Block Time</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-300 mb-2">22,000</div>
                <div className="text-blue-200">TPS</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-300 mb-2">$0.0001</div>
                <div className="text-blue-200">Average Fee</div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};