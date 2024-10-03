import React from "react";
import Map from '../../../../assets/ContactUs/map.png'
import Marker from '../../../../assets/ContactUs/marker.png'
import Phone from '../../../../assets/ContactUs/phone dial.png'

const Section2 = () => {
  return (
    <section className="max-w-7xl mx-auto py-12 px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Left Column - Address and Map */}
      <div className="flex flex-col items-end space-y-4">
        {/* Map Image (Placeholder for now) */}
        <div className="bg-gray-100 justify-end w-[30rem] h-70 md:h-full relative">
          <img
            src= {Map}
            alt="Map"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Address and Contact Information */}
        <div className="space-y-2  items-end align-middle">
          <div className=" mt-10 flex items-center space-x-2">
            <img src={Marker} className=" w-9 h-10"/>
            <p className="text-gray-600">
              D-64, Sindh Industrial Trading Estate, Karachi, Karachi City, Sindh 75400
            </p>
          </div>
          <div className=" mt-10 flex items-center space-x-2">
            <img src={Phone}  className="w-9 h-10" />
            <p className="text-gray-600">+923212001009</p>
          </div>
        </div>
      </div>

      {/* Right Column - Contact Form */}
      <div className="space-y-6 flex justify-center w-[100%]">
        <form className="space-y-4">
          {/* Name Input */}
          <div className="">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="w-full  radius-[2rem] border border-black p-3 rounded-[2rem] focus:outline-none focus:border-orange-500"
            />
          </div>
          {/* Email Input */}
          <div className="">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full border radius-[2rem] border-black p-3 rounded-[2rem] focus:outline-none focus:border-orange-500"
            />
          </div>
          {/* Message Textarea */}
          <div className=" ">
            <textarea
              name="message"
              placeholder="Message"
              rows="5"
              className=" radius-[2rem] w-full border border-black p-3 rounded-[2rem] focus:outline-none focus:border-orange-500"
            ></textarea>
          </div  >
          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-[60%]  bg-orange-500 text-white font-semibold text-2xl py-6 rounded-[2rem] hover:bg-orange-600 transition-colors"
            >
              SEND
            </button>
          </div>
        </form>

        {/* Social Media Section */}
        <div className="flex items-center justify-center space-x-2">
          <p className="text-gray-600">Follow us</p>
          <a href="https://linkedin.com" className="text-orange-500 text-3xl">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Section2;
