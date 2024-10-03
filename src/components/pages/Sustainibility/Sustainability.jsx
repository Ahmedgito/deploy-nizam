import React, { useEffect } from "react";
import Section1 from './Section1/Section1' ;
import Layout from "../../layout/Layout";

const Sustainability = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    return (
      <Layout>
        
        <Section1 />
    
      </Layout>
    );
  };
  
  export default Sustainability;