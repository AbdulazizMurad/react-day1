import React from "react";
import "../assets/css/day1.css";
import coffee from "../assets/media/caffee.jpg";
import Button from "./button";
const Header = () => {
  return (
    <div className="container">
      <h1> Coffee and Beyond</h1>
      <p> where cookie maniac gathers </p>
      <Button />
      <img src={coffee} alt="coffee picture" className="imageDesign" />
    </div>
  );
};

export default Header;
