import React from 'react';
import { View } from 'native-base';
import {StyleSheet, Dimensions} from 'react-native';
import Text from '../../CustomText/index';

export default Header = (props) => {

    let {width} = Dimensions.get('window');
    let headingWidth = width /4;
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
    }
});