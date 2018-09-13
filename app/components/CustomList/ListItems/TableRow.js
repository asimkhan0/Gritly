import React from 'react';
import {Icon, View, Button} from 'native-base';
import {StyleSheet, Dimensions} from 'react-native';
import Text from '../../CustomText/index';

export default Row = (props) => {


    let { width } = Dimensions.get('window');
    let columnWidth = width / 4;
    
    return(
        <View style={styles.container}>
            <Text medium style={[styles.columnText,{width:columnWidth+30}]}>{props.data}</Text>
            <Text medium style={[styles.columnText,{width:columnWidth}]}>3</Text>
            <Text medium style={[styles.columnText,{width:columnWidth}]}>05-Jul-2017</Text>
            <Button transparent small
                    style={{flex: 1,justifyContent: 'flex-end'}}
                    onPress={props.onPress}
            >
                <Icon style={styles.icon} name={'chevron-right'} type={'FontAwesome'}/>
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'row',
        paddingVertical: 7,
        marginVertical:1,
        backgroundColor: 'white',
        alignItems: 'center',
        paddingLeft:10,
        paddingRight:4
    },
    columnText:{
        color:'#8DABC4',
        fontSize: 14,
    },
    icon:{
        color:'#8DABC4'
    }
});