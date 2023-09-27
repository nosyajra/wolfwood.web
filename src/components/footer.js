import React from "react";
import {Link } from 'react-router-dom';

import '../scss/components/_footer.scss';

const Footer = () => {
  return (
    <footer>
      <div id="info">
        <div className="container">
        
          <div className="row">
            
            <div className="col-lg-2 col-md-6 col-xs-12">
              <Link to="/"><img src={window.location.origin + "/images/logo-black-large.webp"} alt="Wolfwood Web" width="200" height="163" /></Link>
            </div>

            <div className="contact col-lg-3 col-md-6 col-xs-12">
              <h3>Have <span>Any Questions?</span><br />Contact Us</h3>
              <p><small>E-mail Address</small><br />contact@wolfwoodweb.com</p>
              <ul className="social">
                <li><a href="#https://www.facebook.com/wolfwood.web" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a></li>
                <li><a href="https://www.facebook.com/wolfwood.web" target="_blank" rel="noreferrer"><i className="fab fa-facebook"></i></a></li>
              </ul>
            </div>

            <div className="col-lg-1 col-md-3 col-xs-6">
              <h5>Site</h5>
              <nav>
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/about-us">About</Link></li>
                  <li><Link to="/portfolio">Portflio</Link></li>
                  <li><Link to="/services/digital-marketing">Blog</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                </ul>
              </nav>  
            </div>

            <div className="col-lg-2 col-md-3 col-xs-6">
              <h5>Services</h5>
              <nav>
                <ul>
                  <li><Link reloadDocument to="/services/web-design">Web Design</Link></li>
                  <li><Link reloadDocument to="/services/web-development">Web Development</Link></li>
                  <li><Link reloadDocument to="/services/digital-marketing">Digital Marketing</Link></li>
                  <li><Link reloadDocument to="/services/web-management">Website Management</Link></li>
                </ul>
              </nav>
            </div>

            <div className="col-lg-4 col-md-6 col-xs-12">
              <h5>Newsletter</h5>
              <p>Sign up for Wolfwood emails and be the first to learn about exclusive offers, discounts and freebies.</p>
              <form id="newsletter">
                <input type="text" placeholder="Name"></input>
                <input type="email" placeholder="Email"></input>
                <button className="btn">Subscribe <i className="fas fa-chevron-right"></i></button>
              </form>
            </div>

          </div>
        </div>
      </div> 

      <div className="copyright">
        <div className="container">
          <p>&copy; 2023. Wolfwood Web. All Rights Reserved | <Link to="/terms-of-service">Terms Of Service</Link> | <Link to="/privacy-policy">Privacy Policy</Link> | ABN: 43 512 289 194.</p> 
        </div>   
      </div> 
    </footer>    
  );
};
  
export default Footer;