import HOC from "./HOC";
import Buy from "../Buy";

const BuyWrap = () => {
    return {title:"Buy ShintoCoin", description:"Here you can Buy ShintoCoins by using your balance!"}
}
const WrapBuy = HOC(Buy, BuyWrap);

export default WrapBuy;
