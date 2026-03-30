import React from 'react';

import Pages from '@components/pages/Pages.tsx';
import { PopupT, popups } from '@store/popups.ts';

import Errors from './components/errors/Errors.tsx';

import changePageListener from './methods/changePageListener.ts';
import init from './methods/init.ts';
import popupsHandler from './methods/popupsHandler.ts';
import resizeHandler from './methods/resizeHandler.ts';

import RootI from './types.ts';

import { AppRouter } from '../../index.tsx';
import { StoreT, WithStore } from '../../store/store.tsx';
import renderCookies from './renders/renderCookies.tsx';
import renderPopups from './renders/renderPopups.tsx';
import { rootPages } from './static/pages.tsx';

const Styles = typeof window !== 'undefined' && require('./components/Styles.tsx').default;

class Root extends React.Component<RootI['props'], RootI['state']> implements RootI {
    parent: React.RefObject<HTMLDivElement | null>;

    constructor(props: RootI['props']) {
        super(props);
        this.state = {};

        this.changePageListener = this.changePageListener.bind(this);

        this.parent = React.createRef();
    }

    resizeHandler = resizeHandler;
    popupsHandler = popupsHandler;
    changePageListener = changePageListener;

    init = init;

    renderPopups = renderPopups;
    renderCookies = renderCookies;

    componentDidMount(): void {
        this.init();
    }

    render() {
        const { isRootInit } = this.props;

        return (
            <>
                {Styles && <Styles />}
                <Errors />
                <div className="body__content">
                    {this.renderCookies()}
                    {this.renderPopups()}
                    {isRootInit && (
                        <Pages
                            context={this}
                            pages={rootPages}
                            filter={(name) =>
                                !AppRouter.pages[name].level &&
                                !!window.isBot === !!AppRouter.pages[name].forBot
                            }
                        />
                    )}
                </div>
            </>
        );
    }
}

const mapStore = (store: StoreT) => ({
    isRootInit: store.isRootInit,
    isCookiesShow: store.isCookiesShow,
    currentPopup: store.currentPopup,
    ...(() => {
        const popupsData: Record<keyof typeof popups, PopupT> = {} as Record<
            keyof typeof popups,
            PopupT
        >;

        (Object.keys(popups) as (keyof typeof popups)[]).forEach((key) => {
            popupsData[key] = store[key];
        });

        return popupsData;
    })(),
});

export default WithStore(Root, mapStore);
