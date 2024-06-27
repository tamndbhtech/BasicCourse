import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import styles from './styles';
import { LinearGradient } from 'expo-linear-gradient';
import { logout } from '../actions/authAction.js';
import Wrapper from '../../components/Wrapper/Wrapper';

const HomeScreen = ({ navigation }) => {
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
        navigation.navigate('Login');
    };
    return (
        <Wrapper renderData={
            <TouchableOpacity onPress={() => handleLogout()} style={styles.btnLogin}>
                <LinearGradient
                    colors={['#FF5789', '#FF9B9C']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={styles.gradient}
                >
                    <Text style={styles.txtLogin}>Log Out</Text>
                </LinearGradient>
            </TouchableOpacity>
        } />
    );
};



export default HomeScreen;
