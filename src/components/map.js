import React, { Component } from 'react';
import {withGoogleMap, GoogleMap, } from 'react-google-maps';
import  PlaceMarker  from './marker.js'

const GoogleMaps = withGoogleMap(props => (
  <GoogleMap
    defaultCenter = {props.center}
    defaultZoom = {props.zoom}
  >
  {props.places}
  </GoogleMap>
));

class Map extends Component {
  constructor(props) {
    super(props)

    this.zoom = 13

    this.state = {
      lat: 44.986656,
      lng: -93.258133
    };
  }
  render(){
    const {lat, lng} = this.state;
    const places = [<PlaceMarker lat={lat} lng={lng} name={"Park"} description={"Park desc"}/>]

  return(
    <div style={{ height: '100vh',
      width: '100%',
      display: 'flex',
      flexFlow: 'row nowrap',
      justifyContent: 'center',
      padding: 0 }}>

        <GoogleMaps
          center = {{ lat: lat, lng: lng}}
          zoom = {this.zoom}
          places={places}
          containerElement={ <div style={{ width: '100%', marginLeft: 0 }} /> }
          mapElement={ <div style={{ height: `100%` }} /> }
        />
      </div>
    );
  }
};
export default Map;
