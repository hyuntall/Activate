import React, { Component } from 'react';
import {
    TouchableOpacity,
    Text,
    StyleSheet,
}   from 'react-native';

export default class SignupButton extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <TouchableOpacity activeOpacity={0.8} style={styles.button} onPress={() => this.props.navigation.navigate('SignUp')}>
            <Text>회원가입</Text>
          </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    button:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
    },
    title: {
        fontSize: 15,
    },
});