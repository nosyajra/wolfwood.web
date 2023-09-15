import React from "react";
import '../scss/components/_banner.scss';

const Banner = ( {title, subtitle, icon} ) => {

    const iconClassName = "fas fa-" + {icon};
    
    return (
        
        
        <section id="banner">
            <div className="crescent container"></div>
            <div className="layers">
                <div className="container">
                    <div className="icon">
                        <i className={iconClassName}></i>
                    </div>
                    { {subtitle} !== "" &&
                        <h2>{subtitle}</h2>
                    }

                    <h1>{title}</h1>  
                </div>
            </div>    
        </section>   
    );
  };
    
  export default Banner;

