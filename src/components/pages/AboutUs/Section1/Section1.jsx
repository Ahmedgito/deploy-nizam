import React from "react";
import img1 from '../../../../assets/About/f-image.png' ;
import img2 from '../../../../assets/About/A2.png' ;
import img3 from '../../../../assets/About/A3.png' ;

const Section1 = () =>{
    return(
        <>
       <div className="font-montserrat  flex items-center  px-10 md:px-20 bg-white">
  <div className="grid grid-cols-1 md:grid-cols-2  md:gap-1 items-center">

    {/* Left Column: Image */}
    <div className="flex z-50 justify-center md:justify-end items-center">
      <img src={img1} alt="Introduction Image" className="max-w-full md:text-left text-center h-auto " />
    </div>

    {/* Right Column: Text */}
    <div className=" z-10 font-montserrat text-center px-2  md:text-left"> {/* Center text on mobile */}
      <h2 className="text-xl  md:text-4xl font-[800] mb-4 text-[#4c301c]">INTRODUCTION</h2>
      <p className="text-gray-600 text-sm md:text-lg  mb-6">
        Haji Nizam Din identified the potential during the mutiny of 1857 and started manufacturing tents for the army in the year 1869.
        The Government of India placed the firm on the approved list of contractors for the government, railway, and ruling chief of India.
      </p>
      <p className="text-gray-600 text-sm md:text-lg">
        The first factory was established in Lahore, and over the years gained an enviable reputation for high quality and became one of the
        prime end or for the Government and various agencies.
      </p>
    </div>
  </div>

</div>
<br />

<div className="font-montserrat hidden md:flex items-center px-10 md:px-20 bg-white">
  <div className="grid grid-cols-1 md:grid-cols-2 md:gap-1 items-center">

    {/* Left Column: Text */}
    <div className="font-montserrat text-center px-2 md:text-left"> {/* Center text on mobile */}
      <h2 className="text-xl md:text-4xl font-[800] mb-4 text-[#4c301c]">WORLD WAR II</h2>
      <p className="text-gray-600 text-sm md:text-lg mb-6">
      In the year 1939, the military authorities expressed their appreciation by relying on the company for the manufacture of numerous tents. Heavy military demand compelled NIZAM to manufacture different kinds of tents for the military authorities which were sent to various parts of the subcontinent and a new factory was started in1942 in Lahore.
      </p>
      <p className="text-gray-600 text-sm md:text-lg">
      Identifying Karachi as the future of Pakistan after independence modern facility was established in Karachi, Pakistan. It becomes one of the first manufacturing facilities to start exporting products from the 1950s to various countries in the Middle East and Iran.
      </p>
    </div>

    {/* Right Column: Image */}
    <div className="flex justify-center md:justify-start items-center">
      <img src={img2} alt="Introduction Image" className="max-w-full md:text-left text-center h-auto" />
    </div>
  </div>
</div>

<div className="font-montserrat flex md:hidden items-center px-10 md:px-20 bg-white">
  <div className="grid grid-cols-1 md:grid-cols-2 md:gap-1 items-center">

    {/* Left Column: Text */}
   <div className="flex justify-center md:justify-start items-center">
      <img src={img2} alt="Introduction Image" className="max-w-full md:text-left text-center h-auto" />
    </div>

    {/* Right Column: Image */}
    <div className="font-montserrat text-center px-2 md:text-left"> {/* Center text on mobile */}
      <h2 className="text-xl md:text-4xl font-[800] mb-4 text-[#4c301c]">WORLD WAR II</h2>
      <p className="text-gray-600 text-sm md:text-lg mb-6">
      In the year 1939, the military authorities expressed their appreciation by relying on the company for the manufacture of numerous tents. Heavy military demand compelled NIZAM to manufacture different kinds of tents for the military authorities which were sent to various parts of the subcontinent and a new factory was started in1942 in Lahore.
      </p>
      <p className="text-gray-600 text-sm md:text-lg">
      Identifying Karachi as the future of Pakistan after independence modern facility was established in Karachi, Pakistan. It becomes one of the first manufacturing facilities to start exporting products from the 1950s to various countries in the Middle East and Iran.
      </p>
    </div>

  </div>
</div>


<div className="font-montserrat flex items-center px-10 md:px-20 bg-white">
  <div className="grid grid-cols-1 md:grid-cols-2  md:gap-1 items-center">

    {/* Left Column: Image */}
    <div className="flex justify-center md:justify-end items-center">
      <img src={img3} alt="Introduction Image" className="max-w-full md:text-left text-center h-auto " />
    </div>

    {/* Right Column: Text */}
    <div className=" font-montserrat text-center px-2  md:text-left"> {/* Center text on mobile */}
      <h2 className="text-xl  md:text-4xl font-[800] mb-4 text-[#4c301c]">
      150 YEARS LATER</h2>
      <p className="text-gray-600 text-sm md:text-lg  mb-6">
      We are a diversified textile manufacturer, while our roots and expertise still is in Tents and Shelter, we have invested in new manufacturing facilities to become a diverse player in the global textile industry, servicing customers in over 100 Countries.
      Our portfolio of products across our manufacturing facilities are:
      </p>
      <p className=" text-gray-600 text-sm md:text-lg">
      -Tents and Shelter <br />
      -Denim Jeans and Protective Clothing forWorkWear <br />
      -Home Textile and Made Ups <br />
      -Polyester Fleece Blanket <br />
      </p>
    </div>
  </div>

</div>
                
        </>
    ) 
}; 

export default Section1 ; 