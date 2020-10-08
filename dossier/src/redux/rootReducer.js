import genreReducer from "./genre/genreReducer";
import {combineReducers} from "redux";

const rootReducer = combineReducers({
    genres: genreReducer
});

export default rootReducer;