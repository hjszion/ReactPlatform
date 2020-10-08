import React from 'react';
import {
    BrowserRouter,
    Route,
    Link,
    Redirect,
    withRouter,
    Switch
} from 'react-router-dom';

class Nested extends React.Component{
    constructor(props) {
        super(props);
    }

    console = () => {
        console.log("props:", this.props);
    }

    render(){
        this.console();
        return(
           <div>
               <div>
                   <Link to={`${this.props.match.url}`}>Home</Link>
                   <Link to={`${this.props.match.url}/seattle`}>Seattle</Link>
                   <Link to={`${this.props.match.url}/sanjose`}>SanJose</Link>
                   <Link to={`${this.props.match.url}/Burbank`}>Burbank</Link>
                   <Link to={`${this.props.match.url}/dallas`}>Dallas</Link>
                   <Link to={`${this.props.match.url}/dc`}>DC</Link>
                   <Link to={`${this.props.match.url}/chicago`}>Chicago</Link>
               </div>
               <br />
               <Switch>
                   <Route exact path={`${this.props.match.url}`} component={props => {
                       return (
                           <div>
                               <h1>The Home Page</h1>
                           </div>
                       )
                   }} />
               </Switch>
           </div>
        );
    }
}

export default withRouter(Nested);

