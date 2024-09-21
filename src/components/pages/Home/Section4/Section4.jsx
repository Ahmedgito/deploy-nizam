import React from "react";
import waterIcon from '../../../../assets/water.png';
import natureIcon from '../../../../assets/nature.png';
import carbonIcon from '../../../../assets/carbon.png';
import familyIcon from '../../../../assets/person.png';
import spoolIcon from '../../../../assets/bell.png';
import factoryIcon from '../../../../assets/factory.png';
import arrowIcon from '../../../../assets/Arrow-min.png';

const Section4 = () => {
  return (
    <>
      {/* Mobile-only Section */}
      <section className="font-montserrat bg-orange-500 text-center leading-tight text-white py-10 md:hidden">
        {/* Title */}
        <h1 className="text-xl mt-3 font-thin leading-tight">NIZAM</h1>
        <h2 className="text-2xl font-bold">AT A GLANCE</h2>

        {/* Icon 1 */}
        <div className="mt-4">
          <img src={familyIcon} alt="Family Business" className="w-40 mx-auto" />
          <p className="text-lg">Family Business</p>
          <p>Since 1869</p>
        </div>

        {/* Icon 2 */}
        <div className="mt-4">
          <img src={factoryIcon} alt="Factory" className="w-36 mx-auto" />
          <p className="text-lg">6 Factories With</p>
          <p>Over 1,200,000 Sq Ft</p>
        </div>

        {/* Icon 3 */}
        <div className="mt-7">
          <img src={spoolIcon} alt="Spool" className="w-36 mx-auto" />
          <p className="mt-4 text-lg">Largest Spool Facility</p>
        </div>
      </section>

{/* Desktop-only Section */}
<section className="relative hidden md:flex font-montserrat bg-orange-500 text-white justify-end py-10">
  {/* Family Business Icon */}
  <div className="text-center me-28">
    <img src={familyIcon} alt="Family Business" className="w-36 h-36 mx-auto mb-4" />
    <p className="text-lg leading-tight">Family Business</p>
    <p>Since 1869</p>
  </div>

  {/* Factory Icon */}
  <div className="text-center me-28">
    <img src={factoryIcon} alt="Factories" className="w-36 h-36 mx-auto mb-4" />
    <p className="text-lg leading-tight">6 Factories With</p>
    <p>Over 1,200,000 Sq Ft</p>
  </div>

  {/* Spool Icon */}
  <div className="text-center me-80">
    <img src={spoolIcon} alt="Textile Manufacturer" className="w-36 h-36 mx-auto mb-4" />
    <p className="text-lg">Vertical And Diversified</p>
    <p>Textile Manufacturer</p>
  </div>

  <section>
  <a href="#" className="absolute bottom-4 right-4 text-white font-semibold me-10 flex items-center">
  READ MORE
     <img src={arrowIcon} alt="Arrow Icon" className="h-5 w-5 mr-2" /> 
  </a>
</section>

</section>


      {/* Lower Section */}
      <section className="hidden  bg-orange-500 text-white py-10 px-20">
        <div className="flex justify-between items-center">
          {/* Family Business */}
          <div className="text-center">
            <img src={familyIcon} alt="Family Business" className="w-24 h-24 mx-auto mb-4" />
            <p className="text-lg font-bold">Family Business</p>
            <p>Since 1869</p>
          </div>

          {/* Factory */}
          <div className="text-center">
            <img src={factoryIcon} alt="Factory" className="w-24 h-24 mx-auto mb-4" />
            <p className="text-lg font-bold">6 Factories With</p>
            <p>Over 1,200,000 Sq Ft</p>
          </div>

          {/* Textile Manufacturer */}
          <div className="text-center">
            <img src={spoolIcon} alt="Textile Manufacturer" className="w-24 h-24 mx-auto mb-4" />
            <p className="text-lg font-bold">Vertical And Diversified</p>
            <p>Textile Manufacturer</p>
          </div>

          {/* Read More */}
          <div className="text-right">
            <a href="#" className="text-white font-bold underline">
              READ MORE
            </a>
          </div>
        </div>
      </section>

      <div className="bg-orange-400 h-[45vh] md:flex justify-center items-center hidden">
      <div className="flex w-full max-w-screen-lg">
        
        {/* Left Side Text */}
        <div className="w-1/2 text-white flex items-center justify-center text-right px-8">
          <h2 className="text-4xl font-bold font-montserratleading-snug">
            NIZAM ONE SIGNIFIES<br />
            NIZAM TO BECOME<br />
            NATURE POSITIVE<br />
            NOT JUST NEUTRAL
          </h2>
        </div>

        {/* Vertical Dashed Line */}
        <div className="border-l-2 border-dashed border-white mx-8"></div>

        {/* Right Side List */}
        <div className="w-1/2 pl-10">
          <div className="mb-6 flex items-center">
            <img src={carbonIcon} alt="Carbon Neutral" className="w-24 h-24 mr-4" />
            <div className="font-montserrat">
              <p className=" text-2xl font-bold text-white">Carbon Neutral</p>
              <p className="text-white text-lg">by 2022</p>
            </div>
          </div>

          <div className="mb-6 flex items-center font-montserrat">
            <img src={waterIcon} alt="Zero Discharge" className="w-24 h-24 mr-4" />
            <div>
              <p className="text-2xl font-bold text-white">Zero Discharge</p>
              <p className="text-white text-lg">by 2023</p>
            </div>
          </div>

          <div className="flex items-center font-montserrat">
            <img src={natureIcon} alt="Nature Positive" className="w-24 h-24 mr-4" />
            <div>
              <p className="text-2xl font-bold text-white">Nature Positive</p>
              <p className="text-white text-lg">by 2028</p>
            </div>
          </div>
        </div>
      </div>
    </div>


 <div className="bg-orange-400 h-auto flex flex-col justify-center items-center md:hidden py-8">
  {/* Title */}
  <div className="text-white text-center mb-4 px-4">
    <h2 className="text-xl font-bold leading-tight font-montserrat ">
      NIZAM ONE SIGNIFIES<br />
      NIZAM TO BECOME<br />
      NATURE POSITIVE<br />
      NOT JUST NEUTRAL
    </h2>
  </div>

  {/* Dashed Line */}
  <div className="w-3/4 border-t-2 border-dashed border-white mb-4"></div>

  {/* Icons and Descriptions */}
  <div className="space-y-8">
    {/* Carbon Neutral */}
    <div className="flex flex-col items-center text-center">
      <img src={carbonIcon} alt="Carbon Neutral" className="w-20 h-20 " />
      <div className="font-montserrat">
        <p className="text-lg font-bold text-white">Carbon Neutral</p>
        <p className="text-white text-sm">by 2022</p>
      </div>
    </div>

    {/* Zero Discharge */}
    <div className="flex flex-col items-center text-center">
      <img src={waterIcon} alt="Zero Discharge" className="w-20 h-20" />
      <div className="font-montserrat">
        <p className="text-lg font-bold text-white">Zero Discharge</p>
        <p className="text-white text-sm">by 2023</p>
      </div>
    </div>

    {/* Nature Positive */}
    <div className="flex flex-col items-center text-center">
      <img src={natureIcon} alt="Nature Positive" className="w-20 h-20 " />
      <div className="font-montserrat">
        <p className="text-lg font-bold text-white">Nature Positive</p>
        <p className="text-white text-sm">by 2028</p>
      </div>
    </div>
  </div>
</div>

    </>
  );
};

export default Section4;
