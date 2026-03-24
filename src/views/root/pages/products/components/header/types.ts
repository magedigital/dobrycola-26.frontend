import UserT from '@api/entities/User';
import DefaultI from '@components/default/types';

import { ProductsContentT } from '../../types';

type PropsT = {
    authUser: UserT;
    content: ProductsContentT;
};

type StateT = {};

interface HeaderI extends DefaultI<PropsT, StateT> {}

export default HeaderI;
