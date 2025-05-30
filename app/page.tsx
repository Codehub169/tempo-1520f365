import HeroSection from './components/HeroSection';
// import HueneuStorySection from './components/HueneuStorySection';
// import WhatWeDoSection from './components/WhatWeDoSection';
// import WhyHueneuSection from './components/WhyHueneuSection';
// import ContactForm from './components/ContactForm';

export default function HomePage() {
  return (
    <main className="flex flex-col bg-softOffWhite overflow-x-hidden">
      <HeroSection />
      
      {/* Placeholder for The hueneu Story Section */}
      {/* <HueneuStorySection /> */}
      <section id="story" className="min-h-screen py-16 md:py-24 px-6 md:px-12 bg-warmLightGray">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display text-nearBlack mb-6">The hueneu Story</h2>
          <p className="text-lg text-darkGray">Content for the hueneu story will go here. This section will explain the meaning of 'Hue + Neu' and the studio's philosophy, including the 'Who Knew?' moment.</p>
        </div>
      </section>

      {/* Placeholder for What We Do Section */}
      {/* <WhatWeDoSection /> */}
      <section id="services" className="min-h-screen py-16 md:py-24 px-6 md:px-12 bg-softOffWhite">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display text-nearBlack mb-6">What We Do</h2>
          <p className="text-lg text-darkGray">Content for services will go here, presented with icons and playful microcopy.</p>
        </div>
      </section>

      {/* Placeholder for Why hueneu? Section */}
      {/* <WhyHueneuSection /> */}
      <section id="philosophy" className="min-h-screen py-16 md:py-24 px-6 md:px-12 bg-warmLightGray">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display text-nearBlack mb-6">Why hueneu?</h2>
          <p className="text-lg text-darkGray">Poetic copy explaining the emotional brand pitch will go here.</p>
        </div>
      </section>

      {/* Placeholder for Let's Work Together Section (Contact Form) */}
      {/* <ContactForm /> */}
      <section id="contact" className="min-h-screen py-16 md:py-24 px-6 md:px-12 bg-softOffWhite">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display text-nearBlack mb-6">Let's Work Together</h2>
          <p className="text-lg text-darkGray">The contact form, designed like a letter, will be here. It will include a playful CTA and Instagram link.</p>
        </div>
      </section>

    </main>
  );
}
