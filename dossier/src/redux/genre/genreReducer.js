import {ADD_GENRE, ADD_TODO, SHOW_GENRE} from "./genreTypes";

const initialState = {
    genres:[],
    genre:null
}

const genreReducer = (state=initialState, action) => {
    console.log("genre-reducing! action:", action);
    const prev_genres = state.genres.slice();
    switch (action.type) {
        case ADD_GENRE:
            prev_genres.push({title:action.payload, todos:[]});
            return {
                ...state,
                genres: prev_genres
            }
        case ADD_TODO:
            const genre = prev_genres[action.payload.index];
            genre.todos.push(action.payload.todo);
            prev_genres.splice(action.payload.index, 0, genre);
            return {
                ...state,
                genres: prev_genres
            }
        case SHOW_GENRE:
            return{
                ...state,
                genre: action.payload
            }
        default:
            return state;
    }
}

export default genreReducer;

