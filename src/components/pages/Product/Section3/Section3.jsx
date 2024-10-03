import React from 'react';
import catalogImage from '../../../../assets/Product/3-1.jpg';  // Assuming this is the image
import { useInView } from 'react-intersection-observer';


const Section3 = React.forwardRef((props, sectionRef) => {
    // Intersection Observer hook for animations
    const { ref: inViewRef, inView } = useInView({
      triggerOnce: true, // Trigger animation only once
      threshold: 0.5,    // Trigger when 50% of the section is visible
    });

  return (
    <>


    {/* {Desktop-Section} */}
    <section
    ref={sectionRef} data-title="Digital Library"
    className="md:flex hidden flex-col md:flex-row justify-between items-center mt-20 py-10 px-6 md:px-16 bg-white ">
      
      {/* Left Column: Text Section */}
      <div
      ref={inViewRef}
      className="md:w-1/2 mb-10 pl-20 md:mb-0">
        <h2 className="text-4xl md:text-5xl font-bold text-[#db7216] leading-tight">
          CHECK OUR <br /> COMPLETE RANGE <br /> ONLINE
        </h2>
        <h3
         
        className={`mt-4 text-2xl font-semibold text-gray-700 ${inView ? 'animate-slideInLeft' : 'opacity-0'}`}
        >ON OUR DIGITAL LIBRARY</h3>
        <p className={` mt-4 mb-10 pr-36 text-2xl text-black leading-relaxed  ${inView ? 'animate-slideInLeft' : 'opacity-0'}`} >
          To access our latest collections, developments, and all the fun things we are doing, please request 
          the Nizam Workwear representative you are in contact with to share access with you.
        </p>
        {/* Call-to-Action Button */}
        <button>
        <a
        href='https://library.nizamapparel.com/'
         className="mt-10 px-20 py-3 bg-[#db7216] text-white text-lg font-bold    hover:bg-orange-700 transition">
          VISIT NOW
        </a>
        </button>
      </div>

      {/* Right Column: Image Section */}
      <div className="md:w-1/2 flex justify-start">
        <img src={catalogImage} alt="Digital Catalog on Monitor" className="w-full md:w-3/4" />
      </div>
    </section>

{/* {Mobile-Section} */}
<section className="flex md:hidden flex-col md:flex-row justify-between items-center py-10 px-6 md:px-16 bg-white">
  
  {/* Left Column: Text Section */}
  <div className="md:w-1/2 mb-10">
    <h2 className="text-2xl text-center font-extrabold text-[#db7216] mb-10 leading-tight">
      CHECK OUR <br /> COMPLETE RANGE <br /> ONLINE
    </h2>
    
    {/* Right Column: Image Section */}
    <div className="md:w-1/2 flex justify-center">
      <img src={catalogImage} alt="Digital Catalog on Monitor" className="w-full md:w-3/4" />
    </div>
    
    <h3 className="mt-4 text-xl text-center font-semibold text-gray-700">ON OUR DIGITAL <br /> LIBRARY</h3>
    
    <p className="mt-4 text-normal leading-5 text-center text-gray-600">
      To access our latest collections, developments, and all the fun things we are doing, please request 
      the Nizam Workwear representative you are in contact with to share access with you.
    </p>
   
    {/* Call-to-Action Button */}
    <div className="flex justify-center mt-6">  {/* Centering the button */}
      <button className="px-8 py-2 bg-[#db7216] text-white text-lg font-bold rounded hover:bg-orange-700 transition">
        VISIT NOW
      </button>
    </div>
  </div>
</section>


</>
  );
});

export default Section3;
