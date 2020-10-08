import { combineReducers } from "redux";
import goldReducer from "./Gold/goldReducer";

const rootReducer = combineReducers({
    gold:goldReducer,
});

export default rootReducer;
