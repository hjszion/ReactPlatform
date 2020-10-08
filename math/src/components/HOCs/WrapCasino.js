import HOC from './HOC';
import Casino from '../Casino';

const CasinoWrap = () => {
    return {title:"Casino", des:"Earns up to or Lose up tp 100 Gold!", btnText:"Casino!"}
}

const WrapCasino = HOC(Casino, CasinoWrap);

export default WrapCasino;

