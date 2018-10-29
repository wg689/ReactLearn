/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image} from 'react-native';

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
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
          {this.renderAllBages()}
      </View>
    );
  }

  renderAllBages(){
      var allBadges = [];
      for (var i = 0; i < 6;i++) {
          var badge = BadgeDta1.data[i];
          allBadges.push(

              <View key = {i} style={styles.outViewStyle}>
                  <Image source = {{uri:badge.icon}} style={styles.imageStyle}></Image>
                  <Text style={styles.mainTitleStyle}>我是包名</Text>
              </View>

          );
      }
      return allBadges;
  }


}

const styles = StyleSheet.create({
  container: {
      marginTop: 30,
      flexDirection: 'row',
      flexWrap: 'wrap'
  },
  imageStyle:{
      width:80,
      height:80,
      padding: 10,

  },
  outViewStyle:{
      backgroundColor: 'yellow',
      alignItems:'center',
      width:boxW,
      height:boxW,
      marginLeft: vMargin,
      marginTop:hMargin

  },
  mainTitleStyle:{

  }




});
