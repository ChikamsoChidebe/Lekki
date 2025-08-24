import React from 'react';

const Footer = ({ setCurrentPage }) => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img src="/hero-image.jpeg" alt="Logo" className="h-10 w-auto mr-3" />
              <span className="text-xl font-bold text-green-400">Lekki Brothers Club</span>
            </div>
            <p className="text-gray-400">An exclusive brotherhood of successful men dedicated to community impact and mutual empowerment.</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-green-400 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><button onClick={() => setCurrentPage('about')} className="text-gray-400 hover:text-green-400 transition-colors">About Us</button></li>
              <li><button onClick={() => setCurrentPage('membership')} className="text-gray-400 hover:text-green-400 transition-colors">Membership</button></li>
              <li><button onClick={() => setCurrentPage('membership')} className="text-gray-400 hover:text-green-400 transition-colors">Events</button></li>
              <li><button onClick={() => setCurrentPage('contact')} className="text-gray-400 hover:text-green-400 transition-colors">Contact</button></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-green-400 mb-4">Contact Info</h3>
            <div className="space-y-2 text-gray-400">
              <p>Lekki Phase 1, Lagos State</p>
              <p>+234 (0) 123 456 7890</p>
              <p>info@lekkibrothersclub.org</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-green-400 mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-400 transition-colors">
                <span className="text-black font-bold">f</span>
              </a>
              <a href="#" className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-400 transition-colors">
                <span className="text-black font-bold">t</span>
              </a>
              <a href="#" className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-400 transition-colors">
                <span className="text-black font-bold">in</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">&copy; 2024 Lekki Brothers Club. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;