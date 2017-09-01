import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

// import Layout from './components/Layout.js';
import Home from './components/Home.js';
import Berries from './components/Berries.js';
import Items from './components/Items.js';
import Pokemon from './components/Pokemon.js';
import NavBar from './components/Nav.js';
//
// <NavLink
//   activeStyle={{
//     color: "blue",
//     backgroundColor: "white"
//   }}>Main Page</NavLink>

ReactDOM.render(
  <BrowserRouter>
    <NavBar>
      <Switch>
        <Route path="/Berries" component={Berries}/>
        <Route path="/Items" component={Items}/>
        <Route path="/Pokemon" component={Pokemon}/>
        <Route path="/Home" component={Home}/>
      </Switch>
    </NavBar>
  </BrowserRouter>
,document.getElementById('root'));
registerServiceWorker();
