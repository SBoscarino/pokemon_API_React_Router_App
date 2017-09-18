import React, { Component } from 'react';
import './styles/pokemon.css';

class Pokemon extends Component {
constructor(){
  super();

  this.state = {
    pokemonData: {game_indices : []},
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
  // console.log('Pokemon name submitted!!');
  fetch('http://pokeapi.co/api/v2/pokemon/' + this.state.value)
  .then(results => {
    return results.json();
  }).then(pokemon => {
    // console.log('data in handleSubmit:', pokemon);
    this.setState({pokemonData: pokemon, value: ''})
 });
 event.preventDefault();
 }

  render(){
    console.log('yo', this.state.pokemonData)
    // console.log('yo', this.state.pokemonData.name)
    let PokemonPopUp;
    if (this.state.pokemonData.game_indices === undefined) {
      PokemonPopUp = <p>You have left the field empty or spelled the Pokemon name incorrectly. Please check and try again.</p>
    }
    else if (this.state.pokemonData.game_indices.length > 0) {
      PokemonPopUp = (
      <div className="pokemon-section">
        <div className="popupinfoTwo">
            <div className="sprite">
            <h2>Sprites</h2>
              <img className="pokemon-sprites" alt="pokemon-front" src={this.state.pokemonData.sprites.front_default}/>
              <img className="pokemon-sprites" alt="pokemon-back" src={this.state.pokemonData.sprites.back_default}/>
            </div>
            <div className="pokemoninfo">
            <h2>Info on {this.state.pokemonData.name}</h2>
              <p>Pokedex Number: {this.state.pokemonData.order}</p>
              <p>Height: {this.state.pokemonData.height}</p>
              <p>Weight: {this.state.pokemonData.weight}</p>
              <p>Base Experience: {this.state.pokemonData.base_experience}</p>
              <ul>Type(s):{this.state.pokemonData.types.map((type, i) => {
                return(
                  <li key={i}>{type.type.name}</li>
                )
              })}</ul>
            </div>
          </div>
        </div>
      )
    } else {
      PokemonPopUp = <p>Search for a Pokemon to learn something new! Example: pikachu</p>
    }
  return (
    <div className="pokemon-topper">
      <form onSubmit={this.handleSubmit}>
        <h1>Search for a Pokemon</h1>
        <input type="text" value={this.state.value} onChange={this.handleChange}/>
        <button type="submit" value="Submit">Submit</button>
      </form>
      {PokemonPopUp}
    </div>
    )
  }
}
export default Pokemon;
