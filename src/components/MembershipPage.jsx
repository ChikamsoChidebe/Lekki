import React, { useState } from 'react';
import Footer from './Footer';

const MembershipPage = ({ setCurrentPage }) => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const events = [
    {
      id: 1,
      title: 'Annual Gala Dinner',
      date: 'December 15, 2024',
      time: '7:00 PM',
      location: 'Eko Hotel & Suites',
      description: 'Our prestigious annual gathering celebrating achievements and fellowship.',
      exclusive: true
    },
    {
      id: 2,
      title: 'Business Networking Summit',
      date: 'January 20, 2025',
      time: '2:00 PM',
      location: 'Lagos Continental Hotel',
      description: 'Connect with industry leaders and explore collaboration opportunities.',
      exclusive: false
    },
    {
      id: 3,
      title: 'Community Outreach Program',
      date: 'February 10, 2025',
      time: '10:00 AM',
      location: 'Lekki Community Center',
      description: 'Join us in making a difference in our local community.',
      exclusive: false
    }
  ];

  const benefits = [
    'Exclusive access to high-profile networking events',
    'Business collaboration and partnership opportunities',
    'Mentorship from industry leaders',
    'Community service and philanthropy initiatives',
    'Premium social gatherings and cultural events',
    'Access to club facilities and resources'
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Membership & Events</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Join an exclusive brotherhood of successful men making a lasting impact.
          </p>
        </div>
      </section>

      {/* Membership Info */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Membership Benefits</h2>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">How to Join</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Submit Application</h4>
                    <p className="text-gray-600">Complete our membership application form with your professional background.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Review Process</h4>
                    <p className="text-gray-600">Our membership committee reviews applications and conducts interviews.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Welcome Ceremony</h4>
                    <p className="text-gray-600">Approved members are welcomed in an exclusive induction ceremony.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Upcoming Events</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <div key={event.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{event.title}</h3>
                    {event.exclusive && (
                      <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Exclusive
                      </span>
                    )}
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-600">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                      </svg>
                      {event.date}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                      </svg>
                      {event.time}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                      </svg>
                      {event.location}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{event.description}</p>
                  
                  <button className="w-full bg-green-500 text-white py-2 rounded-lg font-semibold hover:bg-green-400 transition-colors duration-300">
                    Register Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Apply?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Take the first step towards joining our exclusive brotherhood of successful men.
          </p>
          <button className="bg-green-500 text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-400 transition-colors duration-300">
            Apply for Membership
          </button>
        </div>
      </section>
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default MembershipPage;