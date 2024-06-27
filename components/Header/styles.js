import { StyleSheet, Dimensions } from 'react-native';

const wh = Dimensions.get('window').height;
const ww = Dimensions.get('window').width;


export default StyleSheet.create({
    header: {
        paddingVertical: 20,
        maxWidth: ww * 85 / 100,
        marginVertical: 0,
        marginHorizontal: 'auto',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    thumbnail: {
        width: 50,
        height: 50,
    },
    headTitle: {
        color: 'white',
        fontSize: 24,
        fontWeight: '900',
    },
    secondText: {
        color: '#2D8CFF',
        fontSize: 14
    },
    titleContainer: {
        marginLeft: 20
    },
    line1: {
        backgroundColor: '#2D8CFF',
        height: 1,
        width: ww,
    },
    line2: {
        backgroundColor: '#565461',
        height: 4,
        width: ww,
    }
});