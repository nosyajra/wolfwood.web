import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom';
import axios from "axios";
import '../scss/components/_service-blocks.scss';

function toggleTab(index) {
  let vis_tab = document.getElementsByClassName('tab');
  for (let i = 0; i < vis_tab.length; ++i) {
    let elem = vis_tab[i];
    elem.classList.remove("visible");
  }

  let vis_info = document.getElementsByClassName('info');
  for (let i = 0; i < vis_info.length; ++i) {
    let elem = vis_info[i];
    elem.classList.remove("visible");
  }

  let newTab = document.getElementById("servT_" + index);
  newTab.classList.add('visible');

  let newInfo = document.getElementById("servI_" + index);

  newInfo.classList.add('visible');
}

const ServiceBlocks = () => {

  const [pages, setPages] = useState([])

    const fetchPages = () => {
        // Using axios to fetch the posts
        axios
          .get(global.config.WP_API_URI + "pages?acf_format=standard&_embed")
          .then((res) => {
            // Saving the data to state
            setPages(res.data);
        });
    }

    // Calling the function on page load
    useEffect(() => {
        fetchPages()
    }, [])

  return (
      <>
        <div className="container service-tabs">
          {pages.filter(page => page.parent === 46).map((service, index) => (
            <button id={"servT_" + index} className={index===0?"visible tab":"tab"} onClick={() => {toggleTab(index)}} >
              <span className="info">
                <p className="icon"><i className={'fas fa-' + service.acf.service_icon_code}></i></p>
                <p>{service.title.rendered}</p>
              </span>  
            </button>
          ))}  
        </div>

        <div className="service-details">
          <div className="container"> 
            {pages.filter(page => page.parent === 46).map((service, index) => (
              <div id={"servI_" + index} key={"servTab_" + index} className={index===0?"info visible":"info"} >
                <div className="row">

                  <div className="col-lg-7 col-md-12 col-xs-12">
                    <h3>{service.title.rendered}</h3>
                    <p>{service.acf.subservice_description}</p>
                    <article dangerouslySetInnerHTML={{__html: service.acf.service_excerpt}} ></article>
                    <Link to={"services/" + service.slug} className="btn">Learn More <i className="fas fa-chevron-right"></i></Link>

                    <div className="row">
                      {service.acf.subservices.map((info, index) => (
                        <div className="subservice-details col-lg-4 col-md-4 col-xs-12" key={"servInfo_" + index}>
                          <div className="image"><img src={info.subservice_image} alt={info.subservice_name} width="355" height="237" /></div>
                          <h5>{info.subservice_name}</h5>
                          <p>{info.subservice_description}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="col-lg-1 col-md-12 col-xs-12"></div>

                  <div className="col-lg-3 col-md-12 col-xs-12">

                    <div className="checklist">
                      <ul>
                      {service.acf.service_qualities.map((quality) => (
                        <li><i className="fas fa-check"></i> {quality.service_quality}</li>  
                      ))}
                      </ul>
                    </div>
                    
                    <div className="cta">
                      <h4>{service.acf.cta_message}</h4>
                      <Link to={"contact"} className="btn">Contact Us <i className="fas fa-paper-plane"></i></Link>
                    </div>
                  </div>

                </div>
              </div>
            ))}  
          </div>  
        </div>        
      </>  
  );
};
  
export default ServiceBlocks;