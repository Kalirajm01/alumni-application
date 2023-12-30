import React from 'react';
import { Link } from "react-router-dom";
import Image from '../assets/PSGiTech_Front_View.jpg';
import '../styles/Welcome.css'
import Signup from "../pages/Signup";

const Welcome = () => {
  return (
    <div className="welcome">
      <img src={Image} alt="Home" className="image"/>
      <div className="text">
        <h1>Welcome to PSG iTech Alumni Association Network</h1>
        <Link to="/signup">
        <button onClick={Signup} className="join">Join our Network</button>
        </Link>
      </div>
    </div>
  );
};

export default Welcome;
