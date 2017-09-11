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
  let PokeLoader;
  if (this.state.pokemonData.length === 0) {
    PokeLoader = <div className="LoaderPokeball"><img src='https://upload.wikimedia.org/wikipedia/en/3/39/Pokeball.PNG'></img></div>
  }
  console.log('state in render',this.state);
  return(
    <div className="pokemon-section">
      <h1>Pokemon</h1>
      <div>
      {PokeLoader}
      {this.state.pokemonData.map((pokemon, i) => {
        return (
          <div key={i}>{pokemon.name}</div>
        )
      })}
      </div>
    </div>
  )
}
}
export default Pokemon;
