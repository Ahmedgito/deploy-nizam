import React from "react";
import { useInView } from 'react-intersection-observer';
import CircularEconomyIcon from '../../../../assets/Sustainibility/o-2.png';  
import RecycledCollectionIcon from '../../../../assets/Sustainibility/o-1.png';  
import TailoredCollectionIcon from '../../../../assets/Sustainibility/0-4.png';  
import SeasonalCollectionIcon from '../../../../assets/Sustainibility/o-3.png';  
import Bg from '../../../../assets/Product/5-2.jpg'; 

const Section7 = React.forwardRef((props, sectionRef) => {
    // Intersection Observer hook for animations
    const { ref: inViewRef, inView } = useInView({
      triggerOnce: true, // Trigger animation only once
      threshold: 0.5,    // Trigger when 50% of the section is visible  
    });

  return (
    <>

                        {/* {Desktop-Section} */}
                        <section
    ref={sectionRef} data-title="Our Products"
    className="md:block relative hidden bg-white bg-cover bg-center bg-no-repeat py-16"
      // Correct background image interpolation
    >
      {/* Main content container */}
      <div className="container mx-auto text-center text-black ">
        {/* Heading and subheading */}
        <h2 className="text-3xl font-bold mb-1 text-[#DB7216]  ">Our Latest Development</h2>
        <p className="mb-8 text-xl text-[#666666]  ">Sustainable material with Sustainable process</p>

        {/* Icons and descriptions section */}
        <div 
        ref={inViewRef}
        className={` grid grid-cols-1 leading-5  md:grid-cols-4 gap-0 px-20 ${inView ? 'animate-slideInBottom' : 'opacity-0'}`}>
          {/* First Icon Section */}
          <div className="flex  flex-col items-center">
            <img src={CircularEconomyIcon} alt="Circular Economy" className="h-32  mb-4" />
            <h4 className="text-xl px-7 text-black font-bold leading-5 mb-2">Our Circular <br /> Economy Collection</h4>
            <p className='px-7 text-[#666666]'>Built with Organic cotton, Hemp, and Sustainable fibers for the circular economy</p>
          </div>

          {/* Second Icon Section */}
          <div className="flex flex-col items-center">
            <img src={RecycledCollectionIcon} alt="Recycled Collection" className="h-32 mb-4" />
            <h4 className="text-xl px-7 text-black font-bold  mb-2">Recycled <br /> Collection</h4>
            <p className='px-7 text-[#666666]'>Recycled Cotton (past consumer waste cotton), Recycled polyesters, and other recycled fibers</p>
          </div>

          {/* Third Icon Section */}
          <div className="flex flex-col items-center">
            <img src={TailoredCollectionIcon} alt="Tailored Collection" className="h-32 mb-4" />
            <h4 className="text-xl px-7 text-black font-bold  mb-2">Tailored <br /> Collections</h4>
            <p className='px-7 text-[#666666]'>We tailor-make collections relevant to our customers’ mood boards and style</p>
          </div>

          {/* Fourth Icon Section */}
          <div className="flex flex-col items-center">
            <img src={SeasonalCollectionIcon} alt="Seasonal Collection" className="h-32 mb-4" />
            <h4 className="text-lg px-7 text-black font-bold  mb-2">Seasonal <br /> Collection</h4>
            <p className='px-7 text-[#666666]'>Our designers develop collections for Summer/Spring and Autumn/Winter</p>
          </div>
        </div>
      </div>
    </section>

      {/* {Mobile Section} */}
      <section
        ref={sectionRef}
        data-title="Our Products Mobile"
        className="block md:hidden bg-white bg-cover bg-center bg-no-repeat py-8 px-4"
      >
        <div className="text-center text-black">
          <h2 className="text-3xl font-bold mb-2 text-[#DB7216] leading-tight">Our Latest <br /> Development</h2>
          <p className="mb-6 text-base text-[#666666]">Sustainable material with Sustainable process</p>

          {/* Icons and descriptions section */}
          <div className="space-y-8">
            {/* Circular Economy Collection */}
            <div className="flex flex-col items-center">
              <img src={CircularEconomyIcon} alt="Circular Economy" className="h-28 mb-4" />
              <h4 className="text-base text-black font-bold mb-1 text-center">Our Circular <br /> Economy Collection</h4>
              <p className="text-sm text-[#666666] text-center px-4">
                Built with Organic cotton, Hemp, and Sustainable fibers for the circular economy
              </p>
            </div>

            {/* Recycled Collection */}
            <div className="flex flex-col items-center">
              <img src={RecycledCollectionIcon} alt="Recycled Collection" className="h-28 mb-4" />
              <h4 className="text-base text-black font-bold mb-1 text-center">Recycled <br /> Collection</h4>
              <p className="text-sm text-[#666666] text-center px-4">
                Recycled Cotton (post-consumer waste cotton), Recycled polyesters, and other recycled fibers
              </p>
            </div>

            {/* Tailored Collection */}
            <div className="flex flex-col items-center">
              <img src={TailoredCollectionIcon} alt="Tailored Collection" className="h-28 mb-4" />
              <h4 className="text-base text-black font-bold mb-1 text-center">Tailored <br /> Collections</h4>
              <p className="text-sm text-[#666666] text-center px-4">
                We tailor-make collections relevant to our customers’ mood boards and style
              </p>
            </div>

            {/* Seasonal Collection */}
            <div className="flex flex-col items-center">
              <img src={SeasonalCollectionIcon} alt="Seasonal Collection" className="h-28 mb-4" />
              <h4 className="text-base text-black font-bold mb-1 text-center">Seasonal <br /> Collection</h4>
              <p className="text-sm text-[#666666] text-center px-4">
                Our designers develop collections for Summer/Spring and Autumn/Winter
              </p>
            </div>
          </div>
        </div>
      </section>        

    </>
  ) ;
});

export default Section7 ;