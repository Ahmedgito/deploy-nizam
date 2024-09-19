import React from "react" ;
import Header from "./header/Header";
import Footer from "./footer/Footer";

const Layout = ({ children }) => {

    return(
    <>
    <Header />
    <div className="d-flex"></div>
          <main className="main-section" style={{marginTop: "85px"}}>{children}</main>
    <Footer />
    </>
) ;
} ;

export default Layout ; 