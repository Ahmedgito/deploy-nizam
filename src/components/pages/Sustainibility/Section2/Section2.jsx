import React from "react";
import { useInView } from 'react-intersection-observer';
import vestImage from '../../../../assets/Sustainibility/vest.png'
import circel1 from '../../../../assets/Sustainibility/t_circle.png'


const Section2 = React.forwardRef((props, sectionRef) => {
    // Intersection Observer hook for animations
    const { ref: inViewRef, inView } = useInView({
      triggerOnce: true, // Trigger animation only once
      threshold: 0.5,    // Trigger when 50% of the section is visible  
    });

  return (
    <>

        {/* {Desktop-View} */}
    <section className="md:block hidden">
     <section 
      ref={sectionRef} data-title="Nizam One Initiative"
     className="bg-gray-200 py-16 -mt-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-12 gap-4">
        {/* Left Column - Blank */}
        <div className="col-span-2">
        <img src={circel1} alt="Nizam One Vest" className="w-full absolute top-64 h-full max-w-sm left-0 object-contain " />
        </div>

        {/* Middle Column - Content */}
        <div ref={inViewRef} className="col-span-8 mx-20 text-center space-y-6">
          <h2 className="text-orange-500 font-bold text-3xl md:text-4xl uppercase">
            Nizam One Initiative
          </h2>

          

          <p className={`text-gray-700 text-lg leading-relaxed  ${inView ? 'animate-slideInBottom' : 'opacity-0'}`} >
            Our secret to surviving 150 years is constantly raising the bar and innovating. Our prime focus going forward is sustainability, which is why we have launched our initiative Nizam One. It is our obsession to reimagine everything, making sustainability the number-one objective. Nizam One is a holistic approach trying to become one with the earth and people.
          </p>
          <p className={`text-gray-700 text-lg leading-relaxed  ${inView ? 'animate-slideInBottom' : 'opacity-0'}`} >
            Nizam One builds so our core values as an organization commit to the change. We are driving this initiative not only from our values but also picking up our process map of Input, Process, Output, and People.
          </p>
        </div>

        {/* Right Column - Image */}
        <div className=" col-span-2 flex justify-end place-items-end ">
          <img src={vestImage} alt="Nizam One Vest" className="absolute top-[28rem] w-96 h-full max-w-xs right-0 object-contain " />
        </div>
      </div>
    </section>
    </section>

   {/* Mobile-Only View */}
<section className="sm:block md:hidden bg-white py-8">
  <div className="max-w-full px-4 space-y-4 text-center">
    <h2 className="text-orange-500 font-bold text-2xl uppercase">
      Nizam One Initiative
    </h2>
    <p className="text-gray-700 text-base leading-relaxed">
      Our secret to surviving 150 years is constantly raising the bar and innovating. Our prime focus going forward is sustainability, which is why we have launched our initiative Nizam One. It is our obsession to reimagine everything, making sustainability the number-one objective. Nizam One is a holistic approach trying to become one with the earth and people.
    </p>
    <p className="text-gray-700 text-base leading-relaxed">
      Nizam One builds so our core values as an organization commit to the change. We are driving this initiative not only from our values but also picking up our process map of Input, Process, Output, and People.
    </p>
  </div>

  {/* Image Section */}
  <div className="flex justify-center mt-8">
    <img src={vestImage} alt="Nizam One Vest" className="w-48 h-auto object-contain" />
  </div>
</section>



    </>
  ) ;
});

export default Section2 ;