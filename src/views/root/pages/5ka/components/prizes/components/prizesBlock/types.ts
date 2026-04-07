import DefaultI from '@components/default/types';

type PropsT = {
    name: 'legend' | 'school';
    title: string;
    prizes: { thumb: string; title: string }[];
};

type StateT = {};

interface PrizesBlockI extends DefaultI<PropsT, StateT> {}

export default PrizesBlockI;
