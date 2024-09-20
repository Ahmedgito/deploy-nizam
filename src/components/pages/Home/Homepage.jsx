import React from "react";
import Layout from '../../layout/Layout';
import Section1 from './Section1/Section1';
import Section2 from './Section2/Section2'
import Section3 from './Section3/Section3';
import { useEffect } from "react";


const Homepage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
 return(
    
    <Layout>
    <Section1 />
    <Section2 />
    <Section3 />
    </Layout>
    
) ;
} ;
 
export default Homepage ; 