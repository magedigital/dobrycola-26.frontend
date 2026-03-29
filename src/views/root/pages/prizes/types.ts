import PageI from '@components/page/types';
import { StoreT } from '@store/store';

import { MainContentT } from '../index/types';

type PropsT = {
    mainContent: StoreT['mainContent'];
};

type StateT = {
    loadingKey?: string;
    pagesRenderKey?: string;
    content?: MainContentT;
};

interface PrizesI extends PageI<PropsT, StateT> {
    setPagesRenderKey(this: PrizesI): Promise<void>;
    scrollToTab(this: PrizesI, force?: boolean): void;

    renderHead(this: PrizesI): React.ReactNode;
    renderPages(this: PrizesI): React.ReactNode;
}

export default PrizesI;
