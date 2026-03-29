import PopupI from '@components/popup/types';
import { TableRenderEmptyT, TableRenderRowT } from '@components/table/types';
import { StoreT } from '@store/store';

import { ProfileTransactionT } from '../../../views/root/pages/profile/types';
import { ballsTableCols } from './static/table';

type PropsT = {
    profileData: StoreT['profileData'];
};

type StateT = {};

interface CodePopupI extends PopupI<PropsT, StateT> {
    renderTableCol: TableRenderRowT<ProfileTransactionT, keyof typeof ballsTableCols>;
    renderTableEmpty: TableRenderEmptyT;
}

export default CodePopupI;
