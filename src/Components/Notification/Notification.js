import React, { useEffect, useState } from 'react';
import './Notification.css';
import Navbar from '../Navbar/Navbar';

const Notification = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [doctorData, setDoctorData] = useState(null);
  const [appointmentData, setAppointmentData] = useState(null);
  const [showNotification, setShowNotification] = useState(true);

  useEffect(() => {
    const storedUsername = sessionStorage.getItem('email');
    const storedDoctorData = JSON.parse(localStorage.getItem('doctorData'));

    
    if (storedUsername) {
      setIsLoggedIn(true);
      setUsername(storedUsername);
    }

      if (storedDoctorData) {
      setDoctorData(storedDoctorData);
    }

    // Get an array of doctor names
    const doctorNames = Object.keys(storedDoctorData);
    
    
    doctorNames.forEach(name => {
        const storedAppointmentData = storedDoctorData[name];

        if(storedAppointmentData){
            setAppointmentData(storedAppointmentData)
        }
    });
    

    
  }, []);

 



  // Function to handle appointment cancellation
  const cancelAppointment = () => {
    // Logic to cancel the appointment and update the state accordingly
    setShowNotification(false);
  }

  return (
    <div>
      <Navbar></Navbar>
      {children}
      {isLoggedIn && appointmentData && showNotification && (
        <div className="notification-container">
          <div className="notification-card">
            <h3 className="notification-title">Appointment Details</h3>
            <p>
              <strong>User:</strong> {username}
            </p>
            <p>
              <strong>Doctor:</strong> {doctorData?.name}
            </p>
            {/* Add appointment time and date here */}
            {/* Example: <p><strong>Time:</strong> {appointmentData.time}</p> */}
            <button onClick={cancelAppointment} className="cancel-button">Cancel Appointment</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Notification;
