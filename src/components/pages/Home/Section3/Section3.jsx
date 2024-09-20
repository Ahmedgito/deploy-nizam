import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import backgroundImage from '../../../../assets/part-2PNG.png';
import industrialIcon from '../../../../assets/industrial.png';
import hiVisIcon from '../../../../assets/hivis.png';
import institutionalIcon from '../../../../assets/institutional.png';
import fireIcon from '../../../../assets/fire.png';
import familyIcon from '../../../../assets/person.png';
import spoolIcon from '../../../../assets/bell.png';
import factoryIcon from '../../../../assets/factory.png'



const Section3 = () => {
  // Intersection Observer hook
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.1, // Trigger when 10% of the section is visible
  });

  return (
    <div className="bg-white">
      <br />
      <section ref={ref} className="md:flex hidden relative w-full h-[450px]  items-center justify-center">
        {/* Background Image with sliding from top animation */}
        <div
          className={`w-full h-full ${inView ? 'animate-slide-in-top' : 'opacity-0'}`}
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
        </div>

        {/* Heading */}
        <h1 className={`font-montserrat absolute left-[50%] top-10 text-5xl font-bold text-orange-500 ${inView ? 'animate-slide-in-top-right' : 'opacity-0'}`}>
         PRODUCT RANGE
        </h1>

        {/* Icons and Text Section with pop-in animation */}
        <div className="absolute h-full flex items-center justify-end bg-transparent text-white w-full">
          <div className="flex flex-row space-x-20 text-center p-8">
            {/* Icon 1 - Industrial Range */}
            <div className={`${inView ? 'animate-pop-in' : 'opacity-0'}`}>
              <img src={industrialIcon} alt="Industrial Range" className="w-32 h-32 mx-auto mb-4" />
              <h3 className="text-lg font-bold">Industrial Range</h3>
            </div>

            {/* Icon 2 - Hi Vis Range */}
            <div className={`${inView ? 'animate-pop-in delay-1000' : 'opacity-0'}`}>
              <img src={hiVisIcon} alt="Hi Vis Range" className="w-32 h-32 mx-auto mb-4" />
              <h3 className="text-lg font-bold">Hi Vis Range</h3>
            </div>

            {/* Icon 3 - Institutional Range */}
            <div className={`${inView ? 'animate-pop-in delay-1000' : 'opacity-0'}`}>
              <img src={institutionalIcon} alt="Institutional Range" className="w-32 h-32 mx-auto mb-4" />
              <h3 className="text-lg font-bold">Institutional Range</h3>
            </div>

            {/* Icon 4 - Fire Range */}
            <div className={`${inView ? 'animate-pop-in delay-1000' : 'opacity-0'}`}>
              <img src={fireIcon} alt="Fire Range" className="w-32 h-32 mx-auto mb-4" />
              <h3 className="text-lg font-bold">Fire Range</h3>
            </div>

            {/* Icon 5 - Outerwear */}
            <div className={`${inView ? 'animate-pop-in delay-1000' : 'opacity-0'}`}>
              <img src={hiVisIcon} alt="Outerwear" className="w-32 h-32 mx-auto mb-4" />
              <h3 className="text-lg font-bold">Outerwear</h3>
            </div>
          </div>
        </div>
      </section>
      <br />

 
          



    </div>
  );
};

export default Section3;
