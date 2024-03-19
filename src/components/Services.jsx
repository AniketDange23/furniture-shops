import React from "react";
import "./services.css";
import Image1 from "../assets/image 1.png";
import Image2 from "../assets/lamps.jpg";
import Image3 from "../assets/sofa.jpg";
import Image4 from "../assets/Stool.jpg";
import { FaCircleDot } from "react-icons/fa6";


const Services = () => {
  return (
    <div className="services-container">
      <div className="services-left">
      <div>
        <img className="image-1" src={Image1} />
        <img className="image-2" src={Image2} />
      </div>
        
        <div> <img className="image-3" src={Image3} />
        <img className="image-4" src={Image4} /></div>

       
      </div>
      <div className="services-right">
        <h2 className="services-title">
          We Help You make Modern Interior Design
        </h2>
        <p>
          {" "}
           Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.{" "}
         Aliquam vulputate velit imperdiet dolor tempor
          tristique.
        </p>    
        <div className="services-info">
           <ul>
          <li> <span><FaCircleDot/></span>   <span>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.{" "}
         Aliquam vulputate velit imperdiet dolor tempor
          tristique.</span> </li>
          <li> <span><FaCircleDot/></span>   <span>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.{" "}
         Aliquam vulputate velit imperdiet dolor tempor
          tristique.</span> </li>
       
           </ul>
           <ul>
      <li> <span><FaCircleDot/></span>   <span>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.{" "}
         Aliquam vulputate velit imperdiet dolor tempor
          tristique.</span> </li>
          <li> <span><FaCircleDot/></span>   <span>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.{" "}
         Aliquam vulputate velit imperdiet dolor tempor
          tristique.</span> </li>
           </ul>
        </div>
        

          <button className="explore-btn">Explore</button>

      </div>
    </div>
  );
};

export default Services;
