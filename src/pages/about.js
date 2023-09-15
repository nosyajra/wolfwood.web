import React, { useEffect, useState } from "react";
import axios from "axios";
import Team from "../components/team";
import Testimonials from "../components/testimonials";

import '../scss/pages/about.scss';

const Contact = () => {

  const [page, setPage] = useState([])

  const fetchPage = () => {
      // Using axios to fetch the page
      axios
        .get(global.config.WP_API_URI + "pages?slug=about-us&acf_format=standard&_embed")
        .then((res) => {
          // Saving the data to state
          setPage(res.data);
      });
  }

  // Calling the function on page load
  useEffect(() => {
      fetchPage()
  }, [])

  return (
    <>
      <main id="main" className="inner-page">
        <div className="container">
            {page.map((content) => (
              <>
                <h1>{content.title.rendered}</h1>
                <article dangerouslySetInnerHTML={{__html: content.content.rendered}}></article>
              </>
            ))} 
        </div>

        <Team />

        <Testimonials />

      </main>
    
    </>
  );
};
  
export default Contact;