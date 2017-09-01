import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
render(){
  return(
    <div className="home-section">
      <h1>Home</h1>
      <hr/>
        <Link to="/Berries"><img src='https://pro-rankedboost.netdna-ssl.com/wp-content/uploads/2016/08/Pokemon-Go-Razz-Berry.png'/></Link>
        <Link to="/Items"><img src='https://vignette4.wikia.nocookie.net/pokemongo/images/4/47/Unconfirmed_Item_Honey.png/revision/latest?cb=20160810182921'/></Link>
        <Link to="/Pokemon"><img src='http://1.bp.blogspot.com/-tcE6PvyeZzk/UNlefchLwoI/AAAAAAAAAv4/_DE-eDUTSwU/s1600/venusaur_by_clairc_artstuff-d5hh0k0.png'/></Link>
    </div>
  )
}
}
export default Home;
