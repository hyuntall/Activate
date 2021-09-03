import React, {Component} from 'react';
import { StyleSheet } from 'react-native';

export default class Post extends Component {
    render() {
      return (
        <View style={styles.container}>
          <Text>Post</Text>
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });