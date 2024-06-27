import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from '../constants/actionTypes'

const initialState = {
    isAuthenticated: false,
    user: null,
};

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload,
            };
        case LOGOUT_SUCCESS:
            return {
                ...state,
                isAuthenticated: false,
                user: null,
            };
        default:
            return state;
    }
}
