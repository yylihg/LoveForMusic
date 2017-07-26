/**
 * 乐器单元格
 * Created by ihg on 2017/4/15.
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
import screen from '../../constants/screen';

class InstrumentCell extends Component  {
    /**
     TouchableHighlight触摸点击高亮效果
     underlayColor:当触摸或者点击控件的时候显示出的颜色
     activeOpacity:触摸时显示的不透明度
     */
    render() {
        return (
            <TouchableHighlight
                style={styles.container}
                onPress={this.props.onPress}
                underlayColor="rgb(210, 230,255)">
                <View style={styles.container}>
                    <Image style={styles.iconImg} source={this.props.imageUrl}/>
                    <Text style={styles.showText}>{this.props.title}</Text>
                </View>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: screen.width / 4 - screen.onePixel,
        height: screen.width / 4,
        backgroundColor: 'white',
        borderBottomWidth: screen.onePixel,
        borderRightWidth: screen.onePixel,
        borderColor: '#d90'
    },
    iconImg: {
        width: 38,
        height: 38,
        marginBottom: 2
    },
    showText: {
        fontSize: 12
    }
});

export default InstrumentCell;