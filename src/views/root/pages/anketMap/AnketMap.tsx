import React from 'react';

import Page from '@components/page/Page.tsx';
import { StoreT, WithStore } from '@store/store.tsx';

import init from './methods/init.ts';
import widgetInit from './methods/widgetInit.ts';
import widgetLoad from './methods/widgetLoad.ts';

import AnketMapI from './types.ts';

import renderContent from './renders/renderContent.tsx';
import renderHead from './renders/renderHead.tsx';

class AnketMap extends Page<AnketMapI['props'], AnketMapI['state']> implements AnketMapI {
    parent: AnketMapI['parent'];
    fivepost: AnketMapI['fivepost'];

    constructor(props: AnketMapI['props']) {
        super(props);
        this.state = {};
        this.parent = React.createRef();
    }

    mode = 'inner' as const;

    init = init;

    widgetLoad = widgetLoad;
    widgetInit = widgetInit;

    renderContent = renderContent;
    renderHead = renderHead;

    render() {
        return this.renderPage({
            render: () => <>{this.renderContent()}</>,
        });
    }
}

const mapStore = (s: StoreT) => ({
    storePages: s.pages,
});

export default WithStore(AnketMap, mapStore);
