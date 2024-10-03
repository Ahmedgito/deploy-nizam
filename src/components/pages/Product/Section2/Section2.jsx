import React from 'react';
import CircularEconomyIcon from '../../../../assets/Product/1-2.png';  
import RecycledCollectionIcon from '../../../../assets/Product/2-2.png';  
import TailoredCollectionIcon from '../../../../assets/Product/3-2.png';  
import SeasonalCollectionIcon from '../../../../assets/Product/4-2.png';  
import Bg from '../../../../assets/Product/5-2.jpg'; 

const Section2 = () => {
  return (
    <>
   
                        {/* {Mobile-Section} */}
                        <div className='md:hidden block'>
                <h1 className='text-orange-500 text-center font-bold text-2xl mb-10'>SUSTAINABLE OUTPUT</h1>
    <section 
      className=" bg-cover bg-center py-8"
      style={{ backgroundImage: `url(${Bg})` }}  // Adding background image
    >
      {/* Container for the section */}
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h2 className="text-2xl   text-center text-white leading-5  ">Our Latest <br /> Developemnt</h2>
        <p className='text-white text-center text-sm  mb-6'>Sustainable material with Sustainable <br /> process</p>

        {/* Grid for icons (2 rows, 2 columns) */}
        <div className="grid grid-cols-2 px-5 gap-4">
          {/* First Icon */}
          <div className="flex text-white flex-col items-center">
            <img src={CircularEconomyIcon} alt="Circular Economy" className="h-16 mb-2" />
            <p className="text-sm  font-semibold text-center">Our Circular Economy</p>
            <p className="text-xs  text-center">Built with organic cotton, hemp, and sustainable fibers for a circular economy.</p>
          </div>

          {/* Second Icon */}
          <div className="flex text-white flex-col items-center">
            <img src={RecycledCollectionIcon} alt="Recycled Collection" className="h-16 mb-2" />
            <p className="text-sm font-semibold text-center">Recycled Collection</p>
            <p className="text-xs text-center">Recycled cotton, polyesters, and other recycled fibers for sustainable fashion.</p>
          </div>

          {/* Third Icon */}
          <div className="flex text-white flex-col items-center">
            <img src={TailoredCollectionIcon} alt="Tailored Collection" className="h-16 mb-2" />
            <p className="text-sm font-semibold text-center">Tailored Collections</p>
            <p className="text-xs text-center">Custom collections tailored to our customers’ mood-boards and style.</p>
          </div>

          {/* Fourth Icon */}
          <div className="flex text-white flex-col items-center">
            <img src={SeasonalCollectionIcon} alt="Seasonal Collection" className="h-16 mb-2" />
            <p className="text-sm font-semibold text-center">Seasonal Collection</p>
            <p className="text-xs text-center">Designs developed for Summer/Spring and Autumn/Winter collections.</p>
          </div>
        </div>
      </div>
    </section>
    </div>

                    {/* {Desktop-Section} */}
    <section
      className="md:block relative hidden bg-cover bg-center bg-no-repeat py-16"
      style={{ backgroundImage: `url(${Bg})` }} // Correct background image interpolation
    >
      {/* Main content container */}
      <div className="container mx-auto text-center text-white">
        {/* Heading and subheading */}
        <h2 className="text-4xl font-bold text-left mb-4">SUSTAINABLE OUTPUT</h2>
        <h3 className="text-2xl font-semibold mb-4 text-left ">Our Latest Development</h3>
        <p className="mb-8 text-left">Sustainable material with Sustainable process</p>

        {/* Icons and descriptions section */}
        <div className="grid grid-cols-1 leading-5  md:grid-cols-4 gap-0 px-20">
          {/* First Icon Section */}
          <div className="flex  flex-col items-center">
            <img src={CircularEconomyIcon} alt="Circular Economy" className="h-32  mb-4" />
            <h4 className="text-xl px-7 leading-5 mb-2">Our Circular <br /> Economy Collection</h4>
            <p className='px-7'>Built with Organic cotton, Hemp, and Sustainable fibers for the circular economy</p>
          </div>

          {/* Second Icon Section */}
          <div className="flex flex-col items-center">
            <img src={RecycledCollectionIcon} alt="Recycled Collection" className="h-32 mb-4" />
            <h4 className="text-xl px-7   mb-2">Recycled Collection</h4>
            <p className='px-7'>Recycled Cotton (past consumer waste cotton), Recycled polyesters, and other recycled fibers</p>
          </div>

          {/* Third Icon Section */}
          <div className="flex flex-col items-center">
            <img src={TailoredCollectionIcon} alt="Tailored Collection" className="h-32 mb-4" />
            <h4 className="text-xl px-7   mb-2">Tailored Collections</h4>
            <p className='px-7'>We tailor-make collections relevant to our customers’ mood boards and style</p>
          </div>

          {/* Fourth Icon Section */}
          <div className="flex flex-col items-center">
            <img src={SeasonalCollectionIcon} alt="Seasonal Collection" className="h-32 mb-4" />
            <h4 className="text-lg px-7  mb-2">Seasonal Collection</h4>
            <p className='px-7'>Our designers develop collections for Summer/Spring and Autumn/Winter</p>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Section2;

