import React from "react";
import { useInView } from 'react-intersection-observer';


const Section5 = React.forwardRef((props, sectionRef) => {
    // Intersection Observer hook for animations
    const { ref: inViewRef, inView } = useInView({
      triggerOnce: true,    // Trigger when 50% of the section is visible  
    });

    const actions = [
        {
          number: 1,
          text: "Water flow meters to control and measure, identify and reduce water losses",
        },
        {
          number: 2,
          text: "Conduct trials to convert our steam boilers power generation only by waste (orange peels, rice husks, and animal manure)",
        },
        {
          number: 3,
          text: "Maximize our ratio to purchase BCI Cotton",
        },
        {
          number: 4,
          text: "We can provide product that is certified Organic Cotton (GOTS) and Recycled Polyester (GRS)",
        },
        {
            number: 5,
            text: "Maximize our ratio to purchase BCI Cotton",
          },
          {
            number: 6,
            text: "Water flow meters to control and measure, identify and reduce water losses",
          },
          {
            number: 7,
            text: "Conduct trials to convert our steam boilers power generation only by waste (orange peels, rice husks, and animal manure)",
          },
          {
            number: 8,
            text: "Maximize our ratio to purchase BCI Cotton",
          },
          {
            number: 10,
            text: "We can provide product that is certified Organic Cotton (GOTS) and Recycled Polyester (GRS)",
          },
          {
              number: 11,
              text: "Maximize our ratio to purchase BCI Cotton",
            },
            {
                number: 12,
                text: "Water flow meters to control and measure, identify and reduce water losses",
              },
              {
                number: 13,
                text: "Conduct trials to convert our steam boilers power generation only by waste (orange peels, rice husks, and animal manure)",
              },
              {
                number: 14,
                text: "Maximize our ratio to purchase BCI Cotton",
              },
              {
                number: 15,
                text: "We can provide product that is certified Organic Cotton (GOTS) and Recycled Polyester (GRS)",
              },
               
      ];

  return (
    <>
       <section ref={sectionRef} data-title="Our Aim"  className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-center text-orange-500 font-bold md:text-5xl text-2xl mb-12">
          SUSTAINABILITY ACTIONS
        </h2>
        <div  className="grid grid-cols-1 md:px-32 px-0 md:grid-cols-2 gap-8">
          {actions.map((action, index) => (
            <div
              ref={inViewRef}
              key={index}
              
              className={`flex space-x-4 items-start `}
            >
              <span className={` md:text-9xl text-6xl text-orange-300 font-bold  ${inView  ? 'animate-slideInRight' : 'opacity-0'}`} >
                {action.number}
              </span>
              <p 
              className={`  text-gray-700 md:px-10 md:mt-5 md:text-2xl  ${inView  ? 'animate-slideInRight' : 'opacity-0'}`}
               >
                {action.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
    
    

    </>
  ) ;
});

export default Section5 ;