import DefaultI from '@components/default/types';

import { ProductsContentT } from '../../../products/types';

type PropsT = {
    content: ProductsContentT;
};

type StateT = {};

interface ProductsI extends DefaultI<PropsT, StateT> {}

export default ProductsI;
