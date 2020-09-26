import React, {useState, useEffect} from 'react';
import './App.css';

import From from "./component/Form";
import TodoList from "./component/TodoList";

function App() {
    // useState -> another way of setting and changing state
    const [inputText, setInputText] = useState("");
    const [todos, setTodos] = useState([]);
    const [status, setStatus] = useState("all");
    const [filteredTodos, setFilteredTodos] = useState([]);

    // Run Once when the app start
    useEffect(() => {
        getLocalTodos();
    }, []);   // empty array -> only run once

    // useEffect ->
    useEffect(() => {
        console.log("hey");
        filterHandler();
        saveLocalTodos();
    }, [todos, status]);   // everytime the things in the [] changes, it triggers the inside code

    // Functions
    const filterHandler = () => {
        switch(status){
            case 'completed':
                setFilteredTodos(todos.filter(todo => todo.completed === true));
                break;
            case 'uncompleted':
                setFilteredTodos(todos.filter(todo => todo.completed === false));
                break;
            default:
                setFilteredTodos(todos);
                break;
        }
    }

    // Save to Local => then when refresh the page the data is still there because we saved to local storage
    const saveLocalTodos = () => {
        localStorage.setItem('todos', JSON.stringify(todos));
    };

    const getLocalTodos = () => {
        if(localStorage.getItem("todos") === null){
            localStorage.setItem('todos', JSON.stringify([]));
        }else{
            let todoLocal = JSON.parse(localStorage.getItem('todos', JSON.stringify(todos)));
            setTodos(todoLocal);
        }
    };

    return (
    <div className="App">
        <header>
            <h1>Zion's Todo List</h1>
        </header>
        <From todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText} setStatus={setStatus} />
        <TodoList setTodos={setTodos} todos={filteredTodos} />
    </div>
    );
}

export default App;

