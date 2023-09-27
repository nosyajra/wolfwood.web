import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom';
import axios from "axios";
import '../scss/components/_latest-posts.scss';

const Latest = () => {

    const [posts, setPosts] = useState([])

    const fetchPosts = () => {
        // Using axios to fetch the posts
        axios
          .get(global.config.WP_API_URI + "posts?filter[posts_per_page]=5")
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
        <section id="latest">
            <div className="container">
                <p class="subtitle">Blog</p>
                <h2 class="h1">Latest Posts</h2>

                <div className="row">
                    {posts.map((post, index) => (
                        <div className="blog-list col-lg-6 col-md-12 col-xs-12" key={"post_" + index} >
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-xs-12">
                                    <img src={post.fimg_url} alt={post.title.rendered} width="300" height="200" />
                                </div>
                                <div className="blog-text col-lg-8 col-md-8 col-xs-12">
                                    <h4>{post.title.rendered}</h4>
                                    <article className="blog-post" dangerouslySetInnerHTML={{__html: post.excerpt.rendered}}></article>
                                    <p><Link to={"/blog/" + post.slug } className="btn">Continue Reading <i className="fas fa-chevron-right"></i></Link></p>
                                </div>  
                            </div>    
                        </div>
                    ))}
                </div> 
            </div>    
        </section>
        </>  
  );
};
  
export default Latest;

