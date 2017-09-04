import React, { Component } from 'react';

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
  fetch('http://pokeapi.co/api/v2/berry/?limit=1&offset=' + 6)
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
  let oneBerryInfo;
  if (this.state.oneBerry.flavors.length > 0) {
    oneBerryInfo = <div>
      {this.state.data.map((berry, i) => {
      return <div>
          <p>Growth Time:</p>
          <div>{berry.growth_time}</div>
          <p>Maximum Harvest Amount:</p>
          <div>{berry.max_harvest}</div>
          <p>Berry Smoothness:</p>
          <div>{berry.smoothness}</div>
          <p>Berry Size:</p>
          <div>{berry.size}</div>
        </div>
    })}
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
        <div>
         {this.state.data.map((berry, i) => {
          return (
            <li key={i} onClick={() => this.getBerryDetail(berry)}>{berry.name}</li>
          )
        })}
        </div>
      {oneBerryInfo}
    </div>
  )
}
}
export default Berries;
