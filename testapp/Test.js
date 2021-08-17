import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { Alert } from "react-native";
import * as Location from 'expo-location';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';


export default function Main(props) {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const url = 'https://3lonbz1xr9.execute-api.ap-northeast-2.amazonaws.com/post/act1'
  const { navigation } = props;
  const phoneNumber = navigation.getParam("phoneNumber");
  // activate_1 dynamoDB로 데이터를 보내기 위한 api

  useEffect(() => { // 처음 실행됐을 때
    (async () => {
      // 위치정보 권한을 요청한다.
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
      console.log(phoneNumber);
      // 현재 위치를 받아온다.
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      setLatitude(String(location['coords']['latitude']));
      setLongitude(String(location['coords']['longitude']));
    })();
  }, []);

  //추가로 현재 위치를 받아오는 함수
  const getLocation = async () => {
  
    try {
      // 현재 위치 정보를 받아온다.
      const location = await Location.getCurrentPositionAsync();
      setLocation(location)
      //dynamoDB에 위치정보를 문자열로 받기로 설정해놨기 때문에 문자열로 변환
      // 숫자값으로 바꿀지 고민중...
      setLatitude(String(location['coords']['latitude']));
      setLongitude(String(location['coords']['longitude']));
      //현재 위치를 dynamoDB로 전송하는 함수 실행
      postData();
    } catch (e) {
      Alert.alert("위치정보를 가져올 수 없습니다.");
    }
    
  };
  // dynamoDB로 데이터를 전송하는 함수
  const postData = async () => {
    //전송할 데이터, 휴대폰번호, 나이, 성별 등은 로그인하면 바뀔수 있게 나중에 변수로 설정하자.
    const data = {
      "phoneNumber": "01093532680",
      "age": "24",
      "gender": "M",
      "latitude": latitude,
      "longitude": longitude,
    }
    try{
      //api에 post 요청.(데이터 전송한다는 의미)
      const response = await axios.post(url, data);
    } catch (e){
      console.log(e);
    }
  }

  let text = '현재 위치정보';
  if (errorMsg) { // 이거 지울까말까 고민중
    text = errorMsg;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{text}</Text>
      <Text style={styles.paragraph}>{latitude}</Text>
      <Text style={styles.paragraph}>{longitude}</Text>
      <Text style={styles.paragraph}>{phoneNumber}</Text>
      <Text style={styles.paragraph}>나이 : {props.age}</Text>
      <Text style={styles.paragraph}>성별 : {props.gender}</Text>
      <TouchableOpacity avtiveOpacity={0.8} style={styles.button} onPress={getLocation} >
        <Text style={styles.buttonText}>위치 정보 전송</Text>
      </TouchableOpacity>
    </View>
  );
}


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
    backgroundColor: "#123abc",
    borderRadius: 4.5,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 30,
  }
});