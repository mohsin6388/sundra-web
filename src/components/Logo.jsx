import React from "react";
//import logo from "../assets/sundra-logo-start.png"
import logo from "../assets/new-logo.png";
import "./Logo.css";

function Logo({ size = 44 }) {
  return (
    <div className="flex items-center gap-1">
      <img src={logo} alt="Logo" className="w-48 h-auto shrink-0" />
    </div>
  );
}

export default Logo;
