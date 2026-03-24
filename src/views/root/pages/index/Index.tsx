import React from 'react';

import Page from '@components/page/Page.tsx';

import Footer from '../../components/footer/Footer.tsx';
import App from './components/app/App.tsx';
import Header from './components/header/Header.tsx';
import Map from './components/map/Map.tsx';

import pageInit from './methods/pageInit.ts';

import IndexI from './types.ts';

class Index extends Page<IndexI['props'], IndexI['state']> implements IndexI {
    parent: IndexI['parent'];

    constructor(props: IndexI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
    }

    pageName = 'index';

    pageInit = pageInit;

    render() {
        return this.renderPage({
            render: () => (
                <>
                    <Header />
                    <Map />
                    <App />
                    <Footer />
                </>
            ),
        });
    }
}

export default Index;
