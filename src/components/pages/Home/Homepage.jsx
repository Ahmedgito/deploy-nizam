import React from "react";
import Layout from '../../layout/Layout';
import Section1 from './Section1/Section1';
import Section2 from './Section2/Section2'
import Section3 from './Section3/Section3';
import { useEffect } from "react";
import Section4 from "./Section4/Section4";
import Section5 from "./Section5/Section5";


const Homepage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
 return(
    
    <Layout>
    <Section1 />
    <Section2 />
    <Section3 />
    <Section4 />
    <Section5 />
    </Layout>
    
) ;
} ;
 
export default Homepage ; 