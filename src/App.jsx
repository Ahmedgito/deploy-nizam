import React, { useState } from 'react';
import './styles.css'; 
import Homepage from './components/pages/Home/Homepage';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from './components/pages/AboutUs/About';
import Production from './components/pages/Production/Production';
import Product from './components/pages/Product/Product'
import Sustainability from './components/pages/Sustainibility/Sustainability'
import ContactUs from './components/pages/ContactUs/ContactUs' 

const App = () => {
  return(
    <>
  
      <Routes>

      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<About />} />
      <Route path="/production" element={<Production />} />
      <Route path="/products" element={<Product />} />
      <Route path="/sustainability" element={<Sustainability />} />
      <Route path="/contactus" element={<ContactUs />} />
  
    </Routes>

    </>
  ) ;

}

export default App ;  