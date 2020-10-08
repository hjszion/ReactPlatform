import HOC from './HOC';
import Farm from '../Farm';

const FarmWrap = () => {
    return {title:"Farm", des:"Earns 2-5 Gold", btnText:"Farm!"};
}

const WrapFarm = HOC(Farm, FarmWrap);

export default WrapFarm;

