import React from "react";
import Bg from "../assets/bg.png";
import B1 from "../assets/b2.png";

import "./hero.css";
import Header from "./Header";
const HeroSection = () => {
  return (
    <div className="hero-container">
      <Header />
      <div className="hero-content">
        <div className="hero-text">
          <h1>Modern Interior Design Studio</h1>
          <p>
          Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.  <br/> <br/> Aliquam vulputate velit imperdiet dolor tempor tristique.
          </p>
          <div className="btn">
            <button className="shop-now-btn">Shop Now</button>
            <button className="explore-btn">Explore</button>
          </div>
        </div>

        <div className="hero-image">
          <img src={Bg} />
        </div>
        <div className="hero-image1">
           <img  src={B1}/>
        </div>
    
       
      </div>
    </div>
  );
};

export default HeroSection;
