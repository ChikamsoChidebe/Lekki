import React from 'react';

const Header = () => {
  return (
    <header className="bg-stone-100 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-center relative">
        <div className="absolute left-0">
          <img 
            src="/hero-image.jpeg" 
            alt="Lekki Brothers Club Logo" 
            className="h-20 w-auto"
          />
        </div>
        
        <nav className="hidden md:flex space-x-8">
          <a href="#" className="text-gray-700 hover:text-green-600 font-bold">Home</a>
          <a href="#" className="text-gray-700 hover:text-green-600 font-bold">Events</a>
          <a href="#" className="text-gray-700 hover:text-green-600 font-bold">About-Us</a>
          <a href="#" className="text-gray-700 hover:text-green-600 font-bold">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;