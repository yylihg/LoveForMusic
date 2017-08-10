/**
 * Created by yanlin.yyl.
 */
'use strict';

import  {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableHighlight,
    NativeModules
} from 'react-native';

import React, {Component} from 'react';
var ReactModule = NativeModules.ReactModule;
var findNodeHandle = require('findNodeHandle');
export default class HeadViewWithLeftBtn extends Component {

    _back = function () {
        ReactModule.podViewController(findNodeHandle(this));
    }


    render() {
        return (
            <View style={styles.headerView}>
                <TouchableHighlight underlayColor = '#eee' onPress={()=>this._back()}>
                    <View style={styles.backBtn} onpress>
                        <Image style={styles.backImg} source={require('../../img/icon_back.png')} />
                    </View>
                </TouchableHighlight>
                <Text style={styles.headerViewTitle}>{this.props.title}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    headerView:{
        paddingTop: 20,
        backgroundColor : '#0168ae',
        height: 70,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerViewTitle:{
        flex: 1,
        marginRight: 40,
        fontSize: 18,
        textAlign: 'center',
        color: "#fff"
    },
    backBtn:{
        height:40,
        width:40,
        justifyContent:'center',
        alignItems: 'center'
    },
    backImg: {
        height: 15,
        width:15
    }
});