import UserT from '@api/entities/User';
import DefaultI from '@components/default/types';

import { ProfileDataT } from '../../types';

type PropsT = {
    data: ProfileDataT;
    authUser: UserT;
};

type StateT = {};

interface PrizesI extends DefaultI<PropsT, StateT> {
    renderPrizes(this: PrizesI): React.ReactNode;
}

export default PrizesI;
