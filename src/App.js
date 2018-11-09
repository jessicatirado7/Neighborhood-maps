import React, { Component } from 'react';
import './App.css';
import Map from './components/map.js'
import  Sidebar from './components/sidebar.js'

class App extends Component {
  state = {
    open: false,
    places: []
  }

  styles = {
    menuButton: {
      marginLeft: 10,
      marginRight: 20,
      position: "absolute",
      left: 20,
      background: "white",
      padding: 10
    },
    hide: {
      display: 'none'
    },
    header: {
      marginTop:'0px'
    }
  };

  toggleDrawer = () => {
    this.setState({
      open: !this.state.open
    });
  }

  render() {
    return (
      <div className="App">
        <div>
          <button onClick={this.toggleDrawer} style={this.styles.menuButton}>
            <i className="fa fa-bars"></i>
          </button>
          <h1> Outdoor Venues in Minneapolis, MN</h1>
        </div>
        <Sidebar
          places={this.state.places}
          open={this.state.open}
          toggleDrawer={this.toggleDrawer}
        />
        <Map
          places = {this.state.places}/>
      </div>
    );
  }
}

export default App;
