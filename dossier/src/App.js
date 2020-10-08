import React, {useState} from 'react';
import './App.css';
import {
  BrowserRouter,
  Route,
  Link,
  Redirect,
  withRouter,
  Switch
} from 'react-router-dom';
import { connect } from "react-redux";
import { addGenre, addTodo, showGenre } from "./redux";
import GenreContainer from "./components/GenreContainer";

const App = (props) => {
    const [title, setTitle] = useState("");
    // console.log("genreData:", props.genreData, "title:", title);
    console.log("props:", props);

    const genres = props.genreData.genres.map((genre) => {
        console.log("genre:", genre);
        return <button key={genre.title} onClick={() => {
            props.showGenre(genre)
        }}>{genre.title}</button>
    });

    const curGenre = () => {
        return props.genreData.genre != null ? <GenreContainer /> : <div />
    }

    console.log("curGenre:", curGenre());

    return (
    <div className="App">
    <h1>Add Todo</h1>
    <br />
    <input value={title} onChange={(e) => setTitle(e.target.value)}/>
    <button onClick={() => props.addGenre(title)}>
      Add New Genre
    </button>
    <br />
    <div>
        {genres}
    </div>
    <br />
        {curGenre()}
    </div>
    );
}

const mapStateToProps = (state) => {
    return {
        genreData: state.genres
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addGenre: (title) => dispatch(addGenre(title)),
        showGenre: (genre) => dispatch(showGenre(genre))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);


