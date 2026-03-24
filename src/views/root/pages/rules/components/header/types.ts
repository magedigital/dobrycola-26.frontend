import UserT from '@api/entities/User';
import DefaultI from '@components/default/types';

import { MainContentT } from '../../../index/types';

type PropsT = {
    authUser: UserT;
    content: MainContentT;
};

type StateT = {};

interface HeaderI extends DefaultI<PropsT, StateT> {
    renderHead(this: HeaderI): React.ReactNode;
    renderCards(this: HeaderI): React.ReactNode;
}

export default HeaderI;
