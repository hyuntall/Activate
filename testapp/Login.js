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
          <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
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
    textInput: {
      height: 40,
      width: '90%',
      borderColor: 'gray',
      borderWidth: 1,
      marginTop: 8
    },
    button: {
        width: 200,
        height: 80,
        backgroundColor: "#123abc",
        borderRadius: 4.5,
        justifyContent: "center",
        alignItems: "center",
      },
  })