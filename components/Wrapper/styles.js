import { StyleSheet, Dimensions } from 'react-native';

const wh = Dimensions.get('window').height;
const ww = Dimensions.get('window').width;


export default StyleSheet.create({
    background: {
        wh: wh,
        width: ww,
        flex: 1,
        resizeMode: 'cover', 
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column',
    },
    wrap: {
        maxWidth: ww * 85 / 100,
        marginVertical: 0,
        marginHorizontal: 'auto',
        width: '100%',
    },
});