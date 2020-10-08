import {FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, SET_USER} from "./userTypes";

const initialState = {
    loading: false,
    users:[],
    user:{},
    error:""
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_USERS_SUCCESS:
            return{
                loading: false,
                users: action.payload,
                user:{},
                error: ""
            }
        case FETCH_USERS_FAILURE:
            return{
                loading: false,
                users:[],
                user:{},
                error: action.payload
            }
        case SET_USER:
            return{
                ...state,
                user:action.payload,
                error: ""
            }
        default:
            return state;
    }
}

export default userReducer;

