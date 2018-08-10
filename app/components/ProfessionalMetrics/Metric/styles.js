import { StyleSheet, Dimensions } from 'react-native';
const WIDTH = Dimensions.get('window').width;

export default StyleSheet.create({
    container: {
        width: WIDTH * 0.78,
        backgroundColor: '#81CA25',
        borderRadius:4,
        paddingTop: 19,
        paddingBottom: 12,
    },
    metricHeader: {
        paddingHorizontal:28,
        paddingBottom: 24,
    },
    metricFooter: {
        paddingHorizontal: 60,
        marginTop:21
    },
    professionalMetricHeadText: {
        fontSize:14,
        color:'#000',
        textAlign:'center',
    },
});