import axios from 'axios';

export const FETCH_TODOS_START = "FETCH_TODOS_START";
export const FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS";
export const FETCH_TODOS_FAILURE = "FETCH_TODOS_FAILURE";

export const fetchTodos = () => dispatch => {
    dispatch({type: FETCH_TODOS_START});

    axios
        .get("http://localhost:3000/todos")
        .then(res => {
            console.log(res.data);
            dispatch({type:FETCH_TODOS_SUCCESS, payload: res.data})
        })
        .catch(err => {
            console.log(err.response.error);
            dispatch({type:FETCH_TODOS_FAILURE})
        });

    // try{
    //
    // }catch(error){
    //
    // }
}

