import PageI from '@components/page/types';

import { ProductsContentT } from '../products/types';

type PropsT = {};

type StateT = {
    content?: ProductsContentT;
};

interface FiveKaI extends PageI<PropsT, StateT> {}

export default FiveKaI;
