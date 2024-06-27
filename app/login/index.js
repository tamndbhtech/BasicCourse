import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Button, Alert } from 'react-native';
import styles from './styles';
import Wrapper from '../../components/Wrapper/Wrapper.js';
import Svg, { Path } from 'react-native-svg';
import { LinearGradient } from 'expo-linear-gradient';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { login } from '../actions/authAction.js';
import { Formik } from 'formik';
import * as Yup from 'yup';


const validationSchema = Yup.object().shape({
    email: Yup.string()
        .email('Email is not valid')
        .required('Email is required'),
    password: Yup.string()
        .min(8, 'Password must be at least 8 characters long')
        .max(20, 'Password must not exceed 20 characters')
        .required('Password is required'),
});

const LoginScreen = ({ navigation }) => {

    const dispatch = useDispatch();

    const handleLogin = async (value) => {
        const status = await dispatch(login(value.email, value.password));
        if (status == 200) {
            navigation.navigate('Home');
        }
        else {
            Alert.alert("Login failed")
        }
    };
    return (
        <>
            <Wrapper
                renderData={
                    <View>
                        <Text style={styles.title}>Log In</Text>

                        <Formik
                            initialValues={{
                                email: '',
                                password: '',
                            }}
                            validationSchema={validationSchema}
                            onSubmit={handleLogin}
                        >
                            {({ values, handleChange, errors, touched, handleSubmit }) => (

                                <View>
                                    <View style={styles.inputContainer}>
                                        <Svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <Path fill-rule="evenodd" clip-rule="evenodd" d="M0 4.28808V11.1209C0 12.0643 0.792456 12.8291 1.77 12.8291H14.16C15.1375 12.8291 15.93 12.0643 15.93 11.1209V4.28808L9.30374 8.85776C8.51253 9.43809 7.41747 9.43809 6.62626 8.85776L0 4.28808Z" fill="#A4BCC1" />
                                            <Path d="M0.757071 3.16202C-0.428368 2.33831 0.17542 0.531724 1.63616 0.531724H14.4323C15.893 0.531724 16.4968 2.33831 15.3114 3.16202L9.06844 7.5C8.45069 7.92925 7.61775 7.92925 7 7.5L0.757071 3.16202Z" fill="#A4BCC1" />
                                        </Svg>
                                        <TextInput
                                            style={styles.textInput}
                                            value={values.email}
                                            onChangeText={handleChange('email')}
                                            placeholder="Email"
                                            placeholderTextColor="#a9a9a9"
                                        ></TextInput>
                                    </View>
                                    {errors.email && touched.email ? (
                                        <Text style={styles.textValidate}>{errors.email}</Text>
                                    ) : null}

                                    <View style={{ height: 10 }}></View>

                                    <View style={styles.inputContainer}>
                                        <Svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <Path d="M7.9857 17.9992H1.36292C0.547951 17.9992 0.0189131 17.5408 0.00463892 16.8112C-0.00428245 16.3772 0.00240912 15.9432 0.00240912 15.5092C0.00240912 13.1885 0.00240912 10.8677 0.00240912 8.54672C-0.00545067 8.28336 0.0659782 8.02288 0.209383 7.79196C0.452045 7.41557 0.815592 7.22263 1.31207 7.25972C1.49049 7.27314 1.5351 7.21632 1.5351 7.06245C1.5351 6.473 1.51592 5.88355 1.56097 5.29371C1.67725 3.77603 2.36672 2.50231 3.6294 1.47255C5.02202 0.3406 6.69255 -0.0997106 8.54775 0.0186526C11.4766 0.205666 13.8189 2.08606 14.3569 4.63482C14.4693 5.16785 14.4608 5.7064 14.4568 6.24535C14.4568 6.51482 14.4684 6.78469 14.4524 7.05377C14.4421 7.22263 14.4885 7.2759 14.6924 7.27235C15.3748 7.26051 15.8075 7.56825 15.9534 8.15928C15.9873 8.31418 16.0022 8.47185 15.998 8.62958C16.0007 11.2925 16.0007 13.9551 15.998 16.6175C15.998 16.9856 15.9338 17.3352 15.655 17.6315C15.427 17.8737 15.1456 18 14.786 18C12.5194 17.9982 10.2526 17.9979 7.9857 17.9992ZM8.00087 7.25775C9.16734 7.25775 10.3338 7.2538 11.5007 7.2613C11.6957 7.2613 11.7715 7.22816 11.7639 7.03838C11.7465 6.61188 11.7617 6.18419 11.7572 5.7569C11.7615 5.48128 11.7305 5.20611 11.6649 4.93664C11.1662 3.08229 9.11694 1.98822 7.02844 2.46325C6.3031 2.63116 5.65211 2.98913 5.16093 3.49018C4.66975 3.99124 4.36134 4.61195 4.2762 5.27082C4.19903 5.86737 4.26504 6.4659 4.23649 7.06284C4.22936 7.21593 4.27753 7.26248 4.45596 7.26011C5.6376 7.2542 6.81923 7.25775 8.00087 7.25775ZM6.73626 13.8758C6.73626 14.2704 6.73269 14.6649 6.73626 15.0595C6.74028 15.3968 6.98874 15.6083 7.37013 15.6071C7.75152 15.6059 8.14272 15.6028 8.52991 15.6016C9.06519 15.5996 9.2628 15.4244 9.26369 14.9443C9.26369 14.2278 9.26369 13.5113 9.26369 12.7948C9.25755 12.6836 9.29968 12.5745 9.38145 12.4898C9.75481 12.0953 9.85964 11.6415 9.69861 11.1452C9.46398 10.4228 8.79175 10.0365 7.83359 10.0689C6.5846 10.1111 5.79372 11.3681 6.47576 12.2929C6.69344 12.5884 6.75232 12.8634 6.73894 13.1858C6.72868 13.4154 6.73626 13.6458 6.73626 13.8758Z" fill="#A4BCC1" />
                                        </Svg>
                                        <TextInput
                                            style={styles.textInput}
                                            value={values.password}
                                            onChangeText={handleChange('password')}
                                            placeholder="Password"
                                            placeholderTextColor="#a9a9a9"
                                        ></TextInput>
                                    </View>
                                    {errors.password && touched.password ? (
                                        <Text style={styles.textValidate}>{errors.password}</Text>
                                    ) : null}


                                    <TouchableOpacity style={styles.textFPContainer}>
                                        <Text style={styles.textFP}>Forgot password ?</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity onPress={() => handleSubmit()} style={styles.btnLogin}>
                                        <LinearGradient
                                            colors={['#FF5789', '#FF9B9C']}
                                            start={{ x: 0, y: 0 }}
                                            end={{ x: 1, y: 0 }}
                                            style={styles.gradient}
                                        >
                                            <Text style={styles.txtLogin}>Log In</Text>
                                        </LinearGradient>
                                    </TouchableOpacity>


                                </View>
                            )}
                        </Formik>







                        <View style={styles.signUpContainer}>
                            <Text style={styles.txt}>Don't have an account?</Text>
                            <TouchableOpacity style={styles.btnSignUp}>
                                <Text style={styles.txtSignUp}>Sign Up</Text>
                            </TouchableOpacity>
                        </View>


                        <View style={styles.loginOtherContainer}>
                            <View style={styles.line}></View>
                            <Text style={[styles.txt, styles.txtLoginOther]}>Or Log in with</Text>
                            <View style={styles.line}></View>
                        </View>



                        <View>
                            <TouchableOpacity style={[styles.btnLoginOther, { backgroundColor: '#3F60B2' }]}>
                                <View style={styles.containerIcFB}>
                                    <Svg width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <Path d="M11.1089 25.4772H14.8119V16.1345H17.9082L18.3758 12.4998H14.8119V10.1705C14.8119 9.12104 15.1025 8.40434 16.5938 8.40434H18.5021V5.14078C18.1736 5.10239 17.0488 5 15.7344 5C12.9794 5 11.1089 6.70217 11.1089 9.81214V12.4998H8V16.1345H11.1089V25.4772Z" fill="#3F60B2" />
                                    </Svg>
                                </View>

                                <Text style={styles.txtLoginOther}>Log in with Facebook</Text>

                            </TouchableOpacity>

                            <TouchableOpacity style={[styles.btnLoginOther, { backgroundColor: '#131416' }]}>
                                <View style={styles.containerIcApple}>
                                    <Svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <Path d="M14.7358 20.1351C13.5978 21.2395 12.3422 21.0674 11.1454 20.5467C9.87309 20.0155 8.70991 19.9819 7.36616 20.5467C5.69278 21.2689 4.80465 21.059 3.79684 20.1351C-1.89309 14.2773 -1.05325 5.35397 5.41353 5.01804C6.98193 5.10202 8.08003 5.88517 9.00385 5.95026C10.377 5.67101 11.6913 4.87107 13.1611 4.97605C14.9268 5.11882 16.2475 5.81589 17.1293 7.06935C13.497 9.25293 14.3578 14.04 17.6941 15.3838C17.0264 17.1369 16.1698 18.8691 14.7337 20.1498L14.7358 20.1351ZM8.87787 4.95505C8.70781 2.35155 10.8179 0.20996 13.245 0C13.5789 3.00242 10.5156 5.24899 8.87787 4.95505Z" fill="white" />
                                    </Svg>

                                </View>

                                <Text style={styles.txtLoginOther}>Log in with Apple</Text>

                            </TouchableOpacity>
                        </View>
                    </View>
                }
            />
        </>
    );
};



export default LoginScreen;
