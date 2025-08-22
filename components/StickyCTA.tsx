import React, { useState, useEffect } from 'react';
import { Play } from 'lucide-react'; // better icon for "Try Now"
import { Button } from './ui/button';

export const StickyCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Show sticky CTA after scrolling past hero section
      setIsVisible(scrollPosition > windowHeight * 0.8);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom-2 duration-300">
      <Button 
        asChild
        size="lg" 
        className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50 text-white border-0 px-8 py-4 text-lg shadow-2xl shadow-blue-500/30 transition-all duration-300 rounded-full animate-pulse hover:animate-none"
      >
        <a href="https://pay.seipulse.app" target="_blank" rel="noopener noreferrer">
          <Play className="mr-2" size={20} />
          Try Now
        </a>
      </Button>
    </div>
  );
};
