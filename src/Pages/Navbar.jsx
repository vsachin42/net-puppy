import React from "react";
import navimg1 from "../assets/navimg1.png";
import navimg2 from "../assets/navimg2.png";
import "../Styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="Navbar">
      <img src={navimg2} alt="" className="img1" />
      <img src={navimg1} alt="" className="img2" />
    </div>
  );
};

export default Navbar;
