import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles/home.css';

class Home extends Component {
render(){
  return(
    <div className="home-section">
      <h1>Home</h1>
      <div className="ooocolors"></div>
      <img className="vaporeon" alt="vaporeon" src='https://pokethrift.com/wp-content/uploads/2016/08/vaporeon_vector_by_pokemon_vector_art-da4o268-1024x779.png'></img>
      <div className="ooocolors">
      <p>Data is from <a href='https://pokeapi.co/'>PokeApi</a>.</p>
      </div>
    </div>
  )
}
}
export default Home;
