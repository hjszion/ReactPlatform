import {FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE, SET_USER} from "./userTypes";
import axios from "axios";

export const fetchUserRequest = () => {
    return {
        type: FETCH_USERS_REQUEST,
    }
}

export const fetchUserSuccess = (users) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload:users
    }
}

export const fetchUserFailure = (error) => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error.message
    }
}

export const setUser = (user) => {
    return{
        type:SET_USER,
        payload: user
    }
}

export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(fetchUserRequest);
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((res) => {
                const users = res.data;
                dispatch(fetchUserSuccess(users));
            })
            .catch((err) => {
                dispatch(fetchUserFailure(err));
            });
    }
}
