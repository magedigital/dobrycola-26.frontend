import PageI from '@components/page/types';
import { StoreT } from '@store/store';

type PropsT = {
    storePages: StoreT['pages'];
};

type StateT = {
    loadingKey?: string;
};

interface AnketMapI extends PageI<PropsT, StateT> {
    fivepost?: any;

    widgetLoad(this: AnketMapI): Promise<void>;
    widgetInit(this: AnketMapI): Promise<void>;

    renderContent(this: AnketMapI): React.ReactNode;
    renderHead(this: AnketMapI): React.ReactNode;
}

export default AnketMapI;
