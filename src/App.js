import React, { Component } from 'react';
import './App.css';
import { withScriptjs, withGoogleMap, GoogleMap, InfoWindow, Marker} from 'react-google-maps';
import axios from 'axios'
import  Sidebar from './components/sidebar.js'

const GoogleMaps = withScriptjs(withGoogleMap(props => (
  <GoogleMap
    defaultCenter={{lat: 44.986656, lng: -93.258133}}
    defaultZoom={13}
  >
    {props.places.map(place => (
       <Marker
         position={{
           lat: place.venue.location.lat,
           lng: place.venue.location.lng
         }}
         key={place.venue.id}
         onClick={() => props.onToggleOpen(place.venue.id)}
        >
          {place.venue.id === props.activeMarkers &&
            <InfoWindow
              tabIndex="0"
              aria-label="Info window" >
              <div tabIndex="1">
                <h4 tabIndex="1">{place.venue.name}</h4>
                <p tabIndex="1">{place.venue.location.formattedAddress}</p>
              </div>
            </InfoWindow>
          }

        </Marker>
     ))}
  </GoogleMap>
)));


class App extends Component {
  state = {
    open: false,
    places: [],
    activeMarkers:"",
    filtered: null
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

  componentDidMount() {
    this.fetchAPI();
    this.setState({
      ...this.state,
      filtered: this.filterPlaces(this.state.places, "")
    })
  }

  toggleDrawer = () => {
    this.setState({
      open: !this.state.open
    });
  }

  onToggleOpen = placeKey => {
    this.setState({
      activeMarkers: placeKey
    })
  }

  fetchAPI = () => {
    const url = 'https://api.foursquare.com/v2/venues/explore?'
    const parameters = {
      client_id: 'OXBDHJTAQEW2GZ2HILCTVWROC0PSQYPZPQGVQURTO5HRUGXY',
      client_secret:'H5ZL5RVF12D5VAZCW2PUEUFE3UCZLTH044MJCO2V1PQZHK5A',
      query:'outdoors',
      near:'Minneapolis',
      v:'20180323',
      limit: '5'
    }

    axios.get(url + new URLSearchParams(parameters))
      .then(response => {
        this.setState({
          places: response.data.response.groups[0].items
        })
      })
      .catch(error => {
          console.log('ERROR!' + error)
      });
  }

  updateQuery = (query) => {
    // Update the query value and filter the list of locations accordingly
    this.setState({
      ...this.state,
      selectedIndex: null,
      filtered: this.filterPlaces(this.state.places, query)
    });
  }

  filterPlaces = (places, query) => {
    // Filter locations to match query string
    return places.filter(place => place.venue.name.toLowerCase().includes(query.toLowerCase()));
  }


  render() {
    const center = {
      lat: this.props.lat,
      lng: this.props.lng
    }

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
          filterPlaces={this.updateQuery}
        />
        <div style={{ height: '100vh',
          width: '100%',
          display: 'flex',
          flexFlow: 'row nowrap',
          justifyContent: 'center',
          padding: 0 }}>

            <GoogleMaps
              role="application"
              aria-label="map"

              google={this.props.google}
              zoom = {this.props.zoom}
              initialCenter={center}


              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDQx0zrGHKCqC5PpgVCNP8dQCBB5v_-VFM&libraries=places"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={ <div style={{ width: '100%', marginLeft: 0 }} /> }
              mapElement={ <div style={{ height: `100%` }} /> }

              places={this.state.places}
              activeMarkers={this.state.activeMarkers}
              onToggleOpen={this.onToggleOpen}
            >
            </GoogleMaps>

          </div>
      </div>
    );
  }
}

export default App;
