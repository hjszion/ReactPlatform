import React from 'react';
import {
  BrowserRouter,
  Route,
  Link,
  Redirect,
  withRouter,
  Switch
} from 'react-router-dom';

import './App.css';
import WrapHome from "./components/HOCs/WrapHome";
import WrapCreate from "./components/HOCs/WrapCreate";
import WrapProducts from "./components/HOCs/WrapProducts";
import WrapEdit from "./components/HOCs/WrapEdit";

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {products:[]}
  }

  addProduct = (name, price, url) => {
    console.log("adding product!");
    const products = this.state.products.slice();
    const product = {id:products.length, name:name, price:price, url:url};
    products.push(product);
    this.props.history.push("/productlist");
    this.setState({products:products});
    this.forceUpdate();
  }

  editProduct = (pro_id, name, price, url) => {
    console.log("updating product!", "pro_id:", pro_id);
    //  console.log("match:", this.props.match);
    const products = this.state.products.slice();
    const product = {id:products.length, name:name, price:price, url:url};
    for(var i=0; i<products.length; i++){
      if(products[i].id == pro_id){
        console.log("i:", i , "product:", product);
        products[i] = product;
        break;
      }
    }
    this.setState({products:products});
    this.props.history.push("/productlist");
    this.forceUpdate();
  }

  deleteProduct = (idx) => {
    console.log("deleting product!");
    const products = this.state.products.slice();
    for(var i=0; i<products.length; i++){
      if(products[i].id == idx){
        products.slice(i,1);
        break;
      }
    }
    this.setState({products:products});
    this.props.history.push("/productlist");
    this.forceUpdate();
  }

  redirect = (url, pro_id) => {
    console.log("redirecting!");
    // const des = url+pro_id;
    const des = {
      path:url+":id",
      url:url+pro_id,
      isExact:true,
      params:{
        id:pro_id
      }
    }
    this.props.history.push(url+pro_id);
    // this.props.match = des;
    this.forceUpdate();
  }

  render(){
    return (
        <div className="App">
          <h1>PPM - Projecct Product Management</h1>
          <br />
            <button><Link to="/home">Home</Link></button> |
            <button><Link to="/productlist">Product List</Link></button> |
            <button><Link to="/productcreation">Product Creation</Link></button>
            <br />
            <Switch>
              <Route exact path="/home" component={WrapHome} />
              <Route exact path="/productlist" component={props => {
                return <WrapProducts products={this.state.products} redirect={this.redirect}/>
              }} />
              <Route exact path="/productcreation" component={props => {
                  return <WrapCreate addProduct={this.addProduct} />
              }} />
              <Route exact path="/products/edit/:id" component={props => {
                  console.log("props.match:", this.props.match);
                  return <WrapEdit id={this.props.match.params.id} editProduct={this.editProduct} delete={this.deleteProduct} />
              }} />
            </Switch>
        </div>
    );
  }
}

export default withRouter(App);




