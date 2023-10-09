// import logo from './logo.svg';
// <img src={logo} className="App-logo" alt="logo" />
// import './App.css';

import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Landing from './Components/Landing_Page/LandingPage';
import SignUp from './Components/Sign_Up/Sign_Up';
import Login from './Components/Login/Login';



function App() {
    return (
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Landing />} /> 
            <Route path="/signup" element={<SignUp />} /> 
            <Route path="/login" element={<Login />} /> 
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
  
  export default App;