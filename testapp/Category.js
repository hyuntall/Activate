import { TouchableOpacity, StyleSheet, Text, View, TextInput } from 'react-native';
import { Image } from 'react-native';
import React from 'react';

export default class Category extends React.Component {
    constructor(props) {
      super(props);
    }
  render() {
    return (
        <View style={styles.container}>
          <View style={styles.header}></View>
          <View style={styles.title}></View>
          <View style={styles.content}>
          <TouchableOpacity activeOpacity={0.8} style={styles.button1} onPress={() => this.props.navigation.navigate('Main')}>
          {/* 불안신호 보내러 가기*/}
            <Text>불안신호</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8} style={styles.button2}>
            {/*환경사진 찍으러 가기*/}
            <Text>환경 건의</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8} style={styles.button3}>
            {/*지역 홈페이지*/}
            <Text>우리 동네 공지</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8} style={styles.button4}>
            {/*내 프로필 정보 변경*/}
            <Text>내 정보</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8} style={styles.button5}>
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
    width:'100%',
    height: '10%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#FFFFFF',
  },
  content:{
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  button1:{
    width: '26%',
    height:'14%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom : 30,
    borderRadius: 50,
    backgroundColor: '#FFFF6C',
},
  button2:{
    width: '26%',
    height:'14%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom : 30,
    borderRadius: 50,
    backgroundColor: '#FFFF6C',
},
  button3:{
    width: '26%',
    height:'14%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom : 30,
    borderRadius: 50,
    backgroundColor: '#FFFF6C',
  },
  button4:{
    width: '26%',
    height:'14%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom : 30,
    borderRadius: 50,
    backgroundColor: '#FFFF6C',
},
  button5:{
    width: '26%',
    height:'14%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom : 30,
    borderRadius: 50,
    backgroundColor: '#FFFF6C',
  },
  footer: {
    width: '100%',
    height: '10%',
    backgroundColor: "#FFFFFF",
    },  
  })