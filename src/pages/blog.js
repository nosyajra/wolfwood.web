import React, { useEffect, useState } from "react";
import axios from "axios";

import '../scss/pages/blog.scss';

const Contact = () => {

  const [posts, setPosts] = useState([])

  const fetchPosts = () => {
      // Using axios to fetch the page
      axios
        .get(global.config.WP_API_URI + "posts")
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
      <main id="blog" className="inner-page">
        <div className="container">
            <h1>Blog</h1>
            <div className="row">
                {posts.map((post, index) => (
                  <div className="blog-list col-lg-4 col-md-6 col-xs-12" key={"post_" + index}>
                    <div className="fimg">
                      <img src={post.fimg_url} alt={post.title.rendered} />
                    </div>
                    <h4>{post.title.rendered}</h4>
                    <article className="blog-post" dangerouslySetInnerHTML={{__html: post.excerpt.rendered}}></article>
                    <p><a className="btn" href={"/blog/" + post.slug } >Continue Reading <i className="fas fa-chevron-right"></i></a></p>
                  </div>  
                ))}
            </div> 
        </div>
      </main>
    </>
  );
};
  
export default Contact;