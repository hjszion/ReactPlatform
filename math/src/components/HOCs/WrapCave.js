import HOC from './HOC';
import Cave from '../Cave';

const CaveWrap = () => {
    return {title:"Cave", des:"Earns 5-10 Gold", btnText:"Cave!"}
}

const WrapCave = HOC(Cave, CaveWrap);

export default WrapCave;