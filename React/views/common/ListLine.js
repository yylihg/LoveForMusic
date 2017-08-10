'use strict';

import  {
    View,
    StyleSheet
} from 'react-native';

import React, {Component} from 'react';

class ListLine extends Component {

    render() {
        return (
            <View style={styles.lineStyle}></View>
        );
    }
}

const styles = StyleSheet.create({
    lineStyle: {
        height: 0.5,
        backgroundColor: '#ccc',
        marginRight: 10,
        marginLeft: 10
    }
});

export default ListLine;