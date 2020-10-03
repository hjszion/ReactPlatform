import HOC from "./HOC";
import Ledger from "../Ledger";

const LedgerWrap = () => {
    return {title:"Browse The Ledger", description:"Here you can browse all ShintoCoin transactions"}
}
const WrapLedger = HOC(Ledger, LedgerWrap);

export default WrapLedger;
