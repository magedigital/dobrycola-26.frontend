import React from 'react';

import Page from '@components/page/Page.tsx';

import Footer from '../../components/footer/Footer.tsx';
import Header from './components/header/Header.tsx';
import Prizes from './components/prizes/Prizes.tsx';
import Products5ka from './components/products/Products.tsx';
import Steps from './components/steps/Steps.tsx';

import pageInit from './methods/pageInit.ts';

import FiveKaI from './types.ts';

class FiveKa extends Page<FiveKaI['props'], FiveKaI['state']> implements FiveKaI {
    parent: FiveKaI['parent'];

    constructor(props: FiveKaI['props']) {
        super(props);
        this.state = {
            isInit: false,
        };

        this.parent = React.createRef();
    }

    mode = '5ka' as const;

    pageName = '5ka';

    pageInit = pageInit;

    render() {
        const { content } = this.state;

        return this.renderPage({
            render: () =>
                content ? (
                    <>
                        <Header />
                        <Steps />
                        <Prizes />
                        <Products5ka content={content} />
                        <Footer mode="5ka" />
                    </>
                ) : null,
        });
    }
}

export default FiveKa;
