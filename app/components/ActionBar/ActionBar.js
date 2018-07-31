import React from 'react';
import {FlatList, TouchableOpacity} from 'react-native';
import styles from './styles';
import CustomText from '../CustomText'
import {Button, View, Icon} from "native-base";
import Image from 'react-native-remote-svg';


export default class ActionBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tabList: props.tabs,
            selectedValue: 'Active'
        }
    }

    selectTab = (selectedTab) => {
        const newList = this.state.tabList.map(tab => {
            if(tab.value === selectedTab) {
                tab.active = true
            }else{
                tab.active = false
            }
            return tab;
        });
        this.setState({tabList: newList, selectedValue:selectedTab});
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    horizontal={true}
                    style={{flex: 1}}
                    data={this.state.tabList}
                    renderItem={({item}) =>
                        <TouchableOpacity onPress={() => this.selectTab(item.value)}>
                        <CustomText
                            medium
                            style={[styles.text, item.active ? styles.textSelected : null]}
                        >
                            {item.value}
                        </CustomText></TouchableOpacity>}
                    keyExtractor = {(item, index) => `${index}`}
                />
                {this.props.filterIcon ? <Button transparent>
                    <Image style={styles.filterImg} source={require('../../../assets/filter.svg')}/>
                </Button>: null}
            </View>
        );
    }
}