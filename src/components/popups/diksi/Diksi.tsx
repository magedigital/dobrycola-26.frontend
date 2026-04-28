import React from 'react';

import Popup from '@components/popup/Popup.tsx';

import DiksiI from './types.ts';

import renderContent from './renders/renderContent.tsx';

class Diksi extends Popup<DiksiI['props'], DiksiI['state']> implements DiksiI {
    parent: DiksiI['parent'];

    constructor(props: DiksiI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
    }

    name = 'diksiPopup' as const;

    renderContent = renderContent;

    render() {
        return this.renderPopup({
            render: () => <>{this.renderContent({})}</>,
            withTopBar: false,
            className: '_overlay',
        });
    }
}

export default Diksi;
