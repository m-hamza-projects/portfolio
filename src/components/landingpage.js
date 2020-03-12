import React, { Component } from 'react';
import '../styles/landing.css';

class Landing extends Component{

  render(){
    return(
        <div className="landingpage-content">
          <h1>Mohammad Hamza</h1>
          <h3>Software Developer</h3>
          <p>Welcome to my portfolio, please use the links above to get to know me. I have included
           my resume which covers my past experience, education and skills. You will also find the projects link which
           discusses some of the projects that I have worked on. Feel free to contact me using the link provided above.
          </p>

          <div className="social-links">

            {/* linkedin */}
            <a href="https://www.linkedin.com/in/hamza-mohammad-360383a5/" rel="noopener noreferrer" target="_blank">
              <i className="fa fa-linkedin-square" aria-hidden="true"></i>
            </a>

            {/* Github */}
            <a href="https://github.com/m-hamza-projects" rel="noopener noreferrer" target="_blank">
              <i className="fa fa-github-square" aria-hidden="true"></i>
            </a>

          </div>

        </div>
    )
  }
}

export default Landing;
