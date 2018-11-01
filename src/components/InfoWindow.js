import React, { Component } from 'react'
import { InfoWindow } from 'google-maps-react'

export class ParkInfoWindow extends Component {
  render() {
    const {description, name} = this.props

    return(
      <InfoWindow onCloseClick={this.props.closeWindow}>
        <div>
          <h1>{name}</h1>
          <p>{description}</p>
        </div>
      </InfoWindow>
    );
  }
}

export default ParkInfoWindow
