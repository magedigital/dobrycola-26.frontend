import DefaultI from '@components/default/types';

type PropsT = {};

type StateT = {};

interface PrizesI extends DefaultI<PropsT, StateT> {
    renderPrizes(this: PrizesI, data: { mode: 'desktop' | 'mobile' }): React.ReactNode;
    renderCheques(this: PrizesI): React.ReactNode;
    renderPromo(this: PrizesI): React.ReactNode;
}

export default PrizesI;
