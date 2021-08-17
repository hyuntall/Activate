import { TouchableOpacity, StyleSheet, Text, View, TextInput } from 'react-native';
import { Image } from 'react-native';
import React from 'react';

export default class Login extends React.Component {
    constructor(props) {
      super(props);
    }
    state = {phoneNumber: '', password: ''};
  render() {
    return (
        <View style={styles.container}>
          <Image source={require('./assets/행복한동네.png')} />

          <TextInput placeholder="Phone Number" style={styles.textInput}
          onChangeText={phoneNumber => this.setState({phoneNumber})}
          value={this.state.phoneNumber}/>
          {/* 텍스트 인풋에 입력한 값이 바뀔 때마다 setState로 변수 값 변경 */}
          <TextInput placeholder="password" style={styles.textInput}
          onChangeText={password => this.setState({password})}
          value={this.state.password}
          secureTextEntry={true}/>

          <View>
          <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Loading',
          { phoneNumber: this.state.phoneNumber, password: this.state.password, type: "login"})}>
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