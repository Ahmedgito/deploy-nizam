import React from "react";
import { useEffect } from "react";
import Layout from "../../layout/Layout";
import Section1 from "../AboutUs/Section1/Section1";


const About = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    return (
      <Layout>
        <Section1 />
      </Layout>
    );
  };
  
  export default About;