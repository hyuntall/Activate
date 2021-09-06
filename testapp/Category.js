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
          <View style={styles.header}>
          </View>
          <View style={styles.title}></View>
          <View style={styles.content}>
          <TouchableOpacity activeOpacity={0.8} style={styles.button1} onPress={() => this.props.navigation.navigate('Main')}>
          {/* 불안신호 보내러 가기*/}
          <Image source = {require('./assets/alarm.png')} 
          style ={{width:'30%', height:'30%',resizeMode:'contain'}}/>
            <Text>불안신호</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8} style={styles.button2} onPress={() => this.props.navigation.navigate('Post')}>
            {/*환경사진 찍으러 가기*/}
            <Image source = {require('./assets/notice.png')} 
          style ={{width:'30%', height:'30%',resizeMode:'contain'}}/>
            <Text>환경 건의</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8} style={styles.button3} onPress={() => this.props.navigation.navigate('Information')}>
            {/*이용 안내*/}
            <Image source = {require('./assets/file.png')} 
          style ={{width:'30%', height:'30%',resizeMode:'contain'}}/>
            <Text>이용 안내</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8} style={styles.button4}>
            {/*내 프로필 정보 변경*/}
            <Image source = {require('./assets/user.png')} 
          style ={{width:'30%', height:'30%',resizeMode:'contain'}}/>
            <Text>내 정보</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8} style={styles.button5} onPress={() => this.props.navigation.navigate('Start')}>
          <Text>로그아웃</Text>
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
    width:"10%",
    marginTop:"1%",
    height:'0%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor : '#ffffe0',
  },
  title: {
    width:'100%',
    height: '10%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#ffffe0',
  },
  content:{
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffe0',
  },
  button1:{
    width: '24%',
    height:'13%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom : 30,
    borderRadius: 50,
    backgroundColor: '#FFFF6C',
},
  button2:{
    width: '24%',
    height:'13%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom : 30,
    borderRadius: 50,
    backgroundColor: '#FFFF6C',
},
  button3:{
    width: '24%',
    height:'13%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom : 30,
    borderRadius: 50,
    backgroundColor: '#FFFF6C',
  },
  button4:{
    width: '24%',
    height:'13%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom : 30,
    borderRadius: 50,
    backgroundColor: '#FFFF6C',
},
   button5:{
    width: '24%',
    height:'13%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom : 30,
    borderRadius: 50,
    backgroundColor: '#FFFF6C',
},
  footer: {
    width: '100%',
    height: '10%',
    backgroundColor: "#ffffe0",
    },  
  })