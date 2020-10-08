import {ADD_GENRE, ADD_TODO, SHOW_GENRE} from "./genreTypes";

export const addGenre = (title="") => {
    // console.log("adding genre");
    return {
        type:ADD_GENRE,
        payload: title
    }
}

export const showGenre = (genre = {}) => {
    // console.log("showing genre and genre is:", genre);
    return {
        type:SHOW_GENRE,
        payload: genre
    }
}

export const addTodo = (todo="", index=0) => {
    // console.log("adding todo");
    return {
        type:ADD_TODO,
        payload: {todo:todo, index:index}
    }
}


