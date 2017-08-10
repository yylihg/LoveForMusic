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
var ReactModule = NativeModules.ReactModule;

import HeadViewWithLeftBtn from '../common/HeadViewWithLeftBtn';
import ListLine from '../common/ListLine';
const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);
let currentIndex = 0;
let totalCount = 0;
let currentPage = 0;
class BoughtVideoListPage extends Component {
    //noinspection JSAnnotator
    constructor(props: Object) {
        super(props)
        this.state = {
            videos: []
        }
    }
    componentDidMount() {
        this._getCollectList(currentPage);
    }
    _getCollectList = function (page) {
        var context = this;
        ReactModule.fetch("get",{api:"/member/officialVideoBuy/buyList.do?start="+page+"&pageSize=10"},function (error, response) {
            if (error){
                currentPage -=1;
            }else {
                console.log("ihg BoughtVideoListPage: " ,response)
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
                <HeadViewWithLeftBtn title = "购买的视频"></HeadViewWithLeftBtn>
                <AnimatedFlatList
                    style= {styles.list}
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
                        <Image style={styles.listItemImage} source={require('../../img/Home/icon_homepage_movieCategory.png')}/>
                        <View style={styles.listItemText}>
                            <Text style={styles.listItemTitle}>{item.VIDEO_NAME}</Text>
                            <Text style={styles.listItemDes}>fdkas,mhflkahflajfakbfka</Text>
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
            this._getCollectList(currentPage);
        }
    };
    _onRefresh = () => {
        currentPage = 0;
        this._getCollectList(currentPage);
    }

}

const styles = StyleSheet.create({
    list:{
        marginBottom:70
    },
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
        fontSize: 18,
        color: '#666'
    },
    listItemDes: {
        fontSize: 14,
        marginTop: 4,
        color: '#999'
    },
    listItemLine: {
        position:'absolute',
        bottom: 0
    }



});

export default BoughtVideoListPage;