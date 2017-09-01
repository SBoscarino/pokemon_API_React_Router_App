import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

// <NavLink
//   activeStyle={{
//     color: "blue",
//     backgroundColor: "white"
//   }}>Main Page</NavLink>

class NavBar extends Component {
  render(){
    return(
      <div>
        <nav>
          <NavLink activeClassName="selected" className="nav-link" to="/Home">Home</NavLink>
          <NavLink activeClassName="selected" className="nav-link" to="/Pokemon">Pokemon</NavLink>
          <NavLink activeClassName="selected" className="nav-link" to="/Items">Items</NavLink>
          <NavLink activeClassName="selected" className="nav-link" to="/Berries">Berries</NavLink>
        </nav>
          {this.props.children}
      </div>
    )
  }
}
export default NavBar;
