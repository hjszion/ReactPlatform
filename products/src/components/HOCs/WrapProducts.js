import HOC from "./HOC";
import Products from "../Products";

const ProductsWrap = () => {
    return {title:"ProductsList Page", description:"Welcome, here is all the products in our storage!"}
}
const WrapProducts = HOC(Products, ProductsWrap);

export default WrapProducts;


