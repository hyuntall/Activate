import { TouchableOpacity, StyleSheet, Text, View, TextInput } from 'react-native';
import { Image } from 'react-native';
import React from 'react';
import LoginButton from './LoginButton';
import SignupButton from './SignupButton';


export default class Login extends React.Component {
  render() {
    return (
        <View style={styles.container}>
          <View style={styles.header}></View>
          <View style={styles.title}><Image source={require('./assets/행복한동네.png')} /></View>
          <View style={styles.content}></View>
          <View style={styles.footer}>
            <LoginButton />
            <SignupButton />
          </View>
        </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'purple',
  },
  header:{
    width:"100%",
    height:'20%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor : 'gray',
  },
  title: {
    width:'100%',
    height: '25%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'orange',
  },
  content:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink',
  },
    footer: {
        width: '100%',
        height: '25%',
        backgroundColor: "#B5B2FF",
    },
  })