import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Green from '../../../../assets/Production/Greenoffice.png'
import GRS from '../../../../assets/Production/GRS.png'
import Recycle from '../../../../assets/Production/recycled.png'
import Sedex from '../../../../assets/Production/sedex.png'
import Wrap from '../../../../assets/Production/Wrap.png'
import Slider from "react-slick";


const NextArrow = ({ onClick }) => {
    return (
      <div
        className="absolute top-1/2 right-[-40px] transform -translate-y-1/2 bg-[#1c2c39] hover:bg-orange-500 rounded-full cursor-pointer z-10 w-10 h-10 flex items-center justify-center shadow-lg"
        onClick={onClick}
      >
        <FontAwesomeIcon icon={faChevronRight} className="text-white text-lg" />
      </div>
    );
  };
  
  const PrevArrow = ({ onClick }) => {
    return (
      <div
        className="absolute top-1/2 left-[-40px] transform -translate-y-1/2 bg-[#1c2c39]  rounded-full cursor-pointer z-10 w-10 h-10 flex items-center justify-center shadow-lg"
        onClick={onClick}
      >
        <FontAwesomeIcon icon={faChevronLeft} className="text-white text-lg" />
      </div>
    );
  };
  


const Section2 = React.forwardRef((props, ref) => {

    const settings = {
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              arrows: true,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              arrows: true,
            },
          },
        ],
      };
    
      const slides = [
        {
          icon: Wrap,
    
        },
        {
          icon: Sedex,
          
        },
        {
          icon: GRS,
          
        },
        {
          icon: Recycle,
         
        },
        {
          icon: Green, 
        },
        {
          icon: GRS,
          
        },
      ];


  return (
    <section className="relative mt-20 -mb-28 bg-white ">
      
      <div className="max-w-full  mx-auto px-4 md:px-0">
        <div className="font-montserrat md:text-left text-center md:w-5/6 mx-auto">
          {/* Title Section */}
          <h1 className="text-orange-500 font-montserrat text-center text-2xl md:text-3xl font-bold uppercase mb-6">
          COMPLIANCE CERTIFICATE
          </h1>

        <p className="text-[#28303D] font-montserrat text-center text-lg md:text-lg font-semibold  mb-6">
        Nizam Workwear is fully compliant with International Social and Environmental & Quality standards
        </p>

        <p className="text-[#28303D] font-montserrat text-center text-lg md:text-lg  font-bold mt-8 mb-6">
        <span className="md:inline hidden ms-20 ">PRODUCT STEWARDSHIP</span>  <span className="md:inline hidden ms-20 me-20 ">SOCIAL STEWARDSHIP</span> <span className="md:inline hidden">ENVIRONMENTAL STEWARDSHIP</span> 
        </p>

        </div>
      </div>

      <div className="font-montserrat slider-container relative max-w-5xl mx-auto -top-8 md:px-4 px-12 mb-10">
      <Slider {...settings} className="flex items-center space-x-1">
        {slides.map((slide, index) => (
          <div
            key={index}
            className="slide-item bg-white transition-all duration-100 flex flex-col items-center justify-center py-20 rounded-lg h-auto w-24 mx-auto group md:min-h-[300px] min-h-[350px]" // Added min-h to set a consistent height
          >
            <img
              src={slide.icon}
              alt={`Slide ${index}`}
              className="mb-4 h-32 w-36 object-contain mx-auto transition-all duration-300 "
            />
            
          </div>
        ))}
      </Slider>
    </div>


    </section>
  );
});

export default Section2;
