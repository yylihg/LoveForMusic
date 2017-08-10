/**
 * Created by yanlin.yyl.
 */
'use strict';

import  {
    View,
    Text,
    TouchableHighlight,
    Animated,
    FlatList,
    StyleSheet,
    NativeModules,
    Image
} from 'react-native';


import React, {Component} from 'react';
import ListLine from '../common/ListLine';
var ReactModule = NativeModules.ReactModule;
const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);
let currentIndex = 0;
let totalCount = 0;
let currentPage = 0;
import HeadViewWithLeftBtn from '../common/HeadViewWithLeftBtn';
class TeacherDemoVideoPage extends Component {

    //noinspection JSAnnotator
    constructor(props: Object) {
        super(props)
        this.state = {
            videos: []
        }
    }

    componentDidMount() {
        this._getVideoList(currentPage);
    }
    _getVideoList = function (page) {
        var context = this;
        ReactModule.fetch("get",{api:"/freeVideo/list.do?start="+page+"&pageSize=10"+ '&teacherUserId='+this.props.id},function (error, response) {
            console.log('ihg TeacherDemoVideoView /freeVideo/list.do: ', response)
            if (error){
                currentPage -=1;
            }else {
                totalCount = response.data.total;
                currentIndex = context.state.videos.length;
                let videoTemp = response.data.list;
                let videoList = currentPage == 0? []:context.state.videos;
                for (let i = 0; i < videoTemp.length; i++){
                    videoTemp[i].key = currentIndex + "";
                    currentIndex += 1;
                    videoList.push(videoTemp[i]);
                }
                context.setState({
                    videos: videoList
                });
            }
        });
    }


    render() {
        return (
            <View>
                <HeadViewWithLeftBtn title = "试看视频"></HeadViewWithLeftBtn>
                <ListLine style ={styles.listItemLine}/>
                <AnimatedFlatList
                    data={this.state.videos}
                    renderItem={this._renderItemComponent}
                    onEndReached={this._onEndReached}
                    onRefresh={this._onRefresh}
                    refreshing={false}
                />
            </View>
        );
    }

    _onItemPress(item) {
        alert('click:' + JSON.stringify(item))
    }

    _renderItemComponent = ({item, separators}) => {
        return (
            <TouchableHighlight underlayColor = '#eee' onPress={()=>this._onItemPress(item)}>
                <View>
                    <View style={styles.listItemContainer}>
                        <Image style={styles.listItemImage} source={{uri: item.PRIVIEW_IMG_URL}}/>
                        <View style={styles.listItemText}>
                            <Text style={styles.listItemTitle}>{item.VIDEO_NAME}</Text>
                            <Text style={styles.listItemDes}>{item.VIDEO_REMARK}</Text>
                        </View>
                    </View>
                    <ListLine style ={styles.listItemLine}/>
                </View>
            </TouchableHighlight>
        );

    };
    _onEndReached = () => {
        if (this.state.videos.length < 9) {
            return;
        }
        if (this.state.videos.length < totalCount){
            currentPage += 1;
            this._getVideoList(currentPage);
        }
    };
    _onRefresh = () => {
        currentPage = 0;
        this._getVideoList(currentPage);
    }


    doSearch = (key) => {
        console.log("ihg", "demoVideoView " + key);
    }
}

const styles = StyleSheet.create({
    listItemContainer: {
        height:66,
        flexDirection: 'row'
    },
    listItemImage: {
        marginLeft: 10,
        width: 68,
        height:50,
        marginTop: 8,
        marginBottom:8
    },
    listItemText: {
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
        justifyContent: 'center'
    },
    listItemTitle: {
        fontSize: 14,
        color: '#666'
    },
    listItemDes: {
        fontSize: 12,
        marginTop: 8,
        color: '#999'
    },
    listItemLine: {
        position:'absolute',
        bottom: 0
    }
});

export default TeacherDemoVideoPage;