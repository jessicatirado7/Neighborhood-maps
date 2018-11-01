import React, { Component } from 'react';
import './App.css';
import Map from './components/map.js'
import  PlaceMarker  from './components/marker.js'

class App extends Component {
  render() {
    const location = {
      lat: 44.986656,
      lng: -93.258133
    }

    const markers = [
      {
        location: {
          lat: 44.986656,
          lng: -93.258133
        }
      }
    ]

    return (
      <div className="App">
        <div>
          <h1> Parks in Minneapolis, MN</h1>
        </div>
        <Map center={location} markers={markers}/>
        <PlaceMarker />
      </div>
    );
  }
}

export default App;
