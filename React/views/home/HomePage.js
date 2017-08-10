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
    TextInput,
    Alert,
    NativeModules
} from 'react-native'

import GridView from './GridView';
import HotTeacherList from './HotTeacherList';
import HotVideoList from './HotVideoList';
import SpaceLine from '../common/SpaceLine';

var ReactModule = NativeModules.ReactModule;
var findNodeHandle = require('findNodeHandle');

var TopScreen = require('./TopScreen');
var discount ='http://api.meituan.com/group/v1/deal/topic/discount/city/1?ci=1&client=iphone&movieBundleVersion=100&msid=48E2B810-805D-4821-9CDD-D5C9E01BC98A2015-06-17-14-50363&userid=10086&utm_campaign=AgroupBgroupD100Fab_chunceshishuju__a__a___b1junglehomepagecatesort__b__leftflow___ab_gxhceshi__nostrategy__leftflow___ab_gxhceshi0202__b__a___ab_pindaochangsha__a__leftflow___ab_xinkeceshi__b__leftflow___ab_gxtest__gd__leftflow___ab_gxh_82__nostrategy__leftflow___ab_pindaoshenyang__a__leftflow___i_group_5_2_deallist_poitype__d__d___ab_b_food_57_purepoilist_extinfo__a__a___ab_trip_yidizhoubianyou__b__leftflow___ab_i_group_5_3_poidetaildeallist__a__b___ab_waimaizhanshi__b__b1___a20141120nanning__m1__leftflow___ab_pindaoquxincelue__a__leftflow___ab_i_group_5_5_onsite__b__b___ab_i_group_5_6_searchkuang__a__leftflow&utm_content=4B8C0B46F5B0527D55EA292904FD7E12E48FB7BEA8DF50BFE7828AF7F20BB08D&utm_medium=iphone&utm_source=AppStore&utm_term=5.7&uuid=4B8C0B46F5B0527D55EA292904FD7E12E48FB7BEA8DF50BFE7828AF7F20BB08D&version_name=5.7';


export default class HomeView extends Component {

    _onPressButton(id) {
        console.log('ihg',id +  "You tapped the button!");
    }
    //点击事件
    _onMenuClick(title, tag) {
        Alert.alert('提示', '你点击了:' + title + " Tag:" + tag);
    }

    //noinspection JSAnnotator
    constructor(props: Object) {
        super(props)
        this.state = {
            discounts: [],
            instruments: [
                { title: '吉他', image: require('../../img/Home/icon_guitar.png') },
                { title: '贝斯', image: require('../../img/Home/icon_bass.png') },
                { title: '架子鼓', image: require('../../img/Home/icon_drum.png') },
                { title: '钢琴', image: require('../../img/Home/icon_piano.png') }
            ],
            teachers: [],
            videos: []
        }
    }

    componentDidMount() {
        // this.requestDiscount();
        this._getTop10Teacher();
        this._getTop10Video();
    }


    _getTop10Teacher = function () {
        var context = this;
        ReactModule.fetch("get",{api:"/teacher/findTop10.do"},function (error, response) {
            if (error){

            }else {
                console.log("ihg top10 teacher:", response);
                let teacherTemp = response.data.list;
                let teacherList = context.state.teachers;
                for (let i = 0; i < teacherTemp.length; i++){
                    teacherTemp[i].key = i + "";
                    teacherList.push(teacherTemp[i]);
                }
                context.setState({
                    teachers: teacherList
                });
            }
        });
    }
    _getTop10Video = function () {
        var context = this;
        ReactModule.fetch("get",{api:"/freeVideo/findTop10.do"},function (error, response) {
            if (error){

            }else {
                // alert('freeVideo:' + JSON.stringify(response));
                // console.log("ihg top10 video:", response);
                let videosTemp = response.data.list;
                let videoList = context.state.videos;
                for (let i = 0; i < videosTemp.length; i++){
                    videosTemp[i].key = i + "";
                    videoList.push(videosTemp[i]);
                }
                context.setState({
                    videos: videoList
                });
            }
        });
    }



    render() {
        return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.bodyContainer}>
                <View style={styles.viewPager}>
                    <TopScreen />
                </View>
                <GridView datas={this.state.instruments} onGridSelected={(index) => this.onGridSelected(index)}/>
                <View style={styles.hotTeacher}>
                    <Text style={styles.hotTitle}>热门推荐</Text>
                    <TouchableHighlight underlayColor = '#fff'>
                        <Text  style={styles.hotMore}>更多></Text>
                    </TouchableHighlight>
                </View>
                <HotTeacherList datas={this.state.teachers} onItemSelected={(index) => this.onTeacherItemSelected(index)}/>
                <View style={styles.hotTeacher}>
                    <Text style={styles.hotTitle}>热门视频</Text>
                    <TouchableHighlight underlayColor = '#fff'>
                        <Text  style={styles.hotMore}>更多></Text>
                    </TouchableHighlight>
                </View>
                <HotVideoList datas={this.state.videos} onItemSelected={(index) => this.onVideoItemSelected(index)}/>
            </ScrollView>
            <View style={styles.searchBar }>
                {/*<TouchableHighlight style={{overflow:'hidden'}} underlayColor = '#eee' onPress={()=>this._onPressButton(1)}>*/}
                {/*<Text style={styles.searchBtn}>杭州</Text>*/}
                {/*</TouchableHighlight>*/}
                <TextInput placeholder="请输入关键字" placeholderTextColor= '#fff' style={styles.searchInput}/>
                <Image style={styles.searchImg} source={require('../../img/Home/icon_search.png')} />

            </View>
        </View>

        );
    }

    //noinspection JSAnnotator
    onGridSelected(index: number) {
        let instrument = this.state.instruments[index]
        Alert.alert('提示', '你点击了:' + JSON.stringify(instrument));
    }
    //noinspection JSAnnotator
    onTeacherItemSelected(index: number) {
        ReactModule.podViewController(findNodeHandle(this));
        // let teacher = this.state.teachers[index]
        // Alert.alert('提示', '你点击了:' + JSON.stringify(teacher));
    }
    //noinspection JSAnnotator
    onVideoItemSelected(index: number) {
        ReactModule.pushViewController(findNodeHandle(this));
        // let video = this.state.videos[index]
        // Alert.alert('提示', '你点击了:' + JSON.stringify(video));
    }

}

const styles = StyleSheet.create({
    container: {
        marginTop: 20
    },
    bodyContainer:{
        paddingBottom: 30,
        marginTop: -20,
    },
    searchBar: {
        flexDirection: 'row',
        backgroundColor: '#eeeeee66',
        position: 'absolute',
        top: 0,
        left:0,
        right: 0,
        alignItems: 'center',
        height: 48,
    },
    searchBtn: {
        marginRight: 5,
        marginLeft: 5,
        backgroundColor: '#900',
        textAlign: 'center'
    },
    searchInput: {
        paddingLeft:15,
        flex:1,
        height: 36,
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: '#b6b6b699',
        marginTop:6,
        borderRadius: 10,
        fontSize: 14,
        color: '#fff'
    },
    searchImg: {
        position: 'absolute',
        right:30,
        height: 20,
        width:20,
        top: 14
    },
    viewPager: {
        height: 150
    },
    instrumentCell: {
        height: 100,
        width: 100,
    },
    hotTeacher: {
        flexDirection: 'row',
        height:30,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: '#eee',
    },
    hotTitle:{
        color: '#666',
        flex:1,
        fontSize: 14,
        marginLeft:20
    },
    hotMore:{
        color: '#666',
        fontSize: 14,
        marginRight: 10
    }
});

