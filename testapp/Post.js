import React, {Component} from 'react';
import { StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';


export default class Post extends Component {
  render() {
    return (
        <View style={styles.container}>
          <View style={styles.header}></View>
          <Ionicons name="arrow-back-circle" size={50} color="black" onPress={() => this.props.navigation.navigate('Category')}/>
          <View style={styles.title}>
          <Text>사진을 찍어 건의해주세요</Text>
          </View>
          <View style={styles.content}>
          <TextInput placeholder="내용을 입력해주세요." style={styles.textInput}/>
          <Ionicons name="camera-sharp" size={35} color="black" />
          </View>
          <View style={styles.footer}>
          <TouchableOpacity style={styles.button} onPress={() => this.login()}>
            <Text>저장</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Start')}>
            <Text>임시저장</Text>
          </TouchableOpacity>
          </View>
        </View>
      );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header:{
    width:"100%",
    height:'5%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor : '#FFFFFF',
  },
  title: {
    width:'100%',
    height: '5%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#FFFFFF',
  },
  content:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  buttonText: {
    color: "white",
    fontSize: 30,
  },
  textInput: {
    height: 500,
    width: '90%',
    borderColor: '#747474',
    borderWidth: 2,
    borderRadius: 5,
    marginTop: 1,
  },
      footer: {
        width: '100%',
        height: '20%',
        alignItems: 'center',
        backgroundColor: "#FFFFFF",
        flexDirection : 'row',
    },
      button: {
        width: '45%',
        height: '35%',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom : 30,
        marginLeft : 10,
        borderRadius: 50,
        backgroundColor: '#FFFF6C',
      },
  });