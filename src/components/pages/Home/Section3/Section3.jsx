import React from 'react';
import backgroundImage from '../../../../assets/part-2PNG.png';
import industrialIcon from '../../../../assets/industrial.png';
import hiVisIcon from '../../../../assets/hivis.png';
import institutionalIcon from '../../../../assets/institutional.png';
import fireIcon from '../../../../assets/fire.png';

const Section3 = () => {
  return (
    <div className='bg-white '>
        <br />
      <section className=" md:flex hidden relative w-full h-[450px] flex items-center justify-center">
        {/* Background Image */}
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
        </div>

        {/* Heading */}
        <h1 className="font-montserrat absolute  left-[50%] top-10 text-5xl font-bold text-orange-500">
          PRODUCT RANGE
        </h1>
        

        {/* Icons and Text Section */}
        <div className="absolute h-full flex items-center justify-end bg-transparent text-white w-full">
          <div className="flex flex-row space-x-20 text-center p-8">
            {/* Icon 1 - Industrial Range */}
            <div>
              <img src={industrialIcon} alt="Industrial Range" className="w-32 h-32 mx-auto mb-4" />
              <h3 className="text-lg font-bold">Industrial Range</h3>
            </div>
            
            {/* Icon 2 - Hi Vis Range */}
            <div>
              <img src={hiVisIcon} alt="Hi Vis Range" className="w-32 h-32 mx-auto mb-4" />
              <h3 className="text-lg font-bold">Hi Vis Range</h3>
            </div>

            {/* Icon 3 - Institutional Range */}
            <div>
              <img src={institutionalIcon} alt="Institutional Range" className="w-32 h-32 mx-auto mb-4" />
              <h3 className="text-lg font-bold">Institutional Range</h3>
            </div>

            {/* Icon 4 - Fire Range */}
            <div>
              <img src={fireIcon} alt="Fire Range" className="w-32 h-32 mx-auto mb-4" />
              <h3 className="text-lg font-bold">Fire Range</h3>
            </div>

            {/* Icon 5 - Outerwear */}
            <div>
              <img src={hiVisIcon} alt="Outerwear" className="w-32 h-32 mx-auto mb-4" />
              <h3 className="text-lg font-bold">Outerwear</h3>
            </div>
          </div>
        </div>
      </section>
      <br />
    </div>
  );
};

export default Section3;
