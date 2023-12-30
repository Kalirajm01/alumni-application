import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../styles/footer.css";


function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);
  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="footer">
      <p>Copyright &copy; PSG iTech  {new Date().getFullYear()}</p>
    </div>
  );
}

export default Navbar;