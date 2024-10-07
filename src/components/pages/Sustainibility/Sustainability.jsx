import React, { useEffect } from "react";
import Section1 from './Section1/Section1' ;
import Layout from "../../layout/Layout";
import Section2 from "./Section2/Section2";

const Sustainability = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    return (
      <Layout>
        
        <Section1 />
        <Section2 />
      </Layout>
    );
  };
  
  export default Sustainability;