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
      fireDB().ref('user/'+this.state.phoneNumber).once('value').then(data => {
        if(data.val().password.length==0){
          this.handleSignUp();
        }
        else{
          alert("이미 가입정보가 존재합니다.")
        }
      })
    }
    else{
      alert("정보를 모두 입력해주세요");
    }
  }

  render() {
    return (
      <View style={styles.container}>
          <View >
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
            <Text>이전</Text>
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