import { StyleSheet } from 'react-native';
import {Fonts} from "../../utils/Fonts";

export default StyleSheet.create({

    input: {
        backgroundColor:'#fff',
        fontFamily:Fonts.MontSerratMedium,
        color: '#8DABC4',
        fontSize:14,
        paddingLeft: 11,

        //ios shadow
        shadowOpacity: 0.3,
        shadowRadius: 3,
        shadowOffset: {
            height: 0,
            width: 0
        },
        //android shadow
        elevation: 2,
    }
})