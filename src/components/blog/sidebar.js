import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom';
import axios from "axios";

import '../../scss/pages/templates/_sidebar.scss';


const Contact = () => {

  const [posts, setPosts] = useState([])

  const fetchPosts = () => {
      // Using axios to fetch the page
      axios
        .get(global.config.WP_API_URI + "posts?filter[posts_per_page]=10&_embed")
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
      <aside id="sidebar">
        <h3>Latest Posts</h3>
        {posts.map((post) => (
            <div className="row">
                <div className="col-lg-4 col-md-4 col-xs-12">
                    <img src={post.fimg_url} alt={post.title.rendered} />
                </div>
                <div className="blog-text col-lg-8 col-md-8 col-xs-12">
                    <h4><Link reloadDocument to={"/blog/" + post.slug}>{post.title.rendered}</Link></h4>
                </div>  
            </div>    
        ))}
      </aside>
    </>
  );
};
  
export default Contact;