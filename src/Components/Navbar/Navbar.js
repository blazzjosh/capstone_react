import React from 'react';
import './Navbar.css';
import logo from './logo.svg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav>
      <div className="nav__logo">
        <a href="/">
        <img src={logo} className="App-logo" alt="logo" />
        </a>
      </div>
      <div className="nav__icon">
        <FontAwesomeIcon icon={faTimes} />
        <FontAwesomeIcon icon={faBars} />
      </div>
      <ul className="nav__links active">
            <li class="link">
                <a href="../Landing_Page/LandingPage.html">Home</a>
            </li>
            <li class="link">
                <a href="##">Appointments</a>
            </li>
            <li class="link">
                <a href="##">Health Blog</a>
            </li>
            <li class="link">
                <a href="##">Reviews</a>
            </li>
            <li class="link">
                <a href="../Sign_Up/Sign_Up.html">
                <button class="btn1">Sign Up</button>
                </a>
            </li>
            <li class="link">
                <a href="../Login/Login.html">
                    <button class="btn1">Login</button>
                </a>
            </li>
      </ul>
    </nav>
  );
};

export default Navbar;