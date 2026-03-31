import DefaultI from '@components/default/types';
import PageI from '@components/page/types';
import { PageNamesT } from '@services/router/static/pages';

type PropsT = {
    setState: PageI['setMenuState'];
};

type StateT = {};

type MenuNavItemT = {
    text: string;
    name: string;
    type: 'ancor' | 'link' | 'href';
    ancorName?: string;
    pageName?: PageNamesT;
    href?: string;
    ancor?: string;
};

interface MenuI extends DefaultI<PropsT, StateT> {
    getNav(this: MenuI): MenuNavItemT[];

    navItemHandler(this: MenuI, i: MenuNavItemT): Promise<void>;

    renderTop(this: MenuI): React.ReactNode;
    renderNav(this: MenuI): React.ReactNode;
    renderActions(this: MenuI): React.ReactNode;
    renderGames(this: MenuI): React.ReactNode;
}

export default MenuI;
export type { MenuNavItemT };
