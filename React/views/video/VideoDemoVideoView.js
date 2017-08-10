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
    StyleSheet
} from 'react-native';


import SearchView from '../common/SearchView';
import React, {Component} from 'react';

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

class VideoDemoVideoView extends Component {

    //noinspection JSAnnotator
    constructor(props: Object) {
        super(props)
        this.state = {
            videos: []
        }
    }

    render() {
        return (
            <View>
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
                <View style={{height: 60}}>
                    <Text>{item.VIDEO_NAME}</Text>
                    <View style={styles.btnLine}></View>
                </View>
            </TouchableHighlight>
        );

    };
    _onEndReached = () => {
        if (this.state.videos.length >= 100) {
            return;
        }
        // this.setState((state) => ({
        //     videos: this.state.videos.concat(this.state.videos)
        // }));
        // setTimeout(
        //     () => {
        //         this.state.videos = this.state.videos.concat(this.state.videos);
        //     },3000);

    };
    _onRefresh = () => {
        // this.setState((state) => ({
        //     videos: [ {key: '0',title: '这是一个测试，吴佲', image: require('../../img/Home/icon_homepage_foodCategory.png') },
        //         {key: '1',title: '这是一个测试，吴佲', image: require('../../img/Home/icon_homepage_movieCategory.png') },
        //         {key: '2',title: '这是一个测试，吴佲', image: require('../../img/Home/icon_homepage_hotelCategory.png') },
        //         {key: '3',title: '这是一个测试，吴佲', image: require('../../img/Home/icon_homepage_KTVCategory.png') },
        //         {key: '4',title: '这是一个测试，吴佲', image: require('../../img/Home/icon_homepage_KTVCategory.png') },
        //         {key: '5',title: '这是一个测试，吴佲', image: require('../../img/Home/icon_homepage_KTVCategory.png') },
        //         {key: '6',title: '这是一个测试，吴佲', image: require('../../img/Home/icon_homepage_KTVCategory.png') },
        //         {key: '7',title: '这是一个测试，吴佲', image: require('../../img/Home/icon_homepage_KTVCategory.png') }]
        // }));
        // setTimeout(
        //     () => {
        //         this.state.videos = [];
            // },3000);
    }


    doSearch = (key) => {
        console.log("ihg", "demoVideoView " + key);
    }
}

const styles = StyleSheet.create({});

export default VideoDemoVideoView;