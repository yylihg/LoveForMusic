/**
 * Created by yanlin.yyl on 2017/4/4.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    Alert,
    TouchableHighlight,
    NativeModules
} from 'react-native'
var ReactModule = NativeModules.ReactModule;
var findNodeHandle = require('findNodeHandle');
export default class IndividualView extends Component {
    _onPressButton(id) {
        switch (id){
            case 1:
                ReactModule.pushReactViewController(findNodeHandle(this), "CollectListPage", {});
                break
            case 2:
                ReactModule.pushReactViewController(findNodeHandle(this), "BoughtVideoListPage", {});
                break
            case 3:
                ReactModule.pushReactViewController(findNodeHandle(this), "CourcesListPage", {});
                break
            case 5:
                this._logout()
                break;
            default:
                break;
        }
    }

    _logout(){
       Alert.alert(
            '您真的要退出么？',
            "",
            [
                {text: '取消', onPress: () => {}},
                {text: '确定', onPress: () => {
                    ReactModule.podViewController(findNodeHandle(this));
                }},
            ]
        )

    }

    render() {
        return (
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.headerView}>
                    <Text style={styles.headerViewTitle}>我的</Text>
                </View>
                <View style={styles.headContainer}>
                    <Image style={styles.iconImg} source={require('../../img/icon_logo.png')} />
                </View>
                <View style={styles.btnLine}></View>
                <TouchableHighlight underlayColor = '#eee' onPress={()=>this._onPressButton(1)}>
                    <View style={styles.btnStyle}>
                        <Image style={styles.btnImg} source={require('../../img/me/icon_me_collect.png')} />
                        <Text style={styles.btnText}>我的收藏</Text>
                        <Image style={styles.rightArrow} source={require('../../img/icon_right_arrow.png')} />
                    </View>
                </TouchableHighlight>
                <View style={styles.btnLine}></View>
                <TouchableHighlight underlayColor = '#eee' onPress={()=>this._onPressButton(2)}>
                    <View style={styles.btnStyle}>
                        <Image style={styles.btnImg} source={require('../../img/me/icon_me_video.png')} />
                        <Text style={styles.btnText}>购买的视频</Text>
                        <Image style={styles.rightArrow} source={require('../../img/icon_right_arrow.png')} />
                    </View>
                </TouchableHighlight>
                <View style={styles.btnLine}></View>
                <TouchableHighlight underlayColor = '#eee' onPress={()=>this._onPressButton(3)}>
                    <View style={styles.btnStyle}>
                        <Image style={styles.btnImg} source={require('../../img/me/icon_me_cources.png')} />
                        <Text style={styles.btnText}>课程列表</Text>

                        <Image style={styles.rightArrow} source={require('../../img/icon_right_arrow.png')} />
                    </View>
                </TouchableHighlight>
                <View style={styles.btnLine}></View>
                <TouchableHighlight underlayColor = '#eee' onPress={()=>this._onPressButton(4)}>
                    <View style={styles.btnStyle}>
                        <Image style={styles.btnImg} source={require('../../img/me/icon_me_info.png')} />
                        <Text style={styles.btnText}>个人信息设置</Text>

                        <Image style={styles.rightArrow} source={require('../../img/icon_right_arrow.png')} />
                    </View>
                </TouchableHighlight>
                <View style={styles.btnLine}></View>
                <TouchableHighlight underlayColor = '#eee' onPress={()=>this._onPressButton(5)}>
                    <View style={styles.btnStyle}>
                        <Image style={styles.btnImg} source={require('../../img/me/icon_me_logout.png')} />
                        <Text style={styles.btnText}>退出登录</Text>
                    </View>
                </TouchableHighlight>
                <View style={styles.btnLine}></View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    headerView:{
        backgroundColor : '#0168ae',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerViewTitle:{
        marginTop:10,
        fontSize: 18,
        color: "#fff"
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    headContainer:{
        height: 200,
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconImg:{
        height:80,
        width:80
    },
    btnImg:{
        height:20,
        width:20,
        marginLeft: 20
    },
    rightArrow: {
        width: 10,
        height:10,
        marginRight: 20
    },
    btnText:{
        flex: 1,
        fontSize:16,
        color: '#666',
        marginLeft: 10
    },
    btnLine:{
        backgroundColor: '#ccc',
        height: 0.5,
        marginLeft: 10,
        marginRight: 10
    },
    btnStyle:{
        flexDirection: 'row',
        height: 48,
        alignItems:'center'
    },
    btnLoginOut:{
        marginTop:100,
        borderWidth:1,
        height: 48,
        marginLeft: 20,
        marginRight:20,
        borderRadius: 10,
        borderColor: "#999",
        alignItems:'center',
        justifyContent: 'center'
    }
});

