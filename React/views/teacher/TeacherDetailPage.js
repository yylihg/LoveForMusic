/**
 * Created by yanlin.yyl.
 */
'use strict';

import  {
    View,
    Text,
    Image,
    TouchableHighlight,
    NativeModules,
    StyleSheet
} from 'react-native';

import screen from '../../constants/screen';
import HeadViewWithLeftBtn from '../common/HeadViewWithLeftBtn';
import React, {Component} from 'react';
var ReactModule = NativeModules.ReactModule;
var findNodeHandle = require('findNodeHandle');

export default class TeacherDetailView extends Component {

    // componentDidMount() {
    //     alert('this.props:' + JSON.stringify(this.props));
    // }
    //noinspection JSAnnotator
    constructor(props: Object) {
        super(props)
        this.state = {
            teacher: {}
        }
    }

    componentDidMount() {
        this._getTeacherDetail(this.props.id);
    }

    _getTeacherDetail = function (id) {
        var context = this;
        ReactModule.fetch("get", {api: "/teacher/detail.do?userId=" + id }, function (error, response) {
            console.log('ihg /teacher/detail.do: ', response.data.data)
            context.setState({
                teacher:response.data.data
            });
            // alert('this.props:' + JSON.stringify(response));
        });
    }

    _onGetDemoVideo(){
        ReactModule.pushReactViewController(findNodeHandle(this), "TeacherDemoVideoPage", {id: this.props.id});
    }

    _selectCourse(){
        ReactModule.pushReactViewController(findNodeHandle(this), "BookPage", {id: this.props.id});
    }

    render() {
        return (
            <View>
                <HeadViewWithLeftBtn title = "教师详细信息"></HeadViewWithLeftBtn>
                <View style={styles.bodyContainer}>
                    <Image style={styles.imageType} source={{uri: this.state.teacher.PHOTO0}}></Image>
                    <View style={{marginRight: 10, flex: 1}}>
                        <Text style={styles.rowTitle}>{this.state.teacher.NICK_NAME}</Text>
                        <View style={styles.rowContainer}>
                            <Text style={styles.rowTitle}>个性签名:</Text>
                            <Text style={styles.rowDes} >{this.state.teacher.PERSONAL_SIGN}</Text>
                        </View>
                        <View style={styles.rowContainer}>
                            <Text style={styles.rowTitle}>教学经验:</Text>
                            <Text style={styles.rowDes} >{this.state.teacher.TEACH_EXPERIENCE}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.buttonContain}>
                    <TouchableHighlight underlayColor = '#eee' onPress={()=>this._onGetDemoVideo()}>
                        <View style={styles.buttonStyle}>
                            <Text style={styles.buttonText}>试看视频</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor = '#eee' onPress={()=>this._selectCourse()}>
                        <View style={styles.buttonStyle}>
                            <Text style={styles.buttonText}>约课</Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    bodyContainer: {
        flexDirection: 'row',
        marginTop:10
    },
    imageType: {
        marginLeft: 10,
        marginRight: 10,
        height: 84,
        width: 84
    },
    rowContainer: {
        marginTop: 8,
        flexDirection:'row'
    },
    rowTitle: {
        color: '#666',
        fontSize: 16
    },
    rowDes: {
        marginLeft: 5,
        flex: 1,
        color: '#999',
        fontSize: 16
    },
    buttonContain: {
        flexDirection: 'row',
        height: 32,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonStyle: {
        borderRadius: 5,
        alignItems:'center',
        justifyContent:'center',
        width:screen.width/2 - 20,
        marginLeft: 10,
        height:32,
        backgroundColor: '#0168ae'
    },
    buttonText: {
        fontSize: 14,
        color: '#fff'
    }

});