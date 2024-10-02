import React, { useEffect } from "react";
import Section1 from '../Production/Section1/Section'
import Layout from "../../layout/Layout";
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