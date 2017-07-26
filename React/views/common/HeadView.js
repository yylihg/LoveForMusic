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
            <View style={styles.headViewContainer}>
                <Text>{this.props.title}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    headViewContainer: {
        marginTop: 20,
        height: 40,
        backgroundColor: '#098',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default HeadView;