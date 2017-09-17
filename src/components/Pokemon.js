import React, { Component } from 'react';
import './styles/pokemon.css';

class Pokemon extends Component {
constructor(){
  super();

  this.state = {
    pokemonData: [],
    value: '',
    name: '',
    weight: '',
    height: '',
    order: '',
    base_experience: '',
    types: []
  }
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
}

handleChange(event) {
  // console.log('handleChange', event.target.value)
  this.setState({value: event.target.value});
}

handleSubmit(event) {
  console.log('Pokemon name submitted!!');
  fetch('http://pokeapi.co/api/v2/pokemon/' + this.state.value)
  .then(results => {
    return results.json();
  }).then(pokemon => {
    console.log('data in handleSubmit:', pokemon);
    this.setState({pokemonData: pokemon});
 });
 event.preventDefault();
 }

  render(){
    let PokemonPopUp;
    if (this.state.pokemonData.name) {
      let PokemonPopUp = <div>
          <div className="sprite">
            <img src='{this.props.pokemonData.sprites[front_default]}'/>
          </div>
          <div className="info">
          <h1>{this.state.pokemonData.name}</h1>
          <p>Pokedex Number: {this.state.pokemonData.order}</p>
          <p>Height: {this.state.pokemonData.height}</p>
          <p>Weight: {this.state.pokemonData.weight}</p>
          <p>Base Experience:{this.state.pokemonData.base_experience}</p>
          </div>
        </div>
    } else {
      PokemonPopUp = <p>Search for a Pokemon to learn something new! Example: pikachu</p>
    }
  return (
    <div>
      <form onSubmit={this.handleSubmit}>
        <h1>Search for a Pokemon:</h1>
        <input type="text" value={this.state.value} onChange={this.handleChange}/>
        <input type="submit" value="Submit" />
      </form>
      {PokemonPopUp}
    </div>
    )
  }
}
export default Pokemon;
