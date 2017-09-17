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
  console.log('handleSubmit is happening!!');
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
    return ( <div>
        <form onSubmit={this.handleSubmit}>
          <h1>Search for a Pokemon:</h1>
          <textarea value={this.state.value} onChange={this.handleChange}></textarea>
          <input type="submit" value="Submit" />
        </form>
          <div>
            <div className="sprite">
              <img  src={this.state.pokemonData.sprites.front_default}/>
            </div>
            <div className="info">
            <h1>{this.state.pokemonData.name}</h1>
            <p>Pokedex Number: {this.state.pokemonData.order}</p>
            <p>Height: {this.state.pokemonData.height}</p>
            <p>Weight: {this.state.pokemonData.weight}</p>
            <p>Base Experience:{this.state.pokemonData.base_experience}</p>
            <p>Type:{this.state.pokemonData.types[1]}, {this.state.pokemonData.types[2]}</p>
            </div>
          </div>
      </div>
    )
  }
}
export default Pokemon;
