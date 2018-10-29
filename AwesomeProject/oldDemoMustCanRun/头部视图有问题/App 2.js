/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,TextInput,
    ListView,
    TouchableOpacity,AlertIOS} from 'react-native';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});
var Car =  require('./Car.json') ;
var dimensions = require('Dimensions');
var {width,height} = dimensions.get('window');

var dimensionS = require('Dimensions');
var {width} = dimensions.get('window');

export default class App extends Component<Props> {

    // 初始值
    constructor(props){
        super(props);
        // var  ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1 != r2 });
        var   getSectionData = (dataBlob, sectionID) => {
            return dataBlob[sectionID];
        }

        var getRowData = (dataBlob,sectionID,rowID) => {
            return dataBlob[sectionID+':'+rowID];
        }
        // var  ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1 != r2 });

        this.state = {

            dataSource :new ListView.DataSource({
                getSectionData:getSectionData,
                getRowData:getRowData,
                rowHasChanged: (r1:r2) => r1 !== r2,
                sectionHeaderHasChanged:(s1,s2) => s1 !== s2,

            })

        }



    }

    componentDidMound(){
        //json数据
        console.log('数据源是');

        this.loadDataFromJson();

    }


    loadDataFromJson(){
        var jsonData = Car.data ;
        // 定义
        var  dataBlob = {};
        var sectionIDs = [];
        var rowIDs = [];
        var carsArr=[];
        // 遍历
        for (var i = 0;i < jsonData.length;i++){
          // 把组号放到数组中
           sectionIDs.push(i);
           dataBlob[i] = jsonData[i].title;
           // 3.0
            carsArr = jsonData[i].cars;
            rowIDs[i] = [];
            // 遍历所有的车
            for (var j = 0;j <carsArr.length;j++){
               rowIDs[i].push(j);
               // 把每一行的内容
                dataBlob[i+':'+j] = carsArr[j];
            }

        }
        this.setState({
              dataSource: this.state.dataSource.cloneWithRowsAndSections(dataBlob,sectionIDs,rowIDs)
        });
    }

    // render 函数
    render(){
        return (
        <View>
            <ListView>
                dataSource = {this.state.dataSource}// 数据源
                renderRow = {this.renderRow}
                renderSectionHeader = {this.renderSectionHeader}
            </ListView>
        </View>);
    }

    renderRow(rowData){
        console.log(sectionID,rowID)
        return (
            <TouchableOpacity activityOpacity={0.5} onPress={()=>{AlertIOS.alert('点击了'+rowID+'行')}}>
            <View style={styles.cellViewStyle}>
                {/*右边的view*/}
               <Image source={{uri:rowData.icon}} style={styles.leftImageStyle}></Image>
                <Text style={styles.topTitleStyle}>{rowData.name} </Text>
            </View>
            </TouchableOpacity>
           );
    }
    renderSectionHeader(sectionData,sectionID){
       return(
           <View>
               <Text>

               </Text>
           </View>

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
        backgroundColor:'red',
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
