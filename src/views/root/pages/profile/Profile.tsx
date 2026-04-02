import React from 'react';

import { getLocalContent } from '@api/requests/content.ts';
import Page from '@components/page/Page.tsx';
import { StoreT, WithStore } from '@store/store.tsx';

import copyHandler from './methods/copyHandler.ts';
import getContent from './methods/getContent.ts';
import init from './methods/init.ts';
import setPagesRenderKey from './methods/setPagesRenderKey.ts';

import ProfileI from './types.ts';

import renderContent from './renders/renderContent.tsx';
import renderHead from './renders/renderHead.tsx';
import renderMain from './renders/renderMain.tsx';
import renderPages from './renders/renderPages.tsx';
import requestLogout from './requests/requestLogout.ts';

class Profile extends Page<ProfileI['props'], ProfileI['state']> implements ProfileI {
    parent: ProfileI['parent'];

    constructor(props: ProfileI['props']) {
        super(props);

        const content = getLocalContent('profile');

        this.state = {
            isInit: false,
            content,
        };

        this.getContent = this.getContent.bind(this);

        this.parent = React.createRef();
    }

    mode = 'inner' as const;

    init = init;

    setPagesRenderKey = setPagesRenderKey;
    copyHandler = copyHandler;

    requestLogout = requestLogout;
    getContent = getContent;

    renderContent = renderContent;
    renderHead = renderHead;
    renderMain = renderMain;
    renderPages = renderPages;

    render() {
        const { content, data } = this.state;
        const { authUser } = this.props;

        return this.renderPage({
            render: () => (authUser && content && data ? <>{this.renderContent()}</> : null),
            className: '_profile',
        });
    }
}

const mapStore = (store: StoreT) => ({
    authUser: store.authUser,
});

export default WithStore(Profile, mapStore);
