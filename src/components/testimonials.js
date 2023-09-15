import React, { useEffect, useState } from "react";
import axios from "axios";
import '../scss/components/_testimonials.scss';

const Testimonials = () => {
  
  const [testimonials, setTestimonials] = useState([])

  const fetchTestimonials = () => {
    // Using axios to fetch the posts
    axios
      .get(global.config.WP_API_URI + "testimonial")
      .then((res) => {
        // Saving the data to state
        setTestimonials(res.data);
    });
  }

  // Calling the function on page load
  useEffect(() => {
    fetchTestimonials()
  }, [])


  return (
      <>
        <section id="testimonials">
            <div className="container">
                <p className="subtitle">TESTIMONIALS</p>
                <h2 className="h1">What Our <span>Happy Clients</span> Say</h2>

                <div className="row">
                  {testimonials.map((testimonial) => (
                    <div className="col col-lg-3 col-md-6 col-xs-12">
                        <div className="testimonial" dangerouslySetInnerHTML={{__html: testimonial.content.rendered}}></div>
                        <img src="/images/placeholder-f.jpg" alt="testimonial" />
                        <h5>{testimonial.title.rendered}</h5>
                        <h6>{testimonial.acf.titles}</h6>
                    </div>
                  ))}     
                </div>       
            </div>
        </section>
      </>  
    );
  };
    
export default Testimonials;
