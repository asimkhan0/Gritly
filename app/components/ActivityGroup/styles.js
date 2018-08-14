import { StyleSheet } from 'react-native';
import { Fonts } from '../../utils/Fonts';

export default StyleSheet.create({
        container: {
            backgroundColor:'#fff',
            paddingVertical:17,
            paddingHorizontal:15,
            //ios shadow
            shadowOpacity: 0.3,
            shadowRadius: 3,
            shadowOffset: {
                height: 0,
                width: 0
            },
            //android shadow
            elevation: 2,
            marginBottom:2
        },
        groupHeadingContainer: {
            flexDirection:'row',
            justifyContent:'space-between',
            // shadowOpacity: 0.3,
            // shadowRadius: 3,
            // shadowOffset: {
            //     height: 0,
            //     width: 0
            // },
            // //android shadow
            // elevation: 2,
            // marginBottom:2
        },
        groupContentContainer: {
        },
        headingText:{
            color: '#253851',
            fontSize:14
        },
        editText:{
            color: '#000',
            fontSize:12
        },
        contentText: {
            color: '#253851',
            fontSize:12,
            marginTop:20
        }

    }

)