/**
 * Created by yanlin.yyl.
 */
'use strict';

import  {
    AppRegistry,
    View,
    Text,
    Image,
    TouchableHighlight,
    StyleSheet
} from 'react-native';

import React, {Component} from 'react';
import ScrollableTabView from 'react-native-scrollable-tab-view';

import HeadView from '../common/HeadView';
import VideoDemoVideoView from './VideoDemoVideoView';
import VideoFormalVideoView from './VideoFormalVideoView';

export default class VideoView extends Component {

    render() {
        return (
            <View style={{flex:1}}>
                <HeadView title="视频列表"></HeadView>
                <ScrollableTabView >
                    <VideoDemoVideoView tabLabel="试看视频"></VideoDemoVideoView>
                    <VideoFormalVideoView tabLabel="正式视频"></VideoFormalVideoView>
                </ScrollableTabView>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    tabBarText: {
        fontSize: 14,
        marginTop: 5,
    },
    tabBarUnderline: {
        backgroundColor: '#FE566D'
    }
});
AppRegistry.registerComponent('VideoView', () => VideoView);
