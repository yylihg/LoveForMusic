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
    NativeModules,
    StyleSheet,
    Image
} from 'react-native';
import SearchView from '../common/SearchView';
import React, {Component} from 'react';

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);
let currentIndex = 0;
let totalCount = 0;
let currentPage = 0;
import ListLine from '../common/ListLine';
var ReactModule = NativeModules.ReactModule;


class BookedView extends Component {

    //noinspection JSAnnotator
    constructor(props: Object) {
        super(props)
        this.state = {
            cources: []
        }
    }

    componentDidMount() {
        this._getBookedList(currentPage);
    }

    _getBookedList = function (page) {
        var context = this;
        ReactModule.fetch("get", {api: "/course/list.do?start=" + page + "&pageSize=10&orderStatus=0"}, function (error, response) {
            console.log('ihg /course/list.do: ', response)
            if (error) {
                currentPage -= 1;
            } else {
                totalCount = response.data.total;
                currentIndex = context.state.cources.length;
                let bookedTemp = response.data.list;
                let bookedList = currentPage == 0 ? [] : context.state.cources;
                for (let i = 0; i < bookedTemp.length; i++) {
                    bookedTemp[i].key = currentIndex + "";
                    currentIndex += 1;
                    bookedList.push(bookedTemp[i]);
                }
                context.setState({
                    cources: bookedList
                });
            }
        });
    }

    render() {
        return (
            <View>
                <AnimatedFlatList
                    data={this.state.cources}
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
            <TouchableHighlight underlayColor='#eee' onPress={() => this._onItemPress(item)}>
                <View>
                    <View style={styles.listItemContainer}>
                        <Image style={styles.listItemImage} source={require('../../img/Home/icon_homepage_movieCategory.png')}/>
                        <View style={styles.listItemText}>
                            <Text style={styles.listItemTitle}>{item.ORDER_NAME}</Text>
                            <Text style={styles.listItemDes}>fdkas,mhflkahflajfakbfka</Text>
                        </View>
                        <TouchableHighlight underlayColor = '#eee' onPress={()=>this._onCancelCource(item)}>
                            <View style={styles.cancelBtn}>
                                <Text style={styles.cancelBtnText}>取消</Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                    <ListLine style ={styles.listItemLine}/>
                </View>
            </TouchableHighlight>
        );

    };

    _onCancelCource(item){
        alert('_onCancelCourceclick:' + JSON.stringify(item))
    }

    _onEndReached = () => {
        if (this.state.cources.length >= 100) {
            return;
        }


    };
    _onRefresh = () => {


    }
}
const styles = StyleSheet.create({

    cancelBtn: {
        backgroundColor: '#d2d2d2',
        justifyContent:'center',
        alignItems: 'center',
        borderRadius: 5,
        width: 45,
        marginTop: 10,
        marginRight: 10,
        height: 30,
    },
    cancelBtnText: {
        color: '#fff',
        fontSize: 16
    },

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
    listItemTitle: {
        fontSize: 14,
        color: '#666'
    },
    listItemDes: {
        fontSize: 12,
        marginTop: 4,
        color: '#999'
    },
    listItemLine: {
        position:'absolute',
        bottom: 0
    }
});

export default BookedView;