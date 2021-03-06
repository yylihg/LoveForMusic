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
import HotTeacherCell from './HotTeacherCell';


class HotTeacherList extends Component {

    static defaultProps = {
        datas: []
    }

    render() {
        let { datas } = this.props
        let items = datas.map(
            (info, i) => (
                <HotTeacherCell
                    teacher = {datas[i]}
                    imageUrl ={{uri: datas[i].PHOTO0}}
                    key={i}
                    onPress={() => this.props.onItemSelected(i)} />
            )
        )


        return (
            <View>
                {items}
            </View>
        );
    }
}

const styles = StyleSheet.create({

});

export default HotTeacherList;