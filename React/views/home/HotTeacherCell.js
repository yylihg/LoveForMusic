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
import ListLine from '../common/ListLine';
class HotTeacherCell extends Component {

    render() {
        return (
            <TouchableHighlight
                style={styles.container}
                onPress={this.props.onPress}
                underlayColor="rgb(210, 230,255)">
                <View >
                    <View style={styles.listItemContainer}>
                        <Image style={styles.listItemImage} source={this.props.imageUrl}/>
                        <View style={styles.listItemText}>
                            <View style={styles.listItemTitleContainer}>
                                <Text style={styles.listItemTitle}>{this.props.teacher.NAME}</Text>
                                <Image style={{height: 10, width:10}} source={require('../../img/Home/icon_level_point.png')}/>
                                <Text style={styles.listItemLevelPoint}>{this.props.teacher.LEVEL_POINTS}</Text>
                            </View>
                            <Text style={styles.listItemDes}>{this.props.teacher.TEACH_EXPERIENCE}</Text>
                        </View>
                    </View>

                    <ListLine style ={styles.listItemLine}/>
                </View>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
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
    listItemTitleContainer: {
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    listItemTitle: {
        flex: 1,
        fontSize: 14,
        color: '#666'
    },
    listItemLevelPoint: {
        marginLeft: 5,
        fontSize: 12,
        color: '#999',
        width: 50
    },

    listItemDes: {
        fontSize: 12,
        marginTop: 8,
        color: '#999'
    },
    listItemLine: {
        position:'absolute',
        bottom: 0
    }
});

export default HotTeacherCell;