import React from 'react';
import { View, Icon} from 'native-base';
import {StyleSheet, Image,Dimensions} from 'react-native';
import Text from '../../CustomText/index';

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
        flexDirection:'row',
        paddingVertical: 7,
        marginVertical:1,
        backgroundColor: 'white',
        paddingHorizontal:12
    },
    headings: {
        flexDirection: 'row',
    },
    placeholder: {
    },
    headingsText: {
        color: '#8DABC4',
        fontSize:11,
        // textAlign:'center'
    }
});