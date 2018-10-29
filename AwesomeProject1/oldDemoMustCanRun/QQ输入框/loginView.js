    import  React,{Component} from 'react'
    import {
        AppRegisty,
        StyleSheet,
        Text,
        View,
        Image,
        TextInput
    } from 'react-native'

    var dimensions = require('Dimensions');
    var {width,height} = dimensions.get('window');

    class loginView extends Component{
        render(){
          return(
              <View style={styles.container} >
                  <Image source={require('./img/icon.png')} style={styles.iconStyle}  cont></Image>
                  <TextInput placeholder={'请输入用户名'} style={styles.inputTextStyle} />
                  <TextInput placeHolder={'请输入密码'} password={true} style={styles.inputTextStyle} />
                  <View style={styles.loginBtnStyle}>
                      <Text style={{color:'white'}}>登录1</Text>
                  </View>
                  {/*设置*/}
                  <View style={styles.settingStyle}>
                      <Text style={{color:'red'}}>无法登录</Text>
                      <Text>小白用户</Text>
                  </View>


                  {/*其他的登录方式*/}
                  <View style={styles.otherLoginStyle}>
                      <Text>其他登录方式</Text>
                      <Image source={require('./img/icon3.png')} style={styles.otherLoginImageStyle}></Image>
                      <Image source={require('./img/icon7.png')} style={styles.otherLoginImageStyle}></Image>
                      <Image source={require('./img/icon8.png')} style={styles.otherLoginImageStyle}></Image>

                  </View>


              </View>
        )  ;
        }
    }

    const  styles = StyleSheet.create({
        container:{
            flex:1,
            alignItems:'center',
            backgroundColor:'red',
            marginTop: 50,
            backgroundColor: '#dddddd',
            padding: 10,

        },
        iconStyle:{
            marginTop:60,
            marginBottom:50,
            width:80,
            height:80,
            borderRadius:40,
            borderColor: 'white'

        },
        inputTextStyle:{
            marginTop:1,
            width:width,
            height: 38,
            textAlign: 'center',
            backgroundColor:'white',


        },
        loginBtnStyle:{
            marginTop:40,
            marginBottom:20,
            backgroundColor:'blue',
                      borderRadius:5,
            width:width-20,
                      textAlign: 'center',
                      height:40,
            alignItems: 'center',
            justifyContent: 'center'

        },
        settingStyle:{
            flexDirection: 'row',
            justifyContent:'space-between',
            width:width*0.9
        },
        otherLoginStyle:{
            flexDirection: 'row',
            justifyContent:'space-between',
            width:width*0.9,
            position: 'absolute',
            bottom:20,
            alignItems:'center',
            left:10
        },
        otherLoginImageStyle:{
            borderRadius:25,
            width:50,
            height:50
        }


    });

    module.exports = loginView;