import {FETCH_TODOS_START, FETCH_TODOS_SUCCESS, FETCH_TODOS_FAILURE} from "../actions/todoActions";

const initState = {
    todos:[],
    todo:"",
    isLoading: false
}

export default(state = initState, action) => {
    switch (action.type) {
        case FETCH_TODOS_START:
            return {
                ...state,
                isLoading: true
            };
        case FETCH_TODOS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                todos: action.payload
            };
        default:
            return state;
    }
}
