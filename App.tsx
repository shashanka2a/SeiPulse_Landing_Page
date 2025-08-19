import React from 'react';
import { HeroSection } from './components/HeroSection';
import { PaymentsSection } from './components/PaymentsSection';
import { WatcherSection } from './components/WatcherSection';
import { WhySeiPulseSection } from './components/WhySeiPulseSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <PaymentsSection />
      <WatcherSection />
      <WhySeiPulseSection />
      <Footer />
    </div>
  );
}