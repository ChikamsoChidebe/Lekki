import React from 'react';
import HeroSection from './HeroSection';
import Footer from './Footer';

const HomePage = ({ setCurrentPage }) => {
  return (
    <div>
      <HeroSection />
      
      {/* Mission Statement */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-black mb-8">Our Mission</h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            The Lekki Brothers Club is an exclusive network of successful men dedicated to community support, 
            resource pooling, and mutual aid. We believe in the power of collaboration and brotherhood to 
            create lasting positive impact in our communities.
          </p>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-black mb-12">Featured Initiatives</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 border-l-4 border-green-500">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-4 text-center">Community Outreach</h3>
              <p className="text-gray-600 text-center">Supporting local communities through charitable initiatives and development programs.</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 border-l-4 border-green-500">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4zM18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-4 text-center">Business Collaboration</h3>
              <p className="text-gray-600 text-center">Fostering partnerships and business opportunities among our distinguished members.</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 border-l-4 border-green-500">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-4 text-center">Exclusive Events</h3>
              <p className="text-gray-600 text-center">Premium networking events and social gatherings for our elite membership.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Join the Brotherhood?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Become part of an exclusive network of successful men making a difference in their communities.
          </p>
          <button className="bg-green-500 text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-400 transition-all duration-300 transform hover:scale-105">
            Apply for Membership
          </button>
        </div>
      </section>
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default HomePage;