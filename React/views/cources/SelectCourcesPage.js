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
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';

import HeadView from '../common/HeadView';
import TeacherListView from './TeacherListView';
import BookedView from './BookedView';
import FinishedView from './FinishedView';
import CustomTabBar from '../common/CustomTabBar';
export default class SelectCourcesPage extends Component {

    render() {
        return (
            <View style={{flex:1}}>
                <HeadView title="约课"></HeadView>
                <ScrollableTabView renderTabBar={() => <CustomTabBar someProp={'here'} />}>
                    <TeacherListView tabLabel="教师资源"></TeacherListView>
                    <BookedView tabLabel="预约中"></BookedView>
                    <FinishedView tabLabel="已完成"></FinishedView>
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
