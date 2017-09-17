import React, { Component } from 'react';

function pokemonInformation(props) {
  console.log("props in pokemonInformation", props);
    return (
      <div>
        <div className="sprite">
          <img src={this.props.pokemonData.sprites.front_default}/>
        </div>

        <div className="info">
        <h1>{this.props.pokemonData.name}</h1>
        <p>Pokedex Number: {this.props.pokemonData.order}</p>
        <p>Height: {this.props.pokemonData.height}</p>
        <p>Weight: {this.props.pokemonData.weight}</p>
        <p>Base Experience:{this.props.pokemonData.base_experience}</p>
        <p>Type:{this.props.pokemonData.types[1]}, {this.props.pokemonData.types[2]}</p>
        </div>
      </div>
    )
  }
}
export default pokemonInformation;
