import HOC from "./HOC";
import Home from "../Home";

const HomeWrap = () => {
    return {title:"Home Page", description:"welcome to the Project Management. Here we can manage a set of products. You are able to create new products, remove old products, and edit products!"}
}
const WrapHome = HOC(Home, HomeWrap);

export default WrapHome;
