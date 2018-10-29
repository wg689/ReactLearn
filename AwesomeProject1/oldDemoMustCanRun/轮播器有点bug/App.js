/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,TextInput,ScrollView} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

var  Dimensions = require('Dimensions');

var  {width}  = Dimensions.get('window');
var TimerMixin = require('react-timer-mixin');
var imageData = require('./ImageData')


export  default  class  EmptyRowsView extends Component<Props> {

    // zhuce
    mmixins:[TimerMixin];

    state = {
        currentpage: 0
    }

    static getDefaultProps = {
        duration:2000
    }


    componentDidMount(){
        {this.startFireTimer()};
    }

    startFireTimer(){
        var scroll = this.refs.scrollview;
        var imageCount = imageData.data.length;
        var obj = this;
        var cunrrentPage1 = 0;
        setInterval(function () {
            if (cunrrentPage1>imageCount){
                cunrrentPage1 = 0;
            } else {
                cunrrentPage1 ++;
            }

            obj.setState({
                currentPage :cunrrentPage1
            });
            console.log('定时器'+cunrrentPage1);
            var offsetX = cunrrentPage1*width;
            scroll.scrollTo({x:offsetX,y:0,animated:true});

        },2000)

    }

    render() {
        return (
           <View style={styles.container}>
           <ScrollView style={{backgroundColor:'red'} }
                       ref="scrollview"
                       horizontal = {true}
               showsHorizontalScrollIndicator = {false}
                       pagingEnabled={true}

                        onMomentumScrollEnd = {(e)=>this.onAnimationEnd(e)}
            >
               {this.renderAllChild()}
           </ScrollView>
           <View style={styles.pageViewStyle}>
               {this.renderCircleDot()}
               </View >
           </View>
        );
    }

    onAnimationEnd(e){
        var offset = e.nativeEvent.contentOffset.x;
        var currentPage2 = Math.floor(offset/width);
        this.setState({
            currentPage : currentPage2,
        })
    }



    renderAllChild() {
        var allImage = [];
        var imagesArr = imageData.data;
        for (var i = 0; i < imagesArr.length; i++) {
            var imageItem = imagesArr[i];

            allImage.push(
                <Image key={i} source={{uri: imageItem.img}} style={{width: width, height: 120,backgroundColor: 'yellow'}}

                ></Image>
            );
        }
        return allImage;
    }


    renderCircleDot(){
        var indicatorArr = [];
        var imagesArr = imageData.data;
        var  style;
        for (let i = 0; i < imagesArr.length ; i++) {
            style = (i == this.state.currentpage) ? {color:'orange'} : {color:'white'};
            console.log(style)
            indicatorArr.push(
               <Text key={i} style={[{fontSize:20,style}]}> &bull; </Text>
            );
        }
        return indicatorArr;

    }

}

const styles = StyleSheet.create({
    container:{
      marginTop: 25
    },
    pageViewStyle:{
        width:width,
        flexDirection:'row',
        alignItems:'center',
        height:25,
        position:'absolute',
        bottom:0
    }

})

