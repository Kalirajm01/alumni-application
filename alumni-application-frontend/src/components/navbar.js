import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import Signup from "../pages/Signup";
import Menu from "../pages/Menu";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);
  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo} />
        <h1>PSG iTECH Alumni Application</h1>
      </div>
      <div className="rightSide">
        <Link to="/"> Home </Link>
        <Link to="/about"> About Us</Link>
        <Link to="/jobs">Jobs/Interships</Link>
        <Link to="/connect"> Connect</Link>
        <Link to="/contact"> Contact</Link>
        <Link to="/signup">
        <button onClick={Signup} className="signup">Signin</button>
        </Link>
      </div>
      <div className="Menu">
      <Link to="/menu">
        <button onclick = {Menu} >< FaBars/>
        </button>
      </Link>
      </div>
    </div>
  );
}

export default Navbar;