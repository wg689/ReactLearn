/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,TextInput} from 'react-native';


type Props = {};



export  default  class XMGMessage extends Component{
    render() {
        return (
            <Text style={styles.container}>
                这个是主要的组件 消息
            </Text>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        flex: 1,
        // width:100,
        // height:100,
        backgroundColor:'red'

    },
    inputStyle:{
        width:200,
        height:30,
        borderWidth: 1,
        borderColor:'blue'

    }



});
