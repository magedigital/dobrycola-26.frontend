import DefaultI from '@components/default/types';
import { TableRenderEmptyT, TableRenderRowT } from '@components/table/types';

import { ProfileCheckT, ProfileContentT, ProfileDataT } from '../../types';
import { chequesTableCols } from './static/table';

type PropsT = {
    setRenderKey: () => void;
    data?: ProfileDataT;
    content: ProfileContentT;
};

type StateT = {
    currentCodesCount: number;
};

interface ChequesI extends DefaultI<PropsT, StateT> {
    codeMoreHandler(this: ChequesI): Promise<void>;

    renderTableCol: TableRenderRowT<ProfileCheckT, keyof typeof chequesTableCols>;
    renderTableEmpty: TableRenderEmptyT;
}

export default ChequesI;
