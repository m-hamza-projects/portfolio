import React from 'react';
import './styles/App.css';
//import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom'


function App() {
  return (
    <div className="layout">
      <div className="navigation">
        <Link className="navLink" to="/">Home</Link>
        <Link className="navLink" to="/aboutme">About Me</Link>
        <Link className="navLink" to="/resume">Resume</Link>
        <Link className="navLink" to="/projects">Projects</Link>
        <Link className="navLink" to="/contact">Contact</Link>
        <hr className="line"/>
      </div>
      <Main/>
    </div>
    // <div className="demo-big-content">
    //     <Layout>
    //         <Header className="header-color" title="My Portfolio" scroll>
    //             <Navigation>
    //                 <Link to="/aboutme">About Me</Link>
    //                 <Link to="/resume">Resume</Link>
    //                 <Link to="/projects">Projects</Link>
    //                 <Link to="/contact">Contact</Link>
    //             </Navigation>
    //         </Header>
    //         <Drawer title="My Portfolio">
    //             <Navigation>
    //                 <Link to="/aboutme">About Me</Link>
    //                 <Link to="/resume">Resume</Link>
    //                 <Link to="/projects">Projects</Link>
    //                 <Link to="/contact">Contact</Link>
    //             </Navigation>
    //         </Drawer>
    //         <Content>
    //             <Main/>
    //         </Content>
    //     </Layout>
    // </div>

  );
}

export default App;
