/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,TextInput,ListView,TouchableOpacity,AlertIOS} from 'react-native';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});
var shareData =  require('./shareData.json') ;
var dimensions = require('Dimensions');
var {width,height} = dimensions.get('window');

var dimensionS = require('Dimensions');
var {width} = dimensions.get('window');
var cols = 3;
var cellH = 100;
var vMargin = (width-cellH*3)/(cols+1);
var hMargin = 20;

export default class App extends Component<Props> {

    // 初始值
    constructor(props){
        super(props);
        var  ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1 != r2 });
        this.state = {
            dataSource :ds.cloneWithRows(shareData.data)
        }
    }

    // render 函数
    render() {
        return (
        <ListView
          dataSource = {this.state.dataSource}// 数据源
          renderRow = {this.renderRow}
          contentContainerStyle={style=styles.leftViewStyle}
        />
        );
    }

    renderRow(rowData,sectionID,rowID,highlightRow){
        console.log(sectionID,rowID)
        return (
            <TouchableOpacity activityOpacity={0.5} onPress={()=>{AlertIOS.alert('点击了'+rowID+'行')}}>
            <View style={styles.cellViewStyle}>
                {/*右边的view*/}
               <Image source={{uri:rowData.icon}} style={styles.leftImageStyle}></Image>
                <Text style={styles.topTitleStyle}>{rowData.title} </Text>

            </View>
            </TouchableOpacity>

                );
    }


}

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        flex: 1

    },
    leftViewStyle:{
        flexDirection: 'row',
        flexWrap: 'wrap',
    },

    cellViewStyle:{
        // padding:10,
        backgroundColor:'red',
        width:cellH,
        height:cellH,
        marginLeft: vMargin,
        marginTop: hMargin,
        alignItems: 'center',
        // justifyContent: 'center'

    },
    leftImageStyle:{
        width:80,
        height:80
    },

    topTitleStyle:{
        // backgroundColor: 'blue',
        color:'red',
        fontSize:10,

    },
    bottomTitleStyle:{
       color:'blue'
    },


});
