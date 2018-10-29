/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,TextInput,ListView,
    TouchalbleOpacity


} from 'react-native';


type Props = {};

var jsonData = require('./LocalData.json');


export  default  class XMGHome extends Component{




    //初始化方法
    constructor(props){
        super(props)
        console.log('打印');
        this.state = {
            headerDataArr:[],
            dataSource: new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 !== r2
            })
        }
    }

    componentDidMount(){
        console.log('打印'+'componentDidMount');

        this.loadDataFromNetWork();
    }


    loadDataFromNetWork(){

        var jsonData1 = jsonData['T1348647853363'];
        this.dealWithData(jsonData1);

        // fetch("https://is.snssdk.com/api/news/feed/v58/?")
        //     .then((response)=>response.json)
        //     .then((responseData)=>{
        //         var jsonData1 = jsonData['T1348647853363'];
        //         this.dealWithData(jsonData1);
        //         console.log('打印'+'response');
        //
        //     })
        //     .catch((error) =>{
        //          var jsonData1 = jsonData['T1348647853363'];
        //          this.dealWithData(jsonData1);
        //             console.log('打印'+'dealWithData');
        //
        //         }
        //
        //     )
    }


    dealWithData(jsonData1){

        var headerArr = [],listDataArr = [];
        for (var i = 0;i < jsonData1.length;i++){
            // 取出单独的对象
            var data = jsonData1[i];
            if (data.hasAD == 1){
                headerArr = data.ads;
            } else {
                listDataArr.push(data);
            }
        }
        console.log( '打印'+headerArr,jsonData1);

        this.setState({
            headerDataArr:headerArr,
             dataSource:this.state.dataSource.cloneWithRows(listDataArr)
        });
    }

    render() {
        return (
           <ListView
               dataSource = {this.state.dataSource}
               renderRow = {this.renderRow}
           />
        );
    }


    renderRow(rowData){
        return (
                <View style={styles.cellViewStyle}>
                    <Image source = {{uri:rowData.imgsrc}} style={styles.imageStyle}>

                    </Image>
                    <View>

                        <Text style={styles.titleStye}>
                            {rowData.title}
                        </Text>

                        <Text style={styles.subTitleStye}>
                            {rowData.title}
                        </Text>

                        <Text style={styles.followTitleStye}>
                            {rowData.title} 跟帖
                        </Text>

                    </View>
                </View>
        );
    }


}

const styles = StyleSheet.create({
    cellViewStyle:{

    },
    imageStyle:{
      width:90,
        height:90
    }
    ,
    titleStye:{

    },
    subTitleStye:{

    },
    followTitleStye:{

    },




});
