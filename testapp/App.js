import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, Text, View, TextInput } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Main from './Main';
import SignUp from './SignUp';
import { Image } from 'react-native';
class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "Login"
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
    
      
      <View style={styles.container}>
        <Image source={require('./assets/행복한동네.png')} />
        <TextInput placeholder="Phone Number" style={styles.textInput}/>
        <TextInput placeholder="password" style={styles.textInput}/>
        <View>
        <TouchableOpacity style={styles.button} onPress={() => navigate("Main", {name: "Main"})}>
          <Text>로그인</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigate("SignUp", {name: "SignUp"})}>
          <Text>회원가입</Text>
        </TouchableOpacity>
        </View>
      </View>
    );
  }
}

// MainScreen 화면
class MainScreen extends React.Component {
  static navigationOptions = {
    title: "Main"
  };
  render() {
    const {navigate} = this.props.navigation;
    return < Main phoneNumber="12313123" age="11" gender="M"/>;
  }
}

//회원가입 화면
class SignUpScreen extends React.Component{
  static navigationOptions = {
    title: "SignUp"
  };
  render() {
    const {navigate} = this.props.navigation;
    return < SignUp/>;
  }
}

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen}, // 기본 화면은 맨 위,
  Main: {screen: MainScreen}, // 메인화면
  SignUp: {screen: SignUpScreen}
});

const App = createAppContainer(MainNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 150,
    height: 80,
    backgroundColor: "#123abc",
    borderRadius: 4.5,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 30,
  },
  textInput: { 
    height: 40, 
    borderWidth: 1, 
    width: 100},
});

export default App;