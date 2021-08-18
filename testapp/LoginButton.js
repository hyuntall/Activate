import React, { Component } from 'react';
import {
    TouchableOpacity,
    Text,
    StyleSheet,
}   from 'react-native';

export default class LoginButton extends Start{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <TouchableOpacity activeOpacity={0.8} style={styles.button} onPress={() => this.props.navigation.navigate('Login')}>
            <Text>로그인</Text>
          </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    button:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom : 30,
        borderRadius: 50,
        backgroundColor: 'red',
    },

    title: {
        fontSize: 15,
    },
});