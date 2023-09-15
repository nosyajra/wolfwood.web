import React from "react";
import {Link} from 'react-router-dom';
import Nav from './nav';

import '../scss/components/_header.scss';

function toggleNav() {
  let nav = document.getElementById("main-nav");
  nav.classList.add("active");
}

const Header = () => {
  return (
    <>
      <header>
    	  <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <Link to="/"><img src={window.location.origin + "/images/logo-black.webp"} className="logo" alt="Wolfwood Web" /></Link>
            </div>
            <div className="col-lg-8">
              <button className="toggle-nav" onClick={toggleNav} >
                <span></span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <Nav />
    </>
    
       
  );
};
  
export default Header;