import React, { useState } from 'react';
import logo from './assets/logo1.png';  // Assuming this is the logo file
import background from './assets/bg.jpg';  // Assuming asset1.png is the background image

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div style={{ position: 'relative', height: '100vh' }}>
      {/* Background Image with Blur */}
      <div
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
          filter: 'blur(8px)',  // Only background image gets blurred
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: -1,  // Send background behind other content
        }}
      />

      {/* Navbar Content */}
      <nav className="bg-transparent relative z-10">
        <div className="max-w-screen-xl flex items-center justify-between mx-auto p-6">
          <a href="/" className="flex items-center">
            <img src={logo} className="h-12" alt="Logo" />
          </a>
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          <div className="hidden md:block">
            <ul className="flex space-x-8">
              <li><a href="#" className="text-white">About Us</a></li>
              <li><a href="#" className="text-white">Production</a></li>
              <li><a href="#" className="text-white">Products</a></li>
              <li><a href="#" className="text-white">Sustainability</a></li>
              <li><a href="#" className="text-white">Contact Us</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-black text-white transition-transform transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ zIndex: 20 }}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <ul className="flex flex-col items-start p-4 space-y-4">
          <li><a href="#" className="text-white text-lg">About Us</a></li>
          <li><a href="#" className="text-white text-lg">Production</a></li>
          <li><a href="#" className="text-white text-lg">Products</a></li>
          <li><a href="#" className="text-white text-lg">Sustainability</a></li>
          <li><a href="#" className="text-white text-lg">Contact Us</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;