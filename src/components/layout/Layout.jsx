import React, { useState, useEffect, useRef } from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import { Helmet } from 'react-helmet';

const Layout = ({ children }) => {
  const [currentSection, setCurrentSection] = useState('Nizam Apparel');
  
  // Use ref to store all section elements
  const sectionRefs = useRef([]);

  useEffect(() => {
    // Intersection Observer options
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Trigger when 60% of a section is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCurrentSection(entry.target.getAttribute('data-title'));
        }
      });
    }, options);

    // Observe each section element
    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    // Cleanup observer on component unmount
    return () => {
      sectionRefs.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>{currentSection} | Nizam Apparel</title>
        <meta name="description" content="Nizam Apparel - Eco-friendly and sustainable clothing solutions." />
        <meta name="keywords" content="Nizam, Apparel, Clothing, Pakistan, Sustainability, Fashion" />
      </Helmet>

      <Header />
      
      <div className="d-flex"></div>

      {/* Main content area */}
      <main className="main-section" style={{ marginTop: "85px" }}>
        {/* Assuming children are the sections */}
        {React.Children.map(children, (child, index) =>
          React.cloneElement(child, { 
            ref: (el) => (sectionRefs.current[index] = el),
            "data-title": `Section ${index + 1}`  // Assign dynamic title based on section
          })
        )}
      </main>

      <Footer />
    </>
  );
};

export default Layout;
