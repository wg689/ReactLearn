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
        var  getSectionData = (dataBlob, sectionID) => {
            return dataBlob[sectionID];
        };

        var  getRowData = (dataBlob, sectionID, rowID) => {
            return dataBlob[sectionID + ':' + rowID];
        };
        console.log('数据源是');
        // var  ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1 != r2 });

        this.state = {

            dataSource: new ListView.DataSource({
                getSectionData: getSectionData, // 获取组中数据
                getRowData: getRowData, // 获取行中的数据
                rowHasChanged: (r1, r2) => r1 !== r2,
                sectionHeaderHasChanged:(s1, s2) => s1 !== s2
            }),


    }



    }

    componentDidMount(){
    //该方法发生在render方法之后。
    //在这里React会使用render方法返回的虚拟DOM对象来创建真实的DOM结构
    console.log('componentDidMount')
    //json数据
    console.log('数据源是123');
    this.loadDataFromJson();
    }

    loadDataFromJson(){
        // 拿到json数据
        var jsonData = Car.data;
        console.log('loadDataFromJson');

        // 定义一些变量
        var dataBlob = {},
            sectionIDs = [],
            rowIDs = [],
            cars = [];

        // 遍历
        for(var i=0; i<jsonData.length; i++){
            // 1. 把组号放入sectionIDs数组中
            sectionIDs.push(i);

            // 2.把组中内容放入dataBlob对象中
            dataBlob[i] = jsonData[i].title

            // 3. 取出该组中所有的车
            cars = jsonData[i].cars;
            rowIDs[i] = [];
            console.log(cars);
            // 4. 遍历所有的车数组
            for(var j=0; j<cars.length; j++){
                // 把行号放入rowIDs
                rowIDs[i].push(j);
                // 把每一行中的内容放入dataBlob对象中
                dataBlob[i+':'+j] = cars[j];
            }
        }

        // 更新状态
        this.setState({
            dataSource: this.state.dataSource.cloneWithRowsAndSections(dataBlob,sectionIDs,rowIDs)

    });

    }


    render(){
        return(
            <View style={styles.outerViewStyle}>
                {/*头部*/}
                <View style={styles.headerViewStyle}>
                    <Text style={{color:'red', fontSize:25}}>SeeMyGo品牌</Text>
                </View>
                {/*ListView*/}
                <ListView
                    dataSource={this.state.dataSource}
                renderRow={this.renderRow}
                    renderSectionHeader={this.renderSectionHeader}
                />
            </View>
        );
    }

    // 每一行的数据
    renderRow(rowData){
        return(
            <TouchableOpacity activeOpacity={0.5}>
                <View style={styles.rowStyle}>
                    <Image source={{uri: rowData.icon}} style={styles.rowImageStyle}/>
                    <Text style={{marginLeft:5}}>{rowData.name}</Text>
                </View>
            </TouchableOpacity>
        );
    }

    // 每一组中的数据
    renderSectionHeader(sectionData, sectionID){
        return(
            <View style={styles.sectionHeaderViewStyle}>
                <Text style={{marginLeft:5, color:'red'}}>{sectionData}</Text>
            </View>
        );
    }





}



// 设置样式
const  styles = StyleSheet.create({
    outerViewStyle:{
        //占满窗口
        flex:1
    },

    headerViewStyle:{
        height:64,
        backgroundColor:'orange',

        justifyContent:'center',
        alignItems:'center'
    },

    rowStyle:{
        // 设置主轴的方向
        flexDirection:'row',
        // 侧轴方向居中
        alignItems:'center',
        padding:10,

        borderBottomColor:'#e8e8e8',
        borderBottomWidth:0.5,
        backgroundColor:'red'
    },

    rowImageStyle:{
        width:70,
        height:70,
    },

    sectionHeaderViewStyle:{
        backgroundColor:'#e8e8e8',
        height:25,

        justifyContent:'center'
    }
});