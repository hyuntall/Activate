import React, {Component} from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SliderBox } from 'react-native-image-slider-box';


export default class Information extends Component {
    constructor(props) {
        super(props);
        this.state = {
          images: [
              require('./assets/info1.png'),
              require('./assets/info2.png'),
              require('./assets/info3.png'),
              require('./assets/info4.png'),
          ]
        };
    }
  render() {
    return (
        <View style={styles.container}>

          <View style={styles.header}></View>
          <Ionicons name="arrow-back-circle" size={50} color="black" onPress={() => this.props.navigation.navigate('Category')}/>
          
          <View style={styles.title}>
          <SliderBox style = {styles.slider}
          images={this.state.images}
          onCurrentImagePressed={index =>
            console.warn(`image ${index} pressed`)
          }
        />
          </View>

        </View>
      );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:10,
    backgroundColor : '#ffffff',
  },
  header:{
    width:"100%",
    height:'5%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor : '#ffffff',
  },
  image:{
      width:"100%",
      height:"100%",
  },
  title: {
    flex: 1,
    width:'100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#ffffff',
  },
  slider:{
      width:"95%",
      height:"95%",
      marginLeft:10,
  }});