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

import React, {Component} from 'react';

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

class DemoVideoView extends Component {

    //noinspection JSAnnotator
    constructor(props: Object) {
        super(props)
        this.state = {
            videos: [
                { title: '这是一个测试，吴佲', image: require('../../img/Home/icon_homepage_foodCategory.png') },
                { title: '这是一个测试，吴佲', image: require('../../img/Home/icon_homepage_movieCategory.png') },
                { title: '这是一个测试，吴佲', image: require('../../img/Home/icon_homepage_hotelCategory.png') },
                { title: '这是一个测试，吴佲', image: require('../../img/Home/icon_homepage_KTVCategory.png') },
                { title: '这是一个测试，吴佲', image: require('../../img/Home/icon_homepage_default.png') }
            ]
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
        alert('click:' + item)
    }

    _renderItemComponent = ({item, separators}) => {
        return (
            <TouchableHighlight underlayColor = '#eee' onPress={()=>this._onItemPress(item.key)}>
                <View>
                    <Text>{item.title}</Text>
                    <View style={styles.btnLine}></View>
                </View>
            </TouchableHighlight>
        );

    };
    _onEndReached = () => {
        if (this.state.data.length >= 100) {
            return;
        }
        setTimeout(
            () => {
                this.state.videos = this.state.videos.concat(this.state.videos);
            },3000);

    };
    _onRefresh = () => {
        setTimeout(
            () => {
                this.state.videos = [];
            },3000);
    }

}

const styles = StyleSheet.create({});

export default DemoVideoView;