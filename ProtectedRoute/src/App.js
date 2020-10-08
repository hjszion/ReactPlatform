import React from 'react';
import logo from './logo.svg';
import './App.css';

import {LandingPage} from "./components/LandingPage";
import {AppLayout} from './components/app.layout';
import {ProtectedRoute} from "./components/protected.route";

import {BrowserRouter, Route, Switch} from 'react-router-dom';

class App extends React.Component{
    render(){
        return (
            <div className="App">
                <h1>Protected React Router</h1>
                <br />
                <Switch>
                    <Route exact path="/" component={LandingPage} />
                    <ProtectedRoute exact path="/app" component={AppLayout} />
                    <Route path="*" component={() => "404 Not Fount!"} />
                </Switch>
            </div>
        );
    }
}

export default App;


