import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, } from 'react-google-maps';
import  PlaceMarker  from './marker.js'

const google = window.google;

const GoogleMaps = withScriptjs(withGoogleMap(props => (
  <GoogleMap
    onTilesLoaded={props.fetchPlaces}
    ref={props.onMapMounted}
    onBoundsChanged={props.fetchPlaces}
    defaultCenter={props.center}
    defaultZoom={props.zoom} >

    {props.places && props.places.map((place, i) =>
        <PlaceMarker
          key={i}
          position={{
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng()
          }} />
    )}
  </GoogleMap>
)));

class Map extends Component {

  componentWillMount() {
    const refs = {}

      this.setState({
        bounds: null,
        center: {
          lat: 44.986656,
          lng: -93.258133
        },
        places:[],
        onMapMounted: ref => {
          refs.map = ref;
        },
        fetchPlaces:() => {
           const bounds = refs.map.getBounds();
           const service = new google.maps.places.PlacesService(refs.map.context.MAP);
           const request = {
               bounds: bounds,
               type: ['park']
           };
           service.nearbySearch(request, (results, status) => {
             if (status === google.maps.places.PlacesServiceStatus.OK) {
               console.log(results);
             }
           })
         }
       })
    }

  render(){

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

              zoom={13}

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
