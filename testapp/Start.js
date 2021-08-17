import { TouchableOpacity, StyleSheet, Text, View, TextInput } from 'react-native';
import { Image } from 'react-native';
import React from 'react';


export default class Login extends React.Component {
  render() {
    return (
        <View style={styles.container}>
          <Image source={require('./assets/행복한동네.png')} />
          <View>
          <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Login')}>
            <Text>로그인</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('SignUp')}>
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
    justifyContent: 'center',
    alignItems: 'center'
  },
      title: {
        fontSize: 50,
        color: 'blue'
      },
      paragraph: {
        fontSize: 30,
        color: 'black'
      },
      
      buttonText: {
        color: "white",
        fontSize: 30,
      },
      textInput: {
        height: 40,
        width: '90%',
        borderColor: 'purple',
        borderWidth: 1,
        marginTop: 8,
      },
      button: {
        width: 150,
        height: 65,
        backgroundColor: "#B5B2FF",
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
    },
  });