import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link} from 'react-router-dom';

import '../scss/pages/services.scss';

const Services = () => {

  const [page, setPage] = useState([])
  const [services, setServices] = useState([])

  const fetchPage = () => {
      // Using axios to fetch the page
      axios
        .get(global.config.WP_API_URI + "pages?slug=services&acf_format=standard&_embed")
        .then((res) => {
          // Saving the data to state
          setPage(res.data);
      });
  }

  const fetchServices = () => {
    // Using axios to fetch the posts
    axios
      .get(global.config.WP_API_URI + "pages?acf_format=standard&_embed")
      .then((res) => {
        // Saving the data to state
        setServices(res.data);
    });
}

  // Calling the function on page load
  useEffect(() => {
      fetchPage()
      fetchServices()
  }, [])

  return (
    <>
      <div className="inner-page">
        <main id="services" >
          <div className="container">
              <h1>Services</h1>
                
              {page.map((content) => (
                <article dangerouslySetInnerHTML={{__html: content.content.rendered}}></article>
              ))} 

          </div>
        </main>

        <section id="service-links">
          <div className="container">
            <div className="row">
              {services.filter(service => service.parent === 46).map((service, index) => (
                <div className="serve-link col-lg-3 col-md-6 col-xs-12">
                  <p className="icon"><i className={'fas fa-' + service.acf.service_icon_code}></i></p>
                  <h4>{service.title.rendered}</h4>
                  <p>{service.acf.subservice_description}</p>
                  <article dangerouslySetInnerHTML={{__html: service.acf.service_excerpt}} ></article>
                  <Link to={"services/" + service.slug}>Learn More <i className="fas fa-chevron-right"></i></Link>
                </div>
              ))}
            </div>  
          </div> 
        </section> 
      </div>
    </>
  );
};
  
export default Services;