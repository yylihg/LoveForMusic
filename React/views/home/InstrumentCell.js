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

import React, {
    PropTypes,
    Component
} from 'react';


export default class InstrumentCell extends React.Component  {

    static propTypes = {
        renderIcon: PropTypes.number.isRequired,  // 图片,加入.isRequired即为必填项
        showText: PropTypes.string,  // 显示标题文字
        tag: PropTypes.string,  // Tag
        onClick: PropTypes.func  // 回调函数
    };

    //JSX中，利用<>声明一个控件，在将其转换为真正的Native控件时，会首先调用其对应的JS源码，
    //而JS源码首先会执行带有props的构造函数，此构造函数会将我们在JSX中写到的属性，存在当前类的props中。
    constructor(props) {
        super(props);
        this._onClick = this._onClick.bind(this);  // 需要在回调函数中使用this,必须使用bind(this)来绑定
    }

    //回调函数
    _onClick() {
        if (this.props.onClick) {// 在设置了回调函数的情况下,对应propTypes中onClick:PropTypes.func
            this.props.onClick(this.props.showText, this.props.tag);  // 回调Title和Tag
        }
    }

    /**
     TouchableHighlight触摸点击高亮效果
     underlayColor:当触摸或者点击控件的时候显示出的颜色
     activeOpacity:触摸时显示的不透明度
     */
    render() {
        return (
            <TouchableHighlight
                onPress={this._onClick}
                underlayColor="rgb(210, 230,255)"
                activeOpacity={0.5} style={{flex:1}}>
                <View style={styles.container}>
                    <Image style={styles.iconImg} source={this.props.renderIcon}/>
                    <Text style={styles.showText}>{this.props.showText}</Text>
                </View>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop:5,
        paddingBottom:5,
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