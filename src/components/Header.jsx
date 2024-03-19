import React from "react";
import { FiUser } from "react-icons/fi";
import { LuShoppingCart } from "react-icons/lu";
import './header.css'

const Header = () => {
  return (
    <div className="Navbar">     
          <p>Furni<span>.</span> </p>

      <div className="Navbar-links"> 

        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Shop</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>  <li>
            <a href="#">Blog</a>
          </li>  <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
        <div className="header-icons">
            <a href="user" title="user"><FiUser/></a> 
            <a href="user" title="cart"><LuShoppingCart/></a>  
 
        
        </div>
      
      </div>
    </div>
  );
};

export default Header;
