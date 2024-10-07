import React from "react";
import { useInView } from 'react-intersection-observer';
import goalImage1 from '../../../../assets/Sustainibility/health.png';  
import goalImage2 from '../../../../assets/Sustainibility/education.png';  
import goalImage3 from '../../../../assets/Sustainibility/growth.png'; 
import goalImage4 from '../../../../assets/Sustainibility/education.png';  
import carbonNeutralIcon from '../../../../assets/Sustainibility/carbon.png'; 
import zeroDischargeIcon from '../../../../assets/Sustainibility/discharge.png';  
import naturePositiveIcon from '../../../../assets/Sustainibility/Nature.png';  
import bg from '../../../../assets/Sustainibility/part-3.jpg' ;
import mbg from '../../../../assets/Sustainibility/mobile.jpg' ;

const Section4 = React.forwardRef((props, sectionRef) => {
  const { ref: inViewRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <>
      {/* {Desktop Section} */}
      <section 
        ref={sectionRef} 
        data-title="Our Aim"
        className="relative md:block hidden bg-cover bg-center py-12 h-[28rem]"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-8 grid grid-cols-12 gap-4">
          {/* Left Column - Image Grid */}
          <div className="col-span-12 md:col-span-6 flex flex-wrap justify-center py-20 md:justify-start space-x-2">
            <img src={goalImage1} alt="Goal 1" className="w-36 h-36 object-cover" />
            <img src={goalImage2} alt="Goal 2" className="w-36 h-36 object-cover" />
            <img src={goalImage3} alt="Goal 3" className="w-36 h-36 object-cover" />
            <img src={goalImage4} alt="Goal 4" className="w-36 h-36 object-cover" />
          </div>

          {/* Right Column - Text Goals */}
          <div ref={inViewRef} className="font-montserrat col-span-12 md:col-span-6 space-y-6 flex flex-col items-center justify-center">
            <div className="flex items-center space-x-14">
              <img src={carbonNeutralIcon} alt="Carbon Neutral" className={`w-20 h-20 ${inView ? 'animate-slideInLeft' : 'opacity-0'}`} />
              <div className={`${inView ? 'animate-slideInRight' : 'opacity-0'}`}>
                <p className="text-white font-bold text-2xl">Carbon Neutral</p>
                <p className="text-gray-300 text-xl font-medium">by 2023</p>
              </div>
            </div>
            <div className="flex items-center space-x-14">
              <img src={zeroDischargeIcon} alt="Zero Discharge" className={`w-20 h-20 ${inView ? 'animate-slideInLeft' : 'opacity-0'}`} />
              <div className={`${inView ? 'animate-slideInRight' : 'opacity-0'}`}>
                <p className="text-white font-bold text-2xl">Zero Discharge</p>
                <p className="text-gray-300 text-xl font-medium">by 2025</p>
              </div>
            </div>
            <div className="flex items-center space-x-14">
              <img src={naturePositiveIcon} alt="Nature Positive" className={`w-20 h-20 ${inView ? 'animate-slideInLeft' : 'opacity-0'}`} />
              <div className={`${inView ? 'animate-slideInRight' : 'opacity-0'}`}>
                <p className="text-white font-bold text-2xl">Nature Positive</p>
                <p className="text-gray-300 text-xl font-medium">by 2027</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* {Mobile Section} */}
      <section 
        ref={sectionRef} 
        data-title="Our Aim"
        className="relative md:hidden block bg-cover bg-center py-8"
        style={{ backgroundImage: `url(${mbg})` }}
      >
        <div className="max-w-full mx-auto px-5 grid grid-cols-12 gap-2">
          {/* Image Grid */}
          <div className="col-span-12 flex flex-wrap justify-center gap-4 ">
            <img src={goalImage1} alt="Goal 1" className="w-24 h-24 object-contain" />
            <img src={goalImage2} alt="Goal 2" className="w-24 h-24 object-contain" />
            <img src={goalImage3} alt="Goal 3" className="w-24 h-24 object-contain" />
            <img src={goalImage4} alt="Goal 4" className="w-24 h-24 object-contain" />
          </div>

          {/* Text Goals */}
          <div className="col-span-12 mt-20 space-y-4 flex flex-col items-center">
            <div className="flex items-center space-x-6">
              <img src={carbonNeutralIcon} alt="Carbon Neutral" className={`w-20 h-20 `} />
              <div className={` `}>
                <p className="text-white font-bold text-lg">Carbon Neutral</p>
                <p className="text-gray-300 text-sm">by 2023</p>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <img src={zeroDischargeIcon} alt="Zero Discharge" className={`w-20 h-20  `} />
              <div className={` `}>
                <p className="text-white font-bold text-lg">Zero Discharge</p>
                <p className="text-gray-300 text-sm">by 2025</p>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <img src={naturePositiveIcon} alt="Nature Positive" className={`w-20 h-20 `} />
              <div className={` }`}>
                <p className="text-white font-bold text-lg">Nature Positive</p>
                <p className="text-gray-300 text-sm">by 2027</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
});

export default Section4;
