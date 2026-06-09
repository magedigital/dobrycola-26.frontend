import React from 'react';

import Popup from '@components/popup/Popup.tsx';

import YandexEdaI from './types.ts';

import renderContent from './renders/renderContent.tsx';

class YandexEda extends Popup<YandexEdaI['props'], YandexEdaI['state']> implements YandexEdaI {
    parent: YandexEdaI['parent'];

    constructor(props: YandexEdaI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
    }

    name = 'yandexEdaPopup' as const;

    renderContent = renderContent;

    render() {
        return this.renderPopup({
            render: () => <>{this.renderContent({})}</>,
            withTopBar: false,
            className: '_overlay',
        });
    }
}

export default YandexEda;
