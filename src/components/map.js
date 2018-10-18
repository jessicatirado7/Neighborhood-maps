import React, { Component } from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';

class Map extends Component {
  render(){
    const GoogleMaps = withGoogleMap(props => (
      <GoogleMap
        defaultCenter = { { lat: 44.986656, lng: -93.258133 } }
        defaultZoom = { 13 }
      >
      </GoogleMap>
   ));
    return(
      <div>
        <GoogleMaps
          containerElement={ <div style={{ height: '100vh', width: '100vh' }} /> }
          mapElement={ <div style={{ height: `100%` }} /> }
        />
      </div>
    );
  }
};
export default Map;
