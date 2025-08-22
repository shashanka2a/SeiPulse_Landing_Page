import React from 'react';
import { ArrowUpRight, Shield, Zap, Download } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';

export const PaymentsSection: React.FC = () => {
  return (
    <section className="py-40 px-6 bg-gradient-to-br from-purple-100/40 via-blue-100/30 to-teal-100/40 relative">
      {/* Curved Section Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <svg className="relative block w-full h-20" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-purple-50/70"></path>
        </svg>
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-32">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-slate-900">
            Instant P2P Payments
          </h2>
          <p className="text-xl text-slate-700 max-w-2xl mx-auto">
            Send money like texting. AI-powered security. Zero fees.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 mb-20">
          <Card className="p-12 text-center hover:shadow-2xl hover:scale-105 transition-all duration-500 border-0 bg-gradient-to-br from-white/90 via-purple-50/80 to-blue-50/80 backdrop-blur-sm rounded-3xl shadow-lg">
            <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-blue-500 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl hover:shadow-purple-400/40 transition-all duration-300">
              <Zap size={40} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-6 text-slate-900">Lightning Fast</h3>
            <p className="text-slate-800 text-lg leading-loose">
              Sub-second transactions with @handles, QR codes, or phone numbers
            </p>
          </Card>

          <Card className="p-12 text-center hover:shadow-2xl hover:scale-105 transition-all duration-500 border-0 bg-gradient-to-br from-white/90 via-blue-50/80 to-cyan-50/80 backdrop-blur-sm rounded-3xl shadow-lg">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl hover:shadow-blue-400/40 transition-all duration-300">
              <Shield size={40} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-6 text-slate-900">AI Security</h3>
            <p className="text-slate-800 text-lg leading-loose">
              Real-time fraud detection and risk assessment for every transaction
            </p>
          </Card>

          <Card className="p-12 text-center hover:shadow-2xl hover:scale-105 transition-all duration-500 border-2 border-gradient-to-r from-emerald-400 to-teal-500 bg-gradient-to-br from-white/95 via-emerald-50/90 to-teal-50/90 backdrop-blur-sm rounded-3xl shadow-xl relative overflow-hidden">
            {/* Highlight Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/10 to-teal-500/10 rounded-3xl"></div>
            <div className="relative z-10">
              <div className="w-24 h-24 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl hover:shadow-emerald-400/50 transition-all duration-300 ring-4 ring-emerald-400/20">
                <ArrowUpRight size={40} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-6 text-slate-900">Zero Fees</h3>
              <p className="text-slate-800 text-lg leading-loose">
                No hidden charges. Keep 100% of your money where it belongs
              </p>
            </div>
          </Card>
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 hover:scale-105 hover:shadow-2xl hover:shadow-teal-500/40 px-12 py-6 text-xl rounded-full shadow-lg transition-all duration-300">
            <ArrowUpRight className="mr-3" size={24} />
            View Demo
          </Button>
        </div>
      </div>
    </section>
  );
};