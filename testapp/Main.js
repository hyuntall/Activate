import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { Alert } from "react-native";
import * as Location from 'expo-location';
import axios from 'axios';
import { DeviceMotion } from 'expo-sensors';
import UserData from './UserData'
import { Image } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import Toggle from './Toggle.js';

export default class Main extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      latitude: null, 
      longitude: null, 
      danger: "0", 
      buttonAble: true,
      signalMode: false,
    };
  }
  url = 'https://3lonbz1xr9.execute-api.ap-northeast-2.amazonaws.com/post/act1'

  async componentDidMount() { //컴포넌트가 시작되면 안에 함수를 호출한다는 뜻
    let { motion } = await DeviceMotion.isAvailableAsync()
    //디바이스 모션 사용 권한 받아온다.
    //  if (motion !== 'granted'){
    //    setErrorMsg('motion detection was denied');
    //  }
    let { status } = await Location.requestForegroundPermissionsAsync();
    //위치 권한 받아온다.
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
    this.setState({text: "위치 정보 받아오는 중..."});
    let location = await Location.getCurrentPositionAsync({});
    //위치 정보 받아온다.
    this.setState({latitude: String(location['coords']['latitude']), 
    longitude: String(location['coords']['longitude'])});
    //받아온 위치 정보 새로 세팅
    this.setState({text: "성공!", buttonAble: false});
  }

  async getLocation(){ // setinterval사용하여 주기적으로 위치 정보 얻어오도록 수정할 계획.
    try {
      // 현재 위치 정보를 받아온다.
      let location = await Location.getCurrentPositionAsync();
      //dynamoDB에 위치정보를 문자열로 받기로 설정해놨기 때문에 문자열로 변환
      // 숫자값으로 바꿀지 고민중...
      this.setState({latitude: String(location['coords']['latitude']), 
      longitude: String(location['coords']['longitude'])});
      //현재 위치를 dynamoDB로 전송하는 함수 실행
      console.log(this.state);
      return 1;
    } catch (e) {
      Alert.alert("위치정보를 가져올 수 없습니다.");
      return -1
    }
  };

  // dynamoDB로 데이터를 전송하는 함수
  async signalMode(phoneNumber){
    this.setState({signalMode : true})
    let data ={
      "phoneNumber": UserData.phoneNumber,
      "name": UserData.name,
        "birthDay": UserData.birthDay,
        "gender": UserData.gender,
        "latitude": this.state.latitude,
        "longitude": this.state.longitude,
        "danger": this.state.danger
    }
    console.log("엥", data)
    this.setState({text: "위치 정보 받아오는 중..."});
    if(this.getLocation()){ //getLocation함수에서 성공적으로 위치 정보를 받아 왔다면
      //전송할 데이터, 휴대폰번호, 나이, 성별 등은 로그인하면 바뀔수 있게 나중에 변수로 설정하자.
      //data.latitude = this.state.latitude;
      //data.longitude = this.state.longitude;
      try{
        this.setState({text: "데이터 전송하는 중..."});
        //api에 post 요청.(데이터 전송한다는 의미)
        const response = await axios.post(this.url, data);
        console.log(response)
        this.setState({text: "불안모드 활성화!"});
      } catch (e){
        alert("데이터를 전송할 수 없습니다.");
        console.log(e);
      }
    }else{
      this.setState({text: "위치 정보 받기 실패"});
    }
    DeviceMotion.addListener((listener) => {
      if(listener.acceleration.z > 20){
        console.log("z축 흔들림 감지!");
        this.setState({danger: "1", text: "충격감지!"});
        data['danger'] = this.state.danger
        //this.data.danger = this.state.danger;
        this.timeout = setTimeout(() =>{
          console.log(data)
          this.postDanger(data);
          }, 10000);
        Alert.alert(
          "충격감지",
          "10초 후 신호를 전송합니다.",
          [
            {
              text: "즉시 보내기", 
              onPress: () => {clearTimeout(this.timeout), this.postDanger(data)}
            },
            {
              text: "취소",
              onPress: () => {clearTimeout(this.timeout),
                this.setState({danger: "0", text: "충격 감지중"})}
            }
          ]
        )
      }
    })
    
    
  }

  postDanger(data){
        console.log("data", data);
        const response2 = axios.post(this.url, data);
        console.log(response2);
  }

  removeSignal(){
    this.setState({signalMode : false})
    DeviceMotion.removeAllListeners();
    this.setState({danger: "0", text: "일반모드"});
  }

  render(){
    return (
      <View style={styles.container}>
        <Image source={require('./assets/siren.png')}/>
      <View style={styles.title}>
        <Text>{this.state.text}</Text>
      </View>
      <TouchableOpacity avtiveOpacity={0.8} style={styles.button} onPress={() => this.state.signalMode == false ? this.signalMode(UserData.phoneNumber) : this.removeSignal()} disabled={this.state.buttonAble}>
        <Text style={styles.buttonText}>{this.state.signalMode == false ? "불안모드" : "신호중지"}</Text>
      </TouchableOpacity>
      <Entypo name="back" size={60} color="black" onPress={() => this.props.navigation.navigate('Category')}/>
    </View>
    
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 50,
    color: 'blue'
  },
  paragraph: {
    fontSize: 30,
    color: 'black'
  },
  button: {
    width: 200,
    height: 80,
    backgroundColor: "#FFFF6C",
    borderRadius: 4.5,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 30,
  }
});