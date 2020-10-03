import React from 'react';
import logo from './logo.svg';
import {
    BrowserRouter,
    Route,
    Link
} from 'react-router-dom'

import './App.css';
import JavaScript from "./components/JavaScript";
import Haskell from "./components/Haskell";
import CoffeeScript from "./components/CoffeeScript";

class App extends React.Component{
    constructor() {
        super();
        this.state = {current:null}
    }

    handleClick = (e) => {
        console.log("clicking!");
        e.preventDefault();
        if(e.target.name == "js"){
            this.setState({current:"This is JavaScript!"});
        }else if(e.target.name == "hk"){
            this.setState({current:"This is Haskell!"});
        }else if(e.target.name == "cs"){
            this.setState({current:"This is CoffeeScript!"});
        }
    }

    render(){
        // const current = () => {
        //     if(this.state.current == "This is JavaScript!"){
        //         return <JavaScript />
        //     }else if(this.state.current == "This is Haskell!"){
        //         return <Haskell />
        //     }else if(this.state.current == "This is CoffeeScript!"){
        //         return <CoffeeScript />
        //     }
        // }

        // return (
        //     <div className="App">
        //         <a href="/javascript" name="js" onClick = {this.handleClick}>JavaScript</a>
        //         <br />
        //         <a href="/haskell" name="hk" onClick = {this.handleClick}>HasKell</a>
        //         <br />
        //         <a href="/coffeescript" name="cs" onClick = {this.handleClick}>CoffeeScript</a>
        //         <br />
        //         {current()}
        //     </div>
        // );
        return (
            <BrowserRouter>
                <div>
                    <ul>
                        <li><Link to="/javascript">JavaScript</Link></li>
                        <li><Link to="/haskell">Haskell</Link></li>
                        <li><Link to="/coffeescript">CoffeScript</Link></li>
                    </ul>
                    <Route path="/javascript" component={JavaScript} />
                    <Route path="/haskell" component={Haskell} />
                    <Route path="/coffeescript" component={CoffeeScript} />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
