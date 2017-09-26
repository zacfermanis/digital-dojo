import React, { Component } from 'react';
import logo from './digitaldojo_logo_lm_blue.png';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="Home-header">
          <img src={logo} className="Home-logo" alt="logo" />
        </div>
      </div>
    );
  }
}

export default Home;
