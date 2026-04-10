import DefaultI from '@components/default/types';
import Slider from '@services/slider/Slider';

import { ProfileOrderT } from '../../../../types';

type PropsT = {
    items: ProfileOrderT[];
};

type StateT = {};

interface PrizesI extends DefaultI<PropsT, StateT> {
    slider?: Slider;

    sliderInit(this: PrizesI): void;
}

export default PrizesI;
