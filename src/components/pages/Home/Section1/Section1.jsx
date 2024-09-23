import React from "react";
import workerImage from '../../../../assets/worker.png' ;

const Section1 = () => {
    return (
      <>
        <div className="relative z-10 flex flex-col items-center justify-start md:justify-center h-full px-4 md:px-10 md:flex-row mt-[-780px] sm:mt-[-600px]" >
          {/* Worker Image */}
          <div className="flex-shrink-0" style={{ marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>
            <img src={workerImage} alt="Worker" className="z-50 max-w-[90%] h-110 md:h-180" /> {/* Responsive image size */}
          </div>
  
          {/* Text Content */}
          <div className="text-white font-montserrat text-center md:text-left leading-3">
            <h1 className="text-white text-4xl md:text-7xl font-bold mb-4 md:mb-1">VISION</h1> {/* Responsive font size */}
            <p className="text-white text-lg md:text-2xl font-semibold md:max-w-lg">
              TO BE THE MOST INNOVATIVE,<br />
              RELIABLE, AND SUSTAINABLE <br />
              PARTNER FOR WORKWEAR <br />
              MANUFACTURING.
            </p>
          </div>
        </div>
      </>
    );
  };
  
  export default Section1;
  