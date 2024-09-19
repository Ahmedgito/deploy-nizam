import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-stone-800 text-white py-12">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
        
        {/* Column 1 - Company Information */}
        <div>
          <h2 className="text-2xl font-bold">H. Nizam Din & Sons</h2>
          <p className="text-gray-200 mt-4 text-sm">
            In a predominately old industry, NIZAM has established itself as a world leader today, with its vision of investment in modern equipment/technology, manufacturing innovation. Hence enabling us to make products timely, efficiently, and cost-effectively.
          </p>
          <p className="text-gray-200 text-sm mt-4">
            Copyright © 2024 H. Nizam Din & Sons. All Rights Reserved.<br />
            Powered by IdeaBox
          </p>
          <div className="mt-6">
            <p className="text-gray-300 text-sm">SYMBOL OF TRUST</p>
            <span className="text-gray-300 text-sm">SINCE</span>
            <h3 className="text-4xl font-bold">1869</h3>
          </div>
        </div>
        
        {/* Column 2 - Businesses */}
        <div>
          <h2 className="text-xl font-bold">Businesses</h2>
          <ul className="mt-4 space-y-2">
            <li><a href="#" className="text-gray-200 hover:text-white">Nizam Groups</a></li>
            <li><a href="#" className="text-gray-200 hover:text-white">Nizam Tents</a></li>
            <li><a href="#" className="text-gray-200 hover:text-white">Nizam Apparel</a></li>
            <li><a href="#" className="text-gray-200 hover:text-white">Nizam Canvas</a></li>
            <li><a href="#" className="text-gray-200 hover:text-white">Nizam Events</a></li>
            <li><a href="#" className="text-gray-200 hover:text-white">Nizam Energy</a></li>
          </ul>
        </div>

        {/* Column 3 - Quick Links */}
        <div>
          <h2 className="text-xl font-bold">Quick Links</h2>
          <ul className="mt-4 space-y-2">
            <li><a href="#" className="text-gray-200 hover:text-white">Home</a></li>
            <li><a href="#" className="text-gray-200 hover:text-white">About Us</a></li>
            <li><a href="#" className="text-gray-200 hover:text-white">Production</a></li>
            <li><a href="#" className="text-gray-200 hover:text-white">Products</a></li>
            <li><a href="#" className="text-gray-200 hover:text-white">Sustainability</a></li>
            <li><a href="#" className="text-gray-200 hover:text-white">Contact Us</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
