import DefaultI from '@components/default/types';
import Slider from '@services/slider/Slider';

type PropsT = {
    mode: 'desktop' | 'mobile';
};

type StateT = {};

interface ChequeBlockI extends DefaultI<PropsT, StateT> {
    slider?: Slider;

    sliderInit(this: ChequeBlockI): Promise<void>;
}

export default ChequeBlockI;
