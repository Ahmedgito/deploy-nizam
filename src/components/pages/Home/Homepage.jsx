import React from "react";
import Layout from "../../layout/layout";
import Section1 from "./Section1/Section1";
import Section2 from './Section2/Section2'
import Section3 from "./Section3/Section3";



const Homepage = () => {
 return(
    <>
    <Layout>
    <Section1 />
    <Section2 />
    <Section3 />
    </Layout>
    </>
) ;
} ;
 
export default Homepage ; 