import React from 'react';
import linkedin from '../../../assets/linkedin.png' ; 

const Footer = () => {
  return (
    <footer className="bg-[#2a2929] text-white py-20"> {/* Increased padding for height */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 px-4">
        
        {/* Column 1 - Company Information */}
        <div>
          <h2 className="text-3xl font-bold">H. Nizam Din & Sons</h2> {/* Increased heading size */}
          <p className="text-gray-200 mt-6 text-base"> {/* Increased text size */}
            In a predominately old industry, NIZAM has established itself as a world leader today, with its vision of investment in modern equipment/technology, manufacturing innovation. Hence enabling us to make products timely, efficiently, and cost-effectively.
          </p>
          <p className="text-gray-200 text-base mt-8"> {/* Increased text size */}
            <img src ={linkedin} />
            Copyright © 2024 H. Nizam Din & Sons. All Rights Reserved.<br />
            Powered by IdeaBox
          </p>
         
        </div>
        
        {/* Column 2 - Businesses */}
        <div>
          <h2 className="text-2xl font-bold">Businesses</h2> {/* Increased heading size */}
          <ul className="mt-6 space-y-3">
            <li><a href="#" className="text-gray-200 hover:text-white text-lg">Nizam Groups</a></li> {/* Increased list text size */}
            <li><a href="#" className="text-gray-200 hover:text-white text-lg">Nizam Tents</a></li>
            <li><a href="#" className="text-gray-200 hover:text-white text-lg">Nizam Apparel</a></li>
            <li><a href="#" className="text-gray-200 hover:text-white text-lg">Nizam Canvas</a></li>
            <li><a href="#" className="text-gray-200 hover:text-white text-lg">Nizam Events</a></li>
            <li><a href="#" className="text-gray-200 hover:text-white text-lg">Nizam Energy</a></li>
          </ul>
        </div>

        {/* Column 3 - Quick Links */}
        <div>
          <h2 className="text-2xl font-bold">Quick Links</h2> {/* Increased heading size */}
          <ul className="mt-6 space-y-3">
            <li><a href="#" className="text-gray-200 hover:text-white text-lg">Home</a></li> {/* Increased list text size */}
            <li><a href="#" className="text-gray-200 hover:text-white text-lg">About Us</a></li>
            <li><a href="#" className="text-gray-200 hover:text-white text-lg">Production</a></li>
            <li><a href="#" className="text-gray-200 hover:text-white text-lg">Products</a></li>
            <li><a href="#" className="text-gray-200 hover:text-white text-lg">Sustainability</a></li>
            <li><a href="#" className="text-gray-200 hover:text-white text-lg">Contact Us</a></li>
          </ul>
          <div className="mt-8">
            <p className="text-gray-300 text-lg">SYMBOL OF TRUST</p> {/* Increased text size */}
            <p className="text-gray-300 text-md">SINCE <span className="text-5xl font-bold">1869</span></p> {/* Increased text size */}
             {/* Increased year size */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
