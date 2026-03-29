import DefaultI from '@components/default/types';
import Slider from '@services/slider/Slider';

import { PrizeT } from '../../../index/types';

type PropsT = {
    title: string;
    metaTitle: string;
    description?: string;
    buttonText: string;
    buttonOnClick: () => void;
    items: PrizeT[];
    name: string;
};

type StateT = {
    needSlider: boolean;
    current?: number;
};

interface PrizesPageI extends DefaultI<PropsT, StateT> {
    slider?: Slider;

    sliderInit(this: PrizesPageI): void;

    renderHead(this: PrizesPageI): React.ReactNode;
    renderContent(this: PrizesPageI): React.ReactNode;
}

export default PrizesPageI;
