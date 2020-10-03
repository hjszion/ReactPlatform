import React from 'react';

class Buy extends React.Component{
    constructor(props) {
        super(props);
        this.state = {amount:0}
    }

    handleChange = (e) => {
        this.setState({amount:parseInt(e.target.value)});
    }

    render(){
        return(
            <div>
                <h1>{this.props.data.title}</h1>
                <p>{this.props.data.description}</p>
                <p>Your current balance is: {this.props.balance}</p>
                <p>Your current owned shinto coins is: {this.props.shinto}</p>
                <p>The current conversion rate is: {this.props.rate}</p>
                <br />
                <form onSubmit={() => this.props.handleBuy(this.state.amount)}>
                    <input type="number" onChange={this.handleChange}></input>
                    <button>Buy</button>
                </form>
            </div>
        )
    }
}

export default Buy;
