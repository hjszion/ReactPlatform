import React from 'react';

class Edit extends React.Component{
    constructor(props) {
        super(props);
        this.state = {name:"", price:0, url:""}
    }

    handleChange = (e) => {
        this.setState({[e.target.name]:e.target.value});
        console.log("state:", this.state);
    }

    render(){
        return(
            <div>
                <h1>{this.props.data.title}</h1>
                <p>{this.props.data.description}</p>
                <br />
                <form onSubmit={() => this.props.editProduct(this.props.id, this.state.name, this.state.price, this.state.url)}>
                    <label>
                        Product Name:
                        <input name="name" type="text" onChange={this.handleChange}></input>
                    </label>
                    <label>
                        Product Price:
                        <input name="price" type="number" onChange={this.handleChange}></input>
                    </label>
                    <label>
                        Product Iamge Url:
                        <input name="url" type="text" onChange={this.handleChange}></input>
                    </label>
                    <button>Update</button>
                </form>
                <button onClick={() => this.props.delete(this.props.idx)}>Delete</button>
            </div>
        )
    }
}

export default Edit;