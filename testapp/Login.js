import { TouchableOpacity, StyleSheet, Text, View, TextInput } from 'react-native';
import { Image } from 'react-native';
import React from 'react';

export default class Login extends React.Component {
    state = {phoneNumber: '', password: ''};
    handleLogin = () => {
        console.log(this.state);
    }
  render() {
    return (
        <View style={styles.container}>
          <Image source={require('./assets/행복한동네.png')} />
          <TextInput placeholder="Phone Number" style={styles.textInput}
          onChangeText={this.onChangeInput} />
          <TextInput placeholder="password" style={styles.textInput}/>
          <View>
          <TouchableOpacity style={styles.button1} onPress={this.handleLogin}>
          <Text style = {{color: 'white'}}>LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button2} onPress={() => this.props.navigation.navigate('SignUp')}>
            <Text style = {{color: 'white'}}>휴대폰번호로 시작하기</Text>
          </TouchableOpacity>
          </View>
        </View>
      );
  }
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: "#4641D9",
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    textInput: {
      height: 50,
      width: '50%',
      borderColor: '#D1B2FF',
      borderWidth: 2,
      marginTop: 10
    },
    button1: {
        width: 150,
        height: 65,
        backgroundColor: "#B5B2FF",
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
      },
      button2: {
        width: 150,
        height: 65,
        backgroundColor: "#4641D9",
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
      }

  })