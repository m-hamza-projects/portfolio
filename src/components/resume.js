import React, { Component } from 'react';
import '../styles/resume.css'
import mhamzaResume from '../res/mhamza_resume.pdf'

class Resume extends Component{

  render(){
    return(
      <div className="resume-content">
        <h1>Resume</h1>
        <div className="download-link">
          <a href={mhamzaResume} download="Mohammad Hamza Resume.pdf">
            Download resume in PDF &ensp;
            <i class="fa fa-download" aria-hidden="true"></i>
          </a>
        </div>
        <h4>Education</h4>

        <div className="uleth-background">
          <p className="uleth">
          Bachelor of Science | Sept 2016 - Aug 2019 | University of Lethbridge | Lethbridge, AB
          <ul>
            <li>Major: Computer Science</li>
            <li>Related coursework: Software Development, Data Structure and Algorithms, Quantum Computing,
            Computer Graphics (OpenGL), Network Communications, Data processing, Programming Languages, New Media,
            Academic Writing, Management, and Economics.</li>
          </ul>
          </p>
        </div>

        <div className="sait-background">
          <p className="sait">
          Information Technology - Diploma | Sept 2014 - Apr 2016 | SAIT | Calgary, AB
          <ul>
            <li>
              Major: Software Development
            </li>
            <li>
              Related coursework: Object Oriented Programming, Web Application Programming,
              Database,Object Oriented System Analysis and Design Professional Communication and Presentation,
              Interface Design, and Business Dynamics.
            </li>
          </ul>
          </p>
        </div>

        <h4>Skills</h4>

        <div className="skills-background">
          <div className="col">
            <table>
              <tr>
                <td><ul><li>Java</li></ul></td>
                <td><ul><li>Git version control</li></ul></td>
                <td><ul><li>Software Development Life Cycle</li></ul></td>
              </tr>
              <tr>
                <td><ul><li>Python</li></ul></td>
                <td><ul><li>HTML/CSS/JSP/Servlet</li></ul></td>
                <td><ul><li>Linux</li></ul></td>
              </tr>
              <tr>
                <td><ul><li>C++</li></ul></td>
                <td><ul><li>JavaScript/React</li></ul></td>
                <td><ul><li>JIRA/Bitbucket</li></ul></td>
              </tr>
              <tr>
                <td><ul><li>SQL/MySQL</li></ul></td>
                <td><ul><li>PHP</li></ul></td>
                <td><ul><li>Perl</li></ul></td>
              </tr>
            </table>
          </div>
        </div>

        <h4>Experience</h4>
        <div className="csa-background">
          <p className="csa">
          Satellite Operations Developer - Student | Canadian Space Agency | May 2019 - Aug 2019 | St-Hubert, QC
          <ul>
            <li>
            Created Python scripts collecting data for internal satellite mission visualization application.
            </li>
            <li>
              Built upon pre-existing Python image processing code for the NEOSSat satellite mission ground segment
            </li>
            <li>
              Performed maintenance on Perl and Java programs used to support satellite operations
            </li>
          </ul>
          </p>
        </div>

        <div className="bb-background">
          <p className="bb">
          Beta Software Test - Student | Blackberry | Sept 2017 - Aug 2018 | Waterloo, ON
          <ul>
            <li>
              Triaged and managed incoming issues from users found during mobile device testing
            </li>
            <li>
              Communicated with testers/developers to fully understand reported issues and coaching them through
              procedures to capture logs and documenting steps to reproduce
            </li>
            <li>
              Performed log analysis and reproducing issues to accurately report software
              defects to the appropriate development team
            </li>
            <li>
              Collaborated with Project Managers and internal stakeholders to identify critical issues
            </li>
          </ul>
          </p>
        </div>

        <div className="ap-background">
          <p className="ap">
          Capstone Project Team Leader and Developer | Aspen Properties | Sept 2015 - Apr 2016 | Calgary, AB
          <ul>
            <li>
              Led a team of three in designing, developing and testing a reporting system for a property
              management company: Aspen Properties.
            </li>
            <li>
              Developed a report management system for the security team to replace physical paperwork and
              reduce the amount of word document generated reports.
            </li>
            <li>
              Developed a Web Application with user friendly Interface using CSS, HTML/JSP, and JavaScript;
              and backend with MVC framework using Java along with SQL database for data persistence.
            </li>
          </ul>
          </p>
        </div>

      </div>
    )
  }
}

export default Resume;
