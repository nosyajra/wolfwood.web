import React, { useEffect, useState } from "react";
import axios from "axios";

const Contact = () => {

  const [page, setPage] = useState([])

  const fetchPage = () => {
      // Using axios to fetch the page
      axios
        .get(global.config.WP_API_URI + "pages?slug=privacy-policy")
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
      <main id="portfolio" className="inner-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              {page.map((content) => (
                <>
                  <h1>Privacy Policy</h1>
                  <article dangerouslySetInnerHTML={{__html: content.content.rendered}}></article>
                </>
              ))}
            </div>
          </div> 
        </div>
      </main>
    </>
  );
};
  
export default Contact;