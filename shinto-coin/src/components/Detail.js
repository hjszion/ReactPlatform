import React from 'react';

class Detail extends React.Component{
    constructor(props) {
        super(props);
        this.state = {amount:0};
    }

    render(){
        return(
            <div key={this.props.key}>
                <h1>{this.props.data.title}</h1>
                <p>{this.props.data.description}</p>
                <br />
                <h4>id: {this.props.record.id}</h4>
                <h4>action: {this.props.record.action}</h4>
                <h4>amount: {this.props.record.amount}</h4>
                <h4>value: {this.props.record.value}</h4>
            </div>
        )
    }
}

export default Detail;


