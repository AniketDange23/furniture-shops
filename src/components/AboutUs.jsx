import React from "react";
import "./aboutUs.css";
import { MdOutlineLocalShipping } from "react-icons/md";
import { FiShoppingBag } from "react-icons/fi";
import { HiOutlineSupport } from "react-icons/hi";
import { HiArrowPathRoundedSquare } from "react-icons/hi2";
import Image from '../assets/image 1.png'
import About from '../assets/about.jpg'

function AboutUs() {
  return (
    <>
      <div className="about-container">
        <div className="about-left">
          <h2>Why Choose Us</h2>
          <p>
            Because we focus on results. For us, it’s all about what adds value
            for you and your business. Above all, we want our words to work for
            you.
          </p>

          <div className="about-left-info">
            <div className="shipping">
              <div className="rect"></div>
              <MdOutlineLocalShipping />

              <h2>Shipping</h2>
              <p>
                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                velit. Aliquam vulputate.
              </p>
            </div>
            <div className="shop">
              <div className="rect"></div>

              <FiShoppingBag />

              <h2>Shop</h2>
              <p>
                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                velit. Aliquam vulputate.
              </p>
            </div>
            <div className="support">
              <div className="rect"></div>

              <HiOutlineSupport />

              <h2>24/7 support</h2>
              <p>
                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                velit. Aliquam vulputate.
              </p>
            </div>
            <div className="retrun">
              <div className="rect"></div>

              <HiArrowPathRoundedSquare />

              <h2>Hassle Free Returns2</h2>
              <p>
                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                velit. Aliquam vulputate.
              </p>
            </div>
          </div>
        </div>
        <div className="about-right">
          <div className="about-right-img">
            <img src={Image} alt="About Us" />
            <div className="image-container">
            <img src={About} alt="About Us" />
            </div>
  </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
