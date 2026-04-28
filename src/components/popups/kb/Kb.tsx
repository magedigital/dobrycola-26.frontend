import React from 'react';

import Popup from '@components/popup/Popup.tsx';

import KbI from './types.ts';

import renderContent from './renders/renderContent.tsx';

class Kb extends Popup<KbI['props'], KbI['state']> implements KbI {
    parent: KbI['parent'];

    constructor(props: KbI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
    }

    name = 'kbPopup' as const;

    renderContent = renderContent;

    render() {
        return this.renderPopup({
            render: () => <>{this.renderContent({})}</>,
            withTopBar: false,
            className: '_overlay',
        });
    }
}

export default Kb;
