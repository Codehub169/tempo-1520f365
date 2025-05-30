import React from 'react';

const WhyHueneuSection: React.FC = () => {
  return (
    <section
      id="philosophy"
      className="min-h-[70vh] bg-warmLightGray py-20 md:py-32 px-6 md:px-12 flex items-center justify-center"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-nearBlack mb-10">
          Why <span className="text-mutedTerracotta">hueneu</span>?
        </h2>
        <div className="space-y-8">
          <p className="font-sans text-xl md:text-2xl lg:text-3xl text-darkGray leading-relaxed md:leading-loose">
            We don’t just design—<span className="text-nearBlack font-medium">we decode stories</span>.
            We listen intently, explore deeply, and translate your essence into visuals that speak volumes, often in the quietest of ways.
          </p>
          <p className="font-sans text-xl md:text-2xl lg:text-3xl text-darkGray leading-relaxed md:leading-loose">
            Our designs aim to <span className="text-nearBlack font-medium">linger in thought</span>, creating connections that are both immediate and enduring. It’s about finding that perfect balance between the unexpected hue and the calming neu.
          </p>
          <p className="font-sans text-xl md:text-2xl lg:text-3xl text-darkGray leading-relaxed md:leading-loose">
            Choose hueneu for designs that <span className="text-nearBlack font-medium">whisper loud stories</span>, crafted with intention, mystery, and a touch of quiet brilliance.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyHueneuSection;