import React, { useEffect, useState } from "react";
import {Helmet} from "react-helmet";
import axios from "axios";

import '../scss/pages/portfolio.scss';

const Contact = () => {

  const [posts, setPosts] = useState([])

  const fetchPosts = () => {
      // Using axios to fetch the page
      axios
        .get(global.config.WP_API_URI + "project?_embed")
        .then((res) => {
          // Saving the data to state
          setPosts(res.data);
      });
  }

  // Calling the function on page load
  useEffect(() => {
      fetchPosts()
  }, [])

  return (
    <>
      <Helmet>
        <title>Portfolio - Wolfwood Web</title>
        <meta name="description" content="" />
      </Helmet> 

      <main id="portfolio" className="inner-page">
        <div className="container">
            <h1>Portfolio</h1>
            <div id="projects" className="row">
              {posts.map((content) => (
                <div className="project col-lg-3 col-md-6 col-xs-12">
                  <div className="img" >
                    <img src={content.fimg_url } alt={content.title.rendered} />
                  </div>
                  <h4>{content.title.rendered}</h4>
                </div>
              ))}  
            </div> 
        </div>
      </main>
    </>
  );
};
  
export default Contact;