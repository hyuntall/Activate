import React from "react";
import { Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { fireBase, fireDB, getFireDB } from "./firebase";

export default class SignUp extends React.Component{
  constructor(props) {
    super(props);
    fireBase();
  }
  
  state = {
    phoneNumber: "",
    password: "",
  };

  handleSignUp = () => {
    console.log(fireDB().ref('user/' + this.state.phoneNumber).once('value').length);
    try{
      fireDB().ref('user/' + this.state.phoneNumber).set(
        {
          password: this.state.password
        }
      );
      alert("계정이 생성되었습니다.");
      this.props.navigation.navigate('Login');
    }catch (e) {
      alert(e);
    }
  };

  putUserData = () => {
    if(this.state.phoneNumber.length>0 && this.state.password.length>0){
      this.handleSignUp();
    }
    else{
      alert("정보를 모두 입력해주세요");
    }
  }

  render() {
    return (
      <View style={styles.container}>
          <View >
          <Text>회원가입 화면 입니다.</Text>
          {this.state.errorMessage && 
          <Text style={{color: 'red'}}>
          {this.state.errorMessage} </Text>}
          <TextInput style={styles.textInput} placeholder="Phone Number"
          onChangeText={phoneNumber => this.setState({phoneNumber})}
          value={this.state.phoneNumber}/>
          <TextInput style={styles.textInput} placeholder="password"
          onChangeText={password => this.setState({password})}
          value={this.state.password}/>
          <TextInput style={styles.textInput} placeholder="confrim pass"/>
          <TextInput style={styles.textInput} placeholder="Name"/>
          <TextInput style={styles.textInput} placeholder="Gender"/>
          <TextInput style={styles.textInput} placeholder="Birth Day"/>
          <TextInput style={styles.textInput} placeholder="보호자 번호"/>
          <TouchableOpacity style={styles.button} onPress={this.putUserData}>
            <Text>회원가입</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Login')}>
            <Text>돌아가기</Text>
          </TouchableOpacity>
          </View>
      </View>);
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
  });