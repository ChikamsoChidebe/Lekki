import React, { useState, useEffect } from 'react';

const HeroSection = () => {
  const [animateText, setAnimateText] = useState(false);

  useEffect(() => {
    setAnimateText(true);
  }, []);

  return (
    <section className="h-screen bg-gradient-to-br from-gray-50 to-white pt-32">
      <div className="container mx-auto px-4 h-full flex items-center">
        <div className="grid md:grid-cols-2 gap-8 items-center w-full">
          {/* Left Content */}
          <div className="text-gray-900">
            <div className={`transform transition-all duration-2000 ${animateText ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                <span className="block text-gray-900 animate-fadeInUp">LEKKI</span>
                <span className="block text-green-400 animate-fadeInUp" style={{animationDelay: '0.5s'}}>BROTHERS</span>
                <span className="block text-gray-900 animate-fadeInUp" style={{animationDelay: '1s'}}>CLUB</span>
              </h1>
            </div>
            
            <div className={`transform transition-all duration-2000 delay-1000 ${animateText ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <p className="text-xl md:text-2xl mb-6 text-green-600 font-light tracking-wide">
                WHERE SUCCESS MEETS SUPPORT
              </p>
              
              <p className="text-lg mb-8 leading-relaxed text-gray-600">
                An exclusive brotherhood of accomplished men dedicated to community impact, 
                business excellence, and mutual empowerment.
              </p>
            </div>
            
            <div className={`transform transition-all duration-2000 delay-1500 ${animateText ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-green-500 text-white px-8 py-3 rounded-full text-lg font-bold hover:bg-green-400 transition-all duration-300 transform hover:scale-105">
                  JOIN THE BROTHERHOOD
                </button>
                <button className="border-2 border-green-500 text-green-500 px-8 py-3 rounded-full text-lg font-bold hover:bg-green-500 hover:text-white transition-all duration-300">
                  DISCOVER MORE
                </button>
              </div>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="flex justify-center items-center">
            <img
              src="/hero-image.jpeg"
              alt="Lekki Brothers Club - Exclusive Brotherhood of Successful Men in Lagos Nigeria"
              className="w-full h-auto max-h-96 object-contain rounded-lg"
              loading="eager"
              width="400"
              height="300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;