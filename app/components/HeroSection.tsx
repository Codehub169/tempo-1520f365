import React from 'react';
import AnimatedLogo from './AnimatedLogo';
import { ChevronDown } from 'lucide-react'; // Using lucide-react for icons

const HeroSection: React.FC = () => {
  return (
    <section 
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center p-8 bg-softOffWhite text-nearBlack relative overflow-hidden"
    >
      {/* Main content container */}
      <div className="text-center z-10 flex flex-col items-center">
        {/* Animated Logo */}
        <div className="mb-10 transform scale-110 md:scale-125 lg:scale-150">
          <AnimatedLogo />
        </div>

        {/* Tagline */}
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-nearBlack mb-4 leading-tight">
          Where stories find their aesthetic.
        </h1>

        {/* Subtext */}
        <p className="font-sans text-lg sm:text-xl md:text-2xl text-darkGray max-w-xl md:max-w-2xl">
          Designs that whisper loud stories.
        </p>
      </div>

      {/* Smooth scroll-down indicator */}
      {/* This is a placeholder for ScrollIndicator.tsx or a more complex animation */}
      {/* For now, a simple bouncing chevron */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
        <a href="#story" aria-label="Scroll to next section">
          <ChevronDown 
            size={36} 
            className="text-mutedTerracotta animate-bounce"
            strokeWidth={1.5}
          />
        </a>
      </div>

      {/* Optional: Subtle background elements or gradients for visual depth if desired */}
      {/* Example: <div className="absolute inset-0 opacity-50 bg-gradient-to-br from-warmLightGray via-transparent to-softOffWhite"></div> */}
    </section>
  );
};

export default HeroSection;
