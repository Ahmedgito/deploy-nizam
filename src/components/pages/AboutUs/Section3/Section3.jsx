import React from "react";
import background from '../../../../assets/About/s-bg.png'; 
import goodHealth from '../../../../assets/About/Layer-8-min.png';  
import qualityEducation from '../../../../assets/About/Layer-10-min.png';  
import decentWork from '../../../../assets/About/Layer-11-min.png';  

const Section3 = React.forwardRef((props, ref) => {
  return (
    <>
    <section 
      ref={ref}
      data-title="Nizam Foundation "
      className="font-montserrat relative bg-cover bg-center text-white h-64 hidden md:flex items-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div> {/* Dark overlay */}
      
      <div className="container w-[70%] mx-auto flex justify-between items-center relative z-10 px-0">
        {/* Left side text */}
        <div className="text-left">
          <h2 className="font-montserrat text-4xl font-bold">LIFE <br />@ NIZAM</h2>
        </div>

        {/* Right side icons */}
        <div className="flex space-x-20">
          {/* First Icon */}
          <div className="flex flex-col items-center">
            <img src={goodHealth} alt="Good Health" className="" />
            
          </div>

          {/* Second Icon */}
          <div className="flex flex-col items-center">
            <img src={qualityEducation} alt="Quality Education" className="" />
            
          </div>

          {/* Third Icon */}
          <div className="flex flex-col items-center">
            <img src={decentWork} alt="Decent Work and Economic Growth" className="" />
            
          </div>
        </div>
      </div>
    </section>

    <section
  className="font-montserrat relative bg-cover bg-center text-white h-auto md:hidden flex flex-col items-center py-8"
  style={{ backgroundImage: `url(${background})` }}
>
  <div className="absolute inset-0 bg-black bg-opacity-50"></div> {/* Dark overlay */}

  <div className="container w-[90%] mx-auto relative z-10 px-4">
    {/* Heading */}
    <div className="text-center mb-6">
      <h2 className="text-3xl font-bold">LIFE @ NIZAM</h2>
    </div>

    {/* Icon Grid - 2 icons on first row, 1 on second */}
    <div className="grid grid-cols-2 gap-4">
      {/* First Icon */}
      <div className="flex flex-col items-center">
        <div className=" ">
          <img src={goodHealth} alt="Good Health" className="w-32 h-32 " />
        </div>
         
      </div>

      {/* Second Icon */}
      <div className="flex flex-col items-center">
        <div className="">
          <img src={qualityEducation} alt="Quality Education" className="w-32 h-32 " />
        </div>
         
      </div>

      {/* Third Icon - full-width on second row */}
      <div className="flex flex-col items-center col-span-2">
        <div className=" ">
          <img src={decentWork} alt="Decent Work and Economic Growth" className="w-32 h-32" />
        </div>
        
      </div>
    </div>
  </div>
</section>


</>
  );
});

export default Section3;
