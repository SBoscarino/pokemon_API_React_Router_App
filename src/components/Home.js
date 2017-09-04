import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles/home.css';

class Home extends Component {
render(){
  return(
    <div className="home-section">
      <h1>Home</h1>
      <span><h2>Click an item to get started!</h2></span>
      <div className="ooocolors"></div>
      <div className='home-flex'>
        <div>
          <Link to="/Berries"><img alt="link to berries page" src='https://pro-rankedboost.netdna-ssl.com/wp-content/uploads/2016/08/Pokemon-Go-Razz-Berry.png'/></Link>
          </div>
        <div><Link to="/Items"><img alt="link to items page" src='https://vignette4.wikia.nocookie.net/pokemongo/images/4/47/Unconfirmed_Item_Honey.png/revision/latest?cb=20160810182921'/></Link></div>
        <div><Link to="/Pokemon"><img alt="link to pokemon page" src='http://1.bp.blogspot.com/-tcE6PvyeZzk/UNlefchLwoI/AAAAAAAAAv4/_DE-eDUTSwU/s1600/venusaur_by_clairc_artstuff-d5hh0k0.png'/></Link></div>
      </div>
      <div className="ooocolors"></div>
      <div>Data is from <a href='https://pokeapi.co/'>PokeApi</a>.</div>
    </div>
  )
}
}
export default Home;
