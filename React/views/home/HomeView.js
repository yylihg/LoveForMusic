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
                { title: '美食', image: require('../../img/Home/icon_homepage_foodCategory.png') },
                { title: '电影', image: require('../../img/Home/icon_homepage_movieCategory.png') },
                { title: '酒店', image: require('../../img/Home/icon_homepage_hotelCategory.png') },
                { title: 'KTV', image: require('../../img/Home/icon_homepage_KTVCategory.png') }
            ],
            teachers: [
                { title: '这是一个测试，吴佲', image: require('../../img/Home/icon_homepage_foodCategory.png') },
                { title: '这是一个测试，吴佲', image: require('../../img/Home/icon_homepage_movieCategory.png') },
                { title: '这是一个测试，吴佲', image: require('../../img/Home/icon_homepage_hotelCategory.png') },
                { title: '这是一个测试，吴佲', image: require('../../img/Home/icon_homepage_KTVCategory.png') },
                { title: '这是一个测试，吴佲', image: require('../../img/Home/icon_homepage_default.png') }
            ],
            videos: [
                { title: '这是一个测试，吴佲', image: require('../../img/Home/icon_homepage_foodCategory.png') },
                { title: '这是一个测试，吴佲', image: require('../../img/Home/icon_homepage_movieCategory.png') },
                { title: '这是一个测试，吴佲', image: require('../../img/Home/icon_homepage_hotelCategory.png') },
                { title: '这是一个测试，吴佲', image: require('../../img/Home/icon_homepage_KTVCategory.png') },
                { title: '这是一个测试，吴佲', image: require('../../img/Home/icon_homepage_default.png') }
            ]
        }
    }

    componentDidMount() {
        // this.requestDiscount();
    }


    requestDiscount() {
        fetch(discount)
            .then((response) => response.json())
            .then((json) => {
                console.log(JSON.stringify(json));
                // this.setState({ discounts: json.data })
            })
            .catch((error) => {
                // Alert.alert(error)
            })
    }

    render() {
        return (
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.searchBar}>
                    <TouchableHighlight underlayColor = '#eee' onPress={()=>this._onPressButton(1)}>
                            <Text style={styles.searchBtn}>杭州</Text>
                    </TouchableHighlight>
                    <TextInput style={styles.searchInput}/>
                </View>
                <View style={styles.viewpager}>
                    <TopScreen />
                </View>
                <SpaceLine></SpaceLine>
                <GridView datas={this.state.instruments} onGridSelected={(index) => this.onGridSelected(index)}/>
                <SpaceLine></SpaceLine>
                <View style={styles.hotTeacher}>
                    <Text style={styles.hotTitle}>热门推荐</Text>
                    <TouchableHighlight underlayColor = '#eee'>
                        <Text  style={styles.hotMore}>查看更多></Text>
                    </TouchableHighlight>
                </View>
                <HotTeacherList datas={this.state.teachers} onItemSelected={(index) => this.onTeacherItemSelected(index)}/>
                <SpaceLine></SpaceLine>
                <View style={styles.hotTeacher}>
                    <Text style={styles.hotTitle}>视频推荐</Text>
                    <TouchableHighlight underlayColor = '#eee'>
                        <Text  style={styles.hotMore}>查看更多></Text>
                    </TouchableHighlight>
                </View>
                <HotVideoList datas={this.state.teachers} onItemSelected={(index) => this.onVideoItemSelected(index)}/>
            </ScrollView>
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
        marginTop: 20,
        paddingBottom: 70
    },
    searchBar: {
        flexDirection: 'row',
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
        flex:1,
        height: 36,
        borderColor: 'gray',
        borderWidth: 1,
        marginTop:6
    },
    viewpager: {
        height: 150
    },
    instrumentCell: {
        height: 100,
        width: 100,
        backgroundColor:'#009'
    },
    hotTeacher: {
        flexDirection: 'row',
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderBottomColor: '#eee',
        borderBottomWidth: 1
    },
    hotTitle:{
        color: '#333',
        flex:1,
        fontSize: 16,
        marginLeft:20
    },
    hotMore:{
        color: '#333',
        fontSize: 16,
        marginRight: 10
    }
});

