import React, { useState, useEffect } from 'react';

const Header = ({ currentPage, setCurrentPage }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 5);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'membership', label: 'Membership & Events' },
    { id: 'contact', label: 'Contact & Join' }
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-white shadow-lg'
    }`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src="/hero-image.jpeg" 
            alt="Lekki Brothers Club Logo" 
            className="h-12 w-auto mr-3"
          />
          <span className="text-2xl font-bold text-green-500">Lekki Brothers Club</span>
        </div>
        
        <nav className="hidden md:flex space-x-8">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => setCurrentPage(item.id)}
              className={`transition-colors duration-300 ${
                currentPage === item.id 
                  ? 'text-green-500 border-b-2 border-green-500' 
                  : 'text-gray-700 hover:text-green-500'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
        
        <div className="hidden md:block">
          <button 
            onClick={() => setCurrentPage('contact')}
            className="bg-green-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-green-400 transition-colors duration-300"
          >
            Join Now
          </button>
        </div>
        
        <button 
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="px-4 py-2 space-y-2">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => {
                  setCurrentPage(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left py-2 px-4 rounded transition-colors ${
                  currentPage === item.id 
                    ? 'bg-green-500 text-white' 
                    : 'text-gray-700 hover:bg-green-50 hover:text-green-500'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button 
              onClick={() => {
                setCurrentPage('contact');
                setMobileMenuOpen(false);
              }}
              className="block w-full bg-green-500 text-white py-2 px-4 rounded font-semibold hover:bg-green-400 transition-colors"
            >
              Join Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;