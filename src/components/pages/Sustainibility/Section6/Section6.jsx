import React from 'react';
import { useInView } from 'react-intersection-observer';
import bg from '../../../../assets/Production/section_img.png';
import arrow from '../../../../assets/Home/Arrow-min.png' ;

const Section6 = React.forwardRef((props, sectionRef) => {
  // Intersection Observer hook for animations
  const { ref: inViewRef, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.5,    // Trigger when 50% of the section is visible
  });

  return (
    <>

                {/* {Desktop-Section} */}
    <section
      className="md:block hidden relative bg-cover  bg-center bg-no-repeat text-white"
      style={{ backgroundImage: `url(${bg})` }} 
      ref={inViewRef}
    >
      <div className="max-w-[1400px] mx-auto pt-16 px-6 pr-28 pl-28 grid lg:grid-cols-[60%_40%] gap-10">
        
        {/* Left Column - Sustainable Process Text */}
        <div className={`font-montserrat space-y-6 max-w-[100%] transition-all duration-700 ${inView ? 'animate-slideInLeft' : 'opacity-0'}`}>
          <h1 className="text-orange-500 font-bold text-3xl md:text-5xl uppercase">
            Sustainable <br /> Output
          </h1>
          <p className="text-base md:text-xl leading-relaxed">
          Nizam Apparel’s foundation was to make a sustainable fashion apparel factory with a best in class laundry. Ourgoal under Nizam One is to achieveour sustainability targets without losing creative freedom to make replicable product          </p>
          
        </div>

        {/* Right Column - Waste Management */}
        <div className={`bg-orange-500 p-8 me-20 font-montserrat space-y-3 transition-all duration-700 ${inView ? 'animate-slideInTop' : 'opacity-0'}`}>
          <h2 className="text-3xl text-stone-700 font-bold uppercase text-center">
            Waste <br /> Management
          </h2>
          <ul className="list-disc space-y-4 ml-5 text-base leading-relaxed">
            <li>Effluent Treatment Plant to treat all wastewater and develop it into sludge for reuse in the circular economy.</li>
            <li>Segregation of waste in more than 12 different categories for easy distribution to recycling partners in the circular economy.</li>
            <li>Eliminate as many disposable products as possible, and use reusable items in our process.</li>
            <li>Partnering with various organizations to utilize rejected garments as well as cut pieces.</li>
          </ul>
        </div>
      </div>
    </section>



                {/* {Mobile-Section} */}
                <section
  className="relative md:hidden bg-cover bg-center bg-no-repeat text-white"
  ref={sectionRef}
  style={{ backgroundImage: `url(${bg})` }}
>
  <div className="max-w-screen-lg mx-auto pt-12 px-6 lg:px-12 grid lg:grid-cols-2 gap-8">
    {/* Left Column - Sustainable Process Text */}
    <div className="space-y-3">
      <h1 className="text-white font-bold text-center text-2xl uppercase">
        Sustainable Output
      </h1>
      <p className="text-base text-center leading-tight">
        Nizam Apparel’s foundation was to make a sustainable fashion apparel factory with a best in class laundry. Our goal under Nizam One is to achieve our sustainability targets without losing creative freedom to make replicable products.
      </p>
    </div>

    {/* Button */}
    <a href="#" className="font-montserrat bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-6 rounded-lg flex justify-center items-center  w-max mx-auto">
        Waste Management <span className="ml-2"><img src={arrow} alt="" className='w-4 h-4 filter brightness-0 invert' /></span>
      </a>

    {/* Right Column - Waste Management */}
    <div className="bg-orange-500 p-8  space-y-6 text-center">
      <h2 className="text-3xl text-slate-700 font-bold uppercase">
        Waste Management
      </h2>
      <ul className="list-disc space-y-4 ml-5 text-lg px-5 leading-tight text-left">
        <li>Effluent Treatment Plant to treat all wastewater and develop it into sludge for reuse in the circular economy.</li>
        <li>Segregation of waste in more than 12 different categories for easy distribution to recycling partners in the circular economy.</li>
        <li>Eliminate as many disposable products as possible, and use reusable items in our process.</li>
        <li>Partnering with various organizations to utilize rejected garments as well as cut pieces.</li>
      </ul>

      
    </div>
  </div>
</section>

</>

  );
});

export default Section6;