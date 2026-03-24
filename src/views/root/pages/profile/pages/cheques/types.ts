import DefaultI from '@components/default/types';

import { ProfileDataT } from '../../types';

type PropsT = {
    setRenderKey: () => void;
    data?: ProfileDataT;
};

type StateT = {
    currentCodesCount: number;
};

interface ChequesI extends DefaultI<PropsT, StateT> {
    codeMoreHandler(this: ChequesI): Promise<void>;

    renderOffer(this: ChequesI): React.ReactNode;
}

export default ChequesI;
