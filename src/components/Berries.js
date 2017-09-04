import React, { Component } from 'react';
import './styles/berries.css';

class Berries extends Component {
constructor(){
  super();

  this.state = {
    data: [],
    oneBerry: {flavors: []},
    id: '',
    growth_time: '',
    max_harvest: '',
    flavor: ''
  }
}

componentDidMount(){
  //get two berries at random.
// function getRandomNumber() {
//   num = Math.floor(Math.random() * (60 - 0 + 1)) + 0;
//     return num;
//   }
//   console.log('num',num);
  fetch('http://pokeapi.co/api/v2/berry/?limit=10&offset=' + 6)
    .then(results => {
      return results.json();
    }).then(data => {
      // console.log('data array in mount',data);
      this.setState({data: data.results});
    })
}


getBerryDetail(berry){
  console.log('clicking some berries',berry);
  fetch('http://pokeapi.co/api/v2/berry/' + berry.name)
  .then(results => {
    return results.json();
  }).then(berry => {
    console.log('data in getberrydetail', berry);
    this.setState({oneBerry: berry});
  })
}


render(){
  console.log("IN RENDER: oneBerry", this.state.oneBerry)
  console.log("IN RENDER: data", this.state.data)
  let oneBerryInfo;
  if (this.state.oneBerry.flavors.length > 0) {
    oneBerryInfo = <div className="popupinfo">
    <h2>Here's info on the berry you chose:</h2>
    <div>
          <p> <b>{this.state.oneBerry.name} berry</b></p>
          <p>Growth Time: {this.state.oneBerry.growth_time}</p>
          <p>Maximum Harvest Amount: {this.state.oneBerry.max_harvest}</p>
          <p>Berry Smoothness: {this.state.oneBerry.smoothness}</p>
          <p>Berry Size: {this.state.oneBerry.size}</p>
          <p>Berry Natural Gift Move Power: {this.state.oneBerry.natural_gift_power}</p>
            <p>Firmness Level:  {this.state.oneBerry.firmness.name}</p>
      </div>
      </div>
  } else {
    oneBerryInfo = <p>Click a berry to have a look!</p>
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
export default Berries;
