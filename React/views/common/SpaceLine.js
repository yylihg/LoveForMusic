'use strict';

import  {
    View,
    StyleSheet
} from 'react-native';

import React, {Component} from 'react';

class SpaceLine extends Component {

    render() {
        return (
            <View style={styles.lineStyle}></View>
        );
    }
}

const styles = StyleSheet.create({
    lineStyle: {
        maxHeight: 10,
        backgroundColor: '#eee',
        height: 10
    }
});

export default SpaceLine;