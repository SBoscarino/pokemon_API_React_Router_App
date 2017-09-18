import React, { Component } from 'react';
import './styles/items.css';

class Items extends Component {
constructor(){
  super();

  this.state = {
    data: [],
    oneItem: {attributes : []},
    name: '',
    cost: '',
    fling_power: '',
    category: '',
    short_effect: '',
    flavor_text: '',
    sprite: ''
  }
}
  componentDidMount(){
    fetch('http://pokeapi.co/api/v2/item/?limit=10&offset=' + 11)
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
  // console.log("IN RENDER: oneItem", this.state.oneItem)
  // console.log("IN RENDER: data", this.state.data)
  let oneItemInfo;
  if (this.state.oneItem.attributes.length > 0) {
    oneItemInfo = <div className="popupinfo">
    <h2>Information on the {this.state.oneItem.name}</h2>
    <div>
      <p>Cost: {this.state.oneItem.cost}</p>
      <p>Pomemon Move "Fling" Power: {this.state.oneItem.fling_power}</p>
      <p>Item Category: {this.state.oneItem.category.name}</p>
      <p>Item Effect: {this.state.oneItem.effect_entries[0].short_effect}</p>
      <p>Flavor Text : {this.state.oneItem.flavor_text_entries[1].text}</p>
      <div>
        <img alt="item" className="itemImage" src={this.state.oneItem.sprites.default}/>
      </div>
    </div>
  </div>
  } else {
    oneItemInfo = <p>Click on an item to have a closer look!</p>
  }

  console.log('state in render',this.state.oneItem);
  const item = this.state.oneItem;
  console.log('item', item);
  console.log('length',item.length);
  return(
    <div className="items-section">
      <h1>Items</h1>
      <div className="itemsflex">
        <div className="listofitems">
        <h2>Click an item to learn more!</h2>
         {this.state.data.map((item, i) => {
          return (
            <li key={i} onClick={() => this.getItemDetail(item)}>{item.name}</li>
          )
        })}
        </div>
        {oneItemInfo}
      </div>
    </div>
  )
}
}
export default Items;
