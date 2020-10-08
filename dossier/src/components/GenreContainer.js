import React, {useState} from 'react';
import { connect } from "react-redux";
import { addGenre, addTodo, showGenre } from "../redux";

const GenreContainer = (props) => {
    const [todo, setTodo] = useState("");
    console.log("props:", props);
    // var todos = "";
    // if(props.genreData.todos != null){
    //     todos = props.genreData.todos.map((todo) => {
    //         return <p key={todo}>{todo}</p>
    //     });
    // }

    const todos = props.genreData.todos.map((todo) => {
        return <p key={todo}>{todo}</p>
    });

    return (
        <div className="App">
            <h1>{props.genreData.title}</h1>
            {todos}
            <br />
            <input value={todo} onChange={(e) => setTodo(e.target.value)}/>
            <button onClick={() => props.addTodo(todo, genreData.)}>
                Add Todo
            </button>
            <br />
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        genreData: state.genres.genre
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (todo) => dispatch(addTodo(todo)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GenreContainer);