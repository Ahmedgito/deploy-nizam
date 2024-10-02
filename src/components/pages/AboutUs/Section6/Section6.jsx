import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Bulb from "../../../../assets/About/BulbIcon.png";
import Factory from "../../../../assets/About/FactoryIcon.png";
import Gas from "../../../../assets/About/GasIcon.png";
import Group from "../../../../assets/About/GroupIcon.png";
import People from "../../../../assets/About/peopleIcone.png";
import Spool from "../../../../assets/About/Spool_icon.png";

// Custom Arrow components using chevron icons
const NextArrow = ({ onClick }) => {
  return (
    <div
      className="absolute top-1/2 right-[-30px] transform -translate-y-1/2 bg-transparent cursor-pointer z-10"
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faChevronRight} className="text-orange-500 text-3xl" />
    </div>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <div
      className="absolute top-1/2 left-[-30px] transform -translate-y-1/2 bg-transparent cursor-pointer z-10"
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faChevronLeft} className="text-orange-500 text-3xl" />
    </div>
  );
};

const Section6 = () => {
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
      icon: People,
      text: "Family Business Since 1869",
    },
    {
      icon: Factory,
      text: "6 factories with over 1,200,000 sq ft",
    },
    {
      icon: Spool,
      text: "Vertical and diversified textile manufacturer",
    },
    {
      icon: Group,
      text: "2500+ Employees",
    },
    {
      icon: Bulb,
      text: "Investing in Innovation and Technology",
    },
    {
      icon: Gas,
      text: "Carbon Neutral",
    },
  ];

  return (
    <div className="font-montserrat slider-container relative max-w-5xl mx-auto py-0 md:px-4 px-12 mb-10">
      <Slider {...settings} className="flex items-center space-x-4">
        {slides.map((slide, index) => (
          <div
            key={index}
            className="slide-item text-gray-600 transition-all duration-100 hover:text-white flex flex-col items-center justify-center md:py-20 hover:bg-orange-500 py-20 bg-gray-100 rounded-lg h-auto w-64 mx-auto group md:min-h-[300px] min-h-[350px]" // Added min-h to set a consistent height
          >
            <img
              src={slide.icon}
              alt={`Slide ${index}`}
              className="mb-4 w-32 h-32 object-contain mx-auto transition-all duration-300 group-hover:filter group-hover:brightness-0 group-hover:invert"
            />
            <p className="text-center md:text-md text-sm italic font-normal">{slide.text}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Section6;



