import React from 'react';
import {
  BrowserRouter,
  Route,
  Link,
  Redirect,
  withRouter,
  Switch
} from 'react-router-dom';
import './App.css';
import Nested from "./component/Routes/Nested";

class App extends React.Component{
  constructor(props) {
    super(props);
  }
  render(){
    return (
        <div className="App">
          <Nested />
        </div>
    );
  }
}

export default withRouter(App);
