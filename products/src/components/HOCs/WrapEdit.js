import HOC from "./HOC";
import Edit from "../Edit";

const EditWrap = () => {
    return {title:"Edit Product Page", description:"Now Change the data of the product as you want!"}
}
const WrapEdit = HOC(Edit, EditWrap);

export default WrapEdit;

