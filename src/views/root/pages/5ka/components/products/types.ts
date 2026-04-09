import DefaultI from '@components/default/types';

import { FivekaContentT } from '../../types';

type PropsT = {
    content: FivekaContentT;
};

type StateT = {};

interface ProductsI extends DefaultI<PropsT, StateT> {}

export default ProductsI;
