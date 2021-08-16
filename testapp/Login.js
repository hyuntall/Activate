import { TouchableOpacity, StyleSheet, Text, View, TextInput } from 'react-native';
import { Image } from 'react-native';
import React from 'react';
import { fireBase, fireDB } from './firebase';

export default class Login extends React.Component {
    constructor(props) {
      super(props);
      fireBase();
    }
    state = {phoneNumber: '', password: ''};
    handleLogin = () => {
      fireDB().ref('user/'+this.state.phoneNumber).once('value').then(data => {
        if(data.val()!=null && data.val().password == this.state.password){
          this.props.navigation.navigate('Main',{ phoneNumber: this.state.phoneNumber})
        }
        else{
          alert("로그인에 실패했습니다.")
        }
      })
      // 파이어베이스에서 데이터 여부 확인 후, 데이터 가져와서 main 클래스로 파라미터 전달하는거 만들기
        console.log(this.state);
        
    }
  render() {
    return (
        <View style={styles.container}>
          <Image source={require('./assets/행복한동네.png')} />
          <TextInput placeholder="Phone Number" style={styles.textInput}
          onChangeText={phoneNumber => this.setState({phoneNumber})}
          value={this.state.phoneNumber}/>
          <TextInput placeholder="password" style={styles.textInput}
          onChangeText={password => this.setState({password})}
          value={this.state.password}
          secureTextEntry={true}/>
          <View>
          <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
            <Text>로그인</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Start')}>
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