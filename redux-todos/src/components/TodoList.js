import React, {useEffect} from 'react';
import { connect } from "react-redux";
import mapDispatchToProps from "react-redux/lib/connect/mapDispatchToProps";

import { fetchTodos } from "../actions/todoActions";
import Todo from "../components/Todo";

const TodoList = (props) => {
    console.log("props:", props);
    useEffect(() => {
        props.fetchTodos();
    }, []);

    console.log(props);

    return (
        <div>
            {props.todos && prosp.todos.map(() => <Todo key={tod.id} {...todo} />)}
        </div>
    )
}

const mapStateToProps = ({ todoReducer }) => ({
    todos: todoReducer.todos
});

// const mapDispatchToProps = () => {
//     return {
//
//     }
// };

export default connect(mapStateToProps, {fetchTodos})(TodoList);


