import React from "react";

import { useInView } from 'react-intersection-observer';


const Template = React.forwardRef((props, sectionRef) => {
    // Intersection Observer hook for animations
    const { ref: inViewRef, inView } = useInView({
      triggerOnce: true, // Trigger animation only once
      threshold: 0.5,    // Trigger when 50% of the section is visible  
    });

  return (
    <>

    

    </>
  ) ;
});

export default Template ;