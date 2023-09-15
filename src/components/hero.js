import React from "react";
import {Link} from 'react-router-dom';
import '../scss/components/_hero.scss';

const Hero = ({title, description, BGimage}) => {
  
  return (
      <>
        <div id="hero" style={{background: "url(" + BGimage + ") no-repeat center / cover"}}>
          <div className="hero-text" >
              <div className="container">
                <div className="row">
                  <div className="col-lg-5 col-md-8 col-xs-12">
                    <h2 className="h1">{title}</h2>
                    <p>{description}</p>
                    <Link className="btn" to="/services">Learn More <i className="fas fa-chevron-right"></i></Link> <Link  to="/contact" className="btn btn-outline">Contact Us <i className="fas fa-chevron-right"></i></Link>
                  </div>

                </div>
              </div>  
            </div>
        </div>  
      </>
    );
  };

export default Hero;
