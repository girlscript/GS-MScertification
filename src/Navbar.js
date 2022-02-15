import React, { useState } from "react";
import "./Navbar.css";
import navlogo from "./images/navlogo.png";

import { GiHamburgerMenu } from "react-icons/gi";

import { NavLink } from "react-router-dom";
import Button from "@material-ui/core/Button";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        <div className="logo">
          <img src={navlogo} className="logoimg" />
        </div>

        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
        >
          <ul>
            <li className="navlinks">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="navlinks">
              <NavLink to="/about">About us</NavLink>
            </li>
            <li className="navlinks" id="nav11">
              <NavLink to="/contact" className="Nav_links_contact">Contact</NavLink>
            </li>
            <li className="navlinks">
              <Button className="Start_btn" 
              onClick={() => {
              let val = document.getElementById("track-container");
              return val.scrollIntoView();
            }}
            style={{
              cursor: "pointer",
            }}>
                Start Learning{" "}
              </Button>
            
            </li>
          </ul>
        </div>

        <div className="social-media">
          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
