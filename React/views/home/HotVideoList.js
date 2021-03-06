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
import HotVideoCell from './HotVideoCell';


class HotVideoList extends Component {

    static defaultProps = {
        datas: []
    }

    render() {
        let { datas } = this.props
        let items = datas.map(
            (info, i) => (
                <HotVideoCell
                    title={datas[i].VIDEO_NAME}
                    imageUrl ={{uri: datas[i].PRIVIEW_IMG_URL}}
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

export default HotVideoList;