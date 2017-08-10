/**
 * Created by yanlin.yyl.
 */
'use strict';

import  {
    View,
    Text,
    Image,
    TouchableHighlight,
    StyleSheet,
    NativeModules
} from 'react-native';

import React, {Component} from 'react';

import HeadViewWithLeftBtn from '../common/HeadViewWithLeftBtn';
import RadioButton from '../cources/RadioButton';
var ReactModule = NativeModules.ReactModule;

import ListLine from '../common/ListLine';
import DatePicker from 'react-native-datepicker'


export default class BookPage extends Component {
    //noinspection JSAnnotator
    constructor(props: Object) {
        super(props)
        this.state = {
            instrumentType: [],
            courceType: []
        }
    }

    componentDidMount() {
        this._getCourceList();
        this._getInstrumentList();
    }
    _getCourceList = function () {
        var context = this;
        ReactModule.fetch("get",{api:"/dictionaries/findByCode.do?code=CLASS_TYPE"},function (error, response) {
            console.log('ihg /dictionaries/findByCode.do:CLASS_TYPE ', response)
            if (error){

            }else {
                let list = response.data.list;
                for (let i = 0; i < list.length; i++){
                    list[i].key = '' + i;
                    list[i].isSelected = false;

                }
                context.setState({
                    courceType: list
                });
            }
        });
    }
    _getInstrumentList = function () {
        var context = this;
        ReactModule.fetch("get",{api:"/course/teacherClassType.do?teacherUserId="+this.props.id},function (error, response) {
            console.log('ihg /course/teacherClassType.do', response)
            if (error){

            }else {
                let list = response.data.list;
                for (let i = 0; i < list.length; i++){
                    list[i].key = '' + i;
                    list[i].isSelected = false;
                    list[i].name = list[i].NAME;
                    list[i].code = list[i].CODE;
                }
                context.setState({
                    instrumentType: list
                });
            }
        });
    }





    _onCourceItemSelected(index){
        alert('dd' + index)
    }
    _onInstrumentItemSelected(index){
        alert('dd33' + index)
    }
    render() {
        return (
            <View>
                <HeadViewWithLeftBtn title = "约课"></HeadViewWithLeftBtn>
                <Text style={styles.radioTitle}>乐器类别</Text>
                <RadioButton datas = {this.state.instrumentType} onItemSelected={(index) => this._onInstrumentItemSelected(index)}></RadioButton>
                <ListLine></ListLine>
                <Text style={styles.radioTitle}>教学类型</Text>
                <RadioButton datas = {this.state.courceType} onItemSelected={(index) => this._onCourceItemSelected(index)}></RadioButton>
                <ListLine></ListLine>
                <Text style={styles.radioTitle}>预约上课时间</Text>
                <DatePicker
                    style = {styles.datePickStyle}
                    date={this.state.date}
                    mode="datetime"
                    placeholder="请选择上课时间"
                    format="YYYY-MM-DD HH:MM"
                    minDate="2016-05-01"
                    confirmBtnText="确定"
                    cancelBtnText="取消"
                    iconSource = {require('../../img/Home/icon_search.png')}
                    customStyles={{
                        dateTouch:{
                            marginLeft: 20,
                            marginRight:20,
                            width: 300
                        },
                        dateIcon: {
                            position: 'absolute',
                            right: 0,
                            top: 4,
                            marginLeft: 0
                        },
                        dateInput:{
                            borderWidth: 0

                        },
                        dateTouchBody: {
                            marginLeft: 20,
                            marginRight:20,
                            width: 310,
                            height: 32,
                            borderWidth: 0,
                            borderRadius: 5,
                            backgroundColor: '#eee'
                        }
                        // ... You can check the source to find the other keys.
                    }}
                    onDateChange={(date) => {this.setState({date: date})}}
                />
                <ListLine></ListLine>
                <TouchableHighlight underlayColor = '#eee' style={styles.bookBtn} onPress={()=>this._onBookClick()}>
                    <Text style={styles.btnText}>提交</Text>
                </TouchableHighlight>
            </View>
        );
    }


    _onBookClick() {
        // console.log('ihg',"book");
    }
}

const styles = StyleSheet.create({
    btnText:{
        fontSize:16,
        color: '#666',
        marginLeft: 10
    },
    bookBtn:{
        marginTop:100,
        borderWidth:1,
        height: 48,
        marginLeft: 20,
        marginRight:20,
        borderRadius: 10,
        borderColor: "#999",
        alignItems:'center',
        justifyContent: 'center'
    },
    radioTitle: {
        marginLeft: 20,
        marginTop: 10,
        marginBottom: 10,
        fontSize: 16,
        color:'#666'
    },
    datePickStyle: {
        marginLeft: 20,
        marginRight:20,
        height: 32,
        borderRadius: 5,
        backgroundColor: '#eee'
    }


});