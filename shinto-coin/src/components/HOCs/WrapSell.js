import HOC from "./HOC";
import Sell from "../Sell";

const SellWrap = () => {
    return {title:"Sell ShintoCoin", description:"Here you can Sell ShintoCoins to increase your balance!"}
}
const WrapSell = HOC(Sell, SellWrap);

export default WrapSell;
