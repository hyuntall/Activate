import React, {Component} from "react";
import { Map, GoogleApiWrapper} from 'google-maps-react';//npm install google-maps-react --save 해야함


class MapAPI extends Component {
  render() {
    const mapStyles = {
      width: '100%',
      height: '50%',
    };
    return (
      <div className = 'MapAPI'>
        <Map
          google={this.props.google}
          zoom={18}
          style={mapStyles}
          initialCenter={{ lat: 37.5, lng: 127 }}
        >
        </Map>
        </div>
    );
  }
}
 
  export default GoogleApiWrapper({
    apiKey: 'AIzaSyB6z6NHf1CXd_RBHy9WguACHcyfEQ0fKPY'
  })(MapAPI);