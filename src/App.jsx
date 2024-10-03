import React, { useState } from 'react';
import './styles.css'; 
import Homepage from './components/pages/Home/Homepage';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from './components/pages/AboutUs/About';
import Production from './components/pages/Production/Production';
import Product from './components/pages/Product/Product'

const App = () => {
  return(
    <>
  
      <Routes>

      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<About />} />
      <Route path="/production" element={<Production />} />
      <Route path="/products" element={<Product />} />
    </Routes>

    </>
  ) ;

}

export default App ;  