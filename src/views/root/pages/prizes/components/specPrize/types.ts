import DefaultI from '@components/default/types';

type PropsT = {
    title: string;
    text: string;
    thumb: string;
    mobThumb: string;
    name: string;
    button: {
        text: string;
        onClick: () => void;
    };
};

type StateT = {};

interface SpecPrizeI extends DefaultI<PropsT, StateT> {}

export default SpecPrizeI;
