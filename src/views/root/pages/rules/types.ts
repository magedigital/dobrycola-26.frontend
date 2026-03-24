import PageI from '@components/page/types';

import { MainContentT } from '../index/types';

type PropsT = {};

type StateT = {
    content?: MainContentT;
};

interface RulesI extends PageI<PropsT, StateT> {
    getContent(this: RulesI): Promise<void>;
}

export default RulesI;
