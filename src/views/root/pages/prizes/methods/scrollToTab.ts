import { appStore } from '@store/store.tsx';
import setAnimate from '@utils/setAnimate.ts';

import I from '../types.ts';

import { AppRouter } from '../../../../../index.tsx';

const scrollToTab: I['scrollToTab'] = function (force) {
    const storePages = appStore.getState().pages;
    const prizesCurrentPage = (Object.keys(storePages) as (keyof typeof storePages)[]).find(
        (n) => storePages[n].isShow && AppRouter.pages[n].parentName === 'prizes',
    );

    if (!prizesCurrentPage) {
        return;
    }

    const tabsScrollNode = this.parent.current!.querySelector(
        '.profile__pagesTabsWrapper',
    ) as HTMLElement;
    const tabNode = this.parent.current!.querySelector(
        `.profile__pagesTabWrapper[data-id="${prizesCurrentPage}"]`,
    ) as HTMLElement;

    if (!tabNode) {
        return;
    }

    const startScroll = tabsScrollNode.scrollLeft;
    const tabLeft = tabNode.getBoundingClientRect().x - tabsScrollNode.getBoundingClientRect().x;
    const tabResultPos = tabsScrollNode.offsetWidth / 2 - tabNode.offsetWidth / 2 - tabLeft;

    if (force) {
        tabsScrollNode.scrollLeft = startScroll - tabResultPos;

        return;
    }

    setAnimate({
        duration: 300,
        draw: (progress) => {
            tabsScrollNode.scrollLeft = startScroll - progress * tabResultPos;
        },
    });
};

export default scrollToTab;
