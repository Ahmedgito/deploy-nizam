import React from 'react';

const Section6 = React.forwardRef((props, ref) => {
  return (
    <>
    
    <div ref={ref} data-title="Contact Us">
    {/* Desktop-only Section */}

    <section className='hidden md:block' >
         
    {/* Title */}
    <div className='text-center mt-20 text-orange-500 font-montserrat text-4xl'>
        <h1 className='font-medium'>
          CONTACT <span className='font-bold'>US</span>
        </h1>
      </div>

    <div className="flex font-montserrat flex-col lg:flex-row justify-between px-[20%] py-16 bg-white pb-32">
      {/* Form Section */}
      <div className="lg:w-1/2">
        <h2 className="text-black text-lg mb-6">Drop us a line!</h2>
        <form className="flex flex-col">
          <input
            type="text"
            placeholder="Name"
            className="p-4 mb-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <input
            type="email"
            placeholder="Email *"
            className="p-4 mb-4 border border-gray-300 mt-5 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <textarea
            placeholder="Message"
            rows="4"
            className="p-4 mb-4 border border-gray-300 mt-5 focus:outline-none focus:ring-2 focus:ring-orange-500"
          ></textarea>
          <button
            type="submit"
            className="bg-gray-300 text-black py-2 mt-5 hover:bg-orange-500 hover:text-white transition-colors"
          >
            SEND
          </button>
        </form>
      </div>

      {/* Contact Info Section */}
      <div className="mt-12 lg:mt-0 lg:w-1/2 lg:pl-16">
        <h2 className="text-black text-lg font-medium mb-6">Better yet, see us in person!</h2>
        <p className="mb-4 font-medium text-stone-500">We love our customers, so feel free to visit during normal business hours.</p>
        <p className="text-black text-base font-medium">Nizam Apparel - Pakistan</p>
        <p className='font-medium text-stone-500'>34 KM Ferozpur Road, Lahore, Punjab 54000 Pakistan</p>
        <p className="my-4 font-medium">+92 321 200 1009</p>
        <h3 className="text-black text-base font-medium">Hours</h3>
        <ul className="list-none font-medium text-stone-500">
          <li>Mon 9:00 am – 5:00 pm</li>
          <li>Tue 9:00 am – 5:00 pm</li>
          <li>Wed 9:00 am – 5:00 pm</li>
          <li>Thu 9:00 am – 5:00 pm</li>
          <li>Fri 9:00 am – 5:00 pm</li>
          <li>Sat 9:00 am – 5:00 pm</li>
          <li>Sun Closed</li>
        </ul>
      </div>
    </div>
</section>


    <section className='md:hidden block'>
    <div className="font-montserrat p-6 bg-white pb-16">
      {/* Title */}
      <div className="text-center mt-10 text-orange-500 text-3xl">
        <h1 className="font-medium">
          CONTACT <span className="font-bold">US</span>
        </h1>
      </div>

      {/* Form and Contact Info Container */}
      <div className="flex flex-col justify-between py-8">
        {/* Form Section */}
        <div className="mb-8">
          <h2 className="text-black text-base mb-4">Drop us a line!</h2>
          <form className="flex flex-col">
            <input
              type="text"
              placeholder="Name"
              className="p-3 mb-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <input
              type="email"
              placeholder="Email *"
              className="p-3 mb-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <textarea
              placeholder="Message"
              rows="4"
              className="p-3 mb-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
            ></textarea>
            <button
              type="submit"
              className="bg-gray-300 text-black py-2 hover:text-white transition-colors"
            >
              SEND
            </button>
          </form>
        </div>

        {/* Contact Info Section */}
        <div className="">
          <h2 className="text-black text-base font-medium mb-4">Better yet, see us in person!</h2>
          <p className="mb-4 font-medium text-stone-500">We love our customers, so feel free to visit during normal business hours.</p>
          <p className="text-black text-base font-medium">Nizam Apparel - Pakistan</p>
          <p className="font-medium text-stone-500">34 KM Ferozpur Road, Lahore, Punjab 54000 Pakistan</p>
          <p className="my-4 font-medium">+92 321 200 1009</p>
          <h3 className="text-black text-base font-medium">Hours</h3>
          <ul className="list-none font-medium text-stone-500">
            <li>Mon 9:00 am – 5:00 pm</li>
            <li>Tue 9:00 am – 5:00 pm</li>
            <li>Wed 9:00 am – 5:00 pm</li>
            <li>Thu 9:00 am – 5:00 pm</li>
            <li>Fri 9:00 am – 5:00 pm</li>
            <li>Sat 9:00 am – 5:00 pm</li>
            <li>Sun Closed</li>
          </ul>
        </div>
      </div>
    </div>
    </section>
    </div>
    </>
  );
});

export default Section6;
