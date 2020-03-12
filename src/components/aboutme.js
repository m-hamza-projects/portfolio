import React, { Component } from 'react';
import Mhamza from '../res/mhamza.png';
import '../styles/aboutme.css'

class About extends Component{

  render(){
    return(
      <div className="aboutme">
        <div className='image-mhamza'>
          <h1>Mohammad Hamza</h1>
          <img
            src={Mhamza}
            alt="Mohammad Hamza"
            className="mhamza-image"
          />
        </div>
        <div className='about-content'>
          My name is Mohmmad Hamza, I graduated with a degree in Bachleor of Science in Computer Science
          from University of Lethbridge in August 2019. I have also completed a diploma in IT - Software Development with honors.
          <br/>
          <br/>
          Recently I completed my coop at the Canadian Space Agency and my duties included developing and automating tasks using Python,
          JAVA and Perl programming languages.
          <br/>
          <br/>
          From my coop at BlackBerry I leaned great leadership skills by training students and leading several meetings.
          I also created an onboarding training content for new students to follow. To help with internal beta software updates,
          I developed an app on ANDROID which was download by over 200 employees including the CEO.
          <br/>
          <br/>
          I have led a small team on an 8-month period of design and development of a Web Application Capstone project.
          We developed a report management system using HTML, JSP, JavaScript, CSS, JAVA, and SQL. We also created a design
          document with UML diagrams to help understand the structure and the flow of the system overall. For security and
          testing purposes we created a test plan for the client and as well as unit tests for the Java functions.
          I also prepared management related documents such as Gantt Chart to manage tasks and milestones of the
          project and organized meetings with the team members to ensure their progress was effective and efficient.
          During our development, communication was an important asset; our communication included meetings with our
          client, professors, and various presentations of the project.
          <br/>
          <br/>
        </div>
      </div>
    )
  }
}

export default About;
