import React from "react";
import { Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { fireBase, fireDB, getFireDB } from "./firebase";

export default class SignUp extends React.Component{
  constructor(props) { // 클래스 호출 시 파이어베이스 호출
    super(props);
    fireBase();
  }
  state = {
    phoneNumber: "",
    password: "",
    confirmPass: "",
    hide: true,
  };

  confirmPassword = () => { //password와 confirmPass 의 내용이 같으면 PutUserData함수 호출
    if(this.state.password == this.state.confirmPass){
      this.putUserData();
    }
    else{
      alert("비밀번호를 다시 확인해주세요");
    }
  }

  putUserData = () => { // 아무것도 입력하지 않아도 회원가입이 되는것을 방지하기 위해 입력한 전화번호와 패스워드의 길이 검사
    if(this.state.phoneNumber.length>0 && this.state.password.length>0){
      fireDB().ref('user/'+this.state.phoneNumber).once('value').then(data => {
        if(data.val()==null){ //이미 가입한 전화번호인지 검사. 아니면 handleSignUp 함수 호출
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

  handleSignUp = () => { // 회원가입 검사 함수
    try{ //입력한 전화번호에 해당하는 패스워드를 TextInput에서 입력한 패스워드로 설정
      fireDB().ref('user/' + this.state.phoneNumber).set(
        {
          password: this.state.password
        }
      );
      alert("계정이 생성되었습니다.");
      this.props.navigation.navigate('Login');
      //성공 시 로그인 화면으로 이동
    }catch (e) {
      alert(e);
    }
  };

  firstComponent(){ //첫번째 가입 요소, hide변수가 true이면 첫번째 가입요소가 표시됨.
    return (
      <View style={styles.container}>
        <View style={styles.header}></View>
        <View style={styles.title}>
        <TextInput style={styles.textInput} placeholder="Phone Number"
          onChangeText={phoneNumber => this.setState({phoneNumber})}
          value={this.state.phoneNumber}/>
          <TextInput style={styles.textInput} placeholder="password"
          onChangeText={password => this.setState({password})}
          value={this.state.password}/>
          <TextInput style={styles.textInput} placeholder="confrim pass"
          onChangeText={confirmPass => this.setState({confirmPass})}
          value={this.state.confirmPass}/>
          </View>
          <View style={styles.content}>
          <TouchableOpacity activeOpacity={0.8} style={styles.button} onPress={() => this.setState({hide: false})}>
            {/*다음 버튼을 누르면 hide변수를 false로 바꿔서 첫번째 요소는 숨기고 두번째 요소 표시*/}
            <Text>다음</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8} style={styles.button} onPress={() => this.props.navigation.navigate('Start')}>
            {/* Home 버튼을 누르면 Start 클래스로 이동 */}
            <Text>Home</Text>
          </TouchableOpacity>
          </View>
          <View style={styles.footer}></View>
      </View>
    )
  }

  secondComponent(){//두번째 가입 요소, hide 변수가 false일 때 표시됨
    return(
      <View style={styles.container}>
        <View style={styles.header}></View>
        <View style={styles.title}>
        <TextInput style={styles.textInput} placeholder="Name"/>
        <TextInput style={styles.textInput} placeholder="Gender"/>
        <TextInput style={styles.textInput} placeholder="Birth Day"/>
        <TextInput style={styles.textInput} placeholder="보호자 번호"/>
        </View>
          <View style={styles.content}></View>
          <View style={styles.footer}>
          <TouchableOpacity style={styles.button} onPress={this.confirmPassword}>
            <Text>회원가입</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => this.setState({hide: true})}>
            {/*이전 버튼을 누르면 hide 변수를 true로 바꾸어 두번째 요소는 숨기고 첫번째 요소는 다시 표시 */}
            <Text>이전</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Login')}>
            {/*버튼을 누르면 로그인 화면으로 이동 */}
            <Text>로그인 화면</Text>
          </TouchableOpacity>
          </View>
      </View>
    )
  }
  render() {
    return (
      <View style={styles.container}>
        {this.state.hide ? this.firstComponent() : null}
        {/*hide 변수가 true이면 firstComponent함수 호출, 아니면 null 호출 */}

        {this.state.hide ? null : this.secondComponent()}
        {/*hide 변수가 true이면 null 호출, 아니면 secondComponent함수 호출 */}
          <View >
          {this.state.errorMessage && 
          <Text style={{color: 'red'}}>  {/*이건 아직 진행중 */}
          {this.state.errorMessage} </Text>}
          
          
          </View>
      </View>);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'orange',
  },buttonText: {
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
      button: {
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom : 30,
        borderRadius: 50,
        backgroundColor: 'red',
        width: 50,
      },
  })