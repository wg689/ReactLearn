/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,TextInput} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
var BadgeDta1 =  require('./BadgeData.json') ;
var dimensions = require('Dimensions');
var {width,height} = dimensions.get('window');

var cols = 3;
var boxW = 100;
var vMargin = (width - cols*boxW)/(cols+1);
var hMargin = 25;

type Props = {};
var LoginView = require('./loginView');
export default class App extends Component<Props> {
  render() {
    return (
          <LoginView />
    );
  }




}

const styles = StyleSheet.create({
  container: {
      marginTop: 50,
      flex: 1

  },
  inputStyle:{
      width:200,
      height:30,
     borderWidth: 1,
      borderColor:'red'

  }




});
