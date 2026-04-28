import React from 'react';

import Popup from '@components/popup/Popup.tsx';

import LentaI from './types.ts';

import renderContent from './renders/renderContent.tsx';

class Lenta extends Popup<LentaI['props'], LentaI['state']> implements LentaI {
    parent: LentaI['parent'];

    constructor(props: LentaI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
    }

    name = 'lentaPopup' as const;

    renderContent = renderContent;

    render() {
        return this.renderPopup({
            render: () => <>{this.renderContent({})}</>,
            withTopBar: false,
            className: '_overlay',
        });
    }
}

export default Lenta;
