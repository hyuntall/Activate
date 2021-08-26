import React, {Component} from "react";
import { InfoWindow, Map, Marker, GoogleApiWrapper} from "google-maps-react";

export class MapAPI extends Component {
  state = {
    activeMarker: {},
    selectedPlace: {},
    showingInfoWindow: false
  };
  
  onMarkerClick = (props, marker) =>
    this.setState({
      activeMarker: marker,
      selectedPlace: props,
      showingInfoWindow: true
    });
  
  onInfoWindowClose = () =>
    this.setState({
      activeMarker: null,
      showingInfoWindow: false
    });
    onMapClicked = () => {
      if (this.state.showingInfoWindow)
        this.setState({
          activeMarker: null,
          showingInfoWindow: false
        });
    };

  render() {
    const {apiData} = this.props; // GetData 컴포넌트의 리턴값인 apiData를 props로 받음 apiData는 배열 형식임
    const display = apiData && apiData.map((item) => 

    <Marker 
    name = "warning place"
    onClick={this.onMarkerClick}
    key={item["timestamp"]} width='60px'
    icon={{ url: require("./장희선.png").default,
     scaledSize: new window.google.maps.Size(30, 30) }}
    position={{lat : parseFloat(item['latitude']), 
    lng: parseFloat(item['longitude'])}}/>
    );
    //display함수 //일단 고유 키는 대충 아무거나 집어 넣었음
    // apiData의 요소 하나하나 반복, 각각의 위치값만 가져와서 Marker 생성

    const divstyle={
      fontSize : 14,
      color : "#4a54f1"
    }

    const mapStyles = {
      width: '100%',
      height: '50%',
    };
   
    //구글맵 태그 사이에 display 함수 넣어줌
    return (
      <div className='MapAPI'>
        <Map

          onClick={this.onMapClicked}
          google={this.props.google}
          style={mapStyles}
          initialCenter={{ lat: 37.5, lng: 127 }}
          zoom={15}

        >
          {display}

          <InfoWindow
            marker={this.state.activeMarker}
            onClose={this.onInfoWindowClose}
            visible={this.state.showingInfoWindow}
          >
            <div style={divstyle}>
              {this.state.selectedPlace.name}
            </div>
          </InfoWindow>
        </Map>
          
      </div>
    );
  }
}
 
  export default GoogleApiWrapper({
    apiKey: 'AIzaSyB6z6NHf1CXd_RBHy9WguACHcyfEQ0fKPY'
  })(MapAPI);