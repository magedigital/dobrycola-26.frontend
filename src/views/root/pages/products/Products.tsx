import React from 'react';

import { getLocalContent } from '@api/requests/content.ts';
import Page from '@components/page/Page.tsx';
import { StoreT, WithStore } from '@store/store.tsx';

import Header from './components/header/Header.tsx';

import getContent from './methods/getContent.ts';
import pageInit from './methods/pageInit.ts';

import ProductsI from './types.ts';

class Products extends Page<ProductsI['props'], ProductsI['state']> implements ProductsI {
    parent: ProductsI['parent'];

    constructor(props: ProductsI['props']) {
        super(props);
        this.state = {
            content: getLocalContent('products'),
            isInit: false,
        };

        this.parent = React.createRef();
    }

    mode = 'inner' as const;

    pageInit = pageInit;

    getContent = getContent;

    render() {
        const { content } = this.state;
        const { authUser } = this.props;

        return this.renderPage({
            render: () =>
                authUser && content ? (
                    <>
                        <Header content={content} authUser={authUser} />
                    </>
                ) : null,
            className: '_inner',
        });
    }
}

const mapStore = (store: StoreT) => ({
    authUser: store.authUser,
});

export default WithStore(Products, mapStore);
