import React, {useState, useEffect} from 'react';
import {Provider} from 'react-redux';
import store from "./redux/store";
import './App.css';

import { BrowserRouter, Switch, Route, Link} from 'react-router-dom';

import SearchContainer from "./components/SearchContainer";
import DetailContainer from "./components/DetailContainer";

function App() {
  return (
      <Provider store={store}>
        <div className="App">
            <Switch>
                <Route exact path="/" component={SearchContainer} />
                <Route exact path="/profile/:id" component={DetailContainer} />
            </Switch>
        </div>
      </Provider>
  );
}

export default App;
