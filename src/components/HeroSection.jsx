import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-stone-100 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-light text-gray-700">
              Welcome to
            </h1>
            <h2 className="text-4xl md:text-5xl font-bold text-green-600">
              Lekki Brothers Club
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed max-w-md">
              Stronger together, learning and growing, staying active, sharing good times, giving back, building friendships, finding purpose, enjoying moments, creating impact, leaving a positive mark wherever the journey takes us.
            </p>
          </div>
          
          <div className="flex justify-center">
            <img 
              src="/hero-image.jpeg" 
              alt="Lekki Brothers Club 2025 Movement" 
              className="max-w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;