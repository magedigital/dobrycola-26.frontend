import React from 'react';

import { getLocalContent } from '@api/requests/content.ts';
import Page from '@components/page/Page.tsx';
import { StoreT, WithStore } from '@store/store.tsx';

import changePropsCb from './methods/changePropsCb.ts';
import scrollToTab from './methods/scrollToTab.ts';
import setPagesRenderKey from './methods/setPagesRenderKey.ts';

import PrizesI from './types.ts';

import renderHead from './renders/renderHead.tsx';
import renderPages from './renders/renderPages.tsx';

class Prizes extends Page<PrizesI['props'], PrizesI['state']> implements PrizesI {
    parent: PrizesI['parent'];

    constructor(props: PrizesI['props']) {
        super(props);
        const content = getLocalContent('main');

        this.state = {
            content,
            isInit: !!content,
        };

        this.parent = React.createRef();
    }

    mode = 'inner' as const;
    changingProps = ['mainContent'];

    changePropsCb = changePropsCb;

    setPagesRenderKey = setPagesRenderKey;
    scrollToTab = scrollToTab;

    renderHead = renderHead;
    renderPages = renderPages;

    render() {
        const { mainContent } = this.props;

        return this.renderPage({
            render: () =>
                mainContent ? (
                    <>
                        <div className="profile _FULL_W _prizes">
                            {this.renderHead()}
                            {this.renderPages()}
                        </div>
                    </>
                ) : null,
            className: '_profile _prizes',
        });
    }
}

const mapStore = (s: StoreT) => ({
    mainContent: s.mainContent,
});

export default WithStore(Prizes, mapStore);
