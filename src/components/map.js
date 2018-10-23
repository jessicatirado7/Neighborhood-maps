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
      <div style={{ height: '100vh',
        width: '100%',
        display: 'flex',
        flexFlow: 'row nowrap',
        justifyContent: 'center',
        padding: 0 }}>

        <GoogleMaps
          containerElement={ <div style={{ width: '100%', marginLeft: 0 }} /> }
          mapElement={ <div style={{ height: `100%` }} /> }
        />
      </div>
    );
  }
};
export default Map;
