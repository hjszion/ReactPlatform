import HOC from "./HOC";
import Home from "../Home";

const HomeWrap = () => {
    return {title:"ShintoCoin", description:"welcome to ShintoCoin, ShintoCoin are coins made by solving algorithms! Toget started, head over to Mine Coins and get to work!"}
}
const WrapHome = HOC(Home, HomeWrap);

export default WrapHome;
