import DefaultI from '@components/default/types';
import PageI from '@components/page/types';

type PropsT = {
    mode?: 'popup' | 'inner' | '5ka';
    setMenuState: PageI['setMenuState'];
    pageCloseHandler?: () => void;
};

type StateT = {};

interface TopBarI extends DefaultI<PropsT, StateT> {
    render5ka(this: TopBarI): React.ReactNode;
    renderLogo(this: TopBarI): React.ReactNode;
    renderActions(this: TopBarI): React.ReactNode;
}

export default TopBarI;
