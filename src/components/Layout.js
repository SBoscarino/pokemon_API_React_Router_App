import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Pokemon from './Pokemon.js';
import Berries from './Berries.js';
import Items from './Items.js';
import Home from './Home.js';

class Layout extends Component {
render(){
  return(
    <div>
      <nav className="navbar">
        <NavLink to="/Home"><li>Home</li></NavLink>
        <NavLink to="/About"><li>About</li></NavLink>
        <NavLink to="/Work"><li>Social</li></NavLink>
        <NavLink to="/Find"><li>Find Me</li></NavLink>
      </nav>
      <div className="home-section">
      <h1>Home</h1>
      <hr/>
        {this.props.children}
      </div>
    </div>
  )
}
}
export default Layout;
