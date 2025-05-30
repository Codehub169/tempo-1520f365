import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

interface ServiceItem {
  iconSrc: string;
  title: string;
  description: string;
}

const services: ServiceItem[] = [
  {
    iconSrc: '/icon-branding.svg', // Assumes this SVG exists in /public/
    title: 'Branding',
    description: 'Identities that resonate and tell your unique story.',
  },
  {
    iconSrc: '/icon-packaging.svg', // Assumes this SVG exists in /public/
    title: 'Packaging',
    description: 'Designs that make your product an experience.',
  },
  {
    iconSrc: '/icon-social.svg', // Placeholder - create this SVG in /public/
    title: 'Social Media',
    description: 'Visuals that captivate and connect with your audience.',
  },
  {
    iconSrc: '/icon-stationery.svg', // Placeholder - create this SVG in /public/
    title: 'Stationery',
    description: 'Tangible expressions of your brand\'s essence.',
  },
  {
    iconSrc: '/icon-book.svg', // Placeholder - create this SVG in /public/
    title: 'Coffee Table Books',
    description: 'Curating narratives into beautifully bound art.',
  },
  {
    iconSrc: '/icon-creative.svg', // Placeholder - create this SVG in /public/
    title: 'Creative Projects',
    description: 'Bespoke design explorations for the wonderfully unexpected.',
  },
];

const WhatWeDoSection: React.FC = () => {
  return (
    <section
      id="services"
      className="min-h-screen bg-softOffWhite py-20 md:py-32 px-6 md:px-12"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-nearBlack mb-6 text-center">
          What We Do
        </h2>
        <p className="font-sans text-lg md:text-xl text-darkGray mb-16 text-center max-w-2xl mx-auto leading-relaxed">
          We craft intentional designs across various mediums, each piece telling a part of a larger story. Here’s how we can bring your vision to life:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-warmLightGray p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col items-start"
            >
              <Image
                src={service.iconSrc}
                alt={`${service.title} icon`}
                width={48} // Placeholder width, adjust as per actual icon sizes
                height={48} // Placeholder height
                className="mb-4 text-mutedTerracotta group-hover:text-brandCoral transition-colors duration-300"
              />
              <h3 className="font-display text-2xl text-nearBlack mb-2">
                {service.title}
              </h3>
              <p className="font-sans text-md text-darkGray leading-relaxed flex-grow">
                {service.description}
              </p>
              <div className="mt-4 text-mutedTerracotta group-hover:text-brandCoral transition-colors duration-300 flex items-center">
                <span className="text-sm mr-1 group-hover:underline">Explore</span>
                <ArrowRight size={16} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;