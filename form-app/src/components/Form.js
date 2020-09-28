import React, {useState} from 'react';

class Form extends React.Component{
    constructor(props) {
        super(props);
        this.state = {selection: "grapefruit", des:"", des_error: "", minutes:30};
    }

    handleChange = (e) => {
        console.log("we are here!");
        const name = e.target.name;
        this.setState({[name]: e.target.value});
        this.check(name, e.target.value);
    }

    check = (name, value) => {
        if(name == "select"){
            console.log("is select");
        }else if(name == "des"){
            console.log("is des");
            const re = /^[A-Za-z0-9]+$/;
            if(!re.test(value)){
                this.setState({des_error: "input description is not valid format!"});
            }else{
                this.setState({des_error: null})
            }
        }
    }

    handleSubmit = (e) => {
        console.log("submitting!- child");
        e.preventDefault();
        const des_error = this.state.des_error;
        if(des_error == null){
            this.props.handleSubmit(this.state.selection, this.state.des, this.state.minutes);
        }
    }

    render() {
        const des_error = this.state.des_error;
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    <select name="select" value={this.state.selection} onChange={this.handleChange}>
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                    </select>
                </label>
                <br />
                <label>
                    Description Here:
                    <input type="text" name="des" value={this.state.des} onChange={this.handleChange} />
                    <span className="error" aria-live="polite">{des_error}</span>
                </label>
                <br />
                <label>
                    Minutes:
                    <input type="number" name="minutes" value={this.state.minutes} onChange={this.handleChange} />
                </label>
                <br />
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default Form;
