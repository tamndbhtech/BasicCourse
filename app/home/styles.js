import { StyleSheet, Dimensions } from 'react-native';

const wh = Dimensions.get('window').height;
const ww = Dimensions.get('window').width;


export default StyleSheet.create({
    btnLogin: {
        margin: 10,
        borderRadius: 25,
    },
    gradient: {
        paddingVertical: 10,
        paddingHorizontal: 25,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    txtLogin: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '900',
    },
});