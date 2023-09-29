import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom';
import { useParams } from 'react-router-dom';
import {Helmet} from "react-helmet";
import Sidebar from '../../components/blog/sidebar';
import axios from "axios";

import '../../scss/pages/templates/_blog.scss';

const Post = () => {
    const {slug} = useParams();
    const [post, setPost] = useState([])

    const fetchPost = () => {
        // Using axios to fetch the posts
        axios
          .get(global.config.WP_API_URI + "posts?slug=" + slug )
          .then((res) => {
            // Saving the data to state
            setPost(res.data);
        });
    }

    // Calling the function on page load
    useEffect(() => {
        fetchPost()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (  
    <>

        {post.map(({yoast_head_json}) => (
            <Helmet>
              <title>{yoast_head_json.title}</title>
              <meta name="description" content={yoast_head_json.description} />
            </Helmet>
        ))} 

        <div id="post" className="inner-page">
            <div className="container">
                {post.map((content, index) => ( 
                    <div className="row">
                        <div className="col-lg-8 col-md-12 col-xs-12">
                            <main id="blog-post" class="container">
                                <h1>{content.title.rendered}</h1>
                                <div className="breadcrumb">
                                    <p>
                                        <small>
                                            <Link to="/">Home</Link> 
                                            <span>&raquo;</span>  
                                            <Link to="/blog">Blog</Link> 
                                            <span>&raquo;</span> {content.title.rendered}
                                        </small>
                                    </p>
                                </div>
                                <div className="image">
                                    <img src={content.fimg_url } alt={content.title.rendered} />
                                </div>
                                
                                <article dangerouslySetInnerHTML={{__html: (content.content.rendered) }}></article>
                            </main>
                        </div>

                        <div className="col-lg-4 col-md-12 col-xs-12">
                            <Sidebar />
                        </div>        
                    </div>
                ))}
            </div>    
        </div>
    </>
  );
};
  
export default Post;

