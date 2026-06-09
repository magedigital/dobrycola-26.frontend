import React from 'react';

import Popup from '@components/popup/Popup.tsx';

import YandexLavkaI from './types.ts';

import renderContent from './renders/renderContent.tsx';

class YandexLavka
    extends Popup<YandexLavkaI['props'], YandexLavkaI['state']>
    implements YandexLavkaI
{
    parent: YandexLavkaI['parent'];

    constructor(props: YandexLavkaI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
    }

    name = 'yandexLavkaPopup' as const;

    renderContent = renderContent;

    render() {
        return this.renderPopup({
            render: () => <>{this.renderContent({})}</>,
            withTopBar: false,
            className: '_overlay',
        });
    }
}

export default YandexLavka;
