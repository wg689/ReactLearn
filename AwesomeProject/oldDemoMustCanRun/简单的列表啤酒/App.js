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
var Wine =  require('./Wine.json') ;
var dimensions = require('Dimensions');
var {width,height} = dimensions.get('window');

var dimensionS = require('Dimensions');
var {width} = dimensions.get('window');

export default class App extends Component<Props> {

    // 初始值
    constructor(props){
        super(props);
        var  ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1 != r2 });
        this.state = {
            dataSource :ds.cloneWithRows(Wine)
        }
    }

    // render 函数
    render() {
        return (
        <ListView
          dataSource = {this.state.dataSource}// 数据源
          renderRow = {this.renderRow}
        />
        );
    }

    renderRow(rowData,sectionID,rowID,highlightRow){
        console.log(sectionID,rowID)
        return (
            <TouchableOpacity activityOpacity={0.5} onPress={()=>{AlertIOS.alert('点击了'+rowID+'行')}}>
            <View style={styles.cellViewStyle}>
                {/*右边的view*/}
               <Image source={{uri:rowData.image}} style={styles.leftImageStyle}></Image>


                {/*左边的view*/}
               <View style={styles.rightViewStyle}>
                   {/*上边的text*/}
                   <Text style={styles.topTitleStyle}>{rowData.name} </Text>

                   {/*/!*下面的text*!/*/}
                   <Text style={styles.bottomTitleStyle}>{rowData.money}</Text>
               </View>
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

    cellViewStyle:{
        padding:10,
        flexDirection:'row',
        backgroundColor:'white',
        borderBottomWidth: 0.5,
        borderBottomColor:'#dddddd'

    },

    rightViewStyle:{
        // backgroundColor:'red',
        // justifyContent:'flex-start',
        alignItems:'flex-start',
        width:250,
        color:'red'
    },

    leftImageStyle:{
        width:60,
        height:60,
        marginRight: 10
    },
    topTitleStyle:{
        // backgroundColor: 'blue',
        color:'red',
        flexWrap:'wrap',
        fontSize:15,
        width:width-90,
        marginBottom: 8,

    },
    bottomTitleStyle:{
       color:'blue'
    },


});
