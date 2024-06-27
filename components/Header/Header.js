import React, { memo } from 'react';
import { View, Image, Text } from 'react-native';
import styles from './styles';
const Header = () => {
    return (
        <View>
            <View style={styles.header}>
                <Image style={styles.thumbnail} source={require('../../assets/images/Logo.png')}></Image>
                <View style={styles.titleContainer}>
                    <Text style={styles.headTitle}>UpNow</Text>
                    <Text style={styles.secondText}>Digital Hypnotherapy</Text>
                </View>
            </View>
            <View>
                <View style={styles.line1}></View>
                <View style={styles.line2}></View>
            </View>
        </View>
    );
};



export default memo(Header);
