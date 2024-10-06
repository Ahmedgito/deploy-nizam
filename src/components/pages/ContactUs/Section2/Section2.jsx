import React from "react";
import Map from '../../../../assets/ContactUs/map.png'
import Marker from '../../../../assets/ContactUs/marker.png'
import Phone from '../../../../assets/ContactUs/phone dial.png'
import LinkedInIcon from '../../../../assets/ContactUs/linkedin-icon.png'

const Section2 = () => {
  return (
    <>
    <section className="max-w-7xl mx-auto py-12 px-4 md:px-\8 md:grid hidden grid-cols-1 md:grid-cols-2 gap-2   ">
      {/* Left Column - Address and Map */}
      <div className="flex flex-col items-end space-y-4 ">
        {/* Map Image */}
        <div className="bg-gray-100 w-[30rem] h-70 md:h-full relative">
          <img
            src= {Map}
            alt="Map"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Address and Contact Information */}
        <div className="w-[78%] space-y-4">
          <div className="flex items-center space-x-2">
            <img src={Marker} className="w-8 h-full" />
            <p className=" text-gray-600 text-lg">
              D-64, Sindh Industrial Trading Estate, Karachi, Karachi City, Sindh 75400
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <img src={Phone} className="w-8 h-full" />
            <p className="text-gray-600 text-lg">+923212001009</p>
          </div>
        </div>
      </div>

      {/* Right Column - Contact Form */}
      <div className="flex  flex-col items-center space-y-6">
        <form className="w-[60%] py-20 space-y-4">
          {/* Name Input */}
          <div>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="w-full border border-black p-4 mb-5 rounded-full focus:outline-none focus:border-orange-500"
            />
          </div>
          {/* Email Input */}
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full border border-black p-4 mb-5 rounded-full focus:outline-none focus:border-orange-500"
            />
          </div>
          {/* Message Textarea */}
          <div>
            <textarea
              name="message"
              placeholder="Message"
              rows="5"
              className="w-full border border-black px-4 py-2 h-72 rounded-3xl focus:outline-none focus:border-orange-500"
            ></textarea>
          </div>
          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-[100%] h-20 bg-orange-500 text-white text-2xl font-medium py-3 rounded-full hover:bg-orange-600 transition-colors"
            >
              SEND
            </button>
          </div>
          {/* LinkedIn Icon */}
          <div className="flex justify-center items-center space-x-2 mt-2">
            <p className="text-orange-500 text-xl font-medium line">Follow us</p>
            </div>
            <div className="flex justify-center items-center">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src={LinkedInIcon} alt="LinkedIn" className=" w-16  rounded-xl h-16" />
            </a>
          </div>
        </form>
      </div>
    </section>

<section className=" md:hidden max-w-xs mx-auto px-4 grid grid-cols-1 gap-2">
{/* Left Column - Address and Map */}
<div className="flex flex-col items-center space-y-4">
  {/* Map Image */}
  <div className="bg-gray-100 w-full h-60 relative">
    <img
      src={Map}
      alt="Map"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Address and Contact Information */}
  <div className="w-full space-y-4">
    <div className="flex items-center space-x-2">
      <img src={Marker} className="w-12 h-12" />
      <p className="text-gray-600 text-lg">
        D-64, Sindh Industrial Trading Estate, Karachi, Karachi City, Sindh 75400
      </p>
    </div>
    <div className="flex items-center space-x-2">
      <img src={Phone} className="w-12 h-12" />
      <p className="text-gray-600 text-l">+923212001009</p>
    </div>
  </div>
</div>

{/* Right Column - Contact Form */}
<div className="flex flex-col items-center mt-8 space-y-10">
  <form className="w-full space-y-4">
    {/* Name Input */}
    <div>
      <input
        type="text"
        name="name"
        placeholder="Name"
        className="w-full border border-black p-2 mb-4 rounded-full focus:outline-none focus:border-orange-500"
      />
    </div>
    {/* Email Input */}
    <div>
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="w-full border border-black p-2 mb-4 rounded-full focus:outline-none focus:border-orange-500"
      />
    </div>
    {/* Message Textarea */}
    <div>
      <textarea
        name="message"
        placeholder="Message"
        rows="4"
        className="w-full border border-black p-2 rounded-3xl focus:outline-none focus:border-orange-500"
      ></textarea>
    </div>
    {/* Submit Button */}
    <div className="flex justify-center">
      <button
        type="submit"
        className="w-full h-12 bg-orange-500 text-white text-xl font-medium rounded-full hover:bg-orange-600 transition-colors"
      >
        SEND
      </button>
    </div>

    {/* LinkedIn Icon */}
    <div className="flex justify-center items-center space-x-2 mt-2">
      <p className="text-orange-500 text-xl">Follow us</p>
    </div>
    <div className="flex justify-center items-center">
      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
        <img src={LinkedInIcon} alt="LinkedIn" className="w-14 rounded-lg h-14 mb-10" />
      </a>
    </div>
  </form>
</div>
</section>

</>
  );
};

export default Section2;
