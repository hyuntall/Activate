// Loading.js
import React from 'react'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'
import { fireBase, fireDB } from './firebase';
export default class Loading extends React.Component {
  constructor(props) { // 호출 시 파이어베이스 호출
    super(props);
    fireBase();
  }
  //componentDidMount() {
  //    firebase.auth().onAuthStateChanged(user => {
  //        console.log(user);
  //      this.props.navigation.navigate(user ? 'Category' : 'SignUp')
  //    })
  //}
  handleLogin(phoneNumber, password){ //로그인 검사 함수
    console.log(phoneNumber, password)
    fireDB().ref('user/'+phoneNumber).once('value').then(data => { //입력받은 전화번호에 해당하는 패스워드와 로그인시 입력한 패스워드가 일치하면
      if(data.val()!=null && data.val().password == password){
        this.props.navigation.navigate('Category' ,{ phoneNumber: phoneNumber}) // 카테고리 클래스로 이동
      }
      else{
        alert("로그인에 실패했습니다.")
        this.props.navigation.navigate('Login'); // 일치하지 않으면 다시 로그인 화면으로 이동
      }
    })
  }
  render() {
    const { navigation } = this.props; // 로그인 클래스에서 전달받은 인자들
    const type = navigation.getParam("type");
    const phoneNumber = navigation.getParam("phoneNumber");
    const password = navigation.getParam("password");
    console.log(type);
    if(type == "login"){ // type에 해당하는 인자가 "login"과 같으면 로그인 검사 함수 실행
      this.handleLogin(phoneNumber,password);
    }
    return (
      <View style={styles.container}>
        <Text>Loading</Text>
        <ActivityIndicator size="large" />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})