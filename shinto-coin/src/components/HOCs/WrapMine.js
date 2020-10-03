import HOC from "./HOC";
import Mine from "../Mine";

const MineWrap = () => {
    return {title:"Mine ShintoCoin", description:"Here you can mine ShintoCoins by heing the first to solve the algorithm."}
}
const WrapMine = HOC(Mine, MineWrap);

export default WrapMine;