import React from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets.js";
const Navbar = () => {
  return (
    <div className="navbar">
      <h1 className="title">FoodHub.</h1>
      <img className="profile" src={assets.profile_image} />
    </div>
  );
};

export default Navbar;
