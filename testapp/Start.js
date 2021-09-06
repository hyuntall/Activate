import { TouchableOpacity, StyleSheet, Text, View, TextInput } from 'react-native';
import { Image } from 'react-native';
import React from 'react';


export default class Login extends React.Component {
  render() {
    return (
        <View style={styles.container}>
          <View style={styles.header}></View>
          <View style={styles.content}>
          <Image source={require('./assets/행복한동네.png')} />
          <TouchableOpacity activeOpacity={0.8} style={styles.button1} onPress={() => this.props.navigation.navigate('Login')}>
            <Text style={styles.text}>로그인</Text>
          </TouchableOpacity>
          <Text activeOpacity={0.8} onPress={() => this.props.navigation.navigate('SignUp')}>  
            휴대폰번호로 시작하기
            </Text>
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
  text:{
    fontSize: 25,
  },
  header:{
    width:"100%",
    height:'10%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor : '#ffffe0',
  },
  title: {
    flex: 1,
    width:'100%',
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#ffffe0',
  },
  content:{
    flex:3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffe0',
  },
  button1:{
    width: '70%',
    height:'15%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop : 50,
    marginBottom : 10,
    borderRadius: 50,
    backgroundColor: '#FFFF6C',
},

  footer: {
    width: '100%',
    height: '15%',
    backgroundColor: "#ffffe0",
    },
  })