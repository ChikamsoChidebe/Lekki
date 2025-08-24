import React from 'react';
import Footer from './Footer';

const AboutPage = ({ setCurrentPage }) => {
  const executives = [
    { name: 'Chairman Board of Trustee', image: '/chairman board of trustee.jpeg', role: 'Chairman' },
    { name: 'President', image: '/president.jpeg', role: 'President' },
    { name: 'Vice President', image: '/vice president.jpeg', role: 'Vice President' },
    { name: 'Treasurer', image: '/treasurer.jpeg', role: 'Treasurer' },
    { name: 'Lawyer', image: '/lawyer.jpeg', role: 'Legal Counsel' },
    { name: 'Provost', image: '/provost.jpeg', role: 'Provost' },
    { name: 'Public Relations Officer', image: '/public relation officer.jpeg', role: 'PR Officer' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 text-green-400">About Lekki Brothers Club</h1>
          <p className="text-xl max-w-3xl mx-auto text-green-100">
            A distinguished brotherhood committed to excellence, community service, and mutual empowerment.
          </p>
        </div>
      </section>

      {/* Club History & Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Founded with the vision of creating a network of successful men dedicated to making a positive impact, 
                the Lekki Brothers Club has grown into one of the most prestigious organizations in the region.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our members are leaders in their respective fields, united by shared values of integrity, 
                excellence, and commitment to community development.
              </p>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Core Values</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Excellence in all endeavors
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Integrity and ethical leadership
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Community service and philanthropy
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Mutual support and brotherhood
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Club Activities */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">What We Do</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Philanthropy</h3>
              <p className="text-gray-600">
                Supporting education, healthcare, and community development initiatives across the region.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Business Collaboration</h3>
              <p className="text-gray-600">
                Facilitating partnerships, mentorship, and business opportunities among our members.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Social Gatherings</h3>
              <p className="text-gray-600">
                Exclusive events, networking sessions, and social activities that strengthen our brotherhood.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Our Leadership</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
            {executives.map((executive, index) => (
              <div key={index} className="text-center group">
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img
                    src={executive.image}
                    alt={executive.name}
                    className="w-full h-64 object-cover object-top transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{executive.role}</h3>
                <p className="text-gray-600 text-sm">{executive.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default AboutPage;