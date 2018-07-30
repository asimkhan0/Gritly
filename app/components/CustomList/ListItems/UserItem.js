import React from 'react';
import {Text, List, ListItem, Left, Thumbnail, Body, Right, Icon, View, Button} from 'native-base';
import {StyleSheet, Image} from 'react-native';
import CustomText from '../../CustomText/index';
import PercentageCircle from '../../PercentageCircle';
import Fonts from '../../../utils/Fonts';

export default CustomListItem = (props) => {

    return(
        <View style={styles.container}>
            <View style={styles.leftContainer}>
                <View style={styles.avatarContainer}>
                    <Image style={styles.avatar}
                           source={require('../../../../assets/userAvatar.png')} />
                </View>
                <View style={styles.nameContainer}>
                    <CustomText medium style={styles.name}> Alan Cosby </CustomText>
                    <CustomText medium style={styles.city}> North California</CustomText>
                </View>
            </View>
            <View style={styles.rightContainer}>
                <View style={styles.progressContainer}>
                    {/*<CustomText bold style={styles.progress}> 78% </CustomText>*/}
                    <PercentageCircle radius={19}
                                      percent={60}
                                      color={"#92C548"}
                                      borderWidth={5}
                    >
                        <CustomText bold style={styles.progress}> 60% </CustomText>
                    </PercentageCircle>
                </View>
                <View style={styles.showMoreButtonContainer}>
                    <Button transparent>
                        <Icon style={styles.showMore} type='FontAwesome' name='ellipsis-v'></Icon>
                    </Button>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'row',
        paddingHorizontal: 9,
        paddingVertical: 8,
        marginVertical:1,
        backgroundColor: 'white',
        borderBottomColor:'#CBE6EF',
        borderBottomWidth:1
    },
    leftContainer: {
        flex:1,
        flexDirection: 'row'
    },
    rightContainer: {
        flex:1,
        flexDirection: 'row',
        justifyContent:'flex-end'
    },

    showMore: {
        color:'#8DABC4'
    },
    avatarContainer: {
        justifyContent:'center'
    },
    avatar: {
        height: 40,
    },
    nameContainer: {
        flex:1,
        marginHorizontal: 9,
        justifyContent:'center'
    },
    name: {
        fontSize: 14,
        color: '#253851'

    },
    city: {
        fontSize: 10,
        color: '#8DABC4'
    },
    progressContainer: {
        justifyContent:'center'
    },
    showMoreButtonContainer: {

    },
    progress: {
        fontSize: 10,
        color: '#253851'
    }
});