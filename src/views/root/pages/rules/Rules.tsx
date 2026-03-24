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
        this.state = {
            content: getLocalContent('main'),
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

export default WithStore(Rules, mapStore);
