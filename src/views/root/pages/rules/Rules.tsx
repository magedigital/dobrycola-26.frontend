import React from 'react';

import { getLocalContent } from '@api/requests/content.ts';
import Page from '@components/page/Page.tsx';
import { StoreT, WithStore } from '@store/store.tsx';

import Header from './components/header/Header.tsx';

import getContent from './methods/getContent.ts';
import pageInit from './methods/pageInit.ts';

import RulesI from './types.ts';

class Rules extends Page<RulesI['props'], RulesI['state']> implements RulesI {
    parent: RulesI['parent'];

    constructor(props: RulesI['props']) {
        super(props);
        const content = getLocalContent('main');
        this.state = {
            content,
            isInit: !!content,
        };

        this.parent = React.createRef();
    }

    pageName = 'rules';
    mode = 'inner' as const;

    pageInit = pageInit;

    getContent = getContent;

    render() {
        const { content } = this.state;

        return this.renderPage({
            render: () =>
                content ? (
                    <>
                        <Header content={content} />
                    </>
                ) : null,
            className: '_inner',
        });
    }
}

const mapStore = (store: StoreT) => ({
    authUser: store.authUser,
});

export default WithStore(Rules, mapStore);
