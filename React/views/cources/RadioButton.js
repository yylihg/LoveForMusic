/**
 * Created by yanlin.yyl on 2017/4/17.
 */

import React, {Component} from 'react';
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

class RadioButton extends Component {
    static defaultProps = {
        datas: []
    }

    //noinspection JSAnnotator
    constructor(props: Object) {
        super(props)
        this.state = {
            items: this.props.datas,
            selectedId: -1
        }
    }

    _onItemPress(index){
        if (this.state.selectedId == -1){
            this.state.items[index].isSelected = true;
        }else {
            this.state.items[this.state.selectedId].isSelected = false;
            this.state.items[index].isSelected = true;
        }
        this.state.selectedId = index;

        this.setState({
            items: this.state.items
        })
        this.props.onItemSelected(index);
    }

    render(){
        this.state.items = this.props.datas
        let gridItems = this.props.datas.map(
            (info, i) => (
            <TouchableHighlight underlayColor = '#0000' onPress={()=>this._onItemPress(i)}>
                <View style={[styles.radioBtn, {backgroundColor:info.isSelected?'#69c2ff':'#eee'}]}>
                    <Text style={[styles.radioBtnText, {color:info.isSelected?'#fff':'#717171'}]}>{info.name}</Text>
                </View>
            </TouchableHighlight>
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
    },
    radioBtn: {
        borderRadius: 5,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 5,
        marginBottom: 5,
        height: 32,
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent: 'center',
        alignItems: 'center'

    },
    radioBtnText: {
        fontSize: 14
    }
});

export default RadioButton;
