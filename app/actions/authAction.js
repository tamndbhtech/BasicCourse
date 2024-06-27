import axios from 'axios';
import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from '../constants/actionTypes'

export const login = (email, password) => async dispatch => {
    try {
        const response = await axios.post('https://httpbin.org/post', { email, password });
        dispatch({ type: LOGIN_SUCCESS, payload: response.data });
        return response.status;
    } catch (error) {
        console.error(error);
    }
};

export const logout = () => dispatch => {
    dispatch({ type: LOGOUT_SUCCESS });
};
