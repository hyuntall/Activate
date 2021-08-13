import React from "react";
import { Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
function SignUp() {
    return (
        <View style={styles.container}>
            <View >
            <Text>회원가입 화면 입니다.</Text>
            <TextInput style={styles.textInput} placeholder="Phone Number"/>
            <TextInput style={styles.textInput} placeholder="password"/>
            <TextInput style={styles.textInput} placeholder="confrim pass"/>
            <TextInput style={styles.textInput} placeholder="Name"/>
            <TextInput style={styles.textInput} placeholder="Gender"/>
            <TextInput style={styles.textInput} placeholder="Birth Day"/>
            <TextInput style={styles.textInput} placeholder="보호자 번호"/>
            <TouchableOpacity style={styles.button} >
              <Text>회원가입</Text>
            </TouchableOpacity>
            </View>
        </View>);
}


const styles = StyleSheet.create({
    container: {
        flex: 3,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
      },
      title: {
        fontSize: 50,
        color: 'blue'
      },
      paragraph: {
        fontSize: 30,
        color: 'black'
      },
      button: {
        width: 200,
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

export default SignUp;