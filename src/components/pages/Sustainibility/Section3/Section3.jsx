import React from "react";
import { useInView } from 'react-intersection-observer';
import lightbulbImage from '../../../../assets/Sustainibility/bulb.png';  
import gridImage from '../../../../assets/Sustainibility/solar.png';  
import keyImage from '../../../../assets/Sustainibility/arm.png';  
import plugImage from '../../../../assets/Sustainibility/eco.png';  
import solarPanelImage from '../../../../assets/Sustainibility/panel.png';  


const Section3 = React.forwardRef((props, sectionRef) => {
    // Intersection Observer hook for animations
    const { ref: inViewRef, inView } = useInView({
      triggerOnce: true, // Trigger animation only once
      threshold: 0.5,    // Trigger when 50% of the section is visible  
    });

  return (
    <>
      <section
      ref={sectionRef}
      data-title='Nizam Goals'
      className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-4 md:px-8 grid grid-cols-12 gap-4">
        
        {/* Left Column - Heading */}
        <div className="col-span-12 md:col-span-3 text-center md:text-right flex items-center justify-center md:justify-start">
          <h2 className="text-[#DB7216] font-bold text-3xl md:text-4xl uppercase">
            Nizam One <br /> Goals
          </h2>
        </div>
        
        {/* Center Column - Three Images with Text */}
        <div className="col-span-12 md:col-span-5 space-y-6">
          <div className="flex items-center space-x-4">
            <img src={lightbulbImage} alt="Lightbulb Icon" className="w-auto h-auto" />
            <div>
              <p className="text-neutral-500 text-2xl font-bold">70% to 90%</p>
              <p className="text-gray-500 font-semibold">by 2021</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <img src={gridImage} alt="Grid Icon" className="w-auto h-auto" />
            <div>
              <p className="text-neutral-500 text-2xl font-bold">70% to 90%</p>
              <p className="text-gray-500 font-semibold">by 2021</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <img src={keyImage} alt="Key Icon" className="w-auto h-auto" />
            <div>
              <p className="text-neutral-500 text-2xl font-bold">70% to 90%</p>
              <p className="text-gray-500 font-semibold">by 2021</p>
            </div>
          </div>
        </div>
        
        {/* Right Column - Two Images with Text */}
        <div className="col-span-12 md:col-span-4 align-middle md:mt-20 md:space-y-6">
          <div className="flex items-center  space-x-4">
            <img src={plugImage} alt="Plug Icon" className="w-auto h-auto" />
            <div>
              <p className="text-neutral-500 text-2xl font-bold">15% to 40%</p>
              <p className="text-gray-500 font-semibold">by 2021</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <img src={solarPanelImage} alt="Solar Panel Icon" className="w-auto h-auto" />
            <div>
              <p className="text-neutral-500 text-2xl font-bold">150MW</p>
              <p className="text-gray-500 font-semibold">by 2021</p>
            </div>
          </div>
        </div>
        
      </div>
    </section>
    

    </>
  ) ;
});

export default Section3 ;