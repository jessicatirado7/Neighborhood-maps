import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, InfoWindow} from 'react-google-maps';
//import  PlaceMarker  from './marker.js'
import axios from 'axios'

//const google = window.google;

const GoogleMaps = withScriptjs(withGoogleMap(props => (
  <GoogleMap
    defaultCenter={{lat: 44.986656, lng: -93.258133}}
    defaultZoom={13} >
  </GoogleMap>
)));

class Map extends Component {
  state = {
    places:[],
    map: null,
    markers:[],
    markerProps:[],
    activeMarker: null,
    activeMarkerProps: null,
    showingInfoWindow: false,
  };

  componentDidMount() {
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

  mapReady = (props, map) => {
    this.SetState({map});
  }

  closeWindow = () => {
    this.state.activeMarker && this
      .state
      .activeMarker
      .setAnimation(null);
    this.SetState({showingInfoWindow: false, activeMarker: null, activeMarkerProps: null});

  }

  onMarkerClick = (props, marker, e) => {
    this.closeInfoWindow();

    this.setState({showingInfoWindow:true, activeMarker: marker, activeMarkerProps:props});
  }


  render(){

      const center = {
        lat: this.props.lat,
        lng: this.props.lng
      }

      return(

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
              mapElement={ <div style={{ height: `100%` }} /> } >


            </GoogleMaps>
          </div>
        );
    }
};
export default Map;
