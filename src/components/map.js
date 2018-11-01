import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, } from 'react-google-maps';
//import  PlaceMarker  from './marker.js'

//const google = window.google;

const GoogleMaps = withScriptjs(withGoogleMap(props => (
  <GoogleMap
    defaultCenter={props.center}
    defaultZoom={props.zoom} >

  </GoogleMap>
)));

class Map extends Component {
  constructor(props) {
    super(props)

    this.zoom = 13

    this.state = {
      lat: 44.986656,
      lng: -93.258133
    }
  }

  componentDidMount() {
    fetch('https://api.foursquare.com/v2/venues/explore?near=Minneapolis&client_id=OXBDHJTAQEW2GZ2HILCTVWROC0PSQYPZPQGVQURTO5HRUGXY&client_secret=H5ZL5RVF12D5VAZCW2PUEUFE3UCZLTH044MJCO2V1PQZHK5A&v=20180323&limit=1&5=40.7243,-74.0018&query=outdoors',
      {
        method:"GET"
      }
    )
    .then(function() {
        // Code for handling API response
    })
    .catch(function() {
        // Code for handling errors
    });
  }

  render(){

      const {lat, lng} = this.state;

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

              center = {{
                lat: lat,
                lng: lng
              }}

              zoom={this.zoom}

              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDQx0zrGHKCqC5PpgVCNP8dQCBB5v_-VFM&libraries=places"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={ <div style={{ width: '100%', marginLeft: 0 }} /> }
              mapElement={ <div style={{ height: `100%` }} /> }
            />
          </div>
        );
    }
};
export default Map;
