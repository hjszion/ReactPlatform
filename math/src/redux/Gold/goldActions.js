import {UPDATE_GOLD_REQUEST, GET_HISTORY_REQUEST, GET_TOTAL} from "./goldTypes";

export const updateGoldRequest = (data) => {
    return{
        type:UPDATE_GOLD_REQUEST,
        payload:data
    }
}

export const getHistoryRequest = () => {
    return{
        type:GET_HISTORY_REQUEST
    }
}

export const getTotalRequest = () => {
    return{
        type:GET_TOTAL
    }
}



