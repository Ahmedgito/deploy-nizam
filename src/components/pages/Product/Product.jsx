import React, { useEffect } from "react";
import Section1 from '../Product/Section1/Section1'
import Layout from "../../layout/layout";
import Section2 from "./Section2/Section2";
import Section3 from "./Section3/Section3";


const About = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    return (
      <Layout>
        <Section1 />
        <Section2 />
        <Section3 />
      </Layout>
    );
  };
  
  export default About;