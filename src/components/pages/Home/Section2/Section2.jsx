import React from "react";
import helmet from '../../../../assets/Home/helmet.png'
import readmore from '../../../../assets/Home/Arrow-min.png'
import { Helmet } from "react-helmet";


const Section2 = React.forwardRef((props, ref) => {

    return(
        <>

  <div ref={ref} data-title="About Nizam">
  {/* {Section For Mobile Devices} */}
<section className="flex md:hidden flex-col items-center justify-center md:py-16 pb-2 pt-32 relative -z-10">

{/* Heading */}
<h2 className="text-4xl font-thin text-orange-500 mb-4 text-center">
  ABOUT
  <span className='block text-orange-500 font-extrabold'>
    NIZAM <br /> WORKWEAR
  </span>
</h2>

{/* Image */}
<img src={helmet} alt="Image" className="w-full max-w-xs h-auto" />


</section>

        {/* {Section For Large Devices} */}
  <section className="md:flex hidden items-center justify-center py-2 -z-10">   
    {/* Heading */}
  <h2 className="text-6xl font-thin text-orange-500 mr-4 ">
    ABOUT
    <h2 className='text-orange-500 font-extrabold'>
      NIZAM <br /> WORKWEAR
    </h2>
  </h2>

  {/* Image */}
  <img src={helmet} alt="Image" className=" h-96" />
</section>




<section className=" font-roboto flex md:hidden flex-col items-left justify-center px-4  md:mx-20  text-gray-500 text-left">
  <p className="text-sm md:text-lg leading-relaxed ">
    In 2018, building on our legacy in technical textiles and our more recent experience in apparel manufacturing, we diversified our sewing portfolio with Workwear manufacturing in Karachi, Pakistan.</p>
  <p  className="text-sm md:text-lg leading-relaxed whitespace-pre-line ">
    Nizam has been built on long-lasting relationships by being consistently reliable to our partners. Our acumen in process control from yarn to finished product complements our workwear business, and our experience dealing with specialized fabrics and high-value articles has  taught us to control every element to provide consistent quality. We continuously work on adding automation and training for skill development to become better than yesterday and meet our goals of reliability.
  </p>
  <div className=" font-montserrat container mx-auto flex items-end md:justify-end justify-center ">
    {/* Heading */}
    <h3 className="text-xl font-semibold text-orange-500 cursor-pointer me-2">
      READ MORE
    </h3>

    {/* Image */}
    <img 
      src={readmore}
      alt="Product Image" 
      className="w-5 h-5 mb-1 object-contain" 
    />
  </div>

</section>

<section className=" font-roboto  md:flex hidden flex-col items-left justify-center px-4 md:mx-48  text-gray-500 text-left">
  <p className="text-sm md:text-lg leading-relaxed ">
    In 2018, building on our legacy in technical textiles and our more recent experience in apparel manufacturing, we diversified our sewing portfolio with Workwear manufacturing in Karachi, Pakistan.</p>
  <p  className="text-sm md:text-lg leading-relaxed whitespace-pre-line ">
    Nizam has been built on long-lasting relationships by being consistently reliable to our partners. Our acumen in process control from yarn to finished product complements our workwear business, and our experience dealing with specialized fabrics and high-value articles has  taught us to control every element to provide consistent quality. We continuously work on adding automation and training for skill development to become better than yesterday and meet our goals of reliability.
  </p>
  <div className=" font-montserrat container mx-auto flex items-end md:justify-end justify-center ">
    {/* Heading */}
    <h3 className="text-xl font-semibold text-orange-500 cursor-pointer me-2">
      READ MORE
    </h3>

    {/* Image */}
    <img 
      src={readmore}
      alt="Product Image" 
      className="w-5 h-5 mb-1 object-contain" 
    />
  </div>

</section>

<section className=" py-auto md:py-3 md:px-auto">
  
  </section>
  </div>
        </>
    ) 
}) ;


export default Section2 ; 