import React, { Component } from 'react';
import './App.css';
import Map from './components/map.js'
import  PlaceMarker  from './components/marker.js'

class App extends Component {


  render() {
    return (
      <div className="App">
        <div>
          <h1> Parks in Minneapolis, MN</h1>
        </div>
        <Map />
        <PlaceMarker />
      </div>
    );
  }
}

export default App;
