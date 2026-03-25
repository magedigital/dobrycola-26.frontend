import DefaultI from '@components/default/types';

import { ProductsContentT } from '../../types';

type PropsT = {
    content: ProductsContentT;
};

type StateT = {};

interface HeaderI extends DefaultI<PropsT, StateT> {}

export default HeaderI;
