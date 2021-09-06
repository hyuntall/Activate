import React, {Component} from "react";
import { InfoWindow, Map, Marker, GoogleApiWrapper} from "google-maps-react";
import axios from "axios";
import ScrollBox from "./ScrollBox.js";
import PopupContent from "./PopupContent.js";
export class MapAPI extends Component {
  closePopup = this.closePop.bind(this)
  state = {
    activeMarker: {},
    selectedPlace: {},
    showingInfoWindow: false,
    apiData: null,
    danger: false,
    dangerTime: null,
    recentLocation: { lat: 37.5, lng: 127 }
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

    componentWillMount(){ //Map 컴포넌트가 render 되기 전에 먼저 API 데이터 불러옴
      this.getAPI();
    }

    getAPI = async () => { // API 데이터를 불러오는 함수
      try {
        const response = await axios.get(//api로부터 get 요청
            'https://3lonbz1xr9.execute-api.ap-northeast-2.amazonaws.com/get/act1'
        );
        //console.log(response.data)
        this.setState({apiData: response.data}); //받아온 데이터를 state 내의 apiData로 설정
        this.state.apiData && this.state.apiData.map((recentData) =>{
          this.state.recentLocation = { lat: recentData['latitude'], lng: recentData['longitude']}
          if(recentData['danger'] == '1'){
            this.setState({danger: true})
            this.setState({dangerTime: recentData['timestamp']})
          }else{
            this.setState({danger: false})
          }
        });
      } catch (e) {
        console.log(e);
      }
    };

    a = setInterval(() => { //일단 이름은 대충 a 라 지었고, 10초 주기로 getAPI 함수를 호출
      this.getAPI();
      //console.log(this.state.danger)
      //alert("ㅎㅇ")
    }, 10000);
    
    closePop(){
      this.setState({danger: false})
      const data = {"date": "X", "timestamp": this.state.dangerTime}
      console.log(data)
      const g = axios.put('https://3lonbz1xr9.execute-api.ap-northeast-2.amazonaws.com/update/act1',
      data);
      console.log(g)
    }
  render() {
    //const {apiData} = this.props; // GetData 컴포넌트의 리턴값인 apiData를 props로 받음 apiData는 배열 형식임
    //console.log(this.state.apiData)
    const display = this.state.apiData && this.state.apiData.map((item) => 
    <Marker 
      phoneNumber = {item["phoneNumber"]}
      age = {item["birthDay"]}
      danger = {item["danger"]}
      onClick={this.onMarkerClick}
      key={item["timestamp"]} width='60px'
      icon={{ url: require(item['danger']=='0'? "./orange.png":"./red.png").default,
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
      height: '70%',
    };
    //구글맵 태그 사이에 display 함수 넣어줌
    return (
      <div className='MapAPI'>
        <Map

          onClick={this.onMapClicked}
          google={this.props.google}
          style={mapStyles}
          initialCenter={this.state.recentLocation}
          center={this.state.recentLocation}
          zoom={15}

        >
          {display}

          <InfoWindow
            marker={this.state.activeMarker}
            onClose={this.onInfoWindowClose}
            visible={this.state.showingInfoWindow}
          >
             <div style={divstyle}>
              <p>휴대폰 번호 : 
              {this.state.selectedPlace.phoneNumber}</p>
              <br></br>
              <p>나이 : {this.state.selectedPlace.age}</p>
              <p>위험신호 유무  : {this.state.selectedPlace.danger}</p>
            </div>
          </InfoWindow>
        </Map>
        <ScrollBox data={this.state.apiData}/>
        {this.state.danger&&<PopupContent onClose={this.closePopup}/>}
      </div>
    );
  }
}
 
  export default GoogleApiWrapper({
    apiKey: 'AIzaSyB6z6NHf1CXd_RBHy9WguACHcyfEQ0fKPY'
  })(MapAPI);