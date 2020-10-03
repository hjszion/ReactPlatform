import HOC from "./HOC";
import Detail from "../Detail";

const DetailWrap = () => {
    return {title:"Ledger Transaction Details", description:"Detailed view of a transactin from the ledger!"}
}
const WrapDetail = HOC(Detail, DetailWrap);

export default WrapDetail;
