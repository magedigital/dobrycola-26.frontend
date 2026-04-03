import DefaultI from '@components/default/types';
import Slider from '@services/slider/Slider';

type PropsT = {
    title: string;
    description: string;
    items: { title: string; image: string; info?: string }[];
    buttonText: string;
    buttonOnClick: () => void;
    sliderCallback: (current: number) => void;
};

type StateT = {};

interface RaffleI extends DefaultI<PropsT, StateT> {
    slider?: Slider;

    sliderInit(this: RaffleI): void;

    renderHead(this: RaffleI): React.ReactNode;
    renderContent(this: RaffleI): React.ReactNode;
}

export default RaffleI;
