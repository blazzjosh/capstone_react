// import logo from './logo.svg';
// <img src={logo} className="App-logo" alt="logo" />
// import './App.css';

import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Landing from './Components/Landing_Page/LandingPage';
import InstantConsultation from './Components/InstantConsultationBooking/InstantConsultation';
import FindDoctorSearch from './Components/FindDoctorSearch/FindDoctorSearch';
import SignUp from './Components/Sign_Up/Sign_Up';
import Login from './Components/Login/Login';
import Notification from './Components/Notification/Notification';
import ReviewsPage from './Components/ReviewsPage/ReviewsPage';
import ProfileForm from './Components/ProfileCard/ProfileCard';
import ReportLayout from './Components/ReportsLayout/ReportsLayout';



function App() {
    return (
      <div className="App">
        <BrowserRouter>
          <Notification />
          <Routes>
            <Route path="/" element={<Landing />} /> 
            <Route path="/signup" element={<SignUp />} /> 
            <Route path="/login" element={<Login />} /> 
            <Route path="/instant-consultation" element={<InstantConsultation />} />
            <Route path="/search/doctors" element={<FindDoctorSearch />} />
            <Route path="/reviews" element={<ReviewsPage />} />
            <Route path="/profile" element={<ProfileForm />} />
            <Route path='/reports' element={<ReportLayout/>} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
  
  export default App;