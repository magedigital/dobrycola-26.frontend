import DefaultI from '@components/default/types';

type PropsT = {};

type StateT = {};

interface StepsI extends DefaultI<PropsT, StateT> {
    renderCards(this: StepsI): React.ReactNode;
    renderOffer(this: StepsI): React.ReactNode;
}

export default StepsI;
