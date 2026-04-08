import DefaultI from '@components/default/types';
import Slider from '@services/slider/Slider';

type PropsT = {
    name: 'legend' | 'school';
    title: string;
    prizes: { thumb: string; title: string }[];
    mode: 'desktop' | 'mobile';
};

type StateT = {};

interface PrizesBlockI extends DefaultI<PropsT, StateT> {
    slider?: Slider;

    sliderInit(this: PrizesBlockI): Promise<void>;
}

export default PrizesBlockI;
