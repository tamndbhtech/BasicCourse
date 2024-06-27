import { StyleSheet, Dimensions } from 'react-native';

const wh = Dimensions.get('window').height;
const ww = Dimensions.get('window').width;


export default StyleSheet.create({
    title: {
        color: 'white',
        fontSize: 30,
        fontWeight: '900',
        paddingVertical: 15,
        paddingLeft: 15,
    },

    txt: {
        color: '#fff',
        fontSize: 15,
    },

    //
    inputContainer: {
        flexDirection: 'row',
        borderRadius: 50,
        backgroundColor: '#2b3946',
        paddingHorizontal: 20,
        paddingVertical: 10,
        alignItems: 'center',
    },
    textInput: {
        marginLeft: 10,
        fontSize: 15,
        color: '#fff',
        flex: 1,
    },

    textValidate: {
        color: 'red',
        marginLeft: 10,
    },

    //
    textFPContainer: {
        marginRight: 15,
        marginVertical: 20,
    },
    textFP: {
        color: '#fff',
        textAlign: 'right',
        fontSize: 18,
    },

    //
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


    //
    signUpContainer: {
        marginVertical: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    btnSignUp: {
        marginHorizontal: 10,
    },
    txtSignUp: {
        color: '#FF5889',
        fontSize: 15,
        fontWeight: '700'
    },



    //
    loginOtherContainer: {
        marginVertical: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    line: {
        height: 1,
        backgroundColor: '#363140',
        flex: 1,
    },
    txtLoginOther: {
        paddingHorizontal: 18
    },


    //
    btnLoginOther: {
        padding: 15,
        borderRadius: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        marginVertical: 10,
    },

    containerIcFB: {
        backgroundColor: '#fff',
        borderRadius: 100,
        width: 25,
        height: 25,
        position: 'absolute',
        left: 30
    },

    containerIcApple: {
        position: 'absolute',
        left: 30
    },

    txtLoginOther: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 15
    },



});