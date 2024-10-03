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
<section className=" ">
  <div className="  absolute inset-0 flex items-center md:pl-48 md:justify-start justify-center ">
    <h1 className="md:text-7xl pt-40 text-4xl text-[#db7216] font-bold text-center">
      CONTACT US
    </h1>
    
  </div>
</section>

    

    </>
  ) ;
});

export default Section1 ;