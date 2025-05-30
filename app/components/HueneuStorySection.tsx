'use client';

import React, { useState, useEffect, useRef } from 'react';

const HueneuStorySection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const whoKnewRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Animate only once
        }
      },
      {
        rootMargin: '0px',
        threshold: 0.5, // Trigger when 50% of the element is visible
      }
    );

    if (whoKnewRef.current) {
      observer.observe(whoKnewRef.current);
    }

    return () => {
      if (whoKnewRef.current) {
        observer.unobserve(whoKnewRef.current);
      }
    };
  }, []);

  return (
    <section
      id="story"
      className="min-h-screen bg-warmLightGray py-20 md:py-32 px-6 md:px-12 flex flex-col justify-center items-center text-center"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-nearBlack mb-8">
          The <span className="text-mutedTerracotta">hueneu</span> Story
        </h2>
        <p className="font-sans text-lg md:text-xl text-darkGray mb-6 leading-relaxed">
          At hueneu, we believe in the power of duality. {'"Hue"'} represents the vibrant bursts of creativity, the unexpected palettes, the bold strokes that make a design memorable. {'"Neu"'} signifies the grounding neutrality, the calm confidence, the intentional white space that allows stories to breathe and resonate.
        </p>
        <p className="font-sans text-lg md:text-xl text-darkGray mb-12 leading-relaxed">
          It's this dance between vivid expression and serene composure that defines our approach. We craft designs that are quietly striking, deeply personal, and always evocative. We find the perfect equilibrium where color and calm coexist, creating experiences that feel both familiar and wonderfully new.
        </p>
        <div className="relative py-4">
          <p className="font-sans text-2xl md:text-3xl text-nearBlack leading-relaxed">
            It's the art of surprise in simplicity. The whisper that echoes. The moment you think...
            <span
              ref={whoKnewRef}
              className={`inline-block font-display text-mutedTerracotta ml-2 transition-all duration-1000 ease-in-out transform ${isVisible ? 'opacity-100 translate-y-0 scale-110' : 'opacity-0 translate-y-5'}`}
            >
              Who Knew?
            </span>
          </p>
          {/* Optional: A subtle visual element that appears with the "Who Knew?" text */}
          <div className={`absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-brandCoral transition-opacity duration-1000 ease-in-out ${isVisible ? 'opacity-75' : 'opacity-0'}`} />
        </div> 
      </div>
    </section>
  );
};

export default HueneuStorySection;