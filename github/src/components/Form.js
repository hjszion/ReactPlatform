import React, {useState, useEffect} from 'react';

class Form extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            username:""
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.username != ""){
            this.props.submit(this.state.username);
        }else{
            alert("must type a user name first!");
        }
    }

    handleChange = (e) => {
        this.setState({username: e.target.value});
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <label><h3>Github Score</h3></label>
                <label>
                    Github UserName Here:
                    <input type="text" value={this.state.username} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

export default Form;