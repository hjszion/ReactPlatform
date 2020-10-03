import React from 'react';

class Mine extends React.Component{
    constructor(props) {
        super(props);
        this.state = {answer:-1}
    }

    handleChange = (e) => {
        this.setState({answer:e.target.value});
    }

    render(){
        return(
            <div>
                <h1>{this.props.data.title}</h1>
                <p>{this.props.data.description}</p>
                <br />
                <p>{this.props.question[0]}</p>
                <form onSubmit={() => this.props.handleSubmit(this.props.idx, this.state.answer)}>
                    <input type="number" onChange={this.handleChange}></input>
                    <button>Mine</button>
                </form>
            </div>
        )
    }
}

export default Mine;
