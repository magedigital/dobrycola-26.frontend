import DefaultI from '@components/default/types';
import PageI from '@components/page/types';

type PropsT = {
    mode?: 'popup' | 'inner';
    setMenuState: PageI['setMenuState'];
    pageCloseHandler?: () => void;
};

type StateT = {};

interface TopBarI extends DefaultI<PropsT, StateT> {
    renderLogo(this: TopBarI): React.ReactNode;
    renderActions(this: TopBarI): React.ReactNode;
}

export default TopBarI;
