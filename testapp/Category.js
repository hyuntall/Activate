import { TouchableOpacity, StyleSheet, Text, View, TextInput } from 'react-native';
import { Image } from 'react-native';
import React from 'react';

export default class Category extends React.Component {
    constructor(props) {
      super(props);
    }
  render() {
    const { navigation } = this.props;
    const phoneNumber = navigation.getParam("phoneNumber");
    return (
        <View style={styles.container}>
          <View style={styles.header}></View>
          <View style={styles.title}></View>
          <View style={styles.content}>
          <TouchableOpacity activeOpacity={0.8} style={styles.button} onPress={() => this.props.navigation.navigate('Main'),{ phoneNumber: phoneNumber}}>
          {/* 불안신호 보내러 가기*/}
            <Text>불안신호</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            {/*환경사진 찍으러 가기*/}
            <Text>환경 건의</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            {/*지역 홈페이지*/}
            <Text>우리 동네 공지</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            {/*내 프로필 정보 변경*/}
            <Text>내 정보</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            {/*어플 설정*/}
            <Text>어플 설정</Text>
          </TouchableOpacity>
          </View>
          <View style={styles.footer}></View>
        </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header:{
    width:"100%",
    height:'10%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor : '#FFFFFF',
  },
  title: {
    flex: 1,
    width:'100%',
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#FFFFFF',
  },
  content:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  footer: {
    width: '100%',
    height: '15%',
    backgroundColor: "#FFFFFF",
    },  
  })