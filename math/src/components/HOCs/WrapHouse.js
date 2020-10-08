import HOC from './HOC';
import House from '../House';

const HouseWrap = () => {
    return {title:"House", des:"Earns 7 - 15 Gold", btnText:"House!"}
}

const WrapHouse = HOC(House, HouseWrap);

export default WrapHouse;
