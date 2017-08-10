/**
 * Created by yanlin.yyl.
 */
'use strict';

import  {
    View,
    Text,
    Image,
    TouchableHighlight,
    StyleSheet
} from 'react-native';

import React, {Component} from 'react';

class HotVideoCell extends Component {

    render() {
        return (
            <TouchableHighlight
                style={styles.container}
                onPress={this.props.onPress}
                underlayColor="rgb(210, 230,255)">
                <View style={styles.container}>
                    <Image style={styles.imageIcon} source={this.props.imageUrl}/>
                    <Text style={styles.titleStyle}>{this.props.title}</Text>
                </View>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 68,
        alignItems: 'center',
        borderBottomColor: '#eee',
        borderBottomWidth: 1
    },
    imageIcon: {
        marginLeft: 20,
        height: 50,
        width: 70
    },
    titleStyle: {
        marginLeft: 10,
        color: '#666',
        fontSize: 16
    }
});

export default HotVideoCell;