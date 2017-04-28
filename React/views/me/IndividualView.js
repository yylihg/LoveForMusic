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
    TouchableHighlight,
} from 'react-native'
export default class IndividualView extends Component {
    _onPressButton(id) {
        console.log('ihg',id +  "You tapped the button!");
    }

    render() {
        return (
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.headContainer}>
                    <Image style={styles.iconImg} source={require('../../res/icon_app.png')} />
                    <Text>音为爱</Text>
                </View>
                <View style={styles.btnLine}></View>
                <TouchableHighlight underlayColor = '#eee' onPress={()=>this._onPressButton(1)}>
                    <View style={styles.btnStyle}>
                        <Image style={styles.btnImg} source={require('../../res/icon_app.png')} />
                        <Text style={styles.btnText}>收藏</Text>
                    </View>
                </TouchableHighlight>
                <View style={styles.btnLine}></View>
                <TouchableHighlight underlayColor = '#eee' onPress={()=>this._onPressButton(2)}>
                    <View style={styles.btnStyle}>
                        <Image style={styles.btnImg} source={require('../../res/icon_app.png')} />
                        <Text style={styles.btnText}>视频</Text>
                    </View>
                </TouchableHighlight>
                <View style={styles.btnLine}></View>
                <TouchableHighlight underlayColor = '#eee' onPress={()=>this._onPressButton(3)}>
                    <View style={styles.btnStyle}>
                        <Image style={styles.btnImg} source={require('../../res/icon_app.png')} />
                        <Text style={styles.btnText}>课程</Text>
                    </View>
                </TouchableHighlight>
                <View style={styles.btnLine}></View>
                <TouchableHighlight underlayColor = '#eee' onPress={()=>this._onPressButton(4)}>
                    <View style={styles.btnStyle}>
                        <Image style={styles.btnImg} source={require('../../res/icon_app.png')} />
                        <Text style={styles.btnText}>个人信息设置</Text>
                    </View>
                </TouchableHighlight>
                <View style={styles.btnLine}></View>

                <TouchableHighlight underlayColor = '#eee' style={styles.btnLoginOut} onPress={()=>this._onPressButton(5)}>
                    <Text style={styles.btnText}>退出登陆</Text>
                </TouchableHighlight>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
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
        height:35,
        width:35,
        marginLeft: 20
    },
    btnText:{
        fontSize:16,
        color: '#666',
        marginLeft: 10
    },
    btnLine:{
        backgroundColor: '#ccc',
        height: 1,
        marginLeft: 5,
        marginRight: 5
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

