import React from "react";
import NizamAcademy from "../../../../assets/About/nizam-academy.png" ;
import NizamFoundation from "../../../../assets/About/nizam-foundation.png" ;

const Section4 = () => {
  return (
    <>
    <section className="font-montserrat md:grid hidden bg-white py-12">
      {/* Text Section */}
      <div className="font-montserrat container mx-auto px-4">
        {/* Single-column layout, text on top, logos on the next row */}
        <div className="grid grid-cols-1 gap-8">
          {/* Text content */}
          <div className="">
            <p className="mb-4 text-[#7A7A7A] font-medium">
              We at Nizam believe that our people are the greatest assets. They
              are not just partners in our progress but also the most critical
              factor in transforming our vision into reality. We ensure that our
              team feels valued and respected while working with us. We do this
              by maintaining a balance between maintaining a fast-paced,
              competitive, and challenging work environment and one that is
              empowering, nurturing, and makes everyone feel at home.
            </p>
            <p className="mb-4 text-[#7A7A7A] font-medium">
              We nurture a culture of creating the best possible work
              environment by providing benefits, regular training, and
              skill-building capacity of humans. Our custom ensures what is
              created is the best.
            </p>

            {/* Lists */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ul className="list-none text-[#7A7A7A] font-medium">
                <li>– Equal Opportunity</li>
                <li>– Employment Succession</li>
                <li>– Planning Subsidized Meals</li>
                <li>– On-Site Mosque</li>
                <li>– Commitment to Pay Living Wage</li>
              </ul>
              <ul className="list-none text-[#7A7A7A] font-medium">
                <li>– Training & Development</li>
                <li>– Career Growth Opportunities</li>
                <li>– On-Site Healthcare</li>
                <li>– Day Care for Kids</li>
              </ul>
            </div>
          </div>

          {/* Right Side Image Logos (moved to the next row) */}
          <div className="flex flex-col justify-center">
            {/* Nizam Foundation */}
            <div className="flex mx-16 my-0 items-center mb-8">
              <img
                src={NizamFoundation} // Update with the correct path
                alt="Nizam Foundation Logo"
                className="h-3/4 w-2/4 mr-4"
              />
              <div>
                <h3 className="text-orange-600  text-3xl font-bold">NIZAM FOUNDATION</h3>
                <p className="text-[#7A7A7A] text-lg font-medium">
                  A workers' welfare organization launched under the Nizam One
                  Initiative. With a sole vision to support health and education
                  of our employees and their families.
                </p>
              </div>
            </div>

            {/* Nizam Academy */}
            <div className="flex mx-16 my-0 items-center">
              <img
                src={NizamAcademy} // Update with the correct path
                alt="Nizam Academy Logo"
                className="h-3/4 w-2/4 mr-4"
              />
              <div className="">
                <h3 className="text-orange-600 text-3xl font-bold">NIZAM ACADEMY</h3>
                <p className="text-[#7A7A7A] text-lg font-medium">
                  An internal training and development center that works on both
                  soft and hard skills. Not limited to the factory workers, it
                  helps us develop our team so that our team can grow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

<section className="font-montserrat bg-white py-8 md:hidden">
<div className="container mx-auto px-4">
  {/* Text Section */}
  <div className="grid grid-cols-1 text-sm text-center gap-8">
    <div>
      <p className="mb-4 text-[#7A7A7A] font-medium">
        We at Nizam believe that our people are the greatest assets. They
        are not just partners in our progress but also the most critical
        factor in transforming our vision into reality. We ensure that our
        team feels valued and respected while working with us. We do this
        by maintaining a balance between maintaining a fast-paced,
        competitive, and challenging work environment and one that is
        empowering, nurturing, and makes everyone feel at home.
      </p>
      <p className="mb-4 text-[#7A7A7A] font-medium">
        We nurture a culture of creating the best possible work
        environment by providing benefits, regular training, and
        skill-building capacity of humans. Our custom ensures what is
        created is the best.
      </p>

      {/* Lists */}
      <div className="grid grid-cols-1 gap-4">
        <ul className="list-none text-[#7A7A7A] font-medium">
        <li className="font-bold"> We ensure</li>
          <li>– Equal Opportunity</li>
          <li>– Employment Succession</li>
          <li>– Planning Subsidized Meals</li>
          <li>– On-Site Mosque</li>
          <li>– Commitment to Pay Living Wage</li>
          <li>– Training & Development</li>
          <li>– Career Growth Opportunities</li>
          <li>– On-Site Healthcare</li>
          <li>– Day Care for Kids</li>
        </ul>
      </div>
    </div>

    {/* Nizam Foundation */}
    <div className="flex flex-col items-center mb-8">
      <img
        src={NizamFoundation}
        alt="Nizam Foundation Logo"
        className="w-3/4 mb-4"
      />
      <h3 className="text-[#E27B04] text-2xl font-bold text-center">
        NIZAM FOUNDATION
      </h3>
      <p className="text-[#7A7A7A] text-sm mt-5 font-medium text-center">
        A workers' welfare organization launched under the Nizam One
        Initiative. With a sole vision to support health and education of
        our employees and their families.
      </p>
    </div>

    {/* Nizam Academy */}
    <div className="flex flex-col items-center">
      <img
        src={NizamAcademy}
        alt="Nizam Academy Logo"
        className="w-3/4 mb-4"
      />
      <h3 className="text-[#E27B04] text-2xl font-bold text-center">
        NIZAM ACADEMY
      </h3>
      <p className="text-[#7A7A7A] mt-5 text-sm font-medium text-center">
        An internal training and development center that works on both
        soft and hard skills. Not limited to the factory workers, it
        helps us develop our team so that our team can grow.
      </p>
    </div>
  </div>
</div>
</section>
</>
  );
};

export default Section4;
