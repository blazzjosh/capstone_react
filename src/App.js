// import logo from './logo.svg';
// <img src={logo} className="App-logo" alt="logo" />
// import './App.css';

import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Landing from './Components/Landing_Page/LandingPage';

function App() {
    return (
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Landing />} /> 
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
  
  export default App;