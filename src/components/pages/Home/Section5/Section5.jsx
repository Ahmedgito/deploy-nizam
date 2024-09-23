import React from 'react';
import CircleIcon from '../../../../assets/t-circle.png'; // Adjust the path according to your project
import OekoTex from '../../../../assets/1.png';
import BCI from '../../../../assets/bci.jpg';
import ISO9001 from '../../../../assets/9001.png';
import ISO14001 from '../../../../assets/14001.png';
import CE from '../../../../assets/ce.png';
import Wrap from '../../../../assets/wrap.jpg';
import BSCI from '../../../../assets/bsci.png';
import CTPAT from '../../../../assets/ctpat.png';
import Recycled from '../../../../assets/recycled.png';
import Organic from '../../../../assets/organic.png';
import BSCI2 from '../../../../assets/bsci2.png';
import Textile from '../../../../assets/textile.png';
import Sedex from '../../../../assets/sedex.png';
import Global from '../../../../assets/global.png';
import OEKO from '../../../../assets/ppp.png';
import WWF from '../../../../assets/wwf.png';

function Section5() {
  const icons = [
    OekoTex, BCI, ISO9001, ISO14001, CE, Wrap, BSCI, CTPAT, Recycled, Organic,
  ];

  const icons2 = [
   BSCI2 , Sedex , Textile
  ];

  const icons3 = [
    Recycled , Global ,  , WWF , OEKO  
   ];
 
  
  return (
    <>

                            {/* Desktop-only Section */}

    <section className='hidden md:flex' >
        {/* Title */}
        <div className=' text-center mt-20 text-orange-500 font-montserrat text-3xl'>
            <h1>
            Compliance <span className='font-bold'>Certificate</span>
            </h1>
        </div>

        <section className="relative bg-white py-16">
            {/* Left Circle */}
            <div className="absolute top-0 left-0 transform -translate-x-1/2">
            <img src={CircleIcon} alt="Circle Icon" className="w-48 h-48" />
            </div>

            <div className="container mx-auto px-4 flex items-center justify-center">
    {/* Heading & Dashed Line */}
    <div className="flex items-start leading-3 text-right">
        {/* Heading */}
        <h1 className="font-montserrat text-4xl text-orange-500 font-semibold mr-2">
        PRODUCT <br />STEWARDSHIP
        </h1>
        {/* Dashed Line */}
        <div className="h-72 border-l-[3px] border-solid border-orange-500"></div>
    </div>

    {/* Icon Grid */}
    <div className="grid grid-cols-2 sm:grid-cols-5 gap-6 items-center ml-8">
        {icons.map((icon, index) => (
        <div key={index} className="flex justify-center">
            <img src={icon} alt={`Compliance icon ${index + 1}`} className="w-32 h-32 object-contain" />
        </div>
        ))}
    </div>
    </div>

    <div className="container mt-28 mx-auto px-4 flex items-center justify-center">
    {/* Heading & Dashed Line */}
    <div className="flex items-start leading-3 text-right">
        {/* Heading */}
        <h1 className="font-montserrat text-4xl text-orange-500 font-semibold mr-2">
        SOCIAL <br />STEWARDSHIP
        </h1>
        {/* Dashed Line */}
        <div className="h-40 border-l-[3px] border-solid border-orange-500"></div>
    </div>

    {/* Icon Grid */}
    <div className="grid grid-cols-2 sm:grid-cols-5 gap-6 items-center ml-8">
        {icons2.map((icons2, index) => (
        <div key={index} className="flex justify-center">
            <img src={icons2} alt={`Compliance icon ${index + 1}`} className="w-32 h-32 object-contain" />
        </div>
        ))}

    </div>
    </div>

    <div className="container mt-28 mx-auto px-4 flex items-center justify-center">
    {/* Heading & Dashed Line */}
    <div className="flex items-start leading-3 text-right">
        {/* Heading */}
        <h1 className="font-montserrat text-3xl text-orange-500 font-semibold mr-2">
        ENVIRONMENTAL <br />STEWARDSHIP
        </h1>
        {/* Dashed Line */}
        <div className="h-40 border-l-[3px] border-solid border-orange-500"></div>
    </div>

    {/* Icon Grid */}
    <div className="grid grid-cols-2 sm:grid-cols-5 gap-6 items-center ml-8">
        {icons3.map((icons2, index) => (
        <div key={index} className="flex justify-center">
            <img src={icons2} alt={`Compliance icon ${index + 1}`} className="w-32 h-32 object-contain" />
        </div>
        ))}

    </div>
    </div>

            {/* Right Circle */}
            <div className="absolute top-0 right-96 transform translate-x-1/2">
            <img src={CircleIcon} alt="Circle Icon" className="w-24 h-24" />
            </div>
        </section>
      </section>




                    {/* Mobile-only Section */}

<section className="relative md:hidden block bg-white py-8">

{/* Title */}
<div className="text-center mt-10 text-orange-500 font-montserrat pb-20 text-2xl">
    <h1>
        Compliance <span className="font-bold">Certificate</span>
    </h1>
</div>

{/* Icon Grid */}
<div className="container mx-auto px-4">
    {/* PRODUCT STEWARDSHIP */}
    <div className="text-center mb-8">
        <h1 className="font-montserrat text-2xl text-orange-500 font-semibold">
            PRODUCT <br /> STEWARDSHIP
        </h1>
        <div className="w-72 mx-auto border-t-[3px] border-orange-500 mt-2"></div>
    </div>
    <div className="grid grid-cols-2 gap-4 items-center">
        {icons.map((icon, index) => (
            <div key={index} className="flex justify-center">
                <img src={icon} alt={`Compliance icon ${index + 1}`} className=" w-32 object-contain" />
            </div>
        ))}
    </div>

    {/* SOCIAL STEWARDSHIP */}
    <div className="text-center my-8">
        <h1 className="font-montserrat text-2xl text-orange-500 font-semibold">
            SOCIAL <br /> STEWARDSHIP
        </h1>
        <div className="w-72 mx-auto border-t-[3px] border-orange-500 mt-2"></div>
    </div>
    <div className="grid grid-cols-2 gap-4 items-center">
        {icons2.map((icon, index) => (
            <div key={index} className="flex justify-center">
                <img src={icon} alt={`Compliance icon ${index + 1}`} className="w-32 object-contain" />
            </div>
        ))}
    </div>

    {/* ENVIRONMENTAL STEWARDSHIP */}
    <div className="text-center my-8">
        <h1 className="font-montserrat text-xl text-orange-500 font-semibold">
            ENVIRONMENTAL <br /> STEWARDSHIP
        </h1>
        <div className="w-72 mx-auto border-t-[3px] border-orange-500 mt-2"></div>
    </div>
    <div className="grid grid-cols-2 gap-4 items-center">
        {icons3.map((icon, index) => (
            <div key={index} className="flex justify-center">
                <img src={icon} alt={`Compliance icon ${index + 1}`} className="w-32 object-contain" />
            </div>
        ))}
    </div>
</div>
</section>





    </>
  );
}

export default Section5;
