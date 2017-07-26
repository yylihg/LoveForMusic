/**
 * Created by yanlin.yyl on 2017/4/17.
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';

import screen from '../../constants/screen';
import InstrumentCell from './InstrumentCell';

class GridView extends Component {
    static defaultProps = {
        datas: []
    }

    render(){
        let { datas } = this.props
        let gridItems = datas.map(
            (info, i) => (
                <InstrumentCell
                    title={datas[i].title}
                    imageUrl ={datas[i].image}
                    key={i}
                    onPress={() => this.props.onGridSelected(i)} />
            )
        )


        return (
            <View style={styles.container}>
                {gridItems}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        borderTopWidth: screen.onePixel,
        borderLeftWidth: screen.onePixel,
        borderColor: '#090'
    }
});

export default GridView;
