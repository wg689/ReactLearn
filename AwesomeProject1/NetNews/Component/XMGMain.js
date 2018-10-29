/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';

import XMGHome from "./XMGHome";
import XMGMessage from "./XMGMessage";
import XMGMine from "./XMGMine";
import XMGFind from "./XMGFind";

import {Platform, StyleSheet, Text, View,Image,
    TextInput,
    TabBarIOS,
    NavigatorIOS,
} from 'react-native';


type Props = {};



export  default  class XMGMain extends Component{
    // 初始化方法
    constructor(props){
        super(props)
        this.state = {
            selectedItem:'home'
        }

    }




    render() {
        return (
            <TabBarIOS
            tintColor= 'orange'
            >
                {/*首页*/}
                <TabBarIOS.Item
                    icon = {{uri:'tabbar_home'}}
                    title = "首页"
                    selected = {this.state.selectedItem == 'home'}
                    onPress ={()=>{this.setState({selectedItem: 'home'})}}
                >

                  <NavigatorIOS
                      style = {{flex: 1}}
                      initialRoute = {
                          {
                              component:XMGHome,
                              title:'网易',
                          }
                      }
                  >

                  </NavigatorIOS>

                </TabBarIOS.Item>



                {/*发现*/}
                <TabBarIOS.Item
                    icon = {{uri:'tabbar_discover'}}
                    title = "发现"
                    selected = {this.state.selectedItem == 'find'}
                    onPress ={()=>{this.setState({selectedItem: 'find'})}}
                >
                    <NavigatorIOS
                        style = {{flex: 1}}
                        tintColor='red'
                        initialRoute = {
                            {
                                component:XMGFind,
                                title:'发现',
                                leftButtonIcon:{uri:'navigationbar_friendattention'},
                                rightButtonIcon:{uri:'navigationbar_pop'},

                            }
                        }
                    >

                    </NavigatorIOS>

                </TabBarIOS.Item>

                {/*消息*/}
                <TabBarIOS.Item
                    icon = {{uri:'tabbar_message_center'}}
                    title = "消息"
                    selected = {this.state.selectedItem == 'discover'}
                    onPress ={()=>{this.setState({selectedItem: 'discover'})}}
                >
                    <NavigatorIOS
                        style = {{flex: 1}}

                        initialRoute = {
                        {
                            component:XMGMessage,
                            title:'消息',
                        }
                    }
                    >
                    </NavigatorIOS>

                </TabBarIOS.Item>




                {/*我的*/}
                <TabBarIOS.Item
                    icon = {{uri:'tabbar_profile'}}
                    title = "我的"
                    selected = {this.state.selectedItem == 'mine'}
                    onPress ={()=>{this.setState({selectedItem: 'mine'})}}
                 >
                    <NavigatorIOS
                        style = {{flex: 1}}

                        initialRoute = {
                        {
                            component:XMGMine,
                            title:'我的',
                        }
                    }>
                    </NavigatorIOS>

                </TabBarIOS.Item>


            </TabBarIOS>


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
        borderColor:'red'

    }



});
