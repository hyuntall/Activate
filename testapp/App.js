import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Alert } from "react-native";
import * as Location from 'expo-location';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  url = 'https://3lonbz1xr9.execute-api.ap-northeast-2.amazonaws.com/post/act1'

  useEffect(() => { // 처음 실행됐을 때, 위치정보 권한을 얻어온다.
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      //setLocation(location);
    })();
  }, []);

  const getLocation = async () => {
  
    try {
  
      const location = await Location.getCurrentPositionAsync();
      setLocation(location)
      setLatitude(String(location['coords']['latitude']));
      setLongitude(String(location['coords']['longitude']));
      console.log(typeof(latitude));
      postData();
    } catch (e) {
      Alert.alert("위치정보를 가져올 수 없습니다.");
    }
    
  };

  const postData = async () => {
    console.log(latitude);
    console.log(typeof("123"));
    try{
      const response = await axios.post('https://3lonbz1xr9.execute-api.ap-northeast-2.amazonaws.com/post/act1', {
        "phoneNumber": "01012",
        "age": "922",
        "gender": "M",
        "latitude": "왜 안되냐고",
        "longitude": "{longitude}",
      });
      console.log(latitude, longitude);
    } catch (e){
      console.log(e);
    }
  }

  let text = '현재 위치정보';
  let lat = "waiting";
  let lng = "waiting";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    lat = JSON.stringify(location["coords"]["latitude"]);
    lng = JSON.stringify(location["coords"]["longitude"]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{text}</Text>
      <Text style={styles.paragraph}>{lat}</Text>
      <Text style={styles.paragraph}>{lng}</Text>
      <Button onPress={getLocation} title="위치 정보 전송"></Button>
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
  }
});