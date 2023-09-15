import React, { useEffect, useState } from "react";
import axios from "axios";
import '../scss/components/_team.scss';


const Team = () => {
  const [team, setTeam] = useState([])

  const fetchTeam = () => {
      // Using axios to fetch the page
      axios
        .get(global.config.WP_API_URI + "team?orderby=date&order=asc&_embed")
        .then((res) => {
          // Saving the data to state
          setTeam(res.data);
      });
  }

  // Calling the function on page load
  useEffect(() => {
      fetchTeam()
  }, [])

  return (
    <section id="team">
        <div class="container">

          <p className="subtitle">Our Team</p>  
          <h2 className="h1">Who We Are</h2>
          <div class="row">
          {team.map((member) => (
           
            <div className="member col-lg-3 col-md-6 col-xs-12">
              <div className="photo">
                <img src={member.fimg_url} alt={member.title.rendered} />
              </div>
              <div className="info">
                <h3>{member.title.rendered}</h3> 
                <h5>{member.acf.position}</h5>
              </div>
            </div>

          ))}
          </div>
        </div>  
      </section>
      
  );
};
  
export default Team;