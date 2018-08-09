import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    AttachmentContainer: {
        backgroundColor: '#fff',
        paddingTop: 7,
        paddingBottom:13,
        paddingHorizontal: 12,

        flexDirection:'row',
        flexWrap:'wrap',
        //ios shadow
        shadowOpacity: 0.3,
        shadowRadius: 3,
        shadowOffset: {
            height: 0,
            width: 0
        },
        //android shadow
        elevation: 2,
    },


});

export default styles;