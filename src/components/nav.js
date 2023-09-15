import React from "react";
import { NavLink, Link } from 'react-router-dom';

import '../scss/components/_nav.scss';

function closeNav() {
  let nav = document.getElementById("main-nav");
  nav.classList.remove("active");
}

const Navbar = () => {
  return (
    <div id="main-nav">
      <div className="container">

        <div className="row">
          <div className="col-lg-11">
            <h2 id="ww-title">Wolfwood Web</h2>
          </div>
          <div className="col-lg-1">
            <button className="hide-nav" onClick={closeNav}>
              <span></span>
            </button>
          </div>
        </div>
      
        <nav id="main-menu" className="row">
          <div className="col-lg-4 col-md-4 col-xs-12">

            <h4>Menu</h4>

            <ul className="page-menu">
              <li>
                <NavLink 
                  onClick={closeNav} 
                  to="/" 
                  className={({ isActive, isPending }) => 
                    isPending ? "pending" : isActive ? "active" : "" 
                  }>
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink 
                  onClick={closeNav} 
                  to="/about-us" 
                  className={({ isActive, isPending }) => 
                    isPending ? "pending" : isActive ? "active" : "" 
                  }>
                  About
                </NavLink>
              </li>

              <li>
                <NavLink 
                  onClick={closeNav} 
                  to="/portfolio" 
                  className={({ isActive, isPending }) => 
                    isPending ? "pending" : isActive ? "active" : "" 
                  }>
                  Portfolio
                </NavLink>
              </li>

              <li>
                <NavLink 
                  onClick={closeNav} 
                  to="/blog" 
                  className={({ isActive, isPending }) => 
                    isPending ? "pending" : isActive ? "active" : "" 
                  }>
                  Blog
                </NavLink>
              </li>

              <li>
                <NavLink 
                  onClick={closeNav} 
                  to="/contact"
                  className={({ isActive, isPending }) => 
                    isPending ? "pending" : isActive ? "active" : ""
                  }>Contact
                </NavLink>
              </li>

            </ul>
          </div>

          <div className="col-lg-8 col-md-8 col-xs-12">
            <h4>Services</h4>
            <ul className="services-menu">
              <li><NavLink onClick={closeNav} reloadDocument to="/services/web-design">Web Design</NavLink></li>
              <li><NavLink onClick={closeNav} reloadDocument to="/services/web-development">Web Developement</NavLink></li>
              <li><NavLink onClick={closeNav} reloadDocument to="/services/digital-marketing">Digital Marketing</NavLink></li>
              <li><NavLink onClick={closeNav} reloadDocument to="/services/website-management">Website Management</NavLink></li>
            </ul>
          </div>

          <div className="col-lg-12 col-md-12 col-xs-12">

            <h4>Contact</h4>
            
            <a href="mailto:contact@wolfwoodweb.com" className="email"><i className="fa fa-paper-plane"></i> contact@wolfwoodweb.com</a>

            <ul className="social-menu">
                <li><Link onClick={closeNav} target="_blank" to="https://www.facebook.com/wolfwood.web"><i className="fab fa-facebook"></i></Link></li>
                <li><Link onClick={closeNav} target="_blank" to="https://linkedin.com/"><i className="fab fa-linkedin"></i></Link></li>
            </ul>
          </div>
        </nav>

      </div>
    </div>  
      
  );
};
  
export default Navbar;