import React, { Component } from 'react';
import './styles/items.css';

class Items extends Component {
constructor(){
  super();

  this.state = {
    data: [],
    oneItem: [],
    name: '',
    cost: '',
    fling_power: '',
    category: '',
    short_effect: '',
    flavor_text: '',
    sprite: ''


  }
}

  fetch('http://pokeapi.co/api/v2/item/?limit=2&offset=' + 6)
    .then(results => {
      return results.json();
    }).then(data => {
      this.setState({data: data.results});
    })
}


getItemDetail(item){
  console.log('clicking some items',item);
  fetch('http://pokeapi.co/api/v2/item/' + item.name)
  .then(results => {
    return results.json();
  }).then(item => {
    console.log('data in getItemDetail', item);
    this.setState({oneItem: item});
  })
}


render(){
  console.log("IN RENDER: oneItem", this.state.oneItem)
  console.log("IN RENDER: data", this.state.data)
  let oneItemInfo;
  if (this.state.oneItem.effect_entries.length > 0) {
    oneItemInfo = <div className="popupinfo">
    <h2>Here's info on the item you chose:</h2>
    <div>
          <p> <b>{this.state.oneItem.name}</b></p>
          <p>Cost: {this.state.oneItem.cost}</p>
          <p>Pomemon Move "Fling" Power: {this.state.oneItem.fling_power}</p>
          <p>Item Category: {this.state.oneItem.category.name}</p>
          <p>Item Effect: {this.state.oneItem.effect_entries.short_effect}</p>
          <p>Flavor Text{this.state.oneItem.flavor_text_entries.text}</p>
            <div>
              <img src={this.state.oneItem.sprites.default}/>
            </div>
      </div>
      </div>
  } else {
    oneItemInfo = <p>Click on an item to have a closer look!</p>
  }

  console.log('state in render',this.state.oneBerry);
  const berry = this.state.oneBerry;
  console.log('berry', berry);
  console.log('length',berry.length);
  return(
    <div className="berries-section">
      <h1>Berries</h1>
      <div className="berriesflex">
        <div className="listofberries">
        <h2>Click a berry to learn more!</h2>
         {this.state.data.map((berry, i) => {
          return (
            <li key={i} onClick={() => this.getBerryDetail(berry)}>{berry.name}</li>
          )
        })}
        </div>
      {oneBerryInfo}
      </div>
    </div>
  )
}
}
export default Items;
