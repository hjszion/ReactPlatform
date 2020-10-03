import React from 'react';

class Products extends React.Component{
    constructor(props) {
        super(props);
        this.state = {name:"", price:0, url:""}
    }

    handleChange = (e) => {
        this.setState({[e.target.name]:e.target.value});
        console.log("state:", this.state);
    }

    render(){
        const products = this.props.products.map((product, index) => {
            console.log("product:", product, "index:", index);
            return (
                <div key={index}>
                    <img src={product.url} alt="product" width="500" height="360" />
                    <h3>Product Name: {product.name}</h3>
                    <h3>Product Price: ${product.price}</h3>
                    <br />
                    <button onClick={() => this.props.redirect("/products/edit/", product.id)}>Edit</button>
                    <button>Delete</button>
                </div>
            )
        });
        return(
            <div>
                <h1>{this.props.data.title}</h1>
                <p>{this.props.data.description}</p>
                <br />
                {products}
            </div>
        )
    }
}

export default Products;