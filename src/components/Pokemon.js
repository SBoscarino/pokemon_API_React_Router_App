import React, { Component } from 'react';
import './styles/pokemon.css';

class Pokemon extends Component {
constructor(){
  super();

  this.state = {
    pokemonData: [],
    value: 'bulbasaur'
  }
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
}

handleChange(event) {
  this.setState({value: event.target.value});
}

handleSubmit(event) {
  fetch('http://pokeapi.co/api/v2/pokemon/' + this.state.value)
  .then(results => {
    return results.json();
  }).then(data => {
    console.log('data in choose a pokemon textarea', data);
    this.setState({pokemonData: data.results});
 });
   event.preventDefault();
 }

componentDidMount(){
  console.log('state in render',this.state);
     fetch('http://pokeapi.co/api/v2/pokemon/' + this.state.value)
     .then(results => {
       return results.json();
     }).then(data => {
       console.log('data in choose a pokemon textarea', data);
       this.setState({pokemonData: data.results});
    });
}



  render(){
    if (this.state.generation > 0 && this.state.type > 0) {
      let PokemonEntryDiv =  <div>
        <p>X</p>
        <div className="sprite"></div>
        <div className="PokemonInfo"></div>
        </div>
    }
    return (
        <form onSubmit={this.handleSubmit}>
          <h1>Search for a Pokemon:</h1>
          <textarea value={this.state.value} onChange={this.handleChange}></textarea>
          <input type="submit" value="Submit" />
        </form>
    )
  }
}
export default Pokemon;
