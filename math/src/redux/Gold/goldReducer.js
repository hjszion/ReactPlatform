import {UPDATE_GOLD_REQUEST, GET_HISTORY_REQUEST, GET_TOTAL} from "./goldTypes";

const initialState = {
    total:0,
    history:[]
}

const goldReducer = (state = initialState, action) => {
    switch(action.type){
        case UPDATE_GOLD_REQUEST:
            var str = "You're ";
            action.payload.amount > 0 ?
                str += "earned " + action.payload.amount + " at the " + action.payload.title :
                str += "lost " + Math.abs(action.payload.amount) + " at the " + action.payload.title;
            const history = state.history.slice();
            history.push(str);
            return {
                total: state.total + action.payload.amount,
                history:history
            }
        case GET_TOTAL:
            return {
                total: state.total
            }
        case GET_HISTORY_REQUEST:
            return{
                history:state.history
            }
        default:
            return state;
    }
}

export default goldReducer;