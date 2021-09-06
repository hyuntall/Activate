import { TouchableOpacity, StyleSheet, Text, View, TextInput, Alert } from 'react-native';
import { Image } from 'react-native';
import React from 'react';
import UserData from './UserData';

export default class Login extends React.Component {
    constructor(props) {
      super(props);
    }
    login = () => {
      if(UserData.phoneNumber.length>0){
        console.log("잘 들어갔나?", UserData.phoneNumber, UserData.password)
        this.props.navigation.navigate('Loading',{type: "login"})
      }
      else{
        alert("아이디를 입력하세요.");
      }
    }
  render() {
    return (
        <View style={styles.container}>
          <View style={styles.header}></View>
          <View style={styles.title}><Image source={require('./assets/행복한동네.png')} /></View>
          <View style={styles.content}>
          <TextInput placeholder="Phone Number" style={styles.textInput}
          onChangeText={phoneNumber => UserData.phoneNumber = phoneNumber}
          value={UserData.phoneNumber}/>
          {/* 텍스트 인풋에 입력한 값이 바뀔 때마다 setState로 변수 값 변경 */}
          <TextInput placeholder="password" style={styles.textInput}
          onChangeText={password => UserData.password = password}
          value={UserData.password}
          secureTextEntry={true}/>
          </View>
          <View style={styles.footer}>
          <TouchableOpacity style={styles.button} onPress={() => this.login()}>
          {/* 로그인 버튼 클릭 시 로딩화면으로 이동, TextInput에서 입력받은 전화번호와 패스워드도 함께 전달*/}
            <Text>로그인</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Start')}>
            {/*돌아가기 버튼 클릭 시 Start 클래스로 이동*/}
            <Text>돌아가기</Text>
          </TouchableOpacity>
          </View>
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
    height:'20%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor : '#ffffe0',
  },
  title: {
    flex:1,
    width:'100%',
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#ffffe0',
  },
  content:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffe0',
  },
  buttonText: {
    color: "white",
    fontSize: 30,
  },
  textInput: {
    height: 40,
    width: '90%',
    borderColor: '#747474',
    borderWidth: 1,
    borderRadius: 15,
    marginTop: 8,
  },
      footer: {
        width: '100%',
        height: '25%',
        backgroundColor: "#ffffe0",
    },
      button: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom : 30,
        borderRadius: 50,
        backgroundColor: '#FFFF6C',
      },
  });