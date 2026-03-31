import DefaultI from '@components/default/types.ts';
import { PopupsT } from '@store/popups.ts';

import { StoreT } from '../../store/store.tsx';

type PropsT = {
    isRootInit: StoreT['isRootInit'];
    isCookiesShow: StoreT['isCookiesShow'];
    currentPopup: StoreT['currentPopup'];
} & PopupsT;

type StateT = {};

interface RootI extends DefaultI<PropsT, StateT> {
    resizeHandler(this: RootI, force?: boolean): Promise<void>;
    init(this: RootI): Promise<void>;
    popupsHandler(this: RootI, set?: boolean): void;
    changePageListener(this: RootI, e: CustomEvent<{ isPopstate?: boolean }>): void;

    renderPopups(this: RootI): React.ReactNode;
    renderCookies(this: RootI): React.ReactNode;
}

export default RootI;
