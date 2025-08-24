import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import MembershipPage from './components/MembershipPage';
import ContactPage from './components/ContactPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch(currentPage) {
      case 'about': return <AboutPage setCurrentPage={setCurrentPage} />;
      case 'membership': return <MembershipPage setCurrentPage={setCurrentPage} />;
      case 'contact': return <ContactPage setCurrentPage={setCurrentPage} />;
      default: return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
    </div>
  );
}

export default App;