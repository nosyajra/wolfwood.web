import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom';
import {Helmet} from "react-helmet";
import axios from "axios";
import Hero from '../components/hero';
import Services from '../components/service-blocks';
import Featured from '../components/featured';
import Posts from '../components/latest-posts';
import '../scss/pages/home.scss';

const Contact = () => {

  const [page, setPage] = useState([])

  const fetchPage = () => {
      // Using axios to fetch the page
      axios
        .get(global.config.WP_API_URI + "pages?slug=home&acf_format=standard&_embed")
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
      
      {page.map(({yoast_head_json}) => (
        <Helmet>
          <title>{yoast_head_json.title}</title>
          <meta name="description" content={yoast_head_json.description} />
        </Helmet>
      ))} 
      

      {page.map(({acf: hero}) => (
        <Hero title={hero.hero_title} description={hero.hero_description}  BGimage={hero.hero_image}  />
      ))}  

      <main id="index">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-12 col-xs-12">
              {page.map((content) => (
                <>
                  <article dangerouslySetInnerHTML={{__html: content.content.rendered}}></article>
                  <Link className="btn" to="/about-us">Read More <i className="fas fa-chevron-right"></i></Link>
                </>
              ))}  
            </div>
            <div className="col-lg-1 col-md-12 col-xs-12"></div>
            <div className="col-lg-4 col-md-12 col-xs-12">

              {page.map((why) => (
                <>
                  {why.acf.why_us.map((info) => (
                    <div className="why">
                      <p className="icon"><i className={"fas fa-" + info.why_icon}></i></p>
                      <h3>{info.why_title}</h3>
                      <p>{info.why_description}</p>
                    </div>
                  ))} 
                </>
              ))} 
              
            </div>
          </div>
        </div>
      </main>

      <section id="services-preview">
        <div className="container">
          <div className="row">
            {page.map(({acf: wwd}) => (
              <section className="col-lg-7 col-md-12 col-xs-12">
                <p className="subtitle">{wwd.what_we_do_subtitle}</p>
                <h2 className="h1" dangerouslySetInnerHTML={{__html: wwd.what_we_do_title}}></h2>
              </section>
            ))} 
          </div>
        </div>
      </section>

      <div id="service-blocks">
        <Services />
      </div>

      <div>
        <Featured />  
      </div>        

      <div>
        <Posts />       
      </div>      
            
    </>
  );
};
  
export default Contact;