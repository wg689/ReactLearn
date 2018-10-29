/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,
       TabBarIOS
} from 'react-native';

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

   constructor(props){
       super(props);
       this.state =  {
           selectedTabBarItem:'home'

       };

   }


  render() {
    return (
      <View style={styles.container}>
          <View style={styles.headerViewStyel}>
              <Text style={ styles.textStyle}  >
                  选项卡切换
              </Text>
          </View>

          <TabBarIOS barTintColor= 'red' style={{width:375}} >
              {/*第一块*/}
              <TabBarIOS.Item
                  systemIcon = "contacts"
                  badge ='3'
                  selected = {this.state.selectedTabBarItem == 'home'}
                  onPress = {()=>{this.setState({selectedTabBarItem:'home'})}}
              >
                  <View style={[styles.commentViewStyle,{backgroudColor:'red'}] } >
                      <Text>
                          首页
                      </Text>
                  </View>
              </TabBarIOS.Item>


              {/*第二块*/}
              <TabBarIOS.Item  systemIcon = "contacts"
                               badge ='3'
                               selected = {this.state.selectedTabBarItem == 'second'}
                               onPress = {()=>{this.setState({selectedTabBarItem:'second'})}}
              >
                  <View style={[styles.commentViewStyle,{backgroudColor:'black'}]}>
                      <Text>
                          首页2
                      </Text>
                  </View>
              </TabBarIOS.Item>


              {/*第三块*/}
              <TabBarIOS.Item  systemIcon = "contacts"
                               badge ='3'
                               selected = {this.state.selectedTabBarItem == 'three'}
                               onPress = {()=>{this.setState({selectedTabBarItem:'three'})}}
              >
                  <View style={styles.commentViewStyle}>
                      <Text>
                          首页3
                      </Text>
                  </View>

              </TabBarIOS.Item>


              {/*第四块*/}
              <TabBarIOS.Item  systemIcon = "contacts"
                               badge ='3'
                               selected = {this.state.selectedTabBarItem == 'four'}
                               onPress = {()=>{this.setState({selectedTabBarItem:'four'})}}
              >
                  <View style={styles.commentViewStyle}>
                      <Text>
                          首页4
                      </Text>
                  </View>
              </TabBarIOS.Item>



          </TabBarIOS>
      </View>
    );
  }




}

const styles = StyleSheet.create({
    headerViewStyel:{
        height:64,
        width:375,
        backgroundColor:'black',
         justifyContent: 'center',
        // flexDirection: 'row'
        alignItems: 'center'

    },
    textStyle:{
        color:'white',
        alignItems: 'center',
        marginTop: 30
    },
  container: {
      // marginTop: 30,
      // flexDirection: 'row',
      // flexWrap: 'wrap',
      flex: 1,
      backgroundColor: 'blue',
  },
  imageStyle:{
      width:80,
      height:80,
      padding: 10,

  },
  commentViewStyle:{
     flex: 1,
     justifyContent: 'center',

  },
  mainTitleStyle:{

  }




});
