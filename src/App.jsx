import React, { useState } from 'react';
import logo from './assets/logo1.png';  // logo file
import background from './assets/bg.jpg';  // Background image
import workerImage from './assets/worker.png';  // Worker image
import helmet from './assets/helmet.png' ; 
import './styles.css'; // Adjust the path if necessary
import readmore from './assets/Arrow-min.png' ;


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div style={{ margin: '0', padding: '0' }}>
      <section className="relative overflow-hidden h-[110vh] md:h-[85vh]">
        {/* Background Image */}
        <div
          style={{
            backgroundImage: `url(${background})`,
            backgroundSize: 'cover',
            backgroundPosition: 'left',
            height: '160%',
            width: '140%',
            filter: 'blur(10px)',  // Blur effect on background
            position: 'absolute',
            top: '-10%',
            left: '-10%',
            zIndex: -1,  // Background behind content
          }}
        />

        {/* Overlay Content */}
        <nav className="relative z-10 bg-transparent">
          <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4 md:p-6">
            <a href="/" className="flex items-center">
              <img src={logo} className="h-10 md:h-14 " alt="Logo" /> {/* Responsive logo size */}
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
              
              <ul className="flex space-x-6 md:space-x-10 text-lg md:text-xl">
                <li><a href="#" className="text-white">HELLLLLLOOOOOOOO</a></li>
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
          className={`fixed top-0 right-0 w-80 h-full bg-black text-white transition-transform transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
          style={{ zIndex: 20 }}
        >
         
          <div className="flex justify-end p-4">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
            
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            
            </button>
          </div>
         
          <a href="/" className="flex justify-start">
              <img src={logo} className="  h-10 md:h-14 " alt="Logo" /> {/* Responsive logo size */}
            </a>

          <ul className="flex flex-col items-start p-4 space-y-4">
            <li><a href="#" className="text-white text-lg"> About Us</a></li>
            <li><a href="#" className="text-white text-lg">Production</a></li>
            <li><a href="#" className="text-white text-lg">Products</a></li>
            <li><a href="#" className="text-white text-lg">Sustainability</a></li>
            <li><a href="#" className="text-white text-lg">Contact Us</a></li>
          </ul>
        </div>

        {/* Main Content */}
        <div
          className="relative z-0 flex flex-col items-center justify-start md:justify-center h-full px-4 md:px-10 md:flex-row"
          style={{
            textAlign: 'left',
          }}
        >
          {/* Worker Image */}
          <div
            className="flex-shrink-0"
            style={{
              marginBottom: '20px',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <img src={workerImage} alt="Worker" className=" z-50 h-110 md:h-140" /> {/* Responsive image size */}
          </div>

          {/* Text Content */}
          <div className="text-white md:ml-10 text-center md:text-left leading-3">
            <h1 className="text-white text-4xl md:text-7xl font-bold mb-6">VISION</h1> {/* Responsive font size */}
            <p className="text-white text-lg md:text-2xl font-semibold md:max-w-lg">
              TO BE THE MOST INNOVATIVE,<br />
              RELIABLE, AND SUSTAINABLE <br />
              PARTNER FOR WORKWEAR <br />
              MANUFACTURING.
            </p>
          </div>
        </div>
      </section>

{/* {Section For Large Devices} */}
  <section className="md:flex hidden items-center justify-center py-10 -z-10">   
    {/* Heading */}
  <h2 className="text-6xl font-thin text-orange-500 mr-4 ">
    ABOUT
    <h2 className='text-orange-500 font-extrabold'>
      NIZAM <br /> WORKWEAR
    </h2>
  </h2>

  {/* Image */}
  <img src={helmet} alt="Image" className=" h-96" />
</section>


{/* {Section For Mobile Devices} */}
<section className="flex md:hidden flex-col items-center justify-center py-10 relative -z-10">

  {/* Heading */}
  <h2 className="text-4xl font-thin text-orange-500 mb-4 text-center">
    ABOUT
    <span className='block text-orange-500 font-extrabold'>
      NIZAM <br /> WORKWEAR
    </span>
  </h2>

  {/* Image */}
  <img src={helmet} alt="Image" className="w-full max-w-xs h-auto" />

</section>

<section className=" font-roboto flex flex-col items-center justify-center md:mx-96 mx-12   text-gray-500 text-left ">
  <p className="text-sm md:text-lg leading-relaxed ">
    In 2018, building on our legacy in technical textiles and our more recent experience in apparel manufacturing, we diversified our sewing portfolio with Workwear manufacturing in Karachi, Pakistan.</p>
  <p  className="text-sm md:text-lg leading-relaxed whitespace-pre-line ">
    Nizam has been built on long-lasting relationships by being consistently reliable to our partners. Our acumen in process control from yarn to finished product complements our workwear business, and our experience dealing with specialized fabrics and high-value articles has  taught us to control every element to provide consistent quality. We continuously work on adding automation and training for skill development to become better than yesterday and meet our goals of reliability.
  </p>
</section>

<section className=" py-2 md:py-3 md:px-96">
  <div className="container mx-auto flex items-center md:justify-end justify-center ">
    {/* Heading */}
    <h3 className="text-xl font-semibold text-orange-500 cursor-pointer me-2">
      READ MORE
    </h3>

    {/* Image */}
    <img 
      src={readmore}
      alt="Product Image" 
      className="w-5 h-5 object-contain" 
    />
  </div>
  </section>

    </div>
  );
};

export default Navbar;
