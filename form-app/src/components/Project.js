import React, {useState} from 'react';

class Project extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div key={this.props.value}>
                <h1>{this.props.proj}</h1>
                <h3>{this.props.des}</h3>
                <h3>{this.props.minutes}</h3>
            </div>
        );
    }
}

export default Project;