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
    TextInput,
    Alert
} from 'react-native'

var TopScreen = require('./TopScreen');
import InstrumentCell from './InstrumentCell';

var Dimensions = require('Dimensions');
var {width} = Dimensions.get('window');

export default class HomeView extends Component {

    _onPressButton(id) {
        console.log('ihg',id +  "You tapped the button!");
    }
    //点击事件
    _onMenuClick(title, tag) {
        Alert.alert('提示', '你点击了:' + title + " Tag:" + tag);
    }

    render() {
        return (
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.searchBar}>
                    <TouchableHighlight underlayColor = '#eee' onPress={()=>this._onPressButton(1)}>
                            <Text style={styles.searchBtn}>杭州</Text>
                    </TouchableHighlight>
                    <TextInput style={styles.searchInput}/>
                </View>
                <View style={styles.viewpager}>
                    <TopScreen />
                </View>
                {/*<InstrumentCell style={styles.instrumentCell} renderIcon={require('../../res/icon_app.png')}*/}
                            {/*showText={'我的关注'} tag={'wdgz'}*/}
                            {/*onClick={this._onMenuClick}/>*/}
                <View style={styles.instrumentGridList}>
                    <View style={styles.instrumentGridListItem}></View>
                    <View style={styles.instrumentGridListItem}></View>
                    <View style={styles.instrumentGridListItem}></View>
                    <View style={styles.instrumentGridListItem}></View>
                </View>



            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 48,
    },
    searchBtn: {
        marginRight: 5,
        marginLeft: 5,
        backgroundColor: '#900',
        textAlign: 'center'
    },
    searchInput: {
        flex:1,
        height: 36,
        borderColor: 'gray',
        borderWidth: 1,
        marginTop:6
    },
    viewpager: {
        height: 150
    },
    instrumentCell: {
        height: 100,
        width: 100,
        backgroundColor:'#009'
    },
    instrumentGridList: {
        flexWrap: 'wrap',
        flexDirection:'row'
    },
    instrumentGridListItem: {
        marginLeft:4,
        marginTop:4,
        width: (width-20)/4,
        height: (width-20)/4,
        backgroundColor: '#076'
    }
});

