import React from "react";
import footer from "../assets/chair.png";
import { GoMail } from "react-icons/go";
import { FaInstagram } from "react-icons/fa";
import { RiFacebookFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { BiLogoTelegram } from "react-icons/bi";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="form-section">
          <form>
            <label>
              <GoMail />
              Subscribe to Newsletter
            </label>
            <div>
              <div className="inputs">
                <input type="text" placeholder="Enter your name" />
                <input type="email" placeholder="Enter your email" />
                <button type="submit">
                  <BiLogoTelegram />
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="image-section">
          <img src={footer} alt="logo" />
        </div>
      </div>

      <div className="footer-box">
        <div className="footer-logo">
          <h1>Furni.</h1>
          <span>
            Donec vitae odio quis nisl Donec vitae odio quis <br /> nisl
            dapibus malesuada. Nullam acDonec vitae odio quis nisl dapibus nisl
            dapibus malesuada. Nullam ac aliquet velit aliquet velitdapibus
            malesuada. Nullam ac aliquet velit.
          </span>
          <div className="social-icons">
            <a href="#" key="instagram">
              <FaInstagram />
            </a>
            <a href="#" key="facebook">
              <RiFacebookFill />
            </a>
            <a href="#" key="linkedin">
              <FaLinkedin />
            </a>
            <a href="#" key="telegram">
              <FaInstagram />
            </a>
          </div>
        </div>
        <div className="links">
          <ul>
            <li>
              <a href="#about">About US</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#blog">Blog</a>
            </li>
            <li>
              <a href="#contact">Contact US</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#support">Support</a>
            </li>
            <li>
              <a href="#knowledge-base">Knowledge Base</a>
            </li>
            <li>
              <a href="#live-chat">Live Chat</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#jobs">Jobs</a>
            </li>
            <li>
              <a href="#our-team">Our Team</a>
            </li>
            <li>
              <a href="#leadership">Leadership</a>
            </li>
            <li>
              <a href="#privacy-policy">Privacy Policy</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#nordic-chair">Nordic Chair</a>
            </li>
            <li>
              <a href="#kruzo-aero">Kruzo Aero</a>
            </li>
            <li>
              <a href="#ergonomic-chair">Ergonomic Chair</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        <span>
          Copyright @ 2024 All rights Reserved - Designed with love by
          <a href="Untree.com"><b> Untree.com </b></a> <br /> Distributed By themeWagon
        </span>
        <span>Term & conditions &nbsp; &nbsp; Policy Privacy</span>
      </div>
    </div>
  );
};

export default Footer;
