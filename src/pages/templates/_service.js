import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import {Helmet} from "react-helmet";
import axios from "axios";

import '../../scss/pages/services.scss';


const Service = () => {
    const{slug} = useParams();
    const [service, setService] = useState([])

    const fetchService = () => {
        // Using axios to fetch the posts
        axios
          .get(global.config.WP_API_URI + "pages?slug=" + slug + "&acf_format=standard&_embed" )
          .then((res) => {
            // Saving the data to state
            setService(res.data);
        });
    }

    // Calling the function on page load
    useEffect(() => {
        fetchService()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
    <>    
        {service.map(({yoast_head_json}) => (
            <Helmet>
              <title>{yoast_head_json.title}</title>
              <meta name="description" content={yoast_head_json.description} />
            </Helmet>
        ))} 
        
        <div id="service" className="inner-page">
            <div className="container">
                {service.map((content) => ( 
                    <>
                        <main>
                            <h1>{content.title.rendered}</h1>
                            <div dangerouslySetInnerHTML={{__html: (content.content.rendered) }} />
                        </main>

                        <section id="subservices">
                            <div className="row">
                            {content.acf.subservices.map((info) => (
                                <div className="subservice-details col-lg-3 col-md-6 col-xs-12">
                                    <div className="image"><img src={info.subservice_image} alt="" /></div>
                                    <div className="text">
                                        <h4>{info.subservice_name}</h4>
                                        <p>{info.subservice_description}</p>
                                    </div>
                                </div>
                            ))}
                            </div>
                        </section>
                    </>    
                ))}
            </div>    
        </div>
        </>    
  );
};
  
export default Service;

