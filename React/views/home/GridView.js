/**
 * Created by yanlin.yyl on 2017/4/17.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    Image,
    TouchableOpacity,
    AlertIOS
} from 'react-native';

var Dimensions = require('Dimensions');
var {width} = Dimensions.get('window');
var {height} = Dimensions.get('window');

var shareData = require('./shareData.json').data;

var GridView = React.createClass({

    getDefaultProps(){
        return{
            // ..ListView.propTypes
        }
    },

    getInitialState(){

        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        return {
            dataSource:ds.cloneWithRows(shareData)
        }
    },


    render(){
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}
                contentContainerStyle={styles.listStyle}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
            />
        )
    },

//    返回Item试图
    renderRow(rowData,sectionId,rowId,hItemId){
        return(
            <TouchableOpacity
                style={styles.itemViewStyle}
                onPress={() => {AlertIOS.alert(rowId)}}
            >
                <View style={styles.itemViewStyle}>
                    <Image source={{uri:rowData.icon}} style={styles.itemIconStyle}/>
                    <Text style={styles.itemTitleStyle}>{rowData.title}</Text>
                </View>
            </TouchableOpacity>
        )
    }
})

const styles = StyleSheet.create({
    listStyle:{
        flexDirection:'row', //改变ListView的主轴方向
        flexWrap:'wrap', //换行
    },
    itemViewStyle:{
        alignItems:'center', //这里要注意，如果每个Item都在外层套了一个 Touchable的时候，一定要设置Touchable的宽高
        width: width / 3,
        height:100
    },
    itemIconStyle:{
        width:60,
        height:60
    },
    itemTitleStyle:{
        marginTop:8
    }
});

module.exports = GridView;