import { TouchableOpacity, StyleSheet, Text, View, TextInput } from 'react-native';
import { Image } from 'react-native';
import React from 'react';


export default class Login extends React.Component {
  render() {
    return (
        <View style={styles.container}>
          <View style={styles.header}></View>
          <View style={styles.title}><Image source={require('./assets/행복한동네.png')} /></View>
          <View style={styles.content}></View>
          <View style={styles.footer}>
            <TouchableOpacity activeOpacity={0.8} style={styles.button} onPress={() => this.props.navigation.navigate('Login')}>
            <Text>로그인</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8} style={styles.button} onPress={() => this.props.navigation.navigate('SignUp')}>
            <Text>회원가입</Text>
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
    backgroundColor : '#FFE400',
  },
  title: {
    flex: 1,
    width:'100%',
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#FFE400',
  },
  content:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFE400',
  },
    footer: {
        width: '100%',
        height: '25%',
        backgroundColor: "#FFE400",
    },
    button:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom : 30,
      borderRadius: 50,
      backgroundColor: '#006E00',
  },
  })