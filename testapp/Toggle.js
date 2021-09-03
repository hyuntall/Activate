import React from 'react'
import { Text, TouchableOpacity } from 'react-native';

class Toggle extends React.Component {

    constructor(props) {
      super(props);
      this.state = {isToggleOn: true};
  
      //this.handleClink = this.handleClink.bind(this);
    }
    //onPress: () => {clearTimeout(this.timeout),
    //    this.setState({danger: "0", text: "충격 감지중"})}
    //handleClink() {//목적이 무엇?
    //this.setState(this.state => ({
    //isToggleOn: !this.state.isToggleOn
    //  }));
    //}
    handleClick(){
      this.state.isToggleOn == true ? this.setState({isToggleOn: false}): this.setState({isToggleOn: true})
    }
  
    render(){
      return (
        <TouchableOpacity avtiveOpacity={0.8} onPress={() => this.handleClick()}>
        <Text>
          {this.state.inToggleOn ? 'ON' : 'OFF'}
          </Text>
        </TouchableOpacity>
      );
    }
  }
  
  export default Toggle;
  
