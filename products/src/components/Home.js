import React from 'react';

class Home extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div>
                <h1>{this.props.data.title}</h1>
                <p>{this.props.data.description}</p>
            </div>
        )
    }
}

export default Home;