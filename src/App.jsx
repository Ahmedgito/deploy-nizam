import React, { useState } from 'react';
import './styles.css'; // Adjust the path if necessary
import { BrowserRouter ,Route , Routes } from 'react-router-dom';
import Homepage from './components/pages/Homepage/homepage';

const App = () => {
  return(
    <>
    <Homepage/>
    </>
  ) ;

}

export default App ;  