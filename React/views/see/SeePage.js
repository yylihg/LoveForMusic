/**
 * Created by yanlin.yyl.
 */
'use strict';

import  {
    AppRegistry,
    View,
    StyleSheet
} from 'react-native';

import React, {Component} from 'react';
import ScrollableTabView from 'react-native-scrollable-tab-view';

import HeadView from '../common/HeadView';
import SeeDemoVideoView from './SeeDemoVideoView';
import SeeFormalVideoView from './SeeFormalVideoView';
import CustomTabBar from '../common/CustomTabBar';


export default class SeeView extends Component {

    render() {
        return (
            <View style={{flex:1}}>
                <HeadView title="视频列表"></HeadView>
                <ScrollableTabView renderTabBar={() => <CustomTabBar someProp={'here'} />}>
                    <SeeDemoVideoView tabLabel="试看视频"></SeeDemoVideoView>
                    <SeeFormalVideoView tabLabel="正式视频"></SeeFormalVideoView>
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
AppRegistry.registerComponent('SeeView', () => SeeView);
