import React from 'react';
import {FlatList} from 'react-native';
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
        debugger;
        return (
            <View style={styles.container}>
                <FlatList
                    horizontal={true}
                    style={{flex: 1}}
                    data={this.state.tabList}
                    renderItem={({item}) =>
                        <CustomText
                            click={this.selectTab}
                            medium
                            style={[styles.text, item.active ? styles.textSelected : null]}
                        >
                            {item.value}
                        </CustomText>}
                    keyExtractor = {(item, index) => `${index}`}
                />
                <Button transparent>
                    <Image style={styles.filterImg} source={require('../../../assets/filter.svg')}/>
                </Button>
            </View>
        );
    }
}

// makeTabList = (tabsArray) => {
//     debugger
//     let newArray = [];
//     let temp = {};
//     tabsArray.map((val, index)=> {
//         temp = {};
//         // temp['key'] = val;
//         temp['value'] = val;
//         if(index === 0) {
//             temp['active'] = true;
//         }
//         console.log(temp);
//         newArray.push(temp);
//     });
//     return newArray;
// }