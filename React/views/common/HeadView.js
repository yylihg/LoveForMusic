/**
 * Created by yanlin.yyl.
 */
'use strict';

import  {
    View,
    Text,
    StyleSheet
} from 'react-native';

import React, {Component} from 'react';

class HeadView extends Component {

    render() {
        return (
            <View style={styles.headerView}>
                <Text style={styles.headerViewTitle}>{this.props.title}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
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
    }
});

export default HeadView;