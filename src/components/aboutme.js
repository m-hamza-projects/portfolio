import React, { Component } from 'react';
import Mhamza from '../res/mhamza.png';
import '../styles/aboutme.css'

class About extends Component{

  render(){
    return(
      <div className="aboutme">
      <table>
        <tr>
          <td>
            <h1>Mohammad Hamza</h1>
            <img
              src={Mhamza}
              alt="Mohammad Hamza"
              className="mhamza-image"
            />
          </td>
          <td>
            My name is Mohmmad Hamza, I graduated with a degree in Bachleor of Science in Computer Science
            from University of Lethbridge in August 2019. I have also completed a diploma in IT - Software Development with honors.
            <br/>
            <br/>
            I enjoy learning new technologies and ...
          </td>
        </tr>
      </table>

      </div>
    )
  }
}

export default About;
