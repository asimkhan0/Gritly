import React from 'react';
import {Text, List, ListItem, Left, Thumbnail, Body, Right, Icon, View, Button} from 'native-base';
import {StyleSheet, Image, Dimensions} from 'react-native';
import CustomText from '../../CustomText/index';

export default Row = (props) => {


    var { width } = Dimensions.get('window');
    var columnWidth = width /4;

    return(
        <View style={styles.container}>
            <Text medium style={[styles.columnText,{width:columnWidth+30}]}>{props.data}</Text>
            <Text medium style={[styles.columnText,{width:columnWidth}]}>3</Text>
            <Text medium style={[styles.columnText,{width:columnWidth}]}>05-Jul-2017</Text>
            <Button transparent small>
                <Icon style={styles.icon} name={'chevron-right'} type={'FontAwesome'}/>
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'row',
        // paddingHorizontal: 9,
        paddingVertical: 7,
        marginVertical:1,
        backgroundColor: 'white',
        // borderBottomColor:'#CBE6EF',
        // borderBottomWidth:1,
        justifyContent:'space-around'
    },
    columnText:{
        color:'#8DABC4',
        fontSize: 14,
        textAlign:'center'
    },
    icon:{
        // width:6,
        // height:9,
        color:'#8DABC4'
    }
});