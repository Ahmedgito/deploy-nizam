import React from 'react';
import { useInView } from 'react-intersection-observer';
import bg from '../../../../assets/Production/section_img.png';

const Section3 = React.forwardRef((props, sectionRef) => {
  // Intersection Observer hook for animations
  const { ref: inViewRef, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.5,    // Trigger when 50% of the section is visible
  });

  return (
    
    <>
    <section
      className="md:block hidden relative bg-cover  bg-center bg-no-repeat text-white"
      style={{ backgroundImage: `url(${bg})` }} 
      ref={inViewRef}
    >
      <div className="max-w-[1400px] mx-auto py-16 px-6 pr-28 pl-28 grid lg:grid-cols-[60%_40%] gap-10">
        
        {/* Left Column - Sustainable Process Text */}
        <div className={`font-montserrat space-y-6 max-w-[100%] transition-all duration-700 ${inView ? 'animate-slideInLeft' : 'opacity-0'}`}>
          <h1 className="text-orange-500 font-bold text-3xl md:text-5xl uppercase">
            Sustainable <br /> Process
          </h1>
          <p className="text-base leading-relaxed">
            In recent years, sustainability has become a major trend in the textile industry. Consumers are better informed and increasingly expect ecologically and socially acceptable products and sustainable solutions in the textile industry. At Nizam, we are increasingly committed to tapping innovation potential and promoting sustainable development. Sustainability strategies range from sustainable designs and the use of innovative materials and processes to the optimization of resource consumption and recycling.
          </p>
          <p className="text-base leading-relaxed">
            Our extensive fabric library of more than 10,000 unique fabrics with the leading mills around the world helps to reduce lead times, offer a variety of sustainable options, and results in competitive pricing. The fabric library is intended to be utilized as a reference tool for idea generation and being able to react fast to customer demands. Our range of fabrics allows you to choose from varieties or Organic Cottons to recycled blends.
          </p>
          <p className="text-base leading-relaxed">
            We have invested in a new centralized cutting department with a cutting table at 48-meter length to reduce fabric wastage and increase our fabric utilization yields by 13%. We have also tried making an effort with small boutique shops and designers to utilize our cut pieces of fabric to reduce pre-consumer waste.
          </p>
          <p className="text-base leading-relaxed">
            Lastly, at Nizam, we follow a value stream map where we focus on being efficient and effective by implementing lean production techniques in our daily lives to become better than yesterday.
          </p>
        </div>

        {/* Right Column - Waste Management */}
        <div className={`bg-orange-500 p-8 me-44 font-montserrat space-y-3 transition-all duration-700 ${inView ? 'animate-slideInTop' : 'opacity-0'}`}>
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

    <section
      className="relative md:hidden bg-cover bg-center bg-no-repeat text-white"
      ref={sectionRef}
      style={{ backgroundImage: `url(${bg})` }} // Corrected background image usage
    >
      <div className="max-w-screen-lg mx-auto py-16 px-6 lg:px-12 grid lg:grid-cols-2 gap-8">
        {/* Left Column - Sustainable Process Text */}
        <div className="space-y-6">
          <h1 className="text-orange-500 font-bold text-3xl md:text-4xl uppercase">
            Sustainable Process
          </h1>
          <p className="text-lg leading-relaxed">
            In recent years, sustainability has become a major trend in the textile industry. Consumers are better informed and increasingly expect ecologically and socially acceptable products and sustainable solutions in the textile industry. At Nizam, we are increasingly committed to tapping innovation potential and promoting sustainable development. Sustainability strategies range from sustainable designs and the use of innovative materials and processes to the optimization of resource consumption and recycling.
          </p>
          <p className="text-lg leading-relaxed">
            Our extensive fabric library of more than 10,000 unique fabrics with the leading mills around the world helps to reduce lead times, offer a variety of sustainable options, and results in competitive pricing. The fabric library is intended to be utilized as a reference tool for idea generation and being able to react fast to customer demands. Our range of fabrics allows you to choose from varieties or Organic Cottons to recycled blends.
          </p>
          <p className="text-lg leading-relaxed">
            We have invested in a new centralized cutting department with a cutting table at 48-meter length to reduce fabric wastage and increase our fabric utilization yields by 13%. We have also tried making an effort with small boutique shops and designers to utilize our cut pieces of fabric to reduce pre-consumer waste.
          </p>
          <p className="text-lg leading-relaxed">
            Lastly, at Nizam, we follow a value stream map where we focus on being efficient and effective by implementing lean production techniques in our daily lives to become better than yesterday.
          </p>
        </div>

        {/* Right Column - Waste Management */}
        <div className="bg-orange-500 p-8 space-y-6">
          <h2 className="text-2xl font-bold uppercase text-center">
            Waste Management
          </h2>
          <ul className="list-disc space-y-4 ml-5 text-lg leading-relaxed">
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

export default Section3;
