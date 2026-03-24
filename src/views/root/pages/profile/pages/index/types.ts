import DefaultI from '@components/default/types';

import { ProfileContentT, ProfileDataT } from '../../types';

type PropsT = {
    setRenderKey: () => void;
    data: ProfileDataT;
    content: ProfileContentT;
};

type StateT = {
    currentCodesCount: number;
    currentRuffleIndex?: number;
    currentMerchIndex?: number;
};

interface IndexI extends DefaultI<PropsT, StateT> {
    codeMoreHandler(this: IndexI): Promise<void>;

    renderCodes(this: IndexI): React.ReactNode;
    renderRaffles(this: IndexI): React.ReactNode;
    renderPrizes(this: IndexI): React.ReactNode;
}

export default IndexI;
