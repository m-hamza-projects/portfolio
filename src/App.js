import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom'

function App() {
  return (
    <div>
        <Layout style={{height: '300px', position: 'relative', background: 'url(http://www.getmdl.io/assets/demos/transparent.jpg) center / cover'}}>
            <Header transparent title="Title" style={{color: 'white'}}>
                <Navigation>
                    <Link to="/aboutme">About Me</Link>
                    <Link to="/resume">Resume</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/contact">Contact</Link>
                </Navigation>
            </Header>
            <Drawer title="Title">
                <Navigation>
                    <Link to="/aboutme">About Me</Link>
                    <Link to="/resume">Resume</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/contact">Contact</Link>
                </Navigation>
            </Drawer>
        </Layout>
        <Content>
          <Main/>
        </Content>
    </div>
  );
}

export default App;
