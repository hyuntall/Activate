import { TouchableOpacity, StyleSheet, Text, View, TextInput } from 'react-native';
import { Image } from 'react-native';
import React from 'react';

export default class Category extends React.Component {
    constructor(props) {
      super(props);
    }
  render() {
    return (
        <View style={styles.container}>
          <View style={styles.footer}>
          <TouchableOpacity>
          {/* 불안신호 보내러 가기*/}
            <Text>불안신호 보내러 가기</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            {/*환경사진 찍으러 가기*/}
            <Text>환경사진 찍으러 가기</Text>
          </TouchableOpacity>
          </View>
        </View>
      );
  }
}