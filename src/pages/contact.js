import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link} from 'react-router-dom';

import '../scss/pages/contact.scss';

const Contact = () => {
  const [page, setPage] = useState([])
  const [services, setServices] = useState([])

  const fetchPage = () => {
      // Using axios to fetch the page
      axios
        .get(global.config.WP_API_URI + "pages?slug=contact&acf_format=standard&_embed")
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
      <main id="contact" className="inner-page">
        <div className="container">

          <h1>Tell Us<br />About <span>Your Awesome Idea!</span></h1>

          <div className="row">
            <div className="col-lg-6 col-md-6 col-xs-12">
              {page.map((content) => (
                <article dangerouslySetInnerHTML={{__html: content.content.rendered}}></article>
              ))} 
            </div>

            <div id="contact-form" className="col-lg-6 col-md-6 col-xs-12">
                <form action="http://ec2-16-50-155-217.ap-southeast-4.compute.amazonaws.com/wp_wolfwood/index.php/wp-json/wpcf7/v1/contact-forms/611f2b7/feedback" method="post" enctype='multipart/form-data'>
                  <input type="text" placeholder="Name" />
                  <input type="text" placeholder="Email" />
                  <textarea type="text" placeholder="Message" ></textarea>
                  <button className="btn">Submit <i className="fas fa-paper-plane"></i></button>
                </form>
            </div>

          </div>
        </div>
      </main>

    </>
  );
};
  
export default Contact;