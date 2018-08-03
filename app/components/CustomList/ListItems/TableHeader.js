import React from 'react';
import {Text, View, Icon} from 'native-base';
import {StyleSheet, Image,Dimensions} from 'react-native';
import CustomText from '../../CustomText/index';

export default Header = (props) => {

    var {height, width} = Dimensions.get('window');
    var headingWidth = width /4;
    return(
        <View style={styles.container}>
            <View style={styles.headings}>
                <Text medium style={[styles.headingsText, {width:headingWidth+30}]}>BODY REGION</Text>
                <Text medium style={[styles.headingsText, {width:headingWidth}]}>INTENSITY</Text>
                <Text medium style={[styles.headingsText, {width:headingWidth}]}>DATE</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // flex:1,
        flexDirection:'row',
        // justifyContent:'space-between',
        // paddingHorizontal: 9,
        paddingVertical: 7,
        marginVertical:1,
        backgroundColor: 'white',

    },
    headings: {
        // flex:3,
        flexDirection: 'row',
        // justifyContent:'space-around'
    },
    placeholder: {
        // flex: 1
    },
    headingsText: {
        color: '#8DABC4',
        fontSize:11,
        textAlign:'center'
    }
});