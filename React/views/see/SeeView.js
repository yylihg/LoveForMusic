/**
 * Created by yanlin.yyl.
 */
'use strict';

import  {
    View,
    Text,
    Image,
    TouchableHighlight,
    StyleSheet
} from 'react-native';

import React, {Component} from 'react';
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';
import HeadView from '../common/HeadView';
import DemoVideoView from './DemoVideoView';

export default class SeeView extends Component {

    render() {
        return (
            <View style={{flex:1}}>
                <HeadView title="视频列表"></HeadView>
                <ScrollableTabView
                    tabBarBackgroundColor='white'
                    tabBarActiveTextColor='#FE566D'
                    tabBarInactiveTextColor='#555555'
                    tabBarTextStyle={styles.tabBarText}
                    tabBarUnderlineStyle={styles.tabBarUnderline}                 >
                    <View tabLabel="测试1" key="0">
                        <Text>这是一个测试</Text>
                    </View>
                    <View tabLabel="测试3" key="1">
                        <Text>这是一个测试3</Text>
                    </View>
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

