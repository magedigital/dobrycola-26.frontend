import DefaultI from '@components/default/types';
import { TableRenderEmptyT, TableRenderRowT } from '@components/table/types';

import { ProfileCodeT, ProfileContentT, ProfileDataT } from '../../types';
import { codeTableCols } from './static/table';

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

    renderTableCol: TableRenderRowT<ProfileCodeT, keyof typeof codeTableCols>;
    renderTableEmpty: TableRenderEmptyT;
}

export default IndexI;
