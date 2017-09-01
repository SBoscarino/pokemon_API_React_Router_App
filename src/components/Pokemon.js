import React, { Component } from 'react';

class Pokemon extends Component {
constructor(){
  super();

  this.state = {
    pokemonData: [],
  }
}

componentDidMount(){
  fetch('http://pokeapi.co/api/v2/pokemon/?limit=1&offset=2')
    .then(results => {
      return results.json();
    }).then(data => {
      console.log('data array in mount',data);
      this.setState({pokemonData: data.results});
    })
}





render(){
  console.log('state in render',this.state);
  return(
    <div className="pokemon-section">
      <h1>Berries</h1>
      <div>
      {this.state.pokemonData.map((pokemon, i) => {
        return (
          <li key={i}>{pokemon.name}</li>
        )
      })}
      </div>
    </div>
  )
}
}
export default Pokemon;
