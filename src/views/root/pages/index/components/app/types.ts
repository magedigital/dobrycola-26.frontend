import DefaultI from '@components/default/types';

import { MainContentT } from '../../types';

type PropsT = {
    mainContent: MainContentT;
};

type StateT = {};

interface AppI extends DefaultI<PropsT, StateT> {}

export default AppI;
