import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles/home.css';

class Home extends Component {
render(){
  return(
    <div className="home-section">
      <h1>Home</h1>
      <div className="ooocolors"></div>
      <div className="ooocolors"></div>
      <div>Data is from <a href='https://pokeapi.co/'>PokeApi</a>.</div>
    </div>
  )
}
}
export default Home;
