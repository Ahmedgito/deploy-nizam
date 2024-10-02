import React from "react";
import green from '../../../../assets/About/green-nizam.png';

const Section2 = React.forwardRef((props, ref) => {
  return (
    <>
      <section ref={ref} data-title="Life @ Nizam" className="bg-white flex flex-col items-center justify-center py-8">
        <h1 className="text-center text-[#D36D03] font-semibold font-montserrat text-lg md:text-xl md:mx-auto mx-16 mb-4">
          Learn more about our companies
        </h1>
        <img src={green} alt="Nizam Logo" className="h-16 md:h-auto" />
      </section>
    </>
  );
});

export default Section2;
