import React, {Component} from "react";
import { Map, GoogleApiWrapper, Marker} from 'google-maps-react';//npm install google-maps-react --save 해야함



class MapAPI extends Component {
  render() {
    const {apiData} = this.props; // GetData 컴포넌트의 리턴값인 apiData를 props로 받음 apiData는 배열 형식임
    const display = apiData && apiData.map((item) => <Marker position={{lat : parseFloat(item['latitude']), lng: parseFloat(item['longitude'])}}/>);
    //display함수
    // apiData의 요소 하나하나 반복, 각각의 위치값만 가져와서 Marker 생성

    const mapStyles = {
      width: '100%',
      height: '50%',
    };

    //구글맵 태그 사이에 display 함수 넣어줌
    return (
      <div className = 'MapAPI'>
        <Map
          google={this.props.google}
          zoom={18}
          style={mapStyles}
          initialCenter={{ lat: 37.5, lng: 127 }}
        >
        {display}
        </Map>
        </div>
    );
  }
}
 
  export default GoogleApiWrapper({
    apiKey: 'AIzaSyB6z6NHf1CXd_RBHy9WguACHcyfEQ0fKPY'
  })(MapAPI);