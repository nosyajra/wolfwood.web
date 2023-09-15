import React, { useEffect, useState } from "react";
import axios from "axios";
import '../scss/components/_featured.scss';

const Featured = () => {

    const [projects, setPosts] = useState([])

    const fetchPosts = () => {
        // Using axios to fetch the posts
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
        <section id="featured">
            <div className="container">
                <p className="subtitle">WORKS</p>
                <h2 class="h1">Featured Projects</h2>

                <ul className="grid">
                    {projects.filter(project => project.acf.feat === '1').map((project) => (
                        <li>
                            <a href={project.acf.link.url} target="_rel">
                                <img src={project.fimg_url} alt="" />
                                <span className="description">{project.title.rendered}</span>
                            </a>
                        </li>
                    ))}
                </ul> 
            </div>    
        </section>
        </>  
  );
};
  
export default Featured;

