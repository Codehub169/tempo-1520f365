"use client";

import React, { useEffect, useRef } from 'react';

const AnimatedLogo: React.FC = () => {
  const pathsRef = useRef<SVGPathElement[]>([]);

  useEffect(() => {
    // Trigger animation after component mounts
    pathsRef.current.forEach((path, index) => {
      if (path) {
        const length = path.getTotalLength();
        path.style.strokeDasharray = length.toString();
        path.style.strokeDashoffset = length.toString();
        
        // Set initial fill opacity to 0 before animation starts
        // This ensures paths are transparent until the fill-opacity animation kicks in after its delay
        path.style.fillOpacity = '0';

        // Stagger the start of drawing animation for each path
        // The fill-opacity animation starts after the draw-path animation completes for each path
        path.style.animation = `draw-path 1.5s ease-out ${index * 0.2}s forwards, fill-opacity 0.8s ease-out ${index * 0.2 + 1.5}s forwards`;
      }
    });
  }, []);

  // Placeholder SVG for hueneu logo. 
  // This SVG is designed for line-drawing animation with paths separated for individual animation.
  // The keyframes for 'draw-path' and 'fill-opacity' are defined in globals.css.
  return (
    <svg
      width="200"
      height="80"
      viewBox="0 0 200 80"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="hueneu logo"
      // text-nearBlack sets 'currentColor'. stroke-nearBlack sets explicit stroke color.
      // stroke-2 sets stroke-width. fill="currentColor" makes paths fill with 'currentColor'.
      // The fill-opacity animation will make the fill visible after drawing.
      className="text-nearBlack stroke-nearBlack stroke-2"
      fill="currentColor" 
    >
      {/* h - using 3 paths for drawing effect */}
      <path ref={el => el && (pathsRef.current[0] = el)} d="M20 20 V60" />
      <path ref={el => el && (pathsRef.current[1] = el)} d="M20 40 H40" />
      <path ref={el => el && (pathsRef.current[2] = el)} d="M40 20 V60" />

      {/* u */}
      <path ref={el => el && (pathsRef.current[3] = el)} d="M50 20 V55 A5 5 0 0 0 55 60 H65 A5 5 0 0 0 70 55 V20" />

      {/* e */}
      <path ref={el => el && (pathsRef.current[4] = el)} d="M90 20 V60" />
      <path ref={el => el && (pathsRef.current[5] = el)} d="M90 20 H110" />
      <path ref={el => el && (pathsRef.current[6] = el)} d="M90 40 H105" />
      <path ref={el => el && (pathsRef.current[7] = el)} d="M90 60 H110" />

      {/* n */}
      <path ref={el => el && (pathsRef.current[8] = el)} d="M120 60 V20 L140 60 V20" />
      
      {/* e */}
      <path ref={el => el && (pathsRef.current[9] = el)} d="M150 20 V60" />
      <path ref={el => el && (pathsRef.current[10] = el)} d="M150 20 H170" />
      <path ref={el => el && (pathsRef.current[11] = el)} d="M150 40 H165" />
      <path ref={el => el && (pathsRef.current[12] = el)} d="M150 60 H170" />

      {/* u - (optional, if different style for second 'u' or a different wordmark like 'hueneuu') */}
      {/* <path ref={el => el && (pathsRef.current[13] = el)} d="M180 20 V55 A5 5 0 0 0 185 60 H195 A5 5 0 0 0 200 55 V20" /> */}
    </svg>
  );
};

export default AnimatedLogo;
