import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Mhamza from '../res/mhamza.png';

class Landing extends Component{

  render(){
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src={Mhamza}
              alt="Mohammad Hamza"
              className="mhamza-img"
            />
            <div className="banner-text">
              <h1>Mohammad Hamza | Software Ddeveloper</h1>
              <hr/>
              <p>Java | C++ | Python | MySQL | JavaScript | React | HTML/CSS</p>
              <div className="social-links">

              {/* linkedin */}
              <a href="https://www.linkedin.com/in/hamza-mohammad-360383a5/" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-linkedin-square" aria-hidden="true"/>
              </a>

              {/* Github */}
              <a href="https://github.com/m-hamza-projects" rel="noopener noreferrer" target="_blank">
                <i class="fa fa-github-square" aria-hidden="true"/>
              </a>

              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
