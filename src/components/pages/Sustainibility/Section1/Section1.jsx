import React from "react";

import { useInView } from 'react-intersection-observer';


const Section1 = React.forwardRef((props, sectionRef) => {
    // Intersection Observer hook for animations
    const { ref: inViewRef, inView } = useInView({
      triggerOnce: true, // Trigger animation only once
      threshold: 0.5,    // Trigger when 50% of the section is visible
    });

  return (
    <>

    {/* {Desktop-View} */}
 <div className="md:block hidden" ref={inViewRef}>
        <section  ref={sectionRef} data-title="Sustainability">
      
          <div className="font-montserrat  absolute inset-0 flex items-center justify-center ">
            <h1 className="md:text-7xl md:pt-40 pt-20 text-4xl text-[#db7216] font-bold text-center">
              Sustainibility
            </h1>
          </div>
     
        </section>
      </div>

                    {/* {Mobile-View} */}

      <div className=" block md:hidden" ref={inViewRef}>
        <section  ref={sectionRef} data-title="Sustainability">
      
          <div className="font-montserrat  absolute inset-0 flex items-center justify-center ">
            <h1 className="  pt-20 text-4xl text-orange-500 font-bold text-center">
              Sustainibility
            </h1>
          </div>
     
        </section>
      </div>


    </>
  ) ;
});

export default Section1 ;