import HOC from "./HOC";
import Create from "../Create";

const CreateWrap = () => {
    return {title:"Create Page", description:"Create a new Product with name / price / url"}
}
const WrapCreate = HOC(Create, CreateWrap);

export default WrapCreate;


