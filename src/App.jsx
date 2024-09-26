import React, { useState } from 'react';
import './styles.css'; 
import Homepage from './components/pages/Home/Homepage';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from './components/pages/AboutUs/About';

const App = () => {
  return(
    <>
    

      <Routes>

      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<About />} />


    </Routes>

    </>
  ) ;

}

export default App ;  