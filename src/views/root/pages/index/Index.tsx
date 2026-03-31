import React from 'react';

import Page from '@components/page/Page.tsx';
import { StoreT, WithStore } from '@store/store.tsx';

import Footer from '../../components/footer/Footer.tsx';
import App from './components/app/App.tsx';
import Header from './components/header/Header.tsx';
import Map from './components/map/Map.tsx';

import changePropsCb from './methods/changePropsCb.ts';
import pageInit from './methods/pageInit.ts';

import IndexI from './types.ts';

class Index extends Page<IndexI['props'], IndexI['state']> implements IndexI {
    parent: IndexI['parent'];

    constructor(props: IndexI['props']) {
        super(props);

        this.state = {
            isInit: false,
        };

        this.parent = React.createRef();
    }

    changingProps = ['mainContent'];

    pageName = 'index';

    changePropsCb = changePropsCb;

    pageInit = pageInit;

    render() {
        const { mainContent } = this.props;

        return this.renderPage({
            render: () =>
                mainContent ? (
                    <>
                        <Header mainContent={mainContent} />
                        <Map />
                        <App />
                        <Footer />
                    </>
                ) : null,
        });
    }
}

const mapStore = (s: StoreT) => ({
    mainContent: s.mainContent,
});

export default WithStore(Index, mapStore);
