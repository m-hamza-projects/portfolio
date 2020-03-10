import React, { Component } from 'react';
import '../styles/projects.css'

class Projects extends Component{

  render(){
    return(
      <div class="projects-content">
        <h1>Projects</h1>

        <h4>Canadian Space Agency</h4>

        <div className="csa-project-background">
          <p className="csa-project">
          Python Web crawler
          <ul>
            <li>Current disasters occuring around the world needed to be shown on internal visualization screens at the Canadian
            Space Agency headquarers</li>
            <li>I developed a Python web crawler using Selenium to gather data from GDACS (Global Disaster Alert and Coordination System)
             website about current natural disasters and upload their coordinates, level of severity, along with the appropriate icons
             to the visualization screens</li>
          </ul>
          </p>
        </div>
      </div>
    )
  }
}

export default Projects;
