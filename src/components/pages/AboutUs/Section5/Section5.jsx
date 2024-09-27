import React from "react";
import BackgroundImage from "../../../../assets/About/sectionbg.png"; // Update with correct path

const Section5 = () => {
  return (
    <>
      {/* Desktop Version (Hidden on small screens) */}
      <section className="hidden md:flex">
        {/* Overlay Section for About Nizam Workwear */}
        <section
      className="relative h-64 bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url(${BackgroundImage})`, 
      }}
    >
      {/* Overlay text */}
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
        <h2 className="text-white text-3xl font-bold">ABOUT NIZAM WORKWEAR</h2>
      </div>
    </section>

        {/* New Section with Text and Vision Statement */}
        <section className="flex flex-col font-montserrat md:flex-row justify-between items-start py-12">
          {/* Left Text Content */}
          <div className="flex-1 font-medium pl-36">
            <p className="text-[#7A7A7A] text-md mb-6">
              In 2018, building on our legacy in technical textile and our more
              recent experience of apparel manufacturing, we diversified our
              sewing portfolio with Workwear manufacturing in Karachi, Pakistan.
            </p>
            <p className="text-[#7A7A7A] text-md mb-6">
              Nizam has been built on long-lasting relationships by being
              consistently reliable to our partners. Our acumen of process
              control from yarn to finished product complements our workwear
              business. Our experience dealing with specialized fabrics and
              high-value articles has taught us to control every element to
              provide consistent quality. We continuously work on adding
              automation and training for skill development to become better
              than yesterday to meet our goals and reliability.
            </p>
            <p className="text-[#7A7A7A] text-md">
              Nizam Workwear produces woven garments for all industries with a
              monthly production capacity of upward of 100,000 garments
              depending on the complexity of the garment.
            </p>
          </div>

          {/* Right Vision Statement */}
          <div className="flex-1 pr-40 py-20">
            <h2 className="text-[#E27B04] text-8xl text-center font-bold mb-4">
              VISION
            </h2>
            <p className="text-[#E27B04] text-3xl font-semibold text-center leading-7">
              TO BE THE MOST INNOVATIVE, <br />
              RELIABLE, AND SUSTAINABLE <br />
              PARTNER FOR WORKWEAR <br />
              MANUFACTURING.
            </p>
          </div>
        </section>
      </section>

      {/* Mobile Version (Hidden on larger screens) */}
      <section className="flex md:hidden flex-col">
        {/* Overlay Section for About Nizam Workwear */}
        <section
          className="relative h-64 bg-cover bg-center flex items-center justify-center"
          style={{
            backgroundImage: `url(${BackgroundImage})`, // Background image
          }}
        >
          {/* Overlay text */}
          <div className="absolute inset-0 flex items-center justify-center font-montserrat bg-black bg-opacity-30 px-4">
            <h2 className="text-white text-2xl font-bold text-center">
              ABOUT NIZAM <br /> WORKWEAR
            </h2>
          </div>
        </section>

        {/* New Section with Text and Vision Statement */}
        <section className="flex flex-col font-montserrat justify-between items-start py-12 px-6">
          {/* Left Text Content */}
          <div className="flex-1 font-medium">
            <p className="text-[#7A7A7A] text-sm mb-6">
              In 2018, building on our legacy in technical textile and our more
              recent experience of apparel manufacturing, we diversified our
              sewing portfolio with Workwear manufacturing in Karachi, Pakistan.
            </p>
            <p className="text-[#7A7A7A] text-sm mb-6">
              Nizam has been built on long-lasting relationships by being
              consistently reliable to our partners. Our acumen of process
              control from yarn to finished product complements our workwear
              business. Our experience dealing with specialized fabrics and
              high-value articles has taught us to control every element to
              provide consistent quality. We continuously work on adding
              automation and training for skill development to become better
              than yesterday to meet our goals and reliability.
            </p>
            <p className="text-[#7A7A7A] text-sm">
              Nizam Workwear produces woven garments for all industries with a
              monthly production capacity of upward of 100,000 garments
              depending on the complexity of the garment.
            </p>
          </div>

          {/* Right Vision Statement */}
          <div className="flex-1 py-10">
            <h2 className="text-[#E27B04] text-4xl text-center font-bold mb-4">
              VISION
            </h2>
            <p className="text-[#E27B04] text-xl font-semibold text-center leading-7">
              TO BE THE MOST INNOVATIVE, <br />
              RELIABLE, AND SUSTAINABLE <br />
              PARTNER FOR WORKWEAR <br />
              MANUFACTURING.
            </p>
          </div>
        </section>
      </section>
    </>
  );
};

export default Section5;
