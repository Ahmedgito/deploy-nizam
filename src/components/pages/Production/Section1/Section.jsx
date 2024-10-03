import React from "react";
import { useInView } from 'react-intersection-observer';

const Section1 = React.forwardRef((props, sectionRef) => {
  // Intersection Observer hook for animations
  const { ref: inViewRef, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.5, // Trigger when 10% of the section is visible
  });

  return (
    <>
  

    <section  className="relative bg-white" ref={inViewRef} data-title="Quality in Focus">
      <div className="max-w-full mx-auto px-4 md:px-0">
        <div className="md:text-left text-center md:w-5/6 mx-auto">
          {/* Title Section */}
          <h1 className={`text-orange-500 font-montserrat text-center text-2xl md:text-3xl font-bold uppercase mb-6 `}>
            QUALITY IN FOCUS
          </h1>
          {/* Text Content */}
          <p className={`font-montserrat text-black leading-relaxed md:text-md text-base ${inView ? 'animate-zoomIn' : 'opacity-0'}`}>
            Our history in manufacturing has taught us to develop innovative products with a mindset in delivering consistent quality. We have the habit of exceeding our customer’s expectations. We are obsessed with delivering quality, not just from our manufacturing process but from the quality of service during the correspondence to the quality of raw material we source. <br /><br />
            We are working towards building quality standards switches to defect. We follow the best practices in manufacturing from Balance Score Card to DMAIC Improvement Cycle. We do a root cause analysis on all problems and use CAPA (corrective action and preventive action). The process to systematically investigate discrepancies and improve the quality system. For us, the value chain is important so that we work not only on our processes, but also on supplier and sub-supplier development. <br /><br />
            For agility, we have an in-house laboratory to test all materials we are using to ensure consistency.
          </p>
        </div>
      </div>
    </section>
    </>
  );
});

export default Section1;


