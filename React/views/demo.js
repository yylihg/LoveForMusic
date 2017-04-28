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
export default class Home extends Component {
    _onPressButton(id) {
        console.log('ihg',id +  "You tapped the button!");
    }

    render() {
        return (
            <ScrollView contentContainerStyle={styles.container}>

            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

