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
    StyleSheet,
    NativeModules,
    Image
} from 'react-native';
import SearchView from '../common/SearchView';
import React, {Component} from 'react';
import ListLine from '../common/ListLine';
var ReactModule = NativeModules.ReactModule;
const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);
let currentIndex = 0;
let totalCount = 0;
let currentPage = 0;
var findNodeHandle = require('findNodeHandle');

class TeacherListView extends Component {

    //noinspection JSAnnotator
    constructor(props: Object) {
        super(props)
        this.state = {
            teachers: []
        }
    }

    componentDidMount() {
        this._getTeacherList(currentPage);
    }
    _getTeacherList = function (page) {
        var context = this;
        ReactModule.fetch("get",{api:"/teacher/list.do?start="+page+"&pageSize=10"},function (error, response) {
            console.log('ihg /teacher/list.do: ', response)
            if (error){
                currentPage -=1;
            }else {
                totalCount = response.data.total;
                currentIndex = context.state.teachers.length;
                let teacherTemp = response.data.list;
                let teacherList = currentPage == 0? []:context.state.teachers;
                for (let i = 0; i < teacherTemp.length; i++){
                    teacherTemp[i].key = currentIndex + "";
                    currentIndex += 1;
                    teacherList.push(teacherTemp[i]);
                }
                context.setState({
                    teachers: teacherList
                });
            }
        });
    }

    render() {
        return (
            <View>
                <SearchView doSearch = {(key) => this.doSearch(key)}/>
                <AnimatedFlatList
                    data={this.state.teachers}
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
            <TouchableHighlight underlayColor = '#eee' onPress={()=>this._onItemPress(item)}>
                <View>
                    <View style={styles.listItemContainer}>
                        <Image style={styles.listItemImage} source={{uri: item.PHOTO0}}/>
                        <View style={styles.listItemText}>
                            <Text style={styles.listItemTitle}>{item.NAME}</Text>
                            <Text style={styles.listItemDes}>{item.TEACH_EXPERIENCE}</Text>
                        </View>
                        <TouchableHighlight underlayColor = '#eee' onPress={()=>this._onSelectCource(item)}>
                            <View style={styles.selectBtn}>
                                <Text style={styles.selectBtnText}>约课</Text>
                            </View>
                        </TouchableHighlight>
                    </View>

                    <ListLine style ={styles.listItemLine}/>
                </View>
            </TouchableHighlight>
        );
    };

    _onSelectCource(item){

        ReactModule.pushReactViewController(findNodeHandle(this), "TeacherDetailPage", {id: item.USER_ID});
        // alert('_onSelectCource:' + JSON.stringify(item))
    }

    _onEndReached = () => {
        if (this.state.teachers.length < 9) {
            return;
        }
        if (this.state.teachers.length < totalCount){
            currentPage += 1;
            this._getTeacherList(currentPage);
        }
    };
    _onRefresh = () => {
        currentPage = 0;
        this._getTeacherList(currentPage);
    }

}

const styles = StyleSheet.create({
    selectBtn: {
        backgroundColor: '#0168ae',
        justifyContent:'center',
        alignItems: 'center',
        borderRadius: 5,
        width: 45,
        marginTop: 10,
        marginRight: 10,
        height: 30,
    },
    selectBtnText: {
        color: '#fff',
        fontSize: 14
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
        marginTop: 8,
        color: '#999'
    },
    listItemLine: {
        position:'absolute',
        bottom: 0
    }
});

export default TeacherListView;