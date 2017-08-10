/**
 * Created by yanlin.yyl.
 */
'use strict';

import  {
    View,
    TextInput,
    StyleSheet,
    Image
} from 'react-native';

import React, {Component} from 'react';

export default class SearchView extends Component {

    render() {
        return (
            <View style={styles.container}>
                <TextInput placeholder="请输入关键字" returnKeyType="search"
                           onSubmitEditing= {(event) => this.props.doSearch(event.nativeEvent.text)}
                            style={styles.searchInput}/>
                <Image style={styles.searchImg} source={require('../../img/see/icon_search_gray.png')} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    searchInput: {
        height: 36,
        marginLeft: 30,
        marginRight: 30,
        paddingLeft: 10,
        borderColor: '#ccc',
        borderRadius: 10,
        borderWidth: 0.5,
    },
    searchImg: {
        top: 15,
        position: 'absolute',
        right: 40,
        height: 20,
        width:20,
    },
});